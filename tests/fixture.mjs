// validate / crosscheck テスト用の最小データと、対応する元 md 断片
const choiceExplain = (oks, texts) => oks.map((ok, i) => ({ ok, text: texts[i] }));

export const MD = [
  '## 第1章 テスト（ドメイン1）',
  '',
  '### 1. 仕組みの説明',
  '#### 見出しA',
  '- **太字**の項目 3つ',
  '  - 子 【頻出】項目 90日',
  '### 4. ○×問題と解説',
  '- Q1. 文章1。 <!-- markmap: fold -->',
  '  - 答え：○',
  '  - 解説：**理由**1',
  '### 5. シナリオ問題と解説',
  '- 問1. 【単一選択】問題文。',
  '  - 続き行',
  '  - A. 選択肢あ',
  '  - B. 選択肢い',
  '  - C. 選択肢う',
  '  - D. 選択肢え',
  '  - 答えと解説 <!-- markmap: fold -->',
  '    - 答え：**B**',
  '    - A：× 理由あ',
  '    - B：○ 理由い',
  '    - C：× 理由う',
  '    - D：× 理由え',
  '    - 解き方のコツ：コツ',
  '- 問2. 【複数選択（2つ選択）】複数問題。',
  '  - A. a1',
  '  - B. b1',
  '  - C. c1',
  '  - D. d1',
  '  - E. e1',
  '  - 答えと解説 <!-- markmap: fold -->',
  '    - 答え：**A と C**',
  '    - A：○ ra',
  '    - B：× rb',
  '    - C：○ rc',
  '    - D：× rd',
  '    - E：× re',
  '    - 解き方のコツ：コツ2',
  '      - 補足の子',
].join('\n');

export function makeData() {
  const page = {
    id: 'c01-l01-p01', title: '見出しA',
    html: '<ul><li><b class="key">太字</b>の項目 3つ<ul><li>子 <span class="badge b-freq">頻出</span>項目 90日</li></ul></li></ul>',
    oxIds: ['c01-ox-01'], src: [5, 6],
  };
  return {
    chapters: [{
      no: 1, title: 'テスト', domainNote: 'ドメイン1：セキュア', src: [1, 39],
      lessons: [{ id: 'c01-l01', title: 'L1', pages: [page] }],
      ox: [{ id: 'c01-ox-01', text: '文章1。', answer: true, explain: '<b class="key">理由</b>1', src: 8 }],
      mc: [
        {
          id: 'c01-mc-01', stem: '問題文。<br>続き行', choices: ['選択肢あ', '選択肢い', '選択肢う', '選択肢え'],
          answer: ['B'], selectCount: 1, domain: 1,
          choiceExplain: choiceExplain([false, true, false, false], ['理由あ', '理由い', '理由う', '理由え']),
          tip: 'コツ', src: 12,
        },
        {
          id: 'c01-mc-02', stem: '複数問題。', choices: ['a1', 'b1', 'c1', 'd1', 'e1'],
          answer: ['A', 'C'], selectCount: 2, domain: 1,
          choiceExplain: choiceExplain([true, false, true, false, false], ['ra', 'rb', 'rc', 'rd', 're']),
          tip: 'コツ2 補足の子', src: 25,
        },
      ],
    }],
  };
}

export function mutated(fn) {
  const d = makeData();
  fn(d.chapters[0]);
  return d;
}
