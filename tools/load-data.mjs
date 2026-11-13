// app/data.js をブラウザと同じ方法（window.DATA へ push）で Node 上に読み込む。
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DEFAULT_APP_DIR = path.join(ROOT, 'app');
export const DEFAULT_MD = path.join(ROOT, 'docs', 'saa-c03.md');

export function listDataFiles(dir = DEFAULT_APP_DIR) {
  if (!fs.existsSync(dir)) return [];
  return fs.existsSync(path.join(dir, 'data.js')) ? ['data.js'] : [];
}

// 戻り値: { chapters, files:[{name, lines}] }。window 以外に触れる/構文エラーのファイルは例外。
export function loadDataWithFiles(dir = DEFAULT_APP_DIR) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  const files = listDataFiles(dir).map((name) => {
    const code = fs.readFileSync(path.join(dir, name), 'utf8');
    try {
      vm.runInContext(code, sandbox, { filename: name });
    } catch (e) {
      throw new Error(`${name} の読み込みに失敗: ${e.message}`);
    }
    return { name, lines: code.split('\n').length };
  });
  const data = sandbox.window.DATA || { chapters: [] };
  return { chapters: data.chapters, files };
}

export function loadData(dir = DEFAULT_APP_DIR) {
  const { chapters } = loadDataWithFiles(dir);
  return { chapters };
}
