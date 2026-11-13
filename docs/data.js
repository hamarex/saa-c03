(window.DATA = window.DATA || { chapters: [] }).chapters.push({
  no: 1,
  title: "ID・アクセス管理とガバナンス",
  domainNote: "ドメイン1：セキュアなアーキテクチャ",
  src: [45,706],
  lessons: [
    { id: "c01-l01", title: "IAMの基本（共有責任・ユーザー・ロール・ポリシー・条件キー）", pages: [
      {
        id: "c01-l01-p01",
        title: "全体像：「誰が」「何に」「何をしてよいか」 ①",
        html: "<ul><li><b class=\"key\">認証（Authentication）</b>＝あなたは誰か／<b class=\"key\">認可（Authorization）</b>＝何をしてよいか</li><li>AWSのアクセス制御は「<b class=\"key\">プリンシパル</b>（誰）」が「<b class=\"key\">アクション</b>（何を）」を「<b class=\"key\">リソース</b>（何に）」に行う形<ul><li>プリンシパル：IAMユーザー、IAMロール（のセッション）、ルートユーザー、フェデレーションユーザー、AWSサービス</li></ul></li></ul>",
        oxIds: [],
        src: [50,52]
      },
      {
        id: "c01-l01-p02",
        title: "全体像：「誰が」「何に」「何をしてよいか」 ②",
        html: "<ul><li>層構造で考える<ul><li><b class=\"key\">組織レベル</b>：AWS Organizations の SCP / RCP（権限の上限）</li><li><b class=\"key\">アカウントレベル</b>：IAM（ユーザー・ロール・ポリシー）</li><li><b class=\"key\">リソースレベル</b>：バケットポリシー、KMSキーポリシーなど</li><li><b class=\"key\">監査・可視化</b>：CloudTrail（誰が何をした）、Config（設定がどう変わった）、Access Analyzer（外部公開）</li></ul></li></ul>",
        oxIds: [],
        src: [53,57]
      },
      {
        id: "c01-l01-p03",
        title: "全体像：「誰が」「何に」「何をしてよいか」 ③",
        html: "<ul><li>SAA-C03 の鉄則：<b class=\"key\">最小権限（Least Privilege）</b>、<b class=\"key\">一時的な認証情報（ロール）を優先</b>、<b class=\"key\">長期アクセスキーは避ける</b></li></ul>",
        oxIds: [],
        src: [58,59]
      },
      {
        id: "c01-l01-p04",
        title: "共有責任モデル ①",
        html: "<ul><li><b class=\"key\">AWSの責任＝クラウド「の」セキュリティ（Security OF the Cloud）</b><ul><li>データセンターの物理セキュリティ、ハードウェア、ネットワーク基盤、ハイパーバイザー</li><li>マネージドサービスの基盤OS・ソフトウェアのパッチ（例：RDSのOS・DBエンジンのパッチ適用）</li></ul></li><li><b class=\"key\">顧客の責任＝クラウド「における」セキュリティ（Security IN the Cloud）</b><ul><li>データ、IAM（誰に何を許可するか）、暗号化の有効化、セキュリティグループ・NACLの設定</li><li><b class=\"key\">EC2のゲストOSのパッチ</b>、アプリケーション、ファイアウォール設定</li></ul></li><li>サービスの種類で境界が動く<ul><li><b class=\"key\">IaaS（EC2）</b>：顧客の責任が広い（OS以上はすべて顧客）</li><li><b class=\"key\">マネージド（RDS）</b>：OS・エンジンはAWS、DBユーザー・SG・暗号化の設定は顧客</li><li><b class=\"key\">抽象化サービス（S3、Lambda、DynamoDB）</b>：顧客はデータ・アクセス権・暗号化設定に集中</li></ul></li></ul>",
        oxIds: ["c01-ox-22","c01-ox-23"],
        src: [61,70]
      },
      {
        id: "c01-l01-p05",
        title: "共有責任モデル ②",
        html: "<ul><li><b class=\"key\">共有管理（Shared Controls）</b>：パッチ管理、構成管理、意識向上・トレーニング<ul><li>例：AWSはインフラのパッチ、顧客はゲストOS・アプリのパッチ</li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「S3バケットの公開設定ミス」は<b class=\"key\">顧客の責任</b>。「EC2のゲストOSパッチ」も<b class=\"key\">顧客</b></span></li></ul>",
        oxIds: [],
        src: [71,74]
      },
      {
        id: "c01-l01-p06",
        title: "AWSアカウントのルートユーザー ①",
        html: "<ul><li>アカウント作成時のメールアドレスでサインインする<b class=\"key\">全権限ユーザー</b>（IAMポリシーで制限不可）<ul><li>ただし Organizations のメンバーアカウントでは <b class=\"key\">SCP の制限を受ける</b></li></ul></li><li>ベストプラクティス<ul><li><b class=\"key\">MFAを必ず有効化</b>、<b class=\"key\">ルートのアクセスキーは作らない（あれば削除）</b></li><li>日常業務には使わず、管理用のIAM IDまたは IAM Identity Center のユーザーを使う</li></ul></li></ul>",
        oxIds: [],
        src: [76,80]
      },
      {
        id: "c01-l01-p07",
        title: "AWSアカウントのルートユーザー ②",
        html: "<ul><li>ルートでしかできない作業の例<ul><li>アカウントの<b class=\"key\">解約</b>、アカウント設定（連絡先・メール等）の変更、<b class=\"key\">サポートプランの変更</b></li><li>誤ったポリシーで全員締め出されたS3バケットポリシーの削除、など</li></ul></li><li>Organizations の<b class=\"key\">ルートアクセスの一元管理</b>機能でメンバーアカウントのルート認証情報を削除可能</li></ul>",
        oxIds: [],
        src: [81,85]
      },
      {
        id: "c01-l01-p08",
        title: "IAMユーザー・グループ ①",
        html: "<ul><li><b class=\"key\">IAMユーザー</b>：人またはアプリを表す<b class=\"key\">長期</b>の認証情報（パスワード、アクセスキー）を持つID<ul><li>コンソール用：<b class=\"key\">パスワード</b>（＋MFA）／CLI・SDK用：<b class=\"key\">アクセスキー</b>（アクセスキーID＋シークレット）</li><li>1ユーザーにつきアクセスキーは<b class=\"key\">最大2つ</b>（ローテーション用）</li></ul></li></ul>",
        oxIds: [],
        src: [87,89]
      },
      {
        id: "c01-l01-p09",
        title: "IAMユーザー・グループ ②",
        html: "<ul><li><b class=\"key\">IAMグループ</b>：ユーザーの集合。グループにポリシーを付けて権限をまとめて管理<ul><li>グループの<b class=\"key\">入れ子（ネスト）は不可</b></li><li>グループは<b class=\"key\">プリンシパルではない</b> → リソースベースポリシーで指定できない、ロールも引き受けられない</li></ul></li><li><span class=\"badge b-freq\">頻出</span><b class=\"key\">アクセスキーは非推奨の方向</b><ul><li>AWS上のワークロード → <b class=\"key\">IAMロール</b>（EC2はインスタンスプロファイル、Lambdaは実行ロール）</li><li>オンプレのサーバー → <b class=\"key\">IAM Roles Anywhere</b>（X.509証明書で一時認証情報）</li></ul></li></ul>",
        oxIds: ["c01-ox-03"],
        src: [90,95]
      },
      {
        id: "c01-l01-p10",
        title: "IAMユーザー・グループ ③",
        html: "<ul><li>人間 → <b class=\"key\">IAM Identity Center</b>（一時認証情報）、CLIも <code>aws sso login</code> で可能<ul><li>どうしても使う場合：定期ローテーション、<b class=\"key\">認証情報レポート</b>・<b class=\"key\">最終アクセス情報</b>で棚卸し</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>アプリのコードや AMI・EC2 内に<b class=\"key\">アクセスキーを埋め込む</b>選択肢は常に×</span></li></ul></li></ul>",
        oxIds: [],
        src: [96,99]
      },
      {
        id: "c01-l01-p11",
        title: "IAMロール ①",
        html: "<ul><li><b class=\"key\">特定の人に紐付かない</b>、引き受け（AssumeRole）可能なID。<b class=\"key\">一時的な認証情報</b>を発行</li><li>2つのポリシーで構成<ul><li><b class=\"key\">信頼ポリシー（Trust Policy）</b>：<b class=\"key\">誰が</b>このロールを引き受けられるか（リソースベースポリシーの一種）</li><li><b class=\"key\">権限ポリシー（Permissions Policy）</b>：引き受けた後に<b class=\"key\">何ができるか</b></li></ul></li></ul>",
        oxIds: ["c01-ox-10"],
        src: [101,104]
      },
      {
        id: "c01-l01-p12",
        title: "IAMロール ②",
        html: "<ul><li>主な用途<ul><li><b class=\"key\">AWSサービスへの権限付与</b>：EC2、Lambda、ECSタスクロールなど</li><li><b class=\"key\">クロスアカウントアクセス</b>：アカウントBのユーザーがアカウントAのロールを引き受ける</li><li><b class=\"key\">フェデレーション</b>：外部IdPのユーザーにAWS権限を与える</li></ul></li><li><b class=\"key\">サービスリンクロール</b>：AWSサービスが自動作成・所有する事前定義ロール（SCPの影響を受けない）</li></ul>",
        oxIds: [],
        src: [105,109]
      },
      {
        id: "c01-l01-p13",
        title: "IAMロール ③",
        html: "<ul><li><b class=\"key\">インスタンスプロファイル</b>：EC2にロールを渡すための<b class=\"key\">入れ物</b><ul><li>1つのインスタンスプロファイルに含められるロールは<b class=\"key\">1つ</b></li><li>EC2上のアプリは<b class=\"key\">インスタンスメタデータ（IMDS）</b>から一時認証情報を自動取得・自動更新</li><li><b class=\"key\">IMDSv2</b>（セッショントークン必須）を推奨・強制できる</li><li>実行中のEC2にもロールの付け替えが可能（再起動不要）</li></ul></li><li><b class=\"key\">iam:PassRole</b>：ユーザーがサービスにロールを渡すための権限（権限昇格防止のための制御点）</li></ul>",
        oxIds: ["c01-ox-04"],
        src: [110,116]
      },
      {
        id: "c01-l01-p14",
        title: "IAMポリシーの種類 ①",
        html: "<ul><li><b class=\"key\">アイデンティティベースポリシー</b>：ユーザー・グループ・ロールに付ける<ul><li><b class=\"key\">AWS管理ポリシー</b>：AWSが作成・更新（例：ReadOnlyAccess）。編集不可</li><li><b class=\"key\">カスタマー管理ポリシー</b>：自分で作成。複数IDで再利用、<b class=\"key\">バージョン管理（最大5版）</b>、ロールバック可</li><li><b class=\"key\">インラインポリシー</b>：特定の1IDに埋め込み。IDを削除すると一緒に消える（1対1の厳密な関係向け）</li></ul></li></ul>",
        oxIds: [],
        src: [118,121]
      },
      {
        id: "c01-l01-p15",
        title: "IAMポリシーの種類 ②",
        html: "<ul><li><b class=\"key\">リソースベースポリシー</b>：リソース側に付ける。<b class=\"key\">Principal 要素</b>で「誰が」を指定<ul><li>例：<b class=\"key\">S3バケットポリシー</b>、SQSキューポリシー、SNSトピックポリシー、<b class=\"key\">KMSキーポリシー</b></li><li>例：Lambda関数のリソースポリシー、ECRリポジトリポリシー、Secrets Manager、API Gateway</li><li>ロールの<b class=\"key\">信頼ポリシー</b>もリソースベースポリシー</li></ul></li></ul>",
        oxIds: [],
        src: [122,125]
      },
      {
        id: "c01-l01-p16",
        title: "IAMポリシーの種類 ③",
        html: "<ul><li><b class=\"key\">権限境界（Permissions Boundary）</b>：ユーザー・ロールが持てる権限の<b class=\"key\">上限</b>を設定</li><li><b class=\"key\">SCP（サービスコントロールポリシー）</b>：Organizationsで<b class=\"key\">アカウント内のIAMプリンシパル</b>の権限上限</li><li><b class=\"key\">RCP（リソースコントロールポリシー）</b>：Organizationsで<b class=\"key\">リソース側</b>の権限上限（S3・KMS・STS・SQS・Secrets Manager等）</li></ul>",
        oxIds: [],
        src: [126,128]
      },
      {
        id: "c01-l01-p17",
        title: "IAMポリシーの種類 ④",
        html: "<ul><li><b class=\"key\">セッションポリシー</b>：AssumeRole等の呼び出し時に渡し、そのセッションの権限をさらに絞る</li><li><b class=\"key\">ACL</b>：S3（旧方式）など。JSONではない。新規は<b class=\"key\">ACL無効（バケット所有者強制）が推奨</b></li><li>ポリシーの構成要素：<b class=\"key\">Effect / Action / Resource / Principal / Condition</b>（＋Sid、NotAction等）</li><li><span class=\"badge b-cmp\">比較</span>「許可を与える」のはアイデンティティ／リソースベースポリシーだけ<ul><li><b class=\"key\">権限境界・SCP・RCP・セッションポリシーは上限を決めるだけで、許可は与えない</b></li></ul></li></ul>",
        oxIds: [],
        src: [129,134]
      },
      {
        id: "c01-l01-p18",
        title: "ポリシー評価ロジック（最重要） ①",
        html: "<ul><li>評価の3原則<ul><li>①デフォルトは<b class=\"key\">暗黙的拒否（Implicit Deny）</b>：何も許可されていなければ拒否</li><li>②どこかに<b class=\"key\">明示的Allow</b>があれば許可（ただし③が優先）</li><li>③<b class=\"key\">明示的Deny（Explicit Deny）はすべてに優先</b>：どこか1つにでもDenyがあれば拒否</li></ul></li></ul>",
        oxIds: ["c01-ox-01"],
        src: [136,139]
      },
      {
        id: "c01-l01-p19",
        title: "ポリシー評価ロジック（最重要） ②",
        html: "<ul><li>評価の流れ（同一アカウント内）<ul><li>どのポリシーにでも<b class=\"key\">明示的Deny</b> → 拒否</li><li><b class=\"key\">SCP / RCP</b> で許可されていない → 拒否</li><li><b class=\"key\">リソースベースポリシー</b>で許可 → 許可（同一アカウントなら原則これだけで可）</li><li><b class=\"key\">アイデンティティベースポリシー</b>で許可されていない → 拒否</li><li><b class=\"key\">権限境界</b>で許可されていない → 拒否</li><li><b class=\"key\">セッションポリシー</b>で許可されていない → 拒否</li></ul></li></ul>",
        oxIds: [],
        src: [140,146]
      },
      {
        id: "c01-l01-p20",
        title: "ポリシー評価ロジック（最重要） ③",
        html: "<ul><li>有効な権限＝アイデンティティポリシー <b class=\"key\">∩</b> 権限境界 <b class=\"key\">∩</b> SCP <b class=\"key\">∩</b> セッションポリシー</li><li><b class=\"key\">クロスアカウント</b>の場合：<b class=\"key\">両方のアカウントで許可</b>が必要<ul><li>呼び出し元アカウントのアイデンティティポリシー <b class=\"key\">かつ</b> 相手側のリソースベースポリシー（または信頼ポリシー）</li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「AdministratorAccess を付けたのに操作できない」→ SCP・権限境界・明示的Denyを疑う</span></li></ul>",
        oxIds: [],
        src: [147,151]
      },
      {
        id: "c01-l01-p21",
        title: "権限境界（Permissions Boundary）",
        html: "<ul><li>IAMユーザー・ロールに設定する<b class=\"key\">最大権限のガードレール</b>（グループには設定不可）</li><li>典型例：<b class=\"key\">開発者に IAM ロール作成を委任</b>したいが、自分より強い権限のロールは作らせたくない<ul><li>「ロール作成時に特定の権限境界の付与を必須とする」条件（<code>iam:PermissionsBoundary</code>）を付ける</li></ul></li><li><span class=\"badge b-cmp\">比較</span>権限境界＝<b class=\"key\">アカウント内の個々のID</b>単位／SCP＝<b class=\"key\">アカウント・OU</b>単位</li></ul>",
        oxIds: ["c01-ox-06"],
        src: [153,157]
      },
      {
        id: "c01-l01-p22",
        title: "条件キー（Condition） ①",
        html: "<ul><li>Condition 要素で「どんなときに」許可・拒否するかを細かく指定</li><li>グローバル条件キーの頻出例<ul><li><b class=\"key\">aws:SourceIp</b>：送信元IPアドレス範囲で制限（パブリックIPが対象。VPCエンドポイント経由では使えない）</li><li><b class=\"key\">aws:SourceVpce / aws:SourceVpc</b>：特定のVPCエンドポイント／VPC経由のアクセスに限定</li><li><b class=\"key\">aws:MultiFactorAuthPresent</b>：MFA認証済みかどうか</li><li><b class=\"key\">aws:RequestedRegion</b>：利用リージョンを制限（SCPでリージョン制限によく使う）</li><li><b class=\"key\">aws:PrincipalOrgID</b>：自組織（Organizations）内のプリンシパルだけ許可</li><li><b class=\"key\">aws:SecureTransport</b>：HTTPS（TLS）通信のみ許可（falseならDeny）</li></ul></li></ul>",
        oxIds: ["c01-ox-28"],
        src: [159,166]
      },
      {
        id: "c01-l01-p23",
        title: "条件キー（Condition） ②",
        html: "<ul><li><b class=\"key\">aws:PrincipalTag / aws:ResourceTag</b>：タグによる<b class=\"key\">ABAC（属性ベースアクセス制御）</b></li><li>サービス固有の例：<b class=\"key\">s3:x-amz-server-side-encryption</b>（暗号化ヘッダー必須）など</li><li><b class=\"key\">ABAC</b>：「プリンシパルのタグ＝リソースのタグなら許可」→ 人・リソースが増えてもポリシー修正不要</li></ul>",
        oxIds: [],
        src: [167,170]
      },
    ] },
    { id: "c01-l02", title: "一時認証とフェデレーション、組織管理（STS・Identity Center・Organizations・Cognito・Directory Service）", pages: [
      {
        id: "c01-l02-p01",
        title: "STS（Security Token Service） ①",
        html: "<ul><li><b class=\"key\">一時的な認証情報</b>（アクセスキーID・シークレット・<b class=\"key\">セッショントークン</b>）を発行するサービス</li></ul>",
        oxIds: [],
        src: [172,172]
      },
      {
        id: "c01-l02-p02",
        title: "STS（Security Token Service） ②",
        html: "<ul><li>主なAPI<ul><li><b class=\"key\">AssumeRole</b>：ロールを引き受ける（クロスアカウント・同一アカウント）</li><li><b class=\"key\">AssumeRoleWithSAML</b>：SAML 2.0 IdPで認証したユーザーにロールを付与</li><li><b class=\"key\">AssumeRoleWithWebIdentity</b>：OIDC/Web ID（Google等、EKSのIRSA、GitHub Actions）</li><li><b class=\"key\">GetSessionToken</b>：IAMユーザーが<b class=\"key\">MFA付きの一時認証情報</b>を取得</li><li><b class=\"key\">GetFederationToken</b>：フェデレーションユーザー用（現在はロール利用が主流）</li></ul></li></ul>",
        oxIds: [],
        src: [173,178]
      },
      {
        id: "c01-l02-p03",
        title: "STS（Security Token Service） ③",
        html: "<ul><li><b class=\"key\">外部ID（ExternalId）</b>：サードパーティにロールを使わせる際の「<b class=\"key\">混乱した代理（Confused Deputy）</b>」対策<ul><li>信頼ポリシーの条件で <code>sts:ExternalId</code> を必須にする</li></ul></li><li><b class=\"key\">ロールの連鎖（Role Chaining）</b>：ロールで別のロールを引き受けること。セッションは<b class=\"key\">最大1時間</b></li></ul>",
        oxIds: ["c01-ox-11"],
        src: [179,182]
      },
      {
        id: "c01-l02-p04",
        title: "IDフェデレーション ①",
        html: "<ul><li>外部のIDプロバイダー（IdP）で認証し、<b class=\"key\">IAMユーザーを作らずに</b>AWSへアクセスさせる</li><li><b class=\"key\">SAML 2.0 フェデレーション</b>：企業IdP（AD FS、Okta、Entra ID等）→ 従業員のSSO<ul><li>流れ：IdPで認証 → SAMLアサーション → <b class=\"key\">AssumeRoleWithSAML</b> → 一時認証情報</li></ul></li><li><b class=\"key\">OIDC / Web IDフェデレーション</b>：Google・Facebook・Amazon等のソーシャルIdP、OIDC IdP<ul><li>モバイル・Webアプリでは<b class=\"key\">直接使うより Amazon Cognito 経由が推奨</b></li><li>CI/CD：<b class=\"key\">GitHub Actions の OIDC</b> で長期アクセスキー不要</li></ul></li></ul>",
        oxIds: [],
        src: [184,189]
      },
      {
        id: "c01-l02-p05",
        title: "IDフェデレーション ②",
        html: "<ul><li><b class=\"key\">カスタムIDブローカー</b>：SAML非対応の社内ディレクトリ → 自作ブローカーがSTSを呼ぶ（古い方式）</li><li><span class=\"badge b-cmp\">比較</span>従業員（Workforce）→ <b class=\"key\">IAM Identity Center</b> ／ アプリの顧客（Customer）→ <b class=\"key\">Cognito</b></li></ul>",
        oxIds: [],
        src: [190,192]
      },
      {
        id: "c01-l02-p06",
        title: "IAM Identity Center（旧 AWS SSO） ①",
        html: "<ul><li><b class=\"key\">複数AWSアカウント</b>と業務アプリへの<b class=\"key\">シングルサインオン</b>を一元管理する推奨サービス</li><li><b class=\"key\">Organizations と統合</b>（組織インスタンス）し、全アカウントへのアクセスを中央管理</li><li><b class=\"key\">許可セット（Permission Set）</b>：権限のテンプレート。割り当て先アカウントにIAMロールとして自動展開</li></ul>",
        oxIds: [],
        src: [194,196]
      },
      {
        id: "c01-l02-p07",
        title: "IAM Identity Center（旧 AWS SSO） ②",
        html: "<ul><li>IDソース（いずれか1つ）<ul><li><b class=\"key\">Identity Center ディレクトリ</b>（組み込み）</li><li><b class=\"key\">Active Directory</b>（AWS Managed Microsoft AD、または AD Connector 経由の自社AD）</li><li><b class=\"key\">外部IdP</b>（Okta、Entra ID 等。<b class=\"key\">SAML 2.0</b>、ユーザー・グループ同期は <b class=\"key\">SCIM</b>）</li></ul></li><li>ユーザーはAWSアクセスポータルからアカウント・ロールを選択。CLIも一時認証情報で利用</li><li><span class=\"badge b-freq\">頻出</span>「多数のアカウントに、既存の社内IDで、一元的にSSO」→ <b class=\"key\">IAM Identity Center</b></li></ul>",
        oxIds: [],
        src: [197,203]
      },
      {
        id: "c01-l02-p08",
        title: "AWS Organizations ①",
        html: "<ul><li>複数AWSアカウントを<b class=\"key\">一元管理</b>するサービス</li></ul>",
        oxIds: [],
        src: [205,205]
      },
      {
        id: "c01-l02-p09",
        title: "AWS Organizations ②",
        html: "<ul><li>構成要素<ul><li><b class=\"key\">管理アカウント（Management Account）</b>：組織を作成したアカウント（旧マスターアカウント）。1つだけ</li><li><b class=\"key\">メンバーアカウント</b>：組織に属するアカウント（1アカウントは同時に<b class=\"key\">1組織のみ</b>）</li><li><b class=\"key\">ルート（Root）</b>と<b class=\"key\">OU（組織単位）</b>：アカウントを階層的にグループ化。OUは入れ子可（最大<b class=\"key\">5階層</b>）</li></ul></li></ul>",
        oxIds: [],
        src: [206,209]
      },
      {
        id: "c01-l02-p10",
        title: "AWS Organizations ③",
        html: "<ul><li>機能セット<ul><li><b class=\"key\">一括請求（Consolidated Billing）のみ</b>／<b class=\"key\">すべての機能（All Features）</b></li><li>SCPなどのポリシーは<b class=\"key\">すべての機能</b>モードが必要</li></ul></li><li><b class=\"key\">一括請求</b>のメリット<ul><li>請求書を1つに統合</li><li>使用量を合算して<b class=\"key\">ボリュームディスカウント</b>（S3の段階料金など）</li><li><b class=\"key\">リザーブドインスタンス・Savings Plans の割引を組織内で共有</b>（無効化も可能）</li></ul></li></ul>",
        oxIds: ["c01-ox-25"],
        src: [210,216]
      },
      {
        id: "c01-l02-p11",
        title: "AWS Organizations ④",
        html: "<ul><li><b class=\"key\">SCP（サービスコントロールポリシー）</b><ul><li>OU・アカウントに付けて、<b class=\"key\">IAMユーザー・ロール（ルートユーザー含む）</b>が使える権限の<b class=\"key\">上限</b>を決める</li><li><b class=\"key\">許可は与えない</b>（SCPでAllowしても、IAMポリシーで許可しなければ使えない）</li><li><b class=\"key\">管理アカウントには効かない</b> ／ <b class=\"key\">サービスリンクロールにも効かない</b></li><li>上位OUのSCPは配下すべてに継承。Denyは下位で上書きできない</li></ul></li></ul>",
        oxIds: ["c01-ox-08","c01-ox-09"],
        src: [217,221]
      },
      {
        id: "c01-l02-p12",
        title: "AWS Organizations ⑤",
        html: "<ul><li>戦略：<b class=\"key\">拒否リスト</b>（FullAWSAccess＋特定Deny）が一般的／<b class=\"key\">許可リスト</b>も可<ul><li>使用例：リージョン制限、CloudTrail停止禁止、特定インスタンスタイプ以外禁止、組織からの離脱禁止</li></ul></li><li><b class=\"key\">RCP（リソースコントロールポリシー）</b>：リソースへのアクセス上限。外部からのアクセスを組織全体で遮断</li><li>その他のポリシー：<b class=\"key\">タグポリシー</b>（タグ表記の統一）、<b class=\"key\">バックアップポリシー</b>、AIサービスのオプトアウト等</li></ul>",
        oxIds: [],
        src: [222,225]
      },
      {
        id: "c01-l02-p13",
        title: "AWS Organizations ⑥",
        html: "<ul><li><b class=\"key\">委任管理者（Delegated Administrator）</b><ul><li>管理アカウント以外のメンバーアカウントに、特定サービスの組織全体の管理を委任</li><li>例：GuardDuty、Security Hub、Config、IAM Access Analyzer、Firewall Manager 等</li><li>目的：<b class=\"key\">管理アカウントでの作業を最小化</b>（管理アカウントにはワークロードを置かない）</li></ul></li><li><b class=\"key\">組織の証跡（Organization Trail）</b>：CloudTrailで全メンバーアカウントのログを一括取得</li><li><span class=\"badge b-freq\">頻出</span>「全アカウントで特定操作を<b class=\"key\">確実に禁止</b>（管理者でも）」→ <b class=\"key\">SCP</b></li></ul>",
        oxIds: ["c01-ox-07"],
        src: [226,232]
      },
      {
        id: "c01-l02-p14",
        title: "AWS Control Tower ①",
        html: "<ul><li><b class=\"key\">ベストプラクティスに沿ったマルチアカウント環境（ランディングゾーン）を自動構築</b>するサービス<ul><li>内部で Organizations、IAM Identity Center、CloudTrail、Config、Service Catalog 等を使用</li></ul></li><li>自動作成される共有アカウント：<b class=\"key\">ログアーカイブ</b>アカウント、<b class=\"key\">監査（Audit）</b>アカウント</li><li><b class=\"key\">コントロール（旧ガードレール）</b><ul><li><b class=\"key\">予防的（Preventive）</b>：<b class=\"key\">SCP/RCP</b> で操作を禁止（例：ログアーカイブのバケット削除禁止）</li></ul></li></ul>",
        oxIds: [],
        src: [234,238]
      },
      {
        id: "c01-l02-p15",
        title: "AWS Control Tower ②",
        html: "<ul><li><b class=\"key\">検出的（Detective）</b>：<b class=\"key\">AWS Config ルール</b>で違反を検出（例：MFA未設定のルートを検出）<ul><li><b class=\"key\">プロアクティブ（Proactive）</b>：<b class=\"key\">CloudFormation Hooks</b> でデプロイ前に違反リソースをブロック</li><li>強度区分：必須（Mandatory）・強く推奨・選択的</li></ul></li><li><b class=\"key\">Account Factory</b>：ガバナンス済みの新規アカウントを標準化された設定で払い出し<ul><li><b class=\"key\">AFT（Account Factory for Terraform）</b>で Terraform からも払い出し可能</li></ul></li><li>ダッシュボードで組織全体のコンプライアンス状況を可視化</li></ul>",
        oxIds: ["c01-ox-24"],
        src: [239,244]
      },
      {
        id: "c01-l02-p16",
        title: "AWS Control Tower ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Organizations＝<b class=\"key\">部品（SCP等）</b>／Control Tower＝<b class=\"key\">それらを組み合わせた自動セットアップ</b></li><li><span class=\"badge b-freq\">頻出</span>「新しいマルチアカウント環境を<b class=\"key\">最小の運用負荷</b>で、ベストプラクティスに沿って構築」→ Control Tower</li></ul>",
        oxIds: [],
        src: [245,247]
      },
      {
        id: "c01-l02-p17",
        title: "AWS RAM（Resource Access Manager） ①",
        html: "<ul><li>自分のAWSリソースを<b class=\"key\">他アカウント・OU・組織全体と共有</b>するサービス（コピーせず共有）</li><li>共有できる代表例<ul><li><b class=\"key\">VPCのサブネット（VPC共有）</b>：複数アカウントが同じVPCのサブネットにリソースを配置</li><li><b class=\"key\">Transit Gateway</b>、<b class=\"key\">Route 53 Resolver ルール</b>、プレフィックスリスト</li><li>License Manager の設定、Aurora DBクラスター、Capacity Reservations、Network Firewall ポリシー等</li></ul></li><li>Organizations 内で共有を有効化すると<b class=\"key\">招待の承諾なし</b>で共有可能</li></ul>",
        oxIds: ["c01-ox-21"],
        src: [249,254]
      },
      {
        id: "c01-l02-p18",
        title: "AWS RAM（Resource Access Manager） ②",
        html: "<ul><li><b class=\"key\">VPC共有</b>の要点<ul><li>所有者アカウントがVPC・サブネット・ルートテーブル・NACL・ゲートウェイを管理</li><li>参加者アカウントはそのサブネットにEC2・RDS等を作成（<b class=\"key\">他の参加者のリソースは変更不可</b>）</li><li>VPC数・ピアリングを減らし、IPアドレスを効率利用</li></ul></li><li><span class=\"badge b-cmp\">比較</span>RAM＝<b class=\"key\">リソースそのものを共有</b>／クロスアカウントロール＝<b class=\"key\">相手のアカウントで操作する権限</b></li></ul>",
        oxIds: [],
        src: [255,260]
      },
      {
        id: "c01-l02-p19",
        title: "Amazon Cognito ①",
        html: "<ul><li><b class=\"key\">Webアプリ・モバイルアプリのエンドユーザー</b>の認証・認可（顧客向けID管理、CIAM）</li><li><b class=\"key\">ユーザープール（User Pool）</b>＝<b class=\"key\">認証（サインアップ・サインイン）</b>のためのユーザーディレクトリ<ul><li>サインアップ/サインイン、パスワードポリシー、<b class=\"key\">MFA</b>、メール・電話の検証、アカウント回復</li><li>ソーシャルIdP（Google、Facebook、Apple、Amazon）、<b class=\"key\">SAML / OIDC</b> IdP とのフェデレーション</li></ul></li></ul>",
        oxIds: [],
        src: [262,265]
      },
      {
        id: "c01-l02-p20",
        title: "Amazon Cognito ②",
        html: "<ul><li>認証後に <b class=\"key\">JWT（IDトークン・アクセストークン・リフレッシュトークン）</b>を発行<ul><li>マネージドログイン（旧ホストUI）、Lambdaトリガーで処理をカスタマイズ</li><li>連携：<b class=\"key\">API Gatewayのオーソライザー</b>、<b class=\"key\">ALBの認証アクション</b></li></ul></li></ul>",
        oxIds: [],
        src: [266,268]
      },
      {
        id: "c01-l02-p21",
        title: "Amazon Cognito ③",
        html: "<ul><li><b class=\"key\">IDプール（Identity Pool／フェデレーテッドアイデンティティ）</b>＝<b class=\"key\">AWS認証情報の発行</b><ul><li>認証済みID（ユーザープール、ソーシャル、SAML等）を<b class=\"key\">IAMロールの一時認証情報</b>に交換（STS）</li><li>アプリから<b class=\"key\">直接S3・DynamoDB等のAWSサービス</b>を呼べる</li><li><b class=\"key\">ゲスト（未認証）アクセス</b>も可能</li><li>ポリシー変数（<code>${cognito-identity.amazonaws.com:sub}</code>）でユーザーごとにS3プレフィックスを分離</li></ul></li></ul>",
        oxIds: ["c01-ox-12","c01-ox-13"],
        src: [269,273]
      },
      {
        id: "c01-l02-p22",
        title: "Amazon Cognito ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>ユーザープール＝「<b class=\"key\">あなたは誰か</b>（JWT）」／IDプール＝「<b class=\"key\">AWSで何ができるか</b>（IAM一時認証情報）」</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>数百万のアプリ利用者を<b class=\"key\">IAMユーザー</b>で作る選択肢は×（Cognitoを使う）</span></li></ul>",
        oxIds: [],
        src: [274,276]
      },
      {
        id: "c01-l02-p23",
        title: "AWS Directory Service ①",
        html: "<ul><li>AWS上で Microsoft Active Directory（AD）互換のディレクトリを使うためのサービス</li><li><b class=\"key\">AWS Managed Microsoft AD</b><ul><li>AWSがマネージドで運用する<b class=\"key\">本物のWindows Server AD</b>（2つのAZにドメインコントローラー）</li><li>オンプレADと<b class=\"key\">信頼関係（Trust）</b>を結べる（一方向・双方向）</li><li>AD対応ワークロードをAWS上で動かす：<b class=\"key\">RDS for SQL Server の Windows認証</b>、<b class=\"key\">FSx for Windows</b></li><li>Amazon WorkSpaces、IAM Identity Center、<b class=\"key\">RADIUS による MFA</b>、スキーマ拡張に対応</li><li><span class=\"badge b-freq\">頻出</span>「AWS上にADが必要」「オンプレADと信頼関係」「大規模」→ Managed Microsoft AD</li></ul></li></ul>",
        oxIds: ["c01-ox-15"],
        src: [278,284]
      },
      {
        id: "c01-l02-p24",
        title: "AWS Directory Service ②",
        html: "<ul><li><b class=\"key\">AD Connector</b><ul><li>オンプレADへ認証要求を<b class=\"key\">中継するプロキシ（ゲートウェイ）</b>。AWS側にユーザー情報を<b class=\"key\">保存しない</b></li><li>既存のオンプレADの資格情報で WorkSpaces・IAM Identity Center・コンソール等にサインイン</li><li>オンプレとの<b class=\"key\">VPN/Direct Connect が必須</b>。オンプレAD停止時は認証不可</li><li>信頼関係は結べない。キャッシュしない</li></ul></li></ul>",
        oxIds: ["c01-ox-14"],
        src: [285,289]
      },
      {
        id: "c01-l02-p25",
        title: "AWS Directory Service ③",
        html: "<ul><li><b class=\"key\">Simple AD</b><ul><li><b class=\"key\">Samba 4</b> ベースのAD互換ディレクトリ。低コスト・小規模向け</li><li>Small（約<b class=\"key\">500</b>ユーザー）／Large（約<b class=\"key\">5,000</b>ユーザー）</li><li><b class=\"key\">信頼関係・MFA・スキーマ拡張は非対応</b></li></ul></li></ul>",
        oxIds: [],
        src: [290,293]
      },
      {
        id: "c01-l02-p26",
        title: "AWS Directory Service ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>選び方<ul><li>既存オンプレADを<b class=\"key\">そのまま使い、AWSにデータを置きたくない</b> → <b class=\"key\">AD Connector</b></li><li>AWS上に<b class=\"key\">本格的なAD</b>が必要、または<b class=\"key\">信頼関係</b> → <b class=\"key\">Managed Microsoft AD</b></li></ul></li></ul>",
        oxIds: [],
        src: [294,296]
      },
      {
        id: "c01-l02-p27",
        title: "AWS Directory Service ⑤",
        html: "<ul><li>小規模で<b class=\"key\">安価な基本ディレクトリ</b>、オンプレ連携不要 → <b class=\"key\">Simple AD</b></li></ul>",
        oxIds: [],
        src: [297,298]
      },
    ] },
    { id: "c01-l03", title: "リソースベースポリシー・監査・MFA", pages: [
      {
        id: "c01-l03-p01",
        title: "リソースベースポリシー（S3バケットポリシーなど） ①",
        html: "<ul><li>リソースに直接付け、<b class=\"key\">Principal</b> で他アカウントや他サービスを指定できる</li></ul>",
        oxIds: [],
        src: [300,300]
      },
      {
        id: "c01-l03-p02",
        title: "リソースベースポリシー（S3バケットポリシーなど） ②",
        html: "<ul><li><b class=\"key\">S3バケットポリシー</b>の頻出パターン<ul><li><b class=\"key\">クロスアカウント</b>で別アカウントにバケットへのアクセスを許可</li><li><b class=\"key\">aws:SecureTransport = false を Deny</b> → HTTPS強制</li><li><b class=\"key\">aws:SourceVpce</b> で特定のVPCエンドポイント経由だけ許可</li><li><b class=\"key\">aws:PrincipalOrgID</b> で自組織のアカウントだけ許可</li><li><b class=\"key\">CloudFront の OAC（Origin Access Control）</b>からのみ読み取り許可</li></ul></li></ul>",
        oxIds: ["c01-ox-02"],
        src: [301,306]
      },
      {
        id: "c01-l03-p03",
        title: "リソースベースポリシー（S3バケットポリシーなど） ③",
        html: "<ul><li><b class=\"key\">S3ブロックパブリックアクセス</b>：アカウント／バケット単位で公開ポリシー・ACLを一括ブロック（新規バケットは既定で有効）</li><li><b class=\"key\">KMSキーポリシー</b>：KMSキーへのアクセスは<b class=\"key\">キーポリシーで許可が必須</b>（IAMだけでは不可）</li></ul>",
        oxIds: ["c01-ox-27"],
        src: [307,308]
      },
      {
        id: "c01-l03-p04",
        title: "リソースベースポリシー（S3バケットポリシーなど） ④",
        html: "<ul><li>クロスアカウントの2つの方法<ul><li><b class=\"key\">リソースベースポリシー</b>：相手のプリンシパルが<b class=\"key\">自分の権限を保持したまま</b>アクセス</li><li><b class=\"key\">クロスアカウントロール</b>：相手は<b class=\"key\">元の権限を一時的に手放して</b>ロールの権限で操作</li></ul></li></ul>",
        oxIds: [],
        src: [309,312]
      },
      {
        id: "c01-l03-p05",
        title: "AWS CloudTrail ①",
        html: "<ul><li><b class=\"key\">誰が・いつ・どこから・どのAPIを呼んだか</b>を記録する<b class=\"key\">監査ログ</b>サービス</li></ul>",
        oxIds: [],
        src: [314,314]
      },
      {
        id: "c01-l03-p06",
        title: "AWS CloudTrail ②",
        html: "<ul><li>イベントの種類<ul><li><b class=\"key\">管理イベント</b>：リソースの作成・変更・削除など（コントロールプレーン）。<b class=\"key\">デフォルトで記録</b></li><li><b class=\"key\">データイベント</b>：S3オブジェクトのGet/Put、Lambdaの Invoke など。<b class=\"key\">デフォルト無効・追加料金</b></li><li><b class=\"key\">Insights イベント</b>：API呼び出し量・エラー率の<b class=\"key\">異常</b>を検出</li></ul></li></ul>",
        oxIds: ["c01-ox-16"],
        src: [315,318]
      },
      {
        id: "c01-l03-p07",
        title: "AWS CloudTrail ③",
        html: "<ul><li><b class=\"key\">イベント履歴</b>：管理イベントを<b class=\"key\">過去90日間</b>、無料で閲覧・検索できる</li></ul>",
        oxIds: [],
        src: [319,319]
      },
      {
        id: "c01-l03-p08",
        title: "AWS CloudTrail ④",
        html: "<ul><li><b class=\"key\">証跡（Trail）</b>：90日を超えて保存するには証跡を作成し <b class=\"key\">S3</b> へ配信<ul><li><b class=\"key\">全リージョン</b>の証跡（推奨）、<b class=\"key\">組織の証跡</b>（Organizations全体）</li><li>CloudWatch Logs に送ってメトリクスフィルター・アラームを設定可能</li><li><b class=\"key\">ログファイルの整合性検証</b>：ダイジェストファイル（SHA-256）で改ざん検出</li><li>SSE-KMSで暗号化、S3 Object Lock で削除防止</li></ul></li></ul>",
        oxIds: ["c01-ox-17"],
        src: [320,324]
      },
      {
        id: "c01-l03-p09",
        title: "AWS CloudTrail ⑤",
        html: "<ul><li><b class=\"key\">CloudTrail Lake</b>：イベントを保存し<b class=\"key\">SQLでクエリ</b>できるマネージドデータレイク</li><li><span class=\"badge b-freq\">頻出</span>「誰がEC2を削除したか調べたい」「APIコールの監査」→ <b class=\"key\">CloudTrail</b></li></ul>",
        oxIds: [],
        src: [325,327]
      },
      {
        id: "c01-l03-p10",
        title: "AWS Config ①",
        html: "<ul><li>AWSリソースの<b class=\"key\">設定（構成）を記録し、変更履歴を追跡、ルールで準拠状況を評価</b>するサービス</li><li><b class=\"key\">構成項目（Configuration Item）</b>：ある時点のリソース設定のスナップショット<ul><li>「このセキュリティグループは先週どんな設定だったか」を<b class=\"key\">タイムライン</b>で確認できる</li></ul></li></ul>",
        oxIds: ["c01-ox-18"],
        src: [329,331]
      },
      {
        id: "c01-l03-p11",
        title: "AWS Config ②",
        html: "<ul><li><b class=\"key\">Config ルール</b><ul><li><b class=\"key\">マネージドルール</b>（例：<code>s3-bucket-public-read-prohibited</code>、<code>encrypted-volumes</code>、<code>restricted-ssh</code>）</li><li><b class=\"key\">カスタムルール</b>（Lambda、または Guard 言語）</li><li>トリガー：<b class=\"key\">設定変更時</b>／<b class=\"key\">定期実行</b></li></ul></li></ul>",
        oxIds: [],
        src: [332,335]
      },
      {
        id: "c01-l03-p12",
        title: "AWS Config ③",
        html: "<ul><li><b class=\"key\">修復（Remediation）</b>：<b class=\"key\">Systems Manager Automation</b> ドキュメントで非準拠リソースを自動修復</li><li><b class=\"key\">適合パック（Conformance Pack）</b>：ルールと修復アクションをまとめてデプロイ</li><li><b class=\"key\">アグリゲーター</b>：<b class=\"key\">複数アカウント・複数リージョン</b>の Config データを集約</li><li>Config は<b class=\"key\">リージョン単位</b>のサービス（リージョンごとに有効化が必要）</li></ul>",
        oxIds: ["c01-ox-19"],
        src: [336,339]
      },
      {
        id: "c01-l03-p13",
        title: "AWS Config ④",
        html: "<ul><li><b class=\"key\">予防はしない</b>：違反を<b class=\"key\">検出・記録</b>する（防止はSCP、即時修復はAutomation）</li><li><span class=\"badge b-cmp\">比較</span>CloudTrail＝「<b class=\"key\">誰が何をしたか</b>（API操作）」／Config＝「<b class=\"key\">リソースがどういう状態か</b>（設定）」</li></ul>",
        oxIds: [],
        src: [340,342]
      },
      {
        id: "c01-l03-p14",
        title: "IAM Access Analyzer ①",
        html: "<ul><li><b class=\"key\">外部アクセスの分析</b>：信頼ゾーン（<b class=\"key\">アカウント</b> または <b class=\"key\">組織</b>）の外からアクセスできるリソースを検出<ul><li>対象例：S3バケット、IAMロール（信頼ポリシー）、KMSキー、Lambda、SQS、Secrets Manager 等</li><li>自動推論（数理的な証明）でポリシーを解析し、<b class=\"key\">検出結果（Findings）</b>を出す</li></ul></li><li><b class=\"key\">未使用アクセスの分析</b>（有料）：使われていないロール・アクセスキー・パスワード・権限を検出</li><li><b class=\"key\">ポリシーの検証</b>：ポリシー作成時に文法エラー・セキュリティ警告・ベストプラクティスを提示</li></ul>",
        oxIds: [],
        src: [344,348]
      },
      {
        id: "c01-l03-p15",
        title: "IAM Access Analyzer ②",
        html: "<ul><li><b class=\"key\">ポリシーの生成</b>：<b class=\"key\">CloudTrailログ</b>から実際に使ったアクションを基に最小権限ポリシーを生成</li><li><b class=\"key\">カスタムポリシーチェック</b>：ポリシー変更が新たなアクセスを許可していないかをCI/CDで検証</li><li><span class=\"badge b-freq\">頻出</span>「<b class=\"key\">外部アカウントと共有されている</b>リソースを特定」「<b class=\"key\">最小権限ポリシー</b>を作りたい」→ Access Analyzer</li></ul>",
        oxIds: ["c01-ox-20"],
        src: [349,352]
      },
      {
        id: "c01-l03-p16",
        title: "MFA（多要素認証）",
        html: "<ul><li>「知っているもの（パスワード）＋持っているもの（デバイス）」で認証を強化</li><li>対応デバイス：<b class=\"key\">パスキー・FIDO2セキュリティキー</b>、<b class=\"key\">仮想MFAアプリ</b>（TOTP）、ハードウェアTOTPトークン</li><li>ルートユーザー・IAMユーザーに設定。1ユーザーに<b class=\"key\">最大8台</b>まで登録可能</li><li><b class=\"key\">MFA必須の強制</b>：ポリシーで <code>aws:MultiFactorAuthPresent</code> が false の場合 Deny</li><li><b class=\"key\">S3 MFA Delete</b>：バージョニング有効バケットで、バージョン削除・バージョニング無効化にMFAを要求<ul><li>有効化は<b class=\"key\">ルートユーザー</b>（バケット所有者）のみが可能</li></ul></li></ul>",
        oxIds: [],
        src: [354,360]
      },
    ] },
    { id: "c01-l04", title: "試験での出方と暗記数字", pages: [
      {
        id: "c01-l04-p01",
        title: "試験での出方 ①",
        html: "<ul><li><span class=\"badge b-freq\">頻出</span>キーワード → 正解サービスのパターン<ul><li>「EC2上のアプリがS3にアクセス」→ <b class=\"key\">IAMロール（インスタンスプロファイル）</b></li><li>「別アカウントのリソースにアクセス」→ <b class=\"key\">クロスアカウントIAMロール</b>（または リソースベースポリシー）</li><li>「サードパーティにアカウントへのアクセスを許可」→ <b class=\"key\">クロスアカウントロール＋外部ID</b></li><li>「複数アカウントへ社内IDでSSO」→ <b class=\"key\">IAM Identity Center</b>（＋外部IdP/AD）</li><li>「全アカウントで特定サービス・リージョンを禁止」→ <b class=\"key\">Organizations の SCP</b></li><li>「マルチアカウント環境を短期間・ベストプラクティスで構築」→ <b class=\"key\">Control Tower</b></li></ul></li></ul>",
        oxIds: [],
        src: [362,368]
      },
      {
        id: "c01-l04-p02",
        title: "試験での出方 ②",
        html: "<ul><li>「開発者にロール作成を任せたいが権限昇格させたくない」→ <b class=\"key\">権限境界</b><ul><li>「モバイルアプリの利用者のサインアップ・サインイン」→ <b class=\"key\">Cognito ユーザープール</b></li><li>「モバイルアプリから直接S3にアップロード」→ <b class=\"key\">Cognito IDプール</b></li><li>「Transit Gateway・サブネットを他アカウントと共有」→ <b class=\"key\">AWS RAM</b></li><li>「オンプレADの資格情報でサインイン、AWSにディレクトリを置かない」→ <b class=\"key\">AD Connector</b></li><li>「RDS for SQL Server / FSx for Windows で Windows認証」→ <b class=\"key\">AWS Managed Microsoft AD</b></li></ul></li></ul>",
        oxIds: [],
        src: [369,374]
      },
      {
        id: "c01-l04-p03",
        title: "試験での出方 ③",
        html: "<ul><li>「誰がリソースを削除したか」→ <b class=\"key\">CloudTrail</b><ul><li>「設定の変更履歴・コンプライアンス評価」→ <b class=\"key\">AWS Config</b></li><li>「外部に公開・共有されているリソースを特定」→ <b class=\"key\">IAM Access Analyzer</b></li><li>「ログの改ざんを検出」→ <b class=\"key\">CloudTrail ログファイルの整合性検証</b></li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>よくある誤答パターン</span><ul><li>アクセスキーを<b class=\"key\">EC2やコードに保存</b>する → ×（ロールを使う）</li><li>SCPで<b class=\"key\">権限を付与</b>できる → ×（上限を決めるだけ）</li></ul></li></ul>",
        oxIds: [],
        src: [375,381]
      },
      {
        id: "c01-l04-p04",
        title: "試験での出方 ④",
        html: "<ul><li>SCPで<b class=\"key\">管理アカウント</b>を制限する → ×（管理アカウントには効かない）<ul><li>数百万人の顧客を<b class=\"key\">IAMユーザー</b>で管理 → ×（Cognito）</li><li>Config ルールで操作を<b class=\"key\">未然に防止</b> → ×（Configは検出。防止はSCP等）</li><li>CloudTrail が<b class=\"key\">S3オブジェクト操作をデフォルトで記録</b> → ×（データイベントは明示的に有効化）</li><li>IAMグループを<b class=\"key\">プリンシパル</b>に指定・<b class=\"key\">入れ子</b>にする → ×</li></ul></li></ul>",
        oxIds: [],
        src: [382,386]
      },
      {
        id: "c01-l04-p05",
        title: "試験での出方 ⑤",
        html: "<ul><li>Cognito <b class=\"key\">ユーザープール</b>だけでS3に直接アクセス → ×（IDプールでIAM認証情報が必要）<ul><li><b class=\"key\">Simple AD</b> でオンプレADと信頼関係 → ×（Managed Microsoft AD）</li><li>権限境界で<b class=\"key\">権限を付与</b> → ×（上限のみ）</li></ul></li></ul>",
        oxIds: [],
        src: [387,389]
      },
      {
        id: "c01-l04-p06",
        title: "試験での出方 ⑥",
        html: "<ul><li>解き方のコツ<ul><li>「<b class=\"key\">運用負荷最小</b>」→ マネージド（Identity Center、Control Tower、Managed AD）</li><li>「<b class=\"key\">最小権限</b>」→ ロール＋必要最小のポリシー＋条件キー、Access Analyzer のポリシー生成</li><li>「<b class=\"key\">全アカウントで強制</b>」→ SCP（組織レベル）／「<b class=\"key\">個別ID</b>の上限」→ 権限境界</li><li>「<b class=\"key\">長期認証情報を排除</b>」→ ロール、Identity Center、Roles Anywhere、OIDC</li></ul></li></ul>",
        oxIds: [],
        src: [390,395]
      },
      {
        id: "c01-l04-p07",
        title: "暗記すべき数字・制限 ①",
        html: "<ul><li>ポリシー評価：<b class=\"key\">明示的Deny ＞ 明示的Allow ＞ 暗黙的Deny</b>（デフォルトは拒否）</li><li>IAMユーザーのアクセスキー：<b class=\"key\">最大2つ</b>／ユーザー</li><li>IAMユーザーが所属できるグループ：<b class=\"key\">最大10</b></li><li>IAMユーザー数：アカウントあたり<b class=\"key\">5,000</b></li><li>ユーザー・ロールにアタッチできる管理ポリシー：既定<b class=\"key\">10</b>（引上げで最大<b class=\"key\">20</b>）</li></ul>",
        oxIds: [],
        src: [397,401]
      },
      {
        id: "c01-l04-p08",
        title: "暗記すべき数字・制限 ②",
        html: "<ul><li>カスタマー管理ポリシーのバージョン：<b class=\"key\">最大5</b></li><li>管理ポリシーのサイズ：<b class=\"key\">6,144文字</b></li><li>インスタンスプロファイルに含められるロール：<b class=\"key\">1つ</b></li><li>AssumeRoleのセッション：既定<b class=\"key\">1時間</b>、最短<b class=\"key\">15分</b>〜ロールの最大セッション時間（<b class=\"key\">1〜12時間</b>で設定）</li></ul>",
        oxIds: ["c01-ox-05","c01-ox-26"],
        src: [402,405]
      },
      {
        id: "c01-l04-p09",
        title: "暗記すべき数字・制限 ③",
        html: "<ul><li>ロールの連鎖時のセッション：<b class=\"key\">最大1時間</b></li><li>MFAデバイス：ユーザーあたり<b class=\"key\">最大8台</b></li><li>Organizations：OUの入れ子は<b class=\"key\">最大5階層</b></li><li>SCP：1エンティティに<b class=\"key\">最大5つ</b>アタッチ、1ポリシー<b class=\"key\">5,120文字</b></li></ul>",
        oxIds: [],
        src: [406,409]
      },
      {
        id: "c01-l04-p10",
        title: "暗記すべき数字・制限 ④",
        html: "<ul><li>SCPが効かない：<b class=\"key\">管理アカウント</b>、<b class=\"key\">サービスリンクロール</b></li><li>CloudTrail イベント履歴：<b class=\"key\">90日間</b>（管理イベント、無料）</li><li>CloudTrail：管理イベントの最初の1コピーは無料／データイベントは<b class=\"key\">有料・既定無効</b></li><li>Simple AD：Small 約<b class=\"key\">500</b>ユーザー／Large 約<b class=\"key\">5,000</b>ユーザー</li></ul>",
        oxIds: [],
        src: [410,413]
      },
      {
        id: "c01-l04-p11",
        title: "暗記すべき数字・制限 ⑤",
        html: "<ul><li>Managed Microsoft AD：ドメインコントローラーは<b class=\"key\">2つのAZ</b>に配置</li><li>S3バケットポリシーのサイズ上限：<b class=\"key\">20KB</b></li><li>語呂合わせ：「<b class=\"key\">デナイ（Deny）は無敵</b>」（明示的Denyはどこにあっても勝つ）</li><li>語呂合わせ：「<b class=\"key\">SCPは天井、IAMは床</b>」（SCPが上限、実際の許可はIAMポリシー）</li><li>語呂合わせ：「<b class=\"key\">トレイルは誰が、コンフィグは何が</b>」（CloudTrail＝操作者、Config＝設定状態）</li><li>語呂合わせ：「<b class=\"key\">ユーザープールは入口、IDプールは鍵</b>」（認証→JWT／AWSアクセス→一時認証情報）</li></ul>",
        oxIds: [],
        src: [414,420]
      },
    ] },
  ],
  ox: [
    {
      id: "c01-ox-01",
      text: "IAMポリシーの評価では、明示的なAllowがある場合、別のポリシーの明示的なDenyより優先される。",
      answer: false,
      explain: "<b class=\"key\">明示的Denyは常に最優先</b>。どこか1つにDenyがあればAllowがあっても拒否される",
      src: 422
    },
    {
      id: "c01-ox-02",
      text: "IAMグループは、S3バケットポリシーのPrincipal要素に指定できる。",
      answer: false,
      explain: "グループは<b class=\"key\">プリンシパルではない</b>ため指定不可。ユーザー・ロール・アカウント等を指定する",
      src: 425
    },
    {
      id: "c01-ox-03",
      text: "IAMグループの中に別のIAMグループを入れ子にすることはできない。",
      answer: true,
      explain: "グループの<b class=\"key\">ネストは不可</b>。グループに入れられるのはIAMユーザーのみ",
      src: 428
    },
    {
      id: "c01-ox-04",
      text: "EC2上のアプリにS3へのアクセス権を与える推奨方法は、IAMユーザーのアクセスキーをEC2に保存することである。",
      answer: false,
      explain: "<b class=\"key\">IAMロールをインスタンスプロファイル経由でアタッチ</b>するのが推奨。一時認証情報が自動更新される",
      src: 431
    },
    {
      id: "c01-ox-05",
      text: "1つのインスタンスプロファイルには、複数のIAMロールを含めることができる。",
      answer: false,
      explain: "インスタンスプロファイルに含められるロールは<b class=\"key\">1つ</b>だけ",
      src: 434
    },
    {
      id: "c01-ox-06",
      text: "権限境界（Permissions Boundary）を設定すると、その範囲内の権限がユーザーに自動的に付与される。",
      answer: false,
      explain: "権限境界は<b class=\"key\">上限</b>を決めるだけ。実際の許可はアイデンティティベースポリシーで与える必要がある",
      src: 437
    },
    {
      id: "c01-ox-07",
      text: "SCPは、Organizationsの管理アカウントのIAMユーザーやロールにも適用される。",
      answer: false,
      explain: "SCPは<b class=\"key\">管理アカウントには効かない</b>。だから管理アカウントにはワークロードを置かない",
      src: 440
    },
    {
      id: "c01-ox-08",
      text: "SCPでs3:*をAllowすれば、メンバーアカウントのIAMユーザーはIAMポリシーなしでS3を操作できる。",
      answer: false,
      explain: "SCPは<b class=\"key\">許可を付与しない</b>。IAMポリシー（またはリソースポリシー）での許可が別途必要",
      src: 443
    },
    {
      id: "c01-ox-09",
      text: "SCPはメンバーアカウントのルートユーザーの権限も制限できる。",
      answer: true,
      explain: "SCPはメンバーアカウントの<b class=\"key\">ルートユーザーを含む</b>全IAMプリンシパルに適用される",
      src: 446
    },
    {
      id: "c01-ox-10",
      text: "クロスアカウントでIAMロールを引き受けるには、ロールの信頼ポリシーと、呼び出し元のIAMポリシーの両方で許可が必要である。",
      answer: true,
      explain: "クロスアカウントは<b class=\"key\">両側での許可</b>が必要。信頼ポリシーで相手を信頼し、相手側で sts:AssumeRole を許可",
      src: 449
    },
    {
      id: "c01-ox-11",
      text: "外部ID（ExternalId）は、サードパーティにロールを引き受けさせる際の「混乱した代理」問題の対策である。",
      answer: true,
      explain: "信頼ポリシーの条件で <code>sts:ExternalId</code> を必須にし、他の顧客を装った引き受けを防ぐ",
      src: 452
    },
    {
      id: "c01-ox-12",
      text: "Amazon Cognitoユーザープールは、認証済みユーザーにIAMロールの一時認証情報を直接発行するための機能である。",
      answer: false,
      explain: "一時認証情報を発行するのは<b class=\"key\">IDプール</b>。ユーザープールは認証して<b class=\"key\">JWT</b>を発行する",
      src: 455
    },
    {
      id: "c01-ox-13",
      text: "Amazon Cognito IDプールは、未認証（ゲスト）ユーザーにも限定的なAWS認証情報を発行できる。",
      answer: true,
      explain: "IDプールは<b class=\"key\">ゲストアクセス</b>をサポート。未認証用ロールに最小限の権限を付ける",
      src: 458
    },
    {
      id: "c01-ox-14",
      text: "AD Connectorは、オンプレミスのActive Directoryのユーザー情報をAWS上に複製・キャッシュする。",
      answer: false,
      explain: "AD Connectorは認証要求を中継する<b class=\"key\">プロキシ</b>で、AWS側にディレクトリ情報を<b class=\"key\">保存しない</b>",
      src: 461
    },
    {
      id: "c01-ox-15",
      text: "Simple ADは、オンプレミスのActive Directoryとの信頼関係をサポートする。",
      answer: false,
      explain: "Simple ADは信頼関係・MFA非対応。信頼関係が必要なら<b class=\"key\">AWS Managed Microsoft AD</b>",
      src: 464
    },
    {
      id: "c01-ox-16",
      text: "CloudTrailは、S3オブジェクトレベルのGetObjectなどのデータイベントをデフォルトで記録する。",
      answer: false,
      explain: "デフォルトは<b class=\"key\">管理イベントのみ</b>。データイベントは明示的に有効化が必要（追加料金）",
      src: 467
    },
    {
      id: "c01-ox-17",
      text: "CloudTrailのイベント履歴では、証跡を作成しなくても過去90日分の管理イベントを参照できる。",
      answer: true,
      explain: "イベント履歴は<b class=\"key\">90日間</b>無料。それ以上の保存は証跡を作成してS3へ配信",
      src: 470
    },
    {
      id: "c01-ox-18",
      text: "AWS Configルールは、非準拠となる設定変更をAPIレベルで未然にブロックする。",
      answer: false,
      explain: "Configは<b class=\"key\">検出・記録</b>のサービス。防止はSCPや Control Tower のプロアクティブ/予防的コントロール",
      src: 473
    },
    {
      id: "c01-ox-19",
      text: "AWS Configの修復アクションでは、Systems Manager Automationドキュメントを使って非準拠リソースを自動修復できる。",
      answer: true,
      explain: "例：パブリック読み取り可能なS3バケットを検出 → Automationでブロックパブリックアクセスを有効化",
      src: 476
    },
    {
      id: "c01-ox-20",
      text: "IAM Access Analyzerは、CloudTrailログを基に最小権限のポリシーを生成できる。",
      answer: true,
      explain: "<b class=\"key\">ポリシー生成</b>機能で、実際に使用されたアクションを基にポリシーのたたき台を作る",
      src: 479
    },
    {
      id: "c01-ox-21",
      text: "AWS RAMを使うと、VPCのサブネットを同じ組織内の他アカウントと共有できる。",
      answer: true,
      explain: "<b class=\"key\">VPC共有</b>。参加者アカウントは共有サブネットにリソースを作れるが、VPC自体は所有者が管理",
      src: 482
    },
    {
      id: "c01-ox-22",
      text: "共有責任モデルにおいて、Amazon RDSのデータベースエンジンへのパッチ適用は顧客の責任である。",
      answer: false,
      explain: "RDSのOS・エンジンのパッチは<b class=\"key\">AWSの責任</b>（メンテナンスウィンドウで適用）。EC2上のDBなら顧客",
      src: 485
    },
    {
      id: "c01-ox-23",
      text: "共有責任モデルにおいて、EC2インスタンスのゲストOSのセキュリティパッチ適用は顧客の責任である。",
      answer: true,
      explain: "EC2はIaaSのため、<b class=\"key\">ゲストOS以上は顧客の責任</b>",
      src: 488
    },
    {
      id: "c01-ox-24",
      text: "AWS Control Towerの検出的コントロールは、主にAWS Configルールで実装されている。",
      answer: true,
      explain: "予防的＝<b class=\"key\">SCP/RCP</b>、検出的＝<b class=\"key\">Configルール</b>、プロアクティブ＝<b class=\"key\">CloudFormation Hooks</b>",
      src: 491
    },
    {
      id: "c01-ox-25",
      text: "Organizationsの一括請求では、あるアカウントで購入したリザーブドインスタンスの割引を、組織内の他アカウントでも利用できる。",
      answer: true,
      explain: "RI・Savings Plansの割引は組織内で<b class=\"key\">共有</b>される（管理アカウントで共有を無効化することも可能）",
      src: 494
    },
    {
      id: "c01-ox-26",
      text: "ロールの連鎖（ロールで別のロールを引き受ける）を行った場合、セッション時間は最大12時間まで設定できる。",
      answer: false,
      explain: "ロールの連鎖のセッションは<b class=\"key\">最大1時間</b>に制限される",
      src: 497
    },
    {
      id: "c01-ox-27",
      text: "KMSキーへのアクセスは、IAMポリシーで許可するだけで、キーポリシーの設定がなくても可能である。",
      answer: false,
      explain: "KMSでは<b class=\"key\">キーポリシーが必須</b>。キーポリシーでアカウントにIAMでの制御を委ねる記述が必要",
      src: 500
    },
    {
      id: "c01-ox-28",
      text: "aws:PrincipalOrgID条件キーを使うと、S3バケットへのアクセスを自組織内のアカウントだけに限定できる。",
      answer: true,
      explain: "アカウントIDを列挙せずに、<b class=\"key\">組織内の全プリンシパル</b>を1つの条件で許可できる",
      src: 503
    },
  ],
  mc: [
    {
      id: "c01-mc-01",
      stem: "ある企業はEC2上のアプリからS3バケットにログを書き込む。現在はIAMユーザーのアクセスキーを設定ファイルに保存している。セキュリティ監査で長期認証情報の排除を求められた。最も安全な対応はどれか。",
      choices: [
        "アクセスキーを90日ごとにローテーションし、設定ファイルを暗号化する",
        "S3書き込み権限を持つIAMロールを作成し、インスタンスプロファイルでEC2にアタッチする",
        "アクセスキーをAWS Secrets Managerに保存し、アプリ起動時に取得する",
        "EC2のユーザーデータにアクセスキーを記述し、起動時に環境変数へ設定する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "ローテーションしても<b class=\"key\">長期認証情報</b>であることに変わりない" },
        { ok: true, text: "ロールなら<b class=\"key\">一時認証情報がIMDS経由で自動発行・自動更新</b>され、キーの保管が不要" },
        { ok: false, text: "保管場所は改善するが、長期キー自体は残る" },
        { ok: false, text: "ユーザーデータはインスタンス内から読めるため、むしろ漏えいリスクが高い" },
      ],
      tip: "「AWS上のワークロードに権限」→ まず<b class=\"key\">IAMロール</b>。アクセスキーを扱う選択肢は消去",
      src: 508
    },
    {
      id: "c01-mc-02",
      stem: "ある企業はOrganizationsで50アカウントを運用する。規制上、全メンバーアカウントで東京・大阪以外のリージョン利用を、各アカウントの管理者を含めて禁止したい。最も運用負荷が少ない方法はどれか。",
      choices: [
        "各アカウントのすべてのIAMユーザーとロールに、リージョンを制限するIAMポリシーをアタッチする",
        "aws:RequestedRegionで2リージョン以外をDenyするSCPを組織のルートにアタッチする",
        "AWS Configルールで他リージョンのリソースを検出し、Lambdaで削除する",
        "各アカウントのIAMユーザーに、リージョンを制限する権限境界を設定する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "50アカウント分の管理が必要。管理者が自分のポリシーを外せば回避できる" },
        { ok: true, text: "SCPは<b class=\"key\">ルートユーザー・管理者を含む</b>全プリンシパルの上限。ルートに付ければ全OUに継承" },
        { ok: false, text: "<b class=\"key\">事後検出</b>であり、作成自体は防げない" },
        { ok: false, text: "アカウント単位の管理が必要で、管理者が権限境界を外せる可能性がある" },
      ],
      tip: "「全アカウント」「管理者も含めて禁止」→ <b class=\"key\">SCP</b>。グローバルサービスはDenyの除外が必要な点も覚えておく",
      src: 520
    },
    {
      id: "c01-mc-03",
      stem: "ある企業は開発者に、Lambda関数用のIAMロールの作成を任せたい。ただし開発者が自分の権限を超える強いロール（例：AdministratorAccess）を作れないようにしたい。最適な方法はどれか。",
      choices: [
        "開発者をIAMグループにまとめ、iam:CreateRoleを含むポリシーをグループに付与する",
        "SCPでiam:CreateRoleを組織全体で拒否する",
        "ロール作成時に特定の権限境界の付与を条件とするポリシーを開発者に付与する",
        "IAM Access Analyzerで作成されたロールを毎日確認し、過剰な権限を手動で削除する",
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "作成されるロールの権限に制限がなく、権限昇格が可能" },
        { ok: false, text: "ロール作成自体ができなくなり、委任の要件を満たさない" },
        { ok: true, text: "<code>iam:PermissionsBoundary</code> 条件で<b class=\"key\">権限境界付きのロールのみ作成可</b>にすれば、上限を超えられない" },
        { ok: false, text: "事後対応で手動運用。防止にならない" },
      ],
      tip: "「権限の<b class=\"key\">委任</b>」「<b class=\"key\">権限昇格の防止</b>」→ <b class=\"key\">権限境界</b>の定番パターン",
      src: 532
    },
    {
      id: "c01-mc-04",
      stem: "ある企業は監視SaaSベンダーに自社AWSアカウントのCloudWatchメトリクス読み取りを許可したい。ベンダーは多数の顧客に同じ仕組みでアクセスしている。最も安全な方法はどれか。",
      choices: [
        "読み取り専用のIAMユーザーを作成し、アクセスキーをベンダーに渡す",
        "ベンダーのアカウントを信頼し、sts:ExternalId条件を付けたクロスアカウントロールを作成する",
        "ベンダーのアカウントを信頼するクロスアカウントロールを作成し、条件は付けない",
        "ルートユーザーのアクセスキーを発行し、ベンダーに渡して定期的にローテーションする",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "長期認証情報を第三者に渡すことになる" },
        { ok: true, text: "<b class=\"key\">外部ID</b>で「混乱した代理」問題を防ぎ、一時認証情報でアクセスさせる" },
        { ok: false, text: "ベンダーの他の顧客が自社のロールARNを指定して悪用できる（混乱した代理）" },
        { ok: false, text: "ルートのアクセスキーは作成すべきでない。論外" },
      ],
      tip: "「<b class=\"key\">サードパーティ</b>」「複数顧客」→ <b class=\"key\">クロスアカウントロール＋外部ID</b>",
      src: 544
    },
    {
      id: "c01-mc-05",
      stem: "ある企業は20のAWSアカウントを持ち、従業員は社内のMicrosoft Entra IDでサインインしている。各アカウントへの一元的なSSOを、IAMユーザーを作らずに最小の運用負荷で実現したい。どの方法が最適か。",
      choices: [
        "各アカウントにIAMユーザーを作成し、Entra IDとパスワードを同期する",
        "各アカウントにSAMLプロバイダーとIAMロールを個別に作成する",
        "IAM Identity CenterでEntra IDを外部IdPとして設定し、許可セットを各アカウントに割り当てる",
        "Amazon Cognitoユーザープールを作成し、Entra IDとSAML連携する",
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "IAMユーザーを作らない要件に反する。パスワード同期の運用も重い" },
        { ok: false, text: "実現はできるが、20アカウント分の個別設定が必要で運用負荷が高い" },
        { ok: true, text: "<b class=\"key\">Identity Center＋外部IdP（SAML/SCIM）</b>で全アカウントのアクセスを中央管理できる" },
        { ok: false, text: "Cognitoは<b class=\"key\">アプリの顧客向け</b>。従業員のAWSコンソールSSOには使わない" },
      ],
      tip: "「従業員」「複数アカウント」「SSO」→ <b class=\"key\">IAM Identity Center</b>",
      src: 556
    },
    {
      id: "c01-mc-06",
      stem: "あるモバイルアプリは、ユーザーがSNSアカウントでサインインし、自分専用のS3プレフィックスに写真を直接アップロードする。バックエンドサーバーは持たない。最適な構成はどれか。",
      choices: [
        "利用者ごとにIAMユーザーを作成し、アクセスキーをアプリに配布する",
        "Cognitoユーザープールで認証し、IDプールでIAMロールの一時認証情報を取得してS3へアクセスする",
        "Cognitoユーザープールのみを使い、IDトークンでS3 APIを直接呼び出す",
        "IAM Identity Centerで利用者を管理し、許可セットでS3権限を付与する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "数百万ユーザーにIAMユーザーは非現実的で、キー配布も危険" },
        { ok: true, text: "ユーザープール（認証）→ <b class=\"key\">IDプール（AWS一時認証情報）</b>。ポリシー変数でユーザー別プレフィックスに制限" },
        { ok: false, text: "S3はCognitoのJWTを直接受け付けない。<b class=\"key\">IAM認証情報が必要</b>" },
        { ok: false, text: "Identity Centerは従業員向け。消費者アプリには使わない" },
      ],
      tip: "「アプリから<b class=\"key\">直接AWSサービス</b>」→ <b class=\"key\">IDプール</b>が必須",
      src: 568
    },
    {
      id: "c01-mc-07",
      stem: "ある企業はAPI GatewayのREST APIを公開する。Webアプリの利用者にサインアップ・サインインさせ、認証済みの利用者だけがAPIを呼べるようにしたい。カスタムコードを最小にする方法はどれか。",
      choices: [
        "Cognitoユーザープールを作成し、API GatewayのCognitoユーザープールオーソライザーを設定する",
        "Cognito IDプールを作成し、未認証ロールでAPIを呼び出す",
        "IAMユーザーを利用者ごとに作成し、API GatewayのIAM認証を使う",
        "Lambdaオーソライザーを作成し、独自のユーザーデータベースでパスワードを検証する",
      ],
      answer: ["A"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "ユーザープールがサインアップ/サインインとJWT発行を担い、オーソライザーが<b class=\"key\">コードなしで検証</b>" },
        { ok: false, text: "未認証ロールでは「認証済みのみ」の要件を満たさない" },
        { ok: false, text: "利用者をIAMユーザーで管理するのは不適切" },
        { ok: false, text: "実現可能だが独自実装が多く、「カスタムコード最小」に反する" },
      ],
      tip: "「サインアップ・サインイン」「API保護」→ <b class=\"key\">ユーザープール＋オーソライザー</b>",
      src: 580
    },
    {
      id: "c01-mc-08",
      stem: "ある企業はAWS上でAmazon WorkSpacesを導入する。従業員はオンプレのADの既存資格情報でサインインし、ディレクトリ情報はAWS上に保持したくない。オンプレとはSite-to-Site VPNで接続済み。最適なサービスはどれか。",
      choices: [
        "AWS Managed Microsoft AD を作成し、ユーザーを手動で再作成する",
        "Simple AD を作成し、オンプレADと信頼関係を結ぶ",
        "AD Connector を作成し、オンプレADへ認証要求を中継する",
        "Cognitoユーザープールを作成し、ユーザーをインポートする",
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "AWS上にディレクトリを持つことになり、二重管理になる" },
        { ok: false, text: "Simple ADは<b class=\"key\">信頼関係を結べない</b>" },
        { ok: true, text: "AD Connectorは<b class=\"key\">プロキシ</b>で情報をキャッシュせず、既存の資格情報でサインインできる" },
        { ok: false, text: "WorkSpacesの認証ディレクトリとして使えない。ADの資格情報も使えない" },
      ],
      tip: "「既存オンプレAD」「AWSに保存しない」→ <b class=\"key\">AD Connector</b>",
      src: 592
    },
    {
      id: "c01-mc-09",
      stem: "ある企業はAmazon RDS for SQL ServerでWindows認証を使い、オンプレADのユーザーもアクセスできるようにしたい。オンプレADとは双方向の信頼関係を結ぶ方針である。最適な構成はどれか。",
      choices: [
        "AD Connector を作成し、RDS for SQL Server と関連付ける",
        "AWS Managed Microsoft AD を作成し、RDSと関連付け、オンプレADと信頼関係を結ぶ",
        "Simple AD を作成し、RDS for SQL Server と関連付ける",
        "IAM Identity Center を有効化し、RDSの許可セットを作成する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "AD Connectorは<b class=\"key\">信頼関係</b>を結べず、RDSのWindows認証の要件を満たさない" },
        { ok: true, text: "RDS for SQL Server のWindows認証は<b class=\"key\">Managed Microsoft AD</b>と連携。オンプレとは<b class=\"key\">信頼関係</b>" },
        { ok: false, text: "Simple ADは信頼関係非対応で、本要件には使えない" },
        { ok: false, text: "Identity CenterはDBのWindows認証を提供しない" },
      ],
      tip: "「<b class=\"key\">信頼関係</b>」「RDS SQL Server/FSx for Windows」→ <b class=\"key\">Managed Microsoft AD</b>",
      src: 604
    },
    {
      id: "c01-mc-10",
      stem: "ある企業は新規に数十アカウントのマルチアカウント環境を作る。ログの集約、監査用アカウント、ガードレール、標準化されたアカウント払い出しを、AWSのベストプラクティスに沿って最短で整えたい。最適なのはどれか。",
      choices: [
        "Organizationsを作成し、SCP・CloudTrail・Configを各アカウントに手動で設定する",
        "AWS Control Towerでランディングゾーンを設定し、Account Factoryでアカウントを払い出す",
        "CloudFormation StackSetsでIAMロールを全アカウントに配布する",
        "AWS RAMで監査用のリソースを全アカウントと共有する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "実現可能だが手作業が多く、最短・最小運用にならない" },
        { ok: true, text: "<b class=\"key\">ログアーカイブ／監査アカウント・コントロール・Account Factory</b>が自動でそろう" },
        { ok: false, text: "部分的な展開手段にすぎず、ガバナンス全体は整わない" },
        { ok: false, text: "RAMはリソース共有であり、ガバナンス基盤ではない" },
      ],
      tip: "「マルチアカウント環境を<b class=\"key\">ベストプラクティスで素早く</b>」→ <b class=\"key\">Control Tower</b>",
      src: 616
    },
    {
      id: "c01-mc-11",
      stem: "ある企業はネットワークチームのアカウントでTransit Gatewayを運用している。同じ組織内の30アカウントのVPCをこのTransit Gatewayにアタッチさせたい。最も運用負荷の少ない方法はどれか。",
      choices: [
        "各アカウントにTransit Gatewayを作成し、相互にピアリングする",
        "AWS RAMでTransit Gatewayを組織と共有し、各アカウントからVPCアタッチメントを作成する",
        "30のVPC間でVPCピアリングをフルメッシュで設定する",
        "クロスアカウントロールを作り、ネットワークチームが各アカウントでTransit Gatewayを作成する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "Transit Gatewayが乱立し、ピアリング管理が複雑になる" },
        { ok: true, text: "<b class=\"key\">RAM</b>でTransit Gatewayを共有すれば、組織内で招待承諾なしに各アカウントから利用可" },
        { ok: false, text: "ピアリングは推移的ルーティング不可で、フルメッシュは接続数が爆発する" },
        { ok: false, text: "1つのハブを共有する要件を満たさず、管理対象が増える" },
      ],
      tip: "「リソースを<b class=\"key\">他アカウントと共有</b>」→ <b class=\"key\">AWS RAM</b>",
      src: 628
    },
    {
      id: "c01-mc-12",
      stem: "セキュリティチームは、本番アカウントで誰かがセキュリティグループを変更し、SSHを0.0.0.0/0に開放したことに気づいた。誰がいつ変更したかを特定し、今後は同様の設定を自動検出・修復したい。最適な組合せはどれか。",
      choices: [
        "CloudTrailで変更者を特定し、AWS Configのrestricted-sshルールとSSM Automationで自動修復する",
        "VPCフローログで変更者を特定し、GuardDutyで自動修復する",
        "AWS Configで変更者を特定し、CloudTrail Insightsで自動修復する",
        "IAM Access Analyzerで変更者を特定し、SCPで自動修復する",
      ],
      answer: ["A"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">誰が＝CloudTrail</b>（AuthorizeSecurityGroupIngress のAPI記録）、<b class=\"key\">状態の評価と修復＝Config＋Automation</b>" },
        { ok: false, text: "フローログは通信の記録で、API操作者は分からない。GuardDutyは脅威検出" },
        { ok: false, text: "Configは設定の状態と変更履歴を示すが、「誰が」の特定はCloudTrailが本職。Insightsは異常検出" },
        { ok: false, text: "Access Analyzerは外部アクセスの分析。SCPは修復ではなく予防" },
      ],
      tip: "「<b class=\"key\">誰が</b>」→ CloudTrail、「<b class=\"key\">設定が準拠しているか</b>」→ Config",
      src: 640
    },
    {
      id: "c01-mc-13",
      stem: "ある企業は数百のS3バケット・KMSキー・IAMロールを持つ。組織外のアカウントやパブリックからアクセス可能なリソースを継続的に洗い出したい。最も運用負荷が少ない方法はどれか。",
      choices: [
        "全リソースのポリシーをスクリプトで定期的に取得し、人手でレビューする",
        "組織を信頼ゾーンとしてIAM Access Analyzerを有効化し、検出結果を確認する",
        "CloudTrailのデータイベントを有効化し、外部からのアクセスログを検索する",
        "Trusted Advisorのコスト最適化チェックを確認する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "手作業で漏れが出やすく、運用負荷が高い" },
        { ok: true, text: "Access Analyzerは信頼ゾーン外からの<b class=\"key\">アクセス可能性</b>をポリシー解析で自動検出" },
        { ok: false, text: "実際にアクセスがあった後の記録しか分からず、「アクセス可能」なリソースは網羅できない" },
        { ok: false, text: "コスト最適化は無関係" },
      ],
      tip: "「<b class=\"key\">外部と共有されている</b>」「<b class=\"key\">公開されている</b>」リソースの特定 → <b class=\"key\">Access Analyzer</b>",
      src: 652
    },
    {
      id: "c01-mc-14",
      stem: "ある企業はOrganizationsで複数アカウントを管理している。セキュリティチームは、全メンバーアカウントのCloudTrailログを改ざんされない形で長期保存し、誰も証跡を停止できないようにしたい。どの2つを組み合わせるべきか。",
      choices: [
        "管理アカウントで組織の証跡を作成し、ログアーカイブ用アカウントのS3バケットに配信する",
        "各メンバーアカウントで個別にCloudTrailのイベント履歴を確認する",
        "cloudtrail:StopLogging と cloudtrail:DeleteTrail を拒否するSCPをOUにアタッチする",
        "AWS Configの定期ルールで証跡の停止を検出し、メールで通知する",
        "CloudTrailの証跡をCloudWatch Logsだけに送信し、S3には保存しない",
      ],
      answer: ["A","C"],
      selectCount: 2,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">組織の証跡</b>で全アカウントを一括収集。専用アカウントに集約して改ざんリスクを下げる（整合性検証も有効化）" },
        { ok: false, text: "イベント履歴は<b class=\"key\">90日間</b>のみで長期保存にならない" },
        { ok: true, text: "<b class=\"key\">SCP</b>でメンバーアカウントの管理者・ルートを含め、証跡の停止・削除を<b class=\"key\">防止</b>できる" },
        { ok: false, text: "検出のみで停止そのものは防げない" },
        { ok: false, text: "長期保存・改ざん対策としてはS3（Object Lock・整合性検証）が基本" },
      ],
      tip: "「<b class=\"key\">一元収集</b>」→ 組織の証跡、「<b class=\"key\">誰にも止めさせない</b>」→ SCP（予防）",
      src: 664
    },
    {
      id: "c01-mc-15",
      stem: "ある企業は機密データ用のS3バケットを持つ。要件は、通信を必ずHTTPSにすること、社内VPCのゲートウェイ型VPCエンドポイント経由のアクセスだけを許可することである。バケットポリシーに追加すべき条件を2つ選べ。",
      choices: [
        "aws:SecureTransport が false の場合に Deny する",
        "aws:SourceIp が社内VPCのプライベートCIDRでない場合に Deny する",
        "aws:SourceVpce が指定のVPCエンドポイントIDでない場合に Deny する",
        "aws:MultiFactorAuthPresent が false の場合に Deny する",
        "aws:RequestedRegion が ap-northeast-1 でない場合に Deny する",
      ],
      answer: ["A","C"],
      selectCount: 2,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">aws:SecureTransport=false を Deny</b> がHTTPS強制の定番" },
        { ok: false, text: "VPCエンドポイント経由では<b class=\"key\">aws:SourceIpはプライベートIPで評価されない</b>。aws:SourceVpce/SourceVpcを使う" },
        { ok: true, text: "<b class=\"key\">aws:SourceVpce</b> で特定エンドポイント経由のみに限定できる" },
        { ok: false, text: "MFA要件は問われておらず、アプリからのアクセスも拒否されてしまう" },
        { ok: false, text: "リージョン制限は要件にない" },
      ],
      tip: "「HTTPS強制」→ SecureTransport、「VPCエンドポイント限定」→ SourceVpce",
      src: 678
    },
    {
      id: "c01-mc-16",
      stem: "あるIAMユーザーにAdministratorAccessポリシーが付与されているのに、EC2インスタンスを起動できない。考えられる原因を2つ選べ。",
      choices: [
        "ユーザーが所属するアカウントのOUに、ec2:RunInstancesを拒否するSCPがアタッチされている",
        "ユーザーにec2:RunInstancesを許可しない権限境界が設定されている",
        "ユーザーがMFAデバイスを2台登録している",
        "ユーザーが3つのIAMグループに所属している",
        "CloudTrailのデータイベントが無効になっている",
      ],
      answer: ["A","B"],
      selectCount: 2,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "SCPは<b class=\"key\">権限の上限</b>。Denyがあれば管理者権限でも実行できない" },
        { ok: true, text: "権限境界は<b class=\"key\">IAMポリシーとの共通部分</b>だけが有効。境界にない操作は拒否される" },
        { ok: false, text: "複数のMFAデバイス登録は可能で、権限には影響しない" },
        { ok: false, text: "複数グループへの所属（最大10）は問題なく、権限は合算される" },
        { ok: false, text: "CloudTrailは記録の仕組みで、API実行の可否には無関係" },
      ],
      tip: "「管理者なのにできない」→ <b class=\"key\">SCP・権限境界・明示的Deny・セッションポリシー</b>を疑う",
      src: 692
    },
  ]
});
window.DATA.chapters.push({
  no: 2,
  title: "データ保護と脅威対策",
  domainNote: "ドメイン1：セキュアなアーキテクチャ",
  src: [707,1371],
  lessons: [
    { id: "c02-l01", title: "KMSと鍵管理（KMS・エンベロープ暗号化・CloudHSM）", pages: [
      {
        id: "c02-l01-p01",
        title: "全体像：データ保護と脅威対策の地図 ①",
        html: "<ul><li>データ保護は「<b class=\"key\">保存時の暗号化（at rest）</b>」と「<b class=\"key\">転送中の暗号化（in transit）</b>」の2本柱<ul><li>保存時：<b class=\"key\">AWS KMS</b>（鍵管理）＋各サービスの暗号化設定（S3/EBS/RDS/DynamoDB）</li><li>転送中：<b class=\"key\">TLS</b>（ACMの証明書）、VPN（IPsec）、MACsec など</li></ul></li><li>秘密情報の管理：<b class=\"key\">AWS Secrets Manager</b> / <b class=\"key\">Systems Manager Parameter Store</b></li></ul>",
        oxIds: [],
        src: [712,715]
      },
      {
        id: "c02-l01-p02",
        title: "全体像：データ保護と脅威対策の地図 ②",
        html: "<ul><li>境界防御：<b class=\"key\">AWS WAF</b>（L7）、<b class=\"key\">AWS Shield</b>（DDoS）、<b class=\"key\">AWS Network Firewall</b>（VPC）<ul><li>組織全体で一元管理：<b class=\"key\">AWS Firewall Manager</b></li></ul></li></ul>",
        oxIds: [],
        src: [716,717]
      },
      {
        id: "c02-l01-p03",
        title: "全体像：データ保護と脅威対策の地図 ③",
        html: "<ul><li>検知・調査・可視化<ul><li>脅威検知：<b class=\"key\">Amazon GuardDuty</b>／脆弱性：<b class=\"key\">Amazon Inspector</b>／機密データ：<b class=\"key\">Amazon Macie</b></li><li>集約：<b class=\"key\">AWS Security Hub</b>／根本原因調査：<b class=\"key\">Amazon Detective</b></li></ul></li></ul>",
        oxIds: [],
        src: [718,720]
      },
      {
        id: "c02-l01-p04",
        title: "全体像：データ保護と脅威対策の地図 ④",
        html: "<ul><li>コンプライアンス：<b class=\"key\">AWS Audit Manager</b>（証跡収集）、<b class=\"key\">AWS Artifact</b>（AWSの監査レポート入手）</li></ul>",
        oxIds: [],
        src: [721,722]
      },
      {
        id: "c02-l01-p05",
        title: "AWS KMS（Key Management Service）の基本 ①",
        html: "<ul><li><b class=\"key\">何か</b>：暗号鍵を作成・管理し、暗号化/復号APIを提供するマネージドサービス<ul><li>鍵は<b class=\"key\">HSM（ハードウェアセキュリティモジュール）</b>で保護され、平文の鍵は<b class=\"key\">KMSの外に出ない</b></li><li><b class=\"key\">リージョン単位</b>のサービス（鍵は原則そのリージョン内でのみ使える）</li><li>S3・EBS・RDS・DynamoDB・Secrets Manager など<b class=\"key\">多数のサービスと統合</b></li><li>鍵の使用は<b class=\"key\">AWS CloudTrail</b>にすべて記録される（誰がいつ復号したか監査可能）</li></ul></li></ul>",
        oxIds: [],
        src: [724,728]
      },
      {
        id: "c02-l01-p06",
        title: "AWS KMS（Key Management Service）の基本 ②",
        html: "<ul><li>鍵の種類（所有者別）<ul><li><b class=\"key\">AWS所有キー（AWS owned key）</b>：AWSが複数アカウントで使う鍵。利用者からは見えない・無料<ul><li>例：DynamoDB・SSE-S3 のデフォルト</li></ul></li><li><b class=\"key\">AWS管理キー（AWS managed key）</b>：<code>aws/s3</code>、<code>aws/ebs</code>、<code>aws/rds</code> などの別名<ul><li>各サービスが利用者アカウントに自動作成。<b class=\"key\">月額料金なし</b>（API利用料のみ）</li><li><b class=\"key\">キーポリシーを変更できない</b> → <b class=\"key\">他アカウントと共有できない</b></li><li>ローテーションは<b class=\"key\">毎年自動</b>（無効化不可）</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [729,735]
      },
      {
        id: "c02-l01-p07",
        title: "AWS KMS（Key Management Service）の基本 ③",
        html: "<ul><li><b class=\"key\">カスタマー管理キー（Customer managed key）</b>：利用者が作成・完全に管理<ul><li>キーポリシー・グラント・有効/無効・削除・ローテーションを<b class=\"key\">自分で制御</b><ul><li><b class=\"key\">クロスアカウント共有が可能</b>（キーポリシーで他アカウントを許可）</li><li>月額 <b class=\"key\">1 USD/キー</b> ＋ API利用料</li></ul></li><li><span class=\"badge b-cmp\">比較</span>「鍵の利用を細かく制御・監査」「他アカウントと共有」→ <b class=\"key\">カスタマー管理キー</b></li></ul></li></ul>",
        oxIds: [],
        src: [736,740]
      },
      {
        id: "c02-l01-p08",
        title: "AWS KMS（Key Management Service）の基本 ④",
        html: "<ul><li>鍵の種類（暗号方式別）<ul><li><b class=\"key\">対称キー</b>（AES-256）：既定。ほぼすべての統合サービスはこれを使う</li><li><b class=\"key\">非対称キー</b>（RSA/ECC）：署名・検証、KMS外で公開鍵を使う暗号化</li><li><b class=\"key\">HMACキー</b>：メッセージ認証コードの生成・検証</li></ul></li></ul>",
        oxIds: [],
        src: [741,745]
      },
      {
        id: "c02-l01-p09",
        title: "エンベロープ暗号化 ①",
        html: "<ul><li><b class=\"key\">何か</b>：データを「<b class=\"key\">データキー</b>」で暗号化し、データキーを「<b class=\"key\">KMSキー</b>」で暗号化する二段構え</li></ul>",
        oxIds: [],
        src: [747,747]
      },
      {
        id: "c02-l01-p10",
        title: "エンベロープ暗号化 ②",
        html: "<ul><li>流れ<ul><li>アプリが <b class=\"key\">GenerateDataKey</b> を呼ぶ → <b class=\"key\">平文データキー</b>と<b class=\"key\">暗号化済みデータキー</b>が返る</li><li>平文データキーでデータをローカル暗号化 → 平文データキーは<b class=\"key\">メモリから破棄</b></li><li>暗号化データ＋<b class=\"key\">暗号化済みデータキー</b>を一緒に保存</li><li>復号時：暗号化済みデータキーを KMS の <b class=\"key\">Decrypt</b> に渡し、平文データキーで復号</li></ul></li></ul>",
        oxIds: [],
        src: [748,752]
      },
      {
        id: "c02-l01-p11",
        title: "エンベロープ暗号化 ③",
        html: "<ul><li>なぜ必要か<ul><li>KMSの <b class=\"key\">Encrypt API で直接暗号化できるのは最大4KB</b> → 大きなデータは扱えない</li><li>大容量データをネットワーク越しにKMSへ送らずに済む（性能・コスト）</li></ul></li><li>S3/EBS/RDS のKMS暗号化は<b class=\"key\">内部でエンベロープ暗号化</b>を使っている</li><li>実装には <b class=\"key\">AWS Encryption SDK</b> が便利（クライアント側暗号化）</li></ul>",
        oxIds: [],
        src: [753,758]
      },
      {
        id: "c02-l01-p12",
        title: "KMS キーポリシーとアクセス制御 ①",
        html: "<ul><li><b class=\"key\">キーポリシー</b>：各KMSキーに<b class=\"key\">必ず1つ</b>付くリソースベースポリシー。<b class=\"key\">アクセス制御の主役</b><ul><li>キーポリシーで許可されていなければ、IAMポリシーだけでは鍵を使えない</li><li>既定のキーポリシーは「<b class=\"key\">アカウント（root）に全権限</b>」を与え、IAMポリシーでの制御を有効化</li></ul></li><li><b class=\"key\">IAMポリシー</b>：キーポリシーがアカウントを信頼している場合に有効</li></ul>",
        oxIds: [],
        src: [760,763]
      },
      {
        id: "c02-l01-p13",
        title: "KMS キーポリシーとアクセス制御 ②",
        html: "<ul><li><b class=\"key\">グラント（Grant）</b>：特定プリンシパルに<b class=\"key\">一時的・限定的</b>に鍵の使用を委任（サービス連携で多用）</li><li><b class=\"key\">クロスアカウント利用</b>には両方が必要<ul><li>①鍵の所有アカウントの<b class=\"key\">キーポリシー</b>で相手アカウントを許可</li><li>②相手アカウント側の<b class=\"key\">IAMポリシー</b>で利用者に権限付与</li></ul></li></ul>",
        oxIds: ["c02-ox-01"],
        src: [764,767]
      },
      {
        id: "c02-l01-p14",
        title: "KMS キーポリシーとアクセス制御 ③",
        html: "<ul><li><b class=\"key\">キーの削除</b>：即時削除はできず <b class=\"key\">7〜30日（既定30日）の待機期間</b>を経て削除<ul><li>待機中はキャンセル可能。削除すると<b class=\"key\">その鍵で暗号化したデータは復号不能</b></li><li>不安なら削除せず<b class=\"key\">無効化（Disable）</b>する</li></ul></li><li>条件キー例：<code>kms:ViaService</code>（特定サービス経由のみ許可）</li></ul>",
        oxIds: [],
        src: [768,772]
      },
      {
        id: "c02-l01-p15",
        title: "KMS の自動ローテーション ①",
        html: "<ul><li><b class=\"key\">AWS管理キー</b>：<b class=\"key\">毎年</b>自動ローテーション（必須・変更不可）</li></ul>",
        oxIds: [],
        src: [774,774]
      },
      {
        id: "c02-l01-p16",
        title: "KMS の自動ローテーション ②",
        html: "<ul><li><b class=\"key\">カスタマー管理キー</b>：自動ローテーションは<b class=\"key\">任意（既定は無効）</b><ul><li>有効化すると既定 <b class=\"key\">365日</b>ごと。期間は <b class=\"key\">90〜2560日</b>で指定可能</li><li><b class=\"key\">オンデマンドローテーション</b>（今すぐ回す）も可能</li></ul></li></ul>",
        oxIds: [],
        src: [775,777]
      },
      {
        id: "c02-l01-p17",
        title: "KMS の自動ローテーション ③",
        html: "<ul><li>ローテーションしても<b class=\"key\">キーID・ARN・エイリアスは変わらない</b><ul><li>古いキーマテリアルは保持され、<b class=\"key\">過去データはそのまま復号できる</b>（再暗号化不要）</li></ul></li></ul>",
        oxIds: ["c02-ox-03"],
        src: [778,779]
      },
      {
        id: "c02-l01-p18",
        title: "KMS の自動ローテーション ④",
        html: "<ul><li><b class=\"key\">インポートキー</b>・<b class=\"key\">非対称キー</b>・<b class=\"key\">HMACキー</b>・<b class=\"key\">カスタムキーストアのキー</b>は自動ローテーション不可<ul><li>手動ローテーション：新しいキーを作り<b class=\"key\">エイリアスを付け替える</b></li></ul></li></ul>",
        oxIds: [],
        src: [780,782]
      },
      {
        id: "c02-l01-p19",
        title: "マルチリージョンキー ①",
        html: "<ul><li><b class=\"key\">何か</b>：複数リージョンで<b class=\"key\">同じキーID・同じキーマテリアル</b>を持つKMSキーのセット<ul><li>キーIDは <code>mrk-</code> で始まる。プライマリキーから<b class=\"key\">レプリカキー</b>を他リージョンに作成</li></ul></li><li>使いどころ<ul><li>リージョンAで暗号化 → リージョンBで<b class=\"key\">KMSをまたがず復号</b>（クロスリージョン呼出し不要）</li><li><b class=\"key\">DR</b>、グローバルアプリ、DynamoDB グローバルテーブルのクライアント側暗号化</li></ul></li></ul>",
        oxIds: ["c02-ox-06"],
        src: [784,788]
      },
      {
        id: "c02-l01-p20",
        title: "マルチリージョンキー ②",
        html: "<ul><li>各キーは<b class=\"key\">独立したリソース</b>（キーポリシー・グラントは個別に管理）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>通常の（単一リージョン）KMSキーは<b class=\"key\">他リージョンにコピーできない</b></span><ul><li>暗号化スナップショットをリージョン間コピー → <b class=\"key\">コピー先リージョンのキーで再暗号化</b></li></ul></li></ul>",
        oxIds: [],
        src: [789,792]
      },
      {
        id: "c02-l01-p21",
        title: "インポートキー（BYOK） ①",
        html: "<ul><li><b class=\"key\">何か</b>：自社で生成したキーマテリアルを KMS に取り込む（キーマテリアルの origin＝<b class=\"key\">EXTERNAL</b>）</li><li>使いどころ：「<b class=\"key\">鍵を自社で生成した証明が必要</b>」「鍵の生成源を自社管理」の規制要件</li></ul>",
        oxIds: [],
        src: [794,795]
      },
      {
        id: "c02-l01-p22",
        title: "インポートキー（BYOK） ②",
        html: "<ul><li>特徴<ul><li>キーマテリアルに<b class=\"key\">有効期限</b>を設定でき、<b class=\"key\">即時削除</b>も可能（待機期間なしで使えなくできる）</li><li>耐久性は利用者責任 → <b class=\"key\">元のキーマテリアルを自社で保管</b>しておく必要</li><li><b class=\"key\">自動ローテーション不可</b>（手動ローテーション）</li></ul></li></ul>",
        oxIds: ["c02-ox-05"],
        src: [796,799]
      },
      {
        id: "c02-l01-p23",
        title: "インポートキー（BYOK） ③",
        html: "<ul><li>関連：<b class=\"key\">カスタムキーストア</b><ul><li><b class=\"key\">CloudHSM キーストア</b>：KMSのキーを自分の CloudHSM クラスターで保管</li><li><b class=\"key\">外部キーストア（XKS）</b>：AWS外の自社HSMで鍵を保持</li></ul></li></ul>",
        oxIds: [],
        src: [800,803]
      },
      {
        id: "c02-l01-p24",
        title: "AWS CloudHSM ①",
        html: "<ul><li><b class=\"key\">何か</b>：AWSクラウド上の<b class=\"key\">専有（シングルテナント）HSM</b>。鍵は<b class=\"key\">利用者だけが管理</b><ul><li><b class=\"key\">AWSは鍵にアクセスできない</b>（HSMユーザー・鍵の管理は利用者の責任）</li><li>認証情報を失うと<b class=\"key\">AWSも復旧できない</b></li></ul></li></ul>",
        oxIds: ["c02-ox-07"],
        src: [805,807]
      },
      {
        id: "c02-l01-p25",
        title: "AWS CloudHSM ②",
        html: "<ul><li>標準API：<b class=\"key\">PKCS#11、JCE（Java）、Microsoft CNG/KSP、OpenSSL</b><ul><li>用途：Oracle <b class=\"key\">TDE</b>、SSL/TLS オフロード、独自PKI（CA の秘密鍵保護）</li></ul></li><li>高可用性：<b class=\"key\">クラスター</b>で複数AZに複数HSMを配置（<b class=\"key\">2台以上を別AZに推奨</b>）<ul><li>VPC内にENIとして配置される</li></ul></li></ul>",
        oxIds: [],
        src: [808,811]
      },
      {
        id: "c02-l01-p26",
        title: "AWS CloudHSM ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>KMS vs CloudHSM<ul><li>KMS：<b class=\"key\">マルチテナント</b>・フルマネージド・AWSサービス統合が簡単・低コスト</li><li>CloudHSM：<b class=\"key\">シングルテナント</b>・利用者が鍵を完全管理・業界標準APIが必要な場合</li><li>「専用ハードウェア」「シングルテナント」「AWSにも鍵を触らせない」→ <b class=\"key\">CloudHSM</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>現在はKMSのHSMもFIPS 140-3 レベル3認定 → 「レベル3」だけで決めず<b class=\"key\">専有か</b>で判断</span></li></ul></li></ul>",
        oxIds: [],
        src: [812,817]
      },
    ] },
    { id: "c02-l02", title: "シークレット・証明書と各種データの暗号化", pages: [
      {
        id: "c02-l02-p01",
        title: "AWS Secrets Manager ①",
        html: "<ul><li><b class=\"key\">何か</b>：DB認証情報・APIキーなどの<b class=\"key\">シークレットを保管・自動ローテーション</b>するサービス</li><li>特徴<ul><li><b class=\"key\">自動ローテーション</b>：Lambda で実行。<b class=\"key\">RDS・Aurora・Redshift・DocumentDB はネイティブ対応</b></li><li>KMSで暗号化して保存。IAM/リソースポリシーでアクセス制御</li><li><b class=\"key\">他リージョンへのレプリケーション</b>（DR・マルチリージョンアプリ）</li><li>アプリはAPIで取得 → <b class=\"key\">コードに認証情報を埋め込まない</b></li></ul></li></ul>",
        oxIds: ["c02-ox-09"],
        src: [819,824]
      },
      {
        id: "c02-l02-p02",
        title: "AWS Secrets Manager ②",
        html: "<ul><li>料金：<b class=\"key\">0.40 USD/シークレット/月</b> ＋ API呼出し料金</li><li>頻出：「DBパスワードを<b class=\"key\">定期的に自動ローテーション</b>」「運用負荷最小」→ <b class=\"key\">Secrets Manager</b></li></ul>",
        oxIds: [],
        src: [825,827]
      },
      {
        id: "c02-l02-p03",
        title: "Systems Manager Parameter Store ①",
        html: "<ul><li><b class=\"key\">何か</b>：設定値・シークレットを<b class=\"key\">階層構造</b>（<code>/prod/db/url</code> など）で保管<ul><li>型：<b class=\"key\">String / StringList / SecureString</b>（SecureString は<b class=\"key\">KMSで暗号化</b>）</li></ul></li></ul>",
        oxIds: [],
        src: [829,830]
      },
      {
        id: "c02-l02-p04",
        title: "Systems Manager Parameter Store ②",
        html: "<ul><li>階層<ul><li><b class=\"key\">標準</b>：<b class=\"key\">無料</b>、<b class=\"key\">最大10,000個</b>、値は<b class=\"key\">4KB</b>まで</li></ul></li></ul>",
        oxIds: [],
        src: [831,832]
      },
      {
        id: "c02-l02-p05",
        title: "Systems Manager Parameter Store ③",
        html: "<ul><li><b class=\"key\">アドバンスト</b>：<b class=\"key\">最大100,000個</b>、<b class=\"key\">8KB</b>まで、<b class=\"key\">パラメータポリシー</b>（有効期限・通知）、有料</li><li><b class=\"key\">自動ローテーション機能はない</b>（自前でLambda等を組む必要）</li></ul>",
        oxIds: [],
        src: [833,834]
      },
      {
        id: "c02-l02-p06",
        title: "Systems Manager Parameter Store ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Secrets Manager vs Parameter Store<ul><li>自動ローテーション・クロスリージョン複製が必要 → <b class=\"key\">Secrets Manager</b></li><li>設定値の保管・<b class=\"key\">低コスト（無料）</b>・ローテーション不要 → <b class=\"key\">Parameter Store</b></li><li>Parameter Store から Secrets Manager のシークレットを<b class=\"key\">参照</b>することも可能</li></ul></li></ul>",
        oxIds: ["c02-ox-08"],
        src: [835,839]
      },
      {
        id: "c02-l02-p07",
        title: "AWS Certificate Manager（ACM） ①",
        html: "<ul><li><b class=\"key\">何か</b>：SSL/TLS証明書の発行・管理・<b class=\"key\">自動更新</b>サービス<ul><li><b class=\"key\">パブリック証明書は無料</b>（ACM統合サービスで使う場合）</li><li><b class=\"key\">DNS検証</b>の証明書は<b class=\"key\">自動更新</b>（メール検証は承認操作が必要）</li></ul></li></ul>",
        oxIds: [],
        src: [841,843]
      },
      {
        id: "c02-l02-p08",
        title: "AWS Certificate Manager（ACM） ②",
        html: "<ul><li>統合先：<b class=\"key\">ELB（ALB/NLB）、CloudFront、API Gateway</b>、App Runner など<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>ACM のパブリック証明書は<b class=\"key\">EC2インスタンスに直接インストールする用途には基本使えない</b></span><ul><li>EC2で終端するならALBの前段でTLS終端するか、別途証明書を用意</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [844,846]
      },
      {
        id: "c02-l02-p09",
        title: "AWS Certificate Manager（ACM） ③",
        html: "<ul><li><b class=\"key\">リージョンのサービス</b>：証明書は<b class=\"key\">使用するリソースと同じリージョン</b>で発行/インポート<ul><li>ALB（ap-northeast-1）→ <b class=\"key\">ap-northeast-1</b> の証明書</li><li><b class=\"key\">CloudFront → 必ず us-east-1（バージニア北部）</b> の証明書</li><li>API Gateway のエッジ最適化エンドポイントも <b class=\"key\">us-east-1</b></li></ul></li></ul>",
        oxIds: ["c02-ox-10"],
        src: [847,850]
      },
      {
        id: "c02-l02-p10",
        title: "AWS Certificate Manager（ACM） ④",
        html: "<ul><li><b class=\"key\">インポートした証明書</b>（外部CA発行）は<b class=\"key\">自動更新されない</b> → 期限前に再インポート<ul><li>期限切れが近づくと ACM が EventBridge イベントを発行（監視・通知に利用）</li></ul></li><li><b class=\"key\">AWS Private CA</b>：社内向けプライベート証明書を発行するマネージドCA（有料）</li></ul>",
        oxIds: ["c02-ox-11"],
        src: [851,854]
      },
      {
        id: "c02-l02-p11",
        title: "S3 の暗号化 ①",
        html: "<ul><li><b class=\"key\">デフォルト暗号化</b>：<b class=\"key\">2023年1月以降、すべての新規オブジェクトは自動的にSSE-S3で暗号化</b><ul><li>バケットのデフォルトを <b class=\"key\">SSE-KMS / DSSE-KMS</b> に変更可能</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>デフォルト暗号化を変更しても<b class=\"key\">既存オブジェクトは再暗号化されない</b></span><ul><li>既存分は <b class=\"key\">S3 Batch Operations（コピー）</b> などで再暗号化</li></ul></li></ul></li><li>サーバー側暗号化（SSE）の種類<ul><li><b class=\"key\">SSE-S3</b>：S3が管理する鍵（AES-256）。追加料金なし・設定不要</li></ul></li></ul>",
        oxIds: ["c02-ox-12"],
        src: [856,861]
      },
      {
        id: "c02-l02-p12",
        title: "S3 の暗号化 ②",
        html: "<ul><li><b class=\"key\">SSE-KMS</b>：KMSキーで暗号化。<b class=\"key\">CloudTrailで鍵の使用を監査</b>、キーポリシーで制御<ul><li>復号には <b class=\"key\">S3の権限＋KMSキーの権限（kms:Decrypt）の両方</b>が必要<ul><li>大量リクエストで<b class=\"key\">KMSのAPIクォータ（スロットリング）</b>に注意</li></ul></li><li><b class=\"key\">DSSE-KMS</b>：KMSキーで<b class=\"key\">2層の暗号化</b>。多層暗号化を求める規制（米政府系）向け</li></ul></li></ul>",
        oxIds: [],
        src: [862,865]
      },
      {
        id: "c02-l02-p13",
        title: "S3 の暗号化 ③",
        html: "<ul><li><b class=\"key\">SSE-C</b>：<b class=\"key\">利用者が鍵を毎リクエストで渡す</b>。S3は鍵を<b class=\"key\">保存しない</b><ul><li><b class=\"key\">HTTPS必須</b>。鍵を紛失すると復号不能。管理コンソールからは操作不可</li></ul></li><li><b class=\"key\">クライアント側暗号化</b>：アップロード<b class=\"key\">前に</b>アプリ側で暗号化（S3は暗号文しか見ない）<ul><li>「AWSに平文を一切渡さない」要件 → クライアント側（AWS Encryption SDK、S3暗号化クライアント）</li></ul></li></ul>",
        oxIds: ["c02-ox-13"],
        src: [866,869]
      },
      {
        id: "c02-l02-p14",
        title: "S3 の暗号化 ④",
        html: "<ul><li><b class=\"key\">S3 バケットキー（Bucket Key）</b><ul><li>バケット単位の中間キーを使い、<b class=\"key\">KMSへのリクエストを最大99%削減</b> → KMSコスト・スロットリング対策</li><li>SSE-KMS で「<b class=\"key\">KMS費用が高い</b>」「<b class=\"key\">KMSのスロットリング</b>」→ <b class=\"key\">バケットキーを有効化</b></li></ul></li></ul>",
        oxIds: ["c02-ox-14"],
        src: [870,872]
      },
      {
        id: "c02-l02-p15",
        title: "S3 の暗号化 ⑤",
        html: "<ul><li>暗号化の強制<ul><li>バケットポリシーで <code>s3:x-amz-server-side-encryption</code> 条件により<b class=\"key\">特定方式以外のPUTを拒否</b></li><li>HTTPS強制：<code>aws:SecureTransport</code> が <b class=\"key\">false</b> のリクエストを <b class=\"key\">Deny</b></li></ul></li></ul>",
        oxIds: [],
        src: [873,876]
      },
      {
        id: "c02-l02-p16",
        title: "転送中の暗号化 ①",
        html: "<ul><li><b class=\"key\">TLS（HTTPS）</b>：ALB/CloudFront で ACM 証明書を使い終端<ul><li><b class=\"key\">エンドツーエンド暗号化</b>：ALB→EC2 間もHTTPSにする（バックエンドにも証明書）</li><li>NLB の <b class=\"key\">TLSリスナー</b>で終端、または <b class=\"key\">TCPパススルー</b>でEC2が終端</li><li>CloudFront：<b class=\"key\">Viewer Protocol Policy</b>（HTTPS へリダイレクト/HTTPSのみ）</li></ul></li><li>S3：<code>aws:SecureTransport</code> でHTTPS強制</li><li>RDS：SSL/TLS接続（PostgreSQL は <code>rds.force_ssl</code> パラメータで強制）</li></ul>",
        oxIds: [],
        src: [878,883]
      },
      {
        id: "c02-l02-p17",
        title: "転送中の暗号化 ②",
        html: "<ul><li>オンプレ接続<ul><li><b class=\"key\">Site-to-Site VPN</b>：<b class=\"key\">IPsecで暗号化</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">Direct Connect は既定では暗号化されない</b> → <b class=\"key\">DX上にVPN</b>、または <b class=\"key\">MACsec</b></span></li></ul></li><li>EFS：マウント時に <b class=\"key\">TLS</b> を有効化（EFSマウントヘルパー）</li></ul>",
        oxIds: ["c02-ox-18"],
        src: [884,888]
      },
      {
        id: "c02-l02-p18",
        title: "EBS の暗号化 ①",
        html: "<ul><li>KMSキーで暗号化。<b class=\"key\">ボリューム・スナップショット・インスタンスとの間の転送データ</b>も暗号化<ul><li>性能への影響はほぼない。<b class=\"key\">暗号化ボリュームのスナップショットは暗号化される</b></li></ul></li><li><b class=\"key\">デフォルト暗号化</b>：<b class=\"key\">リージョン単位</b>のアカウント設定。ONで以後の新規ボリュームが自動暗号化</li></ul>",
        oxIds: ["c02-ox-16"],
        src: [890,892]
      },
      {
        id: "c02-l02-p19",
        title: "EBS の暗号化 ②",
        html: "<ul><li><span class=\"badge b-freq\">頻出</span>既存の<b class=\"key\">未暗号化ボリュームを直接暗号化することはできない</b><ul><li>手順：①<b class=\"key\">スナップショット作成</b> → ②<b class=\"key\">暗号化を有効にしてスナップショットをコピー</b></li><li>→ ③暗号化スナップショットから<b class=\"key\">新ボリューム作成</b> → ④インスタンスにアタッチし差替え</li><li>（未暗号化スナップショットから「暗号化ありで」ボリューム作成も可）</li></ul></li></ul>",
        oxIds: ["c02-ox-15"],
        src: [893,896]
      },
      {
        id: "c02-l02-p20",
        title: "EBS の暗号化 ③",
        html: "<ul><li>暗号化スナップショットの<b class=\"key\">他アカウント共有</b><ul><li><b class=\"key\">カスタマー管理キー</b>で暗号化し、キーポリシーで相手アカウントに権限付与が必要</li><li><b class=\"key\">AWS管理キー（aws/ebs）で暗号化したものは共有不可</b> → CMKで再暗号化コピーしてから共有</li></ul></li></ul>",
        oxIds: [],
        src: [897,900]
      },
      {
        id: "c02-l02-p21",
        title: "RDS / Aurora の暗号化 ①",
        html: "<ul><li><b class=\"key\">作成時にのみ</b>暗号化を有効化できる（KMSキー）<ul><li>DB・自動バックアップ・スナップショット・<b class=\"key\">リードレプリカ</b>・ログが暗号化される</li></ul></li><li><span class=\"badge b-freq\">頻出</span>既存の<b class=\"key\">未暗号化DBを直接暗号化できない</b><ul><li>手順：①<b class=\"key\">スナップショット作成</b> → ②<b class=\"key\">暗号化を指定してスナップショットをコピー</b></li><li>→ ③暗号化スナップショットから<b class=\"key\">DBを復元</b> → ④アプリの接続先を切替え</li></ul></li></ul>",
        oxIds: ["c02-ox-17"],
        src: [902,906]
      },
      {
        id: "c02-l02-p22",
        title: "RDS / Aurora の暗号化 ②",
        html: "<ul><li>暗号化DBのリードレプリカは<b class=\"key\">暗号化必須</b>（未暗号化DBに暗号化レプリカも作れない）</li><li><b class=\"key\">クロスリージョン</b>のスナップショットコピー/レプリカ → <b class=\"key\">コピー先リージョンのKMSキー</b>を指定</li><li>スナップショットのクロスアカウント共有 → <b class=\"key\">カスタマー管理キー</b>が必要（aws/rds では不可）</li><li><b class=\"key\">TDE</b>（Oracle/SQL Server）：DBエンジン側の透過的暗号化。CloudHSM と連携も可</li><li>DynamoDB：<b class=\"key\">保存時暗号化は常に有効</b>（AWS所有キー/AWS管理キー/CMK を選択）</li></ul>",
        oxIds: [],
        src: [907,912]
      },
    ] },
    { id: "c02-l03", title: "脅威対策と検知（WAF・Shield・GuardDuty・Security Hub ほか）", pages: [
      {
        id: "c02-l03-p01",
        title: "AWS WAF ①",
        html: "<ul><li><b class=\"key\">何か</b>：<b class=\"key\">レイヤー7（HTTP/HTTPS）</b>のWebアプリケーションファイアウォール</li><li>関連付け先：<b class=\"key\">CloudFront、ALB、API Gateway（REST）、AppSync、Cognito ユーザープール</b><ul><li>App Runner、Verified Access、Amplify にも対応</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">NLB・EC2 には直接付けられない</b>（L4/NLBはShield・Network Firewall等で）</span></li></ul></li><li><b class=\"key\">Web ACL</b> にルールを定義<ul><li><b class=\"key\">SQLインジェクション・XSS</b> の検知</li></ul></li></ul>",
        oxIds: ["c02-ox-19"],
        src: [914,919]
      },
      {
        id: "c02-l03-p02",
        title: "AWS WAF ②",
        html: "<ul><li><b class=\"key\">IPセット</b>（許可/拒否リスト）、<b class=\"key\">地理的一致（Geo match）</b>で国単位ブロック<ul><li><b class=\"key\">レートベースルール</b>：同一IPなどからの<b class=\"key\">一定時間内のリクエスト数超過をブロック</b>（HTTPフラッド対策）</li><li><b class=\"key\">AWSマネージドルール</b>（OWASP系・既知の不正入力・ボット制御など）、Marketplaceルール</li></ul></li></ul>",
        oxIds: [],
        src: [920,922]
      },
      {
        id: "c02-l03-p03",
        title: "AWS WAF ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>WAF vs セキュリティグループ/NACL<ul><li>SG/NACL は<b class=\"key\">L3/L4</b>（IP・ポート）。<b class=\"key\">HTTPの中身（URI・ヘッダー・ボディ）</b>を見るのは WAF</li></ul></li><li>国単位の制限<ul><li><b class=\"key\">CloudFront の地理的制限</b>：国単位で配信の許可/拒否（シンプル）</li><li><b class=\"key\">WAF の Geo match</b>：他条件と組み合わせた細かい制御が可能</li></ul></li></ul>",
        oxIds: [],
        src: [923,928]
      },
      {
        id: "c02-l03-p04",
        title: "AWS Shield（Standard / Advanced） ①",
        html: "<ul><li><b class=\"key\">Shield Standard</b><ul><li><b class=\"key\">全利用者に自動・無料</b>で適用。<b class=\"key\">L3/L4</b>の一般的なDDoS（SYNフラッド、UDPリフレクション等）を防御</li></ul></li><li><b class=\"key\">Shield Advanced</b><ul><li><b class=\"key\">有料：3,000 USD/月（組織単位）、1年契約</b>＋データ転送料</li><li>保護対象：<b class=\"key\">EC2（Elastic IP）、ELB、CloudFront、Global Accelerator、Route 53</b></li></ul></li></ul>",
        oxIds: ["c02-ox-20"],
        src: [930,934]
      },
      {
        id: "c02-l03-p05",
        title: "AWS Shield（Standard / Advanced） ②",
        html: "<ul><li><b class=\"key\">Shield Response Team（SRT）による24時間365日の支援</b><ul><li><b class=\"key\">DDoS コスト保護</b>：攻撃によるスケールアウト費用の<b class=\"key\">クレジット（返金）</b></li><li>L7攻撃は<b class=\"key\">WAFと連携</b>して自動緩和。保護対象のWAF料金は追加費用なし</li><li>攻撃の詳細な可視化・メトリクス、ヘルスベースの検知</li></ul></li><li><span class=\"badge b-cmp\">比較</span>「DDoS対策を最低コストで」→ Standard（自動）／「専門チームの支援」「費用補償」→ <b class=\"key\">Advanced</b></li></ul>",
        oxIds: [],
        src: [935,940]
      },
      {
        id: "c02-l03-p06",
        title: "AWS Firewall Manager ①",
        html: "<ul><li><b class=\"key\">何か</b>：<b class=\"key\">AWS Organizations 全体</b>のファイアウォールルールを<b class=\"key\">一元管理・自動適用</b></li><li>管理対象：<b class=\"key\">WAF、Shield Advanced、セキュリティグループ、Network Firewall、Route 53 Resolver DNS Firewall</b><ul><li>サードパーティファイアウォール（Marketplace）も一部対応</li></ul></li></ul>",
        oxIds: [],
        src: [942,944]
      },
      {
        id: "c02-l03-p07",
        title: "AWS Firewall Manager ②",
        html: "<ul><li>前提条件<ul><li><b class=\"key\">AWS Organizations</b> に参加、<b class=\"key\">Firewall Manager 管理者アカウント</b>の指定</li><li><b class=\"key\">AWS Config</b> の有効化</li></ul></li><li><b class=\"key\">新規アカウント・新規リソースにも自動で適用</b> → 適用漏れを防ぐ</li></ul>",
        oxIds: ["c02-ox-21"],
        src: [945,948]
      },
      {
        id: "c02-l03-p08",
        title: "AWS Firewall Manager ③",
        html: "<ul><li>頻出：「<b class=\"key\">複数アカウント</b>に<b class=\"key\">一貫した</b>WAFルールを適用」「<b class=\"key\">新規アカウントにも自動</b>」→ <b class=\"key\">Firewall Manager</b></li></ul>",
        oxIds: [],
        src: [949,950]
      },
      {
        id: "c02-l03-p09",
        title: "AWS Network Firewall ①",
        html: "<ul><li><b class=\"key\">何か</b>：<b class=\"key\">VPC単位</b>のマネージド・ステートフル/ステートレスファイアウォール（<b class=\"key\">L3〜L7</b>）<ul><li><b class=\"key\">IPS/IDS</b>（Suricata 互換ルール）、<b class=\"key\">ドメイン名（FQDN）フィルタリング</b></li><li>例：「アウトバウンド通信を<b class=\"key\">許可したドメインのみ</b>に制限」</li></ul></li></ul>",
        oxIds: [],
        src: [952,954]
      },
      {
        id: "c02-l03-p10",
        title: "AWS Network Firewall ②",
        html: "<ul><li>配置：<b class=\"key\">専用のファイアウォールサブネット</b>にエンドポイントを置き、<b class=\"key\">ルートテーブルで通過させる</b><ul><li>自動スケール・マルチAZ対応</li><li><b class=\"key\">Transit Gateway</b> と組み合わせて<b class=\"key\">集中型インスペクションVPC</b>を構成</li></ul></li></ul>",
        oxIds: [],
        src: [955,957]
      },
      {
        id: "c02-l03-p11",
        title: "AWS Network Firewall ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span><ul><li>SG：インスタンス単位・ステートフル・許可ルールのみ</li><li>NACL：サブネット単位・ステートレス・許可/拒否</li><li>Network Firewall：<b class=\"key\">VPC全体の境界</b>で<b class=\"key\">深いパケット検査</b>・ドメインフィルタ</li><li>WAF：<b class=\"key\">HTTPアプリ層</b>（CloudFront/ALB/API Gateway）</li></ul></li></ul>",
        oxIds: [],
        src: [958,963]
      },
      {
        id: "c02-l03-p12",
        title: "Amazon GuardDuty ①",
        html: "<ul><li><b class=\"key\">何か</b>：<b class=\"key\">機械学習・脅威インテリジェンス</b>による<b class=\"key\">継続的な脅威検知</b>サービス</li></ul>",
        oxIds: [],
        src: [965,965]
      },
      {
        id: "c02-l03-p13",
        title: "Amazon GuardDuty ②",
        html: "<ul><li>データソース（<b class=\"key\">自分でログを有効化しなくても</b>GuardDutyが独立して取得）<ul><li><b class=\"key\">CloudTrail 管理イベント</b>、<b class=\"key\">VPC Flow Logs</b>、<b class=\"key\">DNS ログ</b></li></ul></li></ul>",
        oxIds: ["c02-ox-22"],
        src: [966,967]
      },
      {
        id: "c02-l03-p14",
        title: "Amazon GuardDuty ③",
        html: "<ul><li>保護プラン：<b class=\"key\">S3 Protection</b>、<b class=\"key\">EKS Protection</b>、<b class=\"key\">Runtime Monitoring</b>、<b class=\"key\">Malware Protection</b>、<b class=\"key\">RDS Protection</b>、<b class=\"key\">Lambda Protection</b></li></ul>",
        oxIds: [],
        src: [968,968]
      },
      {
        id: "c02-l03-p15",
        title: "Amazon GuardDuty ④",
        html: "<ul><li>検知例：<b class=\"key\">暗号通貨マイニング</b>、既知の悪意あるIPとの通信、<b class=\"key\">異常なAPI呼出し</b>、認証情報の不正利用</li></ul>",
        oxIds: [],
        src: [969,969]
      },
      {
        id: "c02-l03-p16",
        title: "Amazon GuardDuty ⑤",
        html: "<ul><li>運用<ul><li><b class=\"key\">ワンクリック有効化</b>、エージェント不要（Runtime Monitoring はエージェント使用）</li><li>結果（Finding）→ <b class=\"key\">EventBridge → Lambda/SNS</b> で<b class=\"key\">自動修復・通知</b></li><li>Organizations で<b class=\"key\">委任管理者</b>を設定し全アカウントを一元管理</li><li><b class=\"key\">30日間の無料トライアル</b></li></ul></li></ul>",
        oxIds: [],
        src: [970,974]
      },
      {
        id: "c02-l03-p17",
        title: "Amazon GuardDuty ⑥",
        html: "<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>GuardDuty は<b class=\"key\">検知</b>のみ。<b class=\"key\">ブロックはしない</b>（ブロックは EventBridge 経由で自動化）</span></li></ul>",
        oxIds: [],
        src: [975,976]
      },
      {
        id: "c02-l03-p18",
        title: "Amazon Inspector ①",
        html: "<ul><li><b class=\"key\">何か</b>：<b class=\"key\">ソフトウェアの脆弱性（CVE）</b>と<b class=\"key\">意図しないネットワーク露出</b>を<b class=\"key\">自動・継続スキャン</b></li></ul>",
        oxIds: [],
        src: [978,978]
      },
      {
        id: "c02-l03-p19",
        title: "Amazon Inspector ②",
        html: "<ul><li>対象：<b class=\"key\">EC2インスタンス</b>、<b class=\"key\">ECR のコンテナイメージ</b>、<b class=\"key\">Lambda 関数</b>（コード含む）<ul><li>EC2 は <b class=\"key\">SSM エージェント</b>経由（エージェントレススキャンも可）</li></ul></li></ul>",
        oxIds: [],
        src: [979,980]
      },
      {
        id: "c02-l03-p20",
        title: "Amazon Inspector ③",
        html: "<ul><li>新しいCVE公開時やソフト更新時に<b class=\"key\">自動で再スキャン</b>。リスクスコア付きの結果</li><li><span class=\"badge b-cmp\">比較</span>Inspector＝<b class=\"key\">脆弱性</b>（パッチ未適用）／GuardDuty＝<b class=\"key\">脅威・不審な挙動</b></li></ul>",
        oxIds: ["c02-ox-23"],
        src: [981,983]
      },
      {
        id: "c02-l03-p21",
        title: "Amazon Macie",
        html: "<ul><li><b class=\"key\">何か</b>：<b class=\"key\">機械学習</b>で <b class=\"key\">S3 内の機密データ（PII：氏名・クレカ番号・マイナンバー等）を検出</b></li><li><b class=\"key\">S3専用</b>。バケットの公開状態・暗号化状態も評価</li><li>結果は EventBridge・Security Hub に連携</li><li>頻出：「<b class=\"key\">S3に個人情報が保存されていないか</b>」「PIIの検出」→ <b class=\"key\">Macie</b></li></ul>",
        oxIds: ["c02-ox-24"],
        src: [985,989]
      },
      {
        id: "c02-l03-p22",
        title: "AWS Security Hub ①",
        html: "<ul><li><b class=\"key\">何か</b>：<b class=\"key\">セキュリティ検出結果の集約</b>＋<b class=\"key\">セキュリティ標準への準拠チェック（CSPM）</b><ul><li>GuardDuty・Inspector・Macie・Firewall Manager・IAM Access Analyzer・サードパーティの結果を<b class=\"key\">一元表示</b></li></ul></li></ul>",
        oxIds: [],
        src: [991,992]
      },
      {
        id: "c02-l03-p23",
        title: "AWS Security Hub ②",
        html: "<ul><li>標準：<b class=\"key\">AWS 基礎セキュリティのベストプラクティス（FSBP）</b>、<b class=\"key\">CIS Benchmarks</b>、<b class=\"key\">PCI DSS</b>、NIST<ul><li>結果の形式：<b class=\"key\">ASFF（AWS Security Finding Format）</b></li></ul></li><li>前提：コンプライアンスチェックには <b class=\"key\">AWS Config の有効化が必要</b></li><li><b class=\"key\">クロスリージョン集約</b>・Organizations で全アカウント一元管理</li><li>2025年に機能が再編され、従来機能は「Security Hub CSPM」の名称に（試験では「集約＋準拠チェック」で覚える）</li></ul>",
        oxIds: ["c02-ox-25"],
        src: [993,997]
      },
      {
        id: "c02-l03-p24",
        title: "AWS Security Hub ③",
        html: "<ul><li>頻出：「<b class=\"key\">複数のセキュリティサービスの結果を1か所で</b>」「<b class=\"key\">ベストプラクティス準拠を継続評価</b>」→ <b class=\"key\">Security Hub</b></li></ul>",
        oxIds: [],
        src: [998,999]
      },
      {
        id: "c02-l03-p25",
        title: "Amazon Detective ①",
        html: "<ul><li><b class=\"key\">何か</b>：セキュリティ問題の<b class=\"key\">根本原因を調査・分析</b>するサービス</li><li>CloudTrail・VPC Flow Logs・<b class=\"key\">GuardDuty の結果</b>・EKS 監査ログ等から<b class=\"key\">グラフモデル</b>を自動構築</li><li>「この不審なIPは他に何をしたか」「どのリソースに影響したか」を<b class=\"key\">可視化</b></li></ul>",
        oxIds: [],
        src: [1001,1003]
      },
      {
        id: "c02-l03-p26",
        title: "Amazon Detective ②",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>GuardDuty＝<b class=\"key\">検知</b>／Detective＝<b class=\"key\">調査（なぜ・どこまで）</b><ul><li>Detective を有効化するには <b class=\"key\">GuardDuty の有効化が前提</b></li></ul></li></ul>",
        oxIds: [],
        src: [1004,1006]
      },
      {
        id: "c02-l03-p27",
        title: "AWS Audit Manager",
        html: "<ul><li><b class=\"key\">何か</b>：AWS利用状況から<b class=\"key\">監査用の証跡（エビデンス）を継続的・自動収集</b></li><li><b class=\"key\">フレームワーク</b>（PCI DSS、HIPAA、GDPR、SOC 2 など）に沿ってコントロールにマッピング</li><li>監査準備の手作業を削減し、<b class=\"key\">評価レポート</b>を作成</li><li>頻出：「<b class=\"key\">自社の監査準備</b>」「エビデンス収集を自動化」→ <b class=\"key\">Audit Manager</b></li></ul>",
        oxIds: [],
        src: [1008,1012]
      },
      {
        id: "c02-l03-p28",
        title: "AWS Artifact ①",
        html: "<ul><li><b class=\"key\">何か</b>：<b class=\"key\">AWS自身のコンプライアンスレポート</b>（SOC、PCI、ISO 等）を<b class=\"key\">オンデマンドでダウンロード</b></li></ul>",
        oxIds: [],
        src: [1014,1014]
      },
      {
        id: "c02-l03-p29",
        title: "AWS Artifact ②",
        html: "<ul><li><b class=\"key\">契約（Agreements）</b>の確認・締結：<b class=\"key\">BAA（HIPAA）</b>など</li><li><span class=\"badge b-cmp\">比較</span>Artifact＝<b class=\"key\">AWS側</b>の認証レポート入手／Audit Manager＝<b class=\"key\">自社の</b>監査証跡収集</li></ul>",
        oxIds: ["c02-ox-26"],
        src: [1015,1017]
      },
      {
        id: "c02-l03-p30",
        title: "関連サービスの比較まとめ ①",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>検知・評価系の見分け方<ul><li><b class=\"key\">GuardDuty</b>：不審な<b class=\"key\">挙動</b>（脅威）を検知</li><li><b class=\"key\">Inspector</b>：<b class=\"key\">脆弱性</b>（CVE）をスキャン</li><li><b class=\"key\">Macie</b>：S3の<b class=\"key\">機密データ</b>を発見</li></ul></li></ul>",
        oxIds: [],
        src: [1019,1022]
      },
      {
        id: "c02-l03-p31",
        title: "関連サービスの比較まとめ ②",
        html: "<ul><li><b class=\"key\">Detective</b>：<b class=\"key\">根本原因の調査</b><ul><li><b class=\"key\">Security Hub</b>：結果の<b class=\"key\">集約</b>と<b class=\"key\">準拠チェック</b></li></ul></li></ul>",
        oxIds: [],
        src: [1023,1024]
      },
      {
        id: "c02-l03-p32",
        title: "関連サービスの比較まとめ ③",
        html: "<ul><li><b class=\"key\">AWS Config</b>：リソース<b class=\"key\">設定の変更履歴</b>とルール準拠<ul><li><b class=\"key\">CloudTrail</b>：<b class=\"key\">API呼出しの記録</b>（誰が何をしたか）</li></ul></li></ul>",
        oxIds: [],
        src: [1025,1027]
      },
    ] },
    { id: "c02-l04", title: "試験での出方と暗記数字", pages: [
      {
        id: "c02-l04-p01",
        title: "試験での出方 ①",
        html: "<ul><li>典型シナリオのキーワード → 正解サービス<ul><li>「鍵の使用を<b class=\"key\">監査</b>」「キーポリシーで制御」「他アカウントと<b class=\"key\">共有</b>」→ <b class=\"key\">KMS カスタマー管理キー</b></li><li>「<b class=\"key\">シングルテナント</b>HSM」「<b class=\"key\">FIPS 140 レベル3</b>」「AWSも鍵にアクセス不可」「PKCS#11」→ <b class=\"key\">CloudHSM</b></li></ul></li></ul>",
        oxIds: [],
        src: [1029,1031]
      },
      {
        id: "c02-l04-p02",
        title: "試験での出方 ②",
        html: "<ul><li>「自社で生成した鍵を使う」「鍵を<b class=\"key\">即時に無効化</b>できる」→ <b class=\"key\">インポートキー（BYOK）</b><ul><li>「別リージョンで<b class=\"key\">同じ鍵で復号</b>」→ <b class=\"key\">マルチリージョンキー</b></li><li>「DB認証情報を<b class=\"key\">自動ローテーション</b>」→ <b class=\"key\">Secrets Manager</b></li></ul></li></ul>",
        oxIds: [],
        src: [1032,1034]
      },
      {
        id: "c02-l04-p03",
        title: "試験での出方 ③",
        html: "<ul><li>「設定値を<b class=\"key\">無料</b>で階層管理」「ローテーション不要」→ <b class=\"key\">Parameter Store</b><ul><li>「CloudFront に独自ドメインのHTTPS」→ <b class=\"key\">us-east-1 の ACM 証明書</b></li><li>「SSE-KMS の<b class=\"key\">コスト削減</b>」「KMSの<b class=\"key\">スロットリング</b>」→ <b class=\"key\">S3 バケットキー</b></li></ul></li></ul>",
        oxIds: [],
        src: [1035,1037]
      },
      {
        id: "c02-l04-p04",
        title: "試験での出方 ④",
        html: "<ul><li>「鍵をAWSに保存させず<b class=\"key\">自社で管理</b>し、S3側で暗号化」→ <b class=\"key\">SSE-C</b><ul><li>「<b class=\"key\">AWSに平文を渡さない</b>」→ <b class=\"key\">クライアント側暗号化</b></li><li>「<b class=\"key\">2層の暗号化</b>が規制要件」→ <b class=\"key\">DSSE-KMS</b></li></ul></li></ul>",
        oxIds: [],
        src: [1038,1040]
      },
      {
        id: "c02-l04-p05",
        title: "試験での出方 ⑤",
        html: "<ul><li>「既存の未暗号化EBS/RDSを暗号化」→ <b class=\"key\">スナップショット→暗号化コピー→復元</b><ul><li>「<b class=\"key\">SQLインジェクション・XSS</b>」「特定国のブロック」「HTTPフラッド」→ <b class=\"key\">AWS WAF</b></li><li>「<b class=\"key\">DDoS</b>、専門家の24時間支援、<b class=\"key\">攻撃によるコスト増を補償</b>」→ <b class=\"key\">Shield Advanced</b></li></ul></li></ul>",
        oxIds: [],
        src: [1041,1043]
      },
      {
        id: "c02-l04-p06",
        title: "試験での出方 ⑥",
        html: "<ul><li>「<b class=\"key\">組織全体</b>にWAF/SGルールを<b class=\"key\">一元適用</b>」→ <b class=\"key\">Firewall Manager</b><ul><li>「VPCの<b class=\"key\">アウトバウンドを特定ドメインに制限</b>」「<b class=\"key\">IPS</b>」→ <b class=\"key\">Network Firewall</b></li></ul></li></ul>",
        oxIds: [],
        src: [1044,1045]
      },
      {
        id: "c02-l04-p07",
        title: "試験での出方 ⑦",
        html: "<ul><li>「<b class=\"key\">暗号通貨マイニング</b>」「不審なAPI呼出し」「<b class=\"key\">脅威検知</b>」→ <b class=\"key\">GuardDuty</b><ul><li>「EC2/ECR/Lambda の<b class=\"key\">脆弱性（CVE）</b>」→ <b class=\"key\">Inspector</b></li></ul></li></ul>",
        oxIds: [],
        src: [1046,1047]
      },
      {
        id: "c02-l04-p08",
        title: "試験での出方 ⑧",
        html: "<ul><li>「S3 内の<b class=\"key\">PII</b>を発見」→ <b class=\"key\">Macie</b><ul><li>「複数サービスの<b class=\"key\">結果を集約</b>」「<b class=\"key\">CIS/FSBP準拠</b>」→ <b class=\"key\">Security Hub</b></li></ul></li></ul>",
        oxIds: [],
        src: [1048,1049]
      },
      {
        id: "c02-l04-p09",
        title: "試験での出方 ⑨",
        html: "<ul><li>「インシデントの<b class=\"key\">根本原因を調査</b>」→ <b class=\"key\">Detective</b><ul><li>「<b class=\"key\">監査人向けにAWSのSOCレポート</b>」→ <b class=\"key\">Artifact</b>／「自社監査の<b class=\"key\">証跡自動収集</b>」→ <b class=\"key\">Audit Manager</b></li></ul></li></ul>",
        oxIds: [],
        src: [1050,1051]
      },
      {
        id: "c02-l04-p10",
        title: "試験での出方 ⑩",
        html: "<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>よくある誤答パターン</span><ul><li>CloudFront 用の ACM 証明書を <b class=\"key\">ALBと同じリージョン（東京など）</b>で作る → ×（<b class=\"key\">us-east-1</b>）</li><li>既存の未暗号化EBS/RDSの「<b class=\"key\">設定を変更して暗号化を有効化</b>」→ ×（スナップショットコピー経由）</li><li><b class=\"key\">AWS管理キー</b>で暗号化したスナップショットを他アカウントへ共有 → ×（<b class=\"key\">CMK</b>が必要）</li><li>Parameter Store で「<b class=\"key\">自動ローテーション</b>」→ ×（Secrets Manager）</li></ul></li></ul>",
        oxIds: [],
        src: [1052,1056]
      },
      {
        id: "c02-l04-p11",
        title: "試験での出方 ⑪",
        html: "<ul><li><b class=\"key\">NLB に WAF</b> を関連付け → ×（ALB/CloudFront/API Gateway 等）<ul><li>GuardDuty で攻撃を「<b class=\"key\">ブロック</b>」→ ×（検知のみ。ブロックは WAF/NACL 等＋自動化）</li><li>Macie で <b class=\"key\">EC2/RDS</b> の機密データ検出 → ×（<b class=\"key\">S3専用</b>）</li><li>Inspector で<b class=\"key\">不審な通信</b>を検知 → ×（それは GuardDuty）</li><li>GuardDuty のために <b class=\"key\">VPC Flow Logs を自分で有効化</b>する必要がある → ×（独立して取得）</li></ul></li></ul>",
        oxIds: [],
        src: [1057,1061]
      },
      {
        id: "c02-l04-p12",
        title: "試験での出方 ⑫",
        html: "<ul><li>KMS Encrypt で<b class=\"key\">数GBのファイルを直接暗号化</b> → ×（4KBまで。エンベロープ暗号化）<ul><li><b class=\"key\">Direct Connect は暗号化されている</b> → ×（VPN併用 or MACsec）</li><li>デフォルト暗号化を SSE-KMS に変えれば<b class=\"key\">既存オブジェクトも再暗号化</b> → ×</li></ul></li><li>解き方のコツ<ul><li>「<b class=\"key\">誰が鍵を管理するか</b>」で暗号化方式を決める<ul><li>AWS任せ → SSE-S3／AWSが管理し利用者が制御・監査 → SSE-KMS／利用者が保持 → SSE-C or クライアント側</li></ul></li><li>「<b class=\"key\">検知・脆弱性・機密データ・調査・集約</b>」のどれを問われているかで検知系サービスを選ぶ</li><li>「<b class=\"key\">複数アカウント</b>」が出たら Organizations 連携（Firewall Manager、委任管理者）を疑う</li></ul></li></ul>",
        oxIds: [],
        src: [1062,1070]
      },
      {
        id: "c02-l04-p13",
        title: "暗記すべき数字・制限 ①",
        html: "<ul><li>KMS Encrypt API で直接暗号化できるデータ：<b class=\"key\">最大4KB</b> → それ以上は<b class=\"key\">エンベロープ暗号化</b></li><li>KMS キー削除の待機期間：<b class=\"key\">7〜30日（既定30日）</b></li><li>AWS管理キーのローテーション：<b class=\"key\">毎年</b>（必須）</li></ul>",
        oxIds: ["c02-ox-02","c02-ox-04"],
        src: [1072,1074]
      },
      {
        id: "c02-l04-p14",
        title: "暗記すべき数字・制限 ②",
        html: "<ul><li>カスタマー管理キーの自動ローテーション：<b class=\"key\">任意</b>、既定<b class=\"key\">365日</b>、<b class=\"key\">90〜2560日</b>で設定可能</li><li>カスタマー管理キーの料金：<b class=\"key\">1 USD/月/キー</b>（AWS管理キーは月額なし）</li><li>マルチリージョンキーのキーID：<b class=\"key\">mrk-</b> で始まる</li><li>Secrets Manager：<b class=\"key\">0.40 USD/シークレット/月</b></li></ul>",
        oxIds: [],
        src: [1075,1078]
      },
      {
        id: "c02-l04-p15",
        title: "暗記すべき数字・制限 ③",
        html: "<ul><li>Parameter Store 標準：<b class=\"key\">無料・10,000個・4KB</b></li><li>Parameter Store アドバンスト：<b class=\"key\">100,000個・8KB</b>・パラメータポリシー・有料</li><li>ACM パブリック証明書：<b class=\"key\">無料</b>（統合サービスで使う場合）</li><li>CloudFront 用 ACM 証明書：<b class=\"key\">us-east-1</b></li><li>S3 デフォルト暗号化（SSE-S3 自動適用）：<b class=\"key\">2023年1月</b>から</li><li>S3 バケットキー：KMSリクエストを<b class=\"key\">最大99%削減</b></li></ul>",
        oxIds: [],
        src: [1079,1084]
      },
      {
        id: "c02-l04-p16",
        title: "暗記すべき数字・制限 ④",
        html: "<ul><li>Shield Advanced：<b class=\"key\">3,000 USD/月</b>、<b class=\"key\">1年契約</b>、SRT <b class=\"key\">24時間365日</b></li><li>GuardDuty 無料トライアル：<b class=\"key\">30日</b></li><li>CloudHSM の推奨構成：<b class=\"key\">2台以上を別AZ</b></li></ul>",
        oxIds: [],
        src: [1085,1087]
      },
      {
        id: "c02-l04-p17",
        title: "暗記すべき数字・制限 ⑤",
        html: "<ul><li>語呂合わせ：「<b class=\"key\">クラウドの 前（フロント）は バージニア</b>」→ CloudFront の証明書は us-east-1</li><li>語呂合わせ：「<b class=\"key\">ガード（GuardDuty）は見張り、イン（Inspector）は検診、マ（Macie）は個人情報、ディテ（Detective）は捜査</b>」</li><li>語呂合わせ：「<b class=\"key\">暗号化はあとから無理、スナップでコピー</b>」→ EBS/RDS の暗号化手順</li></ul>",
        oxIds: [],
        src: [1088,1091]
      },
    ] },
  ],
  ox: [
    {
      id: "c02-ox-01",
      text: "AWS管理キー（aws/ebs など）はキーポリシーを編集できるため、他アカウントへの共有に使える。",
      answer: false,
      explain: "AWS管理キーのキーポリシーは<b class=\"key\">変更不可</b>。クロスアカウント共有には<b class=\"key\">カスタマー管理キー</b>を使う",
      src: 1093
    },
    {
      id: "c02-ox-02",
      text: "KMS の Encrypt API では、最大4KBまでのデータを直接暗号化できる。",
      answer: true,
      explain: "それより大きいデータは GenerateDataKey による<b class=\"key\">エンベロープ暗号化</b>を使う",
      src: 1096
    },
    {
      id: "c02-ox-03",
      text: "カスタマー管理キーの自動ローテーションを有効にすると、キーIDが変わるためアプリの修正が必要である。",
      answer: false,
      explain: "キーID・ARN・エイリアスは<b class=\"key\">変わらない</b>。古いキーマテリアルも保持され過去データを復号できる",
      src: 1099
    },
    {
      id: "c02-ox-04",
      text: "KMSキーは削除を指示すると即座に削除され、取り消すことはできない。",
      answer: false,
      explain: "<b class=\"key\">7〜30日（既定30日）</b>の待機期間があり、その間はキャンセル可能",
      src: 1102
    },
    {
      id: "c02-ox-05",
      text: "インポートしたキーマテリアル（BYOK）を使うKMSキーは、自動ローテーションを有効化できる。",
      answer: false,
      explain: "インポートキーは<b class=\"key\">自動ローテーション不可</b>。新しいキーを作りエイリアスを付け替えて手動で回す",
      src: 1105
    },
    {
      id: "c02-ox-06",
      text: "マルチリージョンキーは、プライマリキーとレプリカキーで同じキーマテリアルを共有する。",
      answer: true,
      explain: "同じキーID・キーマテリアルのため、別リージョンでクロスリージョン呼出しなしに復号できる",
      src: 1108
    },
    {
      id: "c02-ox-07",
      text: "AWS CloudHSM はシングルテナントのHSMであり、AWSは利用者の鍵にアクセスできない。",
      answer: true,
      explain: "鍵とHSMユーザーは利用者が管理。認証情報を失うとAWSも復旧できない",
      src: 1111
    },
    {
      id: "c02-ox-08",
      text: "Systems Manager Parameter Store の SecureString は、組込みの自動ローテーション機能を備えている。",
      answer: false,
      explain: "Parameter Store に自動ローテーションはない。必要なら <b class=\"key\">Secrets Manager</b>",
      src: 1114
    },
    {
      id: "c02-ox-09",
      text: "Secrets Manager は、Amazon RDS のデータベース認証情報の自動ローテーションにネイティブ対応している。",
      answer: true,
      explain: "RDS・Aurora・Redshift・DocumentDB は用意された Lambda でローテーションできる",
      src: 1117
    },
    {
      id: "c02-ox-10",
      text: "東京リージョンの ALB で使う ACM 証明書は、us-east-1 で発行しなければならない。",
      answer: false,
      explain: "ALB は<b class=\"key\">同じリージョン（東京）</b>の証明書。us-east-1 が必要なのは <b class=\"key\">CloudFront</b>",
      src: 1120
    },
    {
      id: "c02-ox-11",
      text: "ACM にインポートした外部CA発行の証明書は、ACM によって自動更新される。",
      answer: false,
      explain: "自動更新されるのは ACM 発行の証明書。インポート証明書は<b class=\"key\">自分で再インポート</b>",
      src: 1123
    },
    {
      id: "c02-ox-12",
      text: "現在、S3 に新規アップロードされるオブジェクトは、設定しなくても SSE-S3 で暗号化される。",
      answer: true,
      explain: "<b class=\"key\">2023年1月</b>から全バケットに既定で SSE-S3 が適用されている",
      src: 1126
    },
    {
      id: "c02-ox-13",
      text: "SSE-C では、S3 が利用者提供の暗号鍵を安全に保存し、以後の取得時は鍵の指定が不要になる。",
      answer: false,
      explain: "S3 は鍵を<b class=\"key\">保存しない</b>。取得時も毎回同じ鍵を渡す必要があり、HTTPS必須",
      src: 1129
    },
    {
      id: "c02-ox-14",
      text: "S3 バケットキーを有効化すると、SSE-KMS における KMS へのリクエスト数を大幅に削減できる。",
      answer: true,
      explain: "最大<b class=\"key\">99%</b>削減。KMSコストとスロットリング対策になる",
      src: 1132
    },
    {
      id: "c02-ox-15",
      text: "既存の未暗号化 EBS ボリュームは、ボリュームの設定変更で直接暗号化を有効にできる。",
      answer: false,
      explain: "スナップショット→<b class=\"key\">暗号化コピー</b>→新ボリューム作成→差替え の手順が必要",
      src: 1135
    },
    {
      id: "c02-ox-16",
      text: "EBS のデフォルト暗号化は、アカウント内の全リージョンに一括で適用される設定である。",
      answer: false,
      explain: "<b class=\"key\">リージョン単位</b>の設定。リージョンごとに有効化する",
      src: 1138
    },
    {
      id: "c02-ox-17",
      text: "暗号化された RDS インスタンスから、暗号化されていないリードレプリカを作成できる。",
      answer: false,
      explain: "暗号化DBのリードレプリカは<b class=\"key\">必ず暗号化</b>される",
      src: 1141
    },
    {
      id: "c02-ox-18",
      text: "AWS Direct Connect の接続は、既定で IPsec により暗号化されている。",
      answer: false,
      explain: "DX は既定で暗号化なし。<b class=\"key\">DX上でSite-to-Site VPN</b>、または <b class=\"key\">MACsec</b> を使う",
      src: 1144
    },
    {
      id: "c02-ox-19",
      text: "AWS WAF の Web ACL は Network Load Balancer に直接関連付けられる。",
      answer: false,
      explain: "WAF は <b class=\"key\">CloudFront・ALB・API Gateway・AppSync・Cognito</b> 等。NLBは対象外",
      src: 1147
    },
    {
      id: "c02-ox-20",
      text: "AWS Shield Standard はすべての AWS 利用者に追加料金なしで自動適用される。",
      answer: true,
      explain: "L3/L4 の一般的なDDoSを自動防御。SRT支援やコスト保護は <b class=\"key\">Advanced</b>",
      src: 1150
    },
    {
      id: "c02-ox-21",
      text: "AWS Firewall Manager を利用するには、AWS Organizations と AWS Config が必要である。",
      answer: true,
      explain: "管理者アカウントの指定、各アカウントでの Config 有効化が前提",
      src: 1153
    },
    {
      id: "c02-ox-22",
      text: "Amazon GuardDuty を使うには、事前に VPC Flow Logs と CloudTrail の証跡を作成しておく必要がある。",
      answer: false,
      explain: "GuardDuty は Flow Logs・DNSログ・CloudTrail 管理イベントを<b class=\"key\">独立して取得</b>する",
      src: 1156
    },
    {
      id: "c02-ox-23",
      text: "Amazon Inspector は ECR のコンテナイメージや Lambda 関数の脆弱性もスキャンできる。",
      answer: true,
      explain: "対象は <b class=\"key\">EC2・ECR・Lambda</b>。新しいCVEの公開時に自動で再評価する",
      src: 1159
    },
    {
      id: "c02-ox-24",
      text: "Amazon Macie は、RDS データベース内の個人情報を機械学習で検出するサービスである。",
      answer: false,
      explain: "Macie は <b class=\"key\">S3専用</b>",
      src: 1162
    },
    {
      id: "c02-ox-25",
      text: "AWS Security Hub のセキュリティ標準チェックを行うには、AWS Config の有効化が必要である。",
      answer: true,
      explain: "コントロールの多くが Config ルールで評価される",
      src: 1165
    },
    {
      id: "c02-ox-26",
      text: "AWS Artifact は、自社のAWS環境から監査エビデンスを自動収集するサービスである。",
      answer: false,
      explain: "それは <b class=\"key\">Audit Manager</b>。Artifact は <b class=\"key\">AWS自身の</b>SOC/PCI等のレポートや契約(BAA)を入手する",
      src: 1168
    },
  ],
  mc: [
    {
      id: "c02-mc-01",
      stem: "ある企業は、Amazon CloudFront と Application Load Balancer（ap-northeast-1）でWebサイトを配信している。独自ドメイン www.example.com で、ビューワーと CloudFront 間を HTTPS にしたい。証明書はACMで発行し、運用負荷を最小にしたい。どうすべきか。",
      choices: [
        "ap-northeast-1 の ACM でパブリック証明書を発行し、CloudFront ディストリビューションに関連付ける",
        "us-east-1 の ACM でパブリック証明書を発行し、CloudFront ディストリビューションに関連付ける",
        "AWS Private CA でプライベート証明書を発行し、CloudFront に関連付ける",
        "外部CAで証明書を購入し、オリジンのEC2インスタンスにインストールする",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "CloudFront は <b class=\"key\">us-east-1</b> の証明書しか選べない（ALB用なら東京で正しい）" },
        { ok: true, text: "us-east-1 の ACM 証明書を CloudFront に関連付ける。DNS検証なら自動更新で運用負荷最小" },
        { ok: false, text: "一般ユーザーのブラウザはプライベートCAを信頼しない。インターネット公開には不適" },
        { ok: false, text: "ビューワー⇔CloudFront 間の証明書にならない。更新も手動で運用負荷が高い" },
      ],
      tip: "「CloudFront」＋「ACM」が出たら即 <b class=\"key\">us-east-1</b>",
      src: 1173
    },
    {
      id: "c02-mc-02",
      stem: "金融企業が Amazon RDS for MySQL を未暗号化で運用している。監査で保存時暗号化が必須となった。データを保持したまま暗号化し、作業手順を最も少なくしたい。どうすべきか。",
      choices: [
        "RDS コンソールで DB インスタンスを変更し、暗号化を有効にする",
        "暗号化を有効にしたリードレプリカを作成し、昇格させる",
        "DB のスナップショットを作成し、KMSキーを指定して暗号化コピーし、そのコピーから DB を復元する",
        "AWS DMS で新しい暗号化 DynamoDB テーブルにデータを移行する",
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "既存インスタンスの暗号化を後から有効にすることは<b class=\"key\">できない</b>" },
        { ok: false, text: "未暗号化DBから暗号化リードレプリカは作成できない（MySQL 標準RDS）" },
        { ok: true, text: "<b class=\"key\">スナップショット→暗号化コピー→復元</b>が定番手順。最後に接続先を切替える" },
        { ok: false, text: "エンジン変更はアプリ改修が必要で過剰" },
      ],
      tip: "「既存の未暗号化」→「<b class=\"key\">スナップショットをコピーして暗号化</b>」を即答",
      src: 1185
    },
    {
      id: "c02-mc-03",
      stem: "ある企業はアプリが Amazon Aurora PostgreSQL のパスワードを設定ファイルに平文で保持している。セキュリティチームはパスワードを30日ごとに自動で変更し、アプリはコード変更を最小限に常に最新の値を取得できるようにしたい。最も運用負荷が少ない方法はどれか。",
      choices: [
        "Systems Manager Parameter Store の SecureString に保存し、EventBridge と自作Lambdaで更新する",
        "AWS Secrets Manager に保存し、自動ローテーションを30日間隔で有効化し、アプリはAPIで取得する",
        "パスワードを KMS で暗号化して S3 に保存し、アプリ起動時にダウンロードする",
        "IAM ロールにパスワードをタグとして付与し、アプリがタグを読み取る",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "動作はするが、ローテーション処理を<b class=\"key\">自作・保守</b>する必要があり運用負荷が高い" },
        { ok: true, text: "Aurora はネイティブ対応。<b class=\"key\">自動ローテーション</b>をマネージドで実現できる" },
        { ok: false, text: "ローテーションの仕組みがない。DB側パスワード変更とも連動しない" },
        { ok: false, text: "タグは機密情報の保存先ではない" },
      ],
      tip: "「<b class=\"key\">自動ローテーション</b>」＋「運用負荷最小」→ Secrets Manager",
      src: 1197
    },
    {
      id: "c02-mc-04",
      stem: "ある企業は数千のアプリ設定値（エンドポイントURL、機能フラグ等）を環境別に階層管理したい。一部はKMSで暗号化したい。値は4KB未満でローテーションは不要。最もコスト効率の良い方法はどれか。",
      choices: [
        "AWS Secrets Manager に各設定値をシークレットとして保存する",
        "Systems Manager Parameter Store の標準パラメータ（String/SecureString）に保存する",
        "Amazon DynamoDB テーブルに保存し、クライアント側暗号化を行う",
        "AWS AppConfig と CloudHSM を組み合わせて保存する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        { ok: false, text: "1シークレット<b class=\"key\">0.40 USD/月</b>。数千個では高コスト。ローテーション不要なら過剰" },
        { ok: true, text: "標準パラメータは<b class=\"key\">無料</b>、10,000個・4KBまで、階層管理・SecureString で KMS 暗号化可" },
        { ok: false, text: "自前の実装・暗号化処理が必要で手間とコストが増える" },
        { ok: false, text: "CloudHSM は高額で、要件に対し明らかに過剰" },
      ],
      tip: "「設定値」「ローテーション不要」「低コスト」→ <b class=\"key\">Parameter Store</b>",
      src: 1209
    },
    {
      id: "c02-mc-05",
      stem: "ある企業は大量の小さなオブジェクトを SSE-KMS（カスタマー管理キー）で S3 に保存している。最近 KMS のリクエスト料金が増大し、ThrottlingException も発生している。暗号化要件（KMSキー使用の監査）を維持しつつ最も簡単に改善する方法はどれか。",
      choices: [
        "デフォルト暗号化を SSE-S3 に変更する",
        "S3 バケットキーを有効化する",
        "SSE-C に切り替え、アプリ側で鍵を管理する",
        "KMS キーを AWS CloudHSM のカスタムキーストアへ移行する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "KMSキーによる制御・監査の要件を満たさなくなる" },
        { ok: true, text: "KMS へのリクエストを<b class=\"key\">最大99%削減</b>。KMSキーはそのまま使える" },
        { ok: false, text: "鍵管理の負担が増え、KMS 監査要件も満たさない" },
        { ok: false, text: "コスト増。リクエスト削減にはならない" },
      ],
      tip: "「SSE-KMS」＋「コスト増/スロットリング」→ <b class=\"key\">バケットキー</b>",
      src: 1221
    },
    {
      id: "c02-mc-06",
      stem: "ある規制業界の企業は、暗号鍵を保持するハードウェアを他の顧客と共有しないこと、鍵へのアクセスをAWS担当者を含め自社だけに限定することを求められている。既存のJavaアプリはJCEで暗号処理を行っている。どのサービスを使うべきか。",
      choices: [
        "AWS KMS のカスタマー管理キー",
        "AWS KMS のマルチリージョンキー",
        "AWS CloudHSM",
        "AWS Secrets Manager",
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "KMS は<b class=\"key\">マルチテナント</b>のHSM群。専有ハードウェアの要件を満たさない" },
        { ok: false, text: "リージョン間で鍵を共有する機能で、専有性とは無関係" },
        { ok: true, text: "<b class=\"key\">シングルテナント</b>HSM。鍵は利用者のみ管理、<b class=\"key\">JCE/PKCS#11</b> に対応" },
        { ok: false, text: "シークレット保管サービスでありHSMではない" },
      ],
      tip: "「専有」「AWSもアクセス不可」「業界標準API」→ <b class=\"key\">CloudHSM</b>",
      src: 1233
    },
    {
      id: "c02-mc-07",
      stem: "あるSaaS企業は、データを us-east-1 でクライアント側暗号化し、DR用に eu-west-1 へ複製している。リージョン障害時も eu-west-1 のみで復号でき、クロスリージョンのKMS呼出しを避けたい。最も運用負荷が少ない方法はどれか。",
      choices: [
        "各リージョンで別々のKMSキーを作成し、複製時に毎回再暗号化する",
        "KMSのマルチリージョンキーを us-east-1 に作成し、eu-west-1 にレプリカキーを作成する",
        "us-east-1 のKMSキーをエクスポートし、eu-west-1 にインポートする",
        "データキーを平文のまま S3 に保存して両リージョンで共有する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "実現できるが、複製のたびに再暗号化処理が必要で運用負荷が高い" },
        { ok: true, text: "<b class=\"key\">同じキーマテリアル</b>のため、eu-west-1 のレプリカで直接復号可能" },
        { ok: false, text: "KMSで生成したキーマテリアルは<b class=\"key\">エクスポートできない</b>" },
        { ok: false, text: "平文データキーの保存はセキュリティ上不可" },
      ],
      tip: "「別リージョンで同じ鍵」「クロスリージョン呼出し回避」→ <b class=\"key\">マルチリージョンキー</b>",
      src: 1245
    },
    {
      id: "c02-mc-08",
      stem: "ある企業は ALB 配下のWebアプリで SQL インジェクション攻撃と、特定IPからの大量リクエストを受けている。また特定の国からのアクセスを全面的に拒否したい。最適な対策はどれか。",
      choices: [
        "セキュリティグループで攻撃元IPを拒否する",
        "ネットワークACLにSQLインジェクションのシグネチャを登録する",
        "ALB に AWS WAF を関連付け、マネージドルール・レートベースルール・Geo match ルールを設定する",
        "AWS Shield Standard を有効化する",
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "SG は<b class=\"key\">許可ルールのみ</b>で拒否を書けない。HTTP内容も検査できない" },
        { ok: false, text: "NACL は L3/L4。SQLインジェクションのような<b class=\"key\">L7の中身</b>は見られない" },
        { ok: true, text: "WAF でSQLi検知・<b class=\"key\">レート制限</b>・<b class=\"key\">国単位ブロック</b>をまとめて実装できる" },
        { ok: false, text: "Shield Standard は自動適用済みでL3/L4 DDoS対策。SQLiは防げない" },
      ],
      tip: "「SQLi/XSS」「国ブロック」「HTTPフラッド」→ <b class=\"key\">WAF</b>",
      src: 1257
    },
    {
      id: "c02-mc-09",
      stem: "あるEC企業は大規模セールで大規模DDoSを懸念している。攻撃時に専門チームの24時間支援を受け、攻撃によるオートスケーリング費用の増加を補償してほしい。どうすべきか。",
      choices: [
        "AWS Shield Standard を利用し、CloudWatch アラームを設定する",
        "AWS Shield Advanced をサブスクライブし、CloudFront・ALB・Route 53 を保護対象に登録する",
        "Amazon GuardDuty を有効化し、検出結果を SNS で通知する",
        "AWS Network Firewall を VPC に配置する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "Standard には<b class=\"key\">SRT支援もコスト保護もない</b>" },
        { ok: true, text: "Advanced は <b class=\"key\">SRT 24時間365日</b>＋<b class=\"key\">DDoSコスト保護</b>" },
        { ok: false, text: "GuardDuty は脅威検知で、DDoS緩和やコスト補償はない" },
        { ok: false, text: "VPC内の通信検査。エッジでの大規模DDoS緩和や補償は提供しない" },
      ],
      tip: "「専門チーム」「コスト保護」→ <b class=\"key\">Shield Advanced</b>",
      src: 1269
    },
    {
      id: "c02-mc-10",
      stem: "ある企業は AWS Organizations で50以上のアカウントを運用している。全アカウントのALB と API Gateway に共通の WAF ルールを適用し、今後追加されるアカウントやリソースにも自動適用したい。最も運用負荷が少ない方法はどれか。",
      choices: [
        "各アカウントで CloudFormation スタックを手動デプロイする",
        "AWS Firewall Manager で WAF セキュリティポリシーを作成し、組織全体に適用する",
        "AWS Security Hub で WAF ルールを配布する",
        "AWS Config ルールで WAF 未適用リソースを検出し、担当者が手動で修正する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "新規アカウント・リソースへの<b class=\"key\">自動適用</b>ができず運用負荷大" },
        { ok: true, text: "Firewall Manager は組織横断でポリシーを一元管理し、<b class=\"key\">新規リソースにも自動適用</b>" },
        { ok: false, text: "Security Hub は結果の集約・準拠チェックで、ルール配布機能はない" },
        { ok: false, text: "検出はできるが修正が手動で運用負荷が高い" },
      ],
      tip: "「Organizations」「全アカウント」「自動適用」→ <b class=\"key\">Firewall Manager</b>",
      src: 1281
    },
    {
      id: "c02-mc-11",
      stem: "ある企業のVPC内EC2は、OSアップデートのため一部の外部ドメイン（*.example-repo.comなど）にのみHTTPSで通信できるようにしたい。それ以外のドメイン宛ては拒否し、侵入検知も行いたい。マネージドで実現する方法はどれか。",
      choices: [
        "セキュリティグループのアウトバウンドルールにドメイン名を指定する",
        "AWS Network Firewall をファイアウォールサブネットに配置し、ドメインリストのステートフルルールを設定",
        "AWS WAF を NAT ゲートウェイに関連付ける",
        "ネットワークACLでリポジトリのIPアドレス範囲を許可する",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "SG は IP/CIDR・ポート指定で、<b class=\"key\">ドメイン名を指定できない</b>" },
        { ok: true, text: "Network Firewall は <b class=\"key\">FQDNフィルタリング</b>と <b class=\"key\">IPS</b> を提供。ルートテーブルで経由させる" },
        { ok: false, text: "WAF は NAT ゲートウェイに関連付けられない" },
        { ok: false, text: "外部サービスのIPは変動し、ドメイン単位の制御や侵入検知ができない" },
      ],
      tip: "「アウトバウンドをドメインで制限」「IPS」→ <b class=\"key\">Network Firewall</b>",
      src: 1293
    },
    {
      id: "c02-mc-12",
      stem: "セキュリティチームは、EC2インスタンスが暗号通貨マイニングに使われていないか、漏洩した認証情報で異常なAPI呼出しが行われていないかを、エージェント導入なしで継続監視したい。検出時は自動でインスタンスを隔離したい。最適な組合せはどれか。",
      choices: [
        "Amazon Inspector と AWS Systems Manager Run Command",
        "Amazon GuardDuty と Amazon EventBridge ルールから起動する AWS Lambda",
        "Amazon Macie と Amazon SNS",
        "AWS Audit Manager と AWS Config",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "Inspector は<b class=\"key\">脆弱性</b>スキャンで、不審な挙動の検知ではない" },
        { ok: true, text: "GuardDuty が脅威を検知 → <b class=\"key\">EventBridge → Lambda</b> でSGを差替え隔離" },
        { ok: false, text: "Macie は S3 の機密データ検出" },
        { ok: false, text: "監査証跡の収集・設定準拠で、脅威検知ではない" },
      ],
      tip: "「マイニング」「異常なAPI」→ GuardDuty。「自動対応」→ EventBridge＋Lambda",
      src: 1305
    },
    {
      id: "c02-mc-13",
      stem: "GuardDuty が、あるIAMユーザーの認証情報が不審なIPから使われたと検出した。セキュリティチームはこのIPがほかにどのリソースと通信し、どのAPIを呼んだか過去にさかのぼって関係を可視化し根本原因を調べたい。最適なサービスはどれか。",
      choices: [
        "AWS Security Hub",
        "Amazon Detective",
        "Amazon Inspector",
        "AWS Artifact",
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "結果の集約・準拠チェックは得意だが、関係性の深い調査は Detective" },
        { ok: true, text: "CloudTrail・Flow Logs・GuardDuty 結果からグラフを作り<b class=\"key\">根本原因を調査</b>" },
        { ok: false, text: "脆弱性スキャン" },
        { ok: false, text: "AWSのコンプライアンスレポート入手" },
      ],
      tip: "「調査」「根本原因」「関係を可視化」→ <b class=\"key\">Detective</b>",
      src: 1317
    },
    {
      id: "c02-mc-14",
      stem: "ある医療系企業は、S3 に保存された大量のファイルに患者の個人情報が含まれていないか自動で発見したい。また、組織内の全アカウントのセキュリティ検出結果を1か所に集約し、AWS 基礎セキュリティのベストプラクティスへの準拠状況を継続的に評価したい。どの2つを使うべきか。",
      choices: [
        "Amazon Macie",
        "Amazon Inspector",
        "AWS Security Hub",
        "Amazon Detective",
        "AWS Artifact",
      ],
      answer: ["A","C"],
      selectCount: 2,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "S3 内の <b class=\"key\">PII</b> を機械学習で自動検出" },
        { ok: false, text: "EC2/ECR/Lambda の脆弱性スキャン。S3 の個人情報は対象外" },
        { ok: true, text: "結果の<b class=\"key\">集約</b>と <b class=\"key\">FSBP 等の準拠チェック</b>（Config が前提）" },
        { ok: false, text: "インシデント調査用。準拠評価は行わない" },
        { ok: false, text: "AWS自身の監査レポートを入手するだけ" },
      ],
      tip: "要件を2つに分解し「S3の個人情報→Macie」「集約＋準拠→Security Hub」",
      src: 1329
    },
    {
      id: "c02-mc-15",
      stem: "ある企業は本番アカウントの EBS ボリューム（未暗号化）のデータを監査アカウントへ共有したい。共有時は必ず暗号化された状態にし、監査アカウントがそのデータからボリュームを作成できるようにする。必要な手順はどれか。2つ選べ。",
      choices: [
        "スナップショットを作成し、カスタマー管理キーを指定して暗号化コピーを作成する",
        "スナップショットを作成し、AWS管理キー（aws/ebs）で暗号化コピーを作成する",
        "カスタマー管理キーのキーポリシーで監査アカウントに使用権限を付与し、スナップショットを共有する",
        "元のボリュームの設定を変更して暗号化を有効にし、スナップショットを公開する",
        "スナップショットを S3 にエクスポートし、SSE-S3 で暗号化して共有する",
      ],
      answer: ["A","C"],
      selectCount: 2,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "未暗号化スナップショットを<b class=\"key\">CMKで暗号化コピー</b>" },
        { ok: false, text: "AWS管理キーはキーポリシーを変更できず、<b class=\"key\">他アカウントと共有できない</b>" },
        { ok: true, text: "スナップショットの共有に加え、<b class=\"key\">KMSキーの権限</b>も相手に付与する必要がある" },
        { ok: false, text: "既存ボリュームを直接暗号化できない。公開は要件に反する" },
        { ok: false, text: "EBSスナップショットをそのまま共有する手段ではなく、要件を満たさない" },
      ],
      tip: "「暗号化共有」＝「<b class=\"key\">CMKで暗号化</b>」＋「<b class=\"key\">キーポリシーで相手に許可</b>」のセット",
      src: 1343
    },
    {
      id: "c02-mc-16",
      stem: "ある企業は S3 バケットに機密文書を保存する。セキュリティ要件は「①HTTPS以外のリクエストを拒否」「②アップロードは必ず指定したKMSキーによるSSE-KMSで暗号化」。最も運用負荷が少ない組合せはどれか。2つ選べ。",
      choices: [
        "バケットポリシーで aws:SecureTransport が false のリクエストを Deny する",
        "バケットのデフォルト暗号化を指定KMSキーの SSE-KMS に設定する",
        "すべてのクライアントにクライアント側暗号化ライブラリを導入する",
        "S3 イベント通知で Lambda を起動し、未暗号化オブジェクトを削除する",
        "SSE-C を使用し、鍵を Parameter Store で配布する",
      ],
      answer: ["A","B"],
      selectCount: 2,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "HTTPS強制の定番。HTTPでのアクセスを拒否" },
        { ok: true, text: "暗号化指定のないPUTも<b class=\"key\">自動で指定KMSキーで暗号化</b>される" },
        { ok: false, text: "全クライアント改修が必要で運用負荷大。SSE-KMS の要件とも異なる" },
        { ok: false, text: "事後処理で一時的に要件違反の状態が生じ、運用も複雑" },
        { ok: false, text: "SSE-KMS ではなく、鍵配布の運用負荷も大きい" },
      ],
      tip: "「HTTPS強制」→ <b class=\"key\">SecureTransport</b>、「暗号化の既定」→ <b class=\"key\">デフォルト暗号化</b>",
      src: 1357
    },
  ]
});
window.DATA.chapters.push({
  no: 3,
  title: "ネットワークとコンテンツ配信",
  domainNote: "全ドメイン横断",
  src: [1372, 2109],
  lessons: [
    { id: "c03-l01", title: "VPCの基礎（CIDR・サブネット・ルーティング・ゲートウェイ・SGとNACL）", pages: [
      {
        id: "c03-l01-p01",
        title: "全体像：AWSネットワークの地図 ①",
        html: "<ul><li><b class=\"key\">VPC</b>＝AWS上に作る自分専用の論理的に分離されたネットワーク（<b class=\"key\">1リージョン</b>に閉じる）<ul><li>VPCの中を<b class=\"key\">サブネット</b>（<b class=\"key\">1つのAZ</b>に閉じる）に分割してリソースを置く</li></ul></li><li>「外への出口」：<b class=\"key\">IGW</b>（インターネット）／<b class=\"key\">NAT Gateway</b>（プライベート→外へ一方向）</li></ul>",
        oxIds: [],
        src: [1377,1379]
      },
      {
        id: "c03-l01-p02",
        title: "全体像：AWSネットワークの地図 ②",
        html: "<ul><li>「AWSサービスへの近道」：<b class=\"key\">VPCエンドポイント</b>（インターネットを通らない）</li><li>「VPC同士」：<b class=\"key\">VPCピアリング</b>（1対1）／<b class=\"key\">Transit Gateway</b>（ハブ＆スポーク）</li><li>「オンプレミスと接続」：<b class=\"key\">Site-to-Site VPN</b>（早い・安い）／<b class=\"key\">Direct Connect</b>（専用線・安定）</li><li>「名前解決と振り分け」：<b class=\"key\">Route 53</b>（DNS）</li></ul>",
        oxIds: [],
        src: [1380,1383]
      },
      {
        id: "c03-l01-p03",
        title: "全体像：AWSネットワークの地図 ③",
        html: "<ul><li>「エッジで高速化」：<b class=\"key\">CloudFront</b>（HTTPキャッシュ）／<b class=\"key\">Global Accelerator</b>（Anycast IP）</li><li>「負荷分散」：<b class=\"key\">Elastic Load Balancing</b>（ALB／NLB／GWLB／CLB）</li><li><span class=\"badge b-freq\">頻出</span>ネットワーク問題は「<b class=\"key\">どの経路を通るか</b>」「<b class=\"key\">どこで止めるか</b>」を図で考えると解ける</li></ul>",
        oxIds: [],
        src: [1384,1386]
      },
      {
        id: "c03-l01-p04",
        title: "VPCとCIDR・サブネットと予約IP（5個） ①",
        html: "<h4>VPCとCIDR</h4><ul><li><b class=\"key\">CIDR</b>：IPアドレス範囲の表記（例：10.0.0.0/16 → 65,536個）<ul><li>VPCのIPv4 CIDRは <b class=\"key\">/16（最大）〜 /28（最小）</b></li><li>推奨は<b class=\"key\">RFC 1918</b>のプライベート範囲（10.0.0.0/8、172.16.0.0/12、192.168.0.0/16）</li></ul></li><li>VPC作成後に<b class=\"key\">セカンダリCIDRを追加</b>できる（既存CIDRの変更は不可）</li><li><span class=\"badge b-cmp\">比較</span><b class=\"key\">デフォルトVPC</b>：各リージョンに自動作成、<b class=\"key\">172.31.0.0/16</b>、全サブネットがパブリック</li></ul>",
        oxIds: [],
        src: [1389,1393]
      },
      {
        id: "c03-l01-p05",
        title: "VPCとCIDR・サブネットと予約IP（5個） ②",
        html: "<ul><li><span class=\"badge b-freq\">頻出</span><b class=\"key\">CIDRの重複</b>はVPCピアリング・VPN接続の妨げ → 設計段階で重複しない範囲を割り当てる</li><li>IPv6：AWSが/56のCIDRを割り当て（<b class=\"key\">IPv6はすべてグローバルユニキャスト</b>＝プライベートの概念なし）</li></ul><h4>サブネットと予約IP（5個）</h4><ul><li>サブネットは<b class=\"key\">1つのAZ</b>に属する（AZをまたげない）→ 高可用性には<b class=\"key\">複数AZにサブネット</b>を作る</li></ul>",
        oxIds: ["c03-ox-02"],
        src: [1394,1398]
      },
      {
        id: "c03-l01-p06",
        title: "VPCとCIDR・サブネットと予約IP（5個） ③",
        html: "<ul><li><b class=\"key\">パブリックサブネット</b>：ルートテーブルに <b class=\"key\">0.0.0.0/0 → IGW</b> があるサブネット</li><li><b class=\"key\">プライベートサブネット</b>：IGWへのルートがないサブネット</li></ul>",
        oxIds: [],
        src: [1399,1400]
      },
      {
        id: "c03-l01-p07",
        title: "VPCとCIDR・サブネットと予約IP（5個） ④",
        html: "<ul><li>各サブネットで<b class=\"key\">先頭4個＋最後の1個＝5個</b>のIPが予約され使えない（例：10.0.0.0/24）<ul><li><b class=\"key\">.0</b>：ネットワークアドレス</li><li><b class=\"key\">.1</b>：VPCルーター</li><li><b class=\"key\">.2</b>：DNS（Amazon提供DNS、VPC CIDRのベース＋2）</li><li><b class=\"key\">.3</b>：将来の利用のためAWSが予約</li><li><b class=\"key\">.255</b>：ブロードキャスト（VPCはブロードキャスト非対応だが予約）</li></ul></li></ul>",
        oxIds: [],
        src: [1401,1406]
      },
      {
        id: "c03-l01-p08",
        title: "VPCとCIDR・サブネットと予約IP（5個） ⑤",
        html: "<ul><li>計算例：/24＝256個 → 使えるのは<b class=\"key\">251個</b>／/28＝16個 → <b class=\"key\">11個</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「/27に30台必要」→ 32−5＝<b class=\"key\">27個</b>しか使えないので足りない</span></li></ul>",
        oxIds: [],
        src: [1407,1408]
      },
      {
        id: "c03-l01-p09",
        title: "ルートテーブル・インターネットゲートウェイ（IGW） ①",
        html: "<h4>ルートテーブル</h4><ul><li>サブネットごとに<b class=\"key\">1つのルートテーブル</b>を関連付け（1つのルートテーブルは複数サブネットで共有可）</li><li><b class=\"key\">メインルートテーブル</b>：明示的に関連付けないサブネットが使う</li><li><b class=\"key\">local ルート</b>：VPC CIDR内の通信。<b class=\"key\">削除不可</b>、常に存在</li><li><b class=\"key\">最長一致（ロンゲストプレフィックスマッチ）</b>：より具体的な（プレフィックスの長い）ルートが優先</li><li>ターゲット例：IGW、NAT Gateway、VGW、TGW、ピアリング接続、ゲートウェイ型エンドポイント（プレフィックスリスト）</li></ul><h4>インターネットゲートウェイ（IGW）</h4><ul><li>VPCとインターネット間の通信を可能にする、<b class=\"key\">水平スケール・冗長化済み</b>のマネージドコンポーネント</li></ul>",
        oxIds: [],
        src: [1411,1418]
      },
      {
        id: "c03-l01-p10",
        title: "ルートテーブル・インターネットゲートウェイ（IGW） ②",
        html: "<ul><li><b class=\"key\">1つのVPCに1つ</b>のみアタッチ可能</li><li>インスタンスがインターネットと通信する条件（<b class=\"key\">すべて必要</b>）<ul><li><b class=\"key\">IGWをVPCにアタッチ</b></li><li>ルートテーブルに <b class=\"key\">0.0.0.0/0 → IGW</b></li><li>インスタンスに<b class=\"key\">パブリックIPまたはElastic IP</b></li><li>セキュリティグループ・NACLで通信を許可</li></ul></li><li>IGWは<b class=\"key\">帯域制限なし・可用性リスクなし</b>（単一障害点にならない）</li></ul>",
        oxIds: [],
        src: [1419,1425]
      },
      {
        id: "c03-l01-p11",
        title: "NAT Gateway vs NATインスタンス ①",
        html: "<ul><li>目的：<b class=\"key\">プライベートサブネット</b>のインスタンスが<b class=\"key\">外向き</b>（パッチ取得など）にインターネットへ出る<ul><li>外部からの<b class=\"key\">内向き接続は受け付けない</b></li></ul></li><li><b class=\"key\">NAT Gateway</b>（推奨・マネージド）<ul><li><b class=\"key\">パブリックサブネット</b>に作成し、<b class=\"key\">Elastic IP</b>を関連付け（パブリックNATの場合）</li></ul></li></ul>",
        oxIds: ["c03-ox-03"],
        src: [1428,1431]
      },
      {
        id: "c03-l01-p12",
        title: "NAT Gateway vs NATインスタンス ②",
        html: "<ul><li><b class=\"key\">AZ単位</b>のリソース → 高可用性には<b class=\"key\">AZごとにNAT Gateway</b>＋AZごとのルートテーブル<ul><li>帯域は<b class=\"key\">5 Gbpsから自動スケールし最大100 Gbps</b></li><li><b class=\"key\">セキュリティグループは関連付けられない</b>（NACLで制御）</li><li>料金：<b class=\"key\">時間課金＋処理データ量（GB）課金</b></li><li><b class=\"key\">プライベートNAT</b>：VPC間・オンプレ間の重複CIDR対応などでプライベートIPに変換（IGW不要）</li></ul></li></ul>",
        oxIds: ["c03-ox-04","c03-ox-05"],
        src: [1432,1436]
      },
      {
        id: "c03-l01-p13",
        title: "NAT Gateway vs NATインスタンス ③",
        html: "<ul><li><b class=\"key\">NATインスタンス</b>（旧方式・自己管理EC2）<ul><li><b class=\"key\">送信元/送信先チェックの無効化</b>が必要</li><li>セキュリティグループ適用可、<b class=\"key\">踏み台（Bastion）兼用可</b>、ポートフォワーディング可</li><li>可用性・スケールは<b class=\"key\">自分でスクリプト・ASG等で管理</b></li></ul></li></ul>",
        oxIds: [],
        src: [1437,1440]
      },
      {
        id: "c03-l01-p14",
        title: "NAT Gateway vs NATインスタンス ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>「運用負荷最小・高可用性」→ <b class=\"key\">NAT Gateway</b>／「最小コストで踏み台兼用」→ NATインスタンス</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>NAT Gatewayを<b class=\"key\">プライベートサブネット</b>に置く、または<b class=\"key\">1つだけ</b>置いてAZ障害で全滅</span></li></ul>",
        oxIds: [],
        src: [1441,1442]
      },
      {
        id: "c03-l01-p15",
        title: "Egress-only インターネットゲートウェイ・Elastic IP（EIP） ①",
        html: "<h4>Egress-only インターネットゲートウェイ</h4><ul><li><b class=\"key\">IPv6専用</b>の「外向きのみ」ゲートウェイ（IPv6版NAT Gatewayに相当する役割）</li><li>IPv6はアドレス変換しないので、NATではなく<b class=\"key\">ステートフルに外向きのみ許可</b></li><li>ルート：<b class=\"key\">::/0 → Egress-only IGW</b></li><li><span class=\"badge b-freq\">頻出</span>「IPv6で外向き通信だけ許可、外部からの接続は拒否」→ <b class=\"key\">Egress-only IGW</b></li></ul><h4>Elastic IP（EIP）</h4><ul><li><b class=\"key\">固定のパブリックIPv4アドレス</b>。インスタンス停止・起動でも変わらない</li><li>別インスタンスに<b class=\"key\">付け替え</b>て障害時に切り替え可能</li></ul>",
        oxIds: ["c03-ox-06"],
        src: [1445,1452]
      },
      {
        id: "c03-l01-p16",
        title: "Egress-only インターネットゲートウェイ・Elastic IP（EIP） ②",
        html: "<ul><li>デフォルト上限：<b class=\"key\">リージョンあたり5個</b>（引き上げ申請可）</li><li>料金：<b class=\"key\">2024年2月以降、パブリックIPv4はすべて時間課金</b>（使用中のEIPも含む）</li><li><span class=\"badge b-cmp\">比較</span>通常のパブリックIPは<b class=\"key\">停止・起動で変わる</b></li><li><span class=\"badge b-freq\">頻出</span>固定IPが必要 → EC2単体ならEIP、ロードバランサーなら<b class=\"key\">NLB（AZごとにEIP可）</b>か<b class=\"key\">Global Accelerator</b></li></ul>",
        oxIds: [],
        src: [1453,1456]
      },
      {
        id: "c03-l01-p17",
        title: "セキュリティグループ（SG）vs ネットワークACL（NACL） ①",
        html: "<ul><li><b class=\"key\">セキュリティグループ</b>：<b class=\"key\">インスタンス（ENI）単位</b>の仮想ファイアウォール<ul><li><b class=\"key\">ステートフル</b>：許可した通信の<b class=\"key\">戻り通信は自動で許可</b></li><li><b class=\"key\">許可（Allow）ルールのみ</b>。拒否ルールは書けない</li><li>デフォルト：<b class=\"key\">インバウンド全拒否、アウトバウンド全許可</b></li></ul></li></ul>",
        oxIds: ["c03-ox-07"],
        src: [1459,1462]
      },
      {
        id: "c03-l01-p18",
        title: "セキュリティグループ（SG）vs ネットワークACL（NACL） ②",
        html: "<ul><li>すべてのルールを<b class=\"key\">評価してから</b>判断（順序なし）<ul><li>ソースに<b class=\"key\">別のSGを指定</b>できる（例：ALBのSGからのみ許可）</li></ul></li><li><b class=\"key\">ネットワークACL</b>：<b class=\"key\">サブネット単位</b><ul><li><b class=\"key\">ステートレス</b>：戻り通信も<b class=\"key\">明示的に許可が必要</b></li></ul></li></ul>",
        oxIds: [],
        src: [1463,1466]
      },
      {
        id: "c03-l01-p19",
        title: "セキュリティグループ（SG）vs ネットワークACL（NACL） ③",
        html: "<ul><li><b class=\"key\">許可と拒否</b>の両方を書ける → <b class=\"key\">特定IPのブロックはNACL</b><ul><li><b class=\"key\">ルール番号の小さい順</b>に評価し、最初に一致したルールを適用（以降は見ない）</li><li><b class=\"key\">デフォルトNACL：全許可</b>／<b class=\"key\">カスタムNACL：作成時は全拒否</b></li></ul></li></ul>",
        oxIds: ["c03-ox-09","c03-ox-10"],
        src: [1467,1469]
      },
      {
        id: "c03-l01-p20",
        title: "セキュリティグループ（SG）vs ネットワークACL（NACL） ④",
        html: "<ul><li><b class=\"key\">エフェメラルポート</b>：クライアント側が使う一時ポート<ul><li>NACLはステートレスなので、戻り通信用に<b class=\"key\">1024〜65535</b>のアウトバウンド（またはインバウンド）許可が必要</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>NACLのインバウンドで443を許可したのに通信できない → <b class=\"key\">アウトバウンドのエフェメラルポート</b>未許可</span></li></ul></li><li><span class=\"badge b-cmp\">比較</span>「特定IPを拒否」→ <b class=\"key\">NACL</b>／「アプリ層ごとに最小権限」→ <b class=\"key\">SG（SG参照）</b></li><li>両方を通過する必要あり：外→NACL（サブネット）→SG（インスタンス）</li></ul>",
        oxIds: ["c03-ox-08"],
        src: [1470,1474]
      },
    ] },
    { id: "c03-l02", title: "VPCエンドポイント・VPC間接続・ハイブリッド接続", pages: [
      {
        id: "c03-l02-p01",
        title: "VPCエンドポイント ①",
        html: "<ul><li>VPCから<b class=\"key\">インターネット・NAT・IGWを経由せず</b>、AWSサービスにプライベート接続</li></ul>",
        oxIds: [],
        src: [1477,1477]
      },
      {
        id: "c03-l02-p02",
        title: "VPCエンドポイント ②",
        html: "<ul><li><b class=\"key\">ゲートウェイ型エンドポイント</b><ul><li>対象：<b class=\"key\">Amazon S3 と Amazon DynamoDB のみ</b></li><li><b class=\"key\">ルートテーブル</b>にプレフィックスリスト宛のルートを追加する方式</li><li><b class=\"key\">無料</b></li><li><b class=\"key\">同一リージョン</b>のサービスのみ／<b class=\"key\">オンプレミス・ピアリング先VPCからは利用不可</b></li></ul></li></ul>",
        oxIds: ["c03-ox-11"],
        src: [1478,1482]
      },
      {
        id: "c03-l02-p03",
        title: "VPCエンドポイント ③",
        html: "<ul><li><b class=\"key\">インターフェース型エンドポイント（AWS PrivateLink）</b><ul><li>サブネットに<b class=\"key\">ENI（プライベートIP）</b>を作成。<b class=\"key\">セキュリティグループ</b>を適用可</li><li>多数のAWSサービス（SQS、SNS、KMS、Secrets Manager、ECR、CloudWatch等）とS3に対応</li><li><b class=\"key\">時間課金＋データ処理課金</b></li><li><b class=\"key\">Direct Connect／VPN経由のオンプレミスからも利用可</b></li></ul></li></ul>",
        oxIds: ["c03-ox-12"],
        src: [1483,1487]
      },
      {
        id: "c03-l02-p04",
        title: "VPCエンドポイント ④",
        html: "<ul><li><b class=\"key\">PrivateLink（エンドポイントサービス）</b>：自社サービスを<b class=\"key\">NLB（またはGWLB）</b>の背後に置き、他VPC・他アカウントへ公開<ul><li>VPCピアリング不要、<b class=\"key\">CIDR重複でもOK</b>、一方向（消費側→提供側）</li></ul></li><li><b class=\"key\">エンドポイントポリシー</b>：エンドポイント経由で操作できるリソースを制限（例：特定バケットのみ）</li></ul>",
        oxIds: [],
        src: [1488,1490]
      },
      {
        id: "c03-l02-p05",
        title: "VPCエンドポイント ⑤",
        html: "<ul><li>S3バケットポリシーの <b class=\"key\">aws:SourceVpce</b> 条件で「エンドポイント経由のみ許可」</li><li><span class=\"badge b-freq\">頻出</span>「プライベートサブネットからS3へ、NAT料金を削減」→ <b class=\"key\">S3ゲートウェイエンドポイント</b></li><li><span class=\"badge b-freq\">頻出</span>「オンプレからプライベートにS3へ」→ <b class=\"key\">S3インターフェースエンドポイント</b></li></ul>",
        oxIds: [],
        src: [1491,1493]
      },
      {
        id: "c03-l02-p06",
        title: "VPCピアリング・Transit Gateway（TGW） ①",
        html: "<h4>VPCピアリング</h4><ul><li><b class=\"key\">2つのVPCを1対1</b>でプライベート接続（同一/別アカウント、<b class=\"key\">同一/別リージョン</b>可）</li><li><b class=\"key\">推移的ルーティング不可</b>：A-B、B-Cがピアリングでも<b class=\"key\">A-Cは通信できない</b><ul><li>必要なら<b class=\"key\">A-Cも直接ピアリング</b>（フルメッシュ）するか<b class=\"key\">Transit Gateway</b></li></ul></li></ul>",
        oxIds: ["c03-ox-13"],
        src: [1496,1498]
      },
      {
        id: "c03-l02-p07",
        title: "VPCピアリング・Transit Gateway（TGW） ②",
        html: "<ul><li><b class=\"key\">CIDRの重複不可</b></li><li>両側のルートテーブルにルート追加が必要</li><li>エッジ間ルーティング不可：ピア先のIGW・NAT・VPN・DXを経由して外へ出ることはできない</li><li>帯域制限なし・単一障害点なし。<b class=\"key\">ピアリング自体は無料</b>（データ転送料はかかる）</li><li>別リージョンのSGは参照不可（同一リージョンならピア先のSG参照可）</li></ul><h4>Transit Gateway（TGW）</h4><ul><li><b class=\"key\">ハブ＆スポーク型</b>のリージョナルなルーター。数千のVPC・VPN・DXを<b class=\"key\">1か所で集約</b></li><li><b class=\"key\">推移的ルーティング可能</b>（VPCピアリングとの最大の違い）</li><li>アタッチメント：VPC、Site-to-Site VPN、Direct Connect Gateway、<b class=\"key\">TGWピアリング（リージョン間）</b></li></ul>",
        oxIds: ["c03-ox-14"],
        src: [1499,1508]
      },
      {
        id: "c03-l02-p08",
        title: "VPCピアリング・Transit Gateway（TGW） ③",
        html: "<ul><li><b class=\"key\">TGWルートテーブル</b>でルーティングを分離（例：本番と開発の通信を遮断）</li><li><b class=\"key\">AWS RAM</b>で他アカウントと共有</li><li><b class=\"key\">ECMP</b>：複数VPNトンネルで帯域を束ねる（VPN帯域の拡張）</li><li><b class=\"key\">マルチキャスト</b>をサポート（VPC単体では非対応）</li><li><span class=\"badge b-cmp\">比較</span>VPC数が少数 → ピアリング（安い）／多数・推移が必要 → <b class=\"key\">TGW</b>（運用負荷小）</li></ul>",
        oxIds: [],
        src: [1509,1513]
      },
      {
        id: "c03-l02-p09",
        title: "AWS Site-to-Site VPN ①",
        html: "<ul><li>オンプレミスとVPCを<b class=\"key\">インターネット経由のIPsec</b>で暗号化接続</li><li>構成：AWS側 <b class=\"key\">仮想プライベートゲートウェイ（VGW）</b> または <b class=\"key\">TGW</b> ＋ オンプレ側 <b class=\"key\">カスタマーゲートウェイ（CGW）</b></li><li>1接続あたり<b class=\"key\">2本のトンネル</b>（異なるエンドポイント）で冗長化</li></ul>",
        oxIds: [],
        src: [1516,1518]
      },
      {
        id: "c03-l02-p10",
        title: "AWS Site-to-Site VPN ②",
        html: "<ul><li>帯域：<b class=\"key\">1トンネルあたり最大1.25 Gbps</b> → それ以上は<b class=\"key\">TGW＋ECMP</b><ul><li>2025年11月に <b class=\"key\">5 Gbps の大容量トンネル</b>が登場（TGW/Cloud WAN 接続時のみ）。試験は1.25 Gbps＋ECMPで出やすい</li></ul></li><li><b class=\"key\">数分〜数時間で構築可能</b>（DXは数週間〜数か月）</li><li><b class=\"key\">静的ルーティング</b> または <b class=\"key\">BGP（動的）</b></li></ul>",
        oxIds: [],
        src: [1519,1522]
      },
      {
        id: "c03-l02-p11",
        title: "AWS Site-to-Site VPN ③",
        html: "<ul><li><b class=\"key\">Accelerated VPN</b>：Global Acceleratorのエッジ経由で品質向上（<b class=\"key\">TGW接続のみ</b>）</li><li><b class=\"key\">VPN CloudHub</b>：1つのVGWに複数拠点VPNを接続し、拠点同士をハブ＆スポークで通信</li><li><span class=\"badge b-freq\">頻出</span>「すぐ・安く・暗号化」→ <b class=\"key\">Site-to-Site VPN</b></li></ul>",
        oxIds: [],
        src: [1523,1525]
      },
      {
        id: "c03-l02-p12",
        title: "AWS Client VPN・AWS Direct Connect（DX） ①",
        html: "<h4>AWS Client VPN</h4><ul><li><b class=\"key\">個々のユーザー（PC）</b>からVPCへ接続する<b class=\"key\">マネージドなリモートアクセスVPN</b></li><li><b class=\"key\">OpenVPNベース</b>のクライアントを使用</li><li>認証：Active Directory、<b class=\"key\">SAML（フェデレーション）</b>、相互証明書認証</li><li><span class=\"badge b-cmp\">比較</span>拠点（ネットワーク）単位 → Site-to-Site VPN／<b class=\"key\">社員個人の在宅接続 → Client VPN</b></li></ul>",
        oxIds: [],
        src: [1528,1531]
      },
      {
        id: "c03-l02-p13",
        title: "AWS Client VPN・AWS Direct Connect（DX） ②",
        html: "<h4>AWS Direct Connect（DX）</h4><ul><li>オンプレミスとAWSを<b class=\"key\">専用の物理回線</b>で接続（インターネットを経由しない）<ul><li><b class=\"key\">帯域が安定・低レイテンシ</b>、大量データ転送時に<b class=\"key\">データ転送料（アウト）が安い</b></li></ul></li><li><b class=\"key\">専用接続（Dedicated）</b>：<b class=\"key\">1 / 10 / 100 / 400 Gbps</b>。AWSに直接申請</li></ul>",
        oxIds: [],
        src: [1534,1536]
      },
      {
        id: "c03-l02-p14",
        title: "AWS Client VPN・AWS Direct Connect（DX） ③",
        html: "<ul><li><b class=\"key\">ホスト型接続（Hosted）</b>：<b class=\"key\">50 Mbps〜25 Gbps</b>。<b class=\"key\">DXパートナー</b>経由で提供</li><li><b class=\"key\">構築に数週間〜数か月</b>かかる → 「すぐ必要」なら不正解</li></ul>",
        oxIds: [],
        src: [1537,1538]
      },
      {
        id: "c03-l02-p15",
        title: "AWS Client VPN・AWS Direct Connect（DX） ④",
        html: "<ul><li><b class=\"key\">仮想インターフェイス（VIF）</b><ul><li><b class=\"key\">プライベートVIF</b>：VPC（VGW）へ接続</li><li><b class=\"key\">パブリックVIF</b>：S3などAWSパブリックサービスのパブリックIPへ接続</li><li><b class=\"key\">トランジットVIF</b>：DX Gateway経由で<b class=\"key\">Transit Gateway</b>へ接続</li></ul></li></ul>",
        oxIds: [],
        src: [1539,1542]
      },
      {
        id: "c03-l02-p16",
        title: "AWS Client VPN・AWS Direct Connect（DX） ⑤",
        html: "<ul><li><b class=\"key\">Direct Connect Gateway</b>：<b class=\"key\">グローバル</b>リソース。1つのDX接続から<b class=\"key\">複数リージョンの複数VPC</b>へ接続</li></ul>",
        oxIds: ["c03-ox-17"],
        src: [1543,1543]
      },
      {
        id: "c03-l02-p17",
        title: "AWS Client VPN・AWS Direct Connect（DX） ⑥",
        html: "<ul><li><b class=\"key\">暗号化はデフォルトでなし</b>（専用線＝プライベートだが暗号化はされない）<ul><li><b class=\"key\">MACsec</b>：レイヤー2暗号化。<b class=\"key\">専用接続の10/100/400 Gbps</b>（対応ロケーション）で利用可</li><li><b class=\"key\">VPN over DX</b>：DX上でIPsec VPNを張る（パブリックVIF経由、またはTGWへのプライベートIP VPN）</li></ul></li></ul>",
        oxIds: ["c03-ox-16"],
        src: [1544,1546]
      },
      {
        id: "c03-l02-p18",
        title: "AWS Client VPN・AWS Direct Connect（DX） ⑦",
        html: "<ul><li><b class=\"key\">耐障害性</b><ul><li>DXのバックアップに <b class=\"key\">Site-to-Site VPN</b>（低コスト）</li><li>最大の耐障害性：<b class=\"key\">複数のDXロケーション</b>に<b class=\"key\">それぞれ複数の接続</b>（AWSの推奨モデル）</li></ul></li></ul>",
        oxIds: [],
        src: [1547,1549]
      },
      {
        id: "c03-l02-p19",
        title: "AWS Client VPN・AWS Direct Connect（DX） ⑧",
        html: "<ul><li><b class=\"key\">LAG</b>：同じ帯域の複数接続を束ねて1つの論理接続に</li><li><span class=\"badge b-freq\">頻出</span>「一貫したネットワーク性能」「大量データ・低レイテンシ」→ <b class=\"key\">DX</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「DXは暗号化される」→ ×。暗号化要件があれば<b class=\"key\">MACsec または VPN over DX</b></span></li></ul>",
        oxIds: [],
        src: [1550,1552]
      },
    ] },
    { id: "c03-l03", title: "Flow Logs・DNS・CDN・ロードバランシング", pages: [
      {
        id: "c03-l03-p01",
        title: "VPC Flow Logs・Amazon Route 53（DNS） ①",
        html: "<h4>VPC Flow Logs</h4><ul><li>VPC・サブネット・<b class=\"key\">ENI単位</b>でIPトラフィックの<b class=\"key\">メタデータ</b>（送信元/送信先IP、ポート、ACCEPT/REJECT等）を記録</li><li>出力先：<b class=\"key\">CloudWatch Logs、Amazon S3、Amazon Data Firehose</b></li><li><b class=\"key\">パケットの中身（ペイロード）は記録しない</b> → 中身が必要なら<b class=\"key\">VPC Traffic Mirroring</b></li></ul>",
        oxIds: ["c03-ox-18"],
        src: [1555,1557]
      },
      {
        id: "c03-l03-p02",
        title: "VPC Flow Logs・Amazon Route 53（DNS） ②",
        html: "<ul><li>記録されない通信の例：<b class=\"key\">Amazon DNSへの問い合わせ</b>、<b class=\"key\">インスタンスメタデータ（169.254.169.254）</b>、DHCP</li><li>分析：<b class=\"key\">Amazon Athena</b>（S3上）、CloudWatch Logs Insights</li><li><span class=\"badge b-freq\">頻出</span>「接続が拒否されている原因調査」→ Flow LogsでREJECTを確認（SG/NACLの切り分け）</li></ul><h4>Amazon Route 53（DNS）</h4><ul><li>マネージドDNS＋ドメイン登録＋ヘルスチェック。<b class=\"key\">SLA 100%</b></li></ul>",
        oxIds: [],
        src: [1558,1563]
      },
      {
        id: "c03-l03-p03",
        title: "VPC Flow Logs・Amazon Route 53（DNS） ③",
        html: "<ul><li><b class=\"key\">ホストゾーン</b><ul><li><b class=\"key\">パブリックホストゾーン</b>：インターネット向け名前解決</li><li><b class=\"key\">プライベートホストゾーン</b>：関連付けた<b class=\"key\">VPC内のみ</b>で名前解決</li></ul></li></ul>",
        oxIds: [],
        src: [1564,1566]
      },
      {
        id: "c03-l03-p04",
        title: "VPC Flow Logs・Amazon Route 53（DNS） ④",
        html: "<ul><li><b class=\"key\">主なレコード種別</b><ul><li><b class=\"key\">A</b>：名前→IPv4／<b class=\"key\">AAAA</b>：名前→IPv6</li><li><b class=\"key\">CNAME</b>：名前→別の名前（<b class=\"key\">ゾーンアペックス（example.com自体）には作れない</b>）</li></ul></li></ul>",
        oxIds: [],
        src: [1567,1569]
      },
      {
        id: "c03-l03-p05",
        title: "VPC Flow Logs・Amazon Route 53（DNS） ⑤",
        html: "<ul><li><b class=\"key\">NS</b>：ネームサーバー／<b class=\"key\">SOA</b>：ゾーン管理情報<ul><li><b class=\"key\">MX</b>：メールサーバー／<b class=\"key\">TXT</b>：ドメイン検証等／<b class=\"key\">CAA</b>：証明書発行可能なCA</li></ul></li></ul>",
        oxIds: [],
        src: [1570,1571]
      },
      {
        id: "c03-l03-p06",
        title: "VPC Flow Logs・Amazon Route 53（DNS） ⑥",
        html: "<ul><li><b class=\"key\">エイリアスレコード</b>（Route 53独自拡張）<ul><li>AWSリソースを指す：<b class=\"key\">ELB、CloudFront、API Gateway、S3静的Webサイト、Global Accelerator、VPCインターフェースエンドポイント</b>等</li><li><b class=\"key\">ゾーンアペックスに作成可能</b>（CNAMEとの最大の違い）</li><li>AWSリソース宛のエイリアスクエリは<b class=\"key\">無料</b></li><li><b class=\"key\">TTLは設定不可</b>（ターゲットに従う）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">EC2のDNS名</b>はエイリアスのターゲットにできない</span></li></ul></li></ul>",
        oxIds: ["c03-ox-19","c03-ox-20"],
        src: [1572,1577]
      },
      {
        id: "c03-l03-p07",
        title: "VPC Flow Logs・Amazon Route 53（DNS） ⑦",
        html: "<ul><li><b class=\"key\">TTL</b>：リゾルバーがキャッシュする時間。短いと切替が速いが<b class=\"key\">クエリ課金増</b></li></ul>",
        oxIds: [],
        src: [1578,1578]
      },
      {
        id: "c03-l03-p08",
        title: "Route 53 ルーティングポリシー（全種） ①",
        html: "<ul><li><b class=\"key\">シンプル</b>：1レコードに複数値可（ランダムに返す）。<b class=\"key\">ヘルスチェック不可</b></li><li><b class=\"key\">加重（Weighted）</b>：重み比率で配分 → <b class=\"key\">Blue/Green・カナリア</b>（例：90:10）<ul><li>重み0で送信停止</li></ul></li><li><b class=\"key\">レイテンシー</b>：ユーザーから<b class=\"key\">最も低レイテンシーのリージョン</b>へ</li></ul>",
        oxIds: [],
        src: [1581,1584]
      },
      {
        id: "c03-l03-p09",
        title: "Route 53 ルーティングポリシー（全種） ②",
        html: "<ul><li><b class=\"key\">フェイルオーバー</b>：プライマリが<b class=\"key\">ヘルスチェック失敗</b>したらセカンダリへ（アクティブ-パッシブ）<ul><li>例：障害時にS3の静的「メンテナンス中」サイトへ</li></ul></li><li><b class=\"key\">位置情報（Geolocation）</b>：ユーザーの<b class=\"key\">国・大陸</b>で振り分け<ul><li><b class=\"key\">コンテンツのローカライズ・配信制限（法規制）</b>向け。<b class=\"key\">デフォルトレコード</b>を用意</li></ul></li></ul>",
        oxIds: [],
        src: [1585,1588]
      },
      {
        id: "c03-l03-p10",
        title: "Route 53 ルーティングポリシー（全種） ③",
        html: "<ul><li><b class=\"key\">地理的近接性（Geoproximity）</b>：リソースとユーザーの<b class=\"key\">距離</b>で振り分け、<b class=\"key\">バイアス</b>で範囲を拡大/縮小</li></ul>",
        oxIds: [],
        src: [1589,1589]
      },
      {
        id: "c03-l03-p11",
        title: "Route 53 ルーティングポリシー（全種） ④",
        html: "<ul><li><b class=\"key\">複数値回答（Multivalue answer）</b>：<b class=\"key\">正常なレコードを最大8個</b>ランダムに返す<ul><li>ヘルスチェック付きの簡易負荷分散（<b class=\"key\">ELBの代替ではない</b>）</li></ul></li><li><b class=\"key\">IPベース</b>：クライアントの<b class=\"key\">IP（CIDR）範囲</b>で振り分け（ISP別最適化など）</li><li><span class=\"badge b-cmp\">比較</span>「国で分ける」→ 位置情報／「速い方へ」→ レイテンシー／「距離＋調整」→ 地理的近接性</li></ul>",
        oxIds: [],
        src: [1590,1593]
      },
      {
        id: "c03-l03-p12",
        title: "Route 53 ヘルスチェックとResolver ①",
        html: "<ul><li><b class=\"key\">ヘルスチェックの種類</b><ul><li><b class=\"key\">エンドポイント監視</b>：HTTP/HTTPS/TCP。間隔<b class=\"key\">30秒（標準）または10秒（高速）</b></li><li><b class=\"key\">計算済みヘルスチェック</b>：複数ヘルスチェックの結果をAND/OR的に集約</li><li><b class=\"key\">CloudWatchアラーム監視</b>：<b class=\"key\">プライベートリソース</b>の監視に使う</li></ul></li></ul>",
        oxIds: [],
        src: [1596,1599]
      },
      {
        id: "c03-l03-p13",
        title: "Route 53 ヘルスチェックとResolver ②",
        html: "<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>ヘルスチェッカーはVPC外にあるため、<b class=\"key\">プライベートサブネットのリソースは直接監視不可</b> → CloudWatchアラーム経由</span></li><li><b class=\"key\">Route 53 Resolver</b>：VPC内のDNS（VPC CIDR <b class=\"key\">＋2</b>のアドレス）<ul><li><b class=\"key\">インバウンドエンドポイント</b>：<b class=\"key\">オンプレ → AWS</b>（プライベートホストゾーン）の名前解決</li></ul></li></ul>",
        oxIds: ["c03-ox-22","c03-ox-23"],
        src: [1600,1602]
      },
      {
        id: "c03-l03-p14",
        title: "Route 53 ヘルスチェックとResolver ③",
        html: "<ul><li><b class=\"key\">アウトバウンドエンドポイント</b>：<b class=\"key\">AWS → オンプレ</b>のDNSへ転送（<b class=\"key\">転送ルール</b>で条件指定）<ul><li>ハイブリッドDNSはDX/VPNと組み合わせて構成</li></ul></li><li><b class=\"key\">Resolver DNS Firewall</b>：VPCからの悪性ドメインへのDNSクエリをブロック</li></ul>",
        oxIds: [],
        src: [1603,1605]
      },
      {
        id: "c03-l03-p15",
        title: "Amazon CloudFront（CDN） ①",
        html: "<ul><li>世界中の<b class=\"key\">エッジロケーション</b>でコンテンツをキャッシュし、低レイテンシーで配信</li><li>オリジン：<b class=\"key\">S3、ALB、EC2、API Gateway、MediaStore、任意のHTTPサーバー（オンプレ可）</b></li><li>静的コンテンツだけでなく<b class=\"key\">動的コンテンツ・API</b>の高速化にも有効（AWSバックボーン経由）</li><li><b class=\"key\">AWS Shield Standard</b>が自動適用、<b class=\"key\">AWS WAF</b>と統合可能</li></ul>",
        oxIds: [],
        src: [1608,1611]
      },
      {
        id: "c03-l03-p16",
        title: "Amazon CloudFront（CDN） ②",
        html: "<ul><li><b class=\"key\">OAC（Origin Access Control）</b>：S3バケットへの<b class=\"key\">直接アクセスを禁止</b>し、CloudFront経由のみ許可<ul><li><b class=\"key\">推奨方式</b>。<b class=\"key\">SSE-KMS</b>暗号化オブジェクト、全リージョン、PUT/POST等にも対応</li><li><b class=\"key\">OAI（Origin Access Identity）</b>：旧方式（レガシー）。SSE-KMS非対応</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">S3静的Webサイトエンドポイント</b>はカスタムオリジン扱い → OAC/OAIは使えない</span></li></ul></li></ul>",
        oxIds: ["c03-ox-24"],
        src: [1612,1615]
      },
      {
        id: "c03-l03-p17",
        title: "Amazon CloudFront（CDN） ③",
        html: "<ul><li><b class=\"key\">署名付きURL vs 署名付きCookie</b>（有料会員コンテンツ等のアクセス制限）<ul><li><b class=\"key\">署名付きURL</b>：<b class=\"key\">個別ファイル</b>単位、Cookie非対応クライアント向け</li><li><b class=\"key\">署名付きCookie</b>：<b class=\"key\">複数ファイル</b>（動画のセグメント、会員エリア全体）、URLを変えたくない</li><li>署名には<b class=\"key\">信頼されたキーグループ</b>（推奨）を使用</li></ul></li></ul>",
        oxIds: [],
        src: [1616,1619]
      },
      {
        id: "c03-l03-p18",
        title: "Amazon CloudFront（CDN） ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>S3の<b class=\"key\">署名付きURL</b>は「S3に直接」、CloudFrontの署名付きURLは「エッジ経由」</li><li><b class=\"key\">キャッシュ</b><ul><li><b class=\"key\">キャッシュポリシー</b>でキャッシュキー（ヘッダー・Cookie・クエリ文字列）とTTLを制御</li><li>デフォルトTTL <b class=\"key\">24時間（86,400秒）</b></li><li><b class=\"key\">キャッシュキーを最小限</b>にするとキャッシュヒット率が上がる</li></ul></li></ul>",
        oxIds: [],
        src: [1620,1624]
      },
      {
        id: "c03-l03-p19",
        title: "Amazon CloudFront（CDN） ⑤",
        html: "<ul><li>更新反映：<b class=\"key\">無効化（Invalidation）</b> または <b class=\"key\">バージョン付きファイル名</b>（推奨・安価）<ul><li><b class=\"key\">Origin Shield</b>：追加のキャッシュ層でオリジン負荷を削減</li></ul></li><li><b class=\"key\">オリジンフェイルオーバー</b>：<b class=\"key\">オリジングループ</b>（プライマリ/セカンダリ）で自動切替</li></ul>",
        oxIds: [],
        src: [1625,1627]
      },
      {
        id: "c03-l03-p20",
        title: "Amazon CloudFront（CDN） ⑥",
        html: "<ul><li><b class=\"key\">エッジでのコード実行</b><ul><li><b class=\"key\">CloudFront Functions</b>：<b class=\"key\">JavaScript</b>、<b class=\"key\">ビューワーリクエスト/レスポンスのみ</b><ul><li><b class=\"key\">サブミリ秒</b>・超大量リクエスト・低コスト（ヘッダー操作、URL書換え、リダイレクト、簡易認証）</li><li>ネットワーク・ファイルアクセス不可</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [1628,1631]
      },
      {
        id: "c03-l03-p21",
        title: "Amazon CloudFront（CDN） ⑦",
        html: "<ul><li><b class=\"key\">Lambda@Edge</b>：<b class=\"key\">Node.js / Python</b>、<b class=\"key\">4つのイベント</b>（ビューワー/オリジンのリクエスト/レスポンス）<ul><li>実行時間<b class=\"key\">ビューワー5秒・オリジン30秒</b>まで。ネットワークアクセス可（外部API呼出し等）</li><li><span class=\"badge b-cmp\">比較</span>軽量・大量 → CloudFront Functions／重い処理・オリジン側イベント → Lambda@Edge</li></ul></li><li><b class=\"key\">地域制限（Geo Restriction）</b>：<b class=\"key\">国単位</b>で許可リスト/拒否リスト（著作権・ライセンス要件）</li></ul>",
        oxIds: ["c03-ox-26"],
        src: [1632,1635]
      },
      {
        id: "c03-l03-p22",
        title: "Amazon CloudFront（CDN） ⑧",
        html: "<ul><li><b class=\"key\">フィールドレベル暗号化</b>：POSTの<b class=\"key\">特定フィールド（例：カード番号）</b>をエッジで<b class=\"key\">公開鍵暗号化</b><ul><li>バックエンドの<b class=\"key\">特定アプリだけが秘密鍵で復号</b>可能（途中のサーバーでも見えない）</li></ul></li></ul>",
        oxIds: [],
        src: [1636,1637]
      },
      {
        id: "c03-l03-p23",
        title: "Amazon CloudFront（CDN） ⑨",
        html: "<ul><li><b class=\"key\">HTTPS</b>：ビューワー側・オリジン側それぞれ設定。<b class=\"key\">ACM証明書は us-east-1（バージニア北部）</b>で発行</li><li><b class=\"key\">価格クラス</b>：使うエッジのリージョンを限定してコスト削減</li></ul>",
        oxIds: ["c03-ox-25"],
        src: [1638,1639]
      },
      {
        id: "c03-l03-p24",
        title: "AWS Global Accelerator ①",
        html: "<ul><li><b class=\"key\">2つの静的Anycast IPアドレス</b>を提供し、ユーザーを最寄りエッジから<b class=\"key\">AWSグローバルネットワーク</b>経由で転送</li><li>エンドポイント：<b class=\"key\">ALB、NLB、EC2、Elastic IP</b>（複数リージョン）</li><li><b class=\"key\">ヘルスチェックで数十秒以内のリージョンフェイルオーバー</b>（DNSキャッシュの影響を受けない）</li></ul>",
        oxIds: [],
        src: [1642,1644]
      },
      {
        id: "c03-l03-p25",
        title: "AWS Global Accelerator ②",
        html: "<ul><li><b class=\"key\">TCP / UDP</b>に対応 → <b class=\"key\">ゲーム、IoT、VoIP</b>など<b class=\"key\">非HTTP</b>でも高速化</li><li><b class=\"key\">トラフィックダイヤル</b>（リージョン単位の割合）、<b class=\"key\">エンドポイントの重み</b>で配分調整</li><li><b class=\"key\">クライアントIPの保持</b>（ALB・EC2エンドポイント等）</li></ul>",
        oxIds: [],
        src: [1645,1647]
      },
      {
        id: "c03-l03-p26",
        title: "AWS Global Accelerator ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>CloudFront vs Global Accelerator<ul><li><b class=\"key\">CloudFront</b>：<b class=\"key\">HTTP/HTTPS</b>、<b class=\"key\">キャッシュ</b>あり、静的・動的コンテンツ</li></ul></li></ul>",
        oxIds: [],
        src: [1648,1649]
      },
      {
        id: "c03-l03-p27",
        title: "AWS Global Accelerator ④",
        html: "<ul><li><b class=\"key\">Global Accelerator</b>：<b class=\"key\">TCP/UDP</b>、<b class=\"key\">キャッシュなし</b>、<b class=\"key\">固定IP</b>、高速フェイルオーバー<ul><li><span class=\"badge b-freq\">頻出</span>「<b class=\"key\">固定IPをホワイトリスト登録</b>」「UDP」「DNSに依存しない切替」→ <b class=\"key\">Global Accelerator</b></li></ul></li></ul>",
        oxIds: ["c03-ox-27"],
        src: [1650,1651]
      },
      {
        id: "c03-l03-p28",
        title: "Elastic Load Balancing（ELB） ①",
        html: "<ul><li>トラフィックを複数ターゲットに分散。<b class=\"key\">複数AZ</b>、<b class=\"key\">ヘルスチェック</b>で異常ターゲットを除外</li></ul>",
        oxIds: [],
        src: [1654,1654]
      },
      {
        id: "c03-l03-p29",
        title: "Elastic Load Balancing（ELB） ②",
        html: "<ul><li><b class=\"key\">ALB（Application Load Balancer）</b>：<b class=\"key\">レイヤー7</b>（HTTP/HTTPS、HTTP/2、<b class=\"key\">gRPC</b>、WebSocket）<ul><li><b class=\"key\">パスベース</b>（/api → A、/img → B）、<b class=\"key\">ホストベース</b>（a.example.com → A）</li><li>ヘッダー・クエリ文字列・HTTPメソッド・送信元IPでもルーティング</li><li>ターゲット：<b class=\"key\">EC2インスタンス、IPアドレス、Lambda関数</b>、（ECSタスク）</li></ul></li></ul>",
        oxIds: ["c03-ox-28"],
        src: [1655,1658]
      },
      {
        id: "c03-l03-p30",
        title: "Elastic Load Balancing（ELB） ③",
        html: "<ul><li><b class=\"key\">固定IPなし</b>（DNS名でアクセス）→ 固定IPが必要なら<b class=\"key\">Global Accelerator</b>を前段に<ul><li><b class=\"key\">Cognito / OIDC認証</b>、固定レスポンス、リダイレクト（HTTP→HTTPS）</li><li>クライアントIPは <b class=\"key\">X-Forwarded-For</b> ヘッダーで取得</li></ul></li></ul>",
        oxIds: [],
        src: [1659,1661]
      },
      {
        id: "c03-l03-p31",
        title: "Elastic Load Balancing（ELB） ④",
        html: "<ul><li><b class=\"key\">NLB（Network Load Balancer）</b>：<b class=\"key\">レイヤー4</b>（<b class=\"key\">TCP / UDP / TLS</b>）<ul><li><b class=\"key\">毎秒数百万リクエスト</b>、<b class=\"key\">超低レイテンシー</b></li></ul></li></ul>",
        oxIds: [],
        src: [1662,1663]
      },
      {
        id: "c03-l03-p32",
        title: "Elastic Load Balancing（ELB） ⑤",
        html: "<ul><li><b class=\"key\">AZごとに静的IP</b>、<b class=\"key\">Elastic IPを割り当て可能</b><ul><li><b class=\"key\">クライアントIPを保持</b></li><li>PrivateLink（エンドポイントサービス）の前段に使える</li></ul></li></ul>",
        oxIds: [],
        src: [1664,1666]
      },
      {
        id: "c03-l03-p33",
        title: "Elastic Load Balancing（ELB） ⑥",
        html: "<ul><li><b class=\"key\">GWLB（Gateway Load Balancer）</b>：<b class=\"key\">レイヤー3</b><ul><li><b class=\"key\">サードパーティの仮想アプライアンス</b>（ファイアウォール、IDS/IPS）を透過的に挿入・スケール</li><li><b class=\"key\">GENEVEプロトコル（ポート6081）</b>、GWLBエンドポイントで通信を誘導</li></ul></li><li><b class=\"key\">CLB（Classic Load Balancer）</b>：旧世代（L4/L7）。新規設計では選ばない（古い選択肢として登場）</li></ul>",
        oxIds: [],
        src: [1667,1670]
      },
      {
        id: "c03-l03-p34",
        title: "Elastic Load Balancing（ELB） ⑦",
        html: "<ul><li><b class=\"key\">主要機能</b><ul><li><b class=\"key\">スティッキーセッション</b>：同じクライアントを同じターゲットへ<ul><li>ALB：<b class=\"key\">Cookie</b>（期間ベースのAWSALB、またはアプリケーションCookie）</li><li><span class=\"badge b-cmp\">比較</span>根本解決はセッションを<b class=\"key\">ElastiCache / DynamoDB</b>に外出し（ステートレス化）</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [1671,1674]
      },
      {
        id: "c03-l03-p35",
        title: "Elastic Load Balancing（ELB） ⑧",
        html: "<ul><li><b class=\"key\">クロスゾーン負荷分散</b>：全AZのターゲットに均等分散<ul><li><b class=\"key\">ALB：デフォルト有効（AZ間データ料金なし）</b>／<b class=\"key\">NLB・GWLB：デフォルト無効（有効化でAZ間料金）</b></li><li><b class=\"key\">登録解除の遅延（接続ドレイン）</b>：登録解除中のターゲットへ<b class=\"key\">処理中リクエストを完了</b>させる<ul><li>デフォルト<b class=\"key\">300秒</b>（0〜3,600秒）。CLBでは「Connection Draining」と呼ぶ</li></ul></li></ul></li></ul>",
        oxIds: ["c03-ox-29"],
        src: [1675,1678]
      },
      {
        id: "c03-l03-p36",
        title: "Elastic Load Balancing（ELB） ⑨",
        html: "<ul><li><b class=\"key\">SNI（Server Name Indication）</b>：<b class=\"key\">1つのリスナーで複数のTLS証明書</b>（複数ドメイン）<ul><li><b class=\"key\">ALB・NLBが対応</b>、<b class=\"key\">CLBは非対応</b></li></ul></li></ul>",
        oxIds: ["c03-ox-30"],
        src: [1679,1680]
      },
      {
        id: "c03-l03-p37",
        title: "Elastic Load Balancing（ELB） ⑩",
        html: "<ul><li><b class=\"key\">SSL/TLSオフロード</b>：ELBで暗号化を終端、証明書は<b class=\"key\">ACM</b>で管理<ul><li><b class=\"key\">スロースタート</b>（ALB）：新規ターゲットに徐々にリクエストを増やす</li></ul></li><li><span class=\"badge b-freq\">頻出</span>EC2 Auto Scaling と組み合わせ、<b class=\"key\">ELBヘルスチェック</b>で異常インスタンスを置換</li></ul>",
        oxIds: [],
        src: [1681,1683]
      },
    ] },
    { id: "c03-l04", title: "試験での出方と暗記数字", pages: [
      {
        id: "c03-l04-p01",
        title: "試験での出方 ①",
        html: "<ul><li><b class=\"key\">キーワード → 正解サービス</b><ul><li>「プライベートサブネットからインターネットへ外向きのみ」→ <b class=\"key\">NAT Gateway（パブリックサブネットに配置）</b></li><li>「NAT Gatewayの高可用性」→ <b class=\"key\">AZごとにNAT Gateway</b>＋AZごとのルートテーブル</li><li>「IPv6で外向きのみ」→ <b class=\"key\">Egress-only IGW</b></li><li>「特定のIPアドレスからのアクセスを拒否」→ <b class=\"key\">NACLの拒否ルール</b>（SGは拒否不可）</li><li>「Webサーバー層からのみDBに接続」→ <b class=\"key\">DBのSGのソースにWeb層のSGを指定</b></li></ul></li></ul>",
        oxIds: [],
        src: [1686,1691]
      },
      {
        id: "c03-l04-p02",
        title: "試験での出方 ②",
        html: "<ul><li>「S3へのアクセスでNATのデータ処理料金を削減」→ <b class=\"key\">S3ゲートウェイエンドポイント</b><ul><li>「オンプレからインターネットを通らずS3/SQS等へ」→ <b class=\"key\">インターフェースエンドポイント</b></li><li>「自社サービスを他アカウントのVPCへ公開、CIDR重複あり」→ <b class=\"key\">PrivateLink（NLB＋エンドポイントサービス）</b></li><li>「数十〜数百のVPCとオンプレを相互接続、運用負荷最小」→ <b class=\"key\">Transit Gateway</b></li><li>「2〜3個のVPCを低コストで接続」→ <b class=\"key\">VPCピアリング</b></li><li>「すぐにオンプレと暗号化接続」→ <b class=\"key\">Site-to-Site VPN</b></li></ul></li></ul>",
        oxIds: [],
        src: [1692,1697]
      },
      {
        id: "c03-l04-p03",
        title: "試験での出方 ③",
        html: "<ul><li>「一貫した帯域・低レイテンシー・大量転送」→ <b class=\"key\">Direct Connect</b><ul><li>「DXの低コストなバックアップ」→ <b class=\"key\">Site-to-Site VPN</b></li><li>「DXで暗号化が必要」→ <b class=\"key\">MACsec</b> または <b class=\"key\">VPN over DX</b></li><li>「1つのDXで複数リージョンのVPCへ」→ <b class=\"key\">Direct Connect Gateway</b></li><li>「在宅社員がVPC内リソースへ安全に接続」→ <b class=\"key\">Client VPN</b></li></ul></li></ul>",
        oxIds: [],
        src: [1698,1702]
      },
      {
        id: "c03-l04-p04",
        title: "試験での出方 ④",
        html: "<ul><li>「ゾーンアペックスをALB/CloudFrontに向ける」→ <b class=\"key\">Route 53 エイリアスレコード</b><ul><li>「一部ユーザーだけ新バージョンへ（10%）」→ <b class=\"key\">加重ルーティング</b></li><li>「国ごとに別コンテンツ／特定国だけ配信」→ <b class=\"key\">位置情報ルーティング</b>（CloudFrontなら<b class=\"key\">地域制限</b>）</li><li>「プライマリ障害時に静的サイトへ」→ <b class=\"key\">フェイルオーバールーティング＋ヘルスチェック</b></li><li>「オンプレからVPCのプライベートホストゾーンを名前解決」→ <b class=\"key\">Resolverインバウンドエンドポイント</b></li></ul></li></ul>",
        oxIds: [],
        src: [1703,1707]
      },
      {
        id: "c03-l04-p05",
        title: "試験での出方 ⑤",
        html: "<ul><li>「S3を直接公開せずCloudFront経由のみ」→ <b class=\"key\">OAC</b><ul><li>「有料会員だけ複数動画ファイルへアクセス」→ <b class=\"key\">署名付きCookie</b></li><li>「機密フィールドをバックエンドの特定アプリだけ読めるように」→ <b class=\"key\">フィールドレベル暗号化</b></li><li>「エッジで軽量なヘッダー書換え・大量リクエスト」→ <b class=\"key\">CloudFront Functions</b></li><li>「UDPゲーム／固定IP／高速なリージョンフェイルオーバー」→ <b class=\"key\">Global Accelerator</b></li><li>「URLパスやホスト名で振り分け」→ <b class=\"key\">ALB</b></li></ul></li></ul>",
        oxIds: [],
        src: [1708,1713]
      },
      {
        id: "c03-l04-p06",
        title: "試験での出方 ⑥",
        html: "<ul><li>「超低レイテンシー・TCP/UDP・固定IP（EIP）」→ <b class=\"key\">NLB</b><ul><li>「サードパーティのファイアウォールアプライアンスを透過的に挿入」→ <b class=\"key\">GWLB</b></li><li>「複数ドメインのHTTPS証明書を1つのALBで」→ <b class=\"key\">SNI</b></li><li>「スケールイン時に処理中リクエストを失わない」→ <b class=\"key\">登録解除の遅延（接続ドレイン）</b></li><li>「通信がブロックされた原因を調査」→ <b class=\"key\">VPC Flow Logs</b></li></ul></li></ul>",
        oxIds: [],
        src: [1714,1718]
      },
      {
        id: "c03-l04-p07",
        title: "試験での出方 ⑦",
        html: "<ul><li><b class=\"key\"><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>よくある誤答パターン</span></b><ul><li>VPCピアリングで<b class=\"key\">推移的に</b>別VPCへ到達できる → ×（TGWを使う）</li><li><b class=\"key\">ゲートウェイエンドポイント</b>をオンプレ/DX経由で使う → ×（インターフェース型）</li><li><b class=\"key\">NACLの戻り通信（エフェメラルポート）</b>を忘れる</li><li><b class=\"key\">SGで拒否ルール</b>を作る → ×（作れない）</li><li><b class=\"key\">DXを数日で構築</b> → ×（数週間〜）。急ぎならまずVPN</li></ul></li></ul>",
        oxIds: [],
        src: [1719,1724]
      },
      {
        id: "c03-l04-p08",
        title: "試験での出方 ⑧",
        html: "<ul><li><b class=\"key\">CNAMEをゾーンアペックス</b>に作る → ×（エイリアス）<ul><li><b class=\"key\">ALBに固定IP/EIP</b> → ×（NLBまたはGlobal Accelerator）</li><li><b class=\"key\">CloudFrontでUDP</b>を高速化 → ×（Global Accelerator）</li><li><b class=\"key\">複数値回答ルーティング＝ELBの代わり</b> → ×（DNSレベルの簡易分散にすぎない）</li><li>S3<b class=\"key\">静的Webサイトエンドポイント</b>にOAC → ×（REST APIエンドポイントを使う）</li></ul></li></ul>",
        oxIds: [],
        src: [1725,1729]
      },
      {
        id: "c03-l04-p09",
        title: "試験での出方 ⑨",
        html: "<ul><li><b class=\"key\">CloudFront用ACM証明書</b>を各リージョンで発行 → ×（<b class=\"key\">us-east-1</b>）<ul><li>Flow Logsで<b class=\"key\">パケット内容</b>を見る → ×（Traffic Mirroring）</li></ul></li><li>解き方のコツ：<b class=\"key\">「L4かL7か」「固定IPか」「HTTPかTCP/UDPか」「推移が必要か」「急ぎか安定か」</b>の5軸で絞る</li></ul>",
        oxIds: [],
        src: [1730,1732]
      },
      {
        id: "c03-l04-p10",
        title: "暗記すべき数字・制限 ①",
        html: "<ul><li>VPC CIDR：<b class=\"key\">/16〜/28</b></li><li>サブネットの予約IP：<b class=\"key\">5個</b>（先頭4つ＋最後1つ）→ /24で<b class=\"key\">251個</b>、/28で<b class=\"key\">11個</b></li><li>Amazon DNS：VPC CIDRのベース <b class=\"key\">＋2</b>（例：10.0.0.2）</li><li>デフォルトVPCのCIDR：<b class=\"key\">172.31.0.0/16</b></li></ul>",
        oxIds: ["c03-ox-01"],
        src: [1735,1738]
      },
      {
        id: "c03-l04-p11",
        title: "暗記すべき数字・制限 ②",
        html: "<ul><li>VPC数：<b class=\"key\">リージョンあたり5個</b>（デフォルト、引き上げ可）</li><li>IGW：<b class=\"key\">VPCあたり1個</b></li><li>Elastic IP：<b class=\"key\">リージョンあたり5個</b>（デフォルト）。パブリックIPv4は<b class=\"key\">2024年2月から全課金</b></li><li>NAT Gateway帯域：<b class=\"key\">5 Gbps〜最大100 Gbps</b>に自動スケール</li><li>エフェメラルポート：<b class=\"key\">1024〜65535</b></li></ul>",
        oxIds: [],
        src: [1739,1743]
      },
      {
        id: "c03-l04-p12",
        title: "暗記すべき数字・制限 ③",
        html: "<ul><li>NACL：<b class=\"key\">番号の小さい順</b>に評価、デフォルトNACL＝全許可、カスタムNACL＝全拒否</li><li>ゲートウェイ型エンドポイント：<b class=\"key\">S3とDynamoDBの2つだけ</b>、<b class=\"key\">無料</b></li><li>Site-to-Site VPN：<b class=\"key\">2トンネル</b>、<b class=\"key\">1トンネル最大1.25 Gbps</b>（2025年11月からTGW/Cloud WAN接続なら大容量トンネル <b class=\"key\">5 Gbps</b> も可）</li></ul>",
        oxIds: ["c03-ox-15"],
        src: [1744,1746]
      },
      {
        id: "c03-l04-p13",
        title: "暗記すべき数字・制限 ④",
        html: "<ul><li>Direct Connect専用接続：<b class=\"key\">1 / 10 / 100 / 400 Gbps</b></li><li>Direct Connectホスト型接続：<b class=\"key\">50 Mbps〜25 Gbps</b></li><li>MACsec：<b class=\"key\">10 / 100 / 400 Gbps</b>の専用接続で利用可</li><li>DXの構築期間：<b class=\"key\">数週間〜数か月</b></li><li>Route 53 SLA：<b class=\"key\">100%</b></li><li>Route 53 ヘルスチェック間隔：<b class=\"key\">30秒（標準）／10秒（高速）</b></li></ul>",
        oxIds: [],
        src: [1747,1752]
      },
      {
        id: "c03-l04-p14",
        title: "暗記すべき数字・制限 ⑤",
        html: "<ul><li>複数値回答：最大<b class=\"key\">8個</b>の正常レコード</li><li>CloudFrontデフォルトTTL：<b class=\"key\">24時間（86,400秒）</b></li><li>CloudFront用ACM証明書：<b class=\"key\">us-east-1</b></li><li>Lambda@Edge：<b class=\"key\">4イベント</b>、タイムアウト<b class=\"key\">ビューワー5秒／オリジン30秒</b></li></ul>",
        oxIds: ["c03-ox-21"],
        src: [1753,1756]
      },
      {
        id: "c03-l04-p15",
        title: "暗記すべき数字・制限 ⑥",
        html: "<ul><li>CloudFront Functions：<b class=\"key\">ビューワーイベントのみ</b>、<b class=\"key\">サブミリ秒</b>実行</li><li>Global Accelerator：<b class=\"key\">静的Anycast IP 2個</b></li><li>GWLB：<b class=\"key\">GENEVE ポート6081</b></li><li>登録解除の遅延：デフォルト<b class=\"key\">300秒</b>（0〜3,600秒）</li></ul>",
        oxIds: [],
        src: [1757,1760]
      },
      {
        id: "c03-l04-p16",
        title: "暗記すべき数字・制限 ⑦",
        html: "<ul><li>クロスゾーン：<b class=\"key\">ALB＝デフォルトON（無料）</b>／<b class=\"key\">NLB・GWLB＝デフォルトOFF（有料）</b></li><li>語呂合わせ：「<b class=\"key\">ゲートウェイはエス・ディー（S3・DynamoDB）だけ、タダ</b>」</li><li>語呂合わせ：「<b class=\"key\">SGはステート覚える、NACLは忘れる（ステートレス）</b>」</li><li>語呂合わせ：「<b class=\"key\">ピアリングは友達の友達は他人</b>」（推移不可）</li><li>語呂合わせ：「<b class=\"key\">L7（アプリ）＝ALB、L4（ネット）＝NLB、L3（ゲート）＝GWLB</b>」</li></ul>",
        oxIds: [],
        src: [1761,1765]
      },
    ] },
  ],
  ox: [
    {
      id: "c03-ox-01",
      text: "10.0.1.0/24 のサブネットでは、EC2インスタンスに割り当て可能なIPv4アドレスは256個である。",
      answer: false,
      explain: "各サブネットで<b class=\"key\">5個</b>が予約されるため <b class=\"key\">251個</b>",
      src: 1768
    },
    {
      id: "c03-ox-02",
      text: "サブネットは複数のアベイラビリティーゾーンにまたがって作成できる。",
      answer: false,
      explain: "サブネットは<b class=\"key\">1つのAZ</b>に属する。VPCはリージョン内の全AZにまたがる",
      src: 1771
    },
    {
      id: "c03-ox-03",
      text: "NAT Gatewayは、インターネットへのアクセスを提供するためにプライベートサブネットに作成する。",
      answer: false,
      explain: "パブリックNAT Gatewayは<b class=\"key\">パブリックサブネット</b>に作成し、プライベートサブネットのルートから向ける",
      src: 1774
    },
    {
      id: "c03-ox-04",
      text: "NAT Gatewayは単一AZのリソースのため、AZ障害に備えるにはAZごとに作成する。",
      answer: true,
      explain: "AZごとにNAT Gatewayを置き、各AZのプライベートサブネットのルートを同一AZのNATへ向ける",
      src: 1777
    },
    {
      id: "c03-ox-05",
      text: "NAT Gatewayにはセキュリティグループを関連付けてトラフィックを制御できる。",
      answer: false,
      explain: "NAT GatewayにSGは付けられない。制御はNACLで行う（SGが付けられるのはNATインスタンス）",
      src: 1780
    },
    {
      id: "c03-ox-06",
      text: "IPv6で外向き通信のみを許可し、インターネットからの接続開始を拒否するにはEgress-only IGWを使う。",
      answer: true,
      explain: "IPv6にはNATがないため、<b class=\"key\">Egress-only IGW</b>で外向きのみ許可する",
      src: 1783
    },
    {
      id: "c03-ox-07",
      text: "セキュリティグループでは、特定のIPアドレスからの通信を拒否するルールを作成できる。",
      answer: false,
      explain: "SGは<b class=\"key\">許可ルールのみ</b>。拒否は<b class=\"key\">NACL</b>で行う",
      src: 1786
    },
    {
      id: "c03-ox-08",
      text: "ネットワークACLはステートレスのため、戻り通信についても明示的に許可する必要がある。",
      answer: true,
      explain: "応答はクライアントの<b class=\"key\">エフェメラルポート（1024〜65535）</b>宛になるため、その範囲を許可する",
      src: 1789
    },
    {
      id: "c03-ox-09",
      text: "新規に作成したカスタムネットワークACLは、デフォルトですべての通信を許可する。",
      answer: false,
      explain: "カスタムNACLは<b class=\"key\">全拒否</b>で作成される。全許可なのは<b class=\"key\">デフォルトNACL</b>",
      src: 1792
    },
    {
      id: "c03-ox-10",
      text: "ネットワークACLのルールは、ルール番号の小さい順に評価され、最初に一致したルールが適用される。",
      answer: true,
      explain: "例えば100番で許可、200番で拒否なら100番が適用される。SGは全ルールを評価する",
      src: 1795
    },
    {
      id: "c03-ox-11",
      text: "ゲートウェイ型VPCエンドポイントは、Amazon S3とAmazon DynamoDBで利用できる。",
      answer: true,
      explain: "ゲートウェイ型は<b class=\"key\">S3とDynamoDBの2つのみ</b>。<b class=\"key\">無料</b>でルートテーブルにルートを追加する",
      src: 1798
    },
    {
      id: "c03-ox-12",
      text: "オンプレミスからDirect Connect経由でS3ゲートウェイエンドポイントを利用してS3にアクセスできる。",
      answer: false,
      explain: "ゲートウェイ型はVPC外から利用不可。オンプレからは<b class=\"key\">インターフェースエンドポイント</b>を使う",
      src: 1801
    },
    {
      id: "c03-ox-13",
      text: "VPC AとVPC B、VPC BとVPC Cがピアリングされていれば、VPC AからVPC Cへ通信できる。",
      answer: false,
      explain: "VPCピアリングは<b class=\"key\">推移的ルーティング不可</b>。A-Cの直接ピアリングかTransit Gatewayが必要",
      src: 1804
    },
    {
      id: "c03-ox-14",
      text: "CIDRが重複しているVPC同士でもVPCピアリング接続を作成できる。",
      answer: false,
      explain: "ピアリングは<b class=\"key\">CIDR重複不可</b>。重複がある場合のサービス公開は<b class=\"key\">PrivateLink</b>が有効",
      src: 1807
    },
    {
      id: "c03-ox-15",
      text: "Site-to-Site VPN接続は1トンネルあたり最大1.25 Gbpsで、帯域を拡張するにはTGWのECMPを使う。",
      answer: true,
      explain: "Transit Gateway＋ECMPで複数トンネルを束ねて帯域を増やせる（2025年11月以降は TGW/Cloud WAN 接続で 5 Gbps トンネルも選べる）",
      src: 1810
    },
    {
      id: "c03-ox-16",
      text: "Direct Connectの通信はデフォルトで暗号化されている。",
      answer: false,
      explain: "DXは専用線だが<b class=\"key\">暗号化されない</b>。<b class=\"key\">MACsec</b>または<b class=\"key\">DX上のIPsec VPN</b>で暗号化する",
      src: 1813
    },
    {
      id: "c03-ox-17",
      text: "Direct Connect Gatewayを使うと、1つのDX接続から複数リージョンのVPCに接続できる。",
      answer: true,
      explain: "DX Gatewayは<b class=\"key\">グローバル</b>リソース。プライベートVIF／トランジットVIFで複数リージョンへ",
      src: 1816
    },
    {
      id: "c03-ox-18",
      text: "VPC Flow Logsでは、通信パケットのペイロード（中身）まで記録できる。",
      answer: false,
      explain: "Flow Logsはメタデータのみ。中身の検査は<b class=\"key\">VPC Traffic Mirroring</b>",
      src: 1819
    },
    {
      id: "c03-ox-19",
      text: "ゾーンアペックス（example.com）にはCNAMEレコードを作成できないが、エイリアスレコードは作成できる。",
      answer: true,
      explain: "エイリアスはRoute 53独自拡張で、アペックスでもELB・CloudFront等を指せる",
      src: 1822
    },
    {
      id: "c03-ox-20",
      text: "Route 53のエイリアスレコードは、EC2インスタンスのパブリックDNS名をターゲットにできる。",
      answer: false,
      explain: "EC2のDNS名はエイリアスのターゲット不可。ELB・CloudFront・S3ウェブサイト等が対象",
      src: 1825
    },
    {
      id: "c03-ox-21",
      text: "複数値回答ルーティングは、ヘルスチェックに合格した最大8個のレコードを返す。",
      answer: true,
      explain: "DNSレベルの簡易な分散と可用性向上。ELBの代替ではない",
      src: 1828
    },
    {
      id: "c03-ox-22",
      text: "Route 53ヘルスチェッカーは、プライベートサブネット内のリソースのエンドポイントを直接監視できる。",
      answer: false,
      explain: "ヘルスチェッカーはVPC外にある。<b class=\"key\">CloudWatchメトリクスのアラーム</b>を監視するヘルスチェックを使う",
      src: 1831
    },
    {
      id: "c03-ox-23",
      text: "オンプレミスのDNSサーバーからRoute 53プライベートホストゾーンのレコードを解決するには、Route 53 Resolverのアウトバウンドエンドポイントを使う。",
      answer: false,
      explain: "オンプレ→AWSは<b class=\"key\">インバウンドエンドポイント</b>。アウトバウンドはAWS→オンプレへの転送",
      src: 1834
    },
    {
      id: "c03-ox-24",
      text: "CloudFrontのOACは、SSE-KMSで暗号化されたS3オブジェクトの配信に対応している。",
      answer: true,
      explain: "OACは<b class=\"key\">SSE-KMS対応</b>の推奨方式。旧方式のOAIはSSE-KMS非対応",
      src: 1837
    },
    {
      id: "c03-ox-25",
      text: "CloudFrontでカスタムドメインのHTTPSを使う場合、ACM証明書はディストリビューション利用者の多いリージョンで発行する。",
      answer: false,
      explain: "CloudFrontで使うACM証明書は<b class=\"key\">us-east-1（バージニア北部）</b>で発行する",
      src: 1840
    },
    {
      id: "c03-ox-26",
      text: "CloudFront Functionsは、オリジンリクエスト・オリジンレスポンスのイベントでも実行できる。",
      answer: false,
      explain: "CloudFront Functionsは<b class=\"key\">ビューワーリクエスト/レスポンスのみ</b>。オリジン側は<b class=\"key\">Lambda@Edge</b>",
      src: 1843
    },
    {
      id: "c03-ox-27",
      text: "Global AcceleratorはTCPとUDPに対応し、2つの静的Anycast IPアドレスを提供する。",
      answer: true,
      explain: "固定IP・非HTTP・高速フェイルオーバーが要件ならGlobal Accelerator",
      src: 1846
    },
    {
      id: "c03-ox-28",
      text: "Application Load Balancerには、AZごとにElastic IPアドレスを割り当てることができる。",
      answer: false,
      explain: "EIPを割り当てられるのは<b class=\"key\">NLB</b>。ALBで固定IPが必要なら<b class=\"key\">Global Accelerator</b>を前段に置く",
      src: 1849
    },
    {
      id: "c03-ox-29",
      text: "Network Load Balancerのクロスゾーン負荷分散は、デフォルトで有効である。",
      answer: false,
      explain: "NLB・GWLBは<b class=\"key\">デフォルト無効</b>（有効化するとAZ間データ転送料金）。ALBはデフォルト有効",
      src: 1852
    },
    {
      id: "c03-ox-30",
      text: "Classic Load BalancerはSNIに対応しており、1つのリスナーで複数の証明書を使える。",
      answer: false,
      explain: "SNIに対応するのは<b class=\"key\">ALBとNLB</b>。CLBは非対応",
      src: 1855
    }
  ],
  mc: [
    {
      id: "c03-mc-01",
      stem: "ある企業は、2つのAZにまたがるVPCで3層Webアプリを運用している。<br>プライベートサブネットのアプリサーバーは、外部のSaaS APIを呼び出すため<b class=\"key\">インターネットへの外向き通信</b>が必要<br>要件：<b class=\"key\">1つのAZが停止しても外向き通信を継続</b>し、<b class=\"key\">運用負荷を最小</b>にしたい",
      choices: [
        "1つのパブリックサブネットにNAT Gatewayを1つ作成し、両AZのプライベートサブネットのルートを向ける",
        "各AZのパブリックサブネットにNAT Gatewayを作成し、各AZのプライベートサブネットのルートを同一AZのNAT Gatewayへ向ける",
        "各AZのパブリックサブネットにNATインスタンスを起動し、スクリプトでフェイルオーバーさせる",
        "プライベートサブネットのルートテーブルに 0.0.0.0/0 → インターネットゲートウェイを追加する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 2,
      choiceExplain: [
        { ok: false, text: "NAT GatewayはAZ単位。そのAZが停止すると全サブネットが外に出られない" },
        { ok: true, text: "AZ独立の構成でAZ障害に耐え、マネージドで運用負荷も最小" },
        { ok: false, text: "可用性は確保できるが、スクリプト管理・パッチ適用など<b class=\"key\">運用負荷が大きい</b>" },
        { ok: false, text: "プライベートIPのみのインスタンスはIGW経由で通信できず、パブリックサブネット化してしまう" }
      ],
      tip: "「AZ障害」＋「運用負荷最小」→ <b class=\"key\">マネージド（NAT Gateway）をAZごとに</b>",
      src: 1860
    },
    {
      id: "c03-mc-02",
      stem: "あるメディア企業は、プライベートサブネットのEC2から毎日数十TBのデータをAmazon S3（同一リージョン）にアップロードしている。<br>現在はNAT Gateway経由で通信しており、<b class=\"key\">NAT Gatewayのデータ処理料金が高額</b>になっている<br>要件：セキュリティを維持したまま、<b class=\"key\">最もコスト効率良く</b>料金を削減したい",
      choices: [
        "S3用のインターフェースVPCエンドポイントを作成する",
        "S3用のゲートウェイVPCエンドポイントを作成し、プライベートサブネットのルートテーブルに関連付ける",
        "EC2をパブリックサブネットに移動し、インターネットゲートウェイ経由でS3にアクセスする",
        "S3 Transfer Accelerationを有効にする"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        { ok: false, text: "機能はするが、<b class=\"key\">時間課金＋データ処理課金</b>が発生しゲートウェイ型より高い" },
        { ok: true, text: "ゲートウェイ型は<b class=\"key\">無料</b>。NATを経由しなくなり処理料金がなくなる" },
        { ok: false, text: "インスタンスをインターネットに露出させセキュリティ要件に反する" },
        { ok: false, text: "遠隔地からの長距離アップロード高速化の機能。NAT料金は減らない（かつ追加料金）" }
      ],
      tip: "「VPC内から同一リージョンのS3/DynamoDB」＋「コスト」→ <b class=\"key\">ゲートウェイ型</b>",
      src: 1874
    },
    {
      id: "c03-mc-03",
      stem: "ある企業は、Webサーバーの前段にALBを置いている。<br>セキュリティチームが、<b class=\"key\">特定の数個のIPアドレス</b>から攻撃的なリクエストが来ていることを発見した<br>要件：これらのIPアドレスからの通信を<b class=\"key\">VPCのネットワーク層で即座にブロック</b>したい",
      choices: [
        "ALBのセキュリティグループに、該当IPアドレスを拒否するインバウンドルールを追加する",
        "ALBが配置されたサブネットのネットワークACLに、該当IPアドレスを拒否するインバウンドルールを、既存の許可ルールより小さいルール番号で追加する",
        "ALBが配置されたサブネットのネットワークACLに、該当IPアドレスを拒否するルールを、既存の許可ルールより大きいルール番号で追加する",
        "VPC Flow Logsを有効化し、該当IPアドレスのREJECTを記録する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "SGには<b class=\"key\">拒否ルールを作れない</b>" },
        { ok: true, text: "NACLは<b class=\"key\">小さい番号から評価</b>され最初の一致が適用されるので、拒否が先に効く" },
        { ok: false, text: "先に許可ルールに一致するため、拒否ルールは評価されない" },
        { ok: false, text: "Flow Logsは記録するだけでブロックしない" }
      ],
      tip: "「IPを拒否」→ NACL。さらに<b class=\"key\">ルール番号の順序</b>まで問うのが定番<br>補足：L7レベルでのIP制御なら<b class=\"key\">AWS WAFのIPセット</b>も選択肢になる",
      src: 1888
    },
    {
      id: "c03-mc-04",
      stem: "ある企業は、カスタムネットワークACLをパブリックサブネットに適用した。<br>インバウンドで <b class=\"key\">TCP 443（0.0.0.0/0）を許可</b>、アウトバウンドで <b class=\"key\">TCP 443（0.0.0.0/0）を許可</b>した<br>SGではインバウンドTCP 443を許可済みだが、<b class=\"key\">インターネットのユーザーがWebサーバーに接続できない</b>",
      choices: [
        "セキュリティグループのアウトバウンドでTCP 443を許可する",
        "ネットワークACLのアウトバウンドで、TCP 1024〜65535（0.0.0.0/0）を許可する",
        "ネットワークACLのインバウンドで、TCP 1024〜65535（0.0.0.0/0）を許可する",
        "ルートテーブルにVPC CIDR宛のlocalルートを追加する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "SGは<b class=\"key\">ステートフル</b>なので応答は自動許可される。原因ではない" },
        { ok: true, text: "応答はクライアントの<b class=\"key\">エフェメラルポート</b>宛。ステートレスなNACLで明示許可が必要" },
        { ok: false, text: "インバウンドのエフェメラルポートは、サーバーが外部へ接続した際の戻り通信用" },
        { ok: false, text: "localルートは常に存在し削除も追加も不要" }
      ],
      tip: "「NACLで許可したのに通らない」→ <b class=\"key\">戻り方向のエフェメラルポート</b>を疑う",
      src: 1903
    },
    {
      id: "c03-mc-05",
      stem: "ある企業は、15個のAWSアカウントに合計60個のVPCを持ち、さらに2拠点のオンプレミスとSite-to-Site VPNで接続している。<br>すべてのVPCとオンプレミスの<b class=\"key\">相互通信</b>が必要で、今後VPCは増え続ける予定<br>要件：<b class=\"key\">運用負荷が最も少ない</b>ネットワーク設計にしたい",
      choices: [
        "すべてのVPC間をフルメッシュでVPCピアリングし、各VPCにVPNを接続する",
        "Transit Gatewayを作成してAWS RAMで各アカウントと共有し、全VPCとVPNをアタッチする",
        "1つのハブVPCを用意し、各VPCとピアリングしてハブVPC経由で相互に通信させる",
        "各VPCにVPCエンドポイントを作成し、PrivateLinkで相互接続する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "VPC数が増えるとピアリング数が爆発的に増え（n(n−1)/2）、管理不能" },
        { ok: true, text: "TGWは<b class=\"key\">推移的ルーティング</b>可能なハブ。RAMでマルチアカウント共有でき拡張も容易" },
        { ok: false, text: "ピアリングは<b class=\"key\">推移不可</b>。ハブVPC経由で別VPCには届かない" },
        { ok: false, text: "PrivateLinkは特定サービスの一方向公開。全体の相互ネットワーク接続には向かない" }
      ],
      tip: "「多数のVPC」「相互」「オンプレも」→ <b class=\"key\">Transit Gateway</b>",
      src: 1917
    },
    {
      id: "c03-mc-06",
      stem: "あるSaaS事業者は、自社VPC内のNLBの背後にあるAPIを、数百の顧客のVPC（別アカウント）から<b class=\"key\">プライベートに</b>利用させたい。<br>多くの顧客VPCは事業者VPCと<b class=\"key\">CIDRが重複</b>している<br>顧客側から事業者VPCの他のリソースにはアクセスさせたくない",
      choices: [
        "各顧客VPCとVPCピアリングを作成する",
        "Transit Gatewayで各顧客VPCを接続する",
        "NLBを使ってVPCエンドポイントサービス（AWS PrivateLink）を作成し、顧客にインターフェースエンドポイントを作成してもらう",
        "APIをインターネットに公開し、セキュリティグループで顧客のIPを許可する"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "<b class=\"key\">CIDR重複不可</b>。また数百のピアリングは運用困難で、VPC全体が到達範囲になる" },
        { ok: false, text: "CIDR重複ではルーティングが成立せず、ネットワーク全体を繋ぐのは要件過剰" },
        { ok: true, text: "PrivateLinkは<b class=\"key\">CIDR重複でも可</b>、<b class=\"key\">特定サービスのみ一方向</b>で公開できる" },
        { ok: false, text: "「プライベートに」という要件に反する" }
      ],
      tip: "「サービス公開」「CIDR重複」「他は見せない」→ <b class=\"key\">PrivateLink</b>",
      src: 1931
    },
    {
      id: "c03-mc-07",
      stem: "ある金融機関は、オンプレミスのデータセンターとAWSの間で、<b class=\"key\">毎日大量のデータを一貫した低レイテンシー</b>で転送する必要がある。<br>コンプライアンス上、<b class=\"key\">転送中のデータは暗号化</b>しなければならない<br>回線は<b class=\"key\">10 Gbpsの専用接続</b>を予定しており、対応ロケーションを利用できる<br>要件：暗号化による性能低下を最小限にしたい",
      choices: [
        "Direct Connectを使用する。DXは専用線のため追加の暗号化は不要である",
        "Direct Connect専用接続でMACsecを有効にする",
        "インターネット経由のSite-to-Site VPNのみを使用する",
        "Direct Connectのホスト型接続（1 Gbps）を使い、アプリケーション側で暗号化する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "DXは<b class=\"key\">デフォルトで暗号化されない</b>。暗号化要件を満たさない" },
        { ok: true, text: "<b class=\"key\">MACsec</b>は10/100/400 Gbps専用接続のL2暗号化。ラインレートに近い性能で暗号化できる" },
        { ok: false, text: "インターネット経由で<b class=\"key\">一貫した性能</b>を満たさず、1トンネル1.25 Gbpsの制限もある" },
        { ok: false, text: "帯域が要件に足りず、アプリ改修の負担も大きい" }
      ],
      tip: "「DX＋暗号化」→ <b class=\"key\">MACsec</b>（高速・専用接続）または<b class=\"key\">VPN over DX</b>",
      src: 1945
    },
    {
      id: "c03-mc-08",
      stem: "ある企業は、本社とAWSを1本のDirect Connectで接続している。<br>DXが障害で停止した場合でも<b class=\"key\">通信を継続</b>したいが、DXの追加回線は予算上難しい<br>一時的に帯域が下がることは許容できる<br>要件：<b class=\"key\">最もコスト効率の良い</b>方法を選びたい",
      choices: [
        "別のDXロケーションに2本目のDirect Connect専用接続を追加する",
        "Site-to-Site VPNをバックアップ接続として設定し、BGPでDXを優先させる",
        "AWS Client VPNを本社の全社員PCに導入する",
        "VPCピアリングでオンプレミスと接続する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        { ok: false, text: "耐障害性は最高だが<b class=\"key\">コストが高い</b>（予算要件に反する）" },
        { ok: true, text: "<b class=\"key\">VPNは低コストなDXのバックアップ</b>。BGPでDX経路を優先し障害時に自動切替" },
        { ok: false, text: "個人のリモートアクセス用で、拠点間接続のバックアップには不適" },
        { ok: false, text: "VPCピアリングはVPC同士の接続でオンプレミスとは接続できない" }
      ],
      tip: "「DXのバックアップ」＋「コスト重視」→ <b class=\"key\">Site-to-Site VPN</b>／「最大耐障害性」→ 複数ロケーションDX",
      src: 1960
    },
    {
      id: "c03-mc-09",
      stem: "ある企業は、オンプレミスのアプリからAWS上のEC2をプライベートDNS名（corp.internal、Route 53プライベートホストゾーン）で名前解決したい。<br>オンプレミスとVPCはDirect Connectで接続済み<br>またVPC内のEC2からも、オンプレのActive Directoryドメイン（ad.example.local）を名前解決したい",
      choices: [
        "Resolverインバウンドエンドポイントのみを作成する",
        "Resolverアウトバウンドエンドポイントのみを作成し、転送ルールを設定する",
        "Resolverインバウンドエンドポイントとアウトバウンドエンドポイントを作成し、アウトバウンド側にad.example.local宛の転送ルールを設定する",
        "プライベートホストゾーンをパブリックホストゾーンに変更する"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "オンプレ→AWSは解決できるが、AWS→オンプレの解決ができない" },
        { ok: false, text: "AWS→オンプレのみ。オンプレ→AWSの解決ができない" },
        { ok: true, text: "<b class=\"key\">インバウンド（オンプレ→AWS）＋アウトバウンド（AWS→オンプレ）</b>の双方向ハイブリッドDNS" },
        { ok: false, text: "内部名をインターネットに公開することになり不適切" }
      ],
      tip: "問い合わせが<b class=\"key\">どちらから来るか</b>で「イン/アウト」を決める",
      src: 1975
    },
    {
      id: "c03-mc-10",
      stem: "あるECサイトは、ALBの背後で新バージョンをリリースする。<br>既存環境（Blue）と新環境（Green）は別のALBで稼働している<br>要件：まず<b class=\"key\">全ユーザーの10%だけ</b>を新環境に送り、問題がなければ段階的に増やしたい。DNSで制御する",
      choices: [
        "Route 53の位置情報ルーティングで、特定の国のユーザーだけをGreenに送る",
        "Route 53の加重ルーティングで、Blueに重み90、Greenに重み10を設定する",
        "Route 53のフェイルオーバールーティングで、Greenをセカンダリにする",
        "Route 53のレイテンシールーティングで、両方のALBを登録する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 2,
      choiceExplain: [
        { ok: false, text: "国単位の振り分けで、全ユーザーの一定割合という要件に合わない" },
        { ok: true, text: "<b class=\"key\">加重ルーティング</b>で割合を指定し、重みを変えて段階的に移行（カナリア）" },
        { ok: false, text: "プライマリ障害時のみ切り替わる。割合での配分はできない" },
        { ok: false, text: "レイテンシーで振り分けるため、割合を制御できない" }
      ],
      tip: "「○%だけ」→ <b class=\"key\">加重</b>。「国」→ 位置情報。「障害時」→ フェイルオーバー",
      src: 1989
    },
    {
      id: "c03-mc-11",
      stem: "ある動画配信企業は、S3に保存した動画をCloudFrontで配信している。<br>動画は<b class=\"key\">数百のセグメントファイル（HLS）</b>で構成され、<b class=\"key\">有料会員のみ</b>視聴可能にしたい<br>ユーザーが<b class=\"key\">S3のURLに直接アクセスすることは禁止</b>したい。動画のURLは変更したくない",
      choices: [
        "S3の署名付きURLを各セグメントごとに発行し、バケットをパブリックにする",
        "CloudFrontの署名付きURLを各セグメントに発行し、S3バケットポリシーでパブリック読み取りを許可する",
        "CloudFrontの署名付きCookieを使用し、OACを設定してS3バケットポリシーでCloudFrontからのアクセスのみ許可する",
        "CloudFrontの地域制限で有料会員の国のみ許可する"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "CloudFrontを経由せず、パブリックバケットは直接アクセス禁止の要件に反する" },
        { ok: false, text: "多数のファイルにURL個別発行は非効率でURLも変わる。パブリック読み取りで直接アクセスも可能" },
        { ok: true, text: "<b class=\"key\">署名付きCookie＝複数ファイル・URL不変</b>。<b class=\"key\">OAC</b>でS3への直接アクセスを遮断" },
        { ok: false, text: "地域制限は国単位で、会員かどうかは判別できない" }
      ],
      tip: "「複数ファイル」「URL変更なし」→ Cookie。「S3直接禁止」→ <b class=\"key\">OAC</b>",
      src: 2003
    },
    {
      id: "c03-mc-12",
      stem: "あるオンラインゲーム会社は、<b class=\"key\">UDPベース</b>のゲームサーバーを3リージョンのNLBの背後で運用している。<br>世界中のプレイヤーの<b class=\"key\">レイテンシーとジッターを改善</b>したい<br>企業の顧客がファイアウォールに登録するため<b class=\"key\">固定IPアドレス</b>が必要。リージョン障害時は<b class=\"key\">数十秒以内に切替</b>たい",
      choices: [
        "CloudFrontディストリビューションを作成し、NLBをオリジンにする",
        "Route 53のレイテンシールーティングで3つのNLBに振り分ける",
        "AWS Global Acceleratorを作成し、3リージョンのNLBをエンドポイントとして登録する",
        "各リージョンのNLBにElastic IPを割り当て、Route 53のフェイルオーバールーティングを使う"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "CloudFrontは<b class=\"key\">HTTP/HTTPS</b>向けで<b class=\"key\">UDPに非対応</b>" },
        { ok: false, text: "固定IPにならず、切替はDNSキャッシュ（TTL）の影響を受ける" },
        { ok: true, text: "<b class=\"key\">2つの静的Anycast IP</b>、UDP対応、AWSバックボーン経由、DNSに依存しない高速切替" },
        { ok: false, text: "固定IPは得られるが3リージョン分のIPが必要で、DNS切替はキャッシュで遅れうる" }
      ],
      tip: "「UDP」「固定IP」「高速フェイルオーバー」→ <b class=\"key\">Global Accelerator</b>",
      src: 2017
    },
    {
      id: "c03-mc-13",
      stem: "ある企業は、マイクロサービス化したWebアプリを1つのロードバランサーで公開したい。<br><b class=\"key\">/orders/</b> はECSの注文サービス、<b class=\"key\">/images/</b> はEC2の画像サービスに送りたい<br><b class=\"key\">api.example.com</b> と <b class=\"key\">www.example.com</b> の2つのドメインのHTTPS証明書を同じリスナーで使いたい",
      choices: [
        "Network Load BalancerでTCP 443のリスナーを作成し、ポートごとにターゲットグループを分ける",
        "Application Load Balancerでパスベースルーティングを設定し、SNIで複数証明書をリスナーに追加する",
        "Classic Load Balancerを2台作成し、それぞれに証明書を設定する",
        "Gateway Load Balancerでパスごとに振り分ける"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "NLBはL4のため<b class=\"key\">URLパスを見られない</b>" },
        { ok: true, text: "ALBは<b class=\"key\">L7のパスベース/ホストベース</b>ルーティングと<b class=\"key\">SNI</b>に対応" },
        { ok: false, text: "CLBはSNI非対応・パスベース非対応。2台は運用負荷も増える" },
        { ok: false, text: "GWLBは仮想アプライアンス挿入用のL3。パス振り分けはできない" }
      ],
      tip: "「パス」「ホスト名」「HTTP」→ <b class=\"key\">ALB</b>",
      src: 2031
    },
    {
      id: "c03-mc-14",
      stem: "ある企業は、VPCを出入りする全トラフィックを、マーケットプレイスの<b class=\"key\">サードパーティ製ファイアウォールアプライアンス</b>で検査したい。<br>アプライアンスは複数台で<b class=\"key\">スケールアウトと高可用性</b>を確保したい<br>アプリケーション側の構成変更は最小限にしたい",
      choices: [
        "Application Load Balancerの背後にアプライアンスを配置する",
        "Gateway Load Balancerの背後にアプライアンスを配置し、GWLBエンドポイントへ向けるようルートテーブルを設定する",
        "NATインスタンスにファイアウォールソフトを入れ、Auto Scalingで増やす",
        "ネットワークACLとセキュリティグループのルールを詳細化する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "ALBはHTTP/HTTPSの終端型で、全トラフィックを透過的に検査できない" },
        { ok: true, text: "<b class=\"key\">GWLB</b>はL3で透過的に通信をアプライアンスへ分散（GENEVE）。ルート変更のみで挿入可能" },
        { ok: false, text: "自己管理の負荷が大きく、サードパーティ製品の分散・HAを満たしにくい" },
        { ok: false, text: "サードパーティ製の高度な検査（IDS/IPS等）を代替できない" }
      ],
      tip: "「サードパーティの仮想アプライアンス」「透過的」→ <b class=\"key\">GWLB</b>",
      src: 2045
    },
    {
      id: "c03-mc-15",
      stem: "ある企業は、S3の静的コンテンツをCloudFrontで配信している。次の要件を満たす手順を2つ選べ。<br>要件1：ユーザーが<b class=\"key\">S3バケットに直接アクセスできない</b>ようにする<br>要件2：ライセンス契約により、<b class=\"key\">特定の国からのアクセスを拒否</b>する",
      choices: [
        "S3バケットのオリジンにOACを設定し、バケットポリシーでCloudFrontサービスプリンシパル（対象ディストリビューション）のみ許可する",
        "S3静的Webサイトホスティングを有効にし、そのエンドポイントにOACを設定する",
        "CloudFrontの地域制限（Geo Restriction）で対象国を拒否リストに登録する",
        "Route 53の位置情報ルーティングで対象国からのクエリを拒否する",
        "S3バケットのネットワークACLで対象国のIP範囲を拒否する"
      ],
      answer: ["A","C"],
      selectCount: 2,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">OAC</b>＋バケットポリシーでCloudFront経由のみに限定" },
        { ok: false, text: "S3<b class=\"key\">ウェブサイトエンドポイント</b>はカスタムオリジン扱いで<b class=\"key\">OAC/OAIを使えない</b>" },
        { ok: true, text: "CloudFrontの<b class=\"key\">地域制限</b>で国単位の拒否が可能" },
        { ok: false, text: "位置情報ルーティングはDNSの振り分けにすぎず、CloudFrontへのアクセス自体は拒否できない" },
        { ok: false, text: "S3はVPC内のリソースではなく、NACLを適用できない" }
      ],
      tip: "CloudFront配信の制御は<b class=\"key\">CloudFront側の機能（OAC・地域制限）</b>で完結させる",
      src: 2059
    },
    {
      id: "c03-mc-16",
      stem: "ある企業は、ALBの背後にAuto Scalingグループで複数のEC2を配置したWebアプリを運用している。<br>課題1：スケールイン時に、終了するインスタンスで処理中のリクエストがエラーになる<br>課題2：ユーザーがログイン後、別のインスタンスに振り分けられると<b class=\"key\">セッションが切れる</b><br>要件：アプリの大規模な改修は避け、ロードバランサーの設定で対処したい。適切な設定を2つ選べ",
      choices: [
        "ターゲットグループの登録解除の遅延（deregistration delay）を適切な秒数に設定する",
        "クロスゾーン負荷分散を無効にする",
        "ターゲットグループでスティッキーセッション（Cookieベース）を有効にする",
        "ALBをNetwork Load Balancerに置き換える",
        "ALBのアイドルタイムアウトを1秒に短縮する"
      ],
      answer: ["A","C"],
      selectCount: 2,
      domain: 2,
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">接続ドレイン</b>。登録解除中も処理中のリクエストを完了させる（デフォルト300秒）" },
        { ok: false, text: "クロスゾーンはAZ間の分散の話で、どちらの課題も解決しない" },
        { ok: true, text: "<b class=\"key\">スティッキーセッション</b>で同じユーザーを同じインスタンスへ送り、セッションを維持" },
        { ok: false, text: "置き換えはアプリ設計に影響が大きく、L7の機能も失う" },
        { ok: false, text: "長いリクエストが切断され、むしろエラーが増える" }
      ],
      tip: "「処理中リクエスト」→ 登録解除の遅延、「セッション維持（改修なし）」→ スティッキー<br>補足：改修できるなら、セッションを<b class=\"key\">ElastiCache/DynamoDB</b>に外出しするのが根本策",
      src: 2075
    },
    {
      id: "c03-mc-17",
      stem: "ある企業は、オンプレミスとAWS間の接続を新設する。次の条件を同時に満たす構成要素を2つ選べ。<br>条件1：<b class=\"key\">一貫したネットワーク性能</b>で、<b class=\"key\">3つのリージョン</b>の複数VPCへ接続する<br>条件2：オンプレミス側の1つの物理接続から、<b class=\"key\">運用負荷を最小</b>にして全VPCへ到達させる",
      choices: [
        "AWS Direct Connect接続",
        "Direct Connect Gateway",
        "各VPCへのインターネット経由のSite-to-Site VPN",
        "VPCピアリングで3リージョンのVPCを接続し、1つのVPCだけにDXを接続する",
        "AWS Client VPN"
      ],
      answer: ["A","B"],
      selectCount: 2,
      domain: 3,
      choiceExplain: [
        { ok: true, text: "一貫した性能が要件なので専用線の<b class=\"key\">Direct Connect</b>" },
        { ok: true, text: "<b class=\"key\">DX Gateway</b>はグローバルリソースで、1つのDXから複数リージョンのVPC（VGW/TGW）へ接続できる" },
        { ok: false, text: "インターネット経由で性能が一定しない。VPC数分の接続管理も必要" },
        { ok: false, text: "ピアリングは<b class=\"key\">エッジ間ルーティング不可</b>。ピア先のDXを経由して到達できない" },
        { ok: false, text: "個人ユーザー向けのリモートアクセス" }
      ],
      tip: "「DX＋複数リージョン」→ <b class=\"key\">DX Gateway</b>。多数VPCならさらにトランジットVIF＋TGW",
      src: 2093
    }
  ]
});
window.DATA.chapters.push({
  no: 4,
  title: "コンピューティング・コンテナ・サーバーレス",
  domainNote: "ドメイン2・3",
  src: [2110, 2776],
  lessons: [
    { id: "c04-l01", title: "EC2の基礎（インスタンス・AMI・購入オプション・配置・可用性）", pages: [
      {
        id: "c04-l01-p01",
        title: "全体像：コンピュートの選び方・Amazon EC2：インスタンスファミリー ①",
        html: "<h4>全体像：コンピュートの選び方</h4><ul><li>管理の重さ（左ほど自分で管理）：<b class=\"key\">EC2 → ECS/EKS on EC2 → Fargate → App Runner/Elastic Beanstalk → Lambda</b></li></ul>",
        oxIds: [],
        src: [2115,2115]
      },
      {
        id: "c04-l01-p02",
        title: "全体像：コンピュートの選び方・Amazon EC2：インスタンスファミリー ②",
        html: "<ul><li>判断の軸<ul><li><b class=\"key\">OSレベルの制御・ライセンス</b>が必要 → EC2（専有ホストなど）</li><li><b class=\"key\">コンテナ</b>で動かしたい → ECS / EKS（サーバー管理不要なら <b class=\"key\">Fargate</b>）</li><li><b class=\"key\">イベント駆動・短時間（15分以内）</b> → Lambda</li><li><b class=\"key\">長時間のバッチ・HPC</b> → AWS Batch / EC2（クラスタープレイスメント）</li><li><b class=\"key\">オンプレ・超低レイテンシ要件</b> → Outposts / Local Zones / Wavelength</li></ul></li></ul>",
        oxIds: [],
        src: [2116,2121]
      },
      {
        id: "c04-l01-p03",
        title: "全体像：コンピュートの選び方・Amazon EC2：インスタンスファミリー ③",
        html: "<ul><li><span class=\"badge b-freq\">頻出</span>「運用オーバーヘッド最小」「サーバー管理不要」→ <b class=\"key\">Lambda / Fargate</b> などサーバーレスが正解になりやすい</li></ul><h4>Amazon EC2：インスタンスファミリー</h4><ul><li>命名規則：例 <b class=\"key\">m7g.xlarge</b> ＝ ファミリー<b class=\"key\">m</b>・世代<b class=\"key\">7</b>・追加属性<b class=\"key\">g</b>（Graviton）・サイズ<b class=\"key\">xlarge</b></li></ul>",
        oxIds: [],
        src: [2122,2125]
      },
      {
        id: "c04-l01-p04",
        title: "全体像：コンピュートの選び方・Amazon EC2：インスタンスファミリー ④",
        html: "<ul><li><b class=\"key\">汎用（M・T）</b>：Webサーバー、小〜中規模DBなどバランス型<ul><li><b class=\"key\">T系（バースト可能）</b>：CPUクレジットを貯めて一時的に性能を上げる<ul><li><b class=\"key\">Unlimited モード</b>：クレジット枯渇後もバースト可（超過分は追加課金）</li></ul></li></ul></li><li><b class=\"key\">コンピューティング最適化（C）</b>：バッチ処理、動画エンコード、ゲームサーバー、HPC</li><li><b class=\"key\">メモリ最適化（R・X・z）</b>：インメモリDB、SAP HANA、リアルタイム分析</li></ul>",
        oxIds: [],
        src: [2126,2130]
      },
      {
        id: "c04-l01-p05",
        title: "全体像：コンピュートの選び方・Amazon EC2：インスタンスファミリー ⑤",
        html: "<ul><li><b class=\"key\">ストレージ最適化（I・D・H）</b>：高IOPSのローカル <b class=\"key\">instance store</b>（NoSQL、データウェアハウス）</li><li><b class=\"key\">高速コンピューティング（P・G・Inf・Trn）</b>：GPU / 機械学習の学習・推論<ul><li><b class=\"key\">Inferentia（Inf）＝推論</b>、<b class=\"key\">Trainium（Trn）＝学習</b> 向けのAWS独自チップ</li></ul></li></ul>",
        oxIds: [],
        src: [2131,2133]
      },
      {
        id: "c04-l01-p06",
        title: "全体像：コンピュートの選び方・Amazon EC2：インスタンスファミリー ⑥",
        html: "<ul><li><b class=\"key\">Graviton（ARM、名前に g）</b>：x86同等品より<b class=\"key\">価格性能比が高い</b>（AWS公称 最大40%向上）</li><li><span class=\"badge b-cmp\">比較</span>instance store＝<b class=\"key\">一時的</b>（停止・終了で消える）／EBS＝<b class=\"key\">永続</b></li></ul>",
        oxIds: [],
        src: [2134,2135]
      },
      {
        id: "c04-l01-p07",
        title: "AMI（Amazon Machine Image）・ユーザーデータとインスタンスメタデータ ①",
        html: "<h4>AMI（Amazon Machine Image）</h4><ul><li>EC2を起動するための<b class=\"key\">テンプレート</b>（OS・ソフトウェア・EBSスナップショット・起動権限）</li><li><b class=\"key\">リージョン単位</b>のリソース → 他リージョンで使うには <b class=\"key\">AMIをコピー</b></li><li>他アカウントと<b class=\"key\">共有</b>可能（起動許可を付与）<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>暗号化AMIの共有には <b class=\"key\">カスタマー管理KMSキー</b>の共有も必要</span></li><li>デフォルトの <b class=\"key\">aws/ebs（AWS管理キー）で暗号化したものは共有不可</b> → CMKで再暗号化してコピー</li></ul></li></ul>",
        oxIds: ["c04-ox-12","c04-ox-26"],
        src: [2138,2142]
      },
      {
        id: "c04-l01-p08",
        title: "AMI（Amazon Machine Image）・ユーザーデータとインスタンスメタデータ ②",
        html: "<ul><li><b class=\"key\">ゴールデンAMI</b>：事前にソフトを焼き込み → 起動時間を短縮（Auto Scalingのスケールアウトが速くなる）</li><li><b class=\"key\">EC2 Image Builder</b>：AMIの作成・パッチ適用・テストを自動化するマネージドサービス</li><li>Marketplace AMI：サードパーティ製品入りのAMI（ライセンス料込み）</li></ul><h4>ユーザーデータとインスタンスメタデータ</h4><ul><li><b class=\"key\">ユーザーデータ</b>：起動時に実行するスクリプト（パッケージ導入・設定）<ul><li>デフォルトは<b class=\"key\">初回起動時のみ</b>、<b class=\"key\">root権限</b>で実行</li><li>サイズ上限 <b class=\"key\">16KB</b>（base64エンコード前）</li></ul></li></ul>",
        oxIds: ["c04-ox-09"],
        src: [2143,2150]
      },
      {
        id: "c04-l01-p09",
        title: "AMI（Amazon Machine Image）・ユーザーデータとインスタンスメタデータ ③",
        html: "<ul><li><b class=\"key\">インスタンスメタデータ（IMDS）</b>：インスタンス自身の情報を取得<ul><li>エンドポイント：<b class=\"key\">http://169.254.169.254/latest/meta-data/</b></li><li>インスタンスID、AZ、IPアドレス、<b class=\"key\">IAMロールの一時認証情報</b>などを取得</li><li><b class=\"key\">IMDSv2</b>：セッショントークン必須 → SSRF攻撃対策。<b class=\"key\">IMDSv2の強制</b>が推奨</li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>メタデータ（自分の情報）とユーザーデータ（起動スクリプト）を混同しない</span></li><li><span class=\"badge b-freq\">頻出</span>EC2からAWS APIを呼ぶ → アクセスキーを置かず <b class=\"key\">IAMロール（インスタンスプロファイル）</b></li></ul>",
        oxIds: ["c04-ox-10"],
        src: [2151,2156]
      },
      {
        id: "c04-l01-p10",
        title: "EC2 購入オプション ①",
        html: "<ul><li><b class=\"key\">オンデマンド</b>：秒単位課金（Linux等）、契約なし。短期・予測不能・中断不可の負荷</li><li><b class=\"key\">リザーブドインスタンス（RI）</b>：<b class=\"key\">1年 or 3年</b>契約で大幅割引<ul><li><b class=\"key\">Standard RI</b>：最大<b class=\"key\">72%</b>割引。インスタンスファミリー変更不可、<b class=\"key\">RI Marketplaceで売却可</b></li></ul></li></ul>",
        oxIds: ["c04-ox-02"],
        src: [2159,2161]
      },
      {
        id: "c04-l01-p11",
        title: "EC2 購入オプション ②",
        html: "<ul><li><b class=\"key\">Convertible RI</b>：最大<b class=\"key\">66%</b>割引。ファミリー・OS等を<b class=\"key\">交換可能</b><ul><li>支払い：全額前払い／一部前払い／前払いなし（前払いが多いほど割引大）</li><li><b class=\"key\">ゾーナルRI</b>（AZ指定）は<b class=\"key\">キャパシティ予約あり</b>、リージョナルRIは割引のみ</li></ul></li></ul>",
        oxIds: [],
        src: [2162,2164]
      },
      {
        id: "c04-l01-p12",
        title: "EC2 購入オプション ③",
        html: "<ul><li><b class=\"key\">Savings Plans</b>：<b class=\"key\">1時間あたりの利用額（$/h）をコミット</b>（1年 or 3年）<ul><li><b class=\"key\">Compute Savings Plans</b>：最大<b class=\"key\">66%</b>。<b class=\"key\">EC2・Fargate・Lambda</b>に適用、リージョン・ファミリー変更も自由</li></ul></li></ul>",
        oxIds: ["c04-ox-03"],
        src: [2165,2166]
      },
      {
        id: "c04-l01-p13",
        title: "EC2 購入オプション ④",
        html: "<ul><li><b class=\"key\">EC2 Instance Savings Plans</b>：最大<b class=\"key\">72%</b>。特定リージョンの特定ファミリーに限定（サイズ・OSは自由）<ul><li><span class=\"badge b-cmp\">比較</span>柔軟性重視ならCompute SP、割引率重視ならEC2 Instance SP</li></ul></li><li><b class=\"key\">スポットインスタンス</b>：余剰キャパシティを最大<b class=\"key\">90%</b>割引で利用<ul><li>AWS都合で中断あり（<b class=\"key\">2分前に中断通知</b>）</li><li>用途：バッチ、ビッグデータ、CI/CD、ステートレスなWeb、HPC（<b class=\"key\">中断に耐えられる処理</b>）</li></ul></li></ul>",
        oxIds: ["c04-ox-01"],
        src: [2167,2171]
      },
      {
        id: "c04-l01-p14",
        title: "EC2 購入オプション ⑤",
        html: "<ul><li><b class=\"key\">EC2 リバランス推奨</b>：中断リスク上昇を事前通知（2分通知より前に来ることがある）<ul><li><b class=\"key\">Spot Fleet / EC2 Fleet</b>：複数タイプ・AZから目標容量を確保<ul><li>配分戦略：<b class=\"key\">price-capacity-optimized（推奨）</b>、capacity-optimized、lowest-price など</li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>DBや中断不可の処理にスポットは×</span></li></ul></li></ul>",
        oxIds: [],
        src: [2172,2175]
      },
      {
        id: "c04-l01-p15",
        title: "EC2 購入オプション ⑥",
        html: "<ul><li><b class=\"key\">Dedicated Hosts（専有ホスト）</b>：<b class=\"key\">物理サーバーを丸ごと</b>確保<ul><li><b class=\"key\">ソケット・コア単位のBYOL</b>（Windows Server、SQL Server、Oracle等）が可能</li><li>ホストの可視性・インスタンス配置の制御（<b class=\"key\">ホストアフィニティ</b>）</li></ul></li><li><b class=\"key\">Dedicated Instances（専有インスタンス）</b>：他アカウントとハードウェアを共有しない<ul><li>ただし<b class=\"key\">物理ホストの可視性・制御はなし</b>（BYOLのコア単位要件には不向き）</li></ul></li></ul>",
        oxIds: ["c04-ox-05"],
        src: [2176,2180]
      },
      {
        id: "c04-l01-p16",
        title: "EC2 購入オプション ⑦",
        html: "<ul><li><b class=\"key\">オンデマンドキャパシティ予約（ODCR）</b>：特定AZのキャパシティを<b class=\"key\">期間の縛りなし</b>で確保<ul><li><b class=\"key\">使わなくても課金</b>される。割引はなし → <b class=\"key\">RI/Savings Plansと組み合わせて割引</b></li><li>用途：決まった日のイベント、DR時の確実な起動</li></ul></li><li><b class=\"key\">EC2 Capacity Blocks for ML</b>：GPUインスタンスを将来の日時で短期予約</li></ul>",
        oxIds: ["c04-ox-04"],
        src: [2181,2184]
      },
      {
        id: "c04-l01-p17",
        title: "プレイスメントグループ・休止（Hibernate） ①",
        html: "<h4>プレイスメントグループ</h4><ul><li><b class=\"key\">クラスター</b>：<b class=\"key\">1つのAZ内</b>で物理的に近接配置<ul><li><b class=\"key\">低レイテンシ・高スループット</b>のノード間通信（HPC、密結合な計算）</li><li>弱点：AZ障害・ラック障害で全滅リスク。同一タイプでの一斉起動推奨</li></ul></li></ul>",
        oxIds: ["c04-ox-06"],
        src: [2187,2189]
      },
      {
        id: "c04-l01-p18",
        title: "プレイスメントグループ・休止（Hibernate） ②",
        html: "<ul><li><b class=\"key\">分散（Spread）</b>：インスタンスを<b class=\"key\">別々のラック（ハードウェア）</b>に配置<ul><li><b class=\"key\">1グループ・1AZあたり最大7インスタンス</b>（実行中）</li><li>用途：少数の重要インスタンスの<b class=\"key\">同時障害を避ける</b></li></ul></li></ul>",
        oxIds: [],
        src: [2190,2192]
      },
      {
        id: "c04-l01-p19",
        title: "プレイスメントグループ・休止（Hibernate） ③",
        html: "<ul><li><b class=\"key\">パーティション</b>：インスタンス群をパーティション（ラック群）に分割<ul><li><b class=\"key\">1AZあたり最大7パーティション</b>、インスタンスは数百台規模まで可</li><li>用途：<b class=\"key\">HDFS・HBase・Cassandra・Kafka</b>など大規模分散システム</li><li>メタデータでパーティション番号を取得 → トポロジーを意識した配置が可能</li></ul></li><li><span class=\"badge b-cmp\">比較</span>「少数を確実に分離」＝分散、「大量をラック単位で分離」＝パーティション、「速さ」＝クラスター</li></ul><h4>休止（Hibernate）</h4><ul><li>停止時に<b class=\"key\">メモリ（RAM）内容をEBSルートボリュームに保存</b> → 再開時に復元</li><li>メリット：アプリ・キャッシュのウォームアップ不要で<b class=\"key\">素早く再開</b></li></ul>",
        oxIds: ["c04-ox-08"],
        src: [2193,2201]
      },
      {
        id: "c04-l01-p20",
        title: "プレイスメントグループ・休止（Hibernate） ④",
        html: "<ul><li>条件<ul><li>ルートボリュームは <b class=\"key\">EBS</b> かつ <b class=\"key\">暗号化</b>、RAMを保存できる容量が必要</li><li>RAMサイズ <b class=\"key\">150GB未満</b>、休止期間は最大 <b class=\"key\">60日</b></li></ul></li><li><span class=\"badge b-cmp\">比較</span>停止＝RAM消失／休止＝RAM保持／終了＝インスタンス削除</li></ul>",
        oxIds: [],
        src: [2202,2205]
      },
      {
        id: "c04-l01-p21",
        title: "ネットワークインターフェース（ENI / ENA / EFA）・EC2 の可用性・復旧 ①",
        html: "<h4>ネットワークインターフェース（ENI / ENA / EFA）</h4><ul><li><b class=\"key\">ENI（Elastic Network Interface）</b>：仮想NIC<ul><li><b class=\"key\">AZに紐づく</b>。プライベートIP、EIP、MACアドレス、セキュリティグループを持つ</li><li>別インスタンスへ<b class=\"key\">付け替え可能</b> → 簡易フェイルオーバー、MACアドレス固定のライセンス対策</li></ul></li><li><b class=\"key\">ENA（Elastic Network Adapter）</b>：<b class=\"key\">拡張ネットワーキング</b>（SR-IOV）<ul><li>高帯域・高PPS・低レイテンシ。追加料金なし</li></ul></li></ul>",
        oxIds: [],
        src: [2208,2212]
      },
      {
        id: "c04-l01-p22",
        title: "ネットワークインターフェース（ENI / ENA / EFA）・EC2 の可用性・復旧 ②",
        html: "<ul><li><b class=\"key\">EFA（Elastic Fabric Adapter）</b>：ENA＋<b class=\"key\">OSバイパス</b>機能<ul><li><b class=\"key\">HPC・MPI・分散機械学習</b>の超低レイテンシなノード間通信</li></ul></li><li><span class=\"badge b-freq\">頻出</span>「HPC」「MPI」「密結合」→ <b class=\"key\">EFA＋クラスタープレイスメントグループ</b></li></ul>",
        oxIds: ["c04-ox-11"],
        src: [2213,2215]
      },
      {
        id: "c04-l01-p23",
        title: "ネットワークインターフェース（ENI / ENA / EFA）・EC2 の可用性・復旧 ③",
        html: "<ul><li><b class=\"key\">Elastic IP</b>：固定パブリックIPv4。<b class=\"key\">1リージョン5個</b>がデフォルト上限<ul><li>パブリックIPv4アドレスは使用中も<b class=\"key\">有料</b>（2024年2月から）</li></ul></li></ul>",
        oxIds: [],
        src: [2216,2217]
      },
      {
        id: "c04-l01-p24",
        title: "ネットワークインターフェース（ENI / ENA / EFA）・EC2 の可用性・復旧 ④",
        html: "<h4>EC2 の可用性・復旧</h4><ul><li>ステータスチェック：<b class=\"key\">システムステータスチェック</b>（AWS側ハードウェア）／<b class=\"key\">インスタンスステータスチェック</b>（OS側）</li><li><b class=\"key\">自動復旧（Recover）</b>：システムチェック失敗時に別ハードウェアで再起動<ul><li><b class=\"key\">インスタンスID・プライベートIP・EIP・メタデータは維持</b></li></ul></li><li><span class=\"badge b-cmp\">比較</span>単一インスタンスの復旧＝自動復旧、台数維持＝Auto Scaling</li></ul>",
        oxIds: [],
        src: [2220,2223]
      },
    ] },
    { id: "c04-l02", title: "EC2 Auto ScalingとAWS Lambda", pages: [
      {
        id: "c04-l02-p01",
        title: "EC2 Auto Scaling：基本・EC2 Auto Scaling：スケーリングポリシー ①",
        html: "<h4>EC2 Auto Scaling：基本</h4><ul><li><b class=\"key\">Auto Scaling グループ（ASG）</b>：最小・最大・希望（desired）容量の間で台数を自動調整</li><li><b class=\"key\">起動テンプレート（Launch Template）</b>：AMI、タイプ、キーペア、SG、ユーザーデータ等の定義<ul><li><b class=\"key\">バージョン管理可能</b>、複数インスタンスタイプ・<b class=\"key\">スポット混在</b>に対応</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">起動設定（Launch Configuration）は非推奨</b>の旧方式 → 新規は起動テンプレート</span></li></ul></li></ul>",
        oxIds: [],
        src: [2226,2229]
      },
      {
        id: "c04-l02-p02",
        title: "EC2 Auto Scaling：基本・EC2 Auto Scaling：スケーリングポリシー ②",
        html: "<ul><li><b class=\"key\">複数AZ</b>にまたがって配置 → AZ間で台数を<b class=\"key\">自動で均衡化</b>（リバランス）</li><li><b class=\"key\">ELBとの統合</b>：ターゲットグループに自動登録・登録解除</li><li><b class=\"key\">混合インスタンスポリシー</b>：オンデマンドのベース容量＋スポットの割合を指定</li><li><b class=\"key\">インスタンスの更新（Instance Refresh）</b>：新AMIへ順次入れ替え</li></ul>",
        oxIds: [],
        src: [2230,2233]
      },
      {
        id: "c04-l02-p03",
        title: "EC2 Auto Scaling：基本・EC2 Auto Scaling：スケーリングポリシー ③",
        html: "<h4>EC2 Auto Scaling：スケーリングポリシー</h4><ul><li><b class=\"key\">ターゲット追跡</b>：指標を目標値に保つ（例：<b class=\"key\">平均CPU 50%</b>、<b class=\"key\">ALBRequestCountPerTarget</b>）<ul><li>最もシンプルで推奨。CloudWatchアラームを自動作成</li></ul></li><li><b class=\"key\">ステップスケーリング</b>：アラームの超過幅に応じて段階的に増減（例：70%で+1、90%で+3）</li><li><b class=\"key\">シンプルスケーリング</b>：アラーム1つで決まった台数を増減。<b class=\"key\">クールダウン中は次の動作をしない</b></li></ul>",
        oxIds: [],
        src: [2236,2239]
      },
      {
        id: "c04-l02-p04",
        title: "EC2 Auto Scaling：基本・EC2 Auto Scaling：スケーリングポリシー ④",
        html: "<ul><li><b class=\"key\">スケジュールスケーリング</b>：<b class=\"key\">決まった日時</b>に容量変更（例：毎朝9時に10台）</li><li><b class=\"key\">予測スケーリング</b>：過去の負荷パターンを<b class=\"key\">機械学習で予測</b>し、事前にスケール<ul><li>日次・週次の<b class=\"key\">周期的な負荷</b>に有効</li></ul></li></ul>",
        oxIds: ["c04-ox-15"],
        src: [2240,2242]
      },
      {
        id: "c04-l02-p05",
        title: "EC2 Auto Scaling：基本・EC2 Auto Scaling：スケーリングポリシー ⑤",
        html: "<ul><li><span class=\"badge b-freq\">頻出</span>「毎週月曜朝に負荷が急増、起動に時間がかかる」→ <b class=\"key\">予測 or スケジュール</b></li><li><b class=\"key\">SQSキューに基づくスケール</b>：「インスタンスあたりのバックログ」を指標にターゲット追跡</li></ul>",
        oxIds: [],
        src: [2243,2244]
      },
      {
        id: "c04-l02-p06",
        title: "EC2 Auto Scaling：クールダウン・ヘルスチェック・終了ポリシー・EC2 Auto Scaling：ライフサイクルフック・ウォームプール ①",
        html: "<h4>EC2 Auto Scaling：クールダウン・ヘルスチェック・終了ポリシー</h4><ul><li><b class=\"key\">クールダウン</b>：スケール後、次のスケール動作を待つ時間（デフォルト <b class=\"key\">300秒</b>）<ul><li>主に<b class=\"key\">シンプルスケーリング</b>に適用。ターゲット追跡・ステップは<b class=\"key\">インスタンスウォームアップ</b>を使う</li></ul></li></ul>",
        oxIds: [],
        src: [2247,2248]
      },
      {
        id: "c04-l02-p07",
        title: "EC2 Auto Scaling：クールダウン・ヘルスチェック・終了ポリシー・EC2 Auto Scaling：ライフサイクルフック・ウォームプール ②",
        html: "<ul><li><b class=\"key\">ヘルスチェック</b><ul><li>デフォルトは <b class=\"key\">EC2ステータスチェック</b>のみ</li><li><b class=\"key\">ELBヘルスチェック</b>を有効化 → アプリ異常（HTTP応答不良）も検知して置き換え</li><li><b class=\"key\">ヘルスチェック猶予期間</b>：起動直後は判定しない（ブート処理中の誤検知防止）</li></ul></li><li><b class=\"key\">デフォルト終了ポリシー</b><ul><li>①インスタンスが<b class=\"key\">最も多いAZ</b>を選ぶ → ②最も古い起動テンプレート/設定のもの → ③次の課金時間に近いもの</li></ul></li></ul>",
        oxIds: ["c04-ox-13"],
        src: [2249,2254]
      },
      {
        id: "c04-l02-p08",
        title: "EC2 Auto Scaling：クールダウン・ヘルスチェック・終了ポリシー・EC2 Auto Scaling：ライフサイクルフック・ウォームプール ③",
        html: "<ul><li><b class=\"key\">スケールイン保護</b>：特定インスタンスをスケールインの対象から外す</li></ul><h4>EC2 Auto Scaling：ライフサイクルフック・ウォームプール</h4><ul><li><b class=\"key\">ライフサイクルフック</b>：起動時・終了時に<b class=\"key\">一時停止（Pending:Wait / Terminating:Wait）</b>して処理を挟む<ul><li>起動時：ソフト導入・設定完了まで待ってからInServiceへ</li><li>終了時：<b class=\"key\">ログの退避</b>、接続のドレイン、登録解除</li><li>デフォルトのタイムアウト <b class=\"key\">1時間</b>。EventBridge / SNS / SQS で通知 → Lambda等で処理</li></ul></li></ul>",
        oxIds: ["c04-ox-14"],
        src: [2255,2261]
      },
      {
        id: "c04-l02-p09",
        title: "EC2 Auto Scaling：クールダウン・ヘルスチェック・終了ポリシー・EC2 Auto Scaling：ライフサイクルフック・ウォームプール ④",
        html: "<ul><li><b class=\"key\">ウォームプール</b>：<b class=\"key\">事前初期化済み</b>のインスタンス（停止・休止・実行中）をプールしておく<ul><li>起動処理が長いアプリでも<b class=\"key\">スケールアウトを高速化</b></li><li>停止状態ならEBS料金のみでコストを抑えられる</li></ul></li></ul>",
        oxIds: [],
        src: [2262,2264]
      },
      {
        id: "c04-l02-p10",
        title: "AWS Lambda：基本 ①",
        html: "<ul><li><b class=\"key\">サーバーレス</b>のイベント駆動コード実行。<b class=\"key\">リクエスト数＋実行時間（GB秒）</b>で課金</li><li>最大実行時間 <b class=\"key\">15分（900秒）</b></li><li>メモリ <b class=\"key\">128MB〜10,240MB</b>（メモリに比例して<b class=\"key\">CPUも増える</b>、最大6vCPU）</li></ul>",
        oxIds: ["c04-ox-19"],
        src: [2267,2269]
      },
      {
        id: "c04-l02-p11",
        title: "AWS Lambda：基本 ②",
        html: "<ul><li><b class=\"key\">/tmp（エフェメラルストレージ）</b>：<b class=\"key\">512MB〜10,240MB</b></li><li>永続・共有ストレージが必要 → <b class=\"key\">Amazon EFS をマウント</b></li><li>呼び出し方式<ul><li><b class=\"key\">同期</b>：API Gateway、ALB、SDKのInvoke（RequestResponse）</li></ul></li></ul>",
        oxIds: [],
        src: [2270,2273]
      },
      {
        id: "c04-l02-p12",
        title: "AWS Lambda：基本 ③",
        html: "<ul><li><b class=\"key\">非同期</b>：<b class=\"key\">S3、SNS、EventBridge</b> など。失敗時に自動で<b class=\"key\">2回リトライ</b><ul><li>失敗イベントは <b class=\"key\">DLQ（SQS/SNS）</b> または <b class=\"key\">非同期呼び出しの送信先（Destinations）</b> へ</li></ul></li></ul>",
        oxIds: [],
        src: [2274,2275]
      },
      {
        id: "c04-l02-p13",
        title: "AWS Lambda：基本 ④",
        html: "<ul><li><b class=\"key\">イベントソースマッピング（ポーリング）</b>：<b class=\"key\">SQS、Kinesis、DynamoDB Streams、MSK</b> など<ul><li>Lambdaサービス側がキュー・ストリームを<b class=\"key\">ポーリング</b>してバッチで呼び出す</li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>15分を超える処理はLambda単体では不可 → <b class=\"key\">Step Functions分割、ECS/Fargate、Batch</b></span></li></ul>",
        oxIds: [],
        src: [2276,2278]
      },
      {
        id: "c04-l02-p14",
        title: "AWS Lambda：同時実行数 ①",
        html: "<ul><li><b class=\"key\">同時実行数</b>：同時に処理中のリクエスト数。<b class=\"key\">リージョンあたりデフォルト1,000</b>（引き上げ可能）<ul><li>上限超過 → <b class=\"key\">スロットリング（429 / TooManyRequestsException）</b></li></ul></li></ul>",
        oxIds: [],
        src: [2281,2282]
      },
      {
        id: "c04-l02-p15",
        title: "AWS Lambda：同時実行数 ②",
        html: "<ul><li><b class=\"key\">予約された同時実行（Reserved Concurrency）</b><ul><li>関数に<b class=\"key\">同時実行数を確保</b>し、同時に<b class=\"key\">上限としても働く</b>（それ以上はスロットル）</li><li>用途：重要関数の枠確保、<b class=\"key\">下流DBの過負荷防止</b>。追加料金なし</li><li>0に設定 → 関数を実質停止できる</li></ul></li></ul>",
        oxIds: [],
        src: [2283,2286]
      },
      {
        id: "c04-l02-p16",
        title: "AWS Lambda：同時実行数 ③",
        html: "<ul><li><b class=\"key\">プロビジョンド同時実行（Provisioned Concurrency）</b><ul><li>実行環境を<b class=\"key\">事前初期化</b>して待機 → <b class=\"key\">コールドスタートを解消</b></li><li><b class=\"key\">追加料金あり</b>。Application Auto Scalingでスケジュール調整可能</li></ul></li></ul>",
        oxIds: ["c04-ox-17"],
        src: [2287,2289]
      },
      {
        id: "c04-l02-p17",
        title: "AWS Lambda：同時実行数 ④",
        html: "<ul><li><b class=\"key\">SnapStart</b>：初期化済み環境の<b class=\"key\">スナップショット</b>から起動しコールドスタートを短縮<ul><li>対応：<b class=\"key\">Java、Python、.NET</b>（マネージドランタイム）</li><li><span class=\"badge b-cmp\">比較</span>追加コストを抑えて起動高速化＝SnapStart、確実に待機させる＝プロビジョンド</li></ul></li></ul>",
        oxIds: [],
        src: [2290,2292]
      },
      {
        id: "c04-l02-p18",
        title: "AWS Lambda：VPC・レイヤー・関数URLほか ①",
        html: "<ul><li><b class=\"key\">VPC Lambda</b>：VPC内のRDSやElastiCacheにアクセスするためにサブネット・SGを指定<ul><li><b class=\"key\">Hyperplane ENI</b>を使用（以前のような関数ごとのENI作成遅延は解消済み）</li><li>VPC Lambdaは<b class=\"key\">パブリックIPを持たない</b> → インターネットへは <b class=\"key\">NAT Gateway</b> 経由</li><li>S3・DynamoDBへは <b class=\"key\">VPCエンドポイント</b>でも可</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>VPC Lambdaをパブリックサブネットに置いてもインターネットには出られない</span></li></ul></li></ul>",
        oxIds: ["c04-ox-18"],
        src: [2295,2299]
      },
      {
        id: "c04-l02-p19",
        title: "AWS Lambda：VPC・レイヤー・関数URLほか ②",
        html: "<ul><li><b class=\"key\">RDS Proxy</b>：Lambdaの大量同時接続による<b class=\"key\">DB接続枯渇を防ぐ</b>（コネクションプーリング）</li><li><b class=\"key\">レイヤー</b>：共通ライブラリ・依存関係を別パッケージ化して<b class=\"key\">複数関数で共有</b><ul><li>1関数あたり<b class=\"key\">最大5レイヤー</b></li></ul></li></ul>",
        oxIds: [],
        src: [2300,2302]
      },
      {
        id: "c04-l02-p20",
        title: "AWS Lambda：VPC・レイヤー・関数URLほか ③",
        html: "<ul><li><b class=\"key\">デプロイパッケージ</b>：zip（直接アップロード<b class=\"key\">50MB</b>、解凍後<b class=\"key\">250MB</b>※レイヤー込み）<ul><li><b class=\"key\">コンテナイメージ</b>：最大 <b class=\"key\">10GB</b>（ECRに格納）</li></ul></li></ul>",
        oxIds: [],
        src: [2303,2304]
      },
      {
        id: "c04-l02-p21",
        title: "AWS Lambda：VPC・レイヤー・関数URLほか ④",
        html: "<ul><li><b class=\"key\">環境変数</b>：合計 <b class=\"key\">4KB</b>。機密情報は <b class=\"key\">Secrets Manager / Parameter Store</b> を推奨</li></ul>",
        oxIds: [],
        src: [2305,2305]
      },
      {
        id: "c04-l02-p22",
        title: "AWS Lambda：VPC・レイヤー・関数URLほか ⑤",
        html: "<ul><li><b class=\"key\">関数URL</b>：Lambdaに<b class=\"key\">専用HTTPSエンドポイント</b>を直接付与<ul><li>認証タイプ：<b class=\"key\">AWS_IAM</b> または <b class=\"key\">NONE</b></li><li><span class=\"badge b-cmp\">比較</span>APIキー・使用量プラン・リクエスト検証・キャッシュが必要なら <b class=\"key\">API Gateway</b></li></ul></li></ul>",
        oxIds: [],
        src: [2306,2308]
      },
      {
        id: "c04-l02-p23",
        title: "AWS Lambda：VPC・レイヤー・関数URLほか ⑥",
        html: "<ul><li><b class=\"key\">バージョンとエイリアス</b>：エイリアスで<b class=\"key\">加重ルーティング</b>（カナリアリリース）</li><li><b class=\"key\">Lambda@Edge / CloudFront Functions</b>：CloudFrontのエッジで実行（CDNの章で詳述）</li></ul>",
        oxIds: [],
        src: [2309,2310]
      },
    ] },
    { id: "c04-l03", title: "コンテナ・PaaS・ハイブリッド系コンピュートとCompute Optimizer", pages: [
      {
        id: "c04-l03-p01",
        title: "Amazon ECS（Elastic Container Service） ①",
        html: "<ul><li>AWS独自の<b class=\"key\">コンテナオーケストレーション</b>。Kubernetes知識不要でシンプル</li><li>構成要素<ul><li><b class=\"key\">タスク定義</b>：コンテナイメージ、CPU/メモリ、ポート、IAMロール等の設計図（JSON）</li><li><b class=\"key\">タスク</b>：タスク定義から起動したコンテナ群</li><li><b class=\"key\">サービス</b>：指定数のタスクを維持し、<b class=\"key\">ELBと連携</b></li><li><b class=\"key\">クラスター</b>：タスクを実行する論理グループ</li></ul></li></ul>",
        oxIds: [],
        src: [2313,2318]
      },
      {
        id: "c04-l03-p02",
        title: "Amazon ECS（Elastic Container Service） ②",
        html: "<ul><li><b class=\"key\">起動タイプ</b><ul><li><b class=\"key\">EC2起動タイプ</b>：自分でEC2（コンテナインスタンス）を管理。GPU・特殊設定・RI活用向け</li><li><b class=\"key\">Fargate起動タイプ</b>：<b class=\"key\">サーバー（EC2）管理不要</b>。タスク単位でvCPU/メモリ課金</li></ul></li></ul>",
        oxIds: [],
        src: [2319,2321]
      },
      {
        id: "c04-l03-p03",
        title: "Amazon ECS（Elastic Container Service） ③",
        html: "<ul><li><b class=\"key\">IAMロールの区別（最頻出）</b><ul><li><b class=\"key\">タスクロール</b>：コンテナ内の<b class=\"key\">アプリがAWS API（S3・DynamoDB等）を呼ぶ</b>権限</li><li><b class=\"key\">タスク実行ロール</b>：ECSエージェントが<b class=\"key\">ECRからイメージ取得・CloudWatch Logsへ出力</b>する権限</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>アプリにS3アクセスさせたい → EC2インスタンスロールではなく<b class=\"key\">タスクロール</b></span></li></ul></li></ul>",
        oxIds: ["c04-ox-20"],
        src: [2322,2325]
      },
      {
        id: "c04-l03-p04",
        title: "Amazon ECS（Elastic Container Service） ④",
        html: "<ul><li><b class=\"key\">awsvpc ネットワークモード</b>：タスクごとにENIとSGを割り当て（Fargateは必須）</li><li><b class=\"key\">ECS Service Auto Scaling</b>：タスク数をCPU・メモリ・ALBリクエスト数で増減</li><li><b class=\"key\">キャパシティプロバイダー</b>：EC2 ASG や <b class=\"key\">Fargate / Fargate Spot</b> を戦略的に組み合わせ</li><li><b class=\"key\">ECS Anywhere</b>：オンプレミスのサーバーでECSタスクを実行</li></ul>",
        oxIds: [],
        src: [2326,2329]
      },
      {
        id: "c04-l03-p05",
        title: "Amazon EKS（Elastic Kubernetes Service） ①",
        html: "<ul><li><b class=\"key\">マネージドKubernetes</b>。コントロールプレーンをAWSが複数AZで運用</li><li><span class=\"badge b-freq\">頻出</span>「既存のKubernetesマニフェストを利用」「オープンソース標準」「マルチクラウド移植性」→ <b class=\"key\">EKS</b></li><li>データプレーン（ワーカーノード）の選択肢<ul><li><b class=\"key\">マネージドノードグループ</b>：EC2ノードの作成・更新をAWSが支援</li><li><b class=\"key\">セルフマネージドノード</b>：自分でEC2を管理（カスタムAMIなど）</li><li><b class=\"key\">Fargate</b>：Podごとにサーバーレス実行</li><li><b class=\"key\">EKS Auto Mode</b>：ノードのプロビジョニング・スケーリング・更新までAWSが自動化</li></ul></li></ul>",
        oxIds: [],
        src: [2332,2338]
      },
      {
        id: "c04-l03-p06",
        title: "Amazon EKS（Elastic Kubernetes Service） ②",
        html: "<ul><li>スケーリング：<b class=\"key\">Cluster Autoscaler / Karpenter</b>（ノード）、<b class=\"key\">HPA</b>（Pod数）</li><li><b class=\"key\">IRSA / EKS Pod Identity</b>：Pod単位でIAMロールを付与</li><li><b class=\"key\">EKS Anywhere</b>：オンプレミスでEKS互換クラスターを運用</li><li><span class=\"badge b-cmp\">比較</span>ECS＝AWSネイティブで簡単／EKS＝Kubernetes標準・移植性</li></ul>",
        oxIds: [],
        src: [2339,2342]
      },
      {
        id: "c04-l03-p07",
        title: "Amazon ECR（Elastic Container Registry）・AWS Fargate ①",
        html: "<h4>Amazon ECR（Elastic Container Registry）</h4><ul><li>フルマネージドな<b class=\"key\">コンテナイメージレジストリ</b>（Docker Hubの代替）</li><li><b class=\"key\">プライベート / パブリック</b>リポジトリ、IAMとリポジトリポリシーでアクセス制御</li><li><b class=\"key\">イメージスキャン</b>：基本スキャン／<b class=\"key\">拡張スキャン（Amazon Inspector連携）</b>で脆弱性検出</li><li><b class=\"key\">ライフサイクルポリシー</b>：古いイメージを自動削除しコスト削減</li><li><b class=\"key\">クロスリージョン / クロスアカウントレプリケーション</b></li></ul>",
        oxIds: [],
        src: [2345,2349]
      },
      {
        id: "c04-l03-p08",
        title: "Amazon ECR（Elastic Container Registry）・AWS Fargate ②",
        html: "<ul><li><b class=\"key\">タグのイミュータビリティ</b>：同じタグの上書きを防止</li><li>保存時はS3に格納され暗号化（KMSも選択可）</li></ul><h4>AWS Fargate</h4><ul><li><b class=\"key\">コンテナ用サーバーレスコンピュートエンジン</b>（ECS・EKSで利用）</li><li>EC2のパッチ適用・スケーリング・容量計画が<b class=\"key\">不要</b></li><li>課金：タスク（Pod）が要求した <b class=\"key\">vCPU・メモリ × 実行時間</b></li></ul>",
        oxIds: ["c04-ox-21"],
        src: [2350,2356]
      },
      {
        id: "c04-l03-p09",
        title: "Amazon ECR（Elastic Container Registry）・AWS Fargate ③",
        html: "<ul><li><b class=\"key\">Fargate Spot</b>：中断ありで大幅割引。耐障害性のあるタスク向け</li><li>エフェメラルストレージ：デフォルト20GB、最大200GBまで拡張可。永続化は <b class=\"key\">EFS</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>GPUが必要、ホストOSを触りたい → Fargateではなく <b class=\"key\">EC2起動タイプ</b></span></li></ul>",
        oxIds: [],
        src: [2357,2359]
      },
      {
        id: "c04-l03-p10",
        title: "AWS App Runner・AWS Elastic Beanstalk ①",
        html: "<h4>AWS App Runner</h4><ul><li>ソースコード（GitHub）または<b class=\"key\">コンテナイメージ</b>から<b class=\"key\">Webアプリ・APIをすぐ公開</b></li><li>ロードバランサー、<b class=\"key\">HTTPS</b>、オートスケーリング、デプロイを全自動</li><li><span class=\"badge b-cmp\">比較</span>ECS/Fargateより設定がさらに少ない。インフラ知識がない開発者向け</li><li>VPCコネクタでVPC内のRDS等にアクセス可能</li></ul><h4>AWS Elastic Beanstalk</h4><ul><li><b class=\"key\">PaaS</b>：コードをアップロードするだけで EC2・ASG・ELB・RDS などを自動構築</li><li>基盤リソースは自分のアカウントに作られ、<b class=\"key\">中身は見えるし変更もできる</b></li><li>対応：Java、.NET、PHP、Node.js、Python、Ruby、Go、Docker</li></ul>",
        oxIds: [],
        src: [2362,2370]
      },
      {
        id: "c04-l03-p11",
        title: "AWS App Runner・AWS Elastic Beanstalk ②",
        html: "<ul><li>環境タイプ<ul><li><b class=\"key\">Web サーバー環境</b></li><li><b class=\"key\">ワーカー環境</b>：<b class=\"key\">SQSキュー</b>のメッセージを処理するバックグラウンドジョブ</li></ul></li><li><b class=\"key\">デプロイポリシー</b><ul><li><b class=\"key\">All at once</b>：一斉デプロイ。最速だが<b class=\"key\">ダウンタイムあり</b></li></ul></li></ul>",
        oxIds: [],
        src: [2371,2375]
      },
      {
        id: "c04-l03-p12",
        title: "AWS App Runner・AWS Elastic Beanstalk ③",
        html: "<ul><li><b class=\"key\">Rolling</b>：バッチごとに更新。更新中は<b class=\"key\">容量が減る</b><ul><li><b class=\"key\">Rolling with additional batch</b>：追加バッチを起動して<b class=\"key\">容量を維持</b></li><li><b class=\"key\">Immutable</b>：新ASGに新インスタンスを作成 → 問題なければ切替。<b class=\"key\">ロールバックが速く安全</b></li></ul></li></ul>",
        oxIds: ["c04-ox-22"],
        src: [2376,2378]
      },
      {
        id: "c04-l03-p13",
        title: "AWS App Runner・AWS Elastic Beanstalk ④",
        html: "<ul><li><b class=\"key\">Traffic splitting</b>：一部トラフィックを新バージョンへ（カナリア）<ul><li><b class=\"key\">Blue/Green</b>：別環境を作り <b class=\"key\">URLスワップ（CNAMEスワップ）</b></li></ul></li><li><span class=\"badge b-freq\">頻出</span>「開発者がインフラを気にせずに既存Webアプリを素早くデプロイ」→ <b class=\"key\">Elastic Beanstalk</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>RDSを環境内に作ると環境削除時にDBも消える → 本番は<b class=\"key\">環境外</b>でRDSを作る</span></li></ul>",
        oxIds: [],
        src: [2379,2382]
      },
      {
        id: "c04-l03-p14",
        title: "AWS Batch・AWS Outposts / Local Zones / Wavelength ①",
        html: "<h4>AWS Batch</h4><ul><li><b class=\"key\">バッチジョブ</b>のスケジューリング・実行をフルマネージドで提供</li><li><b class=\"key\">コンピューティング環境</b>：EC2（<b class=\"key\">スポット可</b>）または <b class=\"key\">Fargate</b></li><li><b class=\"key\">ジョブキュー</b>に投入 → 必要なリソースを自動で起動・終了</li><li>ジョブの依存関係、配列ジョブ、マルチノード並列ジョブ（HPC）に対応</li><li><span class=\"badge b-cmp\">比較</span>Lambda＝15分まで・軽量／<b class=\"key\">Batch＝実行時間の上限なし・大規模並列</b></li></ul>",
        oxIds: ["c04-ox-25"],
        src: [2385,2389]
      },
      {
        id: "c04-l03-p15",
        title: "AWS Batch・AWS Outposts / Local Zones / Wavelength ②",
        html: "<ul><li><span class=\"badge b-freq\">頻出</span>「数千の計算ジョブ」「スポットでコスト削減」「コンテナ化済みのバッチ」→ <b class=\"key\">AWS Batch</b></li></ul><h4>AWS Outposts / Local Zones / Wavelength</h4><ul><li><b class=\"key\">AWS Outposts</b>：AWSのハードウェア（ラック / サーバー）を<b class=\"key\">自社データセンターに設置</b><ul><li>同じAPI・コンソール・ツールでオンプレミス運用</li><li>用途：<b class=\"key\">データレジデンシー（データを社外に出せない）</b>、オンプレシステムへの<b class=\"key\">超低レイテンシ</b></li><li>EC2、EBS、ECS、EKS、RDS、S3 on Outposts などを実行</li></ul></li></ul>",
        oxIds: [],
        src: [2390,2396]
      },
      {
        id: "c04-l03-p16",
        title: "AWS Batch・AWS Outposts / Local Zones / Wavelength ③",
        html: "<ul><li><b class=\"key\">Local Zones</b>：大都市圏に配置されたリージョンの<b class=\"key\">拡張</b>拠点<ul><li>エンドユーザーへの<b class=\"key\">1桁ミリ秒のレイテンシ</b>（映像制作、リアルタイムゲーム）</li><li>VPCのサブネットをLocal Zoneに作成して利用</li></ul></li><li><b class=\"key\">Wavelength</b>：<b class=\"key\">通信事業者の5Gネットワーク内</b>にAWSインフラを配置<ul><li><b class=\"key\">5Gモバイル端末</b>向けの超低レイテンシ（AR/VR、コネクテッドカー）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>自社DC内＝Outposts／都市の近く＝Local Zones／5Gキャリア網内＝Wavelength</li></ul>",
        oxIds: ["c04-ox-23"],
        src: [2397,2402]
      },
      {
        id: "c04-l03-p17",
        title: "VMware Cloud on AWS・AWS Compute Optimizer ①",
        html: "<h4>VMware Cloud on AWS</h4><ul><li><b class=\"key\">VMware vSphere ベースの環境</b>をAWSのベアメタル上で実行</li><li>既存のvCenter・vMotion等のスキルとツールのまま<b class=\"key\">クラウド移行（リフト＆シフト）</b></li><li>用途：データセンター撤退、DR、ハイブリッド</li><li>注記：販売はBroadcom経由に移行。AWSネイティブの <b class=\"key\">Amazon EVS（Elastic VMware Service）</b> も登場</li><li><span class=\"badge b-freq\">頻出</span>「VMware の運用ツールを変えずに移行」→ <b class=\"key\">VMware Cloud on AWS</b></li></ul><h4>AWS Compute Optimizer</h4><ul><li><b class=\"key\">機械学習</b>で利用状況を分析し、<b class=\"key\">適正サイズ（ライトサイジング）</b>を推奨</li></ul>",
        oxIds: [],
        src: [2405,2412]
      },
      {
        id: "c04-l03-p18",
        title: "VMware Cloud on AWS・AWS Compute Optimizer ②",
        html: "<ul><li>対象：<b class=\"key\">EC2、Auto Scaling グループ、EBS、Lambda、ECS on Fargate</b>、RDS など</li><li>CloudWatchメトリクスを分析（デフォルト<b class=\"key\">14日間</b>、拡張インフラメトリクスで最大<b class=\"key\">93日間</b>）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">メモリ使用率</b>の分析には EC2 に <b class=\"key\">CloudWatch エージェント</b>が必要</span></li><li><span class=\"badge b-cmp\">比較</span>Trusted Advisor＝幅広いベストプラクティス点検／Compute Optimizer＝コンピュートのサイズ最適化</li></ul>",
        oxIds: ["c04-ox-24"],
        src: [2413,2416]
      },
    ] },
    { id: "c04-l04", title: "試験での出方と暗記数字", pages: [
      {
        id: "c04-l04-p01",
        title: "試験での出方 ①",
        html: "<ul><li>「中断されても問題ないバッチ」「最も低コスト」→ <b class=\"key\">スポットインスタンス</b>（＋AWS Batch / Spot Fleet）</li><li>「24時間365日稼働、1年以上使う、構成固定」→ <b class=\"key\">RI / EC2 Instance Savings Plans</b></li><li>「EC2とFargateとLambdaにまたがって割引」→ <b class=\"key\">Compute Savings Plans</b></li><li>「ソケット・コア単位のライセンス（BYOL）」「物理サーバーの可視性」→ <b class=\"key\">Dedicated Hosts</b></li><li>「特定AZで、期間の縛りなく確実に容量確保」→ <b class=\"key\">オンデマンドキャパシティ予約</b></li><li>「HPC」「ノード間の低レイテンシ」→ <b class=\"key\">クラスタープレイスメントグループ＋EFA</b></li></ul>",
        oxIds: [],
        src: [2419,2424]
      },
      {
        id: "c04-l04-p02",
        title: "試験での出方 ②",
        html: "<ul><li>「重要なインスタンスを少数、同時障害を避ける」→ <b class=\"key\">分散プレイスメントグループ</b></li><li>「Cassandra / HDFS / Kafka」→ <b class=\"key\">パーティションプレイスメントグループ</b></li><li>「起動後のメモリ状態を保ったまま素早く再開」→ <b class=\"key\">休止（Hibernate）</b></li><li>「EC2にAWS API権限」→ <b class=\"key\">IAMロール</b>（アクセスキーを埋め込まない）</li><li>「スケールアウトが遅い（起動処理が長い）」→ <b class=\"key\">ゴールデンAMI / ウォームプール</b></li><li>「終了前にログを退避」→ <b class=\"key\">ライフサイクルフック</b></li></ul>",
        oxIds: [],
        src: [2425,2430]
      },
      {
        id: "c04-l04-p03",
        title: "試験での出方 ③",
        html: "<ul><li>「アプリが応答しないのにインスタンスが置き換わらない」→ <b class=\"key\">ELBヘルスチェックを有効化</b></li><li>「毎週同じ時間帯に負荷急増」→ <b class=\"key\">予測スケーリング / スケジュールスケーリング</b></li><li>「CPU使用率を一定に保つ」→ <b class=\"key\">ターゲット追跡スケーリング</b></li><li>「Lambdaのコールドスタートを解消」→ <b class=\"key\">プロビジョンド同時実行</b>（Java等で低コスト短縮 → <b class=\"key\">SnapStart</b>）</li><li>「ある関数が他の関数の同時実行枠を食いつぶす」→ <b class=\"key\">予約された同時実行</b></li></ul>",
        oxIds: [],
        src: [2431,2435]
      },
      {
        id: "c04-l04-p04",
        title: "試験での出方 ④",
        html: "<ul><li>「LambdaからRDSへの接続数が枯渇」→ <b class=\"key\">RDS Proxy</b></li><li>「VPC Lambdaから外部APIを呼べない」→ <b class=\"key\">NAT Gateway</b>（プライベートサブネット）</li><li>「Lambdaに簡単なHTTPSエンドポイント」→ <b class=\"key\">関数URL</b>（高機能が必要なら API Gateway）</li><li>「15分を超える処理」→ Lambdaは不可 → <b class=\"key\">ECS on Fargate / Batch / Step Functions</b></li><li>「コンテナ、サーバー管理なし」→ <b class=\"key\">ECS on Fargate</b></li><li>「Kubernetes」→ <b class=\"key\">EKS</b>（サーバー管理なしなら EKS on Fargate）</li></ul>",
        oxIds: [],
        src: [2436,2441]
      },
      {
        id: "c04-l04-p05",
        title: "試験での出方 ⑤",
        html: "<ul><li>「コンテナ内のアプリにS3権限」→ <b class=\"key\">ECSタスクロール</b></li><li>「コードを置くだけでWebアプリ、インフラ知識不要」→ <b class=\"key\">Elastic Beanstalk / App Runner</b></li><li>「ダウンタイムなし・ロールバック容易なデプロイ（Beanstalk）」→ <b class=\"key\">Immutable / Blue/Green</b></li><li>「データを国外・社外に出せない、AWSと同じAPI」→ <b class=\"key\">Outposts</b></li><li>「5G端末に超低レイテンシ」→ <b class=\"key\">Wavelength</b>／「特定都市のユーザーに低レイテンシ」→ <b class=\"key\">Local Zones</b></li></ul>",
        oxIds: [],
        src: [2442,2446]
      },
      {
        id: "c04-l04-p06",
        title: "試験での出方 ⑥",
        html: "<ul><li>「VMware環境をそのまま移行」→ <b class=\"key\">VMware Cloud on AWS</b></li><li>「過剰プロビジョニングの見直し」→ <b class=\"key\">Compute Optimizer</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>スポットを<b class=\"key\">本番DBや中断不可処理</b>に使う選択肢は×</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">専有インスタンス</b>ではコア単位BYOLの要件を満たせない → 専有ホスト</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">クラスタープレイスメントグループ</b>を「高可用性」目的で選ぶのは×（単一AZ）</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">キャパシティ予約</b>だけでは割引されない（RI/SPと併用で割引）</span></li></ul>",
        oxIds: [],
        src: [2447,2452]
      },
      {
        id: "c04-l04-p07",
        title: "試験での出方 ⑦",
        html: "<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">シンプルスケーリング</b>はクールダウン中に追加スケールしない → 急増には不向き</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>ECSで<b class=\"key\">タスク実行ロール</b>にアプリのS3権限を付ける選択肢は×（それはタスクロール）</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Lambdaの<b class=\"key\">予約された同時実行</b>はコールドスタート対策ではない</span></li><li>解き方のコツ：<b class=\"key\">「中断可否」「期間」「管理不要か」「レイテンシ要件の場所」</b>の4点で絞る</li></ul>",
        oxIds: [],
        src: [2453,2456]
      },
      {
        id: "c04-l04-p08",
        title: "暗記すべき数字・制限 ①",
        html: "<ul><li>スポット：最大<b class=\"key\">90%</b>割引、中断通知は<b class=\"key\">2分前</b></li><li>Standard RI：最大<b class=\"key\">72%</b>、Convertible RI：最大<b class=\"key\">66%</b>、期間は<b class=\"key\">1年 / 3年</b></li></ul>",
        oxIds: [],
        src: [2459,2460]
      },
      {
        id: "c04-l04-p09",
        title: "暗記すべき数字・制限 ②",
        html: "<ul><li>Compute SP：最大<b class=\"key\">66%</b>、EC2 Instance SP：最大<b class=\"key\">72%</b></li><li>分散プレイスメントグループ：<b class=\"key\">1AZあたり7インスタンス</b>（グループごと）</li><li>パーティションプレイスメントグループ：<b class=\"key\">1AZあたり7パーティション</b></li></ul>",
        oxIds: ["c04-ox-07"],
        src: [2461,2463]
      },
      {
        id: "c04-l04-p10",
        title: "暗記すべき数字・制限 ③",
        html: "<ul><li>休止：RAM <b class=\"key\">150GB未満</b>、最大<b class=\"key\">60日</b>、ルートEBSは<b class=\"key\">暗号化必須</b></li><li>ユーザーデータ：<b class=\"key\">16KB</b>、デフォルトは<b class=\"key\">初回起動のみ</b></li><li>メタデータ：<b class=\"key\">169.254.169.254</b>（IMDSv2はトークン必須）</li></ul>",
        oxIds: [],
        src: [2464,2466]
      },
      {
        id: "c04-l04-p11",
        title: "暗記すべき数字・制限 ④",
        html: "<ul><li>Elastic IP：<b class=\"key\">1リージョン5個</b>（デフォルト）</li><li>Auto Scaling デフォルトクールダウン：<b class=\"key\">300秒</b></li><li>ライフサイクルフックのデフォルトタイムアウト：<b class=\"key\">1時間</b></li><li>Lambda 最大実行時間：<b class=\"key\">15分（900秒）</b></li><li>Lambda メモリ：<b class=\"key\">128MB〜10,240MB</b>（CPUはメモリに比例、最大<b class=\"key\">6vCPU</b>）</li></ul>",
        oxIds: ["c04-ox-16"],
        src: [2467,2471]
      },
      {
        id: "c04-l04-p12",
        title: "暗記すべき数字・制限 ⑤",
        html: "<ul><li>Lambda /tmp：<b class=\"key\">512MB〜10,240MB</b></li><li>Lambda 同時実行数：<b class=\"key\">リージョンあたり1,000</b>（デフォルト、引き上げ可）</li><li>Lambda デプロイ：zip <b class=\"key\">50MB</b>（直接）／解凍後 <b class=\"key\">250MB</b>／コンテナイメージ <b class=\"key\">10GB</b></li><li>Lambda レイヤー：<b class=\"key\">最大5個</b></li></ul>",
        oxIds: [],
        src: [2472,2475]
      },
      {
        id: "c04-l04-p13",
        title: "暗記すべき数字・制限 ⑥",
        html: "<ul><li>Lambda 環境変数：合計 <b class=\"key\">4KB</b></li><li>Lambda 同期呼び出しのペイロード：<b class=\"key\">6MB</b></li><li>Lambda 非同期呼び出しのリトライ：<b class=\"key\">2回</b></li><li>Fargate エフェメラルストレージ：デフォルト<b class=\"key\">20GB</b>、最大<b class=\"key\">200GB</b></li></ul>",
        oxIds: [],
        src: [2476,2479]
      },
      {
        id: "c04-l04-p14",
        title: "暗記すべき数字・制限 ⑦",
        html: "<ul><li>Compute Optimizer 分析期間：デフォルト<b class=\"key\">14日</b>、最大<b class=\"key\">93日</b></li><li>語呂合わせ：「<b class=\"key\">スポットは2分で9割引</b>」（2分前通知・最大90%）</li><li>語呂合わせ：「<b class=\"key\">ラムダは15分、千同時、10GB</b>」（実行時間・同時実行・メモリ/イメージ）</li><li>語呂合わせ：「<b class=\"key\">分散は7（ナナ）台</b>、パーティションは7（ナナ）区画」</li></ul>",
        oxIds: [],
        src: [2480,2483]
      },
    ] },
  ],
  ox: [
    {
      id: "c04-ox-01",
      text: "スポットインスタンスは、AWSがキャパシティを必要とする場合、2分前の通知の後に中断されることがある。",
      answer: true,
      explain: "中断通知は<b class=\"key\">2分前</b>。EC2 リバランス推奨がそれより早く届くこともある",
      src: 2486
    },
    {
      id: "c04-ox-02",
      text: "Convertible RIは、RI Marketplaceで売却できる。",
      answer: false,
      explain: "Marketplaceで売却できるのは<b class=\"key\">Standard RI</b>。Convertible RIは交換は可能だが売却不可",
      src: 2489
    },
    {
      id: "c04-ox-03",
      text: "Compute Savings Plansは、EC2だけでなくAWS FargateとAWS Lambdaの利用にも適用される。",
      answer: true,
      explain: "Compute SPは<b class=\"key\">EC2・Fargate・Lambda</b>に適用。EC2 Instance SPはEC2のみ",
      src: 2492
    },
    {
      id: "c04-ox-04",
      text: "オンデマンドキャパシティ予約は、1年または3年の契約が必要である。",
      answer: false,
      explain: "ODCRは<b class=\"key\">期間の縛りなし</b>でいつでも作成・キャンセル可能。ただし未使用でも課金される",
      src: 2495
    },
    {
      id: "c04-ox-05",
      text: "ソケット単位でライセンスされるソフトウェアを持ち込む（BYOL）場合、Dedicated Instancesが最適である。",
      answer: false,
      explain: "ソケット・コアの可視性が得られるのは<b class=\"key\">Dedicated Hosts</b>。専有インスタンスはホストの可視性なし",
      src: 2498
    },
    {
      id: "c04-ox-06",
      text: "クラスタープレイスメントグループは、複数のAZにまたがってインスタンスを配置できる。",
      answer: false,
      explain: "クラスターは<b class=\"key\">単一AZ内</b>。複数AZにまたがれるのは分散・パーティション",
      src: 2501
    },
    {
      id: "c04-ox-07",
      text: "分散プレイスメントグループでは、1つのAZあたり実行中のインスタンスを最大7台まで配置できる。",
      answer: true,
      explain: "グループごと・<b class=\"key\">AZごとに7台</b>。各インスタンスは別ラックに置かれる",
      src: 2504
    },
    {
      id: "c04-ox-08",
      text: "休止（Hibernate）を使うには、ルートボリュームが暗号化されたEBSボリュームである必要がある。",
      answer: true,
      explain: "RAMの内容をルートEBSに書き出すため、<b class=\"key\">EBSかつ暗号化</b>が必須",
      src: 2507
    },
    {
      id: "c04-ox-09",
      text: "ユーザーデータのスクリプトは、デフォルトでインスタンスを再起動するたびに実行される。",
      answer: false,
      explain: "デフォルトは<b class=\"key\">初回起動時のみ</b>実行される",
      src: 2510
    },
    {
      id: "c04-ox-10",
      text: "IMDSv2では、メタデータ取得の前にセッショントークンを取得する必要がある。",
      answer: true,
      explain: "トークン必須にすることで<b class=\"key\">SSRF</b>などによる認証情報の窃取を防ぐ",
      src: 2513
    },
    {
      id: "c04-ox-11",
      text: "EFAは、OSバイパス機能によりMPIを使うHPCアプリケーションのノード間通信を高速化する。",
      answer: true,
      explain: "EFA＝ENA＋<b class=\"key\">OSバイパス</b>。HPC・分散MLの密結合通信向け",
      src: 2516
    },
    {
      id: "c04-ox-12",
      text: "AMIはグローバルなリソースのため、どのリージョンでもそのまま起動に使える。",
      answer: false,
      explain: "AMIは<b class=\"key\">リージョン単位</b>。他リージョンで使うには<b class=\"key\">AMIをコピー</b>する",
      src: 2519
    },
    {
      id: "c04-ox-13",
      text: "Auto Scalingのデフォルトのヘルスチェックは、ELBのヘルスチェック結果を含む。",
      answer: false,
      explain: "デフォルトは<b class=\"key\">EC2ステータスチェックのみ</b>。ELBヘルスチェックは明示的に有効化が必要",
      src: 2522
    },
    {
      id: "c04-ox-14",
      text: "ライフサイクルフックを使うと、終了前のインスタンスからログを退避する時間を確保できる。",
      answer: true,
      explain: "<b class=\"key\">Terminating:Wait</b> 状態で処理を挟める（デフォルトのタイムアウト1時間）",
      src: 2525
    },
    {
      id: "c04-ox-15",
      text: "予測スケーリングは、過去の負荷データを機械学習で分析し、需要の増加前に容量を追加する。",
      answer: true,
      explain: "日次・週次など<b class=\"key\">周期的なパターン</b>に有効。スケジュールを手で書く必要がない",
      src: 2528
    },
    {
      id: "c04-ox-16",
      text: "Lambda関数の最大実行時間は30分である。",
      answer: false,
      explain: "最大<b class=\"key\">15分（900秒）</b>。超える処理はFargate・Batch・Step Functionsで分割など",
      src: 2531
    },
    {
      id: "c04-ox-17",
      text: "Lambdaの予約された同時実行を設定すると、コールドスタートが発生しなくなる。",
      answer: false,
      explain: "予約は<b class=\"key\">枠の確保と上限設定</b>のみ。コールドスタート解消は<b class=\"key\">プロビジョンド同時実行</b>",
      src: 2534
    },
    {
      id: "c04-ox-18",
      text: "VPCに接続したLambda関数をパブリックサブネットに配置すれば、インターネットゲートウェイ経由で外部にアクセスできる。",
      answer: false,
      explain: "VPC LambdaのENIには<b class=\"key\">パブリックIPが付かない</b>。プライベートサブネット＋<b class=\"key\">NAT Gateway</b>が必要",
      src: 2537
    },
    {
      id: "c04-ox-19",
      text: "Lambdaのメモリ設定を増やすと、割り当てられるCPU性能も比例して増える。",
      answer: true,
      explain: "CPUはメモリに比例。CPUバウンドな処理はメモリ増で<b class=\"key\">実行時間短縮・総コスト減</b>もあり得る",
      src: 2540
    },
    {
      id: "c04-ox-20",
      text: "ECSで、コンテナ内のアプリケーションがDynamoDBにアクセスする権限は、タスク実行ロールに付与する。",
      answer: false,
      explain: "アプリの権限は<b class=\"key\">タスクロール</b>。タスク実行ロールはECRからのpull・ログ出力用",
      src: 2543
    },
    {
      id: "c04-ox-21",
      text: "Fargateを使うと、コンテナを実行するEC2インスタンスのパッチ適用やスケーリングを自分で行う必要がない。",
      answer: true,
      explain: "Fargateは<b class=\"key\">サーバーレス</b>のコンテナ実行環境。タスク単位でvCPU・メモリ課金",
      src: 2546
    },
    {
      id: "c04-ox-22",
      text: "Elastic BeanstalkのImmutableデプロイは、既存インスタンスを順番に更新するため追加のインスタンスを起動しない。",
      answer: false,
      explain: "Immutableは<b class=\"key\">新しいASGに新インスタンスを起動</b>して切り替える。順次更新はRolling",
      src: 2549
    },
    {
      id: "c04-ox-23",
      text: "AWS Wavelengthは、通信事業者の5Gネットワーク内にAWSのコンピュートを配置するサービスである。",
      answer: true,
      explain: "5Gモバイル端末向けの超低レイテンシ。都市近接はLocal Zones、自社DC内はOutposts",
      src: 2552
    },
    {
      id: "c04-ox-24",
      text: "AWS Compute OptimizerでEC2のメモリ使用率に基づく推奨を得るには、CloudWatchエージェントの導入が必要である。",
      answer: true,
      explain: "メモリはハイパーバイザーから見えないため、<b class=\"key\">CloudWatchエージェント</b>でメトリクスを送る",
      src: 2555
    },
    {
      id: "c04-ox-25",
      text: "AWS Batchのジョブは、Lambdaと同様に最大15分までしか実行できない。",
      answer: false,
      explain: "Batchは<b class=\"key\">EC2 / Fargate</b>上で動くため15分制限はない。長時間・大規模バッチ向け",
      src: 2558
    },
    {
      id: "c04-ox-26",
      text: "デフォルトのAWS管理キー（aws/ebs）で暗号化されたAMIは、そのまま他のAWSアカウントと共有できる。",
      answer: false,
      explain: "AWS管理キーは共有不可。<b class=\"key\">カスタマー管理KMSキー</b>で暗号化し、キーも共有する",
      src: 2561
    }
  ],
  mc: [
    {
      id: "c04-mc-01",
      stem: "ある企業は毎晩、数千件の画像変換ジョブを実行している。各ジョブは数分〜2時間かかり、失敗しても再実行すればよい。ジョブはコンテナ化済みである。最もコスト効率が良く、運用負荷も少ない構成はどれか。",
      choices: [
        "オンデマンドインスタンスのASGを構築し、cronでジョブを投入する",
        "AWS Batch を使い、スポットインスタンスのコンピューティング環境でジョブを実行する",
        "AWS Lambda でジョブを実行し、同時実行数を引き上げる",
        "Dedicated Hosts を購入し、ジョブを順次実行する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        { ok: false, text: "動作はするが、オンデマンドはスポットより高く、ジョブ管理の仕組みも自作が必要" },
        { ok: true, text: "<b class=\"key\">Batch</b>がキュー管理・起動・終了を自動化。再実行可能なので<b class=\"key\">スポット</b>で最大90%削減" },
        { ok: false, text: "最大2時間のジョブはLambdaの<b class=\"key\">15分制限</b>を超える" },
        { ok: false, text: "専有ホストはライセンス・コンプライアンス用途で高コスト" }
      ],
      tip: "「失敗しても再実行可」＝スポット、「大量のバッチジョブ」＝Batch。時間でLambdaを除外",
      src: 2566
    },
    {
      id: "c04-mc-02",
      stem: "ある企業はWindows Server と SQL Server の既存ライセンス（物理コア単位）をAWSに持ち込みたい。ライセンス条項上、ソフトウェアが動く物理サーバーのソケット数とコア数を把握する必要がある。どの購入オプションを選ぶべきか。",
      choices: [
        "Dedicated Instances",
        "Dedicated Hosts",
        "ゾーナルリザーブドインスタンス",
        "オンデマンドキャパシティ予約"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        { ok: false, text: "ハードウェアは専有されるが、<b class=\"key\">物理ホストのソケット・コアは見えない</b>" },
        { ok: true, text: "専有ホストは物理サーバーの<b class=\"key\">ソケット・コアの可視性</b>があり、BYOLに対応" },
        { ok: false, text: "割引とキャパシティ予約であり、物理サーバーの専有ではない" },
        { ok: false, text: "容量確保の機能で、ライセンス要件とは無関係" }
      ],
      tip: "「ソケット」「コア」「BYOL」→ 専有<b class=\"key\">ホスト</b>。専有<b class=\"key\">インスタンス</b>との取り違えが定番",
      src: 2578
    },
    {
      id: "c04-mc-03",
      stem: "ある研究機関は、MPIを使う数値流体シミュレーションをEC2上で実行する。ノード間通信のレイテンシを最小化し、スループットを最大化したい。最も適切な構成はどれか。",
      choices: [
        "分散プレイスメントグループに配置し、ENAを有効化する",
        "複数AZにまたがるパーティションプレイスメントグループに配置する",
        "単一AZのクラスタープレイスメントグループに配置し、EFAを利用する",
        "複数リージョンにインスタンスを分散し、Global Accelerator で接続する"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "分散は別ラックに配置するため、ノード間のレイテンシは不利" },
        { ok: false, text: "パーティションは大規模分散システムの障害分離向け。AZ間通信はレイテンシ増" },
        { ok: true, text: "<b class=\"key\">クラスター（物理的に近接）＋EFA（OSバイパス）</b>がHPCの定石" },
        { ok: false, text: "リージョン間通信は最もレイテンシが大きい" }
      ],
      tip: "「MPI」「HPC」「密結合」の3語が出たら即 <b class=\"key\">クラスター＋EFA</b>",
      src: 2590
    },
    {
      id: "c04-mc-04",
      stem: "あるECサイトはEC2 Auto Scalingを使っている。アプリの起動処理（大量のキャッシュ読み込み）に10分以上かかり、急なアクセス増加に対してスケールアウトが間に合わない。コストを抑えつつ、スケールアウトにかかる時間を最も短縮できる方法はどれか。",
      choices: [
        "ASGの最小容量を最大容量と同じ値に設定する",
        "停止状態の事前初期化済みインスタンスを保持するウォームプールを設定する",
        "シンプルスケーリングポリシーに変更し、クールダウンを短くする",
        "インスタンスタイプを1つ大きいサイズに変更する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 2,
      choiceExplain: [
        { ok: false, text: "常に最大台数を動かすため<b class=\"key\">コストが最大</b>になる" },
        { ok: true, text: "<b class=\"key\">ウォームプール</b>は初期化済みインスタンスを停止状態で待機。停止中はEBS料金程度で済む" },
        { ok: false, text: "スケール判定が早まっても、インスタンスの初期化時間は短くならない" },
        { ok: false, text: "起動時間の根本原因（初期化処理）は解決しない" }
      ],
      tip: "「起動・初期化に時間がかかる」＋「コスト抑制」→ <b class=\"key\">ウォームプール</b>（停止状態）",
      src: 2602
    },
    {
      id: "c04-mc-05",
      stem: "ある会社のWebアプリはALBの背後でEC2 Auto Scalingグループにより運用されている。アプリのプロセスがハングしてHTTP 500を返し続けるインスタンスがあるが、ASGによって置き換えられない。最も運用負荷の少ない解決策はどれか。",
      choices: [
        "ASGのヘルスチェックタイプにELBヘルスチェックを追加する",
        "CloudWatchアラームでEC2の自動復旧（Recover）アクションを設定する",
        "5分ごとにLambdaでHTTPチェックを行い、異常時にインスタンスを終了させる",
        "ASGの最小容量を増やす"
      ],
      answer: ["A"],
      selectCount: 1,
      domain: 2,
      choiceExplain: [
        { ok: true, text: "ELBヘルスチェックを使えば、<b class=\"key\">アプリレベルの異常</b>でもASGが不健全と判定し置き換える" },
        { ok: false, text: "自動復旧はシステムステータスチェック（ハードウェア）失敗時の機能" },
        { ok: false, text: "動作はするが自作の仕組みで運用負荷が大きい" },
        { ok: false, text: "異常インスタンスは残ったまま" }
      ],
      tip: "デフォルトは<b class=\"key\">EC2ステータスチェックのみ</b>。OSは正常でもアプリ異常は検知できない",
      src: 2614
    },
    {
      id: "c04-mc-06",
      stem: "ある企業はJavaで書かれたLambda関数をAPI Gateway経由で公開している。トラフィックは平日の9時〜18時に安定して多く、この時間帯のコールドスタートによるレイテンシが問題になっている。レイテンシ要件を確実に満たす方法として最も適切なものはどれか。",
      choices: [
        "関数に予約された同時実行を設定する",
        "関数のタイムアウトを15分に延長する",
        "プロビジョンド同時実行を設定し、Application Auto Scalingのスケジュールで業務時間帯に増やす",
        "関数をVPCから切り離す"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "予約は枠の確保と上限であり、<b class=\"key\">実行環境の事前初期化はしない</b>" },
        { ok: false, text: "タイムアウトはコールドスタートと無関係" },
        { ok: true, text: "<b class=\"key\">プロビジョンド同時実行</b>で初期化済み環境を待機。スケジュールで時間帯のみ増やしコスト最適化" },
        { ok: false, text: "現在のVPC LambdaはHyperplane ENIのためVPC接続が主因ではない" }
      ],
      tip: "「確実にコールドスタート解消」→ プロビジョンド。「低コストで短縮」ならSnapStartも候補",
      src: 2626
    },
    {
      id: "c04-mc-07",
      stem: "ある企業はプライベートサブネットのRDS for MySQLにアクセスするLambda関数を運用している。キャンペーン時に同時実行数が急増し、「Too many connections」エラーが発生した。アプリの変更を最小限にして解決する方法はどれか。",
      choices: [
        "RDSのインスタンスクラスを最大サイズに変更する",
        "Amazon RDS Proxy を作成し、Lambdaから Proxy のエンドポイントに接続する",
        "Lambdaのメモリを10,240MBに増やす",
        "Lambdaをイベントソースマッピング経由の非同期呼び出しに変更する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "最大接続数は増えるが高コストで、同時実行がさらに増えれば再発する" },
        { ok: true, text: "<b class=\"key\">RDS Proxy</b>がコネクションをプール・共有し、DB接続の枯渇を防ぐ" },
        { ok: false, text: "メモリはDB接続数に影響しない" },
        { ok: false, text: "呼び出し方式を変えても同時実行の接続数問題は根本解決しない" }
      ],
      tip: "「Lambda＋RDS＋接続数」は<b class=\"key\">RDS Proxy</b>の決まり文句",
      src: 2638
    },
    {
      id: "c04-mc-08",
      stem: "ある開発チームはコンテナ化したマイクロサービスをAmazon ECSで運用したい。EC2インスタンスのパッチ適用や容量管理はしたくない。また、各サービスにはそのサービスが使うS3バケットのみへのアクセス権限を与えたい。最も適切な構成はどれか。",
      choices: [
        "ECS on EC2 を使い、EC2インスタンスプロファイルに全S3バケットの権限を付与する",
        "ECS on Fargate を使い、サービスごとのタスクロールに対象バケットのみの権限を付与する",
        "ECS on Fargate を使い、タスク実行ロールに全S3バケットの権限を付与する",
        "ECS on EC2 を使い、コンテナイメージにアクセスキーを埋め込む"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "EC2管理が必要で、全コンテナが同じ広い権限を持ち<b class=\"key\">最小権限に反する</b>" },
        { ok: true, text: "<b class=\"key\">Fargate</b>でサーバー管理不要、<b class=\"key\">タスクロール</b>でサービスごとの最小権限" },
        { ok: false, text: "タスク実行ロールはイメージpull・ログ用。アプリの権限には使わない" },
        { ok: false, text: "アクセスキーの埋め込みはセキュリティ上のアンチパターン" }
      ],
      tip: "「サーバー管理したくない」→Fargate、「アプリのAWS権限」→タスクロール",
      src: 2650
    },
    {
      id: "c04-mc-09",
      stem: "ある企業はオンプレミスのKubernetesクラスターで多数のワークロードを運用しており、既存のマニフェストやHelmチャートを変更せずにAWSへ移行したい。コントロールプレーンの運用負荷も減らしたい。最も適切なサービスはどれか。",
      choices: [
        "Amazon ECS",
        "AWS Elastic Beanstalk",
        "Amazon EKS",
        "AWS App Runner"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "ECSはAWS独自のオーケストレーター。Kubernetesマニフェストはそのまま使えない" },
        { ok: false, text: "Beanstalk はPaaSで、Kubernetesのリソースを扱えない" },
        { ok: true, text: "<b class=\"key\">EKS</b>はマネージドKubernetes。標準APIのため既存マニフェスト・Helmを流用できる" },
        { ok: false, text: "App Runnerは単一Webサービス向けで、Kubernetes互換ではない" }
      ],
      tip: "「Kubernetes」「Helm」「マニフェスト」→ EKS一択",
      src: 2662
    },
    {
      id: "c04-mc-10",
      stem: "あるスタートアップは、Pythonで書いたWebアプリをEC2・ロードバランサー・Auto Scalingの知識なしで素早くデプロイしたい。本番更新時には、問題があれば即座に元に戻せるよう、既存インスタンスに影響を与えずに新バージョンを展開したい。最も適切なものはどれか。",
      choices: [
        "Elastic Beanstalk で All at once デプロイポリシーを使う",
        "Elastic Beanstalk で Immutable デプロイポリシーを使う",
        "EC2 と CloudFormation でインフラを自作し、手動で入れ替える",
        "Elastic Beanstalk で Rolling デプロイポリシーを使う"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 2,
      choiceExplain: [
        { ok: false, text: "全インスタンスを一斉更新するため<b class=\"key\">ダウンタイム</b>があり、失敗時の影響も大きい" },
        { ok: true, text: "<b class=\"key\">Immutable</b>は新ASGで新インスタンスを起動し、既存に影響を与えずに切替・ロールバック" },
        { ok: false, text: "インフラ知識なしという要件に反し、運用負荷も大きい" },
        { ok: false, text: "既存インスタンスを順次更新するため、失敗時は既存環境に影響する" }
      ],
      tip: "「既存インスタンスに影響しない」「すぐ戻せる」→ Immutable（または Blue/Green）",
      src: 2674
    },
    {
      id: "c04-mc-11",
      stem: "ある病院グループは、規制により患者データを自社施設外に保存できない。一方で、院内アプリはAWSと同じAPI・ツールで開発・運用したい。院内の医療機器システムとの通信には低レイテンシが必要である。最も適切なソリューションはどれか。",
      choices: [
        "AWS Local Zones",
        "AWS Wavelength",
        "AWS Outposts",
        "VMware Cloud on AWS"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "Local ZonesはAWS管理の都市拠点で、<b class=\"key\">自社施設内</b>ではない" },
        { ok: false, text: "Wavelengthは通信事業者の5G網内に置かれる" },
        { ok: true, text: "<b class=\"key\">Outposts</b>はAWSのハードを自社DCに設置し、同じAPIでデータを施設内に留められる" },
        { ok: false, text: "VMware Cloud on AWS はAWSのリージョン内で動くため施設外になる" }
      ],
      tip: "「データを施設外に出せない」＋「AWSと同じAPI」→ Outposts",
      src: 2686
    },
    {
      id: "c04-mc-12",
      stem: "あるゲーム会社は、ロサンゼルス近郊のユーザー向けにリアルタイム対戦サーバーを提供している。最寄りのリージョンでは遅延が大きく、1桁ミリ秒のレイテンシが求められる。ユーザーは主に自宅の固定回線から接続する。最も適切なものはどれか。",
      choices: [
        "AWS Wavelength",
        "AWS Local Zones",
        "Amazon CloudFront",
        "AWS Outposts を自社オフィスに設置する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 3,
      choiceExplain: [
        { ok: false, text: "Wavelengthは<b class=\"key\">5Gモバイル</b>端末向け。固定回線のユーザーには適さない" },
        { ok: true, text: "<b class=\"key\">Local Zones</b>は大都市圏でEC2等を動かし、エンドユーザーに1桁msのレイテンシを提供" },
        { ok: false, text: "CloudFrontはコンテンツ配信・キャッシュ。対戦サーバーのコンピュートは動かせない" },
        { ok: false, text: "自社オフィスに置いてもエンドユーザーとの距離は縮まらず、運用負荷も高い" }
      ],
      tip: "「都市のユーザー＋低レイテンシ」→Local Zones、「5G」→Wavelength",
      src: 2698
    },
    {
      id: "c04-mc-13",
      stem: "ある企業は、本番のWebシステムで多数のEC2インスタンスを1年以上安定稼働させる予定である。今後1年の間にインスタンスファミリーの変更や、一部ワークロードのFargate・Lambdaへの移行を計画している。柔軟性を保ちつつコストを削減する最も適切な方法はどれか。",
      choices: [
        "Standard RI を3年・全額前払いで購入する",
        "EC2 Instance Savings Plans を購入する",
        "Compute Savings Plans を購入する",
        "すべてスポットインスタンスに切り替える"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        { ok: false, text: "ファミリー変更ができず、Fargate・Lambdaには適用されない" },
        { ok: false, text: "割引率は高いが<b class=\"key\">特定ファミリー・リージョン</b>に限定され、Fargate・Lambdaにも適用されない" },
        { ok: true, text: "<b class=\"key\">Compute SP</b>はファミリー・リージョン変更自由で、<b class=\"key\">EC2・Fargate・Lambda</b>に適用" },
        { ok: false, text: "本番Webで中断が許されない場合、スポットのみは不適切" }
      ],
      tip: "「Fargate」「Lambda」「変更予定」が出たらCompute SP",
      src: 2710
    },
    {
      id: "c04-mc-14",
      stem: "ある企業は、毎年決まった3日間の大規模セールで、特定AZにc7iインスタンス200台を確実に起動できることを保証したい。その他の期間には必要ない。最も適切な方法はどれか。",
      choices: [
        "1年間のゾーナル Standard RI を200台分購入する",
        "セール期間に合わせてオンデマンドキャパシティ予約を作成する",
        "スポットフリートで200台を要求する",
        "分散プレイスメントグループを作成する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 2,
      choiceExplain: [
        { ok: false, text: "容量は確保できるが、<b class=\"key\">1年分の支払い</b>が必要で3日間だけの用途には過大" },
        { ok: true, text: "<b class=\"key\">ODCR</b>は期間の縛りなく、必要な日だけ特定AZの容量を確保できる" },
        { ok: false, text: "スポットは容量が保証されず、中断もあり得る" },
        { ok: false, text: "プレイスメントグループは配置戦略で、容量を予約する機能ではない（分散は1AZ7台制限）" }
      ],
      tip: "「確実に容量確保」＋「短期・期間限定」→ オンデマンドキャパシティ予約",
      src: 2722
    },
    {
      id: "c04-mc-15",
      stem: "ある企業はVPC内のプライベートサブネットにLambda関数を配置し、RDSにアクセスさせている。新たにこの関数から、インターネット上の外部決済APIと、Amazon S3の両方にアクセスする必要が生じた。必要な対応を2つ選べ。",
      choices: [
        "Lambda関数をパブリックサブネットに移動し、インターネットゲートウェイを利用する",
        "パブリックサブネットにNAT Gatewayを作成し、プライベートサブネットのルートテーブルに追加する",
        "Lambda関数にElastic IPを割り当てる",
        "S3用のゲートウェイ型VPCエンドポイントを作成し、プライベートサブネットのルートテーブルに関連付ける",
        "Lambda関数の予約された同時実行を設定する"
      ],
      answer: ["B","D"],
      selectCount: 2,
      domain: 1,
      choiceExplain: [
        { ok: false, text: "VPC LambdaのENIには<b class=\"key\">パブリックIPが付かない</b>ため、パブリックサブネットでも外に出られない" },
        { ok: true, text: "プライベートサブネットからインターネットへは<b class=\"key\">NAT Gateway</b>経由" },
        { ok: false, text: "LambdaにはElastic IPを直接割り当てられない" },
        { ok: true, text: "S3へは<b class=\"key\">ゲートウェイ型VPCエンドポイント</b>で、NATを通さず安価にアクセスできる" },
        { ok: false, text: "同時実行はネットワーク到達性と無関係" }
      ],
      tip: "「VPC Lambda→インターネット」はNAT、「→S3/DynamoDB」はゲートウェイエンドポイント",
      src: 2734
    },
    {
      id: "c04-mc-16",
      stem: "ある企業のアプリはEC2 Auto Scalingグループで動いている。毎週月曜日の朝9時に負荷が急増し、毎回スケールアウトが遅れて応答が悪化する。それ以外の時間帯は負荷が緩やかに変動する。運用負荷を抑えつつ問題を解決する方法を2つ選べ。",
      choices: [
        "予測スケーリングポリシーを設定する",
        "月曜8時45分に希望容量を増やすスケジュールアクションを設定する",
        "ASGの最大容量を減らす",
        "シンプルスケーリングポリシーに変更し、クールダウンを600秒に延ばす",
        "ヘルスチェック猶予期間を0秒にする"
      ],
      answer: ["A","B"],
      selectCount: 2,
      domain: 2,
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">予測スケーリング</b>は週次の周期パターンを学習し、負荷増加前に容量を追加する" },
        { ok: true, text: "時刻が決まっているので<b class=\"key\">スケジュールスケーリング</b>で事前に増やせる" },
        { ok: false, text: "最大容量を減らすと急増時にさらに不足する" },
        { ok: false, text: "クールダウンを延ばすと次のスケールが遅れ、悪化する" },
        { ok: false, text: "起動直後の誤検知で正常なインスタンスが置き換えられるおそれがある" }
      ],
      tip: "「決まった時間に急増」→ 事後対応のポリシーではなく<b class=\"key\">事前に増やす</b>手段を選ぶ",
      src: 2748
    },
    {
      id: "c04-mc-17",
      stem: "ある企業はAmazon ECSでコンテナを運用している。セキュリティチームから、コンテナイメージの脆弱性を継続的に検出すること、および古いイメージを自動的に削除してストレージコストを抑えることを求められた。運用負荷が最も少ない対応を2つ選べ。",
      choices: [
        "Amazon ECR の拡張スキャン（Amazon Inspector）を有効化する",
        "EC2上に自前のスキャナーを構築し、毎晩cronでイメージをスキャンする",
        "Amazon ECR のライフサイクルポリシーで、一定数・一定期間より古いイメージを削除する",
        "Lambda関数で毎日イメージ一覧を取得し、古いものを削除する",
        "ECRのタグのイミュータビリティを有効化する"
      ],
      answer: ["A","C"],
      selectCount: 2,
      domain: 1,
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">ECR拡張スキャン</b>はInspector連携で継続的に脆弱性を検出するマネージド機能" },
        { ok: false, text: "自前構築は運用負荷が大きい" },
        { ok: true, text: "<b class=\"key\">ライフサイクルポリシー</b>で古いイメージを自動削除できる" },
        { ok: false, text: "動作はするが、組み込み機能があるのにコード保守が必要になる" },
        { ok: false, text: "タグ上書きの防止機能で、脆弱性検出・削除とは無関係" }
      ],
      tip: "「運用負荷最小」→ 自作（EC2・Lambda）より<b class=\"key\">サービス組み込み機能</b>を優先",
      src: 2762
    }
  ]
});
window.DATA.chapters.push({
  no: 5,
  title: "ストレージとデータ移行",
  domainNote: "ドメイン1〜4横断",
  src: [2777,3460],
  lessons: [
    { id: "c05-l01", title: "S3の基本とストレージクラス・データ保護・レプリケーション", pages: [
      {
        id: "c05-l01-p01",
        title: "ストレージの全体像（ブロック・ファイル・オブジェクト） ①",
        html: "<ul><li><b class=\"key\">ブロックストレージ</b>：OSからディスクとして見える。1台のEC2に接続するのが基本<ul><li><b class=\"key\">Amazon EBS</b>（永続・AZ単位）、<b class=\"key\">インスタンスストア</b>（一時・ホスト直結）</li></ul></li></ul>",
        oxIds: [],
        src: [2782,2783]
      },
      {
        id: "c05-l01-p02",
        title: "ストレージの全体像（ブロック・ファイル・オブジェクト） ②",
        html: "<ul><li><b class=\"key\">ファイルストレージ</b>：NFS/SMBで複数サーバーから同時にマウントして共有<ul><li><b class=\"key\">Amazon EFS</b>（Linux/NFS）、<b class=\"key\">Amazon FSx</b>（Windows/Lustre/ONTAP/OpenZFS）</li></ul></li><li><b class=\"key\">オブジェクトストレージ</b>：HTTP(S) APIでオブジェクト単位に読み書き。容量無制限<ul><li><b class=\"key\">Amazon S3</b>（リージョンサービス。データは複数AZに保存 ※One Zone系を除く）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>選び方の第一歩<ul><li>「共有ファイルシステム」→ EFS/FSx、「1台のEC2のディスク」→ EBS</li><li>「静的ファイル・データレイク・バックアップ・無制限」→ S3</li><li>「一時データ・最高IOPS・消えてよい」→ インスタンスストア</li></ul></li></ul>",
        oxIds: [],
        src: [2784,2791]
      },
      {
        id: "c05-l01-p03",
        title: "Amazon S3 の基本 ①",
        html: "<ul><li><b class=\"key\">バケット</b>（名前は全世界で一意）に<b class=\"key\">オブジェクト</b>（キー＋データ＋メタデータ）を格納</li><li>1オブジェクト最大<b class=\"key\">5TB</b>。1回のPUTは最大<b class=\"key\">5GB</b></li><li>耐久性 <b class=\"key\">99.999999999%（イレブンナイン）</b>。Standardは<b class=\"key\">3つ以上のAZ</b>に保存</li></ul>",
        oxIds: [],
        src: [2794,2796]
      },
      {
        id: "c05-l01-p04",
        title: "Amazon S3 の基本 ②",
        html: "<ul><li><b class=\"key\">整合性モデル</b>：2020年12月から<b class=\"key\">強い書き込み後の読み取り整合性</b>（新規・上書き・削除・LIST すべて）<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「上書き直後は古いデータが返る結果整合性」は<b class=\"key\">過去の仕様</b></span></li></ul></li><li>2023年以降の新規バケットの既定<ul><li><b class=\"key\">ブロックパブリックアクセス：有効</b>、<b class=\"key\">ACL：無効</b>（オブジェクト所有者＝バケット所有者の強制）</li><li><b class=\"key\">SSE-S3 によるデフォルト暗号化</b>（2023年1月から全新規オブジェクト）</li></ul></li></ul>",
        oxIds: [],
        src: [2797,2801]
      },
      {
        id: "c05-l01-p05",
        title: "S3 ストレージクラス ①",
        html: "<ul><li><b class=\"key\">S3 Standard</b>：頻繁アクセス。可用性設計 <b class=\"key\">99.99%</b>。最低保存期間・取り出し料金<b class=\"key\">なし</b></li></ul>",
        oxIds: [],
        src: [2804,2804]
      },
      {
        id: "c05-l01-p06",
        title: "S3 ストレージクラス ②",
        html: "<ul><li><b class=\"key\">S3 Intelligent-Tiering</b>：アクセスパターンが<b class=\"key\">不明・変動</b>するデータ<ul><li>アクセス状況を監視して自動で階層移動。<b class=\"key\">取り出し料金なし</b>。<b class=\"key\">最低保存期間なし</b></li></ul></li></ul>",
        oxIds: ["c05-ox-02"],
        src: [2805,2806]
      },
      {
        id: "c05-l01-p07",
        title: "S3 ストレージクラス ③",
        html: "<ul><li>少額の<b class=\"key\">監視・自動化料金</b>（オブジェクト単位）。<b class=\"key\">128KB未満</b>は監視対象外（常に高頻度階層）<ul><li>自動階層：高頻度 → <b class=\"key\">30日</b>アクセスなしで低頻度 → <b class=\"key\">90日</b>で Archive Instant Access</li><li>オプション階層（有効化が必要）：Archive Access（90日〜）、Deep Archive Access（180日〜）</li></ul></li></ul>",
        oxIds: [],
        src: [2807,2809]
      },
      {
        id: "c05-l01-p08",
        title: "S3 ストレージクラス ④",
        html: "<ul><li><b class=\"key\">S3 Standard-IA</b>：低頻度だが<b class=\"key\">すぐ（ミリ秒）</b>取り出したい。複数AZ<ul><li>最低保存期間 <b class=\"key\">30日</b>、最小課金サイズ <b class=\"key\">128KB</b>、<b class=\"key\">取り出し料金あり</b>、可用性 <b class=\"key\">99.9%</b></li></ul></li></ul>",
        oxIds: ["c05-ox-01"],
        src: [2810,2811]
      },
      {
        id: "c05-l01-p09",
        title: "S3 ストレージクラス ⑤",
        html: "<ul><li><b class=\"key\">S3 One Zone-IA</b>：<b class=\"key\">1つのAZのみ</b>。Standard-IAより約2割安い<ul><li>最低保存期間 <b class=\"key\">30日</b>、可用性 <b class=\"key\">99.5%</b>。AZ消失でデータ損失</li><li>使いどころ：<b class=\"key\">再作成可能</b>なデータ（サムネイル、他リージョンの複製先コピー）</li></ul></li></ul>",
        oxIds: [],
        src: [2812,2814]
      },
      {
        id: "c05-l01-p10",
        title: "S3 ストレージクラス ⑥",
        html: "<ul><li><b class=\"key\">S3 Glacier Instant Retrieval</b>：四半期に1回程度のアクセス、<b class=\"key\">ミリ秒</b>取り出し<ul><li>最低保存期間 <b class=\"key\">90日</b>、最小課金サイズ 128KB</li></ul></li></ul>",
        oxIds: [],
        src: [2815,2816]
      },
      {
        id: "c05-l01-p11",
        title: "S3 ストレージクラス ⑦",
        html: "<ul><li><b class=\"key\">S3 Glacier Flexible Retrieval</b>（旧 S3 Glacier）：年1〜2回のアクセス<ul><li>最低保存期間 <b class=\"key\">90日</b></li><li>取り出し：<b class=\"key\">迅速（Expedited）1〜5分</b>／<b class=\"key\">標準 3〜5時間</b>／<b class=\"key\">大容量（Bulk）5〜12時間</b></li><li>迅速取り出しを確実にするには<b class=\"key\">プロビジョンド取り出しキャパシティ</b>を購入</li></ul></li></ul>",
        oxIds: ["c05-ox-04"],
        src: [2817,2820]
      },
      {
        id: "c05-l01-p12",
        title: "S3 ストレージクラス ⑧",
        html: "<ul><li><b class=\"key\">S3 Glacier Deep Archive</b>：<b class=\"key\">最安</b>。7〜10年の長期保管・規制対応のテープ代替<ul><li>最低保存期間 <b class=\"key\">180日</b></li><li>取り出し：<b class=\"key\">標準 12時間以内</b>／<b class=\"key\">大容量 48時間以内</b></li></ul></li></ul>",
        oxIds: ["c05-ox-03"],
        src: [2821,2823]
      },
      {
        id: "c05-l01-p13",
        title: "S3 ストレージクラス ⑨",
        html: "<ul><li><b class=\"key\">S3 Express One Zone</b>：<b class=\"key\">1桁ミリ秒</b>の超低レイテンシー。<b class=\"key\">ディレクトリバケット</b>・単一AZ<ul><li>使いどころ：ML学習・分析など同一AZのコンピューティングから大量リクエスト</li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Glacier系のアーカイブ（Flexible/Deep Archive）は<b class=\"key\">復元（Restore）操作が必要</b></span><ul><li>Glacier <b class=\"key\">Instant</b> Retrieval は復元不要で即読める（名前で区別）</li></ul></li></ul>",
        oxIds: [],
        src: [2824,2827]
      },
      {
        id: "c05-l01-p14",
        title: "S3 ライフサイクル ①",
        html: "<ul><li>ルールで<b class=\"key\">移行（Transition）</b>と<b class=\"key\">失効（Expiration：削除）</b>を自動化<ul><li>対象：プレフィックス・タグ・オブジェクトサイズで絞り込み可能</li></ul></li><li>移行は「上から下へ」のウォーターフォール（Standard → IA → Glacier系 → Deep Archive）<ul><li>Standard/Intelligent-Tiering → Standard-IA/One Zone-IA は<b class=\"key\">作成から30日以上</b>経過が条件</li><li>既定では<b class=\"key\">128KB未満</b>のオブジェクトは移行されない（2024年9月以降の既定動作）</li></ul></li><li>バージョニング有効時は<b class=\"key\">非現行バージョン</b>用の移行・失効ルールを別に設定できる</li><li><b class=\"key\">未完了のマルチパートアップロードの中止</b>ルール → 残骸パーツの課金を防ぐ<span class=\"badge b-freq\">頻出</span></li></ul>",
        oxIds: [],
        src: [2830,2836]
      },
      {
        id: "c05-l01-p15",
        title: "S3 ライフサイクル ②",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>パターンが<b class=\"key\">分かっている</b> → ライフサイクル、<b class=\"key\">分からない</b> → Intelligent-Tiering</li><li><b class=\"key\">S3 Storage Class Analysis</b>：アクセス傾向を分析し、IAへ移す時期の判断材料にする</li></ul>",
        oxIds: [],
        src: [2837,2838]
      },
      {
        id: "c05-l01-p16",
        title: "バージョニングと MFA Delete ①",
        html: "<ul><li><b class=\"key\">バージョニング</b>：同一キーの全バージョンを保持。誤削除・誤上書きから復旧<ul><li>削除すると<b class=\"key\">削除マーカー</b>が付くだけ → マーカーを消せば復元</li><li>一度有効にすると<b class=\"key\">無効化不可</b>（<b class=\"key\">停止 Suspended</b> のみ）</li><li>全バージョン分のストレージ料金がかかる → 非現行バージョンの失効ルールと併用</li></ul></li></ul>",
        oxIds: ["c05-ox-05"],
        src: [2841,2844]
      },
      {
        id: "c05-l01-p17",
        title: "バージョニングと MFA Delete ②",
        html: "<ul><li><b class=\"key\">MFA Delete</b>：バージョンの完全削除・バージョニング状態の変更に<b class=\"key\">MFA</b>を要求<ul><li>有効化できるのは<b class=\"key\">ルートユーザーのみ</b>、<b class=\"key\">CLI/API</b>から（コンソール不可）</li><li>前提：バージョニング有効</li></ul></li></ul>",
        oxIds: ["c05-ox-06"],
        src: [2845,2847]
      },
      {
        id: "c05-l01-p18",
        title: "S3 Object Lock（WORM） ①",
        html: "<ul><li><b class=\"key\">WORM（Write Once Read Many）</b>：一定期間、上書き・削除を禁止。<b class=\"key\">バージョニング必須</b><ul><li>既存バケットでも有効化可能（以前は作成時のみ）</li></ul></li></ul>",
        oxIds: [],
        src: [2850,2851]
      },
      {
        id: "c05-l01-p19",
        title: "S3 Object Lock（WORM） ②",
        html: "<ul><li><b class=\"key\">保持期間（Retention Period）</b>のモード<ul><li><b class=\"key\">ガバナンスモード</b>：<b class=\"key\">s3:BypassGovernanceRetention</b> 権限を持つユーザーは解除・削除できる<ul><li>用途：誤削除防止、コンプライアンスモード導入前のテスト</li></ul></li><li><b class=\"key\">コンプライアンスモード</b>：<b class=\"key\">ルートユーザーを含め誰も</b>期間中は削除・期間短縮できない<ul><li>用途：金融規制（SEC 17a-4 等）など、絶対に消せない要件</li></ul></li></ul></li></ul>",
        oxIds: ["c05-ox-07"],
        src: [2852,2856]
      },
      {
        id: "c05-l01-p20",
        title: "S3 Object Lock（WORM） ③",
        html: "<ul><li><b class=\"key\">リーガルホールド</b>：<b class=\"key\">期限なし</b>の保護。解除するまで有効（訴訟・調査対応）<ul><li><b class=\"key\">s3:PutObjectLegalHold</b> 権限で付け外し。保持期間とは独立して併用できる</li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「管理者だけは消せる」→ ガバナンス、「誰も消せない」→ コンプライアンス</span></li></ul>",
        oxIds: ["c05-ox-08"],
        src: [2857,2859]
      },
      {
        id: "c05-l01-p21",
        title: "S3 Glacier Vault Lock",
        html: "<ul><li><b class=\"key\">S3 Glacier（ボールト型の旧API）</b>のボールトに<b class=\"key\">変更不可のロックポリシー</b>を設定</li><li>手順：InitiateVaultLock → <b class=\"key\">24時間以内</b>に検証して CompleteVaultLock → 以後<b class=\"key\">変更不可</b><ul><li>24時間以内に完了しなければロックは中止される</li></ul></li><li>現在の新規設計では S3 バケット＋<b class=\"key\">Object Lock</b> が主流。試験では両方出る</li></ul>",
        oxIds: [],
        src: [2862,2865]
      },
      {
        id: "c05-l01-p22",
        title: "S3 レプリケーション（CRR / SRR） ①",
        html: "<ul><li><b class=\"key\">CRR（クロスリージョン）</b>：DR、規制（地理的に離れた保管）、他リージョンユーザーの低レイテンシー</li><li><b class=\"key\">SRR（同一リージョン）</b>：ログ集約、本番→テスト環境コピー、別アカウントへの保管</li><li>条件：<b class=\"key\">送信元・送信先の両方でバージョニング有効</b>。別アカウント間も可</li><li>既定では<b class=\"key\">設定後の新規オブジェクトのみ</b>複製<ul><li>既存オブジェクト・失敗分 → <b class=\"key\">S3 Batch Replication</b></li></ul></li></ul>",
        oxIds: ["c05-ox-09","c05-ox-10"],
        src: [2868,2872]
      },
      {
        id: "c05-l01-p23",
        title: "S3 レプリケーション（CRR / SRR） ②",
        html: "<ul><li><b class=\"key\">削除マーカー</b>の複製は既定で無効（オプションで有効化）。<b class=\"key\">バージョンID指定の削除は複製されない</b></li><li><b class=\"key\">連鎖しない</b>（A→B、B→C を設定しても A のオブジェクトは C に届かない）</li><li><b class=\"key\">S3 Replication Time Control（RTC）</b>：<b class=\"key\">99.99%</b> のオブジェクトを <b class=\"key\">15分以内</b>に複製するSLA</li><li>送信先で別ストレージクラス（例：One Zone-IA、Glacier）を指定できる</li></ul>",
        oxIds: [],
        src: [2873,2876]
      },
    ] },
    { id: "c05-l02", title: "S3の転送・公開・運用機能とEBS・インスタンスストア", pages: [
      {
        id: "c05-l02-p01",
        title: "S3 Transfer Acceleration とマルチパートアップロード ①",
        html: "<ul><li><b class=\"key\">Transfer Acceleration</b>：<b class=\"key\">CloudFrontのエッジロケーション</b>経由でAWSバックボーンを使い長距離転送を高速化<ul><li>専用エンドポイント（bucketname.s3-accelerate.amazonaws.com）を使う</li><li>バケット名に<b class=\"key\">ピリオド（.）不可</b>。高速化効果がないときは追加料金なし</li></ul></li></ul>",
        oxIds: [],
        src: [2879,2881]
      },
      {
        id: "c05-l02-p02",
        title: "S3 Transfer Acceleration とマルチパートアップロード ②",
        html: "<ul><li><b class=\"key\">マルチパートアップロード</b>：大きなファイルを分割して並列アップロード<ul><li><b class=\"key\">100MB超で推奨</b>、<b class=\"key\">5GB超で必須</b>（単一PUT上限5GB）</li><li>パーツ：<b class=\"key\">5MB〜5GB</b>、最大<b class=\"key\">10,000パーツ</b>、オブジェクト最大<b class=\"key\">5TB</b></li><li>失敗したパーツだけ再送できる → 不安定な回線にも強い</li></ul></li></ul>",
        oxIds: ["c05-ox-14"],
        src: [2882,2885]
      },
      {
        id: "c05-l02-p03",
        title: "S3 Transfer Acceleration とマルチパートアップロード ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>遠距離・大容量アップロード → Transfer Acceleration＋マルチパート</li><li><b class=\"key\">バイトレンジフェッチ</b>：ダウンロードを範囲指定で並列化</li></ul>",
        oxIds: [],
        src: [2886,2887]
      },
      {
        id: "c05-l02-p04",
        title: "署名付きURL（Presigned URL）",
        html: "<ul><li>署名者の権限で、<b class=\"key\">期限付き</b>でオブジェクトのGET/PUTを許可するURL<ul><li>バケットを非公開のまま、ログインなしのユーザーに一時共有・直接アップロードさせる</li></ul></li><li>有効期限：IAMユーザーの認証情報（SigV4）で最大<b class=\"key\">7日</b><ul><li><b class=\"key\">一時認証情報（ロール等）</b>で署名した場合はセッション期限で先に失効する</li></ul></li><li><span class=\"badge b-cmp\">比較</span>CloudFront経由で配信するなら <b class=\"key\">CloudFront署名付きURL/Cookie</b></li></ul>",
        oxIds: [],
        src: [2890,2894]
      },
      {
        id: "c05-l02-p05",
        title: "静的ウェブサイトホスティング",
        html: "<ul><li>バケットをWebサイトとして公開（HTML/CSS/画像など。サーバーサイド処理は不可）<ul><li>インデックスドキュメント・エラードキュメント・リダイレクトを設定</li></ul></li><li>ウェブサイトエンドポイントは <b class=\"key\">HTTPのみ</b><ul><li><b class=\"key\">HTTPS・独自ドメイン証明書</b> → <b class=\"key\">CloudFront</b>＋ACM（CloudFront用証明書は<b class=\"key\">us-east-1</b>）</li></ul></li><li>公開には ブロックパブリックアクセス解除＋公開読み取りのバケットポリシーが必要<ul><li>推奨構成：バケットは非公開のまま <b class=\"key\">CloudFront＋OAC（Origin Access Control）</b></li></ul></li><li>別ドメインからのブラウザアクセス → <b class=\"key\">CORS</b> 設定</li></ul>",
        oxIds: ["c05-ox-12"],
        src: [2897,2903]
      },
      {
        id: "c05-l02-p06",
        title: "S3 イベント通知 ①",
        html: "<ul><li>オブジェクト作成・削除・復元などのイベントで通知<ul><li>送信先：<b class=\"key\">SNS</b>、<b class=\"key\">SQS（標準キュー）</b>、<b class=\"key\">Lambda</b>、<b class=\"key\">Amazon EventBridge</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>SQS <b class=\"key\">FIFO</b> キューは直接の送信先に<b class=\"key\">できない</b>（EventBridge 経由なら可）</span></li></ul></li></ul>",
        oxIds: ["c05-ox-13"],
        src: [2906,2908]
      },
      {
        id: "c05-l02-p07",
        title: "S3 イベント通知 ②",
        html: "<ul><li><b class=\"key\">EventBridge</b>連携：高度なフィルタリング、複数ターゲット、アーカイブ・リプレイ</li><li>典型例：画像アップロード → Lambda でサムネイル生成</li></ul>",
        oxIds: [],
        src: [2909,2910]
      },
      {
        id: "c05-l02-p08",
        title: "S3 Select / Requester Pays / その他機能 ①",
        html: "<ul><li><b class=\"key\">S3 Select</b>：SQLでオブジェクト（CSV/JSON/Parquet）の一部だけ取得し転送量削減<ul><li><b class=\"key\">2024年7月から新規顧客は利用不可</b>。試験では古い選択肢として出ることがある</li><li>代替：<b class=\"key\">Amazon Athena</b>（S3上のデータにサーバーレスSQL）</li></ul></li></ul>",
        oxIds: [],
        src: [2913,2915]
      },
      {
        id: "c05-l02-p09",
        title: "S3 Select / Requester Pays / その他機能 ②",
        html: "<ul><li><b class=\"key\">Requester Pays（リクエスタ支払い）</b>：転送・リクエスト料金を<b class=\"key\">ダウンロードする側</b>が負担<ul><li>ストレージ料金は所有者負担。<b class=\"key\">匿名アクセス不可</b>（リクエスタはAWS認証が必要）</li><li>用途：大規模データセットを他社と共有</li></ul></li><li><b class=\"key\">S3 Batch Operations</b>：数十億オブジェクトにコピー・タグ付け・Lambda実行などを一括</li><li><b class=\"key\">S3 Inventory</b>：オブジェクト一覧と暗号化状態などをCSV/Parquetで定期出力</li></ul>",
        oxIds: [],
        src: [2916,2920]
      },
      {
        id: "c05-l02-p10",
        title: "S3 パフォーマンス",
        html: "<ul><li><b class=\"key\">プレフィックスごとに毎秒 3,500 PUT/COPY/POST/DELETE、5,500 GET/HEAD</b><ul><li>プレフィックス数に上限なし → <b class=\"key\">プレフィックスを分散</b>すれば並列で線形に伸びる</li></ul></li><li>読み取りが多い静的コンテンツ → <b class=\"key\">CloudFront</b> でキャッシュ</li><li>SSE-KMS 使用時は <b class=\"key\">KMS のAPIリクエストクォータ</b>がボトルネックになり得る<ul><li>対策：<b class=\"key\">S3 バケットキー</b>（KMS呼び出しを大幅削減）</li></ul></li></ul>",
        oxIds: [],
        src: [2923,2927]
      },
      {
        id: "c05-l02-p11",
        title: "ブロックパブリックアクセス / アクセスポイント / Storage Lens ①",
        html: "<ul><li><b class=\"key\">ブロックパブリックアクセス</b>：<b class=\"key\">アカウント単位</b>と<b class=\"key\">バケット単位</b>で設定<ul><li>ACLやバケットポリシーで公開しようとしても上書きでブロック。誤公開防止の最優先策</li><li>Organizations の SCP で設定変更自体を禁止できる</li></ul></li></ul>",
        oxIds: [],
        src: [2930,2932]
      },
      {
        id: "c05-l02-p12",
        title: "ブロックパブリックアクセス / アクセスポイント / Storage Lens ②",
        html: "<ul><li><b class=\"key\">S3 アクセスポイント</b>：バケットへの入口を用途別に作り、<b class=\"key\">それぞれ専用のポリシー</b>を持つ<ul><li>巨大なバケットポリシーの分割・簡素化に有効（部署・アプリごと）</li><li><b class=\"key\">VPC限定アクセスポイント</b>：特定VPCからのみアクセス可能</li><li><b class=\"key\">Multi-Region Access Points</b>：複数リージョンのバケットを単一エンドポイントで</li></ul></li><li><b class=\"key\">S3 Storage Lens</b>：組織全体のストレージ使用量・アクティビティを可視化するダッシュボード<ul><li>無料メトリクス＋<b class=\"key\">高度なメトリクス（有料）</b>。コスト最適化・データ保護のベストプラクティス確認</li></ul></li></ul>",
        oxIds: [],
        src: [2933,2938]
      },
      {
        id: "c05-l02-p13",
        title: "Amazon EBS の基本 ①",
        html: "<ul><li>EC2用の<b class=\"key\">永続ブロックストレージ</b>。インスタンス停止後もデータが残る</li><li><b class=\"key\">AZに紐づく</b>：同じAZのEC2にのみアタッチ可能<ul><li>別AZ/別リージョンへ移す → <b class=\"key\">スナップショット</b>を取り、そこからボリュームを作成（コピー）</li></ul></li><li>AZ内で自動複製されるが、<b class=\"key\">AZ障害には耐えない</b> → スナップショットで保護</li><li>通常は1ボリューム=1インスタンス（例外：Multi-Attach）</li></ul>",
        oxIds: ["c05-ox-15"],
        src: [2941,2945]
      },
      {
        id: "c05-l02-p14",
        title: "Amazon EBS の基本 ②",
        html: "<ul><li>ボリュームの<b class=\"key\">サイズ拡張・タイプ変更・IOPS変更はオンラインで可能</b>（Elastic Volumes）<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>サイズの<b class=\"key\">縮小はできない</b></span></li></ul></li><li>暗号化：KMS。暗号化ボリュームのスナップショット・そこから作るボリュームも暗号化<ul><li>未暗号化→暗号化：スナップショット → <b class=\"key\">暗号化付きでコピー</b> → ボリューム作成</li><li>リージョン単位で「<b class=\"key\">デフォルトで暗号化</b>」を有効にできる</li></ul></li></ul>",
        oxIds: [],
        src: [2946,2950]
      },
      {
        id: "c05-l02-p15",
        title: "EBS ボリュームタイプ（SSD） ①",
        html: "<ul><li><b class=\"key\">gp3（汎用SSD・既定の第一候補）</b><ul><li>サイズに関係なく <b class=\"key\">3,000 IOPS / 125 MiB/s</b> がベースライン</li><li>IOPS・スループットを<b class=\"key\">容量と独立して</b>追加プロビジョニング可能</li><li>従来の上限 <b class=\"key\">16,000 IOPS / 1,000 MiB/s</b>（2025年9月に最大 <b class=\"key\">80,000 IOPS / 2,000 MiB/s / 64 TiB</b> へ拡張。試験は従来値で出やすい）</li><li>gp2 より<b class=\"key\">約20%安い</b> → gp2 からの移行がコスト最適化の定番</li></ul></li></ul>",
        oxIds: ["c05-ox-16"],
        src: [2953,2957]
      },
      {
        id: "c05-l02-p16",
        title: "EBS ボリュームタイプ（SSD） ②",
        html: "<ul><li><b class=\"key\">gp2（汎用SSD・旧世代）</b><ul><li>IOPS は<b class=\"key\">容量に比例：3 IOPS/GiB</b>（最小100、最大 <b class=\"key\">16,000</b>）</li><li>1TiB未満は<b class=\"key\">バースト</b>で 3,000 IOPS（I/Oクレジット制）</li><li><span class=\"badge b-cmp\">比較</span>gp2 は IOPS を上げるのに容量を増やす必要がある → gp3 なら不要</li></ul></li></ul>",
        oxIds: [],
        src: [2958,2961]
      },
      {
        id: "c05-l02-p17",
        title: "EBS ボリュームタイプ（SSD） ③",
        html: "<ul><li><b class=\"key\">io2 Block Express（プロビジョンドIOPS SSD・最上位）</b><ul><li>最大 <b class=\"key\">256,000 IOPS / 4,000 MiB/s / 64 TiB</b>、サブミリ秒レイテンシー</li><li>耐久性 <b class=\"key\">99.999%</b>（他タイプは 99.8〜99.9%）</li><li>用途：SAP HANA、Oracle、大規模OLTPなどミッションクリティカルDB</li></ul></li><li><b class=\"key\">io1（プロビジョンドIOPS SSD・旧世代）</b><ul><li>最大 <b class=\"key\">64,000 IOPS</b>（Nitro）、<b class=\"key\">50 IOPS/GiB</b>、最大16 TiB</li></ul></li></ul>",
        oxIds: [],
        src: [2962,2967]
      },
      {
        id: "c05-l02-p18",
        title: "EBS ボリュームタイプ（SSD） ④",
        html: "<ul><li><b class=\"key\">Multi-Attach</b>：<b class=\"key\">io1/io2 のみ</b>。<b class=\"key\">同一AZ</b>の最大<b class=\"key\">16台</b>のNitroインスタンスに同時アタッチ<ul><li>同時書き込みの整合性はアプリ側（<b class=\"key\">クラスター対応ファイルシステム</b>）が担保</li></ul></li></ul>",
        oxIds: ["c05-ox-18"],
        src: [2968,2969]
      },
      {
        id: "c05-l02-p19",
        title: "EBS ボリュームタイプ（HDD） ①",
        html: "<ul><li><b class=\"key\">st1（スループット最適化HDD）</b>：<b class=\"key\">シーケンシャル</b>・大量データの読み書き<ul><li>最大 <b class=\"key\">500 MiB/s</b>、<b class=\"key\">500 IOPS</b>（1 MiB I/O）。用途：ビッグデータ、DWH、ログ処理</li></ul></li></ul>",
        oxIds: [],
        src: [2972,2973]
      },
      {
        id: "c05-l02-p20",
        title: "EBS ボリュームタイプ（HDD） ②",
        html: "<ul><li><b class=\"key\">sc1（コールドHDD）</b>：アクセス頻度が<b class=\"key\">低い</b>大容量データ。<b class=\"key\">最安</b><ul><li>最大 <b class=\"key\">250 MiB/s</b>、<b class=\"key\">250 IOPS</b></li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>st1/sc1 は<b class=\"key\">ブートボリュームに使えない</b></span></li><li><span class=\"badge b-cmp\">比較</span>「IOPS・ランダムI/O」→ SSD（gp3/io2）、「MB/s・シーケンシャル・安く」→ st1</li></ul>",
        oxIds: ["c05-ox-17"],
        src: [2974,2977]
      },
      {
        id: "c05-l02-p21",
        title: "EBS スナップショットと FSR ①",
        html: "<ul><li><b class=\"key\">増分バックアップ</b>（変更ブロックのみ）。AWS管理のS3に保存（自分のバケットからは見えない）<ul><li>他リージョン・他アカウントへ<b class=\"key\">コピー/共有</b>可能 → DR・移行</li></ul></li><li><b class=\"key\">Amazon Data Lifecycle Manager（DLM）</b>：スナップショット/AMIの作成・保持・削除を自動化</li></ul>",
        oxIds: [],
        src: [2980,2982]
      },
      {
        id: "c05-l02-p22",
        title: "EBS スナップショットと FSR ②",
        html: "<ul><li><b class=\"key\">EBS Snapshots Archive</b>：最大<b class=\"key\">75%安い</b>アーカイブ層。最低<b class=\"key\">90日</b>、復元に<b class=\"key\">24〜72時間</b></li><li><b class=\"key\">ごみ箱（Recycle Bin）</b>：誤削除したスナップショット/AMIを保持期間内なら復元</li><li><b class=\"key\">遅延読み込み</b>：スナップショットから作ったボリュームは、初回アクセス時にS3からブロック取得<ul><li>初回の読み取りが遅い（ファーストタッチペナルティ）</li></ul></li></ul>",
        oxIds: [],
        src: [2983,2986]
      },
      {
        id: "c05-l02-p23",
        title: "EBS スナップショットと FSR ③",
        html: "<ul><li><b class=\"key\">高速スナップショット復元（FSR）</b>：作成直後から<b class=\"key\">フルパフォーマンス</b>のボリュームを作れる<ul><li><b class=\"key\">スナップショット×AZ単位</b>で有効化し、時間課金</li><li>用途：VDIの一斉起動、DR時の即時性能が必要なDB</li></ul></li></ul>",
        oxIds: [],
        src: [2987,2989]
      },
      {
        id: "c05-l02-p24",
        title: "インスタンスストア ①",
        html: "<ul><li>EC2の<b class=\"key\">ホストに物理接続</b>されたディスク。<b class=\"key\">非常に高いIOPS</b>（NVMe SSDで数百万IOPS級）</li><li><b class=\"key\">一時的（エフェメラル）</b>：インスタンスの<b class=\"key\">停止・休止・終了</b>、ホスト障害で<b class=\"key\">データ消失</b><ul><li><b class=\"key\">再起動（reboot）ではデータは残る</b></li></ul></li></ul>",
        oxIds: ["c05-ox-19"],
        src: [2992,2994]
      },
      {
        id: "c05-l02-p25",
        title: "インスタンスストア ②",
        html: "<ul><li>追加料金なし（インスタンス料金に含む）。デタッチ・スナップショット不可</li><li>用途：バッファ、キャッシュ、スクラッチ、<b class=\"key\">複製を自前で持つ</b>分散DB（Cassandra等）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「永続性が必要」「停止しても保持」→ インスタンスストアは<b class=\"key\">誤答</b></span></li></ul>",
        oxIds: [],
        src: [2995,2997]
      },
    ] },
    { id: "c05-l03", title: "ファイル共有・ハイブリッド・データ移行", pages: [
      {
        id: "c05-l03-p01",
        title: "Amazon EFS ①",
        html: "<ul><li><b class=\"key\">フルマネージドのNFS（v4.0/v4.1）共有ファイルシステム</b>。<b class=\"key\">Linux</b>専用（Windows不可）</li><li>容量は<b class=\"key\">自動で伸縮</b>、プロビジョニング不要。使った分だけ課金</li><li><b class=\"key\">数千台</b>のEC2・ECS・EKS・Lambda から同時マウント</li></ul>",
        oxIds: ["c05-ox-20"],
        src: [3000,3002]
      },
      {
        id: "c05-l03-p02",
        title: "Amazon EFS ②",
        html: "<ul><li>可用性<ul><li><b class=\"key\">リージョナル（Standard）</b>：<b class=\"key\">複数AZ</b>にデータ保存。各AZにマウントターゲット</li><li><b class=\"key\">One Zone</b>：1AZのみ。安価。開発環境・再作成可能データ向け</li></ul></li></ul>",
        oxIds: [],
        src: [3003,3005]
      },
      {
        id: "c05-l03-p03",
        title: "Amazon EFS ③",
        html: "<ul><li>ストレージクラス：<b class=\"key\">Standard</b>／<b class=\"key\">Infrequent Access（IA）</b>／<b class=\"key\">Archive</b><ul><li><b class=\"key\">ライフサイクル管理</b>で一定期間アクセスがないファイルを自動でIA/Archiveへ</li></ul></li></ul>",
        oxIds: [],
        src: [3006,3007]
      },
      {
        id: "c05-l03-p04",
        title: "Amazon EFS ④",
        html: "<ul><li><b class=\"key\">スループットモード</b><ul><li><b class=\"key\">Elastic（推奨・既定）</b>：負荷に応じて自動伸縮。予測不能なワークロード向け</li><li><b class=\"key\">Provisioned</b>：容量と無関係に一定スループットを確保</li><li><b class=\"key\">Bursting</b>：容量に比例したベースライン＋バーストクレジット</li></ul></li><li>パフォーマンスモード：<b class=\"key\">General Purpose（既定・低レイテンシー）</b>／Max I/O（旧来、高並列向け）</li></ul>",
        oxIds: [],
        src: [3008,3012]
      },
      {
        id: "c05-l03-p05",
        title: "Amazon EFS ⑤",
        html: "<ul><li>暗号化（保存時・転送時）、<b class=\"key\">EFS Replication</b>（他リージョンへ）、AWS Backup 対応</li><li>アクセス制御：セキュリティグループ（NFS <b class=\"key\">2049</b>番ポート）＋IAM＋<b class=\"key\">EFSアクセスポイント</b></li></ul>",
        oxIds: [],
        src: [3013,3014]
      },
      {
        id: "c05-l03-p06",
        title: "Amazon FSx（4種類の使い分け） ①",
        html: "<ul><li><b class=\"key\">FSx for Windows File Server</b>：<b class=\"key\">SMB</b>、<b class=\"key\">Active Directory統合</b>、NTFS ACL、DFS名前空間<ul><li><b class=\"key\">Multi-AZ</b> 配置可。シャドウコピー、データ重複排除</li><li>キーワード：「Windows」「SMB」「AD」「ファイルサーバー移行」</li></ul></li></ul>",
        oxIds: [],
        src: [3017,3019]
      },
      {
        id: "c05-l03-p07",
        title: "Amazon FSx（4種類の使い分け） ②",
        html: "<ul><li><b class=\"key\">FSx for Lustre</b>：<b class=\"key\">HPC・機械学習・動画処理</b>向けの並列分散ファイルシステム<ul><li><b class=\"key\">数百GB/s・数百万IOPS・サブミリ秒</b>級。Linuxクライアント</li><li><b class=\"key\">S3と連携</b>（データリポジトリ）：S3のオブジェクトをファイルとして見せ、結果をS3へ書き戻す</li><li><b class=\"key\">Scratch</b>（一時・複製なし・安価・短期処理）／<b class=\"key\">Persistent</b>（長期・AZ内複製）</li></ul></li></ul>",
        oxIds: ["c05-ox-21"],
        src: [3020,3023]
      },
      {
        id: "c05-l03-p08",
        title: "Amazon FSx（4種類の使い分け） ③",
        html: "<ul><li><b class=\"key\">FSx for NetApp ONTAP</b>：<b class=\"key\">NFS・SMB・iSCSI のマルチプロトコル</b><ul><li>オンプレの <b class=\"key\">NetApp</b> からの移行（SnapMirror）、スナップショット、重複排除・圧縮</li><li>Windows/Linux/macOS から同じデータにアクセス</li></ul></li><li><b class=\"key\">FSx for OpenZFS</b>：オンプレの <b class=\"key\">ZFS/Linux NFS</b> ファイルサーバーの移行。低レイテンシー<ul><li>スナップショット・クローン</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Linux NFS 汎用共有 → EFS／Windows SMB → FSx for Windows／HPC → Lustre<ul><li>マルチプロトコル・NetApp → ONTAP／ZFS → OpenZFS</li></ul></li></ul>",
        oxIds: [],
        src: [3024,3030]
      },
      {
        id: "c05-l03-p09",
        title: "AWS Storage Gateway ①",
        html: "<ul><li><b class=\"key\">オンプレミスからAWSストレージを使うハイブリッドサービス</b>。VMや物理アプライアンスで稼働<ul><li>ローカルキャッシュで低レイテンシー、裏側はS3/FSx/EBSスナップショット/Glacier</li></ul></li><li><b class=\"key\">S3 File Gateway</b>：<b class=\"key\">NFS/SMB</b> でファイルを書くと <b class=\"key\">S3オブジェクト</b>として保存<ul><li>最近使ったデータをローカルにキャッシュ。S3側でライフサイクルや分析を利用可</li></ul></li><li><b class=\"key\">FSx File Gateway</b>：オンプレから FSx for Windows File Server への低レイテンシーSMBアクセス<ul><li><b class=\"key\">2024年10月から新規顧客は利用不可</b>。試験では古い選択肢として出ることがある</li></ul></li></ul>",
        oxIds: [],
        src: [3033,3038]
      },
      {
        id: "c05-l03-p10",
        title: "AWS Storage Gateway ②",
        html: "<ul><li><b class=\"key\">Volume Gateway</b>：<b class=\"key\">iSCSI</b> ブロックボリューム。バックアップは<b class=\"key\">EBSスナップショット</b><ul><li><b class=\"key\">キャッシュ型（Cached）</b>：プライマリデータは<b class=\"key\">S3</b>、頻繁アクセス分だけローカル<ul><li>オンプレのストレージ容量を<b class=\"key\">削減</b>したい</li></ul></li></ul></li></ul>",
        oxIds: ["c05-ox-22"],
        src: [3039,3041]
      },
      {
        id: "c05-l03-p11",
        title: "AWS Storage Gateway ③",
        html: "<ul><li><b class=\"key\">保管型（Stored）</b>：プライマリデータは<b class=\"key\">オンプレ全量</b>、非同期でS3にバックアップ<ul><li>全データを<b class=\"key\">低レイテンシー</b>で使いたい、オンプレ容量はある</li></ul></li><li><b class=\"key\">Tape Gateway</b>：<b class=\"key\">仮想テープライブラリ（VTL）</b>。既存のバックアップソフトをそのまま使える<ul><li>仮想テープをS3に保存し、アーカイブは <b class=\"key\">Glacier Flexible Retrieval / Deep Archive</b></li><li>キーワード：「物理テープを廃止」「既存バックアップアプリを変更しない」</li></ul></li></ul>",
        oxIds: ["c05-ox-23"],
        src: [3042,3046]
      },
      {
        id: "c05-l03-p12",
        title: "AWS DataSync ①",
        html: "<ul><li><b class=\"key\">オンライン</b>でのデータ転送・同期を自動化するマネージドサービス<ul><li>オンプレ（<b class=\"key\">NFS、SMB、HDFS</b>、オブジェクトストレージ）⇔ <b class=\"key\">S3 / EFS / FSx</b></li><li>AWSストレージ間（S3⇔EFS、リージョン間など）も可。他クラウドからの移行も対応</li></ul></li><li>オンプレ側に <b class=\"key\">DataSync エージェント</b>（VM）を導入。AWS間転送はエージェント不要</li></ul>",
        oxIds: ["c05-ox-24"],
        src: [3049,3052]
      },
      {
        id: "c05-l03-p13",
        title: "AWS DataSync ②",
        html: "<ul><li>特徴：並列転送で高速、<b class=\"key\">整合性検証</b>、暗号化、<b class=\"key\">スケジュール実行</b>、<b class=\"key\">帯域制限</b><ul><li>メタデータ（パーミッション・タイムスタンプ）も保持</li></ul></li><li>経路：インターネット、<b class=\"key\">Direct Connect</b>、VPN（VPCエンドポイント経由も可）</li><li><span class=\"badge b-cmp\">比較</span>DataSync＝<b class=\"key\">移行・定期コピー</b>、Storage Gateway＝<b class=\"key\">継続的なハイブリッド利用</b></li></ul>",
        oxIds: [],
        src: [3053,3056]
      },
      {
        id: "c05-l03-p14",
        title: "AWS Transfer Family",
        html: "<ul><li><b class=\"key\">SFTP / FTPS / FTP / AS2</b> のフルマネージドサーバー。保存先は <b class=\"key\">S3 または EFS</b></li><li>取引先の既存クライアント・スクリプトを<b class=\"key\">変更せず</b>にAWSへファイル受け渡し</li><li>認証：サービス管理ユーザー、AD、カスタムIDプロバイダー（Lambda等）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>FTP（平文）は<b class=\"key\">VPC内エンドポイントのみ</b>。インターネット公開ならSFTP/FTPS</span></li></ul>",
        oxIds: [],
        src: [3059,3062]
      },
      {
        id: "c05-l03-p15",
        title: "AWS Snow Family（現状の提供状況に注意） ①",
        html: "<ul><li>ネットワークで送ると時間がかかりすぎる<b class=\"key\">大量データを物理デバイスで輸送</b>するオフライン移行<ul><li>目安：回線で<b class=\"key\">1週間以上</b>かかるならオフライン転送を検討</li></ul></li><li><b class=\"key\">Snowball Edge</b>：Storage Optimized（大容量移行）／Compute Optimized（エッジ処理）<ul><li>EC2・Lambda をデバイス上で実行できる（通信が切れた現場でのエッジコンピューティング）</li><li>データはAWS到着後に <b class=\"key\">S3</b> へインポート</li><li><b class=\"key\">2025年11月7日で新規顧客の受付を終了</b>（既存顧客のみ利用可。Snow Family 全デバイスが新規注文不可）。試験では「オフライン大量移行＝Snowball Edge」として出る</li></ul></li></ul>",
        oxIds: [],
        src: [3065,3070]
      },
      {
        id: "c05-l03-p16",
        title: "AWS Snow Family（現状の提供状況に注意） ②",
        html: "<ul><li><b class=\"key\">Snowcone</b>：小型デバイス。<b class=\"key\">提供終了</b>。試験では古い選択肢として出ることがある</li><li><b class=\"key\">Snowmobile</b>：エクサバイト級のトラック。<b class=\"key\">廃止</b>。試験では古い選択肢として出ることがある</li></ul>",
        oxIds: ["c05-ox-25"],
        src: [3071,3072]
      },
      {
        id: "c05-l03-p17",
        title: "AWS Snow Family（現状の提供状況に注意） ③",
        html: "<ul><li>代替の選択肢：<b class=\"key\">DataSync＋Direct Connect</b>、<b class=\"key\">AWS Data Transfer Terminal</b>（物理拠点で高速アップロード）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Snowball から <b class=\"key\">Glacier へ直接</b>は入れられない → S3 に入れてライフサイクルで移行</span></li></ul>",
        oxIds: [],
        src: [3073,3074]
      },
      {
        id: "c05-l03-p18",
        title: "AWS Backup ①",
        html: "<ul><li><b class=\"key\">複数サービスのバックアップを一元管理</b>するフルマネージドサービス<ul><li>対象：EC2、EBS、RDS、Aurora、DynamoDB、EFS、FSx、S3、Storage Gateway、DocumentDB、Neptune など</li></ul></li><li><b class=\"key\">バックアッププラン</b>：頻度・保持期間・ライフサイクル（コールドストレージへ移行）をポリシー化<ul><li>タグでリソースを自動割り当て</li></ul></li><li><b class=\"key\">クロスリージョン・クロスアカウントコピー</b> → DR・ランサムウェア対策</li><li><b class=\"key\">AWS Organizations 連携</b>：バックアップポリシーで組織全体に一括適用</li></ul>",
        oxIds: [],
        src: [3077,3082]
      },
      {
        id: "c05-l03-p19",
        title: "AWS Backup ②",
        html: "<ul><li><b class=\"key\">Backup Vault Lock</b>：ボールトをWORM化（ガバナンス/コンプライアンスモード）</li><li><b class=\"key\">論理的エアギャップボールト</b>：隔離されたボールトで他アカウントと安全に共有</li><li><b class=\"key\">AWS Backup Audit Manager</b>：バックアップのコンプライアンス監査</li><li><span class=\"badge b-cmp\">比較</span>EBSだけを1アカウントで自動化 → DLM／複数サービス・組織横断 → AWS Backup</li></ul>",
        oxIds: [],
        src: [3083,3086]
      },
      {
        id: "c05-l03-p20",
        title: "AWS Application Migration Service（MGN） ①",
        html: "<ul><li><b class=\"key\">リフト＆シフト（リホスト）</b>の主力サービス。物理・仮想・他クラウドのサーバーをEC2へ</li></ul>",
        oxIds: [],
        src: [3089,3089]
      },
      {
        id: "c05-l03-p21",
        title: "AWS Application Migration Service（MGN） ②",
        html: "<ul><li>仕組み：ソースサーバーに<b class=\"key\">レプリケーションエージェント</b>を導入<ul><li><b class=\"key\">ブロックレベルの継続的レプリケーション</b> → AWSの<b class=\"key\">ステージングエリア</b>（軽量EC2＋EBS）</li><li><b class=\"key\">テスト起動</b>で検証 → <b class=\"key\">カットオーバー</b>で本番切替（<b class=\"key\">ダウンタイム数分</b>）</li></ul></li></ul>",
        oxIds: ["c05-ox-27"],
        src: [3090,3092]
      },
      {
        id: "c05-l03-p22",
        title: "AWS Application Migration Service（MGN） ③",
        html: "<ul><li>アプリやOSの変更不要。多数サーバーの一括移行に向く</li><li>旧サービス：<b class=\"key\">AWS SMS（Server Migration Service）</b>、CloudEndure Migration → MGN に置換</li><li><span class=\"badge b-cmp\">比較</span>サーバー丸ごと → MGN／データベース → <b class=\"key\">AWS DMS</b>（＋スキーマ変換）</li></ul>",
        oxIds: [],
        src: [3093,3095]
      },
      {
        id: "c05-l03-p23",
        title: "移行戦略 7R ①",
        html: "<ul><li><b class=\"key\">Retire（廃止）</b>：使われていないアプリを止める</li><li><b class=\"key\">Retain（保持）</b>：当面オンプレに残す（移行の準備ができていない、規制など）</li><li><b class=\"key\">Rehost（リホスト）</b>：そのまま移す「<b class=\"key\">リフト＆シフト</b>」 → <b class=\"key\">MGN</b></li></ul>",
        oxIds: [],
        src: [3098,3100]
      },
      {
        id: "c05-l03-p24",
        title: "移行戦略 7R ②",
        html: "<ul><li><b class=\"key\">Relocate（リロケート）</b>：ハイパーバイザー単位で移す → <b class=\"key\">VMware Cloud on AWS</b></li><li><b class=\"key\">Replatform（リプラットフォーム）</b>：「<b class=\"key\">リフト＆リシェイプ</b>」一部を最適化<ul><li>例：自前のDBを <b class=\"key\">Amazon RDS</b> へ、アプリを Elastic Beanstalk へ（コード大改修なし）</li></ul></li></ul>",
        oxIds: ["c05-ox-26"],
        src: [3101,3103]
      },
      {
        id: "c05-l03-p25",
        title: "移行戦略 7R ③",
        html: "<ul><li><b class=\"key\">Repurchase（再購入）</b>：<b class=\"key\">SaaS</b> に乗り換える（例：自前CRM → SaaS CRM）</li><li><b class=\"key\">Refactor / Re-architect（リファクタリング）</b>：クラウドネイティブに作り直す<ul><li>例：モノリス → マイクロサービス、サーバーレス化。最も手間だが効果も大</li></ul></li><li>移行の調査：<b class=\"key\">AWS Application Discovery Service</b>（オンプレのサーバー構成・依存関係を収集）</li></ul>",
        oxIds: [],
        src: [3104,3107]
      },
    ] },
    { id: "c05-l04", title: "試験での出方と暗記数字", pages: [
      {
        id: "c05-l04-p01",
        title: "試験での出方 ①",
        html: "<ul><li><span class=\"badge b-freq\">頻出</span>S3ストレージクラス選択<ul><li>「アクセスパターンが<b class=\"key\">予測不能</b>」→ <b class=\"key\">Intelligent-Tiering</b></li><li>「低頻度だが<b class=\"key\">即時（ミリ秒）</b>取り出し」→ <b class=\"key\">Standard-IA</b>（四半期1回程度なら <b class=\"key\">Glacier Instant Retrieval</b>）</li></ul></li></ul>",
        oxIds: [],
        src: [3110,3112]
      },
      {
        id: "c05-l04-p02",
        title: "試験での出方 ②",
        html: "<ul><li>「<b class=\"key\">再作成可能</b>」「低頻度」「最安」→ <b class=\"key\">One Zone-IA</b><ul><li>「<b class=\"key\">数時間以内</b>の取り出しでよい」→ <b class=\"key\">Glacier Flexible Retrieval</b></li><li>「<b class=\"key\">12時間/48時間以内</b>でよい」「7〜10年保管」「最安」→ <b class=\"key\">Glacier Deep Archive</b></li></ul></li></ul>",
        oxIds: [],
        src: [3113,3115]
      },
      {
        id: "c05-l04-p03",
        title: "試験での出方 ③",
        html: "<ul><li>「○日後に移行、○年後に削除」→ <b class=\"key\">S3ライフサイクル</b></li><li>「誤削除・誤上書きから復旧」→ <b class=\"key\">バージョニング</b>（＋<b class=\"key\">MFA Delete</b>）</li><li>「<b class=\"key\">誰も（ルートも）</b>削除不可」「規制でWORM」→ <b class=\"key\">Object Lock コンプライアンスモード</b></li></ul>",
        oxIds: [],
        src: [3116,3118]
      },
      {
        id: "c05-l04-p04",
        title: "試験での出方 ④",
        html: "<ul><li>「特別な権限の管理者だけ削除可」→ <b class=\"key\">ガバナンスモード</b>／「期限未定の保全」→ <b class=\"key\">リーガルホールド</b></li><li>「別リージョンへ自動複製」→ <b class=\"key\">CRR</b>（「15分以内SLA」→ <b class=\"key\">RTC</b>、既存分→ <b class=\"key\">Batch Replication</b>）</li><li>「世界中から1つのバケットへ大容量アップロードが遅い」→ <b class=\"key\">Transfer Acceleration＋マルチパート</b></li></ul>",
        oxIds: [],
        src: [3119,3121]
      },
      {
        id: "c05-l04-p05",
        title: "試験での出方 ⑤",
        html: "<ul><li>「ログインなしの外部ユーザーに一時的に共有/アップロードさせる」→ <b class=\"key\">署名付きURL</b></li><li>「静的サイトをHTTPS・独自ドメインで」→ <b class=\"key\">S3＋CloudFront（OAC）＋ACM</b></li><li>「アップロード時に処理を起動」→ <b class=\"key\">S3イベント通知 → Lambda/SQS/SNS/EventBridge</b></li><li>「データを買う/使う側に転送料金を払わせる」→ <b class=\"key\">Requester Pays</b></li><li>「部署ごとにアクセス制御、バケットポリシーが巨大」→ <b class=\"key\">S3 アクセスポイント</b></li><li>「組織全体のS3使用状況を可視化」→ <b class=\"key\">S3 Storage Lens</b></li></ul>",
        oxIds: [],
        src: [3122,3127]
      },
      {
        id: "c05-l04-p06",
        title: "試験での出方 ⑥",
        html: "<ul><li>EBS選択<ul><li>「汎用・コスト最適化」→ <b class=\"key\">gp3</b>（gp2から移行）</li><li>「数万〜数十万IOPS」「サブミリ秒」「ミッションクリティカルDB」→ <b class=\"key\">io2 Block Express</b></li><li>「複数インスタンスから同じブロックボリューム」→ <b class=\"key\">io1/io2 Multi-Attach</b>（同一AZ）</li></ul></li></ul>",
        oxIds: [],
        src: [3128,3131]
      },
      {
        id: "c05-l04-p07",
        title: "試験での出方 ⑦",
        html: "<ul><li>「シーケンシャル・ビッグデータ・ログ」→ <b class=\"key\">st1</b>／「コールド・最安」→ <b class=\"key\">sc1</b><ul><li>「最高IOPS・一時データ・消えてよい」→ <b class=\"key\">インスタンスストア</b></li><li>「スナップショットから即フル性能」→ <b class=\"key\">FSR</b></li></ul></li></ul>",
        oxIds: [],
        src: [3132,3134]
      },
      {
        id: "c05-l04-p08",
        title: "試験での出方（続き） ①",
        html: "<ul><li>ファイル共有<ul><li>「Linux」「NFS」「複数AZ」「自動伸縮」→ <b class=\"key\">EFS</b></li><li>「Windows」「SMB」「Active Directory」→ <b class=\"key\">FSx for Windows File Server</b></li><li>「HPC」「ML学習」「S3データを高速処理」→ <b class=\"key\">FSx for Lustre</b></li><li>「NetApp」「マルチプロトコル（NFS+SMB+iSCSI）」→ <b class=\"key\">FSx for NetApp ONTAP</b></li></ul></li><li>ハイブリッド・移行<ul><li>「オンプレからNFS/SMBでS3に保存」→ <b class=\"key\">S3 File Gateway</b></li></ul></li></ul>",
        oxIds: [],
        src: [3135,3141]
      },
      {
        id: "c05-l04-p09",
        title: "試験での出方（続き） ②",
        html: "<ul><li>「iSCSI」「オンプレ容量削減」→ <b class=\"key\">Volume Gateway キャッシュ型</b>／「全量ローカル」→ <b class=\"key\">保管型</b><ul><li>「物理テープ廃止」→ <b class=\"key\">Tape Gateway</b></li><li>「オンライン移行・定期同期」「NFS/SMB → S3/EFS/FSx」→ <b class=\"key\">DataSync</b></li><li>「取引先が<b class=\"key\">SFTP</b>でアップロード」→ <b class=\"key\">Transfer Family</b></li></ul></li></ul>",
        oxIds: [],
        src: [3142,3145]
      },
      {
        id: "c05-l04-p10",
        title: "試験での出方（続き） ③",
        html: "<ul><li>「数百TB、回線が細い、オフライン」→ <b class=\"key\">Snowball Edge</b><ul><li>「多サービス・多アカウントのバックアップを一元管理」→ <b class=\"key\">AWS Backup</b></li><li>「サーバーを最小ダウンタイムでリフト＆シフト」→ <b class=\"key\">MGN</b></li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>EFS は<b class=\"key\">Windowsからマウント不可</b> → Windows なら FSx for Windows</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>EBS は<b class=\"key\">AZをまたいでアタッチ不可</b> → スナップショット経由</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>S3 Website エンドポイントは<b class=\"key\">HTTPS非対応</b></span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Snowcone / Snowmobile / S3 Select / FSx File Gateway は新規利用不可（誤答の古い選択肢）。Snowball Edge も2025年11月から新規顧客は利用不可だが、試験ではオフライン移行の正解として出る</span></li></ul>",
        oxIds: [],
        src: [3146,3152]
      },
      {
        id: "c05-l04-p11",
        title: "試験での出方（続き） ④",
        html: "<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>One Zone-IA は<b class=\"key\">AZ障害でデータ損失</b> → 唯一のコピーには使わない</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Glacier Flexible / Deep Archive は「即時取り出し」要件には<b class=\"key\">不適</b></span></li><li>解き方のコツ：<b class=\"key\">アクセス頻度 → 取り出し時間 → 耐障害性（AZ数） → コスト</b> の順で絞る</li></ul>",
        oxIds: [],
        src: [3153,3155]
      },
      {
        id: "c05-l04-p12",
        title: "暗記すべき数字・制限 ①",
        html: "<ul><li>S3 耐久性 <b class=\"key\">イレブンナイン（99.999999999%）</b></li><li>S3 可用性：Standard <b class=\"key\">99.99%</b>／Standard-IA <b class=\"key\">99.9%</b>／One Zone-IA <b class=\"key\">99.5%</b></li></ul>",
        oxIds: [],
        src: [3158,3159]
      },
      {
        id: "c05-l04-p13",
        title: "暗記すべき数字・制限 ②",
        html: "<ul><li>最低保存期間<ul><li>Standard-IA・One Zone-IA：<b class=\"key\">30日</b></li><li>Glacier Instant Retrieval・Glacier Flexible Retrieval：<b class=\"key\">90日</b></li><li>Glacier Deep Archive：<b class=\"key\">180日</b></li><li>Standard・Intelligent-Tiering：<b class=\"key\">なし</b></li></ul></li><li>最小課金サイズ：IA系・Glacier Instant Retrieval <b class=\"key\">128KB</b></li></ul>",
        oxIds: [],
        src: [3160,3165]
      },
      {
        id: "c05-l04-p14",
        title: "暗記すべき数字・制限 ③",
        html: "<ul><li>取り出し時間<ul><li>Glacier Flexible：迅速 <b class=\"key\">1〜5分</b>／標準 <b class=\"key\">3〜5時間</b>／大容量 <b class=\"key\">5〜12時間</b></li><li>Deep Archive：標準 <b class=\"key\">12時間以内</b>／大容量 <b class=\"key\">48時間以内</b></li></ul></li></ul>",
        oxIds: [],
        src: [3166,3168]
      },
      {
        id: "c05-l04-p15",
        title: "暗記すべき数字・制限 ④",
        html: "<ul><li>Intelligent-Tiering：<b class=\"key\">30日</b>で低頻度、<b class=\"key\">90日</b>で Archive Instant Access</li><li>オブジェクト最大 <b class=\"key\">5TB</b>、単一PUT最大 <b class=\"key\">5GB</b></li></ul>",
        oxIds: [],
        src: [3169,3170]
      },
      {
        id: "c05-l04-p16",
        title: "暗記すべき数字・制限 ⑤",
        html: "<ul><li>マルチパート：<b class=\"key\">100MB超で推奨</b>、<b class=\"key\">5GB超で必須</b>、パーツ <b class=\"key\">5MB〜5GB</b>、最大 <b class=\"key\">10,000パーツ</b></li><li>S3性能：プレフィックスごと毎秒 <b class=\"key\">3,500 書き込み / 5,500 読み取り</b></li><li>署名付きURL：最大 <b class=\"key\">7日</b>（IAMユーザーの長期認証情報で署名した場合）</li></ul>",
        oxIds: ["c05-ox-11"],
        src: [3171,3173]
      },
      {
        id: "c05-l04-p17",
        title: "暗記すべき数字・制限 ⑥",
        html: "<ul><li>RTC：<b class=\"key\">99.99%</b> を <b class=\"key\">15分以内</b></li><li>Glacier Vault Lock：<b class=\"key\">24時間以内</b>に完了しないと中止</li><li>強い整合性：<b class=\"key\">2020年12月</b>から</li></ul>",
        oxIds: [],
        src: [3174,3176]
      },
      {
        id: "c05-l04-p18",
        title: "暗記すべき数字・制限 ⑦",
        html: "<ul><li>EBS gp3：ベースライン <b class=\"key\">3,000 IOPS / 125 MiB/s</b>（容量と独立）、従来上限 <b class=\"key\">16,000 IOPS / 1,000 MiB/s</b>（2025年9月に <b class=\"key\">80,000 IOPS / 2,000 MiB/s / 64 TiB</b> へ拡張）</li></ul>",
        oxIds: [],
        src: [3177,3177]
      },
      {
        id: "c05-l04-p19",
        title: "暗記すべき数字・制限 ⑧",
        html: "<ul><li>EBS gp2：<b class=\"key\">3 IOPS/GiB</b>、最小 <b class=\"key\">100</b>、最大 <b class=\"key\">16,000</b>、1TiB未満はバースト <b class=\"key\">3,000</b></li><li>EBS io2 Block Express：<b class=\"key\">256,000 IOPS / 4,000 MiB/s / 64 TiB</b>、耐久性 <b class=\"key\">99.999%</b></li></ul>",
        oxIds: [],
        src: [3178,3179]
      },
      {
        id: "c05-l04-p20",
        title: "暗記すべき数字・制限 ⑨",
        html: "<ul><li>EBS io1：最大 <b class=\"key\">64,000 IOPS</b>、<b class=\"key\">50 IOPS/GiB</b></li><li>EBS st1：<b class=\"key\">500 MiB/s</b>／sc1：<b class=\"key\">250 MiB/s</b>（ともにブート不可）</li><li>Multi-Attach：<b class=\"key\">io1/io2</b>、同一AZ、最大 <b class=\"key\">16台</b></li></ul>",
        oxIds: [],
        src: [3180,3182]
      },
      {
        id: "c05-l04-p21",
        title: "暗記すべき数字・制限 ⑩",
        html: "<ul><li>EBS Snapshots Archive：最大 <b class=\"key\">75%</b> 安い、最低 <b class=\"key\">90日</b>、復元 <b class=\"key\">24〜72時間</b></li><li>EFS：NFS ポート <b class=\"key\">2049</b></li><li>語呂合わせ：「<b class=\"key\">IAは30、グレイシャー90、ディープ180</b>」（最低保存期間）</li></ul>",
        oxIds: [],
        src: [3183,3185]
      },
      {
        id: "c05-l04-p22",
        title: "暗記すべき数字・制限 ⑪",
        html: "<ul><li>語呂合わせ：「<b class=\"key\">迅速1〜5分、標準3〜5時間、バルク5〜12時間、ディープは12と48</b>」</li><li>語呂合わせ：「<b class=\"key\">さんごー・ごーごー（3,500/5,500）はプレフィックスごと</b>」</li><li>語呂合わせ：「<b class=\"key\">st1はスループット、sc1はスリープ（コールド）</b>」</li></ul>",
        oxIds: [],
        src: [3186,3188]
      },
    ] },
  ],
  ox: [
    { id: "c05-ox-01", answer: false, src: 3191,
      text: "S3 Standard-IA に保存したオブジェクトを10日で削除しても、課金は10日分だけである。",
      explain: "Standard-IA は最低保存期間<b class=\"key\">30日</b>。早期削除しても30日分課金される" },
    { id: "c05-ox-02", answer: false, src: 3194,
      text: "S3 Intelligent-Tiering では、低頻度アクセス階層から取り出す際に取り出し料金が発生する。",
      explain: "Intelligent-Tiering は<b class=\"key\">取り出し料金なし</b>。代わりに少額の監視・自動化料金がかかる" },
    { id: "c05-ox-03", answer: true, src: 3197,
      text: "S3 Glacier Deep Archive の標準取り出しは、12時間以内に完了する。",
      explain: "標準は<b class=\"key\">12時間以内</b>、大容量（Bulk）は<b class=\"key\">48時間以内</b>。迅速取り出しはない" },
    { id: "c05-ox-04", answer: true, src: 3200,
      text: "S3 Glacier Flexible Retrieval の迅速取り出しでは、通常1〜5分でデータを取り出せる。",
      explain: "迅速1〜5分、標準3〜5時間、大容量5〜12時間" },
    { id: "c05-ox-05", answer: false, src: 3203,
      text: "S3 のバージョニングは、一度有効にした後でも無効（未設定の状態）に戻すことができる。",
      explain: "一度有効にすると<b class=\"key\">停止（Suspended）</b>にしかできない。既存バージョンは残る" },
    { id: "c05-ox-06", answer: false, src: 3206,
      text: "MFA Delete は、IAM 管理者ユーザーがマネジメントコンソールから有効化できる。",
      explain: "有効化できるのは<b class=\"key\">ルートユーザー</b>のみで、<b class=\"key\">CLI/API</b>から行う" },
    { id: "c05-ox-07", answer: true, src: 3209,
      text: "S3 Object Lock のコンプライアンスモードでは、ルートユーザーであっても保持期間中にオブジェクトバージョンを削除できない。",
      explain: "コンプライアンスモードは誰も削除・期間短縮できない。ガバナンスモードは特別な権限で解除可" },
    { id: "c05-ox-08", answer: false, src: 3212,
      text: "リーガルホールドを設定するには、保持期間（日数）を必ず指定しなければならない。",
      explain: "リーガルホールドは<b class=\"key\">期限なし</b>。明示的に解除するまで有効" },
    { id: "c05-ox-09", answer: false, src: 3215,
      text: "S3 のクロスリージョンレプリケーションを設定すると、設定前から存在するオブジェクトも自動的に複製される。",
      explain: "既定では<b class=\"key\">新規オブジェクトのみ</b>。既存オブジェクトは <b class=\"key\">S3 Batch Replication</b> で複製する" },
    { id: "c05-ox-10", answer: true, src: 3218,
      text: "S3 レプリケーションを設定するには、送信元バケットと送信先バケットの両方でバージョニングが有効である必要がある。",
      explain: "CRR/SRR とも両バケットでバージョニングが必須" },
    { id: "c05-ox-11", answer: true, src: 3221,
      text: "S3 では、プレフィックスごとに1秒あたり 5,500 件の GET リクエストに対応できる。",
      explain: "GET/HEAD は <b class=\"key\">5,500</b>、PUT/COPY/POST/DELETE は <b class=\"key\">3,500</b>。プレフィックスを分ければ拡張可能" },
    { id: "c05-ox-12", answer: false, src: 3224,
      text: "S3 の静的ウェブサイトエンドポイントは、HTTPS によるアクセスに対応している。",
      explain: "ウェブサイトエンドポイントは <b class=\"key\">HTTPのみ</b>。HTTPS は <b class=\"key\">CloudFront</b> を前段に置く" },
    { id: "c05-ox-13", answer: false, src: 3227,
      text: "S3 イベント通知の送信先として、SQS FIFO キューを直接指定できる。",
      explain: "直接指定できるのは <b class=\"key\">SQS 標準キュー</b>。FIFO を使うなら <b class=\"key\">EventBridge</b> 経由" },
    { id: "c05-ox-14", answer: true, src: 3230,
      text: "5GB を超えるオブジェクトを S3 にアップロードするには、マルチパートアップロードを使う必要がある。",
      explain: "単一 PUT の上限は <b class=\"key\">5GB</b>。100MB 超から推奨、5GB 超で必須" },
    { id: "c05-ox-15", answer: false, src: 3233,
      text: "EBS ボリュームは、同じリージョン内であれば別の AZ の EC2 インスタンスにもアタッチできる。",
      explain: "EBS は<b class=\"key\">AZに紐づく</b>。別AZへはスナップショットから新しいボリュームを作成する" },
    { id: "c05-ox-16", answer: true, src: 3236,
      text: "gp3 ボリュームでは、容量を増やさなくても IOPS とスループットを個別にプロビジョニングできる。",
      explain: "gp3 は容量と独立して性能を設定可能。gp2 は<b class=\"key\">3 IOPS/GiB</b>で容量に比例" },
    { id: "c05-ox-17", answer: false, src: 3239,
      text: "st1 ボリュームは、EC2 インスタンスのブートボリュームとして使用できる。",
      explain: "st1/sc1（HDD）は<b class=\"key\">ブートボリューム不可</b>。ブートには SSD 系を使う" },
    { id: "c05-ox-18", answer: false, src: 3242,
      text: "EBS Multi-Attach は gp3 ボリュームでも利用でき、異なる AZ のインスタンスにも同時アタッチできる。",
      explain: "Multi-Attach は <b class=\"key\">io1/io2 のみ</b>で、<b class=\"key\">同一AZ</b>の最大16台のNitroインスタンスが対象" },
    { id: "c05-ox-19", answer: true, src: 3245,
      text: "インスタンスストアのデータは、EC2 インスタンスを再起動（reboot）しても保持される。",
      explain: "再起動では残る。<b class=\"key\">停止・休止・終了</b>やホスト障害で消える" },
    { id: "c05-ox-20", answer: false, src: 3248,
      text: "Amazon EFS は、Windows サーバーから SMB プロトコルでマウントする共有ファイルシステムとして利用できる。",
      explain: "EFS は <b class=\"key\">NFS・Linux</b> 向け。Windows/SMB は <b class=\"key\">FSx for Windows File Server</b>" },
    { id: "c05-ox-21", answer: true, src: 3251,
      text: "FSx for Lustre は S3 バケットと連携し、S3 のオブジェクトをファイルとして高速に処理できる。",
      explain: "データリポジトリとして S3 をリンクし、処理結果を S3 に書き戻せる。HPC・ML の定番" },
    { id: "c05-ox-22", answer: false, src: 3254,
      text: "Volume Gateway の保管型（Stored）では、プライマリデータを S3 に置き、頻繁にアクセスするデータだけをオンプレミスにキャッシュする。",
      explain: "それは<b class=\"key\">キャッシュ型</b>。保管型はプライマリ全量を<b class=\"key\">オンプレ</b>に置き、非同期でS3へバックアップ" },
    { id: "c05-ox-23", answer: true, src: 3257,
      text: "Tape Gateway を使うと、既存のバックアップソフトウェアを変更せずに仮想テープを AWS に保存できる。",
      explain: "VTL として見え、アーカイブは Glacier Flexible Retrieval / Deep Archive へ" },
    { id: "c05-ox-24", answer: true, src: 3260,
      text: "AWS DataSync は、オンプレミスの NFS/SMB 共有から Amazon EFS や Amazon FSx へのオンライン転送に使える。",
      explain: "送信先は S3/EFS/FSx。オンプレ側にエージェントを置き、スケジュール・整合性検証も可能" },
    { id: "c05-ox-25", answer: false, src: 3263,
      text: "AWS Snowmobile は、現在もエクサバイト級のデータ移行のために新規に利用できる。",
      explain: "Snowmobile は<b class=\"key\">廃止</b>。Snowcone も提供終了。試験では古い選択肢として出ることがある" },
    { id: "c05-ox-26", answer: true, src: 3266,
      text: "自前で運用している MySQL を Amazon RDS for MySQL へ移す移行は、7R のうちリプラットフォームに分類される。",
      explain: "アプリを大きく作り直さずマネージドサービスへ載せ替える「リフト＆リシェイプ」" },
    { id: "c05-ox-27", answer: true, src: 3269,
      text: "AWS Application Migration Service（MGN）は、ソースサーバーのブロックレベルの継続的レプリケーションにより、短いダウンタイムでのカットオーバーを可能にする。",
      explain: "エージェントでステージングエリアへ継続複製し、テスト起動後にカットオーバー" },
  ],
  mc: [
    {
      id: "c05-mc-01",
      stem: "ある企業はアプリケーションログを S3 に保存している。ログは作成後30日間は頻繁に参照されるが、その後はほとんど参照されない。30日〜1年の間は監査時にミリ秒単位で取り出せる必要がある。1年経過後は年1回未満しか参照されず、取り出しには12時間かかってもよい。ログは5年間保管後に削除する。最もコスト効率の良い構成はどれか。",
      choices: [
        "すべてのログを S3 Intelligent-Tiering に保存し、5年後に削除するライフサイクルルールを設定する",
        "S3 Standard に保存し、30日後に S3 Standard-IA、365日後に S3 Glacier Deep Archive へ移行し、5年後に失効させるライフサイクルルールを設定する",
        "S3 Standard に保存し、30日後に S3 Glacier Flexible Retrieval へ移行し、5年後に失効させるライフサイクルルールを設定する",
        "S3 One Zone-IA に保存し、365日後に S3 Glacier Deep Archive へ移行し、5年後に失効させるライフサイクルルールを設定する",
      ],
      answer: ["B"], selectCount: 1, domain: 4, src: 3274,
      choiceExplain: [
        { ok: false, text: "パターンが<b class=\"key\">分かっている</b>ので監視料金のかかる Intelligent-Tiering より、明示的なライフサイクルが安い" },
        { ok: true, text: "30日〜1年は即時取り出しの Standard-IA、1年後は12時間許容の最安 Deep Archive" },
        { ok: false, text: "Glacier Flexible は取り出しに分〜時間かかり、30日〜1年の<b class=\"key\">ミリ秒</b>要件を満たさない" },
        { ok: false, text: "頻繁に参照される最初の30日を IA に置くと取り出し料金が高く、単一AZで耐障害性も低い" },
      ],
      tip: "期間ごとに「アクセス頻度」と「許容取り出し時間」を書き出し、各期間の最安クラスを当てはめる"
    },
    {
      id: "c05-mc-02",
      stem: "証券会社は、取引記録を S3 に保存し、規制により7年間はいかなるユーザー（AWS アカウントのルートユーザーを含む）も削除・上書きできないようにする必要がある。最も適切な方法はどれか。",
      choices: [
        "バージョニングと MFA Delete を有効にする",
        "S3 Object Lock をガバナンスモードで有効にし、保持期間を7年に設定する",
        "S3 Object Lock をコンプライアンスモードで有効にし、保持期間を7年に設定する",
        "すべてのプリンシパルに対して s3:DeleteObject を拒否するバケットポリシーを設定する",
      ],
      answer: ["C"], selectCount: 1, domain: 1, src: 3286,
      choiceExplain: [
        { ok: false, text: "MFA Delete は削除に MFA を要求するだけで、MFA を持つルートユーザーは削除できる" },
        { ok: false, text: "ガバナンスモードは <b class=\"key\">s3:BypassGovernanceRetention</b> 権限を持つユーザーが解除できる" },
        { ok: true, text: "コンプライアンスモードは<b class=\"key\">ルートを含め誰も</b>保持期間中に削除・期間短縮できない" },
        { ok: false, text: "バケットポリシーは管理者・ルートが後から変更できるため、WORM の保証にならない" },
      ],
      tip: "「ルートを含め誰も」「規制」→ コンプライアンスモード。「一部の管理者は例外」→ ガバナンス"
    },
    {
      id: "c05-mc-03",
      stem: "ある企業は us-east-1 の S3 バケットに、アジアとヨーロッパの拠点から数GB の動画ファイルをアップロードしている。アップロードが遅く、途中で失敗することも多い。アプリケーションの変更を最小限にしつつ、アップロードを高速化・安定化したい。最も適切な組み合わせはどれか。",
      choices: [
        "各拠点に近いリージョンにバケットを作成し、CRR で us-east-1 へ複製する",
        "S3 Transfer Acceleration を有効にし、マルチパートアップロードを使用する",
        "各拠点から AWS Direct Connect 接続を新規に敷設する",
        "S3 バケットの前段に Amazon CloudFront を配置し、キャッシュ期間を延ばす",
      ],
      answer: ["B"], selectCount: 1, domain: 3, src: 3298,
      choiceExplain: [
        { ok: false, text: "バケットが増えアプリの書き込み先変更が必要。CRR は非同期で運用も複雑" },
        { ok: true, text: "エッジロケーション経由で長距離転送を高速化し、マルチパートで並列化・失敗パーツのみ再送" },
        { ok: false, text: "敷設に時間とコストがかかり、「変更最小限」に合わない" },
        { ok: false, text: "キャッシュ期間の延長は<b class=\"key\">ダウンロード</b>側の最適化でアップロード改善にはならない" },
      ],
      tip: "「遠隔地から1つのバケットへ大容量アップロード」→ Transfer Acceleration＋マルチパートの定番セット"
    },
    {
      id: "c05-mc-04",
      stem: "ある企業は EC2 上で大規模な Oracle データベースを運用しており、200,000 IOPS とサブミリ秒レイテンシーが必要である。データは永続的に保持する必要があり、ストレージの耐久性も高くしたい。最も適切な EBS ボリュームタイプはどれか。",
      choices: [
        "gp3",
        "io1",
        "io2 Block Express",
        "インスタンスストア（NVMe SSD）",
      ],
      answer: ["C"], selectCount: 1, domain: 3, src: 3310,
      choiceExplain: [
        { ok: false, text: "gp3 は汎用。200,000 IOPS には届かない" },
        { ok: false, text: "io1 の上限は <b class=\"key\">64,000 IOPS</b>" },
        { ok: true, text: "最大 <b class=\"key\">256,000 IOPS</b>、サブミリ秒、耐久性 <b class=\"key\">99.999%</b>" },
        { ok: false, text: "高IOPSだが<b class=\"key\">停止・障害でデータ消失</b>するため永続性要件を満たさない" },
      ],
      tip: "IOPS の数字で gp3/io1 を消し、「永続」でインスタンスストアを消す"
    },
    {
      id: "c05-mc-05",
      stem: "あるメディア企業は、EC2 上で大量のログファイルを順次読み込んで集計する処理を毎日実行している。I/O は大きなブロックのシーケンシャル読み取りが中心で、高いスループットが必要だが、ランダム I/O の性能は不要である。最もコスト効率の良い EBS ボリュームタイプはどれか。",
      choices: [
        "io2",
        "gp3",
        "st1",
        "sc1",
      ],
      answer: ["C"], selectCount: 1, domain: 4, src: 3322,
      choiceExplain: [
        { ok: false, text: "ランダム I/O 向けの高価な SSD。要件に対して過剰" },
        { ok: false, text: "汎用 SSD。シーケンシャル大量処理では st1 の方が容量単価が安い" },
        { ok: true, text: "スループット最適化 HDD。ビッグデータ・ログ処理に最適（最大 500 MiB/s）" },
        { ok: false, text: "コールド HDD はアクセス頻度が低いデータ向け。毎日の高スループット処理には性能不足" },
      ],
      tip: "「シーケンシャル」「スループット」→ st1、「めったにアクセスしない」→ sc1"
    },
    {
      id: "c05-mc-06",
      stem: "ある企業はオンプレミスの Windows ファイルサーバーを AWS に移行したい。ユーザーは既存の Active Directory の認証で SMB 共有にアクセスし、NTFS のアクセス許可を維持する必要がある。AZ 障害時にも利用を継続したい。運用負荷が最も少ない構成はどれか。",
      choices: [
        "Amazon EFS をリージョナル構成で作成し、Windows サーバーからマウントする",
        "Multi-AZ の Amazon FSx for Windows File Server を作成し、AD に参加させる",
        "2つの AZ に Windows Server の EC2 を立て、EBS 上で DFS レプリケーションを構成する",
        "S3 File Gateway を EC2 上にデプロイし、SMB 共有を提供する",
      ],
      answer: ["B"], selectCount: 1, domain: 2, src: 3334,
      choiceExplain: [
        { ok: false, text: "EFS は <b class=\"key\">NFS・Linux</b> 向けで Windows の SMB 共有には使えない" },
        { ok: true, text: "SMB・AD 統合・NTFS ACL をネイティブ対応し、Multi-AZ で自動フェイルオーバー" },
        { ok: false, text: "実現できるが OS・レプリケーションの運用を自分で行うため運用負荷が高い" },
        { ok: false, text: "S3 File Gateway はオンプレからS3へ書く用途。完全な Windows ファイルサーバー機能の代替にならない" },
      ],
      tip: "「Windows」「SMB」「AD」の3点セット → FSx for Windows File Server"
    },
    {
      id: "c05-mc-07",
      stem: "ある研究機関は、S3 に保存された数百TBのゲノムデータに対して、数千コアの HPC クラスターで数日間の解析を行う。解析中は非常に高いスループットと低レイテンシーのファイルアクセスが必要で、結果は S3 に保存する。解析後はファイルシステムを削除する。最もコスト効率の良い構成はどれか。",
      choices: [
        "S3 バケットをリンクした FSx for Lustre（Scratch）を作成する",
        "FSx for Lustre（Persistent）を作成し、DataSync で S3 から毎時コピーする",
        "Amazon EFS（Provisioned スループット）にデータをコピーして解析する",
        "FSx for NetApp ONTAP を作成し、iSCSI で各ノードに接続する",
      ],
      answer: ["A"], selectCount: 1, domain: 4, src: 3346,
      choiceExplain: [
        { ok: true, text: "S3 とネイティブ連携し、一時処理向けで安価な Scratch。結果は S3 に書き戻せる" },
        { ok: false, text: "短期利用に Persistent は割高で、DataSync による毎時コピーは不要な手間" },
        { ok: false, text: "EFS は汎用共有で、HPC の並列高スループットでは Lustre に劣りコピーも必要" },
        { ok: false, text: "マルチプロトコル・NetApp 移行向けで、HPC 用途の最適解ではない" },
      ],
      tip: "「HPC」「S3データ」「一時的」→ FSx for Lustre Scratch"
    },
    {
      id: "c05-mc-08",
      stem: "ある企業は、オンプレミスのバックアップソフトウェアで物理テープライブラリにバックアップを取っている。テープの保管・輸送コストを削減したいが、バックアップソフトウェアや手順は変更したくない。長期保管データは最も安価なストレージに置きたい。最も適切な解決策はどれか。",
      choices: [
        "Volume Gateway の保管型を導入し、スナップショットを S3 に保存する",
        "Tape Gateway を導入し、仮想テープを S3 Glacier Deep Archive にアーカイブする",
        "S3 File Gateway を導入し、バックアップファイルを NFS で S3 に書き込む",
        "AWS Snowball Edge で毎月テープのデータを AWS に送る",
      ],
      answer: ["B"], selectCount: 1, domain: 4, src: 3358,
      choiceExplain: [
        { ok: false, text: "ブロックボリュームでありテープ（VTL）ではないため、バックアップソフトの設定変更が必要" },
        { ok: true, text: "既存ソフトから<b class=\"key\">VTL</b>として見え、アーカイブ先に Deep Archive を選べる" },
        { ok: false, text: "NFS への書き出しに変更が必要で、「手順を変えない」要件を満たさない" },
        { ok: false, text: "毎月の物理輸送は運用負荷が高く、テープ運用の置き換えにならない" },
      ],
      tip: "「物理テープ」「既存バックアップソフトのまま」→ Tape Gateway"
    },
    {
      id: "c05-mc-09",
      stem: "ある企業は、オンプレミスの NAS（NFS）にある 40TB のファイルを Amazon EFS に移行し、カットオーバーまでの2週間は毎晩差分を同期したい。データセンターと AWS 間には 1Gbps の Direct Connect がある。運用負荷が最も少ない方法はどれか。",
      choices: [
        "AWS DataSync エージェントをオンプレミスに導入し、NFS から EFS へのスケジュールタスクを作成する",
        "AWS Snowball Edge を注文してデータをコピーし、AWS に返送する",
        "EC2 から NAS を NFS マウントし、cron で rsync を実行する",
        "AWS Transfer Family の SFTP サーバーを作成し、スクリプトで転送する",
      ],
      answer: ["A"], selectCount: 1, domain: 3, src: 3370,
      choiceExplain: [
        { ok: true, text: "NFS→EFS をネイティブサポート。スケジュール・差分転送・整合性検証を自動化" },
        { ok: false, text: "1回限りのオフライン移行向けで、毎晩の差分同期ができない（1Gbpsなら回線で数日で転送可能）" },
        { ok: false, text: "動作はするが自前スクリプトの運用・監視・リトライが必要" },
        { ok: false, text: "取引先とのファイル受け渡し向けで、大量移行・同期の仕組みではない" },
      ],
      tip: "「オンライン」「定期同期」「NFS/SMB → S3/EFS/FSx」→ DataSync"
    },
    {
      id: "c05-mc-10",
      stem: "ある企業は、取引先から毎日 CSV ファイルを受け取っている。取引先は既存の SFTP クライアントとスクリプトを使っており、変更できない。現在のオンプレミス SFTP サーバーを廃止し、ファイルを S3 に保存して後続処理したい。運用負荷が最も少ない方法はどれか。",
      choices: [
        "EC2 上に SFTP サーバーを構築し、cron で S3 にコピーする",
        "AWS Transfer Family で SFTP 対応サーバーを作成し、ストレージに S3 を指定する",
        "取引先に IAM ユーザーを発行し、AWS CLI で S3 にアップロードしてもらう",
        "S3 の署名付き URL を毎日発行して取引先にメールで送る",
      ],
      answer: ["B"], selectCount: 1, domain: 3, src: 3382,
      choiceExplain: [
        { ok: false, text: "EC2 の OS パッチ・可用性管理が必要で運用負荷が高い" },
        { ok: true, text: "フルマネージドの SFTP エンドポイントで、取引先は既存クライアントのまま S3 へ直接保存" },
        { ok: false, text: "取引先のツール変更が必要で要件違反" },
        { ok: false, text: "SFTP クライアントは使えず、毎日の URL 発行という運用が増える" },
      ],
      tip: "「SFTP/FTPS」「クライアント変更不可」「保存先は S3/EFS」→ Transfer Family"
    },
    {
      id: "c05-mc-11",
      stem: "ある企業は、オンプレミスの VMware 上で稼働する 150 台のアプリケーションサーバーを、アプリケーションを変更せずに EC2 へ移行したい。カットオーバー時のダウンタイムは最小限にし、事前に移行先でテストも行いたい。最も適切なサービスはどれか。",
      choices: [
        "AWS Application Migration Service（MGN）",
        "AWS Database Migration Service（DMS）",
        "AWS DataSync",
        "VM Import/Export で各 VM イメージを手動でインポートする",
      ],
      answer: ["A"], selectCount: 1, domain: 2, src: 3394,
      choiceExplain: [
        { ok: true, text: "ブロックレベル継続レプリケーション、テスト起動、数分のカットオーバーで大規模リホストに最適" },
        { ok: false, text: "DMS はデータベースの移行用。サーバー全体は移せない" },
        { ok: false, text: "DataSync はファイル/オブジェクトの転送で、サーバー（OS・アプリ）ごとの移行はできない" },
        { ok: false, text: "1台ずつのイメージ移行で、継続レプリケーションがないためダウンタイムと手間が大きい" },
      ],
      tip: "「リフト＆シフト」「多数サーバー」「最小ダウンタイム」→ MGN"
    },
    {
      id: "c05-mc-12",
      stem: "あるデータ分析チームは、S3 に保存する多様なデータセットのアクセスパターンを予測できない。あるデータは数か月アクセスされない一方、突然頻繁に参照されることもある。オブジェクトの大半は数MB以上である。取り出しの遅延は許容できず、運用の手間なくストレージコストを最適化したい。最も適切な方法はどれか。",
      choices: [
        "S3 Standard に保存し、30日後に S3 Standard-IA に移行するライフサイクルルールを設定する",
        "S3 Intelligent-Tiering に保存する",
        "S3 One Zone-IA に保存する",
        "S3 Glacier Flexible Retrieval に保存し、必要に応じて迅速取り出しを使う",
      ],
      answer: ["B"], selectCount: 1, domain: 4, src: 3406,
      choiceExplain: [
        { ok: false, text: "突然頻繁にアクセスされると IA の取り出し料金がかさむ。固定ルールは予測不能パターンに不向き" },
        { ok: true, text: "アクセス状況に応じて自動階層化し、取り出し料金なし。予測不能パターンの第一候補" },
        { ok: false, text: "単一AZで耐障害性が低く、頻繁アクセス時の取り出し料金も発生" },
        { ok: false, text: "復元が必要で「遅延を許容できない」要件に反する" },
      ],
      tip: "「予測できない」「変動する」→ Intelligent-Tiering。128KB未満が多い場合は効果が薄い点も覚える"
    },
    {
      id: "c05-mc-13",
      stem: "ある企業は、us-east-1 の S3 バケット（バージョニング有効）のデータを、DR 目的で eu-west-1 のバケット（バージョニング有効）へ複製したい。新規オブジェクトの99.99%を15分以内に複製するSLAが必要で、すでに保存されている数億個の既存オブジェクトも複製対象とする。最も運用負荷の少ない組み合わせはどれか。（2つ選択）",
      choices: [
        "S3 Same-Region Replication（SRR）を設定する",
        "S3 Replication Time Control（RTC）を有効にした Cross-Region Replication（CRR）を設定する",
        "S3 Transfer Acceleration を両バケットで有効にする",
        "S3 Batch Replication で既存オブジェクトを複製する",
        "AWS DataSync のタスクを1時間ごとに実行する",
      ],
      answer: ["B","D"], selectCount: 2, domain: 2, src: 3418,
      choiceExplain: [
        { ok: false, text: "SRR は同一リージョン内の複製で、別リージョンへの DR にならない" },
        { ok: true, text: "CRR＋RTC で <b class=\"key\">99.99% を15分以内</b>の SLA 付き複製" },
        { ok: false, text: "Transfer Acceleration はクライアントからのアップロード高速化で、レプリケーションとは無関係" },
        { ok: true, text: "レプリケーション設定前の<b class=\"key\">既存オブジェクト</b>は Batch Replication で複製する" },
        { ok: false, text: "1時間ごとでは15分 SLA を満たせず、数億オブジェクトのスキャンも重い" },
      ],
      tip: "「15分SLA」→ RTC、「既存オブジェクト」→ Batch Replication をセットで覚える"
    },
    {
      id: "c05-mc-14",
      stem: "ある企業は、AWS Organizations 配下の50アカウントで EC2、EBS、RDS、DynamoDB、EFS を利用している。全アカウントのバックアップを一元的なポリシーで管理し、ランサムウェア対策としてバックアップを誰も削除できないようにし、別リージョンにもコピーを保持したい。最も運用負荷の少ない組み合わせはどれか。（2つ選択）",
      choices: [
        "各アカウントで Amazon Data Lifecycle Manager のポリシーを作成する",
        "AWS Backup のバックアップポリシーを Organizations から適用し、クロスリージョンコピーを設定する",
        "AWS Backup Vault Lock をコンプライアンスモードで設定する",
        "各リソースのスナップショットを Lambda で取得し、S3 にエクスポートする",
        "S3 Object Lock をガバナンスモードで設定したバケットにスナップショットを保存する",
      ],
      answer: ["B","C"], selectCount: 2, domain: 1, src: 3432,
      choiceExplain: [
        { ok: false, text: "DLM は EBS スナップショット/AMI 向けで、RDS・DynamoDB・EFS を一元管理できない" },
        { ok: true, text: "Organizations 連携で全アカウントに一括適用し、クロスリージョンコピーも自動化" },
        { ok: true, text: "コンプライアンスモードの Vault Lock でルートを含め誰もバックアップを削除できない" },
        { ok: false, text: "カスタム開発の運用負荷が大きく、削除防止の保証もない" },
        { ok: false, text: "EBS/RDS スナップショットは任意の S3 バケットに保存できず、ガバナンスモードは解除可能" },
      ],
      tip: "「複数サービス・複数アカウント」→ AWS Backup、「誰も削除不可」→ Vault Lock コンプライアンス"
    },
    {
      id: "c05-mc-15",
      stem: "ある企業は、S3 に置いた静的ウェブサイトを独自ドメイン（www.example.com）で HTTPS 配信したい。セキュリティ要件として S3 バケットは公開せず、ブロックパブリックアクセスを有効のままにする。必要な対応はどれか。（2つ選択）",
      choices: [
        "S3 の静的ウェブサイトホスティングを有効にし、ウェブサイトエンドポイントで HTTPS を有効にする",
        "Amazon CloudFront ディストリビューションを作成し、Origin Access Control（OAC）で S3 バケットへのアクセスを CloudFront に限定する",
        "AWS Certificate Manager（ACM）で us-east-1 リージョンに証明書を発行し、CloudFront に関連付ける",
        "署名付き URL を発行してすべての訪問者に配布する",
        "S3 Transfer Acceleration を有効にして独自ドメインを設定する",
      ],
      answer: ["B","C"], selectCount: 2, domain: 1, src: 3446,
      choiceExplain: [
        { ok: false, text: "ウェブサイトエンドポイントは <b class=\"key\">HTTPのみ</b>で、公開設定も必要になり要件に反する" },
        { ok: true, text: "OAC で CloudFront からのみ S3 にアクセスさせ、バケットは非公開のまま配信" },
        { ok: true, text: "CloudFront で使う ACM 証明書は <b class=\"key\">us-east-1</b> で発行する必要がある" },
        { ok: false, text: "一般公開サイトの全訪問者に期限付き URL を配るのは非現実的" },
        { ok: false, text: "Transfer Acceleration は転送高速化機能で、HTTPS の独自ドメイン配信手段ではない" },
      ],
      tip: "「S3＋HTTPS＋非公開」→ CloudFront＋OAC＋ACM（us-east-1）の3点セット"
    },
  ]
});
window.DATA.chapters.push({
  no: 6,
  title: "データベース",
  domainNote: "ドメイン2・3",
  src: [3461,4187],
  lessons: [
    { id: "c06-l01", title: "DB選定とAmazon RDS", pages: [
      {
        id: "c06-l01-p01",
        title: "DB選定の全体像（まずここを押さえる） ①",
        html: "<ul><li>試験の問いは「<b class=\"key\">どのDBを選ぶか</b>」＋「<b class=\"key\">そのDBのどの機能を使うか</b>」の2段構え</li><li><b class=\"key\">リレーショナル（SQL・JOIN・トランザクション）</b> → <b class=\"key\">Amazon RDS</b> / <b class=\"key\">Amazon Aurora</b></li></ul>",
        oxIds: [],
        src: [3466,3467]
      },
      {
        id: "c06-l01-p02",
        title: "DB選定の全体像（まずここを押さえる） ②",
        html: "<ul><li><b class=\"key\">キーバリュー・大規模・ミリ秒・サーバーレス</b> → <b class=\"key\">Amazon DynamoDB</b></li><li><b class=\"key\">インメモリキャッシュ・マイクロ秒〜サブミリ秒</b> → <b class=\"key\">Amazon ElastiCache</b> / DAX</li><li><b class=\"key\">インメモリかつ耐久性あるプライマリDB</b> → <b class=\"key\">Amazon MemoryDB</b></li></ul>",
        oxIds: [],
        src: [3468,3470]
      },
      {
        id: "c06-l01-p03",
        title: "DB選定の全体像（まずここを押さえる） ③",
        html: "<ul><li><b class=\"key\">分析（OLAP）・データウェアハウス</b> → <b class=\"key\">Amazon Redshift</b></li><li><b class=\"key\">グラフ（関係性）</b> → Amazon Neptune ／ <b class=\"key\">ドキュメント（MongoDB互換）</b> → Amazon DocumentDB</li><li><b class=\"key\">Cassandra互換</b> → Amazon Keyspaces ／ <b class=\"key\">時系列</b> → Amazon Timestream</li><li><span class=\"badge b-freq\">頻出</span>「運用オーバーヘッド最小」→ マネージド／サーバーレス（DynamoDB、Aurora Serverless v2 など）</li><li><span class=\"badge b-cmp\">比較</span>EC2上に自前でDBを建てるのは「OSやDBの細かい制御が必須」の場合のみ（通常は不正解側）</li></ul>",
        oxIds: [],
        src: [3471,3475]
      },
      {
        id: "c06-l01-p04",
        title: "Amazon RDS（基本） ①",
        html: "<ul><li><b class=\"key\">何か</b>：リレーショナルDBのマネージドサービス。パッチ適用・バックアップ・フェイルオーバーをAWSが担う</li><li>対応エンジン：<b class=\"key\">MySQL / PostgreSQL / MariaDB / Oracle / SQL Server / IBM Db2</b>（＋Aurora）</li><li>ユーザーは<b class=\"key\">OSにログインできない</b>（SSH不可）。OSレベルの操作が必要なら RDS Custom か EC2</li><li>ストレージ：EBS ベース（<b class=\"key\">gp2 / gp3 / io1 / io2</b>）。IOPS重視なら Provisioned IOPS（io1/io2）</li></ul>",
        oxIds: [],
        src: [3478,3481]
      },
      {
        id: "c06-l01-p05",
        title: "Amazon RDS（基本） ②",
        html: "<ul><li>VPC 内のサブネット（<b class=\"key\">DBサブネットグループ</b>）に配置。アクセス制御は<b class=\"key\">セキュリティグループ</b></li><li>インスタンスは<b class=\"key\">停止可能だが最大7日</b>で自動起動する（長期停止はスナップショット→削除が定石）</li><li>料金：インスタンス時間＋ストレージ＋I/O（一部）＋バックアップ超過分。常時稼働は<b class=\"key\">リザーブドインスタンス</b>で割安</li></ul>",
        oxIds: [],
        src: [3482,3484]
      },
      {
        id: "c06-l01-p06",
        title: "RDS Multi-AZ（可用性） ①",
        html: "<ul><li>目的は<b class=\"key\">高可用性（HA）・障害対策</b>。読み取り性能向上が目的ではない（ここが最大のひっかけ）</li><li><b class=\"key\">Multi-AZ DB インスタンス配置</b>（従来型）<ul><li>プライマリ1台＋別AZに<b class=\"key\">スタンバイ1台</b>。<b class=\"key\">同期レプリケーション</b></li><li><b class=\"key\">スタンバイは読み取り不可</b>（接続できない。待機専用）</li></ul></li></ul>",
        oxIds: ["c06-ox-01"],
        src: [3487,3490]
      },
      {
        id: "c06-l01-p07",
        title: "RDS Multi-AZ（可用性） ②",
        html: "<ul><li>障害・メンテ時に<b class=\"key\">自動フェイルオーバー</b>（通常<b class=\"key\">1〜2分</b>）。<b class=\"key\">DNS（エンドポイント）は同じ</b>まま切替<ul><li>全エンジン対応</li></ul></li></ul>",
        oxIds: [],
        src: [3491,3492]
      },
      {
        id: "c06-l01-p08",
        title: "RDS Multi-AZ（可用性） ③",
        html: "<ul><li><b class=\"key\">Multi-AZ DB クラスター配置</b>（新型）<ul><li>ライター1台＋<b class=\"key\">読み取り可能なスタンバイ2台</b>、計<b class=\"key\">3AZ</b></li><li><b class=\"key\">MySQL / PostgreSQL</b> のみ。フェイルオーバーは通常<b class=\"key\">35秒未満</b></li><li><b class=\"key\">リーダーエンドポイント</b>でスタンバイに読み取りを分散できる</li></ul></li></ul>",
        oxIds: ["c06-ox-02"],
        src: [3493,3496]
      },
      {
        id: "c06-l01-p09",
        title: "RDS Multi-AZ（可用性） ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>「スタンバイを読み取りに使いたい」→ <b class=\"key\">Multi-AZ DB クラスター</b>（またはリードレプリカ）</li><li>シングルAZ → Multi-AZ への変更は<b class=\"key\">オンラインで可能</b>（停止不要）</li></ul>",
        oxIds: [],
        src: [3497,3498]
      },
      {
        id: "c06-l01-p10",
        title: "RDS リードレプリカ（読み取りスケール） ①",
        html: "<ul><li>目的は<b class=\"key\">読み取り負荷の分散</b>（レポート・分析クエリ・読み取り中心アプリ）</li><li><b class=\"key\">非同期レプリケーション</b> → レプリカは<b class=\"key\">結果整合性</b>（わずかに遅れる）</li><li>最大数：<b class=\"key\">MySQL / MariaDB / PostgreSQL は最大15台</b>（Oracle / SQL Server は最大5台）</li><li><b class=\"key\">同一リージョン／クロスリージョン</b>どちらも作成可能<ul><li>クロスリージョン：DR用途、遠隔地ユーザーの読み取り低遅延化</li><li>同一リージョン内のレプリケーション転送は無料、<b class=\"key\">クロスリージョンは転送料金が発生</b></li></ul></li></ul>",
        oxIds: [],
        src: [3501,3506]
      },
      {
        id: "c06-l01-p11",
        title: "RDS リードレプリカ（読み取りスケール） ②",
        html: "<ul><li><b class=\"key\">昇格（Promote）</b>：レプリカを独立したスタンドアロンDBへ（<b class=\"key\">手動</b>、レプリケーションは切れる）<ul><li>DR戦略：クロスリージョンのレプリカを昇格させて別リージョンで再開</li></ul></li><li>レプリカ自体を <b class=\"key\">Multi-AZ</b> にすることも可能</li><li>アプリ側は<b class=\"key\">レプリカごとのエンドポイント</b>に接続先を書き分ける必要がある</li><li><span class=\"badge b-cmp\">比較</span>Multi-AZ＝同期・HA・自動切替／リードレプリカ＝非同期・読み取り分散・手動昇格</li></ul>",
        oxIds: ["c06-ox-03","c06-ox-04"],
        src: [3507,3511]
      },
      {
        id: "c06-l01-p12",
        title: "RDS バックアップ・スナップショット ①",
        html: "<ul><li><b class=\"key\">自動バックアップ</b><ul><li>日次スナップショット＋<b class=\"key\">トランザクションログ</b>を S3 に保存（ユーザーからは見えない領域）</li><li>保持期間：<b class=\"key\">0〜35日</b>（0で無効）</li><li><b class=\"key\">ポイントインタイムリカバリ（PITR）</b>：保持期間内の任意時点へ（通常<b class=\"key\">直近5分前</b>まで）</li><li>復元は常に<b class=\"key\">新しいDBインスタンス</b>として作成（既存DBは上書きされない）→ エンドポイントが変わる</li><li>DB削除時は自動バックアップも原則削除（保持オプションあり）</li></ul></li></ul>",
        oxIds: ["c06-ox-06"],
        src: [3514,3519]
      },
      {
        id: "c06-l01-p13",
        title: "RDS バックアップ・スナップショット ②",
        html: "<ul><li><b class=\"key\">手動スナップショット</b><ul><li>ユーザーが任意に取得。<b class=\"key\">削除するまで無期限に保持</b></li><li>35日を超える長期保管・コンプライアンス用途はこちら（または <b class=\"key\">AWS Backup</b>）</li><li><b class=\"key\">別リージョンへコピー</b>、<b class=\"key\">別アカウントと共有</b>が可能</li></ul></li></ul>",
        oxIds: ["c06-ox-05"],
        src: [3520,3523]
      },
      {
        id: "c06-l01-p14",
        title: "RDS バックアップ・スナップショット ③",
        html: "<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>デフォルトの AWS マネージドキー（aws/rds）で暗号化したスナップショットは<b class=\"key\">他アカウント共有不可</b></span><ul><li>共有するには<b class=\"key\">カスタマーマネージドキー（CMK）</b>で暗号化し、キーポリシーで相手に許可</li></ul></li><li>自動バックアップの<b class=\"key\">クロスリージョンレプリケーション</b>も設定可能（DR用）</li></ul>",
        oxIds: [],
        src: [3524,3526]
      },
      {
        id: "c06-l01-p15",
        title: "RDS 暗号化 ①",
        html: "<ul><li>保管時暗号化：<b class=\"key\">AWS KMS</b>。ストレージ・自動バックアップ・スナップショット・レプリカ・ログすべて対象</li><li><b class=\"key\">作成時にしか有効化できない</b>（既存の非暗号化DBを直接暗号化はできない）</li><li>既存DBを暗号化する手順（頻出）<ul><li>①スナップショット取得 → ②<b class=\"key\">スナップショットを暗号化オプション付きでコピー</b> → ③そこから復元</li><li>→ 新DBへ切替（DMS で差分同期してダウンタイム短縮も可）</li></ul></li></ul>",
        oxIds: ["c06-ox-07"],
        src: [3529,3533]
      },
      {
        id: "c06-l01-p16",
        title: "RDS 暗号化 ②",
        html: "<ul><li>暗号化DBのリードレプリカは<b class=\"key\">必ず暗号化</b>（非暗号化レプリカは作れない）<ul><li>クロスリージョンレプリカは<b class=\"key\">宛先リージョンのKMSキー</b>を指定</li></ul></li><li>転送中の暗号化：<b class=\"key\">SSL/TLS</b>（パラメータで強制可能）</li><li>Oracle / SQL Server は <b class=\"key\">TDE（透過的データ暗号化）</b>も利用可能</li></ul>",
        oxIds: ["c06-ox-08"],
        src: [3534,3537]
      },
      {
        id: "c06-l01-p17",
        title: "RDS ストレージ自動スケーリング",
        html: "<ul><li>空き容量が少なくなると<b class=\"key\">自動でストレージ拡張</b>（ダウンタイムなし）</li><li>発動条件：空き<b class=\"key\">10%未満</b>が<b class=\"key\">5分以上</b>継続、かつ前回変更から<b class=\"key\">6時間以上</b>経過</li><li><b class=\"key\">最大ストレージしきい値</b>を設定して青天井を防ぐ</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>ストレージは<b class=\"key\">拡張のみ</b>。自動で縮小はしない</span></li></ul>",
        oxIds: ["c06-ox-09"],
        src: [3540,3543]
      },
      {
        id: "c06-l01-p18",
        title: "IAM DB 認証 ①",
        html: "<ul><li><b class=\"key\">MySQL / MariaDB / PostgreSQL</b>（Aurora含む）で、パスワードの代わりに <b class=\"key\">IAM認証トークン</b>で接続</li><li>トークンの有効期間は<b class=\"key\">15分</b>。通信は <b class=\"key\">SSL/TLS 必須</b></li></ul>",
        oxIds: [],
        src: [3546,3547]
      },
      {
        id: "c06-l01-p19",
        title: "IAM DB 認証 ②",
        html: "<ul><li>EC2 / Lambda の <b class=\"key\">IAMロール</b>で接続 → DBパスワードをコードに持たない</li><li><span class=\"badge b-cmp\">比較</span>パスワードを使い続けつつ<b class=\"key\">自動ローテーション</b>したい → <b class=\"key\">AWS Secrets Manager</b></li></ul>",
        oxIds: [],
        src: [3548,3549]
      },
      {
        id: "c06-l01-p20",
        title: "Amazon RDS Proxy",
        html: "<ul><li><b class=\"key\">何か</b>：RDS / Aurora 前段のフルマネージド<b class=\"key\">コネクションプーリング</b></li><li>使いどころ：<b class=\"key\">Lambda</b> など大量の短命接続 → DBの接続数枯渇（too many connections）を防ぐ</li><li>フェイルオーバー時間を短縮（接続を保持し新プライマリへ振り替え）</li><li><b class=\"key\">Secrets Manager</b> で認証情報を管理、<b class=\"key\">IAM認証の強制</b>が可能</li><li>VPC 内からのみアクセス（パブリックアクセス不可）、サーバーレスで自動スケール</li><li><span class=\"badge b-freq\">頻出</span>「Lambda から RDS に接続、ピーク時に接続エラー」→ <b class=\"key\">RDS Proxy</b></li></ul>",
        oxIds: ["c06-ox-11"],
        src: [3552,3557]
      },
      {
        id: "c06-l01-p21",
        title: "RDS Custom",
        html: "<ul><li><b class=\"key\">Oracle / SQL Server</b> 向け。<b class=\"key\">OS・DBへの管理者アクセス</b>（SSH・カスタムパッチ・独自エージェント導入）が可能</li><li>「レガシーアプリが OS の特権アクセスを要求するがマネージドの恩恵も欲しい」→ RDS Custom</li><li><span class=\"badge b-cmp\">比較</span>通常の RDS は OS アクセス不可／EC2 自前構築は全部自分で運用</li></ul>",
        oxIds: [],
        src: [3560,3562]
      },
      {
        id: "c06-l01-p22",
        title: "Performance Insights / 監視",
        html: "<ul><li><b class=\"key\">Performance Insights</b>：DB負荷（<b class=\"key\">DB Load・待機イベント・トップSQL</b>）を可視化し、ボトルネックSQLを特定<ul><li>無料枠は<b class=\"key\">7日間</b>保持。長期保持は有料（CloudWatch Database Insights への統合が進行中）</li></ul></li><li><b class=\"key\">拡張モニタリング（Enhanced Monitoring）</b>：OS レベルのメトリクス（プロセス別CPU・メモリ）を最短1秒粒度</li><li>CloudWatch の標準メトリクスはハイパーバイザレベル（CPU、FreeStorageSpace、ReadIOPS 等）</li><li><span class=\"badge b-cmp\">比較</span>「どのSQLが遅いか」→ Performance Insights ／「OSのプロセス単位」→ 拡張モニタリング</li></ul>",
        oxIds: [],
        src: [3565,3569]
      },
      {
        id: "c06-l01-p23",
        title: "RDS Blue/Green デプロイ",
        html: "<ul><li>本番（ブルー）を複製した<b class=\"key\">ステージング環境（グリーン）</b>を作り、論理レプリケーションで同期</li><li>グリーンでメジャーバージョンアップ・パラメータ変更・スキーマ変更を検証 → <b class=\"key\">スイッチオーバー</b></li><li>スイッチオーバーは通常<b class=\"key\">1分未満</b>。エンドポイント名は維持され、アプリ変更不要</li><li>対象：<b class=\"key\">RDS for MySQL / MariaDB / PostgreSQL、Aurora MySQL / Aurora PostgreSQL</b></li><li><span class=\"badge b-freq\">頻出</span>「メジャーバージョンアップを<b class=\"key\">最小ダウンタイム・安全</b>に」→ Blue/Green デプロイ</li></ul>",
        oxIds: [],
        src: [3572,3576]
      },
    ] },
    { id: "c06-l02", title: "Amazon AuroraとDynamoDB", pages: [
      {
        id: "c06-l02-p01",
        title: "Amazon Aurora（アーキテクチャ） ①",
        html: "<ul><li><b class=\"key\">何か</b>：AWS独自設計のクラウドネイティブRDB。<b class=\"key\">MySQL互換 / PostgreSQL互換</b></li><li>性能：MySQL比<b class=\"key\">最大5倍</b>、PostgreSQL比<b class=\"key\">最大3倍</b>（AWS公称）</li><li><b class=\"key\">共有ストレージ（クラスターボリューム）</b><ul><li>データを<b class=\"key\">3AZに6コピー</b>（各AZに2コピー）</li></ul></li></ul>",
        oxIds: ["c06-ox-12"],
        src: [3579,3582]
      },
      {
        id: "c06-l02-p02",
        title: "Amazon Aurora（アーキテクチャ） ②",
        html: "<ul><li>書き込みは<b class=\"key\">6中4</b>、読み取りは<b class=\"key\">6中3</b>のクォーラム → <b class=\"key\">1AZ全損＋1コピー損失でも読み取り継続</b></li></ul>",
        oxIds: [],
        src: [3583,3583]
      },
      {
        id: "c06-l02-p03",
        title: "Amazon Aurora（アーキテクチャ） ③",
        html: "<ul><li><b class=\"key\">10 GiB 単位で自動拡張</b>（事前のサイズ指定不要、最大 <b class=\"key\">256 TiB</b>。2025年7月に128 TiBから倍増。古い問題では128 TiB）<ul><li>自己修復（ピアからの自動修復）、S3 へ継続的バックアップ</li></ul></li><li>コンピュートとストレージが<b class=\"key\">分離</b> → レプリカはストレージを共有するのでレプリカ遅延が小さい（通常<b class=\"key\">数十ミリ秒</b>以下）</li></ul>",
        oxIds: [],
        src: [3584,3586]
      },
      {
        id: "c06-l02-p04",
        title: "Aurora レプリカ・フェイルオーバー・エンドポイント ①",
        html: "<ul><li><b class=\"key\">Aurora レプリカは最大15台</b>（同一リージョン内）。読み取り分散と<b class=\"key\">フェイルオーバー先を兼ねる</b></li><li>フェイルオーバー：レプリカを自動昇格。通常<b class=\"key\">30秒程度</b>以内<ul><li><b class=\"key\">昇格優先度（ティア 0〜15）</b>で昇格先を制御（数字が小さいほど優先）</li><li>レプリカがない場合は新規インスタンスを作成（時間がかかる）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>RDSと違い、Aurora は<b class=\"key\">レプリカ＝フェイルオーバー先</b>（別途スタンバイは不要）</li></ul>",
        oxIds: ["c06-ox-13"],
        src: [3589,3593]
      },
      {
        id: "c06-l02-p05",
        title: "Aurora レプリカ・フェイルオーバー・エンドポイント ②",
        html: "<ul><li><b class=\"key\">エンドポイント種別</b><ul><li><b class=\"key\">クラスターエンドポイント（ライター）</b>：常に現在のプライマリを指す。書き込み用</li><li><b class=\"key\">リーダーエンドポイント</b>：全レプリカに<b class=\"key\">接続を負荷分散</b>。読み取り用</li><li><b class=\"key\">カスタムエンドポイント</b>：特定インスタンスのグループ（例：分析用の大きいレプリカだけ）</li><li><b class=\"key\">インスタンスエンドポイント</b>：個別インスタンス直指定（通常は使わない）</li></ul></li></ul>",
        oxIds: ["c06-ox-14"],
        src: [3594,3598]
      },
      {
        id: "c06-l02-p06",
        title: "Aurora レプリカ・フェイルオーバー・エンドポイント ③",
        html: "<ul><li><b class=\"key\">Aurora Auto Scaling</b>：CPU・接続数に応じてレプリカ数を自動増減</li></ul>",
        oxIds: [],
        src: [3599,3599]
      },
      {
        id: "c06-l02-p07",
        title: "Aurora Serverless v2 ①",
        html: "<ul><li>容量を <b class=\"key\">ACU（Aurora Capacity Unit）</b>単位で<b class=\"key\">秒単位・きめ細かく</b>自動スケール（0.5 ACU刻み）</li><li>1 ACU ≒ <b class=\"key\">2 GiB</b> メモリ＋相応のCPU・ネットワーク</li></ul>",
        oxIds: [],
        src: [3602,3603]
      },
      {
        id: "c06-l02-p08",
        title: "Aurora Serverless v2 ②",
        html: "<ul><li>最小 <b class=\"key\">0 ACU（自動一時停止）</b>〜最大 <b class=\"key\">256 ACU</b> を設定可能</li><li>プロビジョンドインスタンスと<b class=\"key\">同一クラスターに混在可能</b>（ライターはプロビジョンド、リーダーは v2 など）</li><li>Multi-AZ、リードレプリカ、Global Database にも対応</li><li><span class=\"badge b-freq\">頻出</span>「<b class=\"key\">負荷が予測不能・断続的・急激なスパイク</b>」「開発/テスト環境」→ Aurora Serverless v2</li><li><span class=\"badge b-cmp\">比較</span>負荷が安定・常時高い → プロビジョンド＋リザーブドの方が安い</li></ul>",
        oxIds: [],
        src: [3604,3608]
      },
      {
        id: "c06-l02-p09",
        title: "Aurora Global Database",
        html: "<ul><li><b class=\"key\">1つのプライマリリージョン（読み書き）＋複数のセカンダリリージョン（読み取り専用）</b></li><li>ストレージ層でレプリケーション、遅延は通常<b class=\"key\">1秒未満</b></li><li>DR目標：<b class=\"key\">RPO 約1秒、RTO 1分未満</b>（リージョン障害時にセカンダリを昇格）</li><li>各セカンダリリージョンにも<b class=\"key\">最大16台</b>の読み取りインスタンス</li><li><b class=\"key\">書き込み転送（Write Forwarding）</b>：セカンダリへの書き込みをプライマリへ転送</li><li><span class=\"badge b-cmp\">比較</span>RDS のクロスリージョンリードレプリカより低遅延・高速フェイルオーバー</li><li><span class=\"badge b-freq\">頻出</span>「リレーショナル＋グローバル読み取り低遅延＋RPO秒・RTO分」→ Aurora Global Database</li></ul>",
        oxIds: ["c06-ox-16"],
        src: [3611,3617]
      },
      {
        id: "c06-l02-p10",
        title: "Aurora の便利機能 ①",
        html: "<ul><li><b class=\"key\">Backtrack（バックトラック）</b><ul><li><b class=\"key\">Aurora MySQL のみ</b>。クラスターを<b class=\"key\">過去の時点へ巻き戻す</b>（最大<b class=\"key\">72時間</b>）</li><li><b class=\"key\">新しいクラスターを作らず</b>その場で戻す → 誤DELETE・誤UPDATEから<b class=\"key\">数分で</b>復旧</li></ul></li></ul>",
        oxIds: ["c06-ox-15"],
        src: [3620,3622]
      },
      {
        id: "c06-l02-p11",
        title: "Aurora の便利機能 ②",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>PITR は<b class=\"key\">新クラスター</b>を作成（時間がかかり、エンドポイントも変わる）</li><li><b class=\"key\">クローン（Database Cloning）</b><ul><li><b class=\"key\">コピーオンライト</b>で高速・省容量に複製。本番データでテスト・分析する用途</li><li><span class=\"badge b-cmp\">比較</span>スナップショット復元より速く、変更分だけストレージ課金</li></ul></li><li><b class=\"key\">並列クエリ（Parallel Query）</b>：<b class=\"key\">Aurora MySQL</b> で分析クエリをストレージ層に分散処理</li></ul>",
        oxIds: [],
        src: [3623,3627]
      },
      {
        id: "c06-l02-p12",
        title: "Aurora の便利機能 ③",
        html: "<ul><li><b class=\"key\">Aurora I/O-Optimized</b>：I/O料金なしの構成。<b class=\"key\">I/O 多いワークロード</b>でコスト予測性向上</li><li><b class=\"key\">ゼロETL統合</b>：Aurora → <b class=\"key\">Redshift</b> へ ETL パイプラインなしでほぼリアルタイム連携</li><li><b class=\"key\">Aurora DSQL</b>：分散SQL・マルチリージョンのアクティブ/アクティブ（新サービス、試験の出題は少なめ）</li></ul>",
        oxIds: [],
        src: [3628,3630]
      },
      {
        id: "c06-l02-p13",
        title: "Amazon DynamoDB（基本・キー設計） ①",
        html: "<ul><li><b class=\"key\">何か</b>：フルマネージド・サーバーレスの<b class=\"key\">キーバリュー／ドキュメント型 NoSQL</b>。1桁ミリ秒の性能</li><li>データは自動で<b class=\"key\">3AZ</b>に複製。スキーマレス（属性は項目ごとに自由）</li><li><b class=\"key\">項目（Item）サイズ上限は 400 KB</b>（大きいデータは S3 に置きキーだけ格納）</li></ul>",
        oxIds: [],
        src: [3633,3635]
      },
      {
        id: "c06-l02-p14",
        title: "Amazon DynamoDB（基本・キー設計） ②",
        html: "<ul><li><b class=\"key\">プライマリキー</b><ul><li><b class=\"key\">パーティションキーのみ</b>（単純キー）、または<b class=\"key\">パーティションキー＋ソートキー</b>（複合キー）</li><li>パーティションキーのハッシュで物理パーティションに分散</li></ul></li></ul>",
        oxIds: [],
        src: [3636,3638]
      },
      {
        id: "c06-l02-p15",
        title: "Amazon DynamoDB（基本・キー設計） ③",
        html: "<ul><li><b class=\"key\">キー設計の鉄則</b>：<b class=\"key\">カーディナリティが高く均等にアクセスされる</b>値（ユーザーID、デバイスID等）<ul><li>偏ったキー（日付・ステータスなど少数値）→ <b class=\"key\">ホットパーティション</b>でスロットリング</li><li>対策：キーに<b class=\"key\">ランダムサフィックス（書き込みシャーディング）</b>、DAX でホットな読み取りを吸収</li></ul></li></ul>",
        oxIds: [],
        src: [3639,3641]
      },
      {
        id: "c06-l02-p16",
        title: "Amazon DynamoDB（基本・キー設計） ④",
        html: "<ul><li>操作：<b class=\"key\">GetItem</b>（キー指定）、<b class=\"key\">Query</b>（パーティションキー指定で効率的）、<b class=\"key\">Scan</b>（全件走査・非効率）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>JOIN・複雑な集計・アドホックSQLが必要なら DynamoDB は不向き（RDS/Aurora/Redshift）</span></li></ul>",
        oxIds: [],
        src: [3642,3643]
      },
      {
        id: "c06-l02-p17",
        title: "DynamoDB キャパシティモード・RCU/WCU計算 ①",
        html: "<ul><li><b class=\"key\">オンデマンド</b>：リクエスト単位課金。容量計画不要。<b class=\"key\">予測不能・新規・スパイク</b>向け（現在の推奨既定）</li><li><b class=\"key\">プロビジョンド</b>：RCU/WCU を事前設定。<b class=\"key\">予測可能な安定負荷</b>ならコスト効率良<ul><li><b class=\"key\">Auto Scaling</b> で目標使用率に応じて自動調整、<b class=\"key\">リザーブドキャパシティ</b>で割引</li></ul></li></ul>",
        oxIds: [],
        src: [3646,3648]
      },
      {
        id: "c06-l02-p18",
        title: "DynamoDB キャパシティモード・RCU/WCU計算 ②",
        html: "<ul><li><b class=\"key\">RCU（読み込み容量単位）</b><ul><li>1 RCU ＝ <b class=\"key\">4 KB</b> までの項目を<b class=\"key\">強い整合性</b>で<b class=\"key\">1回/秒</b></li><li><b class=\"key\">結果整合性</b>なら1 RCUで<b class=\"key\">2回/秒</b>（コスト半分）</li></ul></li></ul>",
        oxIds: [],
        src: [3649,3651]
      },
      {
        id: "c06-l02-p19",
        title: "DynamoDB キャパシティモード・RCU/WCU計算 ③",
        html: "<ul><li><b class=\"key\">トランザクション読み込み</b>は2 RCU/回</li><li><b class=\"key\">WCU（書き込み容量単位）</b><ul><li>1 WCU ＝ <b class=\"key\">1 KB</b> までの項目を<b class=\"key\">1回/秒</b>。トランザクション書き込みは2 WCU/回</li></ul></li></ul>",
        oxIds: [],
        src: [3652,3654]
      },
      {
        id: "c06-l02-p20",
        title: "DynamoDB キャパシティモード・RCU/WCU計算 ④",
        html: "<ul><li>計算手順：項目サイズを単位（読み4KB／書き1KB）で<b class=\"key\">切り上げ</b> → ×回数/秒<ul><li>例：6 KB を強い整合性で毎秒10回 → 6÷4＝1.5→<b class=\"key\">2</b> ×10 ＝ <b class=\"key\">20 RCU</b></li><li>同じく結果整合性なら → 20÷2 ＝ <b class=\"key\">10 RCU</b></li><li>例：2.5 KB を毎秒5回書き込み → <b class=\"key\">3</b> ×5 ＝ <b class=\"key\">15 WCU</b></li></ul></li></ul>",
        oxIds: ["c06-ox-17"],
        src: [3655,3658]
      },
      {
        id: "c06-l02-p21",
        title: "DynamoDB インデックス（LSI / GSI） ①",
        html: "<ul><li><b class=\"key\">LSI（ローカルセカンダリインデックス）</b><ul><li><b class=\"key\">同じパーティションキー＋別のソートキー</b></li><li><b class=\"key\">テーブル作成時にしか作れない</b>（後から追加・削除不可）。1テーブル<b class=\"key\">最大5個</b></li><li>テーブルの容量を共有。<b class=\"key\">強い整合性の読み取り可能</b></li><li>同一パーティションキー値あたり<b class=\"key\">10 GB</b>の制限（項目コレクション）</li></ul></li></ul>",
        oxIds: ["c06-ox-18"],
        src: [3661,3665]
      },
      {
        id: "c06-l02-p22",
        title: "DynamoDB インデックス（LSI / GSI） ②",
        html: "<ul><li><b class=\"key\">GSI（グローバルセカンダリインデックス）</b><ul><li><b class=\"key\">別のパーティションキー（＋任意のソートキー）</b>で全く別の検索軸</li><li><b class=\"key\">いつでも追加・削除可能</b>。デフォルト上限<b class=\"key\">20個</b>/テーブル</li></ul></li></ul>",
        oxIds: [],
        src: [3666,3668]
      },
      {
        id: "c06-l02-p23",
        title: "DynamoDB インデックス（LSI / GSI） ③",
        html: "<ul><li><b class=\"key\">独自のRCU/WCU</b>を持つ。読み取りは<b class=\"key\">結果整合性のみ</b><ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>GSI の書き込み容量が不足すると<b class=\"key\">ベーステーブルの書き込みもスロットリング</b></span></li></ul></li><li><span class=\"badge b-freq\">頻出</span>「作成済みテーブルで別属性でも検索したい」→ <b class=\"key\">GSI</b>（LSIは後付け不可）</li></ul>",
        oxIds: ["c06-ox-19"],
        src: [3669,3671]
      },
      {
        id: "c06-l02-p24",
        title: "DynamoDB Streams・TTL・トランザクション ①",
        html: "<ul><li><b class=\"key\">DynamoDB Streams</b>：項目の変更（追加・更新・削除）を時系列で記録。保持<b class=\"key\">24時間</b><ul><li><b class=\"key\">Lambda トリガー</b>で変更に反応（通知・集計・別システム連携）</li><li>長期保持・多数のコンシューマー → <b class=\"key\">Kinesis Data Streams for DynamoDB</b></li></ul></li></ul>",
        oxIds: ["c06-ox-21"],
        src: [3674,3676]
      },
      {
        id: "c06-l02-p25",
        title: "DynamoDB Streams・TTL・トランザクション ②",
        html: "<ul><li><b class=\"key\">TTL（Time To Live）</b>：項目ごとの有効期限（<b class=\"key\">エポック秒</b>の属性）を過ぎたら自動削除<ul><li><b class=\"key\">WCUを消費しない（無料）</b>。削除は即時ではなく通常<b class=\"key\">数日以内</b></li><li>TTL 削除も Streams に流れる → Lambda でアーカイブ（S3へ退避）可能</li><li>用途：セッション、一時トークン、古いログの自動削除</li></ul></li></ul>",
        oxIds: ["c06-ox-20"],
        src: [3677,3680]
      },
      {
        id: "c06-l02-p26",
        title: "DynamoDB Streams・TTL・トランザクション ③",
        html: "<ul><li><b class=\"key\">トランザクション</b>：TransactWriteItems / TransactGetItems で複数項目を <b class=\"key\">ACID</b> 処理<ul><li>1トランザクション最大<b class=\"key\">100項目</b>、合計<b class=\"key\">4 MB</b>。容量は通常の<b class=\"key\">2倍</b>消費</li></ul></li></ul>",
        oxIds: [],
        src: [3681,3682]
      },
      {
        id: "c06-l02-p27",
        title: "DynamoDB グローバルテーブル・バックアップ・DAX ①",
        html: "<ul><li><b class=\"key\">グローバルテーブル</b>：複数リージョンに複製する<b class=\"key\">マルチリージョン・マルチアクティブ（全リージョンで読み書き可）</b><ul><li>レプリケーションは通常<b class=\"key\">1秒程度</b>（結果整合性）。競合は<b class=\"key\">最終書き込み優先（last writer wins）</b></li><li>マルチリージョン強い整合性（MRSC）オプションも提供されている</li><li>前提：<b class=\"key\">DynamoDB Streams</b> を利用</li></ul></li></ul>",
        oxIds: ["c06-ox-22"],
        src: [3685,3688]
      },
      {
        id: "c06-l02-p28",
        title: "DynamoDB グローバルテーブル・バックアップ・DAX ②",
        html: "<ul><li><b class=\"key\">PITR（ポイントインタイムリカバリ）</b>：最大<b class=\"key\">35日間</b>の任意秒へ復元（<b class=\"key\">新しいテーブル</b>として）</li><li><b class=\"key\">オンデマンドバックアップ</b>：任意取得・長期保管。性能影響なし。AWS Backup で一元管理も可</li><li><b class=\"key\">S3 へのエクスポート</b>（PITR 必須、RCU 消費なし）→ Athena で分析</li></ul>",
        oxIds: [],
        src: [3689,3691]
      },
      {
        id: "c06-l02-p29",
        title: "DynamoDB グローバルテーブル・バックアップ・DAX ③",
        html: "<ul><li><b class=\"key\">DAX（DynamoDB Accelerator）</b><ul><li>DynamoDB 専用の<b class=\"key\">インメモリキャッシュ</b>。読み取りを<b class=\"key\">ミリ秒→マイクロ秒</b>へ</li><li><b class=\"key\">DynamoDB API 互換</b> → <b class=\"key\">アプリのコード変更がほぼ不要</b>（クライアント差し替え）</li><li>項目キャッシュ＋クエリキャッシュ、ライトスルー。VPC 内でクラスター稼働</li><li><span class=\"badge b-cmp\">比較</span>ElastiCache は汎用キャッシュでアプリ側にキャッシュロジック実装が必要</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>DAX は<b class=\"key\">強い整合性読み取りをキャッシュしない</b>（DynamoDB へ素通し）</span></li></ul></li></ul>",
        oxIds: ["c06-ox-23"],
        src: [3692,3697]
      },
    ] },
    { id: "c06-l03", title: "キャッシュ・データウェアハウス・専用DB・DB移行", pages: [
      {
        id: "c06-l03-p01",
        title: "Amazon ElastiCache ①",
        html: "<ul><li><b class=\"key\">何か</b>：マネージドなインメモリキャッシュ。<b class=\"key\">サブミリ秒</b>応答。DB の読み取り負荷軽減</li><li>エンジン：<b class=\"key\">Valkey / Redis OSS</b> と <b class=\"key\">Memcached</b>（<b class=\"key\">ElastiCache Serverless</b> も選択可）</li></ul>",
        oxIds: [],
        src: [3700,3701]
      },
      {
        id: "c06-l03-p02",
        title: "Amazon ElastiCache ②",
        html: "<ul><li><b class=\"key\">Valkey / Redis OSS</b><ul><li><b class=\"key\">レプリケーション・Multi-AZ 自動フェイルオーバー</b>、<b class=\"key\">バックアップ/復元・永続化</b></li><li>豊富なデータ構造：<b class=\"key\">ソート済みセット（ランキング・リーダーボード）</b>、リスト、ハッシュ、Pub/Sub</li><li>クラスターモードでシャーディング、<b class=\"key\">Global Datastore</b>でクロスリージョン</li><li><b class=\"key\">AUTH・保管時/転送中暗号化</b>、IAM 認証</li></ul></li></ul>",
        oxIds: ["c06-ox-24"],
        src: [3702,3706]
      },
      {
        id: "c06-l03-p03",
        title: "Amazon ElastiCache ③",
        html: "<ul><li><b class=\"key\">Memcached</b><ul><li><b class=\"key\">マルチスレッド</b>・シンプルなキー/値。ノード追加で水平スケール</li><li><b class=\"key\">レプリケーションなし・永続化なし・バックアップなし</b>（データ消失を許容するキャッシュ専用）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>「HA・永続化・ランキング・Pub/Sub」→ Valkey/Redis OSS ／「最もシンプル・マルチスレッド」→ Memcached</li></ul>",
        oxIds: [],
        src: [3707,3710]
      },
      {
        id: "c06-l03-p04",
        title: "Amazon ElastiCache ④",
        html: "<ul><li><b class=\"key\">キャッシュ戦略</b><ul><li><b class=\"key\">遅延読み込み（Lazy Loading / Cache-Aside）</b>：キャッシュミス時にDBから読みキャッシュへ書く<ul><li>長所：必要なデータだけキャッシュ ／ 短所：初回ミスの遅延、<b class=\"key\">データが古くなる（stale）</b></li></ul></li><li><b class=\"key\">ライトスルー（Write-Through）</b>：DB書き込み時に同時にキャッシュも更新<ul><li>長所：常に最新 ／ 短所：読まれないデータもキャッシュ、書き込み遅延増</li></ul></li><li><b class=\"key\">TTL を併用</b>して古いデータを自然に追い出すのが定石</li></ul></li></ul>",
        oxIds: ["c06-ox-25"],
        src: [3711,3716]
      },
      {
        id: "c06-l03-p05",
        title: "Amazon ElastiCache ⑤",
        html: "<ul><li><b class=\"key\">セッションストア</b>：ステートレスなWeb層（Auto Scaling）のセッションを外出し<ul><li>候補：<b class=\"key\">ElastiCache（Valkey/Redis OSS）</b> または <b class=\"key\">DynamoDB</b>（TTL で期限切れ削除）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>ALB のスティッキーセッションはインスタンス障害でセッション喪失 → 外部ストアが正解</span></li></ul></li></ul>",
        oxIds: [],
        src: [3717,3719]
      },
      {
        id: "c06-l03-p06",
        title: "Amazon MemoryDB",
        html: "<ul><li><b class=\"key\">Valkey / Redis OSS 互換</b>の<b class=\"key\">耐久性のあるインメモリ・プライマリデータベース</b></li><li><b class=\"key\">Multi-AZ のトランザクションログ</b>にすべての書き込みを永続化 → データ損失なし</li><li>読み取りマイクロ秒、書き込み1桁ミリ秒</li><li><span class=\"badge b-cmp\">比較</span>ElastiCache＝キャッシュ（裏に本体DBがある）／MemoryDB＝<b class=\"key\">それ自体が本体DB</b></li><li><span class=\"badge b-freq\">頻出</span>「Redis互換で、キャッシュでなく<b class=\"key\">耐久性のある主DB</b>として超低遅延」→ MemoryDB</li></ul>",
        oxIds: ["c06-ox-26"],
        src: [3722,3726]
      },
      {
        id: "c06-l03-p07",
        title: "Amazon Redshift（データウェアハウス） ①",
        html: "<ul><li><b class=\"key\">何か</b>：ペタバイト級の<b class=\"key\">列指向（カラムナ）・MPP</b>データウェアハウス。<b class=\"key\">OLAP・BI分析</b>向け</li><li><span class=\"badge b-cmp\">比較</span>RDS/Aurora＝OLTP（行単位の更新）／Redshift＝OLAP（大量集計）</li><li>構成：<b class=\"key\">リーダーノード</b>（クエリ計画）＋<b class=\"key\">コンピュートノード</b>（並列実行）</li></ul>",
        oxIds: [],
        src: [3729,3731]
      },
      {
        id: "c06-l03-p08",
        title: "Amazon Redshift（データウェアハウス） ②",
        html: "<ul><li><b class=\"key\">RA3 ノード</b>：<b class=\"key\">Redshift マネージドストレージ（RMS、S3ベース）</b>でコンピュートとストレージを分離<ul><li>ストレージ量と無関係にコンピュートだけスケール可能。<b class=\"key\">データ共有</b>にも対応</li></ul></li><li><b class=\"key\">Redshift Spectrum</b>：<b class=\"key\">S3 上のデータをロードせず</b>直接 SQL（外部テーブル）。Redshift クラスターが必要<ul><li><span class=\"badge b-cmp\">比較</span>クラスター不要で S3 を都度クエリ → <b class=\"key\">Amazon Athena</b></li></ul></li></ul>",
        oxIds: ["c06-ox-27"],
        src: [3732,3735]
      },
      {
        id: "c06-l03-p09",
        title: "Amazon Redshift（データウェアハウス） ③",
        html: "<ul><li><b class=\"key\">Redshift Serverless</b>：<b class=\"key\">RPU</b> 単位で自動スケール、使った分だけ課金。断続的な分析向け</li><li><b class=\"key\">同時実行スケーリング（Concurrency Scaling）</b>：同時クエリ急増時に一時クラスターを自動追加</li></ul>",
        oxIds: [],
        src: [3736,3737]
      },
      {
        id: "c06-l03-p10",
        title: "Amazon Redshift（データウェアハウス） ④",
        html: "<ul><li><b class=\"key\">スナップショット</b>：自動（既定保持<b class=\"key\">1日</b>、最大<b class=\"key\">35日</b>）＋手動（無期限）、S3 に保存<ul><li><b class=\"key\">クロスリージョンスナップショットコピー</b>を設定可能（DR用）</li><li>KMS 暗号化クラスターは、宛先リージョンでの<b class=\"key\">スナップショットコピー許可（grant）</b>が必要</li></ul></li></ul>",
        oxIds: [],
        src: [3738,3740]
      },
      {
        id: "c06-l03-p11",
        title: "Amazon Redshift（データウェアハウス） ⑤",
        html: "<ul><li><b class=\"key\">拡張VPCルーティング</b>：COPY/UNLOAD の通信を VPC 経由に強制（VPCエンドポイント・フローログで制御）</li><li>既定は単一AZ。RA3 では <b class=\"key\">Multi-AZ 配置</b>も選択可能</li></ul>",
        oxIds: [],
        src: [3741,3742]
      },
      {
        id: "c06-l03-p12",
        title: "その他の専用データベース ①",
        html: "<ul><li><b class=\"key\">Amazon Neptune</b>：フルマネージド<b class=\"key\">グラフDB</b><ul><li>クエリ言語：<b class=\"key\">Gremlin / openCypher / SPARQL</b></li><li>用途：<b class=\"key\">ソーシャルネットワーク、レコメンド、不正検知、ナレッジグラフ</b>（関係性の深い探索）</li><li>3AZ にストレージ複製、リードレプリカ<b class=\"key\">最大15台</b>、Neptune Serverless・Global Database あり</li></ul></li></ul>",
        oxIds: [],
        src: [3745,3748]
      },
      {
        id: "c06-l03-p13",
        title: "その他の専用データベース ②",
        html: "<ul><li><b class=\"key\">Amazon DocumentDB</b>：<b class=\"key\">MongoDB 互換</b>のドキュメントDB（JSON）<ul><li>Aurora 同様にストレージ分離・6コピー3AZ。<b class=\"key\">Elastic Clusters</b> で大規模シャーディング</li><li><span class=\"badge b-freq\">頻出</span>「オンプレの <b class=\"key\">MongoDB</b> をコード変更最小でマネージドへ」→ DocumentDB</li></ul></li><li><b class=\"key\">Amazon Keyspaces（for Apache Cassandra）</b>：<b class=\"key\">Cassandra 互換（CQL）</b>のサーバーレスDB<ul><li><span class=\"badge b-freq\">頻出</span>「Cassandra をサーバー管理なしで」→ Keyspaces</li></ul></li></ul>",
        oxIds: [],
        src: [3749,3753]
      },
      {
        id: "c06-l03-p14",
        title: "その他の専用データベース ③",
        html: "<ul><li><b class=\"key\">Amazon Timestream</b>：<b class=\"key\">時系列DB</b>（IoTセンサー、アプリメトリクス、DevOps）<ul><li><b class=\"key\">Timestream for InfluxDB</b>（マネージド InfluxDB）と Timestream for LiveAnalytics</li><li>LiveAnalytics は<b class=\"key\">2025年に新規顧客の受付を終了</b>（試験では「時系列＝Timestream」として出る）</li></ul></li></ul>",
        oxIds: [],
        src: [3754,3756]
      },
      {
        id: "c06-l03-p15",
        title: "その他の専用データベース ④",
        html: "<ul><li><b class=\"key\">Amazon QLDB</b>：改ざん不可・暗号学的に検証可能な<b class=\"key\">台帳DB</b><ul><li><span class=\"badge b-note\">注</span><b class=\"key\">2025年7月31日でサポート終了</b>。試験では「不変の変更履歴＝QLDB」が古い選択肢として出ることがある</li><li>移行先として AWS は <b class=\"key\">Aurora PostgreSQL</b> を推奨</li></ul></li><li><b class=\"key\">Amazon OpenSearch Service</b>：全文検索・ログ分析（DBの代わりではなく<b class=\"key\">検索</b>用途）</li></ul>",
        oxIds: ["c06-ox-29"],
        src: [3757,3760]
      },
      {
        id: "c06-l03-p16",
        title: "AWS DMS と AWS SCT（DB移行） ①",
        html: "<ul><li><b class=\"key\">AWS DMS（Database Migration Service）</b><ul><li>DB を AWS へ移行。<b class=\"key\">移行中もソースDBは稼働を継続</b>（ダウンタイム最小）</li><li><b class=\"key\">フルロード＋CDC（変更データキャプチャ）</b>で継続的に差分を同期 → 切替時だけ短時間停止</li><li><b class=\"key\">レプリケーションインスタンス</b>上でタスク実行（<b class=\"key\">DMS Serverless</b> も選択可）</li><li>ソース/ターゲット：主要商用・OSS DB、S3、DynamoDB、Redshift、Kinesis、OpenSearch など</li></ul></li></ul>",
        oxIds: [],
        src: [3763,3767]
      },
      {
        id: "c06-l03-p17",
        title: "AWS DMS と AWS SCT（DB移行） ②",
        html: "<ul><li><b class=\"key\">AWS SCT（Schema Conversion Tool）</b><ul><li><b class=\"key\">異種エンジン間</b>（例：Oracle → Aurora PostgreSQL、SQL Server → MySQL）で<b class=\"key\">スキーマ・コードを変換</b></li><li>ストアドプロシージャ・関数も変換し、変換できない箇所をレポート</li><li><b class=\"key\">DMS Schema Conversion</b>（コンソール統合版）も利用可能</li></ul></li></ul>",
        oxIds: ["c06-ox-28"],
        src: [3768,3771]
      },
      {
        id: "c06-l03-p18",
        title: "AWS DMS と AWS SCT（DB移行） ③",
        html: "<ul><li>移行パターン<ul><li><b class=\"key\">同種移行</b>（MySQL → RDS MySQL）：<b class=\"key\">DMS のみ</b>（またはネイティブツール）。SCT 不要</li><li><b class=\"key\">異種移行</b>（Oracle → Aurora PostgreSQL）：<b class=\"key\">SCT でスキーマ変換 → DMS でデータ移行</b></li></ul></li><li>大容量・低帯域 → <b class=\"key\">Snowball Edge</b> でデータ搬送＋DMS で差分同期</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>DMS 単体ではストアドプロシージャ等の<b class=\"key\">スキーマ変換はしない</b>（それは SCT）</span></li></ul>",
        oxIds: [],
        src: [3772,3776]
      },
      {
        id: "c06-l03-p19",
        title: "用途別DB選定フロー（試験直前用） ①",
        html: "<ul><li>SQL・トランザクション・JOIN が必要？<ul><li>はい → 既存エンジン互換で<b class=\"key\">手間少なく</b> → <b class=\"key\">RDS</b><ul><li>高性能・高可用・15レプリカ・グローバル → <b class=\"key\">Aurora</b></li><li>予測不能な負荷 → <b class=\"key\">Aurora Serverless v2</b></li><li>OS アクセス必須（Oracle/SQL Server）→ <b class=\"key\">RDS Custom</b></li></ul></li><li>分析・集計（OLAP）→ <b class=\"key\">Redshift</b>（S3 直接なら Spectrum／Athena）</li></ul></li></ul>",
        oxIds: [],
        src: [3779,3784]
      },
      {
        id: "c06-l03-p20",
        title: "用途別DB選定フロー（試験直前用） ②",
        html: "<ul><li>キーで引く大量アクセス・サーバーレス・無制限スケール → <b class=\"key\">DynamoDB</b><ul><li>マイクロ秒読み取り → <b class=\"key\">DAX</b> ／ マルチリージョン書き込み → <b class=\"key\">グローバルテーブル</b></li></ul></li><li>キャッシュ → <b class=\"key\">ElastiCache</b>（HA・永続化なら Valkey/Redis OSS、シンプルなら Memcached）</li><li>インメモリで耐久性のある主DB → <b class=\"key\">MemoryDB</b></li></ul>",
        oxIds: [],
        src: [3785,3788]
      },
      {
        id: "c06-l03-p21",
        title: "用途別DB選定フロー（試験直前用） ③",
        html: "<ul><li>関係性（友達の友達、不正の輪）→ <b class=\"key\">Neptune</b> ／ MongoDB → <b class=\"key\">DocumentDB</b></li><li>Cassandra → <b class=\"key\">Keyspaces</b> ／ 時系列 → <b class=\"key\">Timestream</b> ／ 全文検索 → <b class=\"key\">OpenSearch</b></li></ul>",
        oxIds: [],
        src: [3789,3790]
      },
    ] },
    { id: "c06-l04", title: "試験での出方と暗記数字", pages: [
      {
        id: "c06-l04-p01",
        title: "試験での出方 ①",
        html: "<ul><li><b class=\"key\">可用性 vs 読み取り性能</b>の区別（最頻出）<ul><li>「AZ障害時に自動フェイルオーバー」→ <b class=\"key\">Multi-AZ</b></li><li>「読み取りクエリでプライマリが高負荷」→ <b class=\"key\">リードレプリカ</b>（Aurora なら Aurora レプリカ）</li><li>「HA かつスタンバイも読み取りに使いたい」→ <b class=\"key\">Multi-AZ DB クラスター</b> または <b class=\"key\">Aurora</b></li></ul></li></ul>",
        oxIds: [],
        src: [3793,3796]
      },
      {
        id: "c06-l04-p02",
        title: "試験での出方 ②",
        html: "<ul><li><b class=\"key\">DR（リージョン障害）</b><ul><li>リレーショナルで RPO 秒・RTO 分 → <b class=\"key\">Aurora Global Database</b></li><li>RDS で低コストDR → <b class=\"key\">クロスリージョンリードレプリカ</b>（昇格）／スナップショットのクロスリージョンコピー</li><li>NoSQL でマルチリージョン読み書き → <b class=\"key\">DynamoDB グローバルテーブル</b></li></ul></li><li><b class=\"key\">接続問題</b>：「Lambda から大量接続」→ <b class=\"key\">RDS Proxy</b></li></ul>",
        oxIds: [],
        src: [3797,3801]
      },
      {
        id: "c06-l04-p03",
        title: "試験での出方 ③",
        html: "<ul><li><b class=\"key\">認証</b>：「DBパスワードを保持しない」→ <b class=\"key\">IAM DB 認証</b> ／「パスワード自動ローテーション」→ <b class=\"key\">Secrets Manager</b></li><li><b class=\"key\">暗号化</b>：「既存の非暗号化RDSを暗号化」→ <b class=\"key\">スナップショット→暗号化コピー→復元</b></li></ul>",
        oxIds: [],
        src: [3802,3803]
      },
      {
        id: "c06-l04-p04",
        title: "試験での出方 ④",
        html: "<ul><li><b class=\"key\">復旧</b>：「誤操作を数分で巻き戻す（Aurora MySQL）」→ <b class=\"key\">Backtrack</b> ／「任意時点へ」→ <b class=\"key\">PITR（新インスタンス）</b></li><li><b class=\"key\">長期保管</b>：「バックアップを1年保持」→ <b class=\"key\">手動スナップショット</b> または <b class=\"key\">AWS Backup</b>（自動は最大35日）</li></ul>",
        oxIds: [],
        src: [3804,3805]
      },
      {
        id: "c06-l04-p05",
        title: "試験での出方 ⑤",
        html: "<ul><li><b class=\"key\">アップグレード</b>：「メジャーバージョンアップを最小停止で」→ <b class=\"key\">Blue/Green デプロイ</b></li><li><b class=\"key\">DynamoDB</b><ul><li>「別属性で検索（作成後）」→ <b class=\"key\">GSI</b> ／「古い項目を自動削除・コストなし」→ <b class=\"key\">TTL</b></li></ul></li></ul>",
        oxIds: [],
        src: [3806,3808]
      },
      {
        id: "c06-l04-p06",
        title: "試験での出方 ⑥",
        html: "<ul><li>「変更をトリガーに処理」→ <b class=\"key\">Streams＋Lambda</b> ／「マイクロ秒」→ <b class=\"key\">DAX</b><ul><li>「予測不能なトラフィック」→ <b class=\"key\">オンデマンド</b> ／「安定負荷でコスト削減」→ <b class=\"key\">プロビジョンド＋Auto Scaling</b></li><li>「スロットリングが特定キーに集中」→ <b class=\"key\">パーティションキーの再設計</b>（高カーディナリティ）</li></ul></li></ul>",
        oxIds: [],
        src: [3809,3811]
      },
      {
        id: "c06-l04-p07",
        title: "試験での出方 ⑦",
        html: "<ul><li><b class=\"key\">キャッシュ</b>：「ランキング」→ <b class=\"key\">ElastiCache Valkey/Redis OSS のソート済みセット</b></li><li><b class=\"key\">移行</b>：「Oracle → Aurora PostgreSQL」→ <b class=\"key\">SCT＋DMS</b> ／「ダウンタイム最小」→ <b class=\"key\">DMS の CDC</b></li></ul>",
        oxIds: [],
        src: [3812,3813]
      },
      {
        id: "c06-l04-p08",
        title: "試験での出方 ⑧",
        html: "<ul><li><b class=\"key\">分析</b>：「S3 のデータをロードせず Redshift から結合クエリ」→ <b class=\"key\">Redshift Spectrum</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Multi-AZ スタンバイ（インスタンス配置）を「読み取りに使う」選択肢は<b class=\"key\">誤り</b></span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>リードレプリカは<b class=\"key\">自動フェイルオーバーしない</b>（RDS では手動昇格）</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>既存DBの「暗号化を有効にする設定変更」は<b class=\"key\">できない</b></span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>LSI を既存テーブルに追加する選択肢は<b class=\"key\">誤り</b></span></li></ul>",
        oxIds: [],
        src: [3814,3818]
      },
      {
        id: "c06-l04-p09",
        title: "試験での出方 ⑨",
        html: "<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Memcached に「Multi-AZ・バックアップ・永続化」を求める選択肢は<b class=\"key\">誤り</b></span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>ElastiCache で DynamoDB を高速化する選択肢は「コード変更最小」要件なら <b class=\"key\">DAX に負ける</b></span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Redshift を OLTP（トランザクション処理）に使う選択肢は<b class=\"key\">誤り</b></span></li><li>解き方のコツ：<b class=\"key\">「データ型（関係/キー/グラフ/時系列）」→「規模・遅延」→「運用負荷」→「コスト」</b>の順で絞る</li></ul>",
        oxIds: [],
        src: [3819,3822]
      },
      {
        id: "c06-l04-p10",
        title: "暗記すべき数字・制限 ①",
        html: "<ul><li>RDS 自動バックアップ保持：<b class=\"key\">0〜35日</b>（0＝無効）。手動スナップショットは<b class=\"key\">無期限</b></li><li>RDS PITR：通常<b class=\"key\">直近5分前</b>まで復元可能。復元は<b class=\"key\">新インスタンス</b></li><li>RDS 停止：最大<b class=\"key\">7日</b>で自動起動</li></ul>",
        oxIds: [],
        src: [3825,3827]
      },
      {
        id: "c06-l04-p11",
        title: "暗記すべき数字・制限 ②",
        html: "<ul><li>RDS リードレプリカ：MySQL/MariaDB/PostgreSQL <b class=\"key\">最大15台</b>、Oracle/SQL Server <b class=\"key\">最大5台</b></li><li>Multi-AZ DB インスタンス：スタンバイ<b class=\"key\">1台（読み取り不可）</b>、フェイルオーバー通常<b class=\"key\">1〜2分</b></li><li>Multi-AZ DB クラスター：<b class=\"key\">3AZ・読み取り可能スタンバイ2台</b>、フェイルオーバー通常<b class=\"key\">35秒未満</b></li></ul>",
        oxIds: [],
        src: [3828,3830]
      },
      {
        id: "c06-l04-p12",
        title: "暗記すべき数字・制限 ③",
        html: "<ul><li>ストレージ自動スケーリング：空き<b class=\"key\">10%未満</b>が<b class=\"key\">5分</b>、前回変更から<b class=\"key\">6時間</b></li><li>IAM DB 認証トークン：有効<b class=\"key\">15分</b></li><li>Blue/Green スイッチオーバー：通常<b class=\"key\">1分未満</b></li><li>Performance Insights 無料保持：<b class=\"key\">7日</b></li></ul>",
        oxIds: ["c06-ox-10"],
        src: [3831,3834]
      },
      {
        id: "c06-l04-p13",
        title: "暗記すべき数字・制限 ④",
        html: "<ul><li>Aurora：<b class=\"key\">6コピー／3AZ</b>、書き込み<b class=\"key\">4/6</b>・読み取り<b class=\"key\">3/6</b>、<b class=\"key\">10 GiB</b>単位で自動拡張</li></ul>",
        oxIds: [],
        src: [3835,3835]
      },
      {
        id: "c06-l04-p14",
        title: "暗記すべき数字・制限 ⑤",
        html: "<ul><li>Aurora レプリカ：<b class=\"key\">最大15台</b>、昇格ティア<b class=\"key\">0〜15</b>、フェイルオーバー通常<b class=\"key\">30秒</b>程度</li><li>Aurora Serverless v2：<b class=\"key\">0〜256 ACU</b>、1 ACU≒<b class=\"key\">2 GiB</b>、<b class=\"key\">0.5 ACU</b>刻み</li></ul>",
        oxIds: [],
        src: [3836,3837]
      },
      {
        id: "c06-l04-p15",
        title: "暗記すべき数字・制限 ⑥",
        html: "<ul><li>Aurora Global Database：レプリケーション遅延<b class=\"key\">1秒未満</b>、<b class=\"key\">RPO 約1秒・RTO 1分未満</b></li><li>Aurora Backtrack：<b class=\"key\">最大72時間</b>、<b class=\"key\">Aurora MySQL のみ</b></li><li>DynamoDB 項目サイズ：<b class=\"key\">400 KB</b></li></ul>",
        oxIds: [],
        src: [3838,3840]
      },
      {
        id: "c06-l04-p16",
        title: "暗記すべき数字・制限 ⑦",
        html: "<ul><li>RCU：<b class=\"key\">4 KB</b>・強い整合性1回/秒（結果整合性は<b class=\"key\">2回</b>、トランザクションは<b class=\"key\">2 RCU</b>）</li><li>WCU：<b class=\"key\">1 KB</b>・1回/秒（トランザクションは<b class=\"key\">2 WCU</b>）</li></ul>",
        oxIds: [],
        src: [3841,3842]
      },
      {
        id: "c06-l04-p17",
        title: "暗記すべき数字・制限 ⑧",
        html: "<ul><li>LSI：<b class=\"key\">最大5</b>・<b class=\"key\">作成時のみ</b>・<b class=\"key\">10 GB</b>/パーティションキー値 ／ GSI：既定<b class=\"key\">最大20</b>・いつでも</li><li>DynamoDB Streams 保持：<b class=\"key\">24時間</b></li><li>DynamoDB PITR：最大<b class=\"key\">35日</b></li></ul>",
        oxIds: [],
        src: [3843,3845]
      },
      {
        id: "c06-l04-p18",
        title: "暗記すべき数字・制限 ⑨",
        html: "<ul><li>DynamoDB トランザクション：最大<b class=\"key\">100項目・4 MB</b></li><li>Redshift 自動スナップショット保持：既定<b class=\"key\">1日</b>、最大<b class=\"key\">35日</b></li><li>QLDB サポート終了：<b class=\"key\">2025年7月31日</b></li><li>語呂合わせ：「<b class=\"key\">読みはヨン（4KB）、書きはイチ（1KB）</b>」</li></ul>",
        oxIds: [],
        src: [3846,3849]
      },
      {
        id: "c06-l04-p19",
        title: "暗記すべき数字・制限 ⑩",
        html: "<ul><li>語呂合わせ：「<b class=\"key\">ろく（6）コピーで3（さん）AZ、書きは4、読みは3</b>」→ Aurora クォーラム</li><li>語呂合わせ：「<b class=\"key\">バックトラックは三日（72時間）だけ戻れる MySQL</b>」</li><li>語呂合わせ：「<b class=\"key\">LSI は生まれつき（作成時）、GSI は後付けOK</b>」</li></ul>",
        oxIds: [],
        src: [3850,3852]
      },
    ] },
  ],
  ox: [
    { id: "c06-ox-01", answer: false, src: 3855,
      text: "RDS Multi-AZ DB インスタンス配置のスタンバイインスタンスに読み取りクエリを送り、プライマリの負荷を下げられる。",
      explain: "インスタンス配置のスタンバイは<b class=\"key\">読み取り不可</b>。読み取り分散はリードレプリカか Multi-AZ DB クラスター" },
    { id: "c06-ox-02", answer: true, src: 3858,
      text: "RDS Multi-AZ DB クラスター配置では、2台のスタンバイを読み取りに利用できる。",
      explain: "3AZ構成で<b class=\"key\">読み取り可能なスタンバイ2台</b>。MySQL / PostgreSQL が対象" },
    { id: "c06-ox-03", answer: false, src: 3861,
      text: "RDS のリードレプリカは同期レプリケーションであり、プライマリ障害時には自動でフェイルオーバーする。",
      explain: "リードレプリカは<b class=\"key\">非同期</b>で、RDS では<b class=\"key\">手動で昇格</b>する。自動フェイルオーバーは Multi-AZ" },
    { id: "c06-ox-04", answer: true, src: 3864,
      text: "RDS for PostgreSQL のリードレプリカは別リージョンに作成でき、DR 時にスタンドアロンDBへ昇格できる。",
      explain: "<b class=\"key\">クロスリージョンリードレプリカ</b>の昇格は定番のDR手法。昇格後はレプリケーションが切れる" },
    { id: "c06-ox-05", answer: false, src: 3867,
      text: "RDS の自動バックアップの保持期間は最大90日まで設定できる。",
      explain: "最大<b class=\"key\">35日</b>。それ以上の長期保管は<b class=\"key\">手動スナップショット</b>か <b class=\"key\">AWS Backup</b>" },
    { id: "c06-ox-06", answer: false, src: 3870,
      text: "RDS のポイントインタイムリカバリを実行すると、既存のDBインスタンスが指定時点の状態に上書きされる。",
      explain: "復元は常に<b class=\"key\">新しいDBインスタンス</b>として作成され、エンドポイントも新しくなる" },
    { id: "c06-ox-07", answer: false, src: 3873,
      text: "暗号化されていない既存の RDS インスタンスは、変更（Modify）操作で暗号化を有効にできる。",
      explain: "暗号化は<b class=\"key\">作成時のみ</b>。スナップショット→<b class=\"key\">暗号化付きコピー</b>→復元 の手順が必要" },
    { id: "c06-ox-08", answer: true, src: 3876,
      text: "暗号化された RDS インスタンスから、暗号化されていないリードレプリカを作成することはできない。",
      explain: "暗号化DBのレプリカは<b class=\"key\">必ず暗号化</b>される" },
    { id: "c06-ox-09", answer: false, src: 3879,
      text: "RDS ストレージ自動スケーリングは、空き容量が増えると自動でストレージサイズを縮小する。",
      explain: "自動スケーリングは<b class=\"key\">拡張のみ</b>。縮小はしない。上限は最大ストレージしきい値で制御" },
    { id: "c06-ox-10", answer: true, src: 3882,
      text: "IAM DB 認証で使用する認証トークンの有効期間は15分である。",
      explain: "トークンは<b class=\"key\">15分</b>有効で、接続には <b class=\"key\">SSL/TLS</b> が必要" },
    { id: "c06-ox-11", answer: true, src: 3885,
      text: "RDS Proxy は、Lambda 関数からの大量の短命な接続をプールし、DB の接続枯渇を防ぐ。",
      explain: "<b class=\"key\">コネクションプーリング</b>により接続を再利用。フェイルオーバー時間の短縮効果もある" },
    { id: "c06-ox-12", answer: false, src: 3888,
      text: "Aurora のクラスターボリュームは、2つのAZにそれぞれ3コピー、計6コピーを保持する。",
      explain: "<b class=\"key\">3AZに各2コピー、計6コピー</b>。書き込み4/6、読み取り3/6 のクォーラム" },
    { id: "c06-ox-13", answer: true, src: 3891,
      text: "Aurora では、Aurora レプリカがフェイルオーバー先を兼ねるため、別途スタンバイを用意する必要はない。",
      explain: "最大15台のレプリカから<b class=\"key\">昇格ティア</b>に従い自動昇格する" },
    { id: "c06-ox-14", answer: true, src: 3894,
      text: "Aurora のリーダーエンドポイントは、読み取り接続を複数の Aurora レプリカに負荷分散する。",
      explain: "書き込みは<b class=\"key\">クラスター（ライター）エンドポイント</b>、読み取りは<b class=\"key\">リーダーエンドポイント</b>" },
    { id: "c06-ox-15", answer: false, src: 3897,
      text: "Aurora Backtrack は Aurora PostgreSQL でも利用でき、新しいクラスターを作成して過去の時点に戻す。",
      explain: "Backtrack は <b class=\"key\">Aurora MySQL のみ</b>で、<b class=\"key\">新クラスターを作らずその場で</b>巻き戻す（最大72時間）" },
    { id: "c06-ox-16", answer: true, src: 3900,
      text: "Aurora Global Database は、リージョン障害時に RPO 約1秒・RTO 1分未満の DR を実現できる。",
      explain: "ストレージレベルで<b class=\"key\">1秒未満</b>の遅延でレプリケーションし、セカンダリを昇格する" },
    { id: "c06-ox-17", answer: true, src: 3903,
      text: "DynamoDB で 8 KB の項目を結果整合性で毎秒10回読み込む場合、必要な RCU は 10 である。",
      explain: "8÷4＝<b class=\"key\">2 RCU</b>/回（強い整合性）×10＝20。結果整合性は半分で<b class=\"key\">10 RCU</b>" },
    { id: "c06-ox-18", answer: false, src: 3906,
      text: "DynamoDB の LSI は、既存のテーブルに後から追加できる。",
      explain: "LSI は<b class=\"key\">テーブル作成時のみ</b>。後から追加できるのは <b class=\"key\">GSI</b>" },
    { id: "c06-ox-19", answer: false, src: 3909,
      text: "DynamoDB の GSI からは強い整合性の読み取りを行える。",
      explain: "GSI は<b class=\"key\">結果整合性のみ</b>。強い整合性が使えるのは LSI とベーステーブル" },
    { id: "c06-ox-20", answer: true, src: 3912,
      text: "DynamoDB の TTL による項目削除は書き込みキャパシティ（WCU）を消費しない。",
      explain: "TTL 削除は<b class=\"key\">無料</b>。ただし即時ではなく期限後通常<b class=\"key\">数日以内</b>に削除される" },
    { id: "c06-ox-21", answer: false, src: 3915,
      text: "DynamoDB Streams のレコードは最大7日間保持される。",
      explain: "Streams の保持は<b class=\"key\">24時間</b>。長期保持は Kinesis Data Streams for DynamoDB を使う" },
    { id: "c06-ox-22", answer: true, src: 3918,
      text: "DynamoDB グローバルテーブルでは、すべてのレプリカリージョンで読み書きができる。",
      explain: "<b class=\"key\">マルチアクティブ</b>構成。競合は既定で<b class=\"key\">最終書き込み優先</b>" },
    { id: "c06-ox-23", answer: false, src: 3921,
      text: "DAX を導入するには、アプリケーションのキャッシュロジックを ElastiCache 同様に全面的に書き換える必要がある。",
      explain: "DAX は <b class=\"key\">DynamoDB API 互換</b>で、クライアントを差し替えるだけ。コード変更は最小" },
    { id: "c06-ox-24", answer: false, src: 3924,
      text: "ElastiCache for Memcached は Multi-AZ の自動フェイルオーバーとバックアップ/復元をサポートする。",
      explain: "Memcached は<b class=\"key\">レプリケーション・永続化・バックアップなし</b>。これらは <b class=\"key\">Valkey / Redis OSS</b>" },
    { id: "c06-ox-25", answer: true, src: 3927,
      text: "遅延読み込み（Lazy Loading）戦略では、キャッシュのデータが DB より古くなる可能性がある。",
      explain: "キャッシュミス時にのみ更新するため<b class=\"key\">stale データ</b>が生じる。TTL やライトスルー併用で緩和" },
    { id: "c06-ox-26", answer: true, src: 3930,
      text: "Amazon MemoryDB は、すべての書き込みを Multi-AZ のトランザクションログに永続化する耐久性のあるデータベースである。",
      explain: "ElastiCache と違い<b class=\"key\">プライマリDB</b>として使える耐久性を持つ" },
    { id: "c06-ox-27", answer: true, src: 3933,
      text: "Redshift Spectrum を使うと、S3 上のデータを Redshift にロードせずにクエリできる。",
      explain: "外部テーブルとして S3 を参照。クラスター不要なら <b class=\"key\">Athena</b>" },
    { id: "c06-ox-28", answer: false, src: 3936,
      text: "AWS DMS は、Oracle から Aurora PostgreSQL への移行時にストアドプロシージャを自動変換する。",
      explain: "スキーマ・コード変換は <b class=\"key\">AWS SCT</b>（または DMS Schema Conversion）。DMS はデータ移行と CDC" },
    { id: "c06-ox-29", answer: true, src: 3939,
      text: "Amazon QLDB は2025年7月にサポートが終了しており、新規設計の正解になりにくい。",
      explain: "<b class=\"key\">2025年7月31日</b>サポート終了。AWS は Aurora PostgreSQL への移行を推奨" },
  ],
  mc: [
    {
      id: "c06-mc-01",
      stem: "ある会社は Amazon RDS for MySQL（Multi-AZ DB インスタンス配置）で EC サイトを運用している。<br>毎朝、営業部門が実行する重いレポートクエリでプライマリの CPU が高騰し、注文処理が遅延する<br>レポートは数秒程度古いデータで問題ない。アプリ変更は最小限にしたい<br>最も適切な解決策はどれか",
      choices: [
        "レポートクエリの接続先を Multi-AZ のスタンバイインスタンスに変更する",
        "リードレプリカを作成し、レポートクエリの接続先をリードレプリカのエンドポイントにする",
        "DB インスタンスクラスを大きくし、Performance Insights を有効化する",
        "ElastiCache for Memcached を導入し、全クエリ結果をキャッシュする",
      ],
      answer: ["B"], selectCount: 1, domain: 3, src: 3944,
      choiceExplain: [
        { ok: false, text: "インスタンス配置のスタンバイは<b class=\"key\">読み取り不可</b>" },
        { ok: true, text: "読み取り負荷の分散は<b class=\"key\">リードレプリカ</b>。数秒の遅れ（非同期）は許容されている" },
        { ok: false, text: "スケールアップは一時しのぎでコスト増。Performance Insights は分析ツールで負荷は減らない" },
        { ok: false, text: "一度きりの重い集計にキャッシュは効きにくく、アプリ改修も大きい" },
      ],
      tip: "「読み取り負荷」「少し古くてOK」→ リードレプリカ。スタンバイ読み取りは定番の罠"
    },
    {
      id: "c06-mc-02",
      stem: "ある金融系企業は RDS for PostgreSQL を使用している。<br>要件：AZ 障害時のフェイルオーバーを<b class=\"key\">できるだけ短く</b>し、かつ<b class=\"key\">スタンバイも読み取りに使って</b>リソースを無駄にしたくない<br>エンジンは PostgreSQL のまま、運用負荷を増やしたくない<br>最も適切な構成はどれか",
      choices: [
        "Multi-AZ DB インスタンス配置にし、別途リードレプリカを2台追加する",
        "Multi-AZ DB クラスター配置に移行し、リーダーエンドポイントで読み取りを分散する",
        "シングルAZのインスタンスを2つのAZに作成し、アプリでフェイルオーバー処理を実装する",
        "クロスリージョンリードレプリカを作成し、障害時に昇格する",
      ],
      answer: ["B"], selectCount: 1, domain: 2, src: 3959,
      choiceExplain: [
        { ok: false, text: "実現可能だがスタンバイ自体は読めず遊休リソースになる。フェイルオーバーも1〜2分" },
        { ok: true, text: "<b class=\"key\">読み取り可能なスタンバイ2台</b>、フェイルオーバー通常<b class=\"key\">35秒未満</b>" },
        { ok: false, text: "自前の切替実装は運用負荷が大きくデータ整合性も保証されない" },
        { ok: false, text: "リージョンDR向けで、昇格は手動。AZ 障害対策としては過剰かつ遅い" },
      ],
      tip: "「スタンバイも読みたい」＋「高速フェイルオーバー」＋「RDS のまま」→ Multi-AZ DB クラスター"
    },
    {
      id: "c06-mc-03",
      stem: "セキュリティ監査で、本番の RDS for MySQL インスタンスが<b class=\"key\">保管時暗号化されていない</b>ことが指摘された。<br>KMS による暗号化を有効にする必要がある。データ損失は許されない<br>最も適切な手順はどれか",
      choices: [
        "DB インスタンスを変更し、「暗号化を有効化」オプションを選択して即時適用する",
        "暗号化を有効にしたリードレプリカを作成し、昇格する",
        "スナップショットを取得し、KMS キーを指定して暗号化コピーを作成し、そこから新しい DB を復元して切り替える",
        "EBS の既定の暗号化をアカウントで有効化し、DB インスタンスを再起動する",
      ],
      answer: ["C"], selectCount: 1, domain: 1, src: 3974,
      choiceExplain: [
        { ok: false, text: "既存の非暗号化インスタンスに暗号化を後付けする設定は<b class=\"key\">存在しない</b>" },
        { ok: false, text: "非暗号化DBから暗号化リードレプリカは作成できない" },
        { ok: true, text: "<b class=\"key\">スナップショット→暗号化コピー→復元</b>が公式手順" },
        { ok: false, text: "EBS の既定暗号化は RDS の既存ストレージには適用されない" },
      ],
      tip: "「既存＋非暗号化→暗号化」は<b class=\"key\">スナップショットのコピー時に暗号化</b>と丸暗記"
    },
    {
      id: "c06-mc-04",
      stem: "あるスタートアップは API Gateway と AWS Lambda で構築した API から Aurora MySQL に接続している。<br>キャンペーン時にリクエストが急増すると「too many connections」エラーが多発する<br>DB 認証情報は Secrets Manager で管理したい。コード変更とインフラ運用は最小限にしたい<br>最も適切な解決策はどれか",
      choices: [
        "Aurora のインスタンスクラスを最大にして max_connections を引き上げる",
        "Lambda の予約同時実行数を1に制限する",
        "Amazon RDS Proxy を導入し、Lambda の接続先を Proxy エンドポイントに変更する",
        "EC2 上に PgBouncer 互換のプーリングサーバーを構築する",
      ],
      answer: ["C"], selectCount: 1, domain: 3, src: 3988,
      choiceExplain: [
        { ok: false, text: "一時的に緩和してもスパイクに追従できずコスト増" },
        { ok: false, text: "接続数は減るがスループットが壊滅的に落ちる" },
        { ok: true, text: "<b class=\"key\">RDS Proxy</b> がコネクションをプールし、Secrets Manager とネイティブ統合" },
        { ok: false, text: "機能的には可能だが EC2 の運用負荷が増える（MySQL には PgBouncer も不適）" },
      ],
      tip: "「Lambda＋RDS＋接続枯渇」→ RDS Proxy。「運用最小」で自前構築は消える"
    },
    {
      id: "c06-mc-05",
      stem: "ある会社は全世界向けの予約システムを Aurora PostgreSQL で us-east-1 に運用している。<br>欧州・アジアのユーザーの<b class=\"key\">読み取り遅延を短縮</b>したい<br>リージョン全体の障害時に <b class=\"key\">RPO 1秒程度・RTO 1分程度</b>で別リージョンへ切り替えたい<br>最も適切な解決策はどれか",
      choices: [
        "Aurora Global Database を構成し、欧州・アジアにセカンダリクラスターを置く",
        "各リージョンに RDS for PostgreSQL のクロスリージョンリードレプリカを作成する",
        "Aurora の自動バックアップを他リージョンへコピーし、障害時に復元する",
        "DynamoDB グローバルテーブルに移行する",
      ],
      answer: ["A"], selectCount: 1, domain: 2, src: 4003,
      choiceExplain: [
        { ok: true, text: "遅延<b class=\"key\">1秒未満</b>のストレージレプリケーション、<b class=\"key\">RTO 1分未満</b>でセカンダリ昇格" },
        { ok: false, text: "Aurora からは RDS のレプリカを作る構成にならず、RPO/RTO も劣る" },
        { ok: false, text: "バックアップ復元は RTO が数十分〜数時間、RPO も大きい" },
        { ok: false, text: "リレーショナルからNoSQLへの移行はアプリ大改修" },
      ],
      tip: "「リレーショナル＋グローバル＋RPO秒・RTO分」→ Aurora Global Database"
    },
    {
      id: "c06-mc-06",
      stem: "開発者が Aurora MySQL の本番クラスターで WHERE 句なしの DELETE を誤って実行した（10分前）。<br><b class=\"key\">できるだけ早く</b>誤操作直前の状態に戻したい。アプリの接続先エンドポイントは変えたくない<br>最も適切な方法はどれか",
      choices: [
        "ポイントインタイムリカバリで新しいクラスターを作成し、アプリの接続先を変更する",
        "最新の手動スナップショットから復元する",
        "Aurora Backtrack を使用して、クラスターを誤操作直前の時刻に巻き戻す",
        "Aurora クローンを作成し、削除データを抽出して本番に再投入する",
      ],
      answer: ["C"], selectCount: 1, domain: 2, src: 4018,
      choiceExplain: [
        { ok: false, text: "復元可能だが<b class=\"key\">新クラスター作成</b>で時間がかかり、エンドポイントも変わる" },
        { ok: false, text: "スナップショット以降の正常データを失い、新クラスターになる" },
        { ok: true, text: "<b class=\"key\">Backtrack</b> は既存クラスターを<b class=\"key\">その場で数分で</b>巻き戻す（Aurora MySQL、最大72時間）" },
        { ok: false, text: "クローンは誤操作後の状態の複製であり、削除データは含まれない" },
      ],
      tip: "「Aurora MySQL」「その場で」「すぐ戻す」→ Backtrack。PostgreSQL なら PITR"
    },
    {
      id: "c06-mc-07",
      stem: "ある SaaS 企業は、顧客ごとの社内業務アプリに MySQL 互換のDBを提供している。<br>利用は営業時間中に<b class=\"key\">不規則に</b>ピークがあり、夜間・週末はほぼアクセスがない<br>DB 容量の見積もりと管理を省き、<b class=\"key\">使った分だけ支払いたい</b><br>最も適切な選択はどれか",
      choices: [
        "RDS for MySQL のリザーブドインスタンスを購入する",
        "Aurora Serverless v2 を使用し、最小 ACU を低く設定する",
        "Aurora プロビジョンドクラスターに Aurora Auto Scaling でレプリカを追加する",
        "EC2 の Auto Scaling グループ上に MySQL を構築する",
      ],
      answer: ["B"], selectCount: 1, domain: 4, src: 4032,
      choiceExplain: [
        { ok: false, text: "リザーブドは<b class=\"key\">常時稼働</b>前提で、アイドル時間が長いと無駄" },
        { ok: true, text: "ACU 単位で<b class=\"key\">秒単位に自動スケール</b>し、低負荷時は最小（0 ACU の自動一時停止も可）" },
        { ok: false, text: "レプリカ数は増減するがライターは常時固定サイズで課金" },
        { ok: false, text: "DB の自前運用は負荷大、データ整合性の担保も困難" },
      ],
      tip: "「不規則」「アイドル時間が長い」「容量管理不要」→ サーバーレス（Aurora Serverless v2）"
    },
    {
      id: "c06-mc-08",
      stem: "ゲーム会社はプレイヤー情報を DynamoDB に保存している。<br>人気イベント中、同一データへの読み取りが集中し、レイテンシーを<b class=\"key\">マイクロ秒</b>にしたい<br>開発チームは小規模で、<b class=\"key\">アプリケーションコードの変更は最小限</b>にしたい<br>最も適切な解決策はどれか",
      choices: [
        "ElastiCache for Valkey を導入し、Cache-Aside パターンを実装する",
        "DynamoDB Accelerator（DAX）クラスターを作成し、DAX クライアントを使用する",
        "テーブルをオンデマンドキャパシティモードに変更する",
        "GSI を追加して読み取りを分散させる",
      ],
      answer: ["B"], selectCount: 1, domain: 3, src: 4047,
      choiceExplain: [
        { ok: false, text: "マイクロ秒は可能だが、キャッシュロジックの<b class=\"key\">実装が必要</b>でコード変更が大きい" },
        { ok: true, text: "<b class=\"key\">DAX は DynamoDB API 互換</b>。クライアント差し替えでマイクロ秒応答" },
        { ok: false, text: "スロットリングは防げても、レイテンシーはミリ秒のまま" },
        { ok: false, text: "GSI は検索軸の追加で、同一項目への読み取り集中は解消しない" },
      ],
      tip: "「DynamoDB」＋「マイクロ秒」＋「コード変更最小」→ DAX 一択"
    },
    {
      id: "c06-mc-09",
      stem: "ある IoT 企業は DynamoDB にデバイスのイベントを書き込んでいる。<br>パーティションキーを「イベント日付（YYYY-MM-DD）」にしたところ、書き込みがスロットリングされる<br>テーブル全体のプロビジョンド WCU には十分な余裕がある<br>最も適切な対策はどれか",
      choices: [
        "プロビジョンド WCU をさらに増やす",
        "パーティションキーをデバイスIDなど高カーディナリティの属性に変更する",
        "DAX を導入して書き込みを高速化する",
        "LSI を追加して書き込みを分散する",
      ],
      answer: ["B"], selectCount: 1, domain: 3, src: 4062,
      choiceExplain: [
        { ok: false, text: "原因は<b class=\"key\">ホットパーティション</b>（当日のキーに集中）であり、総容量を増やしても偏りは残る" },
        { ok: true, text: "<b class=\"key\">高カーディナリティ</b>で均等に分散するキーにする（または書き込みシャーディング）" },
        { ok: false, text: "DAX は読み取りキャッシュ。書き込みはそのまま DynamoDB へ（ライトスルー）" },
        { ok: false, text: "LSI は同じパーティションキーを使うため分散しない。しかも作成時のみ" },
      ],
      tip: "「容量に余裕があるのにスロットリング」→ キー設計（ホットパーティション）を疑う"
    },
    {
      id: "c06-mc-10",
      stem: "ある EC 企業は DynamoDB の Orders テーブル（パーティションキー：OrderId）を運用中である。<br>新要件1：<b class=\"key\">CustomerId で注文を検索</b>したい（テーブルは既に本番稼働中）<br>新要件2：作成から<b class=\"key\">90日を過ぎた注文</b>は、追加コストをかけずに自動削除したい<br>要件を満たす組み合わせはどれか（2つ選択）",
      choices: [
        "CustomerId をパーティションキーとする GSI を追加する",
        "CustomerId をソートキーとする LSI を追加する",
        "各項目に有効期限（エポック秒）の属性を持たせ、TTL を有効化する",
        "EventBridge スケジュールで毎日 Lambda を起動し、Scan して古い項目を削除する",
        "Scan 操作に FilterExpression を付けて CustomerId を検索する",
      ],
      answer: ["A","C"], selectCount: 2, domain: 3, src: 4077,
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">GSI は稼働中テーブルに追加可能</b>で、別のパーティションキーで Query できる" },
        { ok: false, text: "LSI は<b class=\"key\">作成時のみ</b>。しかもパーティションキーは同じ OrderId のまま" },
        { ok: true, text: "<b class=\"key\">TTL</b> は WCU を消費せず無料で自動削除" },
        { ok: false, text: "実現可能だが Scan と削除で RCU/WCU を消費し、運用も増える" },
        { ok: false, text: "Scan は全件読み取りで非効率・高コスト" },
      ],
      tip: "「後から別キーで検索」→ GSI、「古いデータを無料で消す」→ TTL"
    },
    {
      id: "c06-mc-11",
      stem: "あるニュースサイトはステートレスな EC2（Auto Scaling グループ、ALB 配下）で運用している。<br>スケールイン時やインスタンス障害時に<b class=\"key\">ユーザーのログインセッションが失われる</b><br>セッションデータはサブミリ秒で読み書きしたく、ノード障害時も<b class=\"key\">自動フェイルオーバー</b>してほしい<br>最も適切な解決策はどれか",
      choices: [
        "ALB のスティッキーセッションを有効化する",
        "ElastiCache for Memcached にセッションを保存する",
        "ElastiCache for Valkey（レプリカ付き、Multi-AZ 有効）にセッションを保存する",
        "各 EC2 の EBS ボリュームにセッションファイルを保存する",
      ],
      answer: ["C"], selectCount: 1, domain: 2, src: 4094,
      choiceExplain: [
        { ok: false, text: "インスタンスが消えるとセッションも消える根本問題は解決しない" },
        { ok: false, text: "高速だが<b class=\"key\">レプリケーション・フェイルオーバーなし</b>でノード障害時に消失" },
        { ok: true, text: "<b class=\"key\">Valkey/Redis OSS</b> はレプリカと <b class=\"key\">Multi-AZ 自動フェイルオーバー</b>に対応" },
        { ok: false, text: "インスタンスローカルなので他インスタンスから参照できない" },
      ],
      tip: "「セッション外出し」＋「HA」→ Valkey/Redis OSS（または DynamoDB）。Memcached は HA 要件で落ちる"
    },
    {
      id: "c06-mc-12",
      stem: "ある企業はオンプレミスの Oracle Database（2 TB）を Amazon Aurora PostgreSQL に移行する。<br>多数のストアドプロシージャがあり、移行中も業務を継続し、<b class=\"key\">切替時のダウンタイムを最小</b>にしたい<br>必要な AWS サービス・機能の組み合わせはどれか（2つ選択）",
      choices: [
        "AWS Schema Conversion Tool（SCT）でスキーマとストアドプロシージャを変換する",
        "AWS DMS でフルロード＋変更データキャプチャ（CDC）による継続レプリケーションを行う",
        "Oracle のネイティブ Data Pump でエクスポートし、Aurora PostgreSQL にインポートする",
        "AWS DataSync でデータファイルを Aurora に転送する",
        "RDS for Oracle のクロスリージョンリードレプリカを作成して昇格する",
      ],
      answer: ["A","B"], selectCount: 2, domain: 2, src: 4109,
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">異種移行</b>ではスキーマ・コード変換に <b class=\"key\">SCT</b> が必要" },
        { ok: true, text: "<b class=\"key\">DMS の CDC</b> で差分を同期し続け、切替時だけ短時間停止" },
        { ok: false, text: "Data Pump は Oracle 同士の同種移行用。PostgreSQL にはインポートできない" },
        { ok: false, text: "DataSync はファイル/オブジェクト転送用で DB の論理移行はできない" },
        { ok: false, text: "ソースはオンプレミスの Oracle であり、ターゲットも PostgreSQL なので不適" },
      ],
      tip: "「異種」→ SCT＋DMS、「ダウンタイム最小」→ CDC。同種なら DMS（SCT 不要）"
    },
    {
      id: "c06-mc-13",
      stem: "あるソーシャルメディア企業は、ユーザー間の「友達の友達」や共通の興味をたどる<b class=\"key\">レコメンド機能</b>と、<br>不正アカウントの<b class=\"key\">つながりのパターン検出</b>を実装したい<br>何段階もの関係を高速にたどるクエリが必要で、フルマネージドが望ましい<br>最も適切なサービスはどれか",
      choices: [
        "Amazon Aurora MySQL で自己結合クエリを使う",
        "Amazon Neptune",
        "Amazon DynamoDB の GSI を多数作成する",
        "Amazon Redshift",
      ],
      answer: ["B"], selectCount: 1, domain: 3, src: 4125,
      choiceExplain: [
        { ok: false, text: "多段の自己 JOIN は深さに応じて急激に遅くなる" },
        { ok: true, text: "<b class=\"key\">グラフDB</b> は関係のトラバーサルに最適（Gremlin / openCypher / SPARQL）" },
        { ok: false, text: "キーバリューでは多段の関係探索を効率的に表現できない" },
        { ok: false, text: "分析用DWHで、リアルタイムの関係探索向けではない" },
      ],
      tip: "「関係・つながり・友達の友達・不正の輪」→ Neptune"
    },
    {
      id: "c06-mc-14",
      stem: "あるメディア企業は Amazon Redshift（RA3）でデータウェアハウスを運用している。<br>S3 データレイクに保存された<b class=\"key\">数年分のクリックストリーム（Parquet）</b>を、Redshift 内の顧客テーブルと結合して分析したい<br>S3 のデータは巨大で、Redshift へのロードは避けたい<br>最も運用負荷が少ない方法はどれか",
      choices: [
        "COPY コマンドで全データを Redshift にロードする",
        "Redshift Spectrum で S3 データを外部テーブルとして定義し、Redshift 内のテーブルと結合する",
        "Amazon EMR で結合処理を行い、結果を Redshift にロードする",
        "AWS Glue ETL ジョブで毎日 Redshift にデータを複製する",
      ],
      answer: ["B"], selectCount: 1, domain: 3, src: 4140,
      choiceExplain: [
        { ok: false, text: "ロードを避けたい要件に反し、ストレージコストも増える" },
        { ok: true, text: "<b class=\"key\">Spectrum</b> は S3 のデータを<b class=\"key\">ロードせず</b>クエリし、Redshift 内テーブルと JOIN できる" },
        { ok: false, text: "EMR クラスター運用と追加パイプラインで運用負荷大" },
        { ok: false, text: "ETL パイプラインの構築・運用が必要" },
      ],
      tip: "「Redshift から S3 を直接」→ Spectrum／「Redshift なしで S3 に SQL」→ Athena"
    },
    {
      id: "c06-mc-15",
      stem: "ある企業は RDS for PostgreSQL で基幹システムを運用している。<br>要件1：規制により<b class=\"key\">バックアップを7年間保持</b>し、<b class=\"key\">別リージョン</b>にも保管する<br>要件2：運用負荷を最小化し、バックアップの取得・保持・コピーを一元管理したい<br>要件を満たす組み合わせはどれか（2つ選択）",
      choices: [
        "自動バックアップの保持期間を7年に設定する",
        "AWS Backup のバックアッププランで保持期間7年のルールを作成する",
        "AWS Backup のバックアッププランでクロスリージョンコピーを設定する",
        "Multi-AZ 配置を有効にし、スタンバイをバックアップとして扱う",
        "リードレプリカを別リージョンに作成し、7年間保持する",
      ],
      answer: ["B","C"], selectCount: 2, domain: 2, src: 4155,
      choiceExplain: [
        { ok: false, text: "自動バックアップは<b class=\"key\">最大35日</b>" },
        { ok: true, text: "<b class=\"key\">AWS Backup</b> はスナップショットの長期保持をポリシーで自動化" },
        { ok: true, text: "バックアッププランの<b class=\"key\">コピー先リージョン</b>指定で別リージョン保管を自動化" },
        { ok: false, text: "Multi-AZ は HA であり、論理削除や破損も同期されるためバックアップにならない" },
        { ok: false, text: "レプリカは過去時点のデータを保持しない（最新状態の複製）" },
      ],
      tip: "「35日超の保持」→ 手動スナップショット／AWS Backup。「一元管理・運用最小」→ AWS Backup"
    },
    {
      id: "c06-mc-16",
      stem: "ある会社は RDS for MySQL 5.7 系から 8.0 系への<b class=\"key\">メジャーバージョンアップ</b>を計画している。<br>本番データで事前に互換性を検証したうえで、切替時のダウンタイムを<b class=\"key\">1分程度以内</b>にしたい<br>アプリの接続先エンドポイントは変更したくない<br>最も適切な方法はどれか",
      choices: [
        "メンテナンスウィンドウで Modify によりインプレースアップグレードする",
        "RDS Blue/Green デプロイを作成し、グリーン環境で検証後にスイッチオーバーする",
        "スナップショットから新バージョンのインスタンスを復元し、DNS を手動で切り替える",
        "リードレプリカを作成して昇格させ、その後アップグレードする",
      ],
      answer: ["B"], selectCount: 1, domain: 2, src: 4172,
      choiceExplain: [
        { ok: false, text: "アップグレード中は停止時間が長く、事前検証もできない" },
        { ok: true, text: "<b class=\"key\">Blue/Green</b> は本番同期のグリーンで検証し、通常<b class=\"key\">1分未満</b>で切替、エンドポイント名も維持" },
        { ok: false, text: "スナップショット以降の差分が失われ、エンドポイントも変わる" },
        { ok: false, text: "昇格後のアップグレードでも停止が発生し、手順も複雑" },
      ],
      tip: "「メジャーバージョンアップ」「安全」「最小ダウンタイム」→ Blue/Green デプロイ"
    },
  ]
});
window.DATA.chapters.push({
  no: 7,
  title: "アプリケーション統合・分析・機械学習",
  domainNote: "ドメイン2・3",
  src: [4188, 4843],
  lessons: [
    { id: "c07-l01", title: "メッセージングとAPI（SQS・SNS・EventBridge・Step Functions・MQ・API Gateway・AppSync）", pages: [
      {
        id: "c07-l01-p01",
        title: "疎結合アーキテクチャの考え方 ①",
        html: "<ul><li><b class=\"key\">密結合</b>：Webサーバーが処理サーバーを直接同期呼び出し → 片方が落ちると全体が止まる</li><li><b class=\"key\">疎結合</b>：間に<b class=\"key\">キュー/トピック/イベントバス</b>を挟み、送り手と受け手を独立させる<ul><li>受け手が停止・遅延しても、メッセージは<b class=\"key\">キューに溜まって失われない</b></li><li>送り手と受け手を<b class=\"key\">別々にスケール</b>できる（ピーク吸収＝バッファリング）</li></ul></li></ul>",
        oxIds: [],
        src: [4193,4196]
      },
      {
        id: "c07-l01-p02",
        title: "疎結合アーキテクチャの考え方 ②",
        html: "<ul><li>3つの通信パターン<ul><li><b class=\"key\">キュー（1対1・プル型）</b>：Amazon SQS。ワーカーが取りに行く</li><li><b class=\"key\">Pub/Sub（1対多・プッシュ型）</b>：Amazon SNS。購読者全員に配信</li><li><b class=\"key\">イベントルーティング（条件で振り分け）</b>：Amazon EventBridge</li></ul></li><li><b class=\"key\">ワークフロー（順序・分岐・リトライ・人の承認）</b>：AWS Step Functions</li><li><span class=\"badge b-freq\">頻出</span>「急なトラフィック増でリクエストが失われる」「処理側が追いつかない」→ <b class=\"key\">SQSで非同期化</b></li><li><span class=\"badge b-cmp\">比較</span>同期呼び出し（API Gateway→Lambda）＝即時応答が必要なとき／非同期（SQS）＝即時応答不要</li></ul>",
        oxIds: [],
        src: [4197,4204]
      },
      {
        id: "c07-l01-p03",
        title: "Amazon SQS（Simple Queue Service） ①",
        html: "<ul><li>フルマネージドなメッセージキュー。サーバー管理不要、ほぼ無制限にスケール</li><li><b class=\"key\">標準キュー</b><ul><li>スループット：<b class=\"key\">ほぼ無制限</b></li><li>配信：<b class=\"key\">少なくとも1回（at-least-once）</b> → <b class=\"key\">重複あり得る</b></li><li>順序：<b class=\"key\">ベストエフォート</b>（順序保証なし）</li><li>→ 受け手は<b class=\"key\">冪等</b>（同じメッセージを2回処理しても問題ない）に作る</li></ul></li></ul>",
        oxIds: ["c07-ox-01"],
        src: [4206,4211]
      },
      {
        id: "c07-l01-p04",
        title: "Amazon SQS（Simple Queue Service） ②",
        html: "<ul><li><b class=\"key\">FIFOキュー</b><ul><li>順序：<b class=\"key\">厳密な先入れ先出し</b>（メッセージグループID単位）</li><li>配信：<b class=\"key\">1回だけ処理（exactly-once processing）</b>、重複排除IDで<b class=\"key\">5分間</b>の重複排除</li></ul></li></ul>",
        oxIds: [],
        src: [4212,4214]
      },
      {
        id: "c07-l01-p05",
        title: "Amazon SQS（Simple Queue Service） ③",
        html: "<ul><li>スループット：<b class=\"key\">300 TPS</b>（バッチで<b class=\"key\">3,000 msg/秒</b>）。<b class=\"key\">高スループットモード</b>で大幅に拡張可<ul><li>キュー名は末尾が <b class=\"key\">.fifo</b> 必須</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>既存の標準キューを FIFO に<b class=\"key\">変更できない</b> → 新規作成して移行</span></li></ul></li><li><b class=\"key\">メッセージグループID</b>：グループ内は順序保証、グループ間は並列処理（例：注文IDごと）</li></ul>",
        oxIds: ["c07-ox-06"],
        src: [4215,4218]
      },
      {
        id: "c07-l01-p06",
        title: "Amazon SQS（Simple Queue Service） ④",
        html: "<ul><li><b class=\"key\">可視性タイムアウト（Visibility Timeout）</b><ul><li>受信されたメッセージを一定時間<b class=\"key\">他のコンシューマーから見えなくする</b></li><li>デフォルト<b class=\"key\">30秒</b>、最大<b class=\"key\">12時間</b></li><li>処理が時間内に終わらない → 再び見えるようになり<b class=\"key\">二重処理</b>の原因</li><li>対策：処理時間より長く設定、または <b class=\"key\">ChangeMessageVisibility</b> で延長</li></ul></li></ul>",
        oxIds: ["c07-ox-03"],
        src: [4219,4223]
      },
      {
        id: "c07-l01-p07",
        title: "Amazon SQS（Simple Queue Service） ⑤",
        html: "<ul><li>処理成功後にコンシューマーが <b class=\"key\">DeleteMessage</b> で削除する（自動では消えない）</li><li><b class=\"key\">デッドレターキュー（DLQ）</b><ul><li><b class=\"key\">maxReceiveCount</b> 回受信しても処理できないメッセージ（ポイズンメッセージ）を隔離</li><li>原因調査・再処理用。<b class=\"key\">DLQ redrive</b> で元キューへ戻せる</li><li>FIFOキューのDLQは<b class=\"key\">FIFOキュー</b>、標準キューのDLQは<b class=\"key\">標準キュー</b></li></ul></li></ul>",
        oxIds: ["c07-ox-04"],
        src: [4224,4228]
      },
      {
        id: "c07-l01-p08",
        title: "Amazon SQS（Simple Queue Service） ⑥",
        html: "<ul><li><b class=\"key\">ロングポーリング</b><ul><li><b class=\"key\">ReceiveMessageWaitTimeSeconds</b> を <b class=\"key\">1〜20秒</b>に設定。メッセージが来るまで待つ</li><li>空の応答（空受信）を減らす → <b class=\"key\">API呼び出し回数・コスト削減</b></li><li>ショートポーリング（0秒）は即座に返るが空振りが多い</li></ul></li></ul>",
        oxIds: ["c07-ox-05"],
        src: [4229,4232]
      },
      {
        id: "c07-l01-p09",
        title: "Amazon SQS（Simple Queue Service） ⑦",
        html: "<ul><li><b class=\"key\">遅延キュー（Delay Queue）</b>：新着メッセージを <b class=\"key\">0〜15分</b>見えなくする（キュー単位）<ul><li><b class=\"key\">メッセージタイマー</b>：メッセージ単位の遅延（標準キューのみ）</li></ul></li><li><b class=\"key\">メッセージ保持期間</b>：デフォルト<b class=\"key\">4日</b>、<b class=\"key\">1分〜14日</b></li></ul>",
        oxIds: [],
        src: [4233,4235]
      },
      {
        id: "c07-l01-p10",
        title: "Amazon SQS（Simple Queue Service） ⑧",
        html: "<ul><li><b class=\"key\">最大メッセージサイズ</b>：<b class=\"key\">1 MiB</b>（2025年に256 KiBから引上げ。古い問題では256 KB）<ul><li>さらに大きいデータ → <b class=\"key\">SQS拡張クライアントライブラリ</b>で本体をS3に置き、参照をSQSへ</li></ul></li><li>暗号化：<b class=\"key\">SSE-SQS</b>（デフォルト）または <b class=\"key\">SSE-KMS</b>。アクセス制御は<b class=\"key\">SQSアクセスポリシー</b></li></ul>",
        oxIds: [],
        src: [4236,4238]
      },
      {
        id: "c07-l01-p11",
        title: "Amazon SQS（Simple Queue Service） ⑨",
        html: "<ul><li><b class=\"key\">SQS + Auto Scaling（頻出）</b><ul><li>CloudWatchメトリクス <b class=\"key\">ApproximateNumberOfMessagesVisible</b>（キューの滞留数）を基にスケール</li><li>推奨：<b class=\"key\">インスタンスあたりのバックログ</b>（滞留数÷インスタンス数）をカスタムメトリクスにし、<b class=\"key\">ターゲット追跡</b></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>CPU使用率だけではキュー滞留を正しく反映できないことがある</span></li></ul></li><li>Lambdaとの連携：<b class=\"key\">イベントソースマッピング</b>でLambdaがポーリング（バッチ処理、部分失敗レポート）</li></ul>",
        oxIds: [],
        src: [4239,4244]
      },
      {
        id: "c07-l01-p12",
        title: "Amazon SNS（Simple Notification Service） ①",
        html: "<ul><li>フルマネージドな <b class=\"key\">Pub/Sub</b>。1つのトピックに発行 → 全サブスクライバーへ<b class=\"key\">プッシュ</b></li><li>サブスクライバー：<b class=\"key\">SQS、Lambda、HTTP/S、Eメール、SMS、モバイルプッシュ、Amazon Data Firehose</b></li><li><b class=\"key\">ファンアウト（SNS + SQS）<span class=\"badge b-freq\">頻出</span></b><ul><li>SNSトピック → 複数のSQSキューへ同時配信 → 各キューを別システムが独立して処理</li><li>例：注文イベント → 「在庫」「請求」「分析」の3キュー</li><li>SNS単体と違い、受け手が停止してもメッセージは<b class=\"key\">SQSに残る</b>（耐久性・リトライ）</li><li>SQSアクセスポリシーでSNSトピックからの送信を許可する必要あり</li></ul></li><li><b class=\"key\">S3イベント通知 → SNS → 複数SQS</b>：1つのS3イベントを複数の処理系に配る定番構成</li></ul>",
        oxIds: ["c07-ox-08"],
        src: [4246,4253]
      },
      {
        id: "c07-l01-p13",
        title: "Amazon SNS（Simple Notification Service） ②",
        html: "<ul><li><b class=\"key\">FIFOトピック</b>：順序保証・重複排除。<b class=\"key\">SQS FIFOキュー</b>などと組み合わせて順序付きファンアウト</li><li><b class=\"key\">メッセージフィルタリング</b><ul><li>サブスクリプションに<b class=\"key\">フィルターポリシー</b>（JSON）を設定し、条件に合うメッセージだけ受信</li><li>メッセージ属性またはメッセージ本文（ペイロード）でフィルタ可能</li><li><span class=\"badge b-cmp\">比較</span>トピックを分けずに「受け手ごとに必要な分だけ」配れる → 構成がシンプル</li></ul></li><li><span class=\"badge b-cmp\">比較</span>SNS＝プッシュ・保持しない／SQS＝プル・保持する（最大14日）</li></ul>",
        oxIds: ["c07-ox-09"],
        src: [4254,4260]
      },
      {
        id: "c07-l01-p14",
        title: "Amazon EventBridge ①",
        html: "<ul><li>サーバーレスな<b class=\"key\">イベントバス</b>。旧 CloudWatch Events の発展形</li><li><b class=\"key\">イベントバス</b>：デフォルト（AWSサービスのイベント）／カスタム／パートナー</li><li><b class=\"key\">ルール</b>：イベントパターン（JSON）でマッチ → <b class=\"key\">ターゲット</b>（Lambda、SQS、SNS、Step Functions、ECSタスク等）へ<ul><li>1ルールに複数ターゲット可。イベントの内容で細かく振り分け</li></ul></li><li><b class=\"key\">パートナーイベントソース</b>：<b class=\"key\">SaaS（Zendesk、Datadog、PagerDuty 等）</b>のイベントを直接受信<ul><li><span class=\"badge b-freq\">頻出</span>「SaaSからのイベントをコードを書かずに取り込む」→ EventBridge</li></ul></li></ul>",
        oxIds: ["c07-ox-10"],
        src: [4262,4267]
      },
      {
        id: "c07-l01-p15",
        title: "Amazon EventBridge ②",
        html: "<ul><li><b class=\"key\">API送信先（API Destinations）</b>：外部のHTTPエンドポイントをターゲットにできる</li><li><b class=\"key\">EventBridge Scheduler</b><ul><li>cron/rate式の定期実行、<b class=\"key\">1回限り</b>のスケジュール、<b class=\"key\">タイムゾーン</b>指定</li><li>大量（数百万規模）のスケジュールを管理。「毎日深夜にLambda実行」→ Scheduler</li></ul></li><li><b class=\"key\">アーカイブとリプレイ</b>：過去のイベントを保存し、後から再送（障害後の再処理・テスト）</li><li><b class=\"key\">スキーマレジストリ</b>：イベント構造を自動検出し、コードバインディング生成</li></ul>",
        oxIds: ["c07-ox-11"],
        src: [4268,4273]
      },
      {
        id: "c07-l01-p16",
        title: "Amazon EventBridge ③",
        html: "<ul><li><b class=\"key\">EventBridge Pipes</b>：ソース（SQS、Kinesis、DynamoDB Streams 等）→フィルタ→エンリッチ→ターゲット<ul><li><b class=\"key\">1対1の連携</b>をグルーコード（Lambda）なしで実現</li></ul></li><li>クロスアカウント／クロスリージョンでイベントバス間の送信が可能</li><li><span class=\"badge b-cmp\">比較</span>SNS＝高スループットのシンプルな通知／EventBridge＝<b class=\"key\">内容ベースの高度なルーティング</b>、SaaS連携</li></ul>",
        oxIds: [],
        src: [4274,4278]
      },
      {
        id: "c07-l01-p17",
        title: "AWS Step Functions ①",
        html: "<ul><li><b class=\"key\">ステートマシン</b>でサービス呼び出しを順序・分岐・並列・リトライ付きで<b class=\"key\">オーケストレーション</b></li><li>Amazon States Language（JSON）で定義。ビジュアルな Workflow Studio</li><li><b class=\"key\">Standard ワークフロー</b><ul><li>最大実行時間 <b class=\"key\">1年</b></li><li><b class=\"key\">exactly-once</b> 実行。実行履歴を保持（監査向き）</li><li>用途：長時間の業務フロー、<b class=\"key\">人の承認待ち</b>（コールバック／タスクトークン）</li></ul></li></ul>",
        oxIds: ["c07-ox-12"],
        src: [4280,4285]
      },
      {
        id: "c07-l01-p18",
        title: "AWS Step Functions ②",
        html: "<ul><li><b class=\"key\">Express ワークフロー</b><ul><li>最大実行時間 <b class=\"key\">5分</b></li><li>大量・高頻度イベント処理（IoT、ストリーム処理）。<b class=\"key\">at-least-once</b>（非同期の場合）</li><li>実行回数・時間ベース課金で大量処理が安い</li></ul></li></ul>",
        oxIds: [],
        src: [4286,4289]
      },
      {
        id: "c07-l01-p19",
        title: "AWS Step Functions ③",
        html: "<ul><li>主な機能：<b class=\"key\">Retry/Catch</b>（エラー処理）、<b class=\"key\">Parallel</b>、<b class=\"key\">Map</b>（配列ごとに反復）<ul><li><b class=\"key\">Distributed Map</b>：S3の大量オブジェクトを高並列処理</li></ul></li><li>200以上のAWSサービスを<b class=\"key\">SDK統合</b>で直接呼べる（Lambdaを挟まない）</li><li><span class=\"badge b-freq\">頻出</span>「複数のLambdaを順番に実行、失敗時はリトライ、承認ステップあり」→ Step Functions</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Lambda同士を直接呼び合う構成は密結合でエラー処理が複雑 → Step Functions</span></li></ul>",
        oxIds: [],
        src: [4290,4295]
      },
      {
        id: "c07-l01-p20",
        title: "Amazon MQ ①",
        html: "<ul><li><b class=\"key\">Apache ActiveMQ</b> と <b class=\"key\">RabbitMQ</b> のマネージドメッセージブローカー</li><li>業界標準プロトコル：<b class=\"key\">JMS、AMQP、MQTT、OpenWire、STOMP</b></li><li><span class=\"badge b-freq\">頻出</span>「オンプレミスの既存メッセージングを<b class=\"key\">コード変更最小</b>でAWS移行」→ <b class=\"key\">Amazon MQ</b></li></ul>",
        oxIds: ["c07-ox-13"],
        src: [4297,4299]
      },
      {
        id: "c07-l01-p21",
        title: "Amazon MQ ②",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>新規クラウドネイティブ開発なら <b class=\"key\">SQS/SNS</b>（無制限スケール、より安価・シンプル）</li><li>高可用性：ActiveMQ は <b class=\"key\">アクティブ/スタンバイ</b>（Multi-AZ）、RabbitMQ は<b class=\"key\">3ノードクラスター</b></li><li>VPC内で動作（ブローカーインスタンスのサイズを選ぶ＝サーバーレスではない）</li></ul>",
        oxIds: [],
        src: [4300,4303]
      },
      {
        id: "c07-l01-p22",
        title: "Amazon API Gateway ①",
        html: "<ul><li>REST/HTTP/WebSocket API を作成・公開・保護するフルマネージドサービス</li><li><b class=\"key\">REST API</b>：機能が最も豊富<ul><li><b class=\"key\">APIキー・使用量プラン</b>、<b class=\"key\">キャッシュ</b>、リクエスト検証、<b class=\"key\">AWS WAF</b>連携</li><li><b class=\"key\">プライベートエンドポイント</b>、リソースポリシー、X-Ray</li></ul></li></ul>",
        oxIds: [],
        src: [4305,4308]
      },
      {
        id: "c07-l01-p23",
        title: "Amazon API Gateway ②",
        html: "<ul><li><b class=\"key\">HTTP API</b>：<b class=\"key\">低コスト・低レイテンシー</b>のシンプル版<ul><li><b class=\"key\">JWTオーソライザー</b>（OIDC/OAuth 2.0）、Lambda/IAM認可</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>使用量プラン・APIキー・キャッシュは<b class=\"key\">REST APIのみ</b></span></li></ul></li><li><b class=\"key\">WebSocket API</b>：双方向・リアルタイム通信（チャット、ダッシュボード、ゲーム）</li></ul>",
        oxIds: ["c07-ox-14"],
        src: [4309,4312]
      },
      {
        id: "c07-l01-p24",
        title: "Amazon API Gateway ③",
        html: "<ul><li><b class=\"key\">エンドポイントタイプ</b><ul><li><b class=\"key\">エッジ最適化</b>：CloudFrontのエッジ経由。<b class=\"key\">世界中の地理的に分散した</b>クライアント向け</li><li><b class=\"key\">リージョン</b>：同一リージョンのクライアント向け。独自のCloudFrontを前段に置く場合も</li><li><b class=\"key\">プライベート</b>：<b class=\"key\">VPC内からのみ</b>アクセス（インターフェイスVPCエンドポイント経由）</li></ul></li></ul>",
        oxIds: ["c07-ox-15"],
        src: [4313,4316]
      },
      {
        id: "c07-l01-p25",
        title: "Amazon API Gateway ④",
        html: "<ul><li><b class=\"key\">スロットリング</b><ul><li>アカウント単位（リージョンごと）：定常 <b class=\"key\">10,000 RPS</b>、バースト <b class=\"key\">5,000</b>（デフォルト、引上げ可）</li><li>超過時は <b class=\"key\">429 Too Many Requests</b></li><li><b class=\"key\">使用量プラン</b>：APIキーごとにスロットリングと<b class=\"key\">クォータ（日/週/月の上限）</b>を設定 → 顧客別課金・制限</li></ul></li></ul>",
        oxIds: ["c07-ox-16"],
        src: [4317,4320]
      },
      {
        id: "c07-l01-p26",
        title: "Amazon API Gateway ⑤",
        html: "<ul><li><b class=\"key\">キャッシュ</b>：ステージ単位。TTLデフォルト <b class=\"key\">300秒</b>、最大 <b class=\"key\">3,600秒</b><ul><li>バックエンドの負荷とレイテンシーを削減</li></ul></li></ul>",
        oxIds: [],
        src: [4321,4322]
      },
      {
        id: "c07-l01-p27",
        title: "Amazon API Gateway ⑥",
        html: "<ul><li><b class=\"key\">オーソライザー（認可）</b><ul><li><b class=\"key\">IAM認可</b>（SigV4署名）：AWS内部・IAMユーザー/ロール向け</li><li><b class=\"key\">Amazon Cognitoユーザープール</b>：アプリのエンドユーザー認証</li><li><b class=\"key\">Lambdaオーソライザー</b>：独自トークン・サードパーティ認証（トークン型/リクエスト型）</li></ul></li><li>統合タイムアウト：デフォルト最大 <b class=\"key\">29秒</b>（長時間処理は非同期化を検討）</li><li>バックエンド：Lambda、HTTPエンドポイント、AWSサービス（SQS等へ直接統合）、VPCリンク（NLB/ALB）</li></ul>",
        oxIds: [],
        src: [4323,4329]
      },
      {
        id: "c07-l01-p28",
        title: "AWS AppSync",
        html: "<ul><li>マネージド <b class=\"key\">GraphQL</b> API（＋リアルタイムPub/Sub）</li><li>複数データソース（DynamoDB、Lambda、Aurora、OpenSearch、HTTP）を<b class=\"key\">1つのGraphQLエンドポイント</b>で集約</li><li><b class=\"key\">サブスクリプション</b>（WebSocket）でリアルタイム更新、モバイルの<b class=\"key\">オフライン同期</b>（Amplify）</li><li><span class=\"badge b-freq\">頻出</span>「GraphQL」「必要なデータだけ1回のリクエストで取得」「リアルタイム同期」→ AppSync</li><li><span class=\"badge b-cmp\">比較</span>REST/HTTPならAPI Gateway、GraphQLならAppSync</li></ul>",
        oxIds: [],
        src: [4331,4336]
      },
    ] },
    { id: "c07-l02", title: "ストリーミングとデータ分析基盤（Kinesis・MSK・Athena・Glue・EMR）", pages: [
      {
        id: "c07-l02-p01",
        title: "Amazon Kinesis Data Streams（KDS） ①",
        html: "<ul><li><b class=\"key\">リアルタイム</b>ストリーミングデータの取り込み（ミリ秒〜秒の遅延）</li><li><b class=\"key\">シャード</b>単位で容量を確保<ul><li>書込み：<b class=\"key\">1 MB/秒 または 1,000レコード/秒</b>（シャードあたり）</li><li>読取り：<b class=\"key\">2 MB/秒</b>（シャードあたり、全コンシューマーで共有）</li><li><b class=\"key\">拡張ファンアウト</b>：コンシューマーごとに <b class=\"key\">2 MB/秒/シャード</b> を専有</li></ul></li></ul>",
        oxIds: [],
        src: [4338,4342]
      },
      {
        id: "c07-l02-p02",
        title: "Amazon Kinesis Data Streams（KDS） ②",
        html: "<ul><li>容量モード：<b class=\"key\">オンデマンド</b>（自動スケール）／<b class=\"key\">プロビジョンド</b>（シャード数指定）</li><li><b class=\"key\">データ保持</b>：デフォルト <b class=\"key\">24時間</b>、最大 <b class=\"key\">365日</b> → <b class=\"key\">再処理（リプレイ）可能</b></li></ul>",
        oxIds: [],
        src: [4343,4344]
      },
      {
        id: "c07-l02-p03",
        title: "Amazon Kinesis Data Streams（KDS） ③",
        html: "<ul><li><b class=\"key\">パーティションキー</b>で同じシャードに振り分け → <b class=\"key\">シャード内で順序保証</b></li><li>複数のアプリ（Lambda、Flink、KCLアプリ）が同じデータを<b class=\"key\">並行して</b>読める</li><li><span class=\"badge b-cmp\">比較</span>SQSは1メッセージを1コンシューマーが処理して削除／KDSは複数コンシューマーが同じデータを読み、保持期間内は残る</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>KDSは自前でコンシューマーを書く必要あり。「コード不要でS3に保存」なら Firehose</span></li></ul>",
        oxIds: ["c07-ox-17"],
        src: [4345,4349]
      },
      {
        id: "c07-l02-p04",
        title: "Amazon Data Firehose（旧 Kinesis Data Firehose） ①",
        html: "<ul><li>ストリーミングデータを<b class=\"key\">宛先へ配信</b>するフルマネージドサービス（<b class=\"key\">ニアリアルタイム</b>）</li><li>宛先<ul><li><b class=\"key\">Amazon S3、Amazon Redshift（S3経由のCOPY）、Amazon OpenSearch Service</b></li><li><b class=\"key\">Splunk、HTTPエンドポイント</b>、Snowflake、Apache Icebergテーブル 等</li></ul></li><li><b class=\"key\">バッファリング</b>（サイズ・時間）してまとめて配信 → 厳密なリアルタイムではない</li></ul>",
        oxIds: [],
        src: [4351,4355]
      },
      {
        id: "c07-l02-p05",
        title: "Amazon Data Firehose（旧 Kinesis Data Firehose） ②",
        html: "<ul><li><b class=\"key\">Lambdaでデータ変換</b>、<b class=\"key\">Parquet/ORCへの形式変換</b>（Glue Data Catalogのスキーマ使用）、圧縮</li><li><b class=\"key\">自動スケーリング</b>、シャード管理不要、<b class=\"key\">データの保持・リプレイ機能はない</b></li><li>ソース：直接PUT、KDS、Amazon MSK、CloudWatch Logs、AWS IoT 等</li><li><span class=\"badge b-freq\">頻出</span>「ストリームデータを<b class=\"key\">運用負荷最小</b>でS3/Redshift/OpenSearchへ」→ Firehose</li></ul>",
        oxIds: ["c07-ox-18"],
        src: [4356,4360]
      },
      {
        id: "c07-l02-p06",
        title: "Amazon Managed Service for Apache Flink（旧 Kinesis Data Analytics）",
        html: "<ul><li><b class=\"key\">Apache Flink</b> アプリをサーバー管理なしで実行。ストリームを<b class=\"key\">リアルタイム分析・集計</b></li><li>例：直近5分の移動平均、異常検知、ウィンドウ集計</li><li>ソース：KDS、Amazon MSK。出力：KDS、Firehose、S3 等</li><li><span class=\"badge b-cmp\">比較</span>KDSは「取り込み」、Flinkは「その場で分析」、Firehoseは「宛先への配送」</li></ul>",
        oxIds: [],
        src: [4362,4366]
      },
      {
        id: "c07-l02-p07",
        title: "Amazon Kinesis Video Streams",
        html: "<ul><li>カメラ等からの<b class=\"key\">動画ストリーム</b>を取り込み・保存・再生</li><li><b class=\"key\">Amazon Rekognition Video</b> と連携した顔検出、WebRTCによる双方向ストリーミング</li><li><span class=\"badge b-freq\">頻出</span>「防犯カメラ映像をリアルタイムで取り込み解析」→ Kinesis Video Streams + Rekognition</li></ul>",
        oxIds: [],
        src: [4368,4371]
      },
      {
        id: "c07-l02-p08",
        title: "Amazon MSK（Managed Streaming for Apache Kafka）",
        html: "<ul><li><b class=\"key\">Apache Kafka</b> のフルマネージド版。<b class=\"key\">MSK Serverless</b>（容量管理不要）もあり</li><li><b class=\"key\">MSK Connect</b>：Kafka Connect コネクターをマネージド実行</li><li><span class=\"badge b-freq\">頻出</span>「オンプレミスの<b class=\"key\">Kafka</b>をそのままAWSへ」「Kafka APIを使い続けたい」→ MSK</li><li><span class=\"badge b-cmp\">比較</span>KDS＝AWSネイティブでシンプル／MSK＝Kafka互換・細かな設定（トピック、パーティション）</li></ul>",
        oxIds: [],
        src: [4373,4377]
      },
      {
        id: "c07-l02-p09",
        title: "Amazon Athena ①",
        html: "<ul><li><b class=\"key\">S3上のデータに標準SQLで直接クエリ</b>するサーバーレスサービス（Trino/Presto ベース）</li><li><b class=\"key\">スキャンしたデータ量に応じた課金</b> → サーバー管理・事前ロード不要</li><li>コスト削減・高速化の3点セット<span class=\"badge b-freq\">頻出</span><ul><li><b class=\"key\">列指向形式（Parquet/ORC）</b>に変換</li><li><b class=\"key\">圧縮</b></li><li><b class=\"key\">パーティション分割</b>（例：year=/month=/day=）</li></ul></li><li><b class=\"key\">AWS Glue Data Catalog</b> をメタデータ（テーブル定義）として使用</li></ul>",
        oxIds: ["c07-ox-19"],
        src: [4379,4385]
      },
      {
        id: "c07-l02-p10",
        title: "Amazon Athena ②",
        html: "<ul><li><b class=\"key\">フェデレーテッドクエリ</b>：Lambdaコネクターで RDS、DynamoDB、オンプレミスDB等にもSQL</li><li><b class=\"key\">ワークグループ</b>：チーム別にクエリ実行やスキャン量の上限を制御</li><li>用途：ALB/CloudFront/VPCフローログ/CloudTrailログの<b class=\"key\">アドホック分析</b></li><li><span class=\"badge b-cmp\">比較</span>アドホックな分析＝Athena／複雑な集計を繰り返す大規模DWH＝Amazon Redshift</li></ul>",
        oxIds: [],
        src: [4386,4390]
      },
      {
        id: "c07-l02-p11",
        title: "AWS Glue ①",
        html: "<ul><li>サーバーレスな <b class=\"key\">ETL（抽出・変換・ロード）</b> とデータカタログのサービス</li><li><b class=\"key\">クローラー</b>：S3やDBを走査し、<b class=\"key\">スキーマを自動推測</b>してデータカタログにテーブル登録</li><li><b class=\"key\">Glue Data Catalog</b>：Hiveメタストア互換の中央メタデータリポジトリ<ul><li>Athena、Redshift Spectrum、EMR から共通に参照</li></ul></li></ul>",
        oxIds: ["c07-ox-20"],
        src: [4392,4395]
      },
      {
        id: "c07-l02-p12",
        title: "AWS Glue ②",
        html: "<ul><li><b class=\"key\">Glue ETLジョブ</b>：Apache Spark（または Python shell）でサーバーレスに変換<ul><li><b class=\"key\">ジョブブックマーク</b>：処理済みデータを記録し、<b class=\"key\">増分データだけ</b>処理</li><li>例：CSV → Parquet 変換、複数ソースの結合</li></ul></li><li><b class=\"key\">Glue Studio</b>：ビジュアルにETLジョブを作成</li></ul>",
        oxIds: [],
        src: [4396,4399]
      },
      {
        id: "c07-l02-p13",
        title: "AWS Glue ③",
        html: "<ul><li><b class=\"key\">AWS Glue DataBrew</b>：<b class=\"key\">ノーコード</b>でデータのクレンジング・正規化（ビジュアルなデータ準備）<ul><li><span class=\"badge b-freq\">頻出</span>「データアナリストがコードを書かずに前処理」→ DataBrew</li></ul></li><li><b class=\"key\">Glue Data Quality</b>：データ品質ルールの評価</li><li><span class=\"badge b-cmp\">比較</span>Glue＝サーバーレスETL／EMR＝クラスターを細かく制御するビッグデータ処理</li></ul>",
        oxIds: [],
        src: [4400,4404]
      },
      {
        id: "c07-l02-p14",
        title: "Amazon EMR ①",
        html: "<ul><li><b class=\"key\">Hadoop、Apache Spark、Hive、HBase、Presto</b> などのマネージドビッグデータ基盤</li><li>ノード構成<ul><li><b class=\"key\">プライマリ（マスター）ノード</b>：クラスター管理</li><li><b class=\"key\">コアノード</b>：HDFSにデータを保存＋タスク実行</li><li><b class=\"key\">タスクノード</b>：処理のみ（データを持たない）→ <b class=\"key\">スポットインスタンスに最適</b></li></ul></li></ul>",
        oxIds: ["c07-ox-21"],
        src: [4406,4410]
      },
      {
        id: "c07-l02-p15",
        title: "Amazon EMR ②",
        html: "<ul><li>デプロイ形態：<b class=\"key\">EMR on EC2</b>、<b class=\"key\">EMR on EKS</b>、<b class=\"key\">EMR Serverless</b></li><li><b class=\"key\">EMRFS</b>でS3をストレージに使える → 計算と保存を分離し、一時クラスター運用</li><li><span class=\"badge b-freq\">頻出</span>「既存のHadoop/Sparkジョブを移行」「ペタバイト規模の処理」→ EMR</li><li>コスト：タスクノードにスポット、長期稼働ノードにリザーブド/Savings Plans</li></ul>",
        oxIds: [],
        src: [4411,4415]
      },
    ] },
    { id: "c07-l03", title: "データレイク・可視化・検索・AIサービス", pages: [
      {
        id: "c07-l03-p01",
        title: "AWS Lake Formation ①",
        html: "<ul><li><b class=\"key\">データレイクを数日で構築</b>し、<b class=\"key\">一元的に権限管理</b>するサービス（Glue基盤の上に構築）</li><li><b class=\"key\">きめ細かなアクセス制御</b>：データベース・テーブル・<b class=\"key\">列・行・セル単位</b></li><li><b class=\"key\">LFタグベースのアクセス制御（LF-TBAC）</b>：タグで大量のリソース権限を管理</li></ul>",
        oxIds: [],
        src: [4417,4419]
      },
      {
        id: "c07-l03-p02",
        title: "AWS Lake Formation ②",
        html: "<ul><li><b class=\"key\">クロスアカウント共有</b>：他アカウントにデータカタログを共有</li><li>Athena、Redshift Spectrum、EMR、Glue からのアクセスに同じ権限を適用</li><li><span class=\"badge b-freq\">頻出</span>「データレイクの<b class=\"key\">列レベル</b>アクセス制御」「部門ごとに見える列を制限」→ Lake Formation</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>S3バケットポリシーやIAMだけでは<b class=\"key\">列・行単位</b>の制御はできない</span></li></ul>",
        oxIds: ["c07-ox-22"],
        src: [4420,4424]
      },
      {
        id: "c07-l03-p03",
        title: "Amazon QuickSight",
        html: "<ul><li>サーバーレスな <b class=\"key\">BI（ダッシュボード・可視化）</b> サービス</li><li><b class=\"key\">SPICE</b>：インメモリ計算エンジンで高速表示</li><li><b class=\"key\">ML Insights</b>（異常検知・予測）、自然言語での質問（Amazon Q in QuickSight）</li><li>行レベルセキュリティ（RLS）、閲覧者のセッション単位課金</li><li>データソース：Athena、Redshift、RDS、S3、SaaS 等</li><li>2025年10月に <b class=\"key\">Amazon Quick Suite</b> の一部（Quick Sight）として再編、その後 <b class=\"key\">Amazon Quick</b> に名称短縮（試験では QuickSight の名前で出る）</li><li><span class=\"badge b-freq\">頻出</span>「経営層向けダッシュボード」「データを可視化」→ QuickSight</li></ul>",
        oxIds: [],
        src: [4426,4433]
      },
      {
        id: "c07-l03-p04",
        title: "Amazon OpenSearch Service",
        html: "<ul><li><b class=\"key\">OpenSearch / Elasticsearch</b> 互換の<b class=\"key\">全文検索・ログ分析</b>サービス（ELKスタックの代替）</li><li><b class=\"key\">OpenSearch Dashboards</b>（旧Kibana相当）で可視化</li><li>形態：ドメイン（クラスター）／<b class=\"key\">OpenSearch Serverless</b></li><li>典型パターン<ul><li><b class=\"key\">CloudWatch Logs サブスクリプション → OpenSearch</b> でログ検索</li><li><b class=\"key\">DynamoDB → OpenSearch</b>（ゼロETL統合）で全文検索を追加</li><li>Firehose → OpenSearch でストリームを索引化</li></ul></li><li><span class=\"badge b-freq\">頻出</span>「全文検索」「部分一致・あいまい検索」「ログのリアルタイム検索・可視化」→ OpenSearch</li></ul>",
        oxIds: [],
        src: [4435,4443]
      },
      {
        id: "c07-l03-p05",
        title: "データレイク構成パターン ①",
        html: "<ul><li>データレイク＝<b class=\"key\">S3に生データを形式を問わず集約</b>し、用途に応じて分析する構成</li><li>典型ゾーン：<b class=\"key\">raw（生）→ processed（加工）→ curated（分析用）</b></li></ul>",
        oxIds: [],
        src: [4445,4446]
      },
      {
        id: "c07-l03-p06",
        title: "データレイク構成パターン ②",
        html: "<ul><li>バッチ型パターン<ul><li>収集：S3（DataSync、Transfer Family、DMS 等で投入）</li><li>カタログ化：<b class=\"key\">Glue クローラー → Glue Data Catalog</b></li><li>変換：<b class=\"key\">Glue ETL</b>（CSV→Parquet、パーティション分割）</li><li>分析：<b class=\"key\">Athena</b>（アドホック）/ <b class=\"key\">Redshift Spectrum</b> / EMR</li><li>可視化：<b class=\"key\">QuickSight</b></li><li>権限：<b class=\"key\">Lake Formation</b></li></ul></li></ul>",
        oxIds: [],
        src: [4447,4453]
      },
      {
        id: "c07-l03-p07",
        title: "データレイク構成パターン ③",
        html: "<ul><li>ストリーミング型パターン<ul><li><b class=\"key\">KDS → Firehose → S3（Parquet変換）→ Athena</b></li><li>リアルタイム分析が必要なら <b class=\"key\">KDS → Managed Service for Apache Flink</b></li><li>運用最小でS3へ → <b class=\"key\">Firehose直接投入</b></li></ul></li><li><span class=\"badge b-cmp\">比較</span>データレイク（S3・スキーマオンリード）／DWH（Redshift・スキーマオンライト）</li></ul>",
        oxIds: [],
        src: [4454,4459]
      },
      {
        id: "c07-l03-p08",
        title: "AIサービス（用途の見分け方） ①",
        html: "<ul><li><span class=\"badge b-freq\">頻出</span>「ML知識なしで○○したい」→ 以下の<b class=\"key\">AI事前学習済みサービス</b>をAPIで呼ぶ</li><li><b class=\"key\">Amazon Rekognition</b>：<b class=\"key\">画像・動画</b>の分析<ul><li>物体・シーン検出、<b class=\"key\">顔の検出・比較</b>、有名人認識、<b class=\"key\">不適切コンテンツの検出（モデレーション）</b>、PPE検出</li></ul></li></ul>",
        oxIds: [],
        src: [4461,4463]
      },
      {
        id: "c07-l03-p09",
        title: "AIサービス（用途の見分け方） ②",
        html: "<ul><li><b class=\"key\">Amazon Comprehend</b>：<b class=\"key\">テキストの自然言語処理（NLP）</b><ul><li><b class=\"key\">感情分析</b>、エンティティ抽出、キーフレーズ、言語検出、<b class=\"key\">PII検出</b></li><li><b class=\"key\">Comprehend Medical</b>：医療テキストから病名・薬剤を抽出</li></ul></li></ul>",
        oxIds: ["c07-ox-24"],
        src: [4464,4466]
      },
      {
        id: "c07-l03-p10",
        title: "AIサービス（用途の見分け方） ③",
        html: "<ul><li><b class=\"key\">Amazon Textract</b>：<b class=\"key\">スキャン文書・PDFから文字・表・フォーム</b>を抽出（OCR以上）<ul><li>請求書・領収書・身分証の解析（AnalyzeExpense / AnalyzeID）</li></ul></li><li><b class=\"key\">Amazon Transcribe</b>：<b class=\"key\">音声→テキスト</b>（文字起こし）<ul><li>話者識別、<b class=\"key\">PII自動マスキング</b>、カスタム語彙、Call Analytics、Transcribe Medical</li></ul></li></ul>",
        oxIds: ["c07-ox-23","c07-ox-25"],
        src: [4467,4470]
      },
      {
        id: "c07-l03-p11",
        title: "AIサービス（用途の見分け方） ④",
        html: "<ul><li><b class=\"key\">Amazon Translate</b>：<b class=\"key\">テキストの機械翻訳</b>（カスタム用語集）</li><li><b class=\"key\">Amazon Polly</b>：<b class=\"key\">テキスト→音声</b>（読み上げ）<ul><li>SSML、<b class=\"key\">レキシコン</b>（読み方辞書）、ニューラル音声</li></ul></li></ul>",
        oxIds: [],
        src: [4471,4473]
      },
      {
        id: "c07-l03-p12",
        title: "AIサービス（用途の見分け方） ⑤",
        html: "<ul><li><b class=\"key\">Amazon Lex</b>：<b class=\"key\">チャットボット・音声ボット</b>（Alexaと同じ技術、音声認識＋自然言語理解）<ul><li>コールセンター（Amazon Connect）と連携</li></ul></li><li><b class=\"key\">Amazon Kendra</b>：<b class=\"key\">ML搭載のエンタープライズ検索</b><ul><li>社内文書（S3、SharePoint、Confluence等）に<b class=\"key\">自然言語の質問</b>で回答</li></ul></li></ul>",
        oxIds: [],
        src: [4474,4477]
      },
      {
        id: "c07-l03-p13",
        title: "AIサービス（用途の見分け方） ⑥",
        html: "<ul><li><b class=\"key\">Amazon SageMaker AI</b>（旧 Amazon SageMaker）：<b class=\"key\">独自MLモデル</b>の構築・学習・デプロイ<ul><li>データサイエンティスト向け。Studio、Autopilot、Ground Truth（ラベリング）、エンドポイント</li></ul></li></ul>",
        oxIds: [],
        src: [4478,4479]
      },
      {
        id: "c07-l03-p14",
        title: "AIサービス（用途の見分け方） ⑦",
        html: "<ul><li><b class=\"key\">Amazon Bedrock</b>：<b class=\"key\">生成AI</b>の基盤モデル（FM）を<b class=\"key\">APIで利用</b>（サーバーレス）<ul><li>Anthropic Claude、Amazon Nova、Meta Llama 等を選択可能</li><li><b class=\"key\">Knowledge Bases（RAG）</b>、<b class=\"key\">Agents</b>、<b class=\"key\">Guardrails</b>、ファインチューニング</li><li><span class=\"badge b-freq\">頻出</span>「生成AI」「基盤モデル」「インフラ管理なし」→ Bedrock</li></ul></li></ul>",
        oxIds: ["c07-ox-26"],
        src: [4480,4483]
      },
      {
        id: "c07-l03-p15",
        title: "AIサービス（用途の見分け方） ⑧",
        html: "<ul><li><b class=\"key\">Amazon Personalize</b>：<b class=\"key\">レコメンデーション</b>（「この商品を買った人はこちらも」）</li><li><b class=\"key\">Amazon Forecast</b>：<b class=\"key\">時系列予測</b>（需要・売上）。<b class=\"key\">新規顧客受付終了</b>（試験では古い選択肢）</li></ul>",
        oxIds: [],
        src: [4484,4485]
      },
      {
        id: "c07-l03-p16",
        title: "AIサービス（用途の見分け方） ⑨",
        html: "<ul><li><b class=\"key\">Amazon Fraud Detector</b>：<b class=\"key\">不正検知</b>（不正注文・偽アカウント）。新規顧客受付終了が発表済み</li><li>見分け方の軸<ul><li>入力が <b class=\"key\">画像/動画</b> → Rekognition、<b class=\"key\">紙・PDF</b> → Textract</li><li>入力が <b class=\"key\">音声</b> → Transcribe、出力が <b class=\"key\">音声</b> → Polly</li></ul></li></ul>",
        oxIds: [],
        src: [4486,4489]
      },
      {
        id: "c07-l03-p17",
        title: "AIサービス（用途の見分け方） ⑩",
        html: "<ul><li><b class=\"key\">テキストの意味</b> → Comprehend、<b class=\"key\">言語変換</b> → Translate<ul><li><b class=\"key\">会話</b> → Lex、<b class=\"key\">検索</b> → Kendra</li></ul></li></ul>",
        oxIds: [],
        src: [4490,4491]
      },
      {
        id: "c07-l03-p18",
        title: "AIサービス（用途の見分け方） ⑪",
        html: "<ul><li><b class=\"key\">独自モデル</b> → SageMaker AI、<b class=\"key\">生成AI</b> → Bedrock</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「顧客レビューの感情分析」はRekognitionではなく <b class=\"key\">Comprehend</b></span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「通話録音から感情を分析」→ Transcribe（文字起こし）→ Comprehend（感情分析）の<b class=\"key\">組合せ</b></span></li></ul>",
        oxIds: [],
        src: [4492,4495]
      },
    ] },
    { id: "c07-l04", title: "試験での出方と暗記数字", pages: [
      {
        id: "c07-l04-p01",
        title: "試験での出方 ①",
        html: "<ul><li>「トラフィック急増で注文が失われる」「処理を非同期化」→ <b class=\"key\">SQS</b>でバッファリング</li><li>「順序が重要」「重複処理不可」（金融取引・注文順） → <b class=\"key\">SQS FIFO</b></li><li>「処理に時間がかかり、メッセージが二重処理される」→ <b class=\"key\">可視性タイムアウトを延長</b></li><li>「何度も失敗するメッセージを隔離して調査」→ <b class=\"key\">DLQ</b></li><li>「空の受信が多くコストがかかる」→ <b class=\"key\">ロングポーリング</b>（WaitTimeSeconds 最大20秒）</li><li>「キューの滞留数に応じてEC2をスケール」→ <b class=\"key\">インスタンスあたりのバックログでターゲット追跡</b></li></ul>",
        oxIds: [],
        src: [4497,4502]
      },
      {
        id: "c07-l04-p02",
        title: "試験での出方 ②",
        html: "<ul><li>「1つのイベントを複数システムが独立して並行処理」→ <b class=\"key\">SNS + SQS ファンアウト</b></li><li>「受信者ごとに必要なメッセージだけ」→ <b class=\"key\">SNSメッセージフィルタリング</b></li><li>「SaaSのイベントに反応」「イベント内容でルーティング」→ <b class=\"key\">EventBridge</b></li><li>「定期実行（cron）」「1回限りの予約実行」→ <b class=\"key\">EventBridge Scheduler</b></li><li>「複数ステップ、リトライ、人の承認、長時間」→ <b class=\"key\">Step Functions Standard</b></li><li>「大量・短時間（5分以内）のワークフロー」→ <b class=\"key\">Step Functions Express</b></li></ul>",
        oxIds: [],
        src: [4503,4508]
      },
      {
        id: "c07-l04-p03",
        title: "試験での出方 ③",
        html: "<ul><li>「オンプレのActiveMQ/RabbitMQ（JMS/AMQP/MQTT）を移行」→ <b class=\"key\">Amazon MQ</b></li><li>「オンプレのKafkaを移行」→ <b class=\"key\">Amazon MSK</b></li><li>「APIキーごとの利用制限・課金」→ <b class=\"key\">API Gateway REST API の使用量プラン</b></li><li>「世界中のクライアント」→ <b class=\"key\">エッジ最適化</b>、「VPC内からのみ」→ <b class=\"key\">プライベートAPI</b></li><li>「GraphQL」「リアルタイム同期・オフライン」→ <b class=\"key\">AppSync</b></li></ul>",
        oxIds: [],
        src: [4509,4513]
      },
      {
        id: "c07-l04-p04",
        title: "試験での出方 ④",
        html: "<ul><li>「リアルタイム処理、複数コンシューマー、再処理」→ <b class=\"key\">Kinesis Data Streams</b></li><li>「運用負荷最小でストリームをS3/Redshift/OpenSearchへ」→ <b class=\"key\">Data Firehose</b></li><li>「ストリームのリアルタイム集計・異常検知」→ <b class=\"key\">Managed Service for Apache Flink</b></li><li>「S3のデータにSQLでアドホッククエリ、サーバー管理なし」→ <b class=\"key\">Athena</b></li><li>「Athenaのコスト削減」→ <b class=\"key\">Parquet化・圧縮・パーティション</b></li></ul>",
        oxIds: [],
        src: [4514,4518]
      },
      {
        id: "c07-l04-p05",
        title: "試験での出方 ⑤",
        html: "<ul><li>「スキーマを自動検出」→ <b class=\"key\">Glue クローラー</b>、「ノーコードでデータ準備」→ <b class=\"key\">Glue DataBrew</b></li><li>「Hadoop/Sparkクラスター」→ <b class=\"key\">EMR</b>（タスクノードにスポット）</li><li>「データレイクの列・行レベル権限」→ <b class=\"key\">Lake Formation</b></li><li>「ダッシュボード」→ <b class=\"key\">QuickSight</b>、「全文検索・ログ分析」→ <b class=\"key\">OpenSearch</b></li></ul>",
        oxIds: [],
        src: [4519,4522]
      },
      {
        id: "c07-l04-p06",
        title: "試験での出方 ⑥",
        html: "<ul><li>AIサービスは「<b class=\"key\">入力と出力の種類</b>」で見分ける（画像/文書/音声/テキスト/会話/検索/生成）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>SNSをキュー代わりにする → SNSはメッセージを<b class=\"key\">保持しない</b></span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Firehoseでリプレイ → <b class=\"key\">不可</b>。再処理が必要ならKDS</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>HTTP APIでキャッシュ・使用量プラン → <b class=\"key\">不可</b>。REST APIを選ぶ</span></li></ul>",
        oxIds: [],
        src: [4523,4526]
      },
      {
        id: "c07-l04-p07",
        title: "試験での出方 ⑦",
        html: "<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>標準キューで厳密な順序 → <b class=\"key\">不可</b>。FIFOキュー</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>新規アプリでAmazon MQ → 移行要件がなければ <b class=\"key\">SQS/SNS</b> の方がスケール・コスト面で有利</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Glue（サーバーレス）とEMR（クラスター管理）の取り違え。「運用負荷最小」ならGlue</span></li><li>解き方のコツ：<b class=\"key\">「順序？」「何人に配る？」「保持・再処理？」「既存技術の互換？」</b>の4点で絞る</li></ul>",
        oxIds: [],
        src: [4527,4531]
      },
      {
        id: "c07-l04-p08",
        title: "暗記すべき数字・制限 ①",
        html: "<ul><li>SQS メッセージ保持期間：デフォルト <b class=\"key\">4日</b>、範囲 <b class=\"key\">1分〜14日</b></li><li>SQS 可視性タイムアウト：デフォルト <b class=\"key\">30秒</b>、最大 <b class=\"key\">12時間</b></li><li>SQS ロングポーリング：待機時間 <b class=\"key\">最大20秒</b></li><li>SQS 遅延キュー：<b class=\"key\">0〜15分</b></li></ul>",
        oxIds: ["c07-ox-02","c07-ox-07"],
        src: [4533,4536]
      },
      {
        id: "c07-l04-p09",
        title: "暗記すべき数字・制限 ②",
        html: "<ul><li>SQS 最大メッセージサイズ：<b class=\"key\">1 MiB</b>（旧 256 KB）。超える分は<b class=\"key\">拡張クライアントライブラリ + S3</b></li><li>SQS FIFO：<b class=\"key\">300 TPS</b>（バッチで <b class=\"key\">3,000 msg/秒</b>）、重複排除の期間 <b class=\"key\">5分</b>、名前の末尾 <b class=\"key\">.fifo</b></li></ul>",
        oxIds: [],
        src: [4537,4538]
      },
      {
        id: "c07-l04-p10",
        title: "暗記すべき数字・制限 ③",
        html: "<ul><li>Step Functions：Standard 最大 <b class=\"key\">1年</b>、Express 最大 <b class=\"key\">5分</b></li><li>API Gateway スロットリング：<b class=\"key\">10,000 RPS</b>（定常）、バースト <b class=\"key\">5,000</b>（リージョン/アカウント単位）</li><li>API Gateway キャッシュTTL：デフォルト <b class=\"key\">300秒</b>、最大 <b class=\"key\">3,600秒</b></li></ul>",
        oxIds: [],
        src: [4539,4541]
      },
      {
        id: "c07-l04-p11",
        title: "暗記すべき数字・制限 ④",
        html: "<ul><li>API Gateway 統合タイムアウト：デフォルト最大 <b class=\"key\">29秒</b></li><li>API Gateway スロットリング超過のHTTPステータス：<b class=\"key\">429</b></li><li>KDS シャード：書込み <b class=\"key\">1 MB/秒・1,000件/秒</b>、読取り <b class=\"key\">2 MB/秒</b></li><li>KDS 拡張ファンアウト：コンシューマーごとに <b class=\"key\">2 MB/秒/シャード</b></li></ul>",
        oxIds: [],
        src: [4542,4545]
      },
      {
        id: "c07-l04-p12",
        title: "暗記すべき数字・制限 ⑤",
        html: "<ul><li>KDS データ保持：デフォルト <b class=\"key\">24時間</b>、最大 <b class=\"key\">365日</b></li><li>Athena：<b class=\"key\">スキャンしたデータ量</b>で課金（TB単位）</li><li>語呂合わせ：「<b class=\"key\">SQSは4日で14日まで、見えない30秒、待つのは20秒</b>」</li><li>語呂合わせ：「<b class=\"key\">Stepは1年（Standard）、急ぎは5分（Express）</b>」</li><li>語呂合わせ：「<b class=\"key\">見る Rekognition、読む Textract、聞く Transcribe、話す Polly、訳す Translate、分かる Comprehend</b>」</li></ul>",
        oxIds: [],
        src: [4546,4551]
      },
    ] },
  ],
  ox: [
    {
      id: "c07-ox-01", answer: false, src: 4553,
      text: "SQS標準キューは、メッセージを厳密に送信順に、ちょうど1回だけ配信する。",
      explain: "標準キューは<b class=\"key\">少なくとも1回</b>配信・<b class=\"key\">ベストエフォート順序</b>。厳密な順序と重複排除はFIFOキュー"
    },
    {
      id: "c07-ox-02", answer: true, src: 4556,
      text: "SQSのメッセージ保持期間は最大14日まで設定できる。",
      explain: "範囲は<b class=\"key\">1分〜14日</b>、デフォルトは<b class=\"key\">4日</b>"
    },
    {
      id: "c07-ox-03", answer: true, src: 4559,
      text: "SQSの可視性タイムアウトが処理時間より短いと、同じメッセージが複数のコンシューマーに処理される可能性がある。",
      explain: "タイムアウト経過後、削除されていないメッセージは再び見えるようになる。処理時間より長く設定する"
    },
    {
      id: "c07-ox-04", answer: false, src: 4562,
      text: "SQSは、コンシューマーがメッセージを受信した時点で自動的にキューから削除する。",
      explain: "処理完了後にコンシューマーが<b class=\"key\">DeleteMessage</b>を呼んで削除する必要がある"
    },
    {
      id: "c07-ox-05", answer: true, src: 4565,
      text: "SQSのロングポーリングを有効にすると、空の応答が減り、コストを削減できる。",
      explain: "最大<b class=\"key\">20秒</b>メッセージの到着を待つため、空振りのReceiveMessage呼び出しが減る"
    },
    {
      id: "c07-ox-06", answer: false, src: 4568,
      text: "既存のSQS標準キューの設定を変更して、FIFOキューに変換できる。",
      explain: "変換不可。<b class=\"key\">新しいFIFOキュー（名前末尾 .fifo）を作成</b>して移行する"
    },
    {
      id: "c07-ox-07", answer: true, src: 4571,
      text: "SQSの遅延キューを使うと、新しいメッセージを最大15分間コンシューマーから見えなくできる。",
      explain: "遅延は<b class=\"key\">0〜15分</b>。可視性タイムアウト（受信後に隠す）との違いに注意"
    },
    {
      id: "c07-ox-08", answer: false, src: 4574,
      text: "SNSはサブスクライバーが一時的に停止している間、メッセージを最大14日間保持する。",
      explain: "SNSはメッセージを<b class=\"key\">保持しない</b>Pub/Sub。保持が必要なら<b class=\"key\">SNS + SQSファンアウト</b>"
    },
    {
      id: "c07-ox-09", answer: true, src: 4577,
      text: "SNSのサブスクリプションフィルターポリシーを使うと、サブスクライバーごとに必要なメッセージだけを受信させられる。",
      explain: "メッセージ属性や本文でフィルタでき、トピックを分割せずに済む"
    },
    {
      id: "c07-ox-10", answer: true, src: 4580,
      text: "Amazon EventBridgeは、ZendeskなどのSaaSパートナーのイベントを受信できる。",
      explain: "<b class=\"key\">パートナーイベントソース</b>として受け取り、ルールでAWSサービスへルーティングできる"
    },
    {
      id: "c07-ox-11", answer: true, src: 4583,
      text: "EventBridgeのアーカイブ機能を使うと、過去のイベントを後からイベントバスに再送できる。",
      explain: "<b class=\"key\">アーカイブとリプレイ</b>により障害後の再処理やテストが可能"
    },
    {
      id: "c07-ox-12", answer: false, src: 4586,
      text: "Step Functions Express ワークフローは、最大1年間実行できるため人の承認待ちに適している。",
      explain: "Expressは最大<b class=\"key\">5分</b>。最大1年で承認待ちに向くのは<b class=\"key\">Standard</b>"
    },
    {
      id: "c07-ox-13", answer: true, src: 4589,
      text: "オンプレミスでRabbitMQを使うアプリケーションを、コード変更を最小にしてAWSへ移行するにはAmazon MQが適している。",
      explain: "Amazon MQは<b class=\"key\">ActiveMQ/RabbitMQ</b>互換。AMQP等の標準プロトコルをそのまま使える"
    },
    {
      id: "c07-ox-14", answer: false, src: 4592,
      text: "API GatewayのHTTP APIでは、APIキーと使用量プランを使ってクライアントごとにクォータを設定できる。",
      explain: "使用量プラン・APIキー・キャッシュは<b class=\"key\">REST API</b>の機能"
    },
    {
      id: "c07-ox-15", answer: true, src: 4595,
      text: "API Gatewayのプライベートエンドポイントは、インターフェイスVPCエンドポイント経由でVPC内からのみアクセスできる。",
      explain: "インターネットに公開しない社内API向け。リソースポリシーで送信元VPC/エンドポイントを制限"
    },
    {
      id: "c07-ox-16", answer: false, src: 4598,
      text: "API Gatewayでスロットリングの上限を超えたリクエストには、HTTP 503が返される。",
      explain: "<b class=\"key\">429 Too Many Requests</b> が返る。クライアントは指数バックオフで再試行する"
    },
    {
      id: "c07-ox-17", answer: true, src: 4601,
      text: "Kinesis Data Streamsのデータ保持期間は最大365日まで延長でき、保持期間内のデータは再処理できる。",
      explain: "デフォルト<b class=\"key\">24時間</b>、最大<b class=\"key\">365日</b>。複数コンシューマーが同じデータを読める"
    },
    {
      id: "c07-ox-18", answer: false, src: 4604,
      text: "Amazon Data Firehoseは、配信済みデータを任意の時点からリプレイする機能を持つ。",
      explain: "Firehoseは配信専用で保持・リプレイ機能はない。再処理が必要なら<b class=\"key\">KDS</b>を前段に置く"
    },
    {
      id: "c07-ox-19", answer: true, src: 4607,
      text: "Amazon Athenaは、データをParquet形式に変換しパーティション分割すると、スキャン量が減りコストを削減できる。",
      explain: "Athenaは<b class=\"key\">スキャン量課金</b>。列指向・圧縮・パーティションで必要な部分だけ読む"
    },
    {
      id: "c07-ox-20", answer: true, src: 4610,
      text: "AWS Glueクローラーは、S3上のデータのスキーマを推測してGlue Data Catalogにテーブルを作成する。",
      explain: "作成されたテーブルはAthena、Redshift Spectrum、EMRから共通に利用できる"
    },
    {
      id: "c07-ox-21", answer: false, src: 4613,
      text: "Amazon EMRのコアノードはHDFSにデータを保持しないため、スポットインスタンスで中断されてもデータ損失の心配はない。",
      explain: "HDFSを持つのは<b class=\"key\">コアノード</b>。データを持たずスポットに最適なのは<b class=\"key\">タスクノード</b>"
    },
    {
      id: "c07-ox-22", answer: true, src: 4616,
      text: "AWS Lake Formationを使うと、データレイクのテーブルに対して列レベルや行レベルのアクセス制御を行える。",
      explain: "列・行・セル単位のきめ細かな権限を一元管理できる。IAMやバケットポリシーだけでは困難"
    },
    {
      id: "c07-ox-23", answer: false, src: 4619,
      text: "画像に写った人物の顔を検出・比較するには、Amazon Textractを使用する。",
      explain: "顔の検出・比較は<b class=\"key\">Amazon Rekognition</b>。Textractは文書から文字・表・フォームを抽出する"
    },
    {
      id: "c07-ox-24", answer: true, src: 4622,
      text: "顧客レビューのテキストから肯定・否定の感情を判定するには、Amazon Comprehendが適している。",
      explain: "Comprehendは<b class=\"key\">感情分析</b>、エンティティ抽出、PII検出などを行うNLPサービス"
    },
    {
      id: "c07-ox-25", answer: false, src: 4625,
      text: "Amazon Pollyは音声データをテキストに文字起こしするサービスである。",
      explain: "Pollyは<b class=\"key\">テキスト→音声</b>。音声→テキストは<b class=\"key\">Amazon Transcribe</b>"
    },
    {
      id: "c07-ox-26", answer: true, src: 4628,
      text: "Amazon Bedrockを使うと、インフラを管理せずにAPI経由で複数の基盤モデルを利用できる。",
      explain: "サーバーレスで基盤モデルを利用。Knowledge Bases（RAG）、Agents、Guardrailsも提供"
    },
  ],
  mc: [
    {
      id: "c07-mc-01", answer: ["B"], selectCount: 1, domain: 2, src: 4633,
      stem: "ある EC サイトでは、Webサーバー（EC2）が注文を受けると、注文処理サーバーを同期的に呼び出している。セール時にアクセスが急増すると注文処理サーバーが過負荷になり、一部の注文が失われる。注文は数分以内に処理されればよく、即時応答は不要である。最小限の変更で注文の消失を防ぐにはどうすべきか。",
      choices: [
        "注文処理サーバーのインスタンスタイプを大きくする",
        "Webサーバーと注文処理サーバーの間にAmazon SQSキューを置き、注文処理サーバーがキューからメッセージを取得して処理する",
        "Webサーバーと注文処理サーバーの間にAmazon SNSトピックを置き、注文処理サーバーのHTTPエンドポイントをサブスクライブする",
        "注文処理サーバーの前段にApplication Load Balancerを置く",
      ],
      choiceExplain: [
        { ok: false, text: "スケールアップには上限があり、想定外のピークで再び消失しうる" },
        { ok: true, text: "SQSが注文を<b class=\"key\">バッファリング</b>し、処理側は自分のペースで処理できる（疎結合）" },
        { ok: false, text: "SNSは<b class=\"key\">プッシュ型でメッセージを保持しない</b>。受け手が過負荷なら配信失敗のリスクが残る" },
        { ok: false, text: "負荷分散はできるが、全サーバーが過負荷なら注文は失われる" },
      ],
      tip: "「急増」「失われる」「即時応答不要」→ キューによる<b class=\"key\">非同期化・バッファリング</b>"
    },
    {
      id: "c07-mc-02", answer: ["B"], selectCount: 1, domain: 2, src: 4645,
      stem: "ある会社は、SQSキューからメッセージを取得して動画を変換するワーカーをEC2で運用している。変換には通常4〜6分かかる。最近、同じ動画が複数回変換される事象が頻発し、無駄なコストが発生している。キューの可視性タイムアウトはデフォルトのままである。最も適切な対策はどれか。",
      choices: [
        "キューをFIFOキューに変更する",
        "可視性タイムアウトを最大処理時間より長い値（例：10分）に設定する",
        "ロングポーリングを有効にする",
        "デッドレターキューを設定し、maxReceiveCountを1にする",
      ],
      choiceExplain: [
        { ok: false, text: "FIFOの重複排除は<b class=\"key\">送信時</b>の重複を防ぐもので、処理中のタイムアウト切れによる再取得は防げない。また標準キューはFIFOに変換できない" },
        { ok: true, text: "デフォルト<b class=\"key\">30秒</b>では処理中にメッセージが再び見え、他のワーカーが取得してしまう" },
        { ok: false, text: "ロングポーリングは空受信を減らすだけで、二重処理とは無関係" },
        { ok: false, text: "1回目の失敗で即DLQ行きとなり、正常な再試行もできなくなる" },
      ],
      tip: "「処理時間が長い」「二重処理」→ <b class=\"key\">可視性タイムアウト</b>を真っ先に疑う"
    },
    {
      id: "c07-mc-03", answer: ["B"], selectCount: 1, domain: 2, src: 4657,
      stem: "ある金融機関は、口座の入出金トランザクションを順番どおりに、重複なく処理する必要がある。トランザクションは口座ごとに順序が保たれればよく、異なる口座同士は並列に処理して全体のスループットを高めたい。最も適切な設計はどれか。",
      choices: [
        "SQS標準キューを使用し、コンシューマー側でタイムスタンプによって並べ替える",
        "SQS FIFOキューを使用し、メッセージグループIDに口座IDを設定する",
        "SQS FIFOキューを使用し、すべてのメッセージに同じメッセージグループIDを設定する",
        "Amazon SNS標準トピックで各コンシューマーに配信する",
      ],
      choiceExplain: [
        { ok: false, text: "標準キューは<b class=\"key\">重複配信</b>があり、並べ替えのロジックも複雑になる" },
        { ok: true, text: "<b class=\"key\">グループ内は順序保証、グループ間は並列処理</b>。口座単位の順序と全体スループットを両立" },
        { ok: false, text: "順序は保てるが、全メッセージが1グループになり<b class=\"key\">並列処理できない</b>" },
        { ok: false, text: "SNS標準トピックは順序保証・重複排除がない" },
      ],
      tip: "「順序＋重複なし」→ FIFO。「○○ごとに順序、全体は並列」→ <b class=\"key\">メッセージグループID</b>"
    },
    {
      id: "c07-mc-04", answer: ["C"], selectCount: 1, domain: 2, src: 4669,
      stem: "ある会社は、SQSキューのメッセージをAuto Scalingグループ内のEC2ワーカーで処理している。メッセージ量は時間帯で大きく変動し、各インスタンスは1分あたり一定数のメッセージを処理できる。許容できる処理遅延を維持しつつ、インスタンス数を最適化したい。最も適切なスケーリング方法はどれか。",
      choices: [
        "EC2の平均CPU使用率70%を目標とするターゲット追跡スケーリングポリシー",
        "毎日固定の時刻にインスタンス数を変更するスケジュールに基づくスケーリング",
        "キューの滞留メッセージ数をインスタンス数で割った「インスタンスあたりのバックログ」をカスタムメトリクスとし、目標値でターゲット追跡する",
        "ApproximateAgeOfOldestMessage が閾値を超えたら1台だけ追加するシンプルスケーリング",
      ],
      choiceExplain: [
        { ok: false, text: "CPUはキューの滞留量を正確に反映しない（I/O待ちの処理など）" },
        { ok: false, text: "量は変動するため、固定スケジュールでは追従できない" },
        { ok: true, text: "AWSが推奨する方法。許容遅延÷1件の処理時間から目標バックログを算出する" },
        { ok: false, text: "1台ずつの追加では急増に追いつかず、待機時間（クールダウン）も発生する" },
      ],
      tip: "「SQS + Auto Scaling」→ <b class=\"key\">ApproximateNumberOfMessagesVisible ÷ インスタンス数</b>"
    },
    {
      id: "c07-mc-05", answer: ["B"], selectCount: 1, domain: 2, src: 4681,
      stem: "ある小売企業では、注文確定イベントを「在庫システム」「請求システム」「分析基盤」の3つが受け取る必要がある。各システムは独立して処理し、どれか1つが停止しても他に影響せず、停止中のメッセージも後で確実に処理したい。最も適切な構成はどれか。",
      choices: [
        "1つのSQSキューに送り、3システムがそのキューからポーリングする",
        "Amazon SNSトピックに発行し、3つのSQSキューをサブスクライブさせ、各システムが自分のキューを処理する",
        "Amazon SNSトピックに発行し、3システムのHTTPエンドポイントをサブスクライブさせる",
        "送信側アプリケーションが3システムのAPIを順番に呼び出す",
      ],
      choiceExplain: [
        { ok: false, text: "1つのキューでは1メッセージを1つのコンシューマーが処理して削除する → 3システムに配れない" },
        { ok: true, text: "<b class=\"key\">SNS + SQSファンアウト</b>。各キューがメッセージを保持し、停止中の分も後から処理できる" },
        { ok: false, text: "SNSは保持しないため、長時間停止したエンドポイントへの配信はリトライ後に失われうる" },
        { ok: false, text: "密結合。1つの失敗が全体に波及する" },
      ],
      tip: "「1対多」＋「独立・確実に処理」→ <b class=\"key\">ファンアウト</b>"
    },
    {
      id: "c07-mc-06", answer: ["B"], selectCount: 1, domain: 2, src: 4693,
      stem: "あるSaaS企業は、社内の多数のマイクロサービスがイベントを発行しており、イベント内容（例：detail-type が &quot;OrderCancelled&quot; かつ金額が10万円以上）に応じて異なるLambda関数やStep Functionsに振り分けたい。また、外部のSaaS（Zendesk）からのチケット作成イベントも同じ仕組みで処理したい。運用負荷が最も少ない方法はどれか。",
      choices: [
        "Amazon SNSトピックをイベント種別ごとに作成する",
        "Amazon EventBridgeのカスタムイベントバスとパートナーイベントソースを使い、イベントパターンのルールでターゲットに振り分ける",
        "Amazon SQSキューに全イベントを送り、振り分け用のEC2アプリケーションを開発する",
        "Amazon Kinesis Data Streamsに送り、KCLアプリケーションで振り分ける",
      ],
      choiceExplain: [
        { ok: false, text: "内容ベースの細かな条件ルーティングや、SaaSイベントの直接受信には向かない" },
        { ok: true, text: "EventBridgeは<b class=\"key\">イベントパターン</b>で内容ベースのルーティング、<b class=\"key\">パートナーイベントソース</b>でSaaS連携" },
        { ok: false, text: "振り分けアプリの開発・運用が必要" },
        { ok: false, text: "コンシューマーの開発が必要で運用負荷が高い" },
      ],
      tip: "「イベント内容で振り分け」「SaaS」→ <b class=\"key\">EventBridge</b>"
    },
    {
      id: "c07-mc-07", answer: ["B"], selectCount: 1, domain: 2, src: 4705,
      stem: "ある保険会社は、保険金請求の処理を自動化したい。処理は「書類チェック（Lambda）→ 不正スコア算出（Lambda）→ 担当者の承認（数日かかる場合あり）→ 支払処理」の順で、各ステップは失敗時にリトライし、全実行の履歴を監査のため確認できる必要がある。最も適切なサービスはどれか。",
      choices: [
        "AWS Step Functions Expressワークフロー",
        "AWS Step Functions Standardワークフロー",
        "Lambda関数から次のLambda関数を直接呼び出すチェーン",
        "Amazon EventBridge Scheduler",
      ],
      choiceExplain: [
        { ok: false, text: "Expressは最大<b class=\"key\">5分</b>。数日間の承認待ちはできない" },
        { ok: true, text: "最大<b class=\"key\">1年</b>、タスクトークンによる<b class=\"key\">承認待ち</b>、Retry/Catch、実行履歴を提供" },
        { ok: false, text: "密結合でエラー処理が複雑。Lambdaの最大実行時間（15分）で承認待ちもできない" },
        { ok: false, text: "時刻ベースの起動であり、複数ステップのオーケストレーションではない" },
      ],
      tip: "「順序＋リトライ＋人の承認＋長時間」→ <b class=\"key\">Step Functions Standard</b>"
    },
    {
      id: "c07-mc-08", answer: ["B"], selectCount: 1, domain: 2, src: 4717,
      stem: "ある製造会社は、オンプレミスのJavaアプリケーションでApache ActiveMQ（JMS・OpenWireプロトコル）を利用している。データセンター閉鎖に伴いAWSへ移行するが、アプリケーションのメッセージング関連コードは極力変更したくない。また、ブローカーの高可用性も確保したい。最も適切な方法はどれか。",
      choices: [
        "Amazon SQSに移行し、アプリケーションをAWS SDKで書き直す",
        "Amazon MQ for ActiveMQ をアクティブ/スタンバイ構成でデプロイする",
        "Amazon SNS FIFOトピックに移行する",
        "EC2上にActiveMQをインストールし、単一AZで運用する",
      ],
      choiceExplain: [
        { ok: false, text: "コードの書き換えが必要で「変更最小」に反する" },
        { ok: true, text: "<b class=\"key\">JMS/OpenWire</b>互換で移行が容易。<b class=\"key\">アクティブ/スタンバイ（Multi-AZ）</b>で高可用性" },
        { ok: false, text: "プロトコル互換性がなく、大幅な改修が必要" },
        { ok: false, text: "運用負荷が高く、単一AZでは高可用性を満たさない" },
      ],
      tip: "「既存のActiveMQ/RabbitMQ」「プロトコル互換」「コード変更最小」→ <b class=\"key\">Amazon MQ</b>"
    },
    {
      id: "c07-mc-09", answer: ["B"], selectCount: 1, domain: 3, src: 4729,
      stem: "ある会社は、外部パートナー企業向けに天気データAPIを提供している。パートナーごとにAPIキーを発行し、契約プランに応じて1秒あたりのリクエスト数と月間リクエスト数の上限を設けたい。また、同じリクエストが多いためバックエンドの負荷を下げたい。最も適切な構成はどれか。",
      choices: [
        "API Gateway HTTP APIでJWTオーソライザーを設定する",
        "API Gateway REST APIで使用量プランとAPIキーを設定し、ステージのキャッシュを有効にする",
        "Application Load BalancerとAWS WAFのレートベースルールを使用する",
        "API Gateway WebSocket APIを使用する",
      ],
      choiceExplain: [
        { ok: false, text: "HTTP APIは<b class=\"key\">使用量プラン・APIキー・キャッシュ非対応</b>" },
        { ok: true, text: "使用量プランで<b class=\"key\">APIキーごとのスロットリングとクォータ</b>、キャッシュでバックエンド負荷を削減" },
        { ok: false, text: "WAFのレートベースルールはIP単位などの保護で、顧客別の月間クォータ管理には向かない" },
        { ok: false, text: "双方向通信向けで要件と無関係" },
      ],
      tip: "「APIキー」「顧客ごとの上限」「キャッシュ」→ <b class=\"key\">REST API</b>"
    },
    {
      id: "c07-mc-10", answer: ["C"], selectCount: 1, domain: 3, src: 4741,
      stem: "ある会社は、数千台のIoTセンサーから毎秒大量のデータを受信している。データは①リアルタイムの異常検知アプリ、②別チームの集計アプリの2つが同時に読み取る必要があり、障害時には過去3日分のデータを再処理できなければならない。最も適切な取り込みサービスはどれか。",
      choices: [
        "Amazon Data Firehose",
        "Amazon SQS標準キュー",
        "Amazon Kinesis Data Streams（データ保持期間を3日以上に設定）",
        "Amazon SNS標準トピック",
      ],
      choiceExplain: [
        { ok: false, text: "Firehoseは宛先への配送サービスで、<b class=\"key\">リプレイ不可</b>・複数コンシューマーによる読取りもできない" },
        { ok: false, text: "1メッセージは1コンシューマーが処理して削除。2アプリが同じデータを読めない" },
        { ok: true, text: "<b class=\"key\">複数コンシューマー</b>が同じデータを読め、保持期間（最大365日）内は<b class=\"key\">再処理可能</b>" },
        { ok: false, text: "保持しないため再処理できない" },
      ],
      tip: "「リアルタイム」「複数コンシューマー」「再処理」→ <b class=\"key\">KDS</b>"
    },
    {
      id: "c07-mc-11", answer: ["B"], selectCount: 1, domain: 3, src: 4753,
      stem: "ある会社は、Webアプリのクリックストリームデータを Amazon S3 に保存し、後で Amazon Athena で分析したい。データはParquet形式に変換して保存する必要がある。運用チームは小規模で、サーバーやシャードの管理を避けたい。最も運用負荷が少ない方法はどれか。",
      choices: [
        "Kinesis Data Streamsに送り、EC2上のKCLアプリでParquetに変換してS3へ書き込む",
        "Amazon Data Firehoseに送り、Glue Data Catalogのスキーマを使ったレコード形式変換でParquetにしてS3へ配信する",
        "Amazon SQSに送り、Lambdaで1件ずつS3に書き込む",
        "Amazon EMRクラスターを常時起動してSpark Streamingで変換する",
      ],
      choiceExplain: [
        { ok: false, text: "コンシューマーの開発とEC2・シャードの管理が必要" },
        { ok: true, text: "Firehoseはフルマネージドで自動スケール、<b class=\"key\">Parquet/ORCへの形式変換</b>を内蔵" },
        { ok: false, text: "小さなファイルが大量にでき、Athenaの性能も悪化。変換処理も自作が必要" },
        { ok: false, text: "クラスター運用の負荷とコストが大きい" },
      ],
      tip: "「ストリーム → S3」「運用最小」「Parquet」→ <b class=\"key\">Firehose</b>"
    },
    {
      id: "c07-mc-12", answer: ["B"], selectCount: 1, domain: 4, src: 4765,
      stem: "ある会社は、S3に日次で蓄積されるCSV形式のアクセスログ（数TB）をAmazon Athenaで分析している。クエリの多くは特定の日付範囲・特定の列のみを参照するが、毎回全データをスキャンしておりコストが高い。最もコスト効率よく改善する方法はどれか。",
      choices: [
        "Athenaのクエリ結果をS3にキャッシュする",
        "AWS Glue ETLジョブでデータをParquet形式に変換・圧縮し、日付でパーティション分割する",
        "データをAmazon RDS for PostgreSQLにロードしてクエリする",
        "S3バケットをS3 Intelligent-Tieringに変更する",
      ],
      choiceExplain: [
        { ok: false, text: "クエリ結果の再利用はできても、新しい条件のクエリのスキャン量は減らない" },
        { ok: true, text: "<b class=\"key\">列指向</b>で必要な列のみ、<b class=\"key\">パーティション</b>で必要な日付のみ読む → スキャン量・コストが大幅減" },
        { ok: false, text: "数TBのログをRDSで扱うのはコスト・運用面で不適" },
        { ok: false, text: "ストレージ料金の最適化であり、Athenaのスキャン量は減らない" },
      ],
      tip: "「Athenaのコスト削減」→ <b class=\"key\">Parquet・圧縮・パーティション</b>の3点セット"
    },
    {
      id: "c07-mc-13", answer: ["B"], selectCount: 1, domain: 1, src: 4777,
      stem: "ある企業は、S3上のデータレイクを複数部門で共有している。人事データのテーブルについて、分析部門には給与列を見せず、各地域の担当者には自地域の行だけを見せたい。アクセスはAthenaとRedshift Spectrumから行われる。最も運用負荷が少ない方法はどれか。",
      choices: [
        "部門・地域ごとにデータを複製した別々のS3バケットを作成し、バケットポリシーで制御する",
        "AWS Lake Formationで列レベルおよび行レベルのデータフィルターを設定する",
        "IAMポリシーで s3:GetObject の条件キーを使い、列を制限する",
        "Amazon Macieで給与列を検出して自動的にマスクする",
      ],
      choiceExplain: [
        { ok: false, text: "データの複製と同期が必要で運用負荷が高い" },
        { ok: true, text: "Lake Formationは<b class=\"key\">列・行・セル単位</b>の権限を一元管理し、Athena/Redshift Spectrumに適用される" },
        { ok: false, text: "IAM/S3はオブジェクト単位の制御で、<b class=\"key\">列や行の単位では制御できない</b>" },
        { ok: false, text: "Macieは機密データの<b class=\"key\">検出</b>サービスで、アクセス制御はしない" },
      ],
      tip: "「データレイク」「列・行レベル」→ <b class=\"key\">Lake Formation</b>"
    },
    {
      id: "c07-mc-14", answer: ["B"], selectCount: 1, domain: 3, src: 4789,
      stem: "あるコールセンターは、録音された通話音声から顧客の不満度を自動分析し、ダッシュボードで可視化したい。社内に機械学習の専門家はいない。最も適切な組合せはどれか。",
      choices: [
        "Amazon Polly で音声を処理し、Amazon Rekognition で感情を分析し、Amazon QuickSight で可視化する",
        "Amazon Transcribe で文字起こしし、Amazon Comprehend で感情分析し、Amazon QuickSight で可視化する",
        "Amazon Translate で文字起こしし、Amazon Kendra で感情分析し、Amazon OpenSearch Service で可視化する",
        "Amazon SageMaker AI で独自の音声感情モデルを学習し、Amazon Lex で可視化する",
      ],
      choiceExplain: [
        { ok: false, text: "Pollyは<b class=\"key\">テキスト→音声</b>、Rekognitionは<b class=\"key\">画像・動画</b>の分析" },
        { ok: true, text: "音声→テキスト（<b class=\"key\">Transcribe</b>）、テキストの感情（<b class=\"key\">Comprehend</b>）、BI（<b class=\"key\">QuickSight</b>）" },
        { ok: false, text: "Translateは翻訳、Kendraはエンタープライズ検索" },
        { ok: false, text: "ML専門家がいないため独自モデル構築は不適。Lexはチャットボット" },
      ],
      tip: "「入力→出力」の変換を1つずつ対応付ける（音声→テキスト→感情→可視化）"
    },
    {
      id: "c07-mc-15", answer: ["A","C"], selectCount: 2, domain: 2, src: 4801,
      stem: "ある会社は、SQSキューを使った注文処理システムを運用している。一部のメッセージは形式不正のため処理に毎回失敗し、キューに残り続けて他のメッセージの処理を遅らせている。また、メッセージが少ない夜間でもワーカーがReceiveMessageを高頻度で呼び出し、APIリクエストのコストがかさんでいる。これらを解決する対策を2つ選べ。",
      choices: [
        "デッドレターキューを設定し、maxReceiveCountを適切な回数（例：5）に設定する",
        "メッセージ保持期間を1分に短縮する",
        "受信メッセージ待機時間（ReceiveMessageWaitTimeSeconds）を20秒に設定する",
        "遅延キューを15分に設定する",
        "可視性タイムアウトを0秒に設定する",
      ],
      choiceExplain: [
        { ok: true, text: "何度も失敗する<b class=\"key\">ポイズンメッセージをDLQに隔離</b>し、後で調査できる" },
        { ok: false, text: "正常なメッセージまで処理前に消えてしまう" },
        { ok: true, text: "<b class=\"key\">ロングポーリング</b>で空の受信を減らし、APIコストを削減" },
        { ok: false, text: "全メッセージの処理が遅れるだけで、どちらの問題も解決しない" },
        { ok: false, text: "受信直後に他のワーカーにも見え、二重処理が多発する" },
      ],
      tip: "「失敗し続けるメッセージ」→ DLQ、「空受信・API コスト」→ ロングポーリング"
    },
    {
      id: "c07-mc-16", answer: ["A","C"], selectCount: 2, domain: 3, src: 4815,
      stem: "あるグローバル企業は、Lambdaをバックエンドとするモバイルアプリ用APIを API Gateway で公開する。利用者は世界中に分散しており、ユーザー認証は既存の Amazon Cognito ユーザープールで行う。レイテンシーを抑えつつ、認証済みユーザーのみに利用を許可したい。満たすべき設定を2つ選べ。",
      choices: [
        "エッジ最適化APIエンドポイントを使用する",
        "プライベートAPIエンドポイントを使用する",
        "Cognitoユーザープールオーソライザーを設定する",
        "IAM認可を設定し、各モバイルユーザーにIAMユーザーを作成する",
        "API Gatewayのリソースポリシーで特定のVPCエンドポイントからのみ許可する",
      ],
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">CloudFrontのエッジ</b>経由で地理的に分散したクライアントのレイテンシーを削減" },
        { ok: false, text: "VPC内からのみアクセス可能で、インターネット上のモバイルアプリから使えない" },
        { ok: true, text: "Cognitoユーザープールのトークンを検証し、認証済みユーザーのみ許可" },
        { ok: false, text: "エンドユーザーごとにIAMユーザーを作るのは不適切（スケールせず、セキュリティ上も非推奨）" },
        { ok: false, text: "VPCエンドポイント限定ではモバイルアプリから到達できない" },
      ],
      tip: "「世界中」→ エッジ最適化、「アプリのエンドユーザー認証」→ <b class=\"key\">Cognito</b>"
    },
    {
      id: "c07-mc-17", answer: ["A","C"], selectCount: 2, domain: 3, src: 4829,
      stem: "ある会社は、S3に保存された大量のCSVファイルからなるデータレイクを構築中である。データアナリストがスキーマを手作業で定義せずにAthenaでクエリできるようにし、さらにプログラミング経験のない業務担当者がGUI上で欠損値の補完や列の正規化などのデータ準備を行えるようにしたい。最も運用負荷の少ない組合せを2つ選べ。",
      choices: [
        "AWS Glueクローラーでスキーマを自動検出し、Glue Data Catalogに登録する",
        "Amazon EMRクラスターでHiveメタストアを構築する",
        "AWS Glue DataBrewでビジュアルにデータを準備する",
        "Amazon SageMaker AI のノートブックでPythonコードを書いて前処理する",
        "Amazon Kinesis Data StreamsにCSVを流し、Flinkで変換する",
      ],
      choiceExplain: [
        { ok: true, text: "<b class=\"key\">クローラー</b>がスキーマを推測し、Data CatalogのテーブルをAthenaがそのまま使える" },
        { ok: false, text: "クラスターの構築・運用が必要で負荷が高い" },
        { ok: true, text: "<b class=\"key\">DataBrew</b>はノーコードのデータ準備ツール（多数の組込み変換）" },
        { ok: false, text: "コードを書く必要があり、要件（プログラミング経験なし）に反する" },
        { ok: false, text: "バッチのCSVに対してストリーミング基盤は過剰" },
      ],
      tip: "「スキーマ自動検出」→ クローラー、「ノーコードのデータ準備」→ <b class=\"key\">DataBrew</b>"
    },
  ]
});
window.DATA.chapters.push({
  no: 8,
  title: "高可用性・災害対策・監視と運用",
  domainNote: "ドメイン2：弾力性",
  src: [4844, 5537],
  lessons: [
    { id: "c08-l01", title: "グローバルインフラ・高可用性・DR戦略", pages: [
      {
        id: "c08-l01-p01",
        title: "AWS グローバルインフラ（リージョン / AZ / エッジ） ①",
        html: "<ul><li><b class=\"key\">リージョン</b>：地理的に独立した AWS の拠点（例：東京 ap-northeast-1、大阪 ap-northeast-3）<ul><li>リージョン間は<b class=\"key\">完全に独立</b>。データは明示的に複製しない限りリージョン外に出ない</li><li>リージョン選択の4観点：<b class=\"key\">コンプライアンス（データ所在）／レイテンシー／サービス提供状況／料金</b></li></ul></li></ul>",
        oxIds: [],
        src: [4849,4851]
      },
      {
        id: "c08-l01-p02",
        title: "AWS グローバルインフラ（リージョン / AZ / エッジ） ②",
        html: "<ul><li><b class=\"key\">アベイラビリティーゾーン（AZ）</b>：リージョン内の<b class=\"key\">1つ以上のデータセンター群</b><ul><li>新しいリージョンは原則<b class=\"key\">3つ以上の AZ</b> で構成</li><li>AZ 同士は電源・冷却・ネットワークが独立し、低レイテンシーの専用回線で接続</li><li><b class=\"key\">AZ 障害に耐える＝マルチAZ</b>、<b class=\"key\">リージョン障害に耐える＝マルチリージョン</b></li></ul></li></ul>",
        oxIds: [],
        src: [4852,4855]
      },
      {
        id: "c08-l01-p03",
        title: "AWS グローバルインフラ（リージョン / AZ / エッジ） ③",
        html: "<ul><li><b class=\"key\">エッジロケーション</b>：CloudFront・Route 53・AWS Global Accelerator・AWS WAF などが動く拠点<ul><li>ユーザーの近くでキャッシュ・DNS 応答 → <b class=\"key\">レイテンシー削減</b></li></ul></li><li><b class=\"key\">リージョナルエッジキャッシュ</b>：エッジロケーションと オリジンの間の中間キャッシュ（CloudFront）</li><li><b class=\"key\">Local Zones</b>：大都市近くに置かれたリージョンの拡張。<b class=\"key\">1桁ミリ秒</b>のレイテンシーが必要な用途</li><li><b class=\"key\">Wavelength</b>：5G 通信事業者のネットワーク内に置かれたゾーン（モバイル向け超低レイテンシー）</li></ul>",
        oxIds: [],
        src: [4856,4860]
      },
      {
        id: "c08-l01-p04",
        title: "AWS グローバルインフラ（リージョン / AZ / エッジ） ④",
        html: "<ul><li><b class=\"key\">AWS Outposts</b>：AWS のハードウェアを<b class=\"key\">オンプレミス</b>に設置（データ所在要件・ローカル処理）</li><li><span class=\"badge b-cmp\">比較</span>低レイテンシーの選び方<ul><li>世界中への静的/動的コンテンツ配信 → <b class=\"key\">CloudFront</b></li><li>TCP/UDP を AWS ネットワーク経由で高速化・固定 Anycast IP → <b class=\"key\">Global Accelerator</b></li><li>特定都市で1桁ミリ秒 → <b class=\"key\">Local Zones</b>／オンプレに置きたい → <b class=\"key\">Outposts</b></li></ul></li></ul>",
        oxIds: [],
        src: [4861,4866]
      },
      {
        id: "c08-l01-p05",
        title: "AWS Well-Architected フレームワーク（6本柱） ①",
        html: "<ul><li>AWS が示す<b class=\"key\">設計のベストプラクティス集</b>。Well-Architected Tool でワークロードをレビューできる</li><li>6本柱<ul><li><b class=\"key\">運用上の優秀性（Operational Excellence）</b>：IaC、小さく頻繁な変更、障害から学ぶ</li><li><b class=\"key\">セキュリティ（Security）</b>：最小権限、全レイヤーでの防御、追跡可能性</li><li><b class=\"key\">信頼性（Reliability）</b>：<b class=\"key\">自動復旧</b>、水平スケール、キャパシティ推測をやめる、変更の自動化</li><li><b class=\"key\">パフォーマンス効率（Performance Efficiency）</b>：サーバーレス活用、数分でグローバル展開</li></ul></li></ul>",
        oxIds: ["c08-ox-01"],
        src: [4868,4873]
      },
      {
        id: "c08-l01-p06",
        title: "AWS Well-Architected フレームワーク（6本柱） ②",
        html: "<ul><li><b class=\"key\">コスト最適化（Cost Optimization）</b>：従量課金の活用、支出の分析と帰属<ul><li><b class=\"key\">持続可能性（Sustainability）</b>：環境負荷の最小化（<b class=\"key\">2021年に追加された6本目</b>）</li></ul></li><li><b class=\"key\">Lens</b>：特定分野向けの追加観点（例：Serverless Lens、SaaS Lens）</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「5本柱」は古い情報。<b class=\"key\">持続可能性を含めて6本</b></span></li></ul>",
        oxIds: [],
        src: [4874,4878]
      },
      {
        id: "c08-l01-p07",
        title: "高可用性（HA）設計パターン ①",
        html: "<ul><li><b class=\"key\">マルチAZ 構成</b><ul><li>ELB ＋ 複数 AZ にまたがる <b class=\"key\">Auto Scaling グループ</b>（EC2 を複数 AZ に分散）</li><li><b class=\"key\">RDS Multi-AZ</b>：別 AZ に<b class=\"key\">同期</b>レプリケーションのスタンバイ。障害時は自動フェイルオーバー<ul><li>DNS エンドポイントはそのまま（アプリ変更不要）。スタンバイは読み取り不可（インスタンス型）</li></ul></li><li><b class=\"key\">Aurora</b>：ストレージは<b class=\"key\">3 AZ に6コピー</b>。レプリカ昇格でフェイルオーバー</li></ul></li></ul>",
        oxIds: ["c08-ox-24"],
        src: [4880,4884]
      },
      {
        id: "c08-l01-p08",
        title: "高可用性（HA）設計パターン ②",
        html: "<ul><li>S3・DynamoDB・SQS・Lambda などは<b class=\"key\">サービス自体がリージョン内でマルチAZ</b></li><li><b class=\"key\">マルチリージョン構成</b>：リージョン障害・大規模災害への備え、海外ユーザーの低レイテンシー化<ul><li>Route 53（フェイルオーバー/レイテンシー）＋ 各リージョンの複製データ</li></ul></li><li><b class=\"key\">ステートレス化</b><ul><li>サーバーにセッション状態を持たない → どのインスタンスが落ちても影響なし、自由にスケール</li><li>セッションの保存先：<b class=\"key\">ElastiCache（Redis OSS / Valkey）</b>、<b class=\"key\">DynamoDB</b></li><li><span class=\"badge b-cmp\">比較</span>ELB の<b class=\"key\">スティッキーセッション</b>は同じインスタンスに固定するだけ → 障害時にセッション消失</li></ul></li></ul>",
        oxIds: [],
        src: [4885,4891]
      },
      {
        id: "c08-l01-p09",
        title: "高可用性（HA）設計パターン ③",
        html: "<ul><li><b class=\"key\">疎結合（Loose Coupling）</b><ul><li><b class=\"key\">SQS</b>（キューでバッファリング）、<b class=\"key\">SNS</b>（ファンアウト）、<b class=\"key\">EventBridge</b>（イベント駆動）</li><li>下流が落ちても<b class=\"key\">メッセージはキューに残る</b> → 復旧後に処理（障害の伝播を防ぐ）</li><li>処理量の急増を吸収（<b class=\"key\">ピーク平準化</b>）</li></ul></li></ul>",
        oxIds: [],
        src: [4892,4895]
      },
      {
        id: "c08-l01-p10",
        title: "高可用性（HA）設計パターン ④",
        html: "<ul><li><b class=\"key\">冪等性（Idempotency）</b><ul><li>同じリクエストを<b class=\"key\">何回実行しても結果が同じ</b>になる設計</li><li>再試行・SQS の<b class=\"key\">少なくとも1回配信</b>（標準キュー）で重複処理されても安全</li><li>実装例：<b class=\"key\">冪等キー（リクエストID）</b>を DynamoDB に条件付き書き込みして重複を検出</li></ul></li></ul>",
        oxIds: [],
        src: [4896,4899]
      },
      {
        id: "c08-l01-p11",
        title: "高可用性（HA）設計パターン ⑤",
        html: "<ul><li><b class=\"key\">リトライ＋指数バックオフ（Exponential Backoff）</b><ul><li>一時的なエラー（スロットリング・5xx）は<b class=\"key\">待ち時間を 1→2→4→8秒…と倍増</b>させて再試行</li><li><b class=\"key\">ジッター（ランダムなゆらぎ）</b>を加え、多数のクライアントの再試行の同時集中を防ぐ</li><li>AWS SDK には<b class=\"key\">組み込み済み</b>。最大試行回数を決め、<b class=\"key\">冪等な操作</b>に対して行う</li></ul></li></ul>",
        oxIds: ["c08-ox-25"],
        src: [4900,4903]
      },
      {
        id: "c08-l01-p12",
        title: "高可用性（HA）設計パターン ⑥",
        html: "<ul><li><b class=\"key\">その他の弾力性パターン</b><ul><li><b class=\"key\">サーキットブレーカー</b>：失敗が続く依存先への呼び出しを一時停止</li><li><b class=\"key\">グレースフルデグラデーション</b>：一部機能を落としても主要機能を維持（例：静的ページ表示）</li><li><b class=\"key\">ヘルスチェック＋自動置き換え</b>：ELB ヘルスチェック → Auto Scaling が異常インスタンスを交換</li><li><b class=\"key\">静的安定性（Static Stability）</b>：AZ 障害時に新規起動に頼らず済むよう<b class=\"key\">予め余裕を持つ</b></li></ul></li></ul>",
        oxIds: [],
        src: [4904,4909]
      },
      {
        id: "c08-l01-p13",
        title: "RPO / RTO ①",
        html: "<ul><li><b class=\"key\">RPO（Recovery Point Objective：目標復旧時点）</b>：<b class=\"key\">どこまでのデータ損失を許容するか</b><ul><li>例：RPO 1時間 → 最大1時間分のデータが失われてよい → バックアップ/複製の<b class=\"key\">頻度</b>で決まる</li></ul></li></ul>",
        oxIds: ["c08-ox-02"],
        src: [4911,4912]
      },
      {
        id: "c08-l01-p14",
        title: "RPO / RTO ②",
        html: "<ul><li><b class=\"key\">RTO（Recovery Time Objective：目標復旧時間）</b>：<b class=\"key\">停止からどれだけで復旧するか</b><ul><li>例：RTO 15分 → 15分以内にサービス再開 → 待機環境の<b class=\"key\">準備度合い</b>で決まる</li></ul></li><li>覚え方：<b class=\"key\">RPO＝Point＝過去（データ）、RTO＝Time＝未来（停止時間）</b></li><li>RPO/RTO を小さくするほど<b class=\"key\">コストは上がる</b> → 要件に合う最安の戦略を選ぶのが試験の正解</li></ul>",
        oxIds: [],
        src: [4913,4917]
      },
      {
        id: "c08-l01-p15",
        title: "DR 戦略4種（コスト安 → 高、RTO/RPO 長 → 短） ①",
        html: "<ul><li><b class=\"key\">①バックアップ＆リストア（Backup &amp; Restore）</b><ul><li>データのバックアップを DR リージョンへコピー。障害時に<b class=\"key\">インフラごと作り直して復元</b></li><li>RPO/RTO：<b class=\"key\">数時間</b>。コスト：<b class=\"key\">最小</b></li><li>実装：<b class=\"key\">AWS Backup</b>（クロスリージョン/クロスアカウントコピー）、EBS スナップショットのコピー</li></ul></li></ul>",
        oxIds: [],
        src: [4919,4922]
      },
      {
        id: "c08-l01-p16",
        title: "DR 戦略4種（コスト安 → 高、RTO/RPO 長 → 短） ②",
        html: "<ul><li>実装：<b class=\"key\">S3 CRR</b>、AMI のコピー、<b class=\"key\">CloudFormation</b> で環境を再構築</li><li><b class=\"key\">②パイロットライト（Pilot Light）</b><ul><li><b class=\"key\">データ層（DB）だけ常時複製・稼働</b>、アプリサーバーは停止 or 未作成（「種火」）</li><li>障害時にアプリ層を起動・スケールアウト。RPO/RTO：<b class=\"key\">数十分</b></li><li>実装：RDS クロスリージョンリードレプリカ、<b class=\"key\">Aurora Global Database</b>、停止した EC2/AMI</li></ul></li></ul>",
        oxIds: [],
        src: [4923,4927]
      },
      {
        id: "c08-l01-p17",
        title: "DR 戦略4種（コスト安 → 高、RTO/RPO 長 → 短） ③",
        html: "<ul><li><b class=\"key\">③ウォームスタンバイ（Warm Standby）</b><ul><li><b class=\"key\">縮小版のフル環境を常時稼働</b>（アプリも DB も動いているが小さい）</li><li>障害時は<b class=\"key\">スケールアップ/アウトするだけ</b>。RPO/RTO：<b class=\"key\">数分</b></li><li>パイロットライトとの違い：<b class=\"key\">アプリ層が稼働中でリクエストを処理できる</b>かどうか</li></ul></li></ul>",
        oxIds: [],
        src: [4928,4931]
      },
      {
        id: "c08-l01-p18",
        title: "DR 戦略4種（コスト安 → 高、RTO/RPO 長 → 短） ④",
        html: "<ul><li><b class=\"key\">④マルチサイト アクティブ/アクティブ（Multi-site Active/Active）</b><ul><li><b class=\"key\">複数リージョンで本番規模の環境が同時にトラフィックを処理</b></li><li>RPO/RTO：<b class=\"key\">ほぼゼロ（リアルタイム）</b>。コスト：<b class=\"key\">最大</b></li><li>実装：<b class=\"key\">DynamoDB グローバルテーブル</b>、Route 53 の加重/レイテンシー/フェイルオーバールーティング</li></ul></li><li><span class=\"badge b-cmp\">比較</span>キーワード早見<ul><li>「コスト最小・数時間許容」→ バックアップ&amp;リストア</li><li>「DB だけ常に複製、アプリは障害時に起動」→ パイロットライト</li><li>「縮小版を常時稼働」→ ウォームスタンバイ</li><li>「ダウンタイムゼロ・両リージョンで処理」→ マルチサイト アクティブ/アクティブ</li></ul></li></ul>",
        oxIds: ["c08-ox-03","c08-ox-04"],
        src: [4932,4941]
      },
      {
        id: "c08-l01-p19",
        title: "DR を実装する主なサービス ①",
        html: "<ul><li><b class=\"key\">S3 クロスリージョンレプリケーション（CRR）</b><ul><li>別リージョンのバケットへ<b class=\"key\">非同期</b>で自動複製。<b class=\"key\">送信元・送信先の両方でバージョニング必須</b></li><li><b class=\"key\">既存オブジェクトは自動では複製されない</b> → <b class=\"key\">S3 Batch Replication</b> を使う</li></ul></li></ul>",
        oxIds: ["c08-ox-05","c08-ox-06"],
        src: [4943,4945]
      },
      {
        id: "c08-l01-p20",
        title: "DR を実装する主なサービス ②",
        html: "<ul><li><b class=\"key\">S3 Replication Time Control（RTC）</b>：<b class=\"key\">99.99%</b> のオブジェクトを <b class=\"key\">15分以内</b>に複製（SLA付き）<ul><li>同一リージョン内は <b class=\"key\">SRR（Same-Region Replication）</b>（ログ集約・アカウント分離など）</li><li>削除マーカーの複製は<b class=\"key\">オプション</b>（既定では複製しない）</li></ul></li></ul>",
        oxIds: [],
        src: [4946,4948]
      },
      {
        id: "c08-l01-p21",
        title: "DR を実装する主なサービス ③",
        html: "<ul><li><b class=\"key\">Aurora Global Database</b><ul><li>1つのプライマリリージョン（読み書き）＋ 複数のセカンダリリージョン（読み取り専用）</li><li>ストレージ層で複製。レプリケーション遅延は通常 <b class=\"key\">1秒未満</b></li><li>リージョン障害時はセカンダリを昇格（<b class=\"key\">RTO 1分程度</b>、<b class=\"key\">RPO 秒単位</b>が目安）</li><li>計画的な切替（スイッチオーバー）ではデータ損失なしでプライマリを移動</li><li><span class=\"badge b-cmp\">比較</span>RDS クロスリージョンリードレプリカ：エンジン機能の非同期複製。手動で昇格</li></ul></li></ul>",
        oxIds: ["c08-ox-08"],
        src: [4949,4954]
      },
      {
        id: "c08-l01-p22",
        title: "DR を実装する主なサービス ④",
        html: "<ul><li><b class=\"key\">DynamoDB グローバルテーブル</b><ul><li>複数リージョンにテーブルのレプリカ。<b class=\"key\">全リージョンで読み書き可能（マルチアクティブ）</b></li><li>複製は通常<b class=\"key\">非同期（結果整合性）</b>、競合は<b class=\"key\">最終書き込み優先（last writer wins）</b></li><li>マルチサイト アクティブ/アクティブの代表的な実装</li><li><span class=\"badge b-cmp\">比較</span>DynamoDB の PITR・オンデマンドバックアップは「データ破損からの復旧」用</li></ul></li></ul>",
        oxIds: ["c08-ox-07"],
        src: [4955,4959]
      },
      {
        id: "c08-l01-p23",
        title: "DR を実装する主なサービス ⑤",
        html: "<ul><li><b class=\"key\">Route 53 フェイルオーバー</b><ul><li><b class=\"key\">フェイルオーバールーティング</b>：プライマリのヘルスチェック失敗時にセカンダリへ DNS 応答を切替</li><li>ヘルスチェック対象：エンドポイント（HTTP/HTTPS/TCP）、<b class=\"key\">他のヘルスチェック（計算）</b></li><li><b class=\"key\">CloudWatch アラームの状態</b>もヘルスチェックに使える（プライベートなリソースの監視に有効）</li><li>セカンダリに <b class=\"key\">S3 静的ウェブサイト</b>を置いて「メンテナンス中」ページを返す構成が定番</li><li><b class=\"key\">Route 53 Application Recovery Controller（ARC）</b>：リージョン切替の準備状況確認・ルーティング制御</li></ul></li></ul>",
        oxIds: [],
        src: [4960,4965]
      },
      {
        id: "c08-l01-p24",
        title: "DR を実装する主なサービス ⑥",
        html: "<ul><li><b class=\"key\">AWS Elastic Disaster Recovery（AWS DRS）</b><ul><li>オンプレ/他クラウド/他リージョンのサーバーを<b class=\"key\">ブロックレベルで継続的に複製</b></li><li>平常時は<b class=\"key\">低コストのステージング領域</b>（小さなレプリケーションサーバー＋EBS）に保持</li><li>障害時に数分で<b class=\"key\">リカバリインスタンスを起動</b>。RPO：<b class=\"key\">秒単位</b>、RTO：<b class=\"key\">分単位</b></li><li>旧 CloudEndure Disaster Recovery の後継</li></ul></li></ul>",
        oxIds: [],
        src: [4966,4970]
      },
      {
        id: "c08-l01-p25",
        title: "DR を実装する主なサービス ⑦",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span><b class=\"key\">AWS Application Migration Service（MGN）</b>は「移行」用、DRS は「災害対策」用</li><li><b class=\"key\">AWS Backup</b><ul><li>EC2/EBS/RDS/Aurora/DynamoDB/EFS/FSx/S3 などのバックアップを<b class=\"key\">一元管理（バックアップポリシー）</b></li><li><b class=\"key\">クロスリージョンコピー・クロスアカウントコピー</b>、Organizations で一括適用</li><li><b class=\"key\">Backup Vault Lock</b>：WORM で削除・変更を防止（ランサムウェア対策・コンプライアンス）</li></ul></li></ul>",
        oxIds: [],
        src: [4971,4976]
      },
    ] },
    { id: "c08-l02", title: "監視とIaC（CloudWatch・X-Ray・CloudFormation・CDK）", pages: [
      {
        id: "c08-l02-p01",
        title: "Amazon CloudWatch（メトリクス・アラーム） ①",
        html: "<ul><li>AWS リソースとアプリの<b class=\"key\">監視サービス</b>（メトリクス・ログ・アラーム・ダッシュボード）</li><li><b class=\"key\">標準メトリクス（EC2）</b>：CPU 使用率、ネットワーク I/O、ディスク I/O（インスタンスストア）、ステータスチェック<ul><li><span class=\"badge b-freq\">頻出</span><b class=\"key\">メモリ使用率・ディスク（ファイルシステム）使用率は標準メトリクスにない</b></li><li>→ <b class=\"key\">CloudWatch エージェント</b>をインストールして<b class=\"key\">カスタムメトリクス</b>として送る</li></ul></li></ul>",
        oxIds: ["c08-ox-09"],
        src: [4978,4981]
      },
      {
        id: "c08-l02-p02",
        title: "Amazon CloudWatch（メトリクス・アラーム） ②",
        html: "<ul><li><b class=\"key\">基本モニタリング</b>：EC2 は <b class=\"key\">5分間隔</b>（無料）</li><li><b class=\"key\">詳細モニタリング</b>：EC2 は <b class=\"key\">1分間隔</b>（有料）。Auto Scaling の反応を速くしたいときに有効</li></ul>",
        oxIds: [],
        src: [4982,4983]
      },
      {
        id: "c08-l02-p03",
        title: "Amazon CloudWatch（メトリクス・アラーム） ③",
        html: "<ul><li><b class=\"key\">カスタムメトリクス</b>：PutMetricData API やエージェントで送信<ul><li>標準解像度：<b class=\"key\">1分</b>、<b class=\"key\">高解像度：1秒</b>単位まで</li></ul></li></ul>",
        oxIds: [],
        src: [4984,4985]
      },
      {
        id: "c08-l02-p04",
        title: "Amazon CloudWatch（メトリクス・アラーム） ④",
        html: "<ul><li><b class=\"key\">メトリクスの保持期間</b>（自動で粒度が粗くなる）<ul><li>1分未満（高解像度）：<b class=\"key\">3時間</b>／1分：<b class=\"key\">15日</b>／5分：<b class=\"key\">63日</b>／1時間：<b class=\"key\">455日（15か月）</b></li></ul></li><li><b class=\"key\">名前空間・ディメンション</b>：メトリクスの分類（例：AWS/EC2、InstanceId）</li></ul>",
        oxIds: [],
        src: [4986,4988]
      },
      {
        id: "c08-l02-p05",
        title: "Amazon CloudWatch（メトリクス・アラーム） ⑤",
        html: "<ul><li><b class=\"key\">CloudWatch アラーム</b><ul><li>状態：<b class=\"key\">OK／ALARM／INSUFFICIENT_DATA</b></li><li>アクション：<b class=\"key\">SNS 通知</b>、<b class=\"key\">EC2 アクション（停止・終了・再起動・復旧）</b>、<b class=\"key\">Auto Scaling ポリシー</b></li><li>アクション：Systems Manager の OpsItem / インシデント作成</li><li><b class=\"key\">EC2 の自動復旧（recover）</b>：システムステータスチェック失敗時に別ハードウェアで復旧<ul><li>インスタンス ID・プライベート IP・Elastic IP・EBS は維持（インスタンスストアのデータは失う）</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [4989,4994]
      },
      {
        id: "c08-l02-p06",
        title: "Amazon CloudWatch（メトリクス・アラーム） ⑥",
        html: "<ul><li><b class=\"key\">異常検出（Anomaly Detection）</b>：機械学習で通常の範囲（バンド）を学習しアラーム</li><li><b class=\"key\">複合アラーム（Composite Alarm）</b><ul><li>複数アラームの状態を <b class=\"key\">AND / OR / NOT</b> で組み合わせた1つのアラーム</li><li>「CPU 高い <b class=\"key\">AND</b> エラー率高い」の時だけ通知 → <b class=\"key\">アラームノイズ（誤報・通知過多）の削減</b></li></ul></li></ul>",
        oxIds: ["c08-ox-14"],
        src: [4995,4998]
      },
      {
        id: "c08-l02-p07",
        title: "Amazon CloudWatch（メトリクス・アラーム） ⑦",
        html: "<ul><li><b class=\"key\">ダッシュボード</b>：複数リージョン・<b class=\"key\">クロスアカウント</b>のメトリクスを1画面に表示可能</li></ul>",
        oxIds: [],
        src: [4999,5000]
      },
      {
        id: "c08-l02-p08",
        title: "Amazon CloudWatch Logs・エージェント・Synthetics ①",
        html: "<ul><li><b class=\"key\">CloudWatch Logs</b>：ログの収集・保存・検索<ul><li>構成：<b class=\"key\">ロググループ</b>（保持期間・暗号化の単位）→ <b class=\"key\">ログストリーム</b>（発生元ごと）</li><li><b class=\"key\">保持期間の既定は「失効しない（無期限）」</b>。1日〜10年で設定可能</li><li>KMS キーで暗号化可能</li><li><b class=\"key\">S3 へのエクスポート</b>（CreateExportTask）は<b class=\"key\">バッチ処理でリアルタイムではない</b></li></ul></li></ul>",
        oxIds: [],
        src: [5002,5006]
      },
      {
        id: "c08-l02-p09",
        title: "Amazon CloudWatch Logs・エージェント・Synthetics ②",
        html: "<ul><li><b class=\"key\">CloudWatch Logs Insights</b>：ログに対する<b class=\"key\">対話的なクエリ（専用クエリ言語）</b>で検索・集計・可視化<ul><li>「特定のエラーを過去24時間で集計」などアドホック分析に</li></ul></li><li><b class=\"key\">メトリクスフィルター</b>：ログ内のパターン（例：&quot;ERROR&quot;）を数えて<b class=\"key\">CloudWatch メトリクス化</b><ul><li>→ そのメトリクスに<b class=\"key\">アラーム</b>を設定できる（例：ERROR が5分で10回以上で通知）</li><li>フィルター作成<b class=\"key\">以降</b>のログが対象（過去分には遡らない）</li></ul></li></ul>",
        oxIds: ["c08-ox-12"],
        src: [5007,5011]
      },
      {
        id: "c08-l02-p10",
        title: "Amazon CloudWatch Logs・エージェント・Synthetics ③",
        html: "<ul><li><b class=\"key\">サブスクリプションフィルター</b>：ログを<b class=\"key\">リアルタイムに</b>他サービスへストリーミング<ul><li>送信先：<b class=\"key\">Kinesis Data Streams／Amazon Data Firehose／Lambda</b>（OpenSearch へは Lambda 経由など）</li><li>クロスアカウントでのログ集約にも使う</li></ul></li></ul>",
        oxIds: ["c08-ox-13"],
        src: [5012,5014]
      },
      {
        id: "c08-l02-p11",
        title: "Amazon CloudWatch Logs・エージェント・Synthetics ④",
        html: "<ul><li><b class=\"key\">CloudWatch エージェント（統合エージェント）</b><ul><li>EC2 <b class=\"key\">およびオンプレミスサーバー</b>から<b class=\"key\">メトリクス（メモリ・ディスク使用率等）とログ</b>を収集</li><li>設定は <b class=\"key\">Systems Manager Parameter Store</b> に保存して複数台に配布できる</li><li><span class=\"badge b-cmp\">比較</span>旧 CloudWatch Logs エージェントは非推奨 → 統合エージェントを使う</li></ul></li></ul>",
        oxIds: [],
        src: [5015,5018]
      },
      {
        id: "c08-l02-p12",
        title: "Amazon CloudWatch Logs・エージェント・Synthetics ⑤",
        html: "<ul><li><b class=\"key\">CloudWatch Synthetics</b>：<b class=\"key\">カナリア</b>（定期実行スクリプト）で<b class=\"key\">外形監視</b><ul><li>URL・API・画面操作を<b class=\"key\">ユーザー視点で定期チェック</b>（実ユーザーが来る前に障害を検知）</li><li>Node.js / Python のスクリプト。スクリーンショット・HAR を保存</li></ul></li><li>その他：<b class=\"key\">Container Insights</b>（ECS/EKS）、<b class=\"key\">Contributor Insights</b>（上位寄与者の特定）</li></ul>",
        oxIds: [],
        src: [5019,5022]
      },
      {
        id: "c08-l02-p13",
        title: "Amazon CloudWatch Logs・エージェント・Synthetics ⑥",
        html: "<ul><li>その他：<b class=\"key\">CloudWatch RUM</b>（実ユーザー監視）、<b class=\"key\">Application Signals</b>（APM）</li><li><span class=\"badge b-cmp\">比較</span>CloudWatch＝<b class=\"key\">性能・運用監視</b>、<b class=\"key\">CloudTrail</b>＝<b class=\"key\">誰が何の API を呼んだか（監査）</b></li></ul>",
        oxIds: [],
        src: [5023,5024]
      },
      {
        id: "c08-l02-p14",
        title: "Amazon CloudWatch Logs・エージェント・Synthetics ⑦",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span><b class=\"key\">AWS Config</b>＝<b class=\"key\">リソース設定の変更履歴・ルール準拠</b></li></ul>",
        oxIds: [],
        src: [5025,5026]
      },
      {
        id: "c08-l02-p15",
        title: "AWS X-Ray ①",
        html: "<ul><li><b class=\"key\">分散トレーシング</b>：リクエストがマイクロサービス間をどう流れたかを追跡</li><li><b class=\"key\">サービスマップ</b>で依存関係と各区間の<b class=\"key\">レイテンシー・エラー</b>を可視化 → <b class=\"key\">ボトルネック特定</b></li><li>構成要素：<b class=\"key\">トレース・セグメント・サブセグメント</b>、<b class=\"key\">サンプリング</b>（全件でなく一部を記録）</li></ul>",
        oxIds: [],
        src: [5028,5030]
      },
      {
        id: "c08-l02-p16",
        title: "AWS X-Ray ②",
        html: "<ul><li>計装：X-Ray SDK、または <b class=\"key\">AWS Distro for OpenTelemetry（ADOT）</b>（OpenTelemetry 系が推奨方向）<ul><li>EC2/オンプレでは <b class=\"key\">X-Ray デーモン（または CloudWatch エージェント/ADOT Collector）</b>が送信</li><li><b class=\"key\">Lambda</b>・API Gateway は設定で<b class=\"key\">アクティブトレーシング</b>を有効化するだけ</li></ul></li><li><span class=\"badge b-cmp\">比較</span>「どのサービス間の呼び出しで遅延？」→ <b class=\"key\">X-Ray</b>、「CPU が高い？」→ CloudWatch</li></ul>",
        oxIds: ["c08-ox-15"],
        src: [5031,5035]
      },
      {
        id: "c08-l02-p17",
        title: "AWS CloudFormation ①",
        html: "<ul><li><b class=\"key\">Infrastructure as Code（IaC）</b>：JSON/YAML の<b class=\"key\">テンプレート</b>からリソース群（<b class=\"key\">スタック</b>）を作成<ul><li>同じ環境を<b class=\"key\">何度でも・どのリージョンでも再現</b> → DR 環境の迅速な構築にも使える</li><li>依存関係を解決して作成し、失敗時は<b class=\"key\">自動ロールバック</b></li></ul></li><li>テンプレートの主なセクション：Parameters、Mappings、Conditions、<b class=\"key\">Resources（必須）</b>、Outputs</li></ul>",
        oxIds: [],
        src: [5037,5040]
      },
      {
        id: "c08-l02-p18",
        title: "AWS CloudFormation ②",
        html: "<ul><li><b class=\"key\">StackSets</b>：1つのテンプレートで<b class=\"key\">複数アカウント × 複数リージョン</b>にスタックを一括展開<ul><li><b class=\"key\">AWS Organizations</b> と統合（サービスマネージド権限）→ 新規アカウントへ自動展開も可</li></ul></li><li><b class=\"key\">変更セット（Change Sets）</b>：スタック更新前に<b class=\"key\">何が追加・変更・置換・削除されるかをプレビュー</b><ul><li>「置換（Replacement）」でデータが消えないかを事前確認</li></ul></li></ul>",
        oxIds: ["c08-ox-16"],
        src: [5041,5044]
      },
      {
        id: "c08-l02-p19",
        title: "AWS CloudFormation ③",
        html: "<ul><li><b class=\"key\">ドリフト検出</b>：テンプレートの定義と<b class=\"key\">実リソースの差分（手動変更）</b>を検出</li><li><b class=\"key\">DeletionPolicy</b>：スタック削除時のリソースの扱い<ul><li><b class=\"key\">Delete</b>：削除（多くのリソースの既定）</li><li><b class=\"key\">Retain</b>：<b class=\"key\">リソースを残す</b>（例：S3 バケット・DynamoDB テーブルを残したい）</li></ul></li></ul>",
        oxIds: [],
        src: [5045,5048]
      },
      {
        id: "c08-l02-p20",
        title: "AWS CloudFormation ④",
        html: "<ul><li><b class=\"key\">Snapshot</b>：<b class=\"key\">スナップショットを取ってから削除</b>（RDS、EBS ボリューム、ElastiCache、Redshift など）<ul><li><span class=\"badge b-note\">注</span>RDS の DBCluster 等は既定が Snapshot になる例外あり</li><li><b class=\"key\">UpdateReplacePolicy</b>：更新で置換される時の旧リソースの扱い</li></ul></li><li>その他の機能<ul><li><b class=\"key\">スタックポリシー</b>：特定リソースの更新を禁止／<b class=\"key\">終了保護</b>：スタックの誤削除防止</li></ul></li></ul>",
        oxIds: ["c08-ox-17"],
        src: [5049,5053]
      },
      {
        id: "c08-l02-p21",
        title: "AWS CloudFormation ⑤",
        html: "<ul><li><b class=\"key\">動的参照</b>：テンプレートから <b class=\"key\">SSM Parameter Store / Secrets Manager</b> の値を参照<ul><li><b class=\"key\">ネストされたスタック</b>（共通部品の再利用）、<b class=\"key\">クロススタック参照</b>（Outputs の Export/ImportValue）</li><li><b class=\"key\">cfn-init / cfn-signal</b>、<b class=\"key\">CreationPolicy / WaitCondition</b>（EC2 の初期化完了を待つ）</li></ul></li></ul>",
        oxIds: [],
        src: [5054,5057]
      },
      {
        id: "c08-l02-p22",
        title: "AWS CDK・IaC の考え方 ①",
        html: "<ul><li><b class=\"key\">AWS CDK（Cloud Development Kit）</b><ul><li>TypeScript・Python・Java・C#・Go などの<b class=\"key\">プログラミング言語</b>でインフラを定義</li><li><b class=\"key\">cdk synth</b> で <b class=\"key\">CloudFormation テンプレートを生成</b>し、CloudFormation 経由でデプロイ</li><li><b class=\"key\">コンストラクト</b>：L1（CFn リソースそのまま）、L2（便利な既定値付き）、L3（パターン）</li><li>ループ・条件分岐・クラスによる再利用、IDE 補完、単体テストが書ける</li><li>初回は <b class=\"key\">cdk bootstrap</b>（デプロイ用の S3 バケット・IAM ロール等を準備）</li></ul></li></ul>",
        oxIds: ["c08-ox-26"],
        src: [5059,5064]
      },
      {
        id: "c08-l02-p23",
        title: "AWS CDK・IaC の考え方 ②",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span><b class=\"key\">AWS SAM</b>：サーバーレス（Lambda・API Gateway）向けの CloudFormation 拡張</li><li>IaC のメリット：<b class=\"key\">再現性・バージョン管理・レビュー可能・手動ミス削減・DR 環境の迅速構築</b></li></ul>",
        oxIds: [],
        src: [5065,5067]
      },
    ] },
    { id: "c08-l03", title: "運用管理とレジリエンス（Systems Manager・Health・Trusted Advisor・FIS・Beanstalk）", pages: [
      {
        id: "c08-l03-p01",
        title: "AWS Systems Manager（SSM） ①",
        html: "<ul><li>EC2・オンプレサーバーを<b class=\"key\">一元的に運用管理</b>するサービス群</li><li>前提：<b class=\"key\">SSM Agent</b>、IAM ロール（<b class=\"key\">AmazonSSMManagedInstanceCore</b>）、SSM への到達経路<ul><li>プライベートサブネットでは <b class=\"key\">NAT ゲートウェイ</b> または <b class=\"key\">VPC エンドポイント</b>（ssm・ssmmessages・ec2messages）</li></ul></li></ul>",
        oxIds: [],
        src: [5069,5071]
      },
      {
        id: "c08-l03-p02",
        title: "AWS Systems Manager（SSM） ②",
        html: "<ul><li><b class=\"key\">Session Manager</b><ul><li>ブラウザ/CLI から<b class=\"key\">シェル接続</b>。<b class=\"key\">SSH のインバウンドポート開放不要・踏み台不要・キーペア不要</b></li><li>アクセスは <b class=\"key\">IAM</b> で制御、操作ログを <b class=\"key\">S3 / CloudWatch Logs</b> に記録（監査）</li></ul></li></ul>",
        oxIds: ["c08-ox-18"],
        src: [5072,5074]
      },
      {
        id: "c08-l03-p03",
        title: "AWS Systems Manager（SSM） ③",
        html: "<ul><li><b class=\"key\">Run Command</b>：多数のインスタンスに<b class=\"key\">コマンドを一括実行</b>（SSH なし）。タグで対象指定</li><li><b class=\"key\">Patch Manager</b>：<b class=\"key\">パッチベースライン</b>に基づき OS/アプリのパッチを自動適用<ul><li><b class=\"key\">メンテナンスウィンドウ</b>で実行時間帯を指定、パッチ準拠状況をレポート</li></ul></li></ul>",
        oxIds: [],
        src: [5075,5077]
      },
      {
        id: "c08-l03-p04",
        title: "AWS Systems Manager（SSM） ④",
        html: "<ul><li><b class=\"key\">Automation</b>：<b class=\"key\">ランブック</b>（Automation ドキュメント）で運用手順を自動化<ul><li>例：AMI 作成、EC2 の再起動、AWS Config の非準拠リソースの<b class=\"key\">自動修復</b></li></ul></li><li><b class=\"key\">State Manager</b>：インスタンスを<b class=\"key\">あるべき状態に維持</b>（設定の定期適用）</li><li><b class=\"key\">Inventory</b>：インストール済みソフトウェア等の情報を収集</li></ul>",
        oxIds: [],
        src: [5078,5081]
      },
      {
        id: "c08-l03-p05",
        title: "AWS Systems Manager（SSM） ⑤",
        html: "<ul><li><b class=\"key\">OpsCenter</b>：運用上の問題（OpsItem）を集約／<b class=\"key\">Incident Manager</b>：インシデント対応</li><li><b class=\"key\">Parameter Store</b>：設定値・シークレットを<b class=\"key\">階層的に保存</b>（/prod/db/password）<ul><li><b class=\"key\">SecureString</b>：<b class=\"key\">KMS</b> で暗号化</li></ul></li></ul>",
        oxIds: [],
        src: [5082,5084]
      },
      {
        id: "c08-l03-p06",
        title: "AWS Systems Manager（SSM） ⑥",
        html: "<ul><li>Standard（<b class=\"key\">無料</b>、最大 <b class=\"key\">10,000</b> 個、値 <b class=\"key\">4KB</b>）／Advanced（有料、値 <b class=\"key\">8KB</b>、パラメータポリシー）<ul><li><span class=\"badge b-cmp\">比較</span><b class=\"key\">自動ローテーション</b>が必要なら <b class=\"key\">Secrets Manager</b>（Parameter Store には組込みローテーションなし）</li></ul></li></ul>",
        oxIds: ["c08-ox-19"],
        src: [5085,5087]
      },
      {
        id: "c08-l03-p07",
        title: "AWS Health Dashboard ①",
        html: "<ul><li>AWS 側の<b class=\"key\">障害・メンテナンス情報</b>を確認<ul><li><b class=\"key\">サービスの状態（Service health）</b>：全体に公開される各サービスの状態</li><li><b class=\"key\">アカウントの状態（Your account health）</b>：<b class=\"key\">自分のアカウントのリソースに影響するイベント</b><ul><li>例：EC2 のスケジュールされた<b class=\"key\">リタイア</b>、ハードウェアメンテナンス</li></ul></li><li>旧称：AWS Personal Health Dashboard / Service Health Dashboard</li></ul></li><li><b class=\"key\">EventBridge 連携</b>：Health イベントをトリガーに通知・自動対応（Lambda 等）</li></ul>",
        oxIds: ["c08-ox-21"],
        src: [5089,5094]
      },
      {
        id: "c08-l03-p08",
        title: "AWS Health Dashboard ②",
        html: "<ul><li><b class=\"key\">AWS Health API</b>：<b class=\"key\">Business / Enterprise On-Ramp / Enterprise</b> サポートプランで利用可</li><li>Organizations の<b class=\"key\">組織ビュー</b>で全アカウントのイベントを集約</li></ul>",
        oxIds: [],
        src: [5095,5097]
      },
      {
        id: "c08-l03-p09",
        title: "AWS Trusted Advisor ①",
        html: "<ul><li>アカウントを<b class=\"key\">自動チェックしてベストプラクティスを推奨</b></li><li>カテゴリ：<b class=\"key\">コスト最適化／パフォーマンス／セキュリティ／耐障害性／サービスクォータ／運用上の優秀性</b><ul><li>例：アイドル状態の EC2、未使用の EIP、MFA 未設定のルート、公開された S3、Multi-AZ 未設定の RDS</li></ul></li><li><b class=\"key\">Basic / Developer サポート</b>：<b class=\"key\">コアセキュリティチェックとサービスクォータ</b>のチェックのみ</li></ul>",
        oxIds: ["c08-ox-20"],
        src: [5099,5102]
      },
      {
        id: "c08-l03-p10",
        title: "AWS Trusted Advisor ②",
        html: "<ul><li><b class=\"key\">Business 以上</b>：<b class=\"key\">全チェック</b>、API・EventBridge 連携</li><li><span class=\"badge b-cmp\">比較</span>Trusted Advisor＝<b class=\"key\">推奨（アドバイス）</b>、AWS Config＝<b class=\"key\">設定の準拠評価と履歴</b></li></ul>",
        oxIds: [],
        src: [5103,5105]
      },
      {
        id: "c08-l03-p11",
        title: "AWS Service Quotas",
        html: "<ul><li>サービスごとの<b class=\"key\">クォータ（上限、旧称サービス制限）</b>を一元表示し、<b class=\"key\">引き上げをリクエスト</b><ul><li>例：リージョンあたりの EC2 vCPU 数、Elastic IP の数、Lambda の同時実行数</li></ul></li><li>使用量が上限に近づいたら<b class=\"key\">CloudWatch アラーム</b>で通知できる</li><li><b class=\"key\">クォータリクエストテンプレート</b>：Organizations の新規アカウント作成時に自動で引き上げ申請</li><li><span class=\"badge b-freq\">頻出</span>DR リージョンでも<b class=\"key\">クォータを事前に引き上げておく</b>（いざという時に起動できない事故を防ぐ）</li></ul>",
        oxIds: [],
        src: [5107,5112]
      },
      {
        id: "c08-l03-p12",
        title: "AWS Fault Injection Service（FIS）",
        html: "<ul><li><b class=\"key\">カオスエンジニアリング</b>のためのマネージドサービス（旧 Fault Injection Simulator）</li><li><b class=\"key\">実験テンプレート</b>：EC2 停止、CPU 負荷、ネットワーク遅延、<b class=\"key\">AZ の電源断シナリオ</b>、RDS フェイルオーバー等</li><li><b class=\"key\">停止条件</b>：CloudWatch アラームが発火したら実験を自動停止（安全装置）</li><li>目的：障害が起きても<b class=\"key\">本当に自動復旧するか</b>を本番相当環境で検証</li></ul>",
        oxIds: ["c08-ox-22"],
        src: [5114,5118]
      },
      {
        id: "c08-l03-p13",
        title: "AWS Resilience Hub ①",
        html: "<ul><li>アプリの<b class=\"key\">レジリエンス（回復力）を一元的に評価・改善</b></li><li><b class=\"key\">レジリエンシーポリシー</b>で目標 <b class=\"key\">RTO / RPO</b> を定義 → 現構成が達成できるかを<b class=\"key\">評価</b></li></ul>",
        oxIds: [],
        src: [5120,5121]
      },
      {
        id: "c08-l03-p14",
        title: "AWS Resilience Hub ②",
        html: "<ul><li>改善の<b class=\"key\">推奨事項</b>、CloudWatch アラーム・SOP・<b class=\"key\">FIS 実験</b>の推奨を提示</li><li>CloudFormation スタック、リソースグループ、<b class=\"key\">AppRegistry</b>、Terraform 状態ファイルなどからアプリを取り込み</li></ul>",
        oxIds: [],
        src: [5122,5124]
      },
      {
        id: "c08-l03-p15",
        title: "AWS Elastic Beanstalk のデプロイ方式 ①",
        html: "<ul><li>Elastic Beanstalk：コードをアップロードするだけで EC2・ELB・Auto Scaling などを自動構築する <b class=\"key\">PaaS</b></li><li><b class=\"key\">オールアットワンス（All at once）</b><ul><li>全インスタンスに一斉デプロイ。<b class=\"key\">最速・追加コストなし</b>だが<b class=\"key\">ダウンタイムあり</b></li></ul></li><li><b class=\"key\">ローリング（Rolling）</b><ul><li>バッチ単位で順次デプロイ。ダウンタイムなし、ただし<b class=\"key\">デプロイ中は処理能力が低下</b></li></ul></li></ul>",
        oxIds: [],
        src: [5126,5130]
      },
      {
        id: "c08-l03-p16",
        title: "AWS Elastic Beanstalk のデプロイ方式 ②",
        html: "<ul><li><b class=\"key\">追加バッチ付きローリング（Rolling with additional batch）</b><ul><li>先に追加バッチを起動 → <b class=\"key\">デプロイ中もフルキャパシティを維持</b>（少し追加コスト）</li></ul></li><li><b class=\"key\">イミュータブル（Immutable）</b><ul><li><b class=\"key\">新しい一時 Auto Scaling グループ</b>に新バージョンのインスタンスを起動し、正常なら入れ替え</li><li>既存インスタンスに触らないので<b class=\"key\">ロールバックが速く安全</b>。デプロイ時間・コストは大きめ</li></ul></li></ul>",
        oxIds: ["c08-ox-23"],
        src: [5131,5135]
      },
      {
        id: "c08-l03-p17",
        title: "AWS Elastic Beanstalk のデプロイ方式 ③",
        html: "<ul><li><b class=\"key\">トラフィック分割（Traffic splitting）</b><ul><li>新バージョンへ<b class=\"key\">一定割合のトラフィックを流して評価（カナリア）</b></li></ul></li></ul>",
        oxIds: [],
        src: [5136,5137]
      },
      {
        id: "c08-l03-p18",
        title: "AWS Elastic Beanstalk のデプロイ方式 ④",
        html: "<ul><li><b class=\"key\">ブルー/グリーン（Blue/Green）</b><ul><li><b class=\"key\">別環境（Green）</b>を作成し、<b class=\"key\">環境 URL のスワップ（CNAME 交換）</b>で切替</li><li>即時に切り戻し可能。DB を環境内に含めると切替で消えるため<b class=\"key\">RDS は環境外に置く</b></li><li><span class=\"badge b-note\">注</span>Beanstalk の「デプロイポリシー」ではなく<b class=\"key\">環境スワップ機能</b>で実現する</li></ul></li></ul>",
        oxIds: [],
        src: [5138,5142]
      },
    ] },
    { id: "c08-l04", title: "試験での出方と暗記数字", pages: [
      {
        id: "c08-l04-p01",
        title: "試験での出方 ①",
        html: "<ul><li><b class=\"key\">DR 戦略の選択（最頻出）</b><ul><li>「RTO/RPO 数時間・コスト最小」→ <b class=\"key\">バックアップ&amp;リストア</b></li><li>「DB は常時複製、アプリは障害時に起動、RTO 数十分」→ <b class=\"key\">パイロットライト</b></li><li>「縮小した本番環境を常時稼働、RTO 数分」→ <b class=\"key\">ウォームスタンバイ</b></li><li>「RTO/RPO ほぼゼロ、複数リージョンで同時処理」→ <b class=\"key\">マルチサイト アクティブ/アクティブ</b></li></ul></li></ul>",
        oxIds: [],
        src: [5144,5148]
      },
      {
        id: "c08-l04-p02",
        title: "試験での出方 ②",
        html: "<ul><li><b class=\"key\">データ複製サービスの選択</b><ul><li>「グローバルで書き込み、マルチリージョン読み書き」→ <b class=\"key\">DynamoDB グローバルテーブル</b></li><li>「リレーショナル DB、リージョン障害で RPO 秒・RTO 1分」→ <b class=\"key\">Aurora Global Database</b></li><li>「別リージョンにオブジェクトを自動コピー」→ <b class=\"key\">S3 CRR</b>（バージョニング必須）</li></ul></li></ul>",
        oxIds: [],
        src: [5149,5152]
      },
      {
        id: "c08-l04-p03",
        title: "試験での出方 ③",
        html: "<ul><li>「15分以内の複製を SLA で保証」→ <b class=\"key\">S3 Replication Time Control</b><ul><li>「オンプレのサーバーを継続複製して AWS で数分で復旧」→ <b class=\"key\">AWS Elastic Disaster Recovery</b></li><li>「複数サービスのバックアップを一元管理・別リージョンへコピー」→ <b class=\"key\">AWS Backup</b></li></ul></li></ul>",
        oxIds: [],
        src: [5153,5155]
      },
      {
        id: "c08-l04-p04",
        title: "試験での出方 ④",
        html: "<ul><li><b class=\"key\">高可用性の基本</b><ul><li>「単一 AZ 障害でも停止しない」→ <b class=\"key\">マルチAZ</b>（ALB＋複数 AZ の ASG、RDS Multi-AZ）</li><li>「インスタンス障害でセッションが消える」→ <b class=\"key\">セッションを ElastiCache / DynamoDB へ（ステートレス化）</b></li><li>「下流の処理が遅い/落ちても受付を止めたくない」→ <b class=\"key\">SQS で疎結合</b></li><li>「スロットリングエラー」→ <b class=\"key\">指数バックオフ＋ジッターで再試行</b></li><li>「再試行で二重課金を防ぐ」→ <b class=\"key\">冪等キー</b></li></ul></li></ul>",
        oxIds: [],
        src: [5156,5161]
      },
      {
        id: "c08-l04-p05",
        title: "試験での出方 ⑤",
        html: "<ul><li><b class=\"key\">監視</b><ul><li>「EC2 のメモリ使用率を監視」→ <b class=\"key\">CloudWatch エージェント</b>（カスタムメトリクス）</li><li>「ログ中の ERROR 数でアラーム」→ <b class=\"key\">メトリクスフィルター＋アラーム</b></li><li>「ログをリアルタイムに Lambda / Kinesis へ」→ <b class=\"key\">サブスクリプションフィルター</b></li><li>「ログをアドホックにクエリ」→ <b class=\"key\">CloudWatch Logs Insights</b></li><li>「誤報を減らし複数条件が揃った時だけ通知」→ <b class=\"key\">複合アラーム</b></li></ul></li></ul>",
        oxIds: [],
        src: [5162,5167]
      },
      {
        id: "c08-l04-p06",
        title: "試験での出方 ⑥",
        html: "<ul><li>「ユーザーより先にサイト障害を検知（外形監視）」→ <b class=\"key\">CloudWatch Synthetics</b><ul><li>「マイクロサービスのどこで遅延？」→ <b class=\"key\">X-Ray</b></li><li>「ハードウェア障害時に EC2 を自動復旧」→ <b class=\"key\">CloudWatch アラームの recover アクション</b></li></ul></li><li><b class=\"key\">運用自動化</b><ul><li>「SSH ポートを開けずにシェル接続・操作ログを監査」→ <b class=\"key\">Session Manager</b></li><li>「多数の EC2 にパッチを定期適用」→ <b class=\"key\">Patch Manager＋メンテナンスウィンドウ</b></li></ul></li></ul>",
        oxIds: [],
        src: [5168,5173]
      },
      {
        id: "c08-l04-p07",
        title: "試験での出方 ⑦",
        html: "<ul><li>「多数アカウント・リージョンに同じ構成を展開」→ <b class=\"key\">CloudFormation StackSets</b><ul><li>「更新でリソースが置換されるか事前確認」→ <b class=\"key\">変更セット</b></li><li>「手動変更でテンプレートとずれた」→ <b class=\"key\">ドリフト検出</b></li><li>「スタック削除でも DB のデータを残す」→ <b class=\"key\">DeletionPolicy: Snapshot / Retain</b></li><li>「自分のアカウントの EC2 に影響する予定メンテナンスを自動通知」→ <b class=\"key\">Health＋EventBridge</b></li></ul></li></ul>",
        oxIds: [],
        src: [5174,5178]
      },
      {
        id: "c08-l04-p08",
        title: "試験での出方 ⑧",
        html: "<ul><li>「上限に達して起動できない」→ <b class=\"key\">Service Quotas</b> で引き上げ<ul><li>「障害を意図的に注入して検証」→ <b class=\"key\">FIS</b>／「RTO/RPO 目標の達成可否を評価」→ <b class=\"key\">Resilience Hub</b></li></ul></li></ul>",
        oxIds: [],
        src: [5179,5180]
      },
      {
        id: "c08-l04-p09",
        title: "試験での出方（続き） ①",
        html: "<ul><li><b class=\"key\">Elastic Beanstalk</b><ul><li>「最速・ダウンタイム許容」→ オールアットワンス</li><li>「フルキャパシティ維持で順次」→ 追加バッチ付きローリング</li><li>「失敗時に既存インスタンスに影響を与えず素早くロールバック」→ <b class=\"key\">イミュータブル</b></li><li>「別環境で検証して即時切替・切戻し」→ <b class=\"key\">ブルー/グリーン（URL スワップ）</b></li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>RDS の<b class=\"key\">リードレプリカは非同期</b> → HA（自動フェイルオーバー）目的なら <b class=\"key\">Multi-AZ</b></span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">スティッキーセッション</b>はステートレス化ではない（障害でセッション消失）</span></li></ul>",
        oxIds: [],
        src: [5181,5187]
      },
      {
        id: "c08-l04-p10",
        title: "試験での出方（続き） ②",
        html: "<ul><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>S3 CRR は<b class=\"key\">既存オブジェクトを自動複製しない</b>（Batch Replication が必要）</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>CloudWatch Logs の <b class=\"key\">S3 エクスポートはリアルタイムではない</b></span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">CloudTrail は API 監査</b>、性能監視ではない。メモリ監視を CloudTrail で…は誤り</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span><b class=\"key\">詳細モニタリングでもメモリは取れない</b>（間隔が1分になるだけ）</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>ウォームスタンバイを「アプリは停止」と書いたらパイロットライトの説明</span></li><li>解き方のコツ：<b class=\"key\">「RTO/RPO の数字」「コスト最小 or 運用負荷最小」「リージョン or AZ」</b>の3点で絞る</li></ul>",
        oxIds: [],
        src: [5188,5193]
      },
      {
        id: "c08-l04-p11",
        title: "暗記すべき数字・制限 ①",
        html: "<ul><li>新規リージョンの AZ 数：原則 <b class=\"key\">3つ以上</b></li><li>Well-Architected：<b class=\"key\">6本柱</b>（持続可能性は <b class=\"key\">2021年</b>追加）</li><li>DR の RPO/RTO 目安：バックアップ&amp;リストア <b class=\"key\">数時間</b>／パイロットライト <b class=\"key\">数十分</b></li></ul>",
        oxIds: [],
        src: [5196,5198]
      },
      {
        id: "c08-l04-p12",
        title: "暗記すべき数字・制限 ②",
        html: "<ul><li>DR の RPO/RTO 目安：ウォームスタンバイ <b class=\"key\">数分</b>／マルチサイト <b class=\"key\">ほぼゼロ（リアルタイム）</b></li><li>Aurora ストレージ：<b class=\"key\">3 AZ に6コピー</b></li><li>Aurora Global Database：複製遅延 通常 <b class=\"key\">1秒未満</b>、RPO <b class=\"key\">秒</b>、RTO <b class=\"key\">1分程度</b></li></ul>",
        oxIds: [],
        src: [5199,5201]
      },
      {
        id: "c08-l04-p13",
        title: "暗記すべき数字・制限 ③",
        html: "<ul><li>S3 RTC：<b class=\"key\">99.99%</b> のオブジェクトを <b class=\"key\">15分以内</b>に複製</li><li>S3 CRR/SRR：<b class=\"key\">送信元・送信先ともバージョニング必須</b></li><li>AWS DRS：RPO <b class=\"key\">秒単位</b>、RTO <b class=\"key\">分単位</b></li></ul>",
        oxIds: [],
        src: [5202,5204]
      },
      {
        id: "c08-l04-p14",
        title: "暗記すべき数字・制限 ④",
        html: "<ul><li>CloudWatch 基本モニタリング（EC2）：<b class=\"key\">5分</b>／詳細モニタリング：<b class=\"key\">1分</b></li><li>カスタムメトリクス：標準解像度 <b class=\"key\">1分</b>、高解像度 <b class=\"key\">1秒</b></li></ul>",
        oxIds: ["c08-ox-10"],
        src: [5205,5206]
      },
      {
        id: "c08-l04-p15",
        title: "暗記すべき数字・制限 ⑤",
        html: "<ul><li>メトリクス保持：1分未満 <b class=\"key\">3時間</b>／1分 <b class=\"key\">15日</b>／5分 <b class=\"key\">63日</b>／1時間 <b class=\"key\">455日（15か月）</b></li><li>アラーム状態：<b class=\"key\">OK / ALARM / INSUFFICIENT_DATA</b> の <b class=\"key\">3つ</b></li></ul>",
        oxIds: [],
        src: [5207,5208]
      },
      {
        id: "c08-l04-p16",
        title: "暗記すべき数字・制限 ⑥",
        html: "<ul><li>CloudWatch Logs 保持期間：既定 <b class=\"key\">無期限</b>、設定は <b class=\"key\">1日〜10年</b></li><li>Parameter Store：Standard <b class=\"key\">10,000個・4KB・無料</b>／Advanced <b class=\"key\">8KB・有料</b></li><li>Trusted Advisor：Basic/Developer は<b class=\"key\">コアセキュリティ＋サービスクォータ</b>のみ、全チェックは <b class=\"key\">Business 以上</b></li></ul>",
        oxIds: ["c08-ox-11"],
        src: [5209,5211]
      },
      {
        id: "c08-l04-p17",
        title: "暗記すべき数字・制限 ⑦",
        html: "<ul><li>Health API：<b class=\"key\">Business / Enterprise On-Ramp / Enterprise</b> サポート</li><li>Beanstalk デプロイ：ダウンタイムあり＝<b class=\"key\">オールアットワンスのみ</b>（ブルー/グリーンは環境スワップ）</li><li>語呂合わせ：「<b class=\"key\">バ・パ・ウォ・マ</b>＝<b class=\"key\">時・十分・分・ゼロ</b>」（DR 4種の RTO の順）</li></ul>",
        oxIds: [],
        src: [5212,5214]
      },
      {
        id: "c08-l04-p18",
        title: "暗記すべき数字・制限 ⑧",
        html: "<ul><li>語呂合わせ：「<b class=\"key\">RPO＝ぽ＝ポイント＝データ</b>、<b class=\"key\">RTO＝と＝トキ＝時間</b>」</li><li>語呂合わせ：「<b class=\"key\">メモリとディスクはエージェント</b>」</li></ul>",
        oxIds: [],
        src: [5215,5217]
      },
    ] },
  ],
  ox: [
    {
      id: "c08-ox-01", answer: false, src: 5219,
      text: "AWS Well-Architected フレームワークは、運用上の優秀性・セキュリティ・信頼性・パフォーマンス効率・コスト最適化の5本柱で構成される。",
      explain: "2021年に<b class=\"key\">持続可能性</b>が加わり<b class=\"key\">6本柱</b>"
    },
    {
      id: "c08-ox-02", answer: false, src: 5222,
      text: "RPO はシステム停止から復旧までに許容される時間を表す。",
      explain: "それは <b class=\"key\">RTO</b>。RPO は<b class=\"key\">許容できるデータ損失の時点（量）</b>"
    },
    {
      id: "c08-ox-03", answer: true, src: 5225,
      text: "パイロットライト戦略では、DR リージョンでデータベースを常時複製し、アプリケーションサーバーは障害時に起動する。",
      explain: "「種火」としてコアのデータ層だけ稼働させる。アプリ層も縮小稼働ならウォームスタンバイ"
    },
    {
      id: "c08-ox-04", answer: false, src: 5228,
      text: "ウォームスタンバイは、DR 戦略の中で最も RTO が短く、コストも最も高い。",
      explain: "最も RTO が短くコストが高いのは<b class=\"key\">マルチサイト アクティブ/アクティブ</b>"
    },
    {
      id: "c08-ox-05", answer: false, src: 5231,
      text: "S3 クロスリージョンレプリケーションを有効にすると、設定前から存在するオブジェクトも自動的に複製される。",
      explain: "新規オブジェクトのみ。既存オブジェクトは <b class=\"key\">S3 Batch Replication</b> で複製する"
    },
    {
      id: "c08-ox-06", answer: true, src: 5234,
      text: "S3 クロスリージョンレプリケーションには、送信元と送信先の両方のバケットでバージョニングの有効化が必要である。",
      explain: "CRR・SRR とも両バケットでバージョニングが必須"
    },
    {
      id: "c08-ox-07", answer: true, src: 5237,
      text: "DynamoDB グローバルテーブルでは、すべてのレプリカリージョンで書き込みが可能である。",
      explain: "マルチアクティブ構成。競合は最終書き込み優先で解決される"
    },
    {
      id: "c08-ox-08", answer: false, src: 5240,
      text: "Aurora Global Database のセカンダリリージョンのクラスターは、平常時でも書き込みを受け付ける。",
      explain: "セカンダリは<b class=\"key\">読み取り専用</b>。書き込みはプライマリリージョンのみ（昇格後に書き込み可）"
    },
    {
      id: "c08-ox-09", answer: false, src: 5243,
      text: "EC2 のメモリ使用率は、詳細モニタリングを有効にすれば CloudWatch の標準メトリクスとして取得できる。",
      explain: "詳細モニタリングは<b class=\"key\">間隔が1分になるだけ</b>。メモリは <b class=\"key\">CloudWatch エージェント</b>が必要"
    },
    {
      id: "c08-ox-10", answer: true, src: 5246,
      text: "CloudWatch の高解像度カスタムメトリクスは、1秒単位でデータを発行できる。",
      explain: "標準解像度は1分、高解像度は1秒単位"
    },
    {
      id: "c08-ox-11", answer: false, src: 5249,
      text: "CloudWatch Logs のロググループの保持期間は、既定で30日に設定されている。",
      explain: "既定は<b class=\"key\">失効しない（無期限）</b>。コスト管理のため保持期間を設定するのが推奨"
    },
    {
      id: "c08-ox-12", answer: false, src: 5252,
      text: "メトリクスフィルターを作成すると、作成前に取り込まれたログも遡ってメトリクス化される。",
      explain: "メトリクスフィルターは作成<b class=\"key\">以降</b>のログイベントが対象"
    },
    {
      id: "c08-ox-13", answer: true, src: 5255,
      text: "CloudWatch Logs のサブスクリプションフィルターを使うと、ログを Kinesis Data Streams や Lambda にリアルタイムで送信できる。",
      explain: "送信先は Kinesis Data Streams・Amazon Data Firehose・Lambda。S3 エクスポートはバッチ"
    },
    {
      id: "c08-ox-14", answer: true, src: 5258,
      text: "複合アラームは、複数のアラームの状態を AND / OR などで組み合わせて、アラームノイズを削減するために使用できる。",
      explain: "「すべての条件が揃った時だけ通知」で誤報・通知過多を減らせる"
    },
    {
      id: "c08-ox-15", answer: false, src: 5261,
      text: "AWS X-Ray は、AWS アカウント内で誰がどの API を呼び出したかを記録する監査サービスである。",
      explain: "それは <b class=\"key\">CloudTrail</b>。X-Ray はリクエストの<b class=\"key\">分散トレーシング</b>（遅延・エラー箇所の特定）"
    },
    {
      id: "c08-ox-16", answer: true, src: 5264,
      text: "CloudFormation の変更セットを使うと、スタック更新時にどのリソースが置換されるかを実行前に確認できる。",
      explain: "変更セットで追加・変更・置換・削除をプレビューしてから実行できる"
    },
    {
      id: "c08-ox-17", answer: false, src: 5267,
      text: "CloudFormation の DeletionPolicy に Snapshot を指定すると、S3 バケットはスナップショットを取得してから削除される。",
      explain: "Snapshot は RDS・EBS・ElastiCache・Redshift など<b class=\"key\">スナップショットをサポートするリソース</b>のみ"
    },
    {
      id: "c08-ox-18", answer: true, src: 5271,
      text: "Systems Manager Session Manager を使用すると、セキュリティグループで SSH（22番）のインバウンドを開放せずにインスタンスへシェル接続できる。",
      explain: "SSM Agent がアウトバウンドで接続するためインバウンド不要。踏み台・キーペアも不要"
    },
    {
      id: "c08-ox-19", answer: false, src: 5274,
      text: "Systems Manager Parameter Store の SecureString パラメータは、組み込み機能で自動ローテーションできる。",
      explain: "自動ローテーションは <b class=\"key\">Secrets Manager</b> の機能。Parameter Store は KMS 暗号化のみ"
    },
    {
      id: "c08-ox-20", answer: false, src: 5277,
      text: "AWS Trusted Advisor のすべてのチェックは、Basic サポートプランでも利用できる。",
      explain: "Basic/Developer は<b class=\"key\">コアセキュリティチェックとサービスクォータ</b>のみ。全チェックは Business 以上"
    },
    {
      id: "c08-ox-21", answer: true, src: 5280,
      text: "AWS Health Dashboard のイベントを Amazon EventBridge で検知し、通知や自動対応を行うことができる。",
      explain: "例：EC2 のスケジュールされたリタイアを検知して Lambda で通知・対応"
    },
    {
      id: "c08-ox-22", answer: true, src: 5283,
      text: "AWS Fault Injection Service では、CloudWatch アラームを停止条件に設定して実験を自動停止できる。",
      explain: "想定以上の影響が出たら自動で実験を止める安全装置"
    },
    {
      id: "c08-ox-23", answer: false, src: 5286,
      text: "Elastic Beanstalk のイミュータブルデプロイでは、既存のインスタンスに新バージョンを上書きデプロイする。",
      explain: "<b class=\"key\">新しい一時 Auto Scaling グループ</b>に新インスタンスを起動する。既存に触れないので安全"
    },
    {
      id: "c08-ox-24", answer: false, src: 5289,
      text: "RDS のリードレプリカは同期レプリケーションで、プライマリ障害時に自動でフェイルオーバーする。",
      explain: "リードレプリカは<b class=\"key\">非同期</b>で昇格は手動。自動フェイルオーバーは <b class=\"key\">Multi-AZ</b>"
    },
    {
      id: "c08-ox-25", answer: true, src: 5292,
      text: "指数バックオフにジッターを加えると、多数のクライアントの再試行が同じタイミングに集中するのを防げる。",
      explain: "待ち時間にランダム性を加え、再試行の「群れ（thundering herd）」を分散させる"
    },
    {
      id: "c08-ox-26", answer: true, src: 5295,
      text: "AWS CDK で定義したインフラは、最終的に CloudFormation テンプレートに合成されてデプロイされる。",
      explain: "cdk synth でテンプレートを生成し、CloudFormation スタックとしてデプロイされる"
    },
  ],
  mc: [
    {
      id: "c08-mc-01", answer: ["B"], selectCount: 1, domain: 2, src: 5300,
      stem: "ある会社は東京リージョンで EC2 と Amazon RDS for MySQL を使う業務システムを運用している。<br>要件：大阪リージョンへの DR。<b class=\"key\">RTO 24時間・RPO 24時間</b>で許容される<br>DR のための追加コストは<b class=\"key\">できるだけ抑えたい</b>。どの戦略が最も適切か",
      choices: [
        "大阪リージョンにウォームスタンバイ環境を構築し、Route 53 でフェイルオーバーする",
        "AWS Backup で EC2 と RDS を毎日バックアップし、大阪リージョンへクロスリージョンコピーする。障害時は CloudFormation で環境を再構築して復元する",
        "大阪リージョンに RDS クロスリージョンリードレプリカを作成し、EC2 の AMI を用意しておく",
        "両リージョンでマルチサイト アクティブ/アクティブ構成を構築する",
      ],
      choiceExplain: [
        { ok: false, text: "数分の RTO を実現する構成で、24時間の要件に対し過剰なコスト" },
        { ok: true, text: "RTO/RPO が数時間〜1日なら<b class=\"key\">バックアップ&amp;リストア</b>で十分。常時稼働リソースがなく最安" },
        { ok: false, text: "パイロットライト。DB を常時稼働させるため B より高コスト" },
        { ok: false, text: "最もコストが高い" },
      ],
      tip: "「RTO/RPO が長い＋コスト最小」→ 何も常時稼働させないバックアップ&amp;リストア"
    },
    {
      id: "c08-mc-02", answer: ["B"], selectCount: 1, domain: 2, src: 5314,
      stem: "EC サイトを運営する会社は、us-east-1 で Aurora PostgreSQL を使用している。<br>要件：リージョン全体の障害時に <b class=\"key\">RPO 数秒・RTO 数分以内</b>で別リージョンへ切替えたい<br>平常時は別リージョンの分析ツールから<b class=\"key\">低レイテンシーで読み取り</b>も行いたい<br>運用負荷が最も少ない構成はどれか",
      choices: [
        "Aurora のスナップショットを1時間ごとに別リージョンへコピーする",
        "Aurora Global Database を構成し、別リージョンにセカンダリクラスターを置く",
        "同一リージョン内に Aurora レプリカを3つ追加する",
        "AWS DMS で別リージョンの RDS for PostgreSQL へ継続的にレプリケーションする",
      ],
      choiceExplain: [
        { ok: false, text: "RPO が最大1時間になり要件を満たさない。復元にも時間がかかる" },
        { ok: true, text: "ストレージ層で通常1秒未満の複製。セカンダリで読み取り可能、昇格は1分程度" },
        { ok: false, text: "同一リージョン内のレプリカでは<b class=\"key\">リージョン障害</b>に耐えられない" },
        { ok: false, text: "実現は可能だが DMS タスクの運用負荷が高く、フェイルオーバーも手作り" },
      ],
      tip: "「リレーショナル＋リージョン障害＋RPO 秒/RTO 分」→ Aurora Global Database"
    },
    {
      id: "c08-mc-03", answer: ["B"], selectCount: 1, domain: 2, src: 5329,
      stem: "モバイルゲームの会社は、世界中のプレイヤーのデータを DynamoDB に保存している。<br>要件：北米・欧州・アジアの各リージョンで<b class=\"key\">ローカルに読み書き</b>して低レイテンシーを実現する<br>1リージョンが停止しても他リージョンで書き込みを継続したい。運用負荷は最小限にしたい",
      choices: [
        "DynamoDB Streams と Lambda で他リージョンのテーブルへ書き込みをコピーする",
        "DynamoDB グローバルテーブルを構成し、3リージョンにレプリカを作成する",
        "DynamoDB Accelerator（DAX）クラスターを各リージョンに配置する",
        "DynamoDB のオンデマンドバックアップを各リージョンへ定期的にコピーする",
      ],
      choiceExplain: [
        { ok: false, text: "自前で複製を作ると競合処理・障害対応の運用負荷が大きい" },
        { ok: true, text: "マネージドなマルチアクティブ複製。各リージョンで読み書き可能" },
        { ok: false, text: "DAX は読み取りキャッシュ。リージョン間複製や書き込みの継続はできない" },
        { ok: false, text: "バックアップは定期的でリアルタイムではなく、他リージョンで即時書き込みできない" },
      ],
      tip: "「複数リージョンで読み書き」＝<b class=\"key\">グローバルテーブル</b>の決まり文句"
    },
    {
      id: "c08-mc-04", answer: ["A"], selectCount: 1, domain: 2, src: 5343,
      stem: "ある企業は、オンプレミスの VMware 上の約100台の業務サーバーの DR サイトとして AWS を使いたい。<br>要件：<b class=\"key\">RPO 秒単位・RTO 分単位</b>。平常時の AWS 側コストはできるだけ抑えたい<br>OS やアプリの種類はさまざまで、アプリごとの複製設定は避けたい",
      choices: [
        "AWS Elastic Disaster Recovery でサーバーを継続的にブロックレベル複製する",
        "毎晩 VM のイメージを VM Import/Export で AMI 化して S3 に保存する",
        "AWS DataSync でサーバーのファイルを毎時 S3 へ同期する",
        "AWS 上に同数の EC2 を常時稼働させ、各アプリの機能で複製する",
      ],
      choiceExplain: [
        { ok: true, text: "OS/アプリに依存しない<b class=\"key\">ブロックレベル継続複製</b>。平常時は低コストのステージング領域のみ" },
        { ok: false, text: "RPO が最大1日となり、AMI 化・起動にも時間がかかる" },
        { ok: false, text: "ファイル同期であり、サーバーをそのまま起動できない。RPO も1時間" },
        { ok: false, text: "常時稼働でコストが高く、アプリごとの設定が必要" },
      ],
      tip: "「オンプレのサーバー丸ごと＋RPO 秒・RTO 分＋低コスト」→ <b class=\"key\">AWS DRS</b>"
    },
    {
      id: "c08-mc-05", answer: ["B"], selectCount: 1, domain: 2, src: 5357,
      stem: "ある会社の Web アプリケーションは ALB の背後の EC2 Auto Scaling グループで動いている。<br>スケールイン時やインスタンス障害時に、ユーザーのログインセッションが失われる問題が起きている<br>現在はセッションを各 EC2 のメモリに保存し、ALB のスティッキーセッションを有効化している<br>セッションの消失を防ぎ、スケーラビリティを高める最適な方法はどれか",
      choices: [
        "スティッキーセッションの期間を長くする",
        "セッションデータを Amazon ElastiCache に保存し、アプリをステートレスにする",
        "EC2 のインスタンスタイプを大きくしてインスタンス数を減らす",
        "Auto Scaling グループのスケールインを無効化する",
      ],
      choiceExplain: [
        { ok: false, text: "インスタンスが落ちればメモリ上のセッションは消える。根本解決にならない" },
        { ok: true, text: "外部ストア（ElastiCache/DynamoDB）に置けばどのインスタンスでも処理できる" },
        { ok: false, text: "単一障害の影響が大きくなり可用性が下がる" },
        { ok: false, text: "コストが無駄に増え、障害時の消失は防げない" },
      ],
      tip: "「セッション消失」「スケール」→ <b class=\"key\">ステートレス化＋外部セッションストア</b>"
    },
    {
      id: "c08-mc-06", answer: ["B"], selectCount: 1, domain: 2, src: 5372,
      stem: "注文処理システムでは、Web 層が受けた注文を直接バックエンドの処理サーバーに送っている。<br>セール時に注文が急増すると、処理サーバーが過負荷で落ち、<b class=\"key\">注文が失われる</b><br>注文の取りこぼしを防ぎ、各層を独立してスケールさせたい。最も適切なのはどれか",
      choices: [
        "処理サーバーのインスタンスタイプを最大サイズにする",
        "Web 層と処理サーバーの間に Amazon SQS キューを置き、処理サーバーはキューから取り出して処理する",
        "Web 層に CloudFront を置いてリクエストをキャッシュする",
        "処理サーバーを Multi-AZ に配置し、ALB で負荷分散する",
      ],
      choiceExplain: [
        { ok: false, text: "ピークの予測が外れれば同じ問題が起きる。コストも高い" },
        { ok: true, text: "<b class=\"key\">疎結合</b>。キューがバッファとなり、処理側が落ちてもメッセージは残る<br>キューの滞留数（ApproximateNumberOfMessagesVisible）で処理側を Auto Scaling できる" },
        { ok: false, text: "注文（POST）はキャッシュできない" },
        { ok: false, text: "可用性は上がるが、急増による過負荷と取りこぼしは解決しない" },
      ],
      tip: "「急増」「取りこぼし」「独立してスケール」→ <b class=\"key\">SQS で疎結合</b>"
    },
    {
      id: "c08-mc-07", answer: ["B"], selectCount: 1, domain: 2, src: 5387,
      stem: "運用チームは数百台の EC2（Amazon Linux）の<b class=\"key\">メモリ使用率とディスク空き容量</b>を監視し、閾値超過で通知したい。<br>アプリのログも CloudWatch Logs に集約したい。運用負荷が最も少ない方法はどれか",
      choices: [
        "全インスタンスで詳細モニタリングを有効化し、CloudWatch アラームを設定する",
        "Systems Manager で CloudWatch エージェントを一括導入し、設定を Parameter Store から配布する<br>その上でカスタムメトリクスにアラームを設定する",
        "cron でメモリ使用率を取得するスクリプトを各インスタンスに配置し、PutMetricData を呼ぶ",
        "AWS CloudTrail を有効にし、CloudTrail Lake でメモリ使用率をクエリする",
      ],
      choiceExplain: [
        { ok: false, text: "詳細モニタリングでもメモリ・ディスク使用率は取れない" },
        { ok: true, text: "エージェントでメトリクスとログを両方収集。SSM で数百台に一括配布できる" },
        { ok: false, text: "実現できるが、スクリプトの配布・保守で運用負荷が高い。ログ収集もできない" },
        { ok: false, text: "CloudTrail は API 呼び出しの記録で、OS 内部のメトリクスは扱わない" },
      ],
      tip: "「メモリ・ディスク」→ <b class=\"key\">CloudWatch エージェント</b>、「大量台数」→ <b class=\"key\">SSM で配布</b>"
    },
    {
      id: "c08-mc-08", answer: ["B"], selectCount: 1, domain: 2, src: 5401,
      stem: "あるアプリのログは CloudWatch Logs に出力されている。<br>ログに &quot;PaymentFailed&quot; が <b class=\"key\">5分間に10回以上</b>出現したら運用チームにメール通知したい<br>追加のコードやサーバーを最も少なくして実現する方法はどれか",
      choices: [
        "CloudWatch Logs Insights のクエリを5分ごとに手動で実行する",
        "メトリクスフィルターで &quot;PaymentFailed&quot; の出現数をメトリクス化し、CloudWatch アラームから SNS で通知する",
        "サブスクリプションフィルターで Lambda に送り、Lambda で件数を数えて SES で通知する",
        "ロググループを S3 にエクスポートし、Athena で定期的に集計する",
      ],
      choiceExplain: [
        { ok: false, text: "手動運用で自動通知にならない" },
        { ok: true, text: "メトリクスフィルター＋アラーム＋SNS は<b class=\"key\">コード不要</b>の定番パターン" },
        { ok: false, text: "実現可能だが Lambda コードの開発・保守が必要" },
        { ok: false, text: "エクスポートはリアルタイムでなく、集計ジョブの構築も必要" },
      ],
      tip: "「ログのパターン出現数で通知」→ <b class=\"key\">メトリクスフィルター→アラーム→SNS</b>"
    },
    {
      id: "c08-mc-09", answer: ["B"], selectCount: 1, domain: 2, src: 5415,
      stem: "ある会社はマイクロサービス（API Gateway、Lambda、DynamoDB、外部 API 呼び出し）でアプリを構築した。<br>一部のリクエストで応答が遅いが、<b class=\"key\">どのサービス間の呼び出しで遅延が発生しているか</b>分からない<br>原因箇所を最も効率的に特定できる方法はどれか",
      choices: [
        "各 Lambda 関数の CloudWatch メトリクス（Duration）を比較する",
        "AWS X-Ray のアクティブトレーシングを有効にし、サービスマップとトレースを分析する",
        "AWS CloudTrail のイベント履歴で API 呼び出しを確認する",
        "VPC フローログを有効にしてトラフィックを分析する",
      ],
      choiceExplain: [
        { ok: false, text: "関数単位の時間は分かるが、内部の下流呼び出し（DynamoDB・外部 API）の内訳は分からない" },
        { ok: true, text: "リクエスト単位で各区間（サブセグメント）の時間とエラーを可視化できる" },
        { ok: false, text: "CloudTrail は管理系 API の監査用。レイテンシー分析には使えない" },
        { ok: false, text: "IP レベルの通信記録で、アプリ内の遅延箇所は特定できない" },
      ],
      tip: "「マイクロサービス」「どこで遅延」→ <b class=\"key\">X-Ray</b>"
    },
    {
      id: "c08-mc-10", answer: ["B"], selectCount: 1, domain: 2, src: 5429,
      stem: "ある企業は AWS Organizations で50のアカウントを管理している。<br>すべてのアカウントの<b class=\"key\">全リージョン</b>に、同一の AWS Config ルールと IAM ロールを展開したい<br>今後追加されるアカウントにも<b class=\"key\">自動で展開</b>されるようにしたい。最適な方法はどれか",
      choices: [
        "各アカウントで CloudFormation スタックを手動で作成する",
        "サービスマネージド権限の CloudFormation StackSets を使い、組織単位（OU）を対象に自動デプロイを有効にする",
        "AWS CDK のアプリを各アカウントで cdk deploy する",
        "Systems Manager Run Command で各アカウントの CLI コマンドを実行する",
      ],
      choiceExplain: [
        { ok: false, text: "50アカウント × 全リージョンを手作業は非現実的。新規アカウントへの自動展開もない" },
        { ok: true, text: "StackSets は<b class=\"key\">複数アカウント×複数リージョン</b>へ一括展開。OU 対象の自動デプロイが可能" },
        { ok: false, text: "各アカウントでのデプロイ作業が必要で、自動展開されない" },
        { ok: false, text: "Run Command はインスタンスへのコマンド実行用で、アカウント横断の構成展開ではない" },
      ],
      tip: "「多数アカウント＋多数リージョン＋新規アカウントにも自動」→ <b class=\"key\">StackSets</b>"
    },
    {
      id: "c08-mc-11", answer: ["B"], selectCount: 1, domain: 1, src: 5443,
      stem: "セキュリティ部門は、プライベートサブネットの EC2 への管理アクセスについて次を要件とした。<br>要件：踏み台サーバーと SSH キーを廃止、<b class=\"key\">インバウンドポートは一切開けない</b>、操作ログを S3 に保存<br>インターネットへのアウトバウンド経路はない。最も適切な構成はどれか",
      choices: [
        "EC2 Instance Connect を使用し、セキュリティグループで 22番を社内 IP に限定する",
        "Session Manager を使用し、ssm・ssmmessages・ec2messages のインターフェイス VPC エンドポイントを作成する<br>インスタンスプロファイルに AmazonSSMManagedInstanceCore を付与する",
        "Site-to-Site VPN を構築して社内から SSH で接続する",
        "踏み台サーバーをパブリックサブネットに置き、MFA を必須にする",
      ],
      choiceExplain: [
        { ok: false, text: "EC2 Instance Connect（エンドポイント経由でない通常方式）は 22番のインバウンドが必要" },
        { ok: true, text: "インバウンド不要、IAM で制御、ログを S3/CloudWatch Logs に保存できる<br>インターネット経路がないので <b class=\"key\">VPC エンドポイント</b>が必要" },
        { ok: false, text: "SSH キーとインバウンド 22番が残る" },
        { ok: false, text: "踏み台を廃止する要件に反する" },
      ],
      tip: "「SSH 不要・踏み台不要・ポート開放なし・監査ログ」→ <b class=\"key\">Session Manager</b>"
    },
    {
      id: "c08-mc-12", answer: ["D"], selectCount: 1, domain: 2, src: 5459,
      stem: "開発チームは Elastic Beanstalk で本番 Web アプリを運用している。<br>要件：デプロイ中も<b class=\"key\">処理能力を落とさない</b>、新バージョンに問題があれば<b class=\"key\">既存インスタンスに影響を与えず素早くロールバック</b><br>どのデプロイ方式が最も適切か",
      choices: [
        "オールアットワンス",
        "ローリング",
        "追加バッチ付きローリング",
        "イミュータブル",
      ],
      choiceExplain: [
        { ok: false, text: "ダウンタイムが発生し、失敗時は全台に影響" },
        { ok: false, text: "デプロイ中は処理能力が低下。失敗時は更新済みバッチを再デプロイする必要" },
        { ok: false, text: "能力は維持できるが、既存インスタンスを更新するためロールバックは再デプロイになる" },
        { ok: true, text: "新しい一時 ASG に起動。失敗時はそれを削除するだけで既存は無傷" },
      ],
      tip: "「既存に影響なし」「素早いロールバック」→ <b class=\"key\">イミュータブル</b>（またはブルー/グリーン）"
    },
    {
      id: "c08-mc-13", answer: ["A","C"], selectCount: 2, domain: 2, src: 5473,
      stem: "ある会社は us-east-1 で ALB＋EC2 の Web サイトを運営している。<br>リージョン障害時に、us-west-2 で稼働している<b class=\"key\">縮小版の同一構成</b>へ自動的に切替えたい<br>静的コンテンツは S3 に保存しており、両リージョンで同じコンテンツを使いたい<br>要件を満たすために必要な組み合わせはどれか（2つ選択）",
      choices: [
        "Route 53 のフェイルオーバールーティングを構成し、プライマリにヘルスチェックを関連付ける",
        "Route 53 のシンプルルーティングで両リージョンの ALB を1つのレコードに登録する",
        "静的コンテンツのバケットで S3 クロスリージョンレプリケーションを有効化する",
        "CloudFront のキャッシュ TTL を延長する",
        "us-east-1 の Auto Scaling グループに us-west-2 のサブネットを追加する",
      ],
      choiceExplain: [
        { ok: true, text: "ヘルスチェック失敗で us-west-2 の ALB へ DNS を自動切替（ウォームスタンバイ構成）" },
        { ok: false, text: "シンプルルーティングはヘルスチェックによる切替ができない" },
        { ok: true, text: "DR リージョンにもコンテンツを複製しておく（両バケットでバージョニング必須）" },
        { ok: false, text: "キャッシュ延長はオリジン障害の根本的な DR にならない" },
        { ok: false, text: "Auto Scaling グループは<b class=\"key\">単一リージョン</b>内の AZ にしか展開できない" },
      ],
      tip: "「DNS で自動切替」→ フェイルオーバールーティング、「データを別リージョンに」→ CRR"
    },
    {
      id: "c08-mc-14", answer: ["A","B"], selectCount: 2, domain: 2, src: 5490,
      stem: "ある会社は CloudFormation で本番環境を管理している。<br>先日、スタックの更新で RDS インスタンスが<b class=\"key\">置換され、データが失われる事故</b>が起きた<br>また、スタックの削除時にも DB のデータを失わないようにしたい<br>再発を防ぐために有効な対策はどれか（2つ選択）",
      choices: [
        "更新前に変更セットを作成し、RDS が Replacement になっていないか確認する",
        "RDS リソースに DeletionPolicy: Snapshot（および UpdateReplacePolicy: Snapshot）を指定する",
        "ドリフト検出を毎日実行する",
        "CloudFormation のテンプレートを JSON から YAML に変換する",
        "スタックを StackSets に移行する",
      ],
      choiceExplain: [
        { ok: true, text: "変更セットで置換の有無を<b class=\"key\">事前に</b>把握できる" },
        { ok: true, text: "削除・置換時に<b class=\"key\">最終スナップショット</b>を取得してデータを保全" },
        { ok: false, text: "ドリフト検出は手動変更の検出用で、更新による置換は防げない" },
        { ok: false, text: "書式の違いで動作は変わらない" },
        { ok: false, text: "複数アカウント展開の機能で、データ保護とは無関係" },
      ],
      tip: "「更新前に確認」→ 変更セット、「削除時に残す」→ DeletionPolicy"
    },
    {
      id: "c08-mc-15", answer: ["B","C"], selectCount: 2, domain: 2, src: 5507,
      stem: "ある会社は、決済 API を呼び出すバッチ処理で <b class=\"key\">ThrottlingException</b> が頻発している。<br>再試行を入れたところ、まれに<b class=\"key\">同じ決済が二重に実行される</b>問題も発生した<br>信頼性を高めるための最も適切な組み合わせはどれか（2つ選択）",
      choices: [
        "失敗したらすぐに無制限に再試行するループを実装する",
        "ジッター付きの指数バックオフで、上限回数を設けて再試行する",
        "決済リクエストに一意の冪等キーを付与し、同じキーの重複実行を検出して無視する",
        "バッチ処理を実行する EC2 のインスタンスタイプを大きくする",
        "再試行を完全にやめ、失敗した決済はすべて破棄する",
      ],
      choiceExplain: [
        { ok: false, text: "即時・無制限の再試行は負荷を増やし、スロットリングを悪化させる" },
        { ok: true, text: "待ち時間を倍増＋ランダム化して再試行を分散させる" },
        { ok: true, text: "<b class=\"key\">冪等性</b>により、再試行で重複しても結果は1回分になる" },
        { ok: false, text: "スロットリングは呼び出し先の制限で、呼び出し元の性能は関係ない" },
        { ok: false, text: "一時的なエラーで処理を失い、信頼性が下がる" },
      ],
      tip: "「スロットリング」→ 指数バックオフ、「二重実行」→ 冪等性。セットで覚える"
    },
    {
      id: "c08-mc-16", answer: ["B"], selectCount: 1, domain: 2, src: 5523,
      stem: "ある会社は重要なアプリについて、目標 <b class=\"key\">RTO 1時間・RPO 15分</b>を経営層と合意した。<br>現構成がこの目標を達成できるかを<b class=\"key\">継続的に評価</b>し、改善の推奨事項と、検証用の障害注入実験の提案を受けたい<br>最も運用負荷の少ない方法はどれか",
      choices: [
        "AWS Trusted Advisor の耐障害性チェックを定期的に確認する",
        "AWS Resilience Hub でレジリエンシーポリシーを定義し、アプリを評価する",
        "AWS Health Dashboard を確認する",
        "Well-Architected Tool で年1回レビューする",
      ],
      choiceExplain: [
        { ok: false, text: "個別リソースのベストプラクティスチェックで、アプリ全体の RTO/RPO 達成評価はしない" },
        { ok: true, text: "RTO/RPO 目標に対する評価・推奨・FIS 実験の提案まで一元的に行う" },
        { ok: false, text: "AWS 側の障害・メンテナンス情報の確認用" },
        { ok: false, text: "設計レビューの質問票。継続的・自動的な RTO/RPO 評価ではない" },
      ],
      tip: "「RTO/RPO 目標の達成を評価」→ <b class=\"key\">Resilience Hub</b>、「障害を注入」→ <b class=\"key\">FIS</b>"
    },
  ]
});
window.DATA.chapters.push({
  no: 9,
  title: "コスト最適化",
  domainNote: "ドメイン4：コスト最適化アーキテクチャ",
  src: [5538,6226],
  lessons: [
    { id: "c09-l01", title: "購入オプション（オンデマンド・RI・Savings Plans・スポット・専有ホスト）", pages: [
      {
        id: "c09-l01-p01",
        title: "コスト最適化の原則（Well-Architected コスト最適化の柱） ①",
        html: "<ul><li><b class=\"key\">従量課金（Pay-as-you-go）</b>：使った分だけ払う。先行投資（CapEx）→ 変動費（OpEx）へ<ul><li>「ピークに合わせて買い置く」オンプレの発想を捨てるのが出発点</li></ul></li><li><b class=\"key\">適正サイズ化（Right Sizing）</b>：実際の使用率に合わせてインスタンスタイプ・サイズを選ぶ<ul><li>CPU使用率が常時<b class=\"key\">10〜20%</b>しかない大型インスタンス → 小さいサイズへ</li><li>判断材料は <b class=\"key\">CloudWatch メトリクス</b> と <b class=\"key\">AWS Compute Optimizer</b> の推奨</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>適正サイズ化は<b class=\"key\">RI購入の前</b>に行う（大きすぎる構成を3年固定しない）</span></li></ul></li></ul>",
        oxIds: [],
        src: [5543,5548]
      },
      {
        id: "c09-l01-p02",
        title: "コスト最適化の原則（Well-Architected コスト最適化の柱） ②",
        html: "<ul><li><b class=\"key\">伸縮性（Elasticity）</b>：需要に合わせて増減し、使わない時間は止める<ul><li><b class=\"key\">EC2 Auto Scaling</b>（ターゲット追跡・スケジュール・予測スケーリング）</li><li>開発/検証環境は<b class=\"key\">夜間・週末に停止</b>（Instance Scheduler on AWS、EventBridge Scheduler＋Lambda）</li></ul></li></ul>",
        oxIds: [],
        src: [5549,5551]
      },
      {
        id: "c09-l01-p03",
        title: "コスト最適化の原則（Well-Architected コスト最適化の柱） ③",
        html: "<ul><li><b class=\"key\">マネージド化／サーバーレス化</b>：運用人件費も含めた<b class=\"key\">TCO</b>を下げる<ul><li>EC2上の自前DB → Amazon RDS / Aurora、自前キュー → Amazon SQS</li><li>常時稼働不要な処理 → AWS Lambda / AWS Fargate（アイドル時の課金なし or 最小化）</li></ul></li><li><b class=\"key\">需要と供給の一致</b>：キュー（SQS）で平準化 → 少ない台数で処理できる</li><li><b class=\"key\">費用の可視化と責任</b>：タグでチーム別に配賦（ショーバック/チャージバック）</li><li>判断の順番（試験の思考フロー）<ul><li>①不要なものを消す → ②適正サイズ → ③伸縮させる → ④購入オプション（RI/SP/Spot）</li></ul></li></ul>",
        oxIds: [],
        src: [5552,5558]
      },
      {
        id: "c09-l01-p04",
        title: "オンデマンドインスタンス・リザーブドインスタンス（RI） ①",
        html: "<h4>オンデマンドインスタンス</h4><ul><li><b class=\"key\">秒単位課金</b>（Linux等。最低60秒）。長期契約なし、いつでも起動・停止</li><li>最も高単価だが<b class=\"key\">柔軟性が最大</b></li><li>使いどころ<ul><li><b class=\"key\">短期・予測不能</b>なワークロード、<b class=\"key\">中断できない</b>一時的処理</li><li>新規アプリで使用量がまだ読めない期間（後でRI/SPに切替）</li></ul></li></ul>",
        oxIds: [],
        src: [5561,5565]
      },
      {
        id: "c09-l01-p05",
        title: "オンデマンドインスタンス・リザーブドインスタンス（RI） ②",
        html: "<ul><li><b class=\"key\">オンデマンドキャパシティ予約（ODCR）</b><ul><li>特定AZで<b class=\"key\">容量だけを確保</b>。期間の縛りなし、いつでもキャンセル可</li><li>料金はオンデマンド価格（使わなくても課金）。<b class=\"key\">割引はなし</b></li><li>リージョナルRIやSavings Plansと<b class=\"key\">組み合わせると割引が適用</b>される</li><li>使いどころ：「イベント当日に確実に起動したい」など<b class=\"key\">容量保証が必須</b>の場面</li></ul></li></ul>",
        oxIds: [],
        src: [5566,5570]
      },
      {
        id: "c09-l01-p06",
        title: "オンデマンドインスタンス・リザーブドインスタンス（RI） ③",
        html: "<h4>リザーブドインスタンス（RI）</h4><ul><li><b class=\"key\">1年 または 3年</b>の利用を約束して割引を受ける<b class=\"key\">請求上の割引</b>（インスタンス自体ではない）</li><li>支払オプション（割引率：全額前払い ＞ 一部前払い ＞ 前払いなし）<ul><li><b class=\"key\">全額前払い（All Upfront）</b>：割引率が最大</li><li><b class=\"key\">一部前払い（Partial Upfront）</b>：前払い＋残りを時間単位で</li><li><b class=\"key\">前払いなし（No Upfront）</b>：月払い。割引率は最小</li><li>期間も <b class=\"key\">3年 ＞ 1年</b> の順に割引が大きい</li></ul></li></ul>",
        oxIds: ["c09-ox-06"],
        src: [5573,5578]
      },
      {
        id: "c09-l01-p07",
        title: "オンデマンドインスタンス・リザーブドインスタンス（RI） ④",
        html: "<ul><li>種類<ul><li><b class=\"key\">スタンダードRI</b>：割引率が最大（オンデマンド比<b class=\"key\">最大72%</b>）<ul><li>変更可：AZ、スコープ、<b class=\"key\">同一ファミリー内のサイズ</b>（Linux）、ネットワークタイプ</li><li>インスタンスファミリーやOSの<b class=\"key\">変更は不可</b></li><li><b class=\"key\">RI Marketplaceで売却可能</b>（不要になったら第三者へ売れる）</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [5579,5583]
      },
      {
        id: "c09-l01-p08",
        title: "オンデマンドインスタンス・リザーブドインスタンス（RI） ⑤",
        html: "<ul><li><b class=\"key\">コンバーティブルRI</b>：割引率はスタンダードより低い<ul><li><b class=\"key\">別ファミリー・OS・テナンシーへ交換（Exchange）可能</b>（同等以上の価値へ）<ul><li>RI Marketplace で<b class=\"key\">売却不可</b></li></ul></li><li><span class=\"badge b-cmp\">比較</span>「途中でインスタンスファミリーを変える可能性」→ コンバーティブル</li></ul></li></ul>",
        oxIds: ["c09-ox-01","c09-ox-02"],
        src: [5584,5587]
      },
      {
        id: "c09-l01-p09",
        title: "オンデマンドインスタンス・リザーブドインスタンス（RI） ⑥",
        html: "<ul><li>スコープ<ul><li><b class=\"key\">リージョナルRI</b>：リージョン内の全AZに適用、<b class=\"key\">サイズ柔軟性</b>あり。<b class=\"key\">容量予約なし</b></li><li><b class=\"key\">ゾーナルRI</b>：特定AZに限定、<b class=\"key\">容量予約あり</b>。サイズ柔軟性なし</li></ul></li></ul>",
        oxIds: [],
        src: [5588,5590]
      },
      {
        id: "c09-l01-p10",
        title: "オンデマンドインスタンス・リザーブドインスタンス（RI） ⑦",
        html: "<ul><li>他サービスにも予約購入あり：<b class=\"key\">RDS / Aurora、ElastiCache、OpenSearch Service、Redshift、DynamoDB（予約キャパシティ）</b></li><li>使いどころ：<b class=\"key\">24時間365日の定常稼働</b>（本番Webのベース台数、本番DB）</li></ul>",
        oxIds: [],
        src: [5591,5592]
      },
      {
        id: "c09-l01-p11",
        title: "Savings Plans（SP） ①",
        html: "<ul><li><b class=\"key\">1年 または 3年</b>、<b class=\"key\">1時間あたりの利用金額（$/時）を約束</b>して割引<ul><li>約束額を超えた分はオンデマンド料金</li><li>支払オプションはRIと同じ3種類（全額・一部・前払いなし）</li></ul></li><li><b class=\"key\">Compute Savings Plans</b>（柔軟性最大、オンデマンド比<b class=\"key\">最大66%</b>）<ul><li><b class=\"key\">ファミリー・サイズ・AZ・リージョン・OS・テナンシーを問わず</b>自動適用</li><li><b class=\"key\">AWS Fargate と AWS Lambda にも適用</b>される</li><li>使いどころ：EC2 → Fargate/Lambda へ移行予定、リージョン変更の可能性あり</li></ul></li></ul>",
        oxIds: ["c09-ox-03","c09-ox-04","c09-ox-05"],
        src: [5595,5601]
      },
      {
        id: "c09-l01-p12",
        title: "Savings Plans（SP） ②",
        html: "<ul><li><b class=\"key\">EC2 Instance Savings Plans</b>（割引最大、オンデマンド比<b class=\"key\">最大72%</b>）<ul><li><b class=\"key\">特定リージョンの特定ファミリー</b>（例：東京の M7g）に約束</li><li>そのファミリー内なら<b class=\"key\">サイズ・OS・テナンシー・AZは変更自由</b></li></ul></li><li><b class=\"key\">SageMaker AI Savings Plans</b>：SageMaker の利用に適用</li></ul>",
        oxIds: [],
        src: [5602,5605]
      },
      {
        id: "c09-l01-p13",
        title: "Savings Plans（SP） ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>RI vs Savings Plans<ul><li>SP は<b class=\"key\">交換作業が不要</b>で自動適用 → 運用負荷が小さい（AWSも新規はSPを推奨）</li><li>SP は<b class=\"key\">容量予約を含まない</b> → 容量保証が必要なら ODCR / ゾーナルRI を併用</li><li>RDS・ElastiCache・Redshift の割引は試験では<b class=\"key\">各サービスのRI（予約）</b>が定番<ul><li>2025年12月に <b class=\"key\">Database Savings Plans</b> も登場（新しい選択肢として知っておく程度）</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [5606,5610]
      },
      {
        id: "c09-l01-p14",
        title: "スポットインスタンス ①",
        html: "<ul><li>AWSの<b class=\"key\">余剰容量</b>を<b class=\"key\">オンデマンド比最大90%割引</b>で利用</li><li>AWSが容量を必要とすると<b class=\"key\">中断</b>される<ul><li><b class=\"key\">2分前の中断通知</b>（インスタンスメタデータ / EventBridge）</li><li><b class=\"key\">リバランス推奨</b>シグナル：中断リスク上昇を事前に通知 → 先回りで置換</li><li>中断時の動作：<b class=\"key\">終了（デフォルト）/ 停止 / 休止</b></li></ul></li></ul>",
        oxIds: [],
        src: [5613,5617]
      },
      {
        id: "c09-l01-p15",
        title: "スポットインスタンス ②",
        html: "<ul><li>向いている処理：<b class=\"key\">中断に耐えられる・ステートレス・柔軟な開始時刻</b><ul><li>バッチ処理、ビッグデータ分析（EMR タスクノード）、CI/CD、画像/動画変換、HPC、テスト環境</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>本番DB、中断不可の長時間ジョブ、<b class=\"key\">「中断できない」</b>と書かれた処理には不可</span></li></ul></li></ul>",
        oxIds: [],
        src: [5618,5620]
      },
      {
        id: "c09-l01-p16",
        title: "スポットインスタンス ③",
        html: "<ul><li><b class=\"key\">スポットフリート / EC2 フリート</b><ul><li>複数のインスタンスタイプ・AZを組み合わせて<b class=\"key\">目標容量</b>を維持</li><li>オンデマンドとスポットの<b class=\"key\">混在</b>も可能</li><li>配分戦略：<b class=\"key\">price-capacity-optimized（推奨）</b>、capacity-optimized、lowest-price<ul><li>中断を減らしたい → <b class=\"key\">容量最適化系</b>を選ぶ</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [5621,5625]
      },
      {
        id: "c09-l01-p17",
        title: "スポットインスタンス ④",
        html: "<ul><li><b class=\"key\">Auto Scaling グループの混合インスタンスポリシー</b><ul><li>例：ベース容量はオンデマンド（RI/SP適用）＋超過分をスポットで</li></ul></li><li>スポットブロック（期間指定スポット）は<b class=\"key\">提供終了</b>（古い選択肢として出たら×）</li></ul>",
        oxIds: [],
        src: [5626,5628]
      },
      {
        id: "c09-l01-p18",
        title: "専有ホスト・専有インスタンスと AWS Graviton ①",
        html: "<h4>専有ホスト（Dedicated Hosts）と専有インスタンス</h4><ul><li><b class=\"key\">Dedicated Hosts</b>：物理サーバー1台を丸ごと専有<ul><li><b class=\"key\">ソケット・コア・VM単位のライセンス</b>を持ち込める（<b class=\"key\">BYOL</b>）<ul><li>例：Windows Server、SQL Server、Oracle などの既存ライセンス</li></ul></li><li>ホストの<b class=\"key\">ソケット/コア数が見える</b>、インスタンスの配置をホスト単位で制御</li><li><b class=\"key\">AWS License Manager</b> でライセンス数を追跡・上限管理</li><li>ホスト予約（1年/3年）で割引可能</li></ul></li></ul>",
        oxIds: ["c09-ox-08"],
        src: [5631,5636]
      },
      {
        id: "c09-l01-p19",
        title: "専有ホスト・専有インスタンスと AWS Graviton ②",
        html: "<ul><li><b class=\"key\">Dedicated Instances</b>：ハードウェアは専有だが、<b class=\"key\">物理ホストは見えない</b><ul><li>コンプライアンスで「他顧客とハードウェア共有不可」だが、BYOL不要の場合</li></ul></li><li><span class=\"badge b-cmp\">比較</span>「既存のソケット単位ライセンスを再利用してコスト削減」→ <b class=\"key\">Dedicated Hosts</b></li><li>料金が最も高い選択肢 → 要件にBYOL・規制がない限り選ばない</li></ul><h4>AWS Graviton への移行</h4><ul><li>AWS独自設計の <b class=\"key\">Arm ベースプロセッサ</b>（インスタンス名に <b class=\"key\">g</b>：m7g、c7g、r8g など）</li><li>同等の x86 インスタンス比で<b class=\"key\">最大40%優れた価格性能</b>（Graviton2時点のAWS公表値）</li></ul>",
        oxIds: [],
        src: [5637,5644]
      },
      {
        id: "c09-l01-p20",
        title: "専有ホスト・専有インスタンスと AWS Graviton ③",
        html: "<ul><li>移行が簡単なケース<ul><li><b class=\"key\">マネージドサービス</b>：RDS、Aurora、ElastiCache、OpenSearch → インスタンスクラス変更のみ</li><li><b class=\"key\">Lambda</b>：アーキテクチャを <b class=\"key\">arm64</b> に変更（GB秒単価が x86 より安い）</li><li><b class=\"key\">Fargate</b>：ARM64 のコンテナイメージを用意</li><li>インタプリタ言語（Python、Node.js、Java）は<b class=\"key\">ほぼそのまま</b>動く</li></ul></li><li>注意：x86専用のバイナリ・商用ソフトは再コンパイルや対応確認が必要</li><li><span class=\"badge b-freq\">頻出</span>「アプリ変更を最小にして価格性能を改善」→ <b class=\"key\">Graviton ベースへの変更</b></li></ul>",
        oxIds: [],
        src: [5645,5651]
      },
    ] },
    { id: "c09-l02", title: "サーバーレス・ストレージ・データベースのコスト", pages: [
      {
        id: "c09-l02-p01",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ①",
        html: "<h4>Lambda・Fargate・EC2 のコスト比較</h4><ul><li><b class=\"key\">AWS Lambda</b><ul><li>課金：<b class=\"key\">リクエスト数＋実行時間（GB秒、1ms単位）</b></li><li>無料利用枠：<b class=\"key\">月100万リクエスト＋40万GB秒</b></li><li>アイドル時は<b class=\"key\">0円</b> → <b class=\"key\">断続的・イベント駆動</b>の処理に最適</li><li>最大実行時間<b class=\"key\">15分</b>。常時高負荷だと EC2 より割高になることがある</li></ul></li></ul>",
        oxIds: [],
        src: [5654,5658]
      },
      {
        id: "c09-l02-p02",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ②",
        html: "<ul><li><b class=\"key\">AWS Fargate</b><ul><li>課金：タスクの <b class=\"key\">vCPU・メモリ × 秒</b>（最低1分）</li><li>サーバー管理不要。<b class=\"key\">Fargate Spot</b>（最大70%割引）で中断可能タスクを安く</li></ul></li><li><b class=\"key\">Amazon EC2</b><ul><li>常時一定負荷なら<b class=\"key\">RI/SP適用のEC2が最安</b>になりやすい</li><li>ただしOS管理・パッチ等の<b class=\"key\">運用コスト</b>が乗る</li></ul></li></ul>",
        oxIds: [],
        src: [5659,5664]
      },
      {
        id: "c09-l02-p03",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ③",
        html: "<ul><li>判断のコツ<ul><li>「数分のジョブが1日数回」→ <b class=\"key\">Lambda</b></li><li>「15分超・コンテナ・サーバー管理したくない」→ <b class=\"key\">Fargate（＋Fargate Spot）</b></li><li>「24時間一定負荷・最安」→ <b class=\"key\">EC2＋RI/Savings Plans</b></li></ul></li></ul><h4>Amazon S3 ストレージクラスと選択フロー</h4><ul><li>各クラスの特徴（耐久性はすべて<b class=\"key\">イレブンナイン 99.999999999%</b>）<ul><li><b class=\"key\">S3 Standard</b>：頻繁アクセス。取り出し料金なし、最低保存期間なし</li></ul></li></ul>",
        oxIds: [],
        src: [5665,5672]
      },
      {
        id: "c09-l02-p04",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ④",
        html: "<ul><li><b class=\"key\">S3 Intelligent-Tiering</b>：アクセスパターンが<b class=\"key\">不明・変化する</b>データ<ul><li>アクセス頻度を監視し<b class=\"key\">自動で階層移動</b>。<b class=\"key\">取り出し料金なし</b><ul><li><b class=\"key\">オブジェクトごとの監視・自動化料金</b>がかかる</li></ul></li></ul></li></ul>",
        oxIds: ["c09-ox-09"],
        src: [5673,5675]
      },
      {
        id: "c09-l02-p05",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ⑤",
        html: "<ul><li><b class=\"key\">128KB未満</b>のオブジェクトは監視対象外（常に高頻度階層の料金、監視料もなし）<ul><li>自動階層：高頻度 → <b class=\"key\">30日</b>アクセスなしで低頻度 → <b class=\"key\">90日</b>でアーカイブインスタント<ul><li>オプション（要有効化）：アーカイブアクセス（90日〜）、ディープアーカイブアクセス（180日〜）</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [5676,5678]
      },
      {
        id: "c09-l02-p06",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ⑥",
        html: "<ul><li><b class=\"key\">S3 Standard-IA</b>：低頻度だが<b class=\"key\">即時（ミリ秒）</b>に必要。<b class=\"key\">複数AZ</b><ul><li><b class=\"key\">最低保存期間30日</b>、<b class=\"key\">最小課金サイズ128KB</b>、<b class=\"key\">取り出し料金（GB単位）</b>あり</li></ul></li></ul>",
        oxIds: [],
        src: [5679,5680]
      },
      {
        id: "c09-l02-p07",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ⑦",
        html: "<ul><li><b class=\"key\">S3 One Zone-IA</b>：Standard-IA より約20%安いが<b class=\"key\">単一AZ</b><ul><li><b class=\"key\">再作成可能なデータ</b>（サムネイル、別リージョンのレプリカ等）向け</li><li><b class=\"key\">S3 Glacier Instant Retrieval</b>：四半期に1回程度のアクセス、<b class=\"key\">ミリ秒</b>で取り出し<ul><li><b class=\"key\">最低保存期間90日</b></li></ul></li></ul></li></ul>",
        oxIds: ["c09-ox-28"],
        src: [5681,5684]
      },
      {
        id: "c09-l02-p08",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ⑧",
        html: "<ul><li><b class=\"key\">S3 Glacier Flexible Retrieval</b>：数分〜数時間で取り出せればよいアーカイブ<ul><li><b class=\"key\">最低保存期間90日</b><ul><li>迅速：<b class=\"key\">1〜5分</b> / 標準：<b class=\"key\">3〜5時間</b> / 大容量（Bulk）：<b class=\"key\">5〜12時間（取り出し無料）</b></li></ul></li></ul></li></ul>",
        oxIds: ["c09-ox-12"],
        src: [5685,5687]
      },
      {
        id: "c09-l02-p09",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ⑨",
        html: "<ul><li><b class=\"key\">S3 Glacier Deep Archive</b>：<b class=\"key\">最安</b>。年1〜2回以下、法定長期保管<ul><li><b class=\"key\">最低保存期間180日</b><ul><li>標準：<b class=\"key\">12時間以内</b> / 大容量：<b class=\"key\">48時間以内</b></li></ul></li><li><b class=\"key\">S3 Express One Zone</b>：単一AZ・1桁ミリ秒の超低レイテンシ（コスト削減より性能目的）</li></ul></li></ul>",
        oxIds: [],
        src: [5688,5691]
      },
      {
        id: "c09-l02-p10",
        title: "Lambda・Fargate・EC2 のコスト比較とS3ストレージクラス ⑩",
        html: "<ul><li>選択フロー（試験の解き方）<ul><li>アクセスパターンが<b class=\"key\">予測できない</b> → <b class=\"key\">Intelligent-Tiering</b></li><li>予測できる → アクセス頻度と取り出し時間で選ぶ<ul><li>頻繁 → Standard</li><li>月1回程度・即時 → Standard-IA（再作成可能なら One Zone-IA）</li><li>四半期1回・即時 → Glacier Instant Retrieval</li><li>数時間待てる → Glacier Flexible Retrieval</li><li>12〜48時間待てる・最安 → Glacier Deep Archive</li></ul></li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>最低保存期間前に削除・移動すると<b class=\"key\">残り日数分も課金</b>（早期削除料金）</span></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>小さいオブジェクトが大量 → IA系は128KB課金で<b class=\"key\">逆に高くなる</b>ことがある</span></li></ul>",
        oxIds: ["c09-ox-10"],
        src: [5692,5701]
      },
      {
        id: "c09-l02-p11",
        title: "S3 ライフサイクルとその他のS3コスト機能 ①",
        html: "<ul><li><b class=\"key\">ライフサイクルルール</b>：経過日数でクラス移行（Transition）・削除（Expiration）を自動化<ul><li>例：30日後 Standard-IA → 90日後 Glacier Flexible Retrieval → 365日後に削除</li><li>Standard → Standard-IA / One Zone-IA への移行は<b class=\"key\">作成後30日以上</b>経過が条件</li><li><b class=\"key\">バージョニング</b>有効時：<b class=\"key\">非現行バージョン</b>の移行・削除ルールを忘れない</li><li><b class=\"key\">未完了のマルチパートアップロード</b>の削除ルールで無駄な課金を防ぐ</li></ul></li><li><b class=\"key\">S3 ストレージクラス分析</b>：アクセスパターンを分析し、IAへの移行時期を推奨</li></ul>",
        oxIds: [],
        src: [5704,5709]
      },
      {
        id: "c09-l02-p12",
        title: "S3 ライフサイクルとその他のS3コスト機能 ②",
        html: "<ul><li><b class=\"key\">S3 Storage Lens</b>：組織全体のストレージ使用量・コスト効率をダッシュボード化</li><li><b class=\"key\">リクエスタ支払い（Requester Pays）</b>：データ転送・リクエスト料金を<b class=\"key\">取得側</b>に負担させる</li><li><span class=\"badge b-cmp\">比較</span>ライフサイクル vs Intelligent-Tiering<ul><li>パターンが<b class=\"key\">決まっている</b> → ライフサイクル（監視料がかからない）</li><li>パターンが<b class=\"key\">不明</b> → Intelligent-Tiering</li></ul></li></ul>",
        oxIds: [],
        src: [5710,5714]
      },
      {
        id: "c09-l02-p13",
        title: "Amazon EBS のコスト ①",
        html: "<ul><li><b class=\"key\">gp2 → gp3 への移行</b>（頻出）<ul><li>gp3 は gp2 より<b class=\"key\">GB単価が約20%安い</b></li><li>gp3：容量に関係なく<b class=\"key\">ベースライン3,000 IOPS・125 MiB/s</b>、IOPS・スループットを<b class=\"key\">個別に追加購入</b></li><li>gp2：<b class=\"key\">容量に比例（3 IOPS/GB）</b>、バーストクレジット方式<ul><li>IOPS欲しさに容量を過剰に確保している gp2 は gp3 で大きく削減できる</li></ul></li></ul></li></ul>",
        oxIds: ["c09-ox-13"],
        src: [5717,5721]
      },
      {
        id: "c09-l02-p14",
        title: "Amazon EBS のコスト ②",
        html: "<ul><li><b class=\"key\">Elastic Volumes</b> で<b class=\"key\">ダウンタイムなし</b>に変更可能</li><li>HDD系：<b class=\"key\">st1</b>（スループット最適化、ログ・ビッグデータ）、<b class=\"key\">sc1</b>（Cold、最安）<ul><li>HDDは<b class=\"key\">ブートボリューム不可</b></li></ul></li><li><b class=\"key\">io2 / io1</b>：高IOPSが必要なDB向け。高価なので過剰なプロビジョンに注意</li></ul>",
        oxIds: ["c09-ox-14"],
        src: [5722,5725]
      },
      {
        id: "c09-l02-p15",
        title: "Amazon EBS のコスト ③",
        html: "<ul><li>未使用リソースの削除<ul><li><b class=\"key\">未アタッチ（available 状態）の EBS ボリューム</b>は課金され続ける<ul><li>インスタンス終了時に削除されない設定（DeleteOnTermination=false）のものに注意</li></ul></li><li>古い<b class=\"key\">スナップショット</b>の削除</li><li><b class=\"key\">Amazon Data Lifecycle Manager（DLM）</b>：スナップショット作成・保持・削除を自動化</li></ul></li></ul>",
        oxIds: ["c09-ox-15"],
        src: [5726,5730]
      },
      {
        id: "c09-l02-p16",
        title: "Amazon EBS のコスト ④",
        html: "<ul><li><b class=\"key\">EBS スナップショットアーカイブ</b>：長期保持用に最大75%安い階層<ul><li><b class=\"key\">最低90日</b>保持、復元に<b class=\"key\">最大24〜72時間</b></li><li><b class=\"key\">ごみ箱（Recycle Bin）</b>：誤削除からの復旧（保持期間中も課金）</li></ul></li><li>停止中のEC2：インスタンス料金は止まるが <b class=\"key\">EBS料金は継続</b></li></ul>",
        oxIds: [],
        src: [5731,5734]
      },
      {
        id: "c09-l02-p17",
        title: "Amazon EFS / FSx とデータベースのコスト ①",
        html: "<h4>Amazon EFS / FSx のコスト</h4><ul><li>EFS ストレージクラス<ul><li><b class=\"key\">Standard</b>：頻繁アクセス（複数AZ）</li><li><b class=\"key\">Infrequent Access（IA）</b>：低頻度向け、GB単価が安い代わりにアクセス料金あり</li><li><b class=\"key\">Archive</b>：年数回以下のアクセス向け、さらに安い</li></ul></li><li><b class=\"key\">EFS ライフサイクル管理</b>：N日アクセスがなければ IA / Archive へ自動移動<ul><li>再アクセス時に Standard へ戻す設定も可能</li></ul></li><li><b class=\"key\">One Zone</b> ストレージクラス：単一AZに保存し Standard より安い（可用性要件が低い場合）</li><li>スループットモード：<b class=\"key\">Elastic</b>（使った分だけ、変動が大きい場合）／プロビジョンド／バースト</li><li>FSx：用途で選ぶ（Windows→FSx for Windows File Server、HPC→FSx for Lustre）<ul><li>FSx for Windows/ONTAP はデータ重複排除・圧縮でコスト削減</li></ul></li></ul>",
        oxIds: [],
        src: [5737,5746]
      },
      {
        id: "c09-l02-p18",
        title: "Amazon EFS / FSx とデータベースのコスト ②",
        html: "<h4>データベースのコスト</h4><ul><li><b class=\"key\">Amazon Aurora Serverless v2</b><ul><li><b class=\"key\">ACU（Aurora Capacity Unit）</b>単位で負荷に応じて自動スケール、秒単位課金</li><li><b class=\"key\">最小0 ACU（自動一時停止）</b>に対応 → アイドル時はコンピュート課金なし</li><li>使いどころ：<b class=\"key\">断続的・予測不能</b>な負荷、開発/テスト、マルチテナントSaaS</li><li>常時高負荷ならプロビジョンド＋予約インスタンスの方が安いことが多い</li></ul></li></ul>",
        oxIds: [],
        src: [5749,5753]
      },
      {
        id: "c09-l02-p19",
        title: "Amazon EFS / FSx とデータベースのコスト ③",
        html: "<ul><li><b class=\"key\">Amazon DynamoDB</b><ul><li><b class=\"key\">オンデマンドモード</b>：リクエスト単位課金、キャパシティ計画不要<ul><li><b class=\"key\">新規アプリ・予測不能・スパイク・アイドル期間が長い</b>ワークロード</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [5754,5756]
      },
      {
        id: "c09-l02-p20",
        title: "Amazon EFS / FSx とデータベースのコスト ④",
        html: "<ul><li><b class=\"key\">プロビジョンドモード</b>：RCU/WCU を指定<ul><li><b class=\"key\">予測可能・安定</b>したトラフィックで安い。<b class=\"key\">Auto Scaling</b> で上下に追従<ul><li><b class=\"key\">リザーブドキャパシティ</b>（1年/3年）でさらに割引</li></ul></li><li><b class=\"key\">Standard-IA テーブルクラス</b>：保存容量が主なコストのテーブル向け（ストレージ単価が安い）</li></ul></li></ul>",
        oxIds: ["c09-ox-27"],
        src: [5757,5760]
      },
      {
        id: "c09-l02-p21",
        title: "Amazon EFS / FSx とデータベースのコスト ⑤",
        html: "<ul><li><b class=\"key\">TTL</b> で期限切れ項目を<b class=\"key\">無料で自動削除</b> → ストレージ削減</li><li><b class=\"key\">Amazon RDS</b><ul><li><b class=\"key\">リザーブドDBインスタンス</b>（1年/3年）：本番DBの定常稼働に<ul><li>一部エンジンは<b class=\"key\">サイズ柔軟性</b>あり（同一ファミリー内で適用）</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [5761,5764]
      },
      {
        id: "c09-l02-p22",
        title: "Amazon EFS / FSx とデータベースのコスト ⑥",
        html: "<ul><li>開発用DBは<b class=\"key\">停止</b>（最大<b class=\"key\">7日</b>で自動起動する点に注意）<ul><li>長期不要ならスナップショットを取って削除</li><li>読み取り負荷 → インスタンス拡大より<b class=\"key\">リードレプリカ</b>や <b class=\"key\">ElastiCache</b> で安く</li><li>Multi-AZ は約2倍のコスト → 開発環境では不要</li></ul></li></ul>",
        oxIds: [],
        src: [5765,5768]
      },
      {
        id: "c09-l02-p23",
        title: "Amazon EFS / FSx とデータベースのコスト ⑦",
        html: "<ul><li><b class=\"key\">Amazon Redshift</b><ul><li><b class=\"key\">リザーブドノード</b>（1年/3年）：常時稼働のDWH</li><li><b class=\"key\">Redshift Serverless</b>：RPU秒課金、断続的な分析向け</li><li>プロビジョンドクラスターの<b class=\"key\">一時停止/再開</b>でアイドル時のコンピュート課金を止める</li><li><b class=\"key\">Redshift Spectrum</b>：S3上のデータを直接クエリ → ホットデータのみクラスターに</li></ul></li></ul>",
        oxIds: [],
        src: [5769,5773]
      },
      {
        id: "c09-l02-p24",
        title: "Amazon EFS / FSx とデータベースのコスト ⑧",
        html: "<ul><li><span class=\"badge b-freq\">頻出</span>S3上のデータにたまにSQL → <b class=\"key\">Amazon Athena</b>（スキャン量課金。<b class=\"key\">Parquet＋圧縮＋パーティション</b>で削減）</li></ul>",
        oxIds: [],
        src: [5774,5774]
      },
    ] },
    { id: "c09-l03", title: "データ転送・ネットワークとコスト管理ツール", pages: [
      {
        id: "c09-l03-p01",
        title: "データ転送料金 ①",
        html: "<ul><li>基本ルール<ul><li><b class=\"key\">インバウンド（インターネット → AWS）は無料</b></li><li><b class=\"key\">アウトバウンド（AWS → インターネット）は有料</b>（GB単価、量が多いほど単価逓減）</li><li><b class=\"key\">同一AZ内</b>でプライベートIP同士の通信：<b class=\"key\">無料</b></li><li><b class=\"key\">AZ間</b>の通信：<b class=\"key\">有料</b>（送信側・受信側の双方向で課金）</li></ul></li></ul>",
        oxIds: ["c09-ox-16","c09-ox-17"],
        src: [5777,5781]
      },
      {
        id: "c09-l03-p02",
        title: "データ転送料金 ②",
        html: "<ul><li><b class=\"key\">リージョン間</b>の通信：<b class=\"key\">有料</b>（AZ間より高い）<ul><li>同一リージョンの S3 → EC2：<b class=\"key\">無料</b></li><li>AWSオリジン（S3/EC2/ELB）→ <b class=\"key\">CloudFront</b>：<b class=\"key\">無料</b></li></ul></li></ul>",
        oxIds: ["c09-ox-20"],
        src: [5782,5784]
      },
      {
        id: "c09-l03-p03",
        title: "データ転送料金 ③",
        html: "<ul><li>削減テクニック<ul><li>同一AZ内の通信は<b class=\"key\">パブリックIP/Elastic IPではなくプライベートIP</b>を使う</li><li>チャットの多いサーバー間（例：バッチとDB）は<b class=\"key\">同一AZ</b>に配置（可用性とのトレードオフ）</li><li><b class=\"key\">CloudFront</b> を前段に置く：エッジでキャッシュ → オリジンの転送量・負荷を削減<ul><li>CloudFront → インターネットの転送単価は EC2/S3 直接より一般に安い</li></ul></li><li>大量の定常的なオンプレ転送 → <b class=\"key\">AWS Direct Connect</b>（アウト転送単価が安く、帯域が安定）</li><li>リージョン間レプリケーションは<b class=\"key\">本当に必要なデータだけ</b>に絞る</li></ul></li></ul>",
        oxIds: [],
        src: [5785,5791]
      },
      {
        id: "c09-l03-p04",
        title: "データ転送料金 ④",
        html: "<ul><li><b class=\"key\">NAT Gateway のコスト</b>（超頻出）<ul><li><b class=\"key\">時間料金＋処理データ量（GB）料金</b>がかかる</li><li>プライベートサブネットのEC2 → <b class=\"key\">S3 / DynamoDB</b> へ大量アクセスすると NAT 処理料金が膨らむ</li><li><b class=\"key\">VPC ゲートウェイエンドポイント（S3・DynamoDB）は無料</b> → NAT 経由をやめるだけで削減</li></ul></li></ul>",
        oxIds: ["c09-ox-18","c09-ox-19"],
        src: [5792,5795]
      },
      {
        id: "c09-l03-p05",
        title: "データ転送料金 ⑤",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>インターフェイスエンドポイント（PrivateLink）は<b class=\"key\">時間＋GB課金</b><ul><li>S3 は両方対応。コスト最優先・VPC内からのアクセスなら<b class=\"key\">ゲートウェイ型</b><ul><li>オンプレ（DX/VPN）から S3 へプライベート接続したい場合は<b class=\"key\">インターフェイス型</b></li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [5796,5798]
      },
      {
        id: "c09-l03-p06",
        title: "データ転送料金 ⑥",
        html: "<ul><li>NAT Gateway は <b class=\"key\">AZごと</b>に配置するのが可用性のベストプラクティス<ul><li>他AZの NAT を使うと<b class=\"key\">AZ間転送料</b>も発生</li><li>開発環境など低トラフィック → NAT Instance（自前）は安いが運用負荷が高い</li></ul></li><li><b class=\"key\">パブリック IPv4 アドレス</b>：2024年2月から<b class=\"key\">使用中も含め全パブリックIPv4に時間課金</b><ul><li>不要な Elastic IP の解放、IPv6 の活用で削減</li></ul></li></ul>",
        oxIds: [],
        src: [5799,5803]
      },
      {
        id: "c09-l03-p07",
        title: "ネットワーク構成のコスト ①",
        html: "<ul><li><b class=\"key\">VPC ピアリング</b><ul><li><b class=\"key\">時間料金なし</b>。データ転送料のみ（同一AZ内は無料、AZ間・リージョン間は有料）</li><li><b class=\"key\">推移的ルーティング不可</b> → VPC数が増えるとメッシュ状に接続数が爆発</li><li>少数VPCを低コストでつなぐなら最適</li></ul></li><li><b class=\"key\">AWS Transit Gateway</b><ul><li>ハブ＆スポークで多数のVPC・オンプレを集約</li><li><b class=\"key\">アタッチメントごとの時間料金＋処理データ量（GB）料金</b></li><li>多数VPC・オンプレ共有接続の<b class=\"key\">運用負荷を大幅に削減</b></li><li><span class=\"badge b-cmp\">比較</span>「2〜3個のVPCを最小コストで」→ ピアリング／「数十〜数百VPC、運用簡素化」→ TGW</li></ul></li></ul>",
        oxIds: ["c09-ox-21"],
        src: [5806,5814]
      },
      {
        id: "c09-l03-p08",
        title: "ネットワーク構成のコスト ②",
        html: "<ul><li><b class=\"key\">AWS PrivateLink（インターフェイスエンドポイント／エンドポイントサービス）</b><ul><li><b class=\"key\">エンドポイント×AZ ごとの時間料金＋GB料金</b></li><li>特定サービスだけを他VPC・他アカウントに公開（CIDR重複でもOK）</li><li>多数の AWS サービス用インターフェイスエンドポイントを全VPCに作ると高額<ul><li>→ <b class=\"key\">共有サービスVPC</b>に集約し、TGW や Route 53 Resolver で共有する設計もある</li></ul></li></ul></li><li><b class=\"key\">Site-to-Site VPN</b>：接続時間料金＋転送料。DXより安価に始められる</li><li><b class=\"key\">Direct Connect</b>：ポート時間料金＋<b class=\"key\">割安なアウト転送料</b>。大容量・定常転送でVPNより有利</li></ul>",
        oxIds: [],
        src: [5815,5821]
      },
      {
        id: "c09-l03-p09",
        title: "コスト管理ツール ①",
        html: "<ul><li><b class=\"key\">AWS Cost Explorer</b><ul><li>過去のコスト・使用量を<b class=\"key\">可視化・分析</b>（サービス別、アカウント別、タグ別）</li><li><b class=\"key\">将来コストの予測（フォーキャスト）</b></li><li><b class=\"key\">RI / Savings Plans の購入推奨</b>、使用率・カバレッジレポート</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>Cost Explorer は<b class=\"key\">見る・分析する</b>ツール。しきい値で通知するのは Budgets</span></li></ul></li></ul>",
        oxIds: ["c09-ox-22"],
        src: [5824,5828]
      },
      {
        id: "c09-l03-p10",
        title: "コスト管理ツール ②",
        html: "<ul><li><b class=\"key\">AWS Budgets</b><ul><li>コスト・使用量・<b class=\"key\">RI/SP の使用率・カバレッジ</b>に予算を設定</li><li>実績または<b class=\"key\">予測値</b>がしきい値を超えたら<b class=\"key\">メール / Amazon SNS</b>で通知</li></ul></li></ul>",
        oxIds: [],
        src: [5829,5831]
      },
      {
        id: "c09-l03-p11",
        title: "コスト管理ツール ③",
        html: "<ul><li><b class=\"key\">予算アクション（Budget Actions）</b>：しきい値超過時に自動で<ul><li><b class=\"key\">IAM ポリシー</b>をアタッチ（新規リソース作成を禁止等）<ul><li><b class=\"key\">SCP</b> を適用（Organizations）</li><li><b class=\"key\">EC2 / RDS インスタンスを停止</b></li><li>自動実行 or <b class=\"key\">承認ワークフロー</b>後に実行を選択可能</li></ul></li></ul></li></ul>",
        oxIds: [],
        src: [5832,5836]
      },
      {
        id: "c09-l03-p12",
        title: "コスト管理ツール ④",
        html: "<ul><li><b class=\"key\">AWS Cost and Usage Report（CUR）／ AWS Data Exports</b><ul><li><b class=\"key\">最も詳細な</b>コスト・使用量データ（時間単位、リソースID単位）</li><li><b class=\"key\">S3 に出力</b> → <b class=\"key\">Amazon Athena</b> でSQL分析、<b class=\"key\">Amazon QuickSight</b> で可視化</li><li><b class=\"key\">Data Exports（CUR 2.0）</b>：CUR の後継。列を選んでエクスポート、FOCUS形式にも対応</li><li><span class=\"badge b-freq\">頻出</span>「詳細な請求データを独自に分析・BIで可視化」→ CUR/Data Exports＋Athena＋QuickSight</li></ul></li></ul>",
        oxIds: [],
        src: [5837,5841]
      },
      {
        id: "c09-l03-p13",
        title: "コスト管理ツール ⑤",
        html: "<ul><li><b class=\"key\">コスト配分タグ（Cost Allocation Tags）</b><ul><li><b class=\"key\">ユーザー定義タグ</b>（例：CostCenter、Project）と <b class=\"key\">AWS生成タグ</b>（aws:createdBy 等）</li><li><b class=\"key\">Billing コンソールで有効化（アクティブ化）しないと</b>請求レポートに出ない<ul><li>有効化は<b class=\"key\">管理アカウント（支払いアカウント）</b>で行う</li><li>有効化<b class=\"key\">以降</b>のコストにのみ反映（過去には遡らない）</li></ul></li></ul></li></ul>",
        oxIds: ["c09-ox-23"],
        src: [5842,5846]
      },
      {
        id: "c09-l03-p14",
        title: "コスト管理ツール ⑥",
        html: "<ul><li>タグ付けの強制：<b class=\"key\">タグポリシー</b>（Organizations）、<b class=\"key\">SCP</b>／IAM の条件キー（aws:RequestTag）<ul><li><b class=\"key\">AWS Cost Categories</b>：タグやアカウントをルールでまとめて部門別に集計</li></ul></li></ul>",
        oxIds: [],
        src: [5847,5848]
      },
      {
        id: "c09-l03-p15",
        title: "コスト管理ツール（続き） ①",
        html: "<ul><li><b class=\"key\">AWS Cost Anomaly Detection</b><ul><li><b class=\"key\">機械学習</b>でコストの<b class=\"key\">異常な増加</b>を検出し、根本原因（サービス・アカウント・リージョン等）を提示</li><li>モニター（サービス別・アカウント別・タグ別など）＋アラートサブスクリプション（メール/SNS）</li><li><span class=\"badge b-cmp\">比較</span>Budgets＝<b class=\"key\">固定しきい値</b>／Anomaly Detection＝<b class=\"key\">通常パターンからの逸脱</b></li></ul></li></ul>",
        oxIds: ["c09-ox-26"],
        src: [5849,5852]
      },
      {
        id: "c09-l03-p16",
        title: "コスト管理ツール（続き） ②",
        html: "<ul><li><b class=\"key\">AWS Compute Optimizer</b><ul><li><b class=\"key\">機械学習</b>で使用率を分析し<b class=\"key\">適正サイズ</b>を推奨</li><li>対象：<b class=\"key\">EC2、Auto Scaling グループ、EBS、Lambda、ECS on Fargate、RDS/Aurora</b> 等</li><li><b class=\"key\">メモリ使用率</b>を考慮させるには <b class=\"key\">CloudWatch エージェント</b>の導入が必要</li><li>Graviton への移行推奨も表示</li></ul></li></ul>",
        oxIds: ["c09-ox-24"],
        src: [5853,5857]
      },
      {
        id: "c09-l03-p17",
        title: "コスト管理ツール（続き） ③",
        html: "<ul><li><b class=\"key\">AWS Trusted Advisor</b><ul><li>ベストプラクティスチェック（<b class=\"key\">コスト最適化</b>・セキュリティ・耐障害性・性能・サービス制限・運用上の優秀性）</li><li>コスト例：<b class=\"key\">低使用率のEC2</b>、<b class=\"key\">未関連付けのElastic IP</b>、<b class=\"key\">未使用/低使用率のEBS</b>、アイドルのロードバランサー/RDS</li><li><b class=\"key\">全チェックの利用は Business 以上のサポートプラン</b>が必要</li></ul></li></ul>",
        oxIds: [],
        src: [5858,5861]
      },
      {
        id: "c09-l03-p18",
        title: "コスト管理ツール（続き） ④",
        html: "<ul><li><b class=\"key\">AWS Cost Optimization Hub</b>：組織全体のコスト最適化推奨を一元表示・優先度付け</li><li><b class=\"key\">AWS Organizations の一括請求（Consolidated Billing）</b><ul><li>管理アカウントに請求を一本化（<b class=\"key\">一括請求は追加料金なし</b>）</li><li><b class=\"key\">使用量の合算でボリュームディスカウント</b>（S3の段階料金など）を受けやすい</li><li><b class=\"key\">RI / Savings Plans の割引が組織内のアカウント間で共有</b>される<ul><li>管理アカウントで<b class=\"key\">共有をオフ</b>にすることも可能（アカウントごと）</li></ul></li></ul></li></ul>",
        oxIds: ["c09-ox-25"],
        src: [5862,5867]
      },
      {
        id: "c09-l03-p19",
        title: "コスト管理ツール（続き） ⑤",
        html: "<ul><li><b class=\"key\">AWS Pricing Calculator</b>：構築<b class=\"key\">前</b>の見積もり（移行計画・TCO比較）</li><li><b class=\"key\">AWS Billing Conductor</b>：再販・チャージバック用に独自料金で請求を再計算</li><li><span class=\"badge b-cmp\">比較</span>ツール選択の早見<ul><li>見積もり（作る前）→ <b class=\"key\">Pricing Calculator</b></li><li>現状の可視化・予測・RI/SP推奨 → <b class=\"key\">Cost Explorer</b></li><li>しきい値で通知・自動アクション → <b class=\"key\">Budgets</b></li></ul></li></ul>",
        oxIds: [],
        src: [5868,5873]
      },
      {
        id: "c09-l03-p20",
        title: "コスト管理ツール（続き） ⑥",
        html: "<ul><li>想定外の急増を自動検知 → <b class=\"key\">Cost Anomaly Detection</b><ul><li>最も細かい生データ → <b class=\"key\">CUR / Data Exports</b></li><li>インスタンスサイズの推奨 → <b class=\"key\">Compute Optimizer</b></li><li>未使用リソース・総合チェック → <b class=\"key\">Trusted Advisor</b></li></ul></li></ul>",
        oxIds: [],
        src: [5874,5877]
      },
    ] },
    { id: "c09-l04", title: "試験での出方と暗記数字", pages: [
      {
        id: "c09-l04-p01",
        title: "試験での出方 ①",
        html: "<ul><li>典型キーワード → 正解パターン<ul><li>「24時間365日稼働・1年以上・最もコスト効率」→ <b class=\"key\">RI または Savings Plans（3年全額前払いが最安）</b></li><li>「インスタンスファミリーやリージョンを今後変える」「Lambda/Fargateにも」→ <b class=\"key\">Compute Savings Plans</b></li><li>「同じファミリーを使い続ける・最大割引」→ <b class=\"key\">EC2 Instance Savings Plans / スタンダードRI</b></li><li>「中断されても再実行できるバッチ・最安」→ <b class=\"key\">スポットインスタンス（＋スポットフリート）</b></li><li>「特定AZで容量を確実に確保、期間は数日」→ <b class=\"key\">オンデマンドキャパシティ予約</b></li><li>「既存のソケット/コア単位ライセンス持ち込み」→ <b class=\"key\">Dedicated Hosts</b></li></ul></li></ul>",
        oxIds: [],
        src: [5880,5886]
      },
      {
        id: "c09-l04-p02",
        title: "試験での出方 ②",
        html: "<ul><li>「最小のアプリ変更で価格性能向上」→ <b class=\"key\">Graviton</b><ul><li>「アクセスパターンが不明なS3データ」→ <b class=\"key\">S3 Intelligent-Tiering</b></li><li>「30日後は滅多に見ない、即時取得は必要」→ <b class=\"key\">ライフサイクルで Standard-IA</b></li><li>「7年保管・取り出しは48時間以内でよい・最安」→ <b class=\"key\">S3 Glacier Deep Archive</b></li><li>「gp2ボリュームのコスト削減・性能維持」→ <b class=\"key\">gp3 へ Elastic Volumes で変更</b></li><li>「プライベートサブネットから S3 への大量転送で NAT 料金が高い」→ <b class=\"key\">S3 ゲートウェイエンドポイント</b></li></ul></li></ul>",
        oxIds: [],
        src: [5887,5892]
      },
      {
        id: "c09-l04-p03",
        title: "試験での出方 ③",
        html: "<ul><li>「世界中のユーザーへの静的コンテンツ配信コスト」→ <b class=\"key\">CloudFront</b><ul><li>「予測不能なトラフィックのDynamoDB」→ <b class=\"key\">オンデマンドモード</b></li><li>「予測可能・安定したトラフィックのDynamoDB」→ <b class=\"key\">プロビジョンド＋Auto Scaling（＋予約）</b></li><li>「断続的に使われるリレーショナルDB」→ <b class=\"key\">Aurora Serverless v2</b></li><li>「予算超過時に自動でEC2停止/権限制限」→ <b class=\"key\">AWS Budgets の予算アクション</b></li><li>「普段と違うコスト急増を自動検知」→ <b class=\"key\">Cost Anomaly Detection</b></li></ul></li></ul>",
        oxIds: [],
        src: [5893,5898]
      },
      {
        id: "c09-l04-p04",
        title: "試験での出方 ④",
        html: "<ul><li>「部門別にコストを配賦」→ <b class=\"key\">コスト配分タグを有効化</b>＋Cost Explorer/Cost Categories<ul><li>「複数アカウントでRIを有効活用」→ <b class=\"key\">Organizations 一括請求（RI/SP共有）</b></li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>よくある誤答</span><ul><li>「中断不可」の処理にスポット → ×</li><li>Savings Plans で<b class=\"key\">容量予約</b>ができる → ×（ODCRかゾーナルRI）</li><li><b class=\"key\">コンバーティブルRI</b>を Marketplace で売却 → ×（売却できるのはスタンダード）</li><li>Lambda に <b class=\"key\">EC2 Instance Savings Plans</b> が適用 → ×（Lambda/Fargate は <b class=\"key\">Compute SP</b>）</li></ul></li></ul>",
        oxIds: [],
        src: [5899,5905]
      },
      {
        id: "c09-l04-p05",
        title: "試験での出方 ⑤",
        html: "<ul><li>S3 への通信コスト削減に<b class=\"key\">インターフェイスエンドポイント</b> → コスト面ではゲートウェイ型が正解<ul><li>再作成<b class=\"key\">不可能</b>なデータを <b class=\"key\">One Zone-IA</b> に → ×（AZ障害で消失リスク）</li><li>頻繁に読み出すデータを Glacier へ → 取り出し料金で<b class=\"key\">かえって高い</b></li><li>Cost Explorer で<b class=\"key\">予算超過アラート</b> → ×（Budgets）</li><li>タグを付ければすぐ請求に出る → ×（<b class=\"key\">有効化が必要</b>）</li></ul></li></ul>",
        oxIds: [],
        src: [5906,5910]
      },
      {
        id: "c09-l04-p06",
        title: "試験での出方 ⑥",
        html: "<ul><li>「インバウンド転送が高いので削減」→ インバウンドはそもそも<b class=\"key\">無料</b><ul><li>「多数VPCの接続コスト」で全メッシュの VPC ピアリング → 運用負荷が高い。要件の言葉（最小コスト vs 運用負荷）で判断</li></ul></li><li>解き方のコツ<ul><li><b class=\"key\">「最もコスト効率が良い」</b>＋<b class=\"key\">「運用負荷最小」</b>が両方ある → マネージド/サーバーレス＋自動化を優先</li><li><b class=\"key\">稼働パターン</b>（常時・断続・中断可）を先に特定 → 購入オプションを決める</li><li><b class=\"key\">アクセス頻度＋取り出し時間</b>を先に特定 → S3クラスを決める</li><li>「データ転送」が出たら、<b class=\"key\">どこからどこへ</b>（同一AZ/AZ間/リージョン間/インターネット）を図にする</li></ul></li></ul>",
        oxIds: [],
        src: [5911,5917]
      },
      {
        id: "c09-l04-p07",
        title: "暗記すべき数字・制限 ①",
        html: "<ul><li>購入オプションの割引（オンデマンド比の最大値）<ul><li>スタンダードRI：<b class=\"key\">最大72%</b></li><li>EC2 Instance Savings Plans：<b class=\"key\">最大72%</b></li><li>Compute Savings Plans：<b class=\"key\">最大66%</b></li><li>スポット：<b class=\"key\">最大90%</b></li><li>Fargate Spot：<b class=\"key\">最大70%</b></li></ul></li></ul>",
        oxIds: [],
        src: [5920,5925]
      },
      {
        id: "c09-l04-p08",
        title: "暗記すべき数字・制限 ②",
        html: "<ul><li>RI / SP の期間：<b class=\"key\">1年 or 3年</b>。支払い：<b class=\"key\">全額前払い／一部前払い／前払いなし</b></li><li>スポット中断通知：<b class=\"key\">2分前</b></li><li>EC2 課金：Linux等は<b class=\"key\">秒単位（最低60秒）</b></li></ul>",
        oxIds: ["c09-ox-07"],
        src: [5926,5928]
      },
      {
        id: "c09-l04-p09",
        title: "暗記すべき数字・制限 ③",
        html: "<ul><li>Lambda：無料枠 <b class=\"key\">月100万リクエスト＋40万GB秒</b>、最大実行 <b class=\"key\">15分</b>、課金は<b class=\"key\">1ms単位</b></li><li>Graviton：x86比<b class=\"key\">最大40%</b>の価格性能向上（Graviton2時点の公表値）</li></ul>",
        oxIds: [],
        src: [5929,5930]
      },
      {
        id: "c09-l04-p10",
        title: "暗記すべき数字・制限 ④",
        html: "<ul><li>S3 最低保存期間<ul><li>Standard-IA / One Zone-IA：<b class=\"key\">30日</b>（最小課金サイズ<b class=\"key\">128KB</b>）</li><li>Glacier Instant Retrieval / Glacier Flexible Retrieval：<b class=\"key\">90日</b></li><li>Glacier Deep Archive：<b class=\"key\">180日</b></li><li>語呂：「<b class=\"key\">IA さんじゅう、Glacier きゅうじゅう、Deep いちはちまる</b>」</li></ul></li></ul>",
        oxIds: ["c09-ox-11"],
        src: [5931,5935]
      },
      {
        id: "c09-l04-p11",
        title: "暗記すべき数字・制限 ⑤",
        html: "<ul><li>Glacier Flexible Retrieval の取り出し：迅速 <b class=\"key\">1〜5分</b>／標準 <b class=\"key\">3〜5時間</b>／大容量 <b class=\"key\">5〜12時間（無料）</b></li><li>Glacier Deep Archive の取り出し：標準 <b class=\"key\">12時間以内</b>／大容量 <b class=\"key\">48時間以内</b></li></ul>",
        oxIds: [],
        src: [5936,5937]
      },
      {
        id: "c09-l04-p12",
        title: "暗記すべき数字・制限 ⑥",
        html: "<ul><li>Intelligent-Tiering：<b class=\"key\">30日</b>で低頻度、<b class=\"key\">90日</b>でアーカイブインスタント。<b class=\"key\">128KB未満</b>は監視対象外</li><li>ライフサイクル：Standard → IA 系への移行は作成後<b class=\"key\">30日以上</b></li><li>S3 耐久性：<b class=\"key\">99.999999999%（イレブンナイン）</b></li></ul>",
        oxIds: [],
        src: [5938,5940]
      },
      {
        id: "c09-l04-p13",
        title: "暗記すべき数字・制限 ⑦",
        html: "<ul><li>gp3：ベースライン <b class=\"key\">3,000 IOPS / 125 MiB/s</b>、gp2比 GB単価<b class=\"key\">約20%安い</b></li><li>gp2：<b class=\"key\">3 IOPS/GB</b>（バースト方式）</li><li>EBS スナップショットアーカイブ：最大<b class=\"key\">75%</b>安い、<b class=\"key\">最低90日</b>、復元<b class=\"key\">24〜72時間</b></li></ul>",
        oxIds: [],
        src: [5941,5943]
      },
      {
        id: "c09-l04-p14",
        title: "暗記すべき数字・制限 ⑧",
        html: "<ul><li>RDS の停止：最大<b class=\"key\">7日</b>で自動起動</li><li>Aurora Serverless v2：最小 <b class=\"key\">0 ACU</b>（自動一時停止）まで設定可能</li><li>データ転送：<b class=\"key\">インバウンド無料</b>、同一AZプライベートIP <b class=\"key\">無料</b>、AZ間・リージョン間・インターネットアウト<b class=\"key\">有料</b></li></ul>",
        oxIds: [],
        src: [5944,5946]
      },
      {
        id: "c09-l04-p15",
        title: "暗記すべき数字・制限 ⑨",
        html: "<ul><li>ゲートウェイエンドポイント：<b class=\"key\">S3 と DynamoDB のみ</b>、<b class=\"key\">無料</b></li><li>パブリックIPv4：<b class=\"key\">2024年2月</b>から全パブリックIPv4に時間課金</li><li>Trusted Advisor 全チェック：<b class=\"key\">Business サポート以上</b></li><li>語呂：「<b class=\"key\">ゲートは無料、インターフェイスは有料</b>」「<b class=\"key\">見る Explorer、止める Budgets、気づく Anomaly</b>」</li></ul>",
        oxIds: [],
        src: [5947,5950]
      },
    ] },
  ],
  ox: [
    {
      id: "c09-ox-01",
      text: "スタンダードリザーブドインスタンスは、別のインスタンスファミリーへ交換できる。",
      answer: false,
      explain: "ファミリー・OSの交換ができるのは<b class=\"key\">コンバーティブルRI</b>。スタンダードは同一ファミリー内のサイズ変更等に限られる",
      src: 5953
    },
    {
      id: "c09-ox-02",
      text: "コンバーティブルリザーブドインスタンスは、RI Marketplace で売却できる。",
      answer: false,
      explain: "Marketplace で売却できるのは<b class=\"key\">スタンダードRI</b>のみ",
      src: 5956
    },
    {
      id: "c09-ox-03",
      text: "Compute Savings Plans は、AWS Lambda と AWS Fargate の利用にも適用される。",
      answer: true,
      explain: "Compute SP は EC2（ファミリー・リージョン問わず）、Fargate、Lambda に自動適用される",
      src: 5959
    },
    {
      id: "c09-ox-04",
      text: "EC2 Instance Savings Plans は、約束したインスタンスファミリーであれば別リージョンでも割引が適用される。",
      answer: false,
      explain: "EC2 Instance SP は<b class=\"key\">特定リージョンの特定ファミリー</b>に固定。リージョンを問わないのは Compute SP",
      src: 5962
    },
    {
      id: "c09-ox-05",
      text: "Savings Plans を購入すると、特定AZでのインスタンス起動容量も予約される。",
      answer: false,
      explain: "Savings Plans は<b class=\"key\">請求上の割引のみ</b>。容量確保には<b class=\"key\">オンデマンドキャパシティ予約</b>かゾーナルRIを使う",
      src: 5965
    },
    {
      id: "c09-ox-06",
      text: "リザーブドインスタンスでは、同じ期間であれば「前払いなし」より「全額前払い」の方が割引率が高い。",
      answer: true,
      explain: "割引率は<b class=\"key\">全額前払い＞一部前払い＞前払いなし</b>",
      src: 5968
    },
    {
      id: "c09-ox-07",
      text: "スポットインスタンスは、中断される2分前に通知が行われる。",
      answer: true,
      explain: "インスタンスメタデータと EventBridge で<b class=\"key\">2分前</b>に中断通知。事前のリバランス推奨シグナルもある",
      src: 5971
    },
    {
      id: "c09-ox-08",
      text: "既存の Windows Server のソケット単位ライセンスを持ち込んでコストを削減するには、Dedicated Instances が最適である。",
      answer: false,
      explain: "ソケット/コア数が見えるのは <b class=\"key\">Dedicated Hosts</b>。BYOL の定番は専有ホスト",
      src: 5974
    },
    {
      id: "c09-ox-09",
      text: "S3 Intelligent-Tiering では、低頻度アクセス階層からデータを取り出す際に取り出し料金がかかる。",
      answer: false,
      explain: "Intelligent-Tiering は<b class=\"key\">取り出し料金なし</b>。代わりにオブジェクトごとの監視・自動化料金がかかる",
      src: 5977
    },
    {
      id: "c09-ox-10",
      text: "S3 Standard-IA に保存したオブジェクトを10日で削除すると、30日分のストレージ料金が請求される。",
      answer: true,
      explain: "Standard-IA の<b class=\"key\">最低保存期間は30日</b>。早期削除でも残り日数分が課金される",
      src: 5980
    },
    {
      id: "c09-ox-11",
      text: "S3 Glacier Deep Archive の最低保存期間は90日である。",
      answer: false,
      explain: "Deep Archive は<b class=\"key\">180日</b>。90日は Glacier Instant Retrieval / Flexible Retrieval",
      src: 5983
    },
    {
      id: "c09-ox-12",
      text: "S3 Glacier Flexible Retrieval の大容量（Bulk）取り出しは、取り出し料金が無料である。",
      answer: true,
      explain: "Bulk は<b class=\"key\">5〜12時間</b>かかるが無料。急ぐなら迅速（1〜5分、有料）",
      src: 5986
    },
    {
      id: "c09-ox-13",
      text: "EBS gp3 ボリュームは、ボリュームサイズに関係なくベースラインで3,000 IOPS を提供する。",
      answer: true,
      explain: "gp3 は<b class=\"key\">3,000 IOPS・125 MiB/s</b>がベースライン。gp2 のように容量比例ではない",
      src: 5989
    },
    {
      id: "c09-ox-14",
      text: "gp2 から gp3 への変更には、インスタンスを停止してボリュームを作り直す必要がある。",
      answer: false,
      explain: "<b class=\"key\">Elastic Volumes</b> によりオンラインのまま（ダウンタイムなし）でタイプ変更できる",
      src: 5992
    },
    {
      id: "c09-ox-15",
      text: "EC2 インスタンスを停止している間は、アタッチされた EBS ボリュームの料金も発生しない。",
      answer: false,
      explain: "停止中もEBSのストレージ料金は<b class=\"key\">継続</b>して発生する",
      src: 5995
    },
    {
      id: "c09-ox-16",
      text: "インターネットから AWS へのインバウンドのデータ転送は、原則として無料である。",
      answer: true,
      explain: "課金されるのは主に<b class=\"key\">アウトバウンド</b>、AZ間、リージョン間の転送",
      src: 5998
    },
    {
      id: "c09-ox-17",
      text: "同一リージョン内であれば、AZ間のデータ転送は無料である。",
      answer: false,
      explain: "AZ間転送は<b class=\"key\">有料</b>（双方向で課金）。無料なのは同一AZ内のプライベートIP通信",
      src: 6001
    },
    {
      id: "c09-ox-18",
      text: "S3 用の VPC ゲートウェイエンドポイントには、時間料金とデータ処理料金がかかる。",
      answer: false,
      explain: "ゲートウェイエンドポイントは<b class=\"key\">無料</b>。時間＋GB課金はインターフェイスエンドポイント",
      src: 6004
    },
    {
      id: "c09-ox-19",
      text: "プライベートサブネットのEC2からS3への大量転送で NAT Gateway の処理料金が高い場合、S3 ゲートウェイエンドポイントを使うと削減できる。",
      answer: true,
      explain: "S3宛てトラフィックが NAT を経由しなくなり、NAT のデータ処理料金が不要になる",
      src: 6007
    },
    {
      id: "c09-ox-20",
      text: "S3 オリジンから Amazon CloudFront へのデータ転送には料金がかからない。",
      answer: true,
      explain: "AWSオリジン → CloudFront は<b class=\"key\">無料</b>。課金されるのは CloudFront からユーザーへの配信",
      src: 6010
    },
    {
      id: "c09-ox-21",
      text: "VPC ピアリング接続には、接続ごとの時間料金がかかる。",
      answer: false,
      explain: "ピアリングは<b class=\"key\">時間料金なし</b>でデータ転送料のみ。時間料金がかかるのは Transit Gateway のアタッチメント",
      src: 6013
    },
    {
      id: "c09-ox-22",
      text: "AWS Cost Explorer は、予算超過時に EC2 インスタンスを自動停止する機能を持つ。",
      answer: false,
      explain: "自動停止は <b class=\"key\">AWS Budgets の予算アクション</b>。Cost Explorer は可視化・予測・推奨",
      src: 6016
    },
    {
      id: "c09-ox-23",
      text: "ユーザー定義のコスト配分タグは、リソースにタグを付けるだけで Cost Explorer や請求レポートに表示される。",
      answer: false,
      explain: "管理アカウントの Billing コンソールで<b class=\"key\">有効化（アクティブ化）</b>が必要。有効化以降のデータのみ反映",
      src: 6019
    },
    {
      id: "c09-ox-24",
      text: "AWS Compute Optimizer で EC2 のメモリ使用率に基づく推奨を得るには、CloudWatch エージェントが必要である。",
      answer: true,
      explain: "メモリはデフォルトのEC2メトリクスに含まれないため、<b class=\"key\">CloudWatch エージェント</b>で収集する",
      src: 6022
    },
    {
      id: "c09-ox-25",
      text: "AWS Organizations の一括請求では、あるメンバーアカウントで購入したRIの割引が、他のメンバーアカウントにも適用されうる。",
      answer: true,
      explain: "一括請求では<b class=\"key\">RI/SPの割引が組織内で共有</b>される（管理アカウントで共有をオフにすることも可能）",
      src: 6025
    },
    {
      id: "c09-ox-26",
      text: "AWS Cost Anomaly Detection は、機械学習を使って通常とは異なるコストの増加を検出する。",
      answer: true,
      explain: "固定しきい値の Budgets と違い、<b class=\"key\">通常パターンからの逸脱</b>を検出して根本原因も示す",
      src: 6028
    },
    {
      id: "c09-ox-27",
      text: "DynamoDB のトラフィックが予測可能で安定している場合、一般にオンデマンドモードよりプロビジョンドモード＋Auto Scaling の方が安い。",
      answer: true,
      explain: "安定負荷はプロビジョンド（＋リザーブドキャパシティ）が有利。予測不能ならオンデマンド",
      src: 6031
    },
    {
      id: "c09-ox-28",
      text: "S3 One Zone-IA は、再作成できない唯一の原本データの保管に適している。",
      answer: false,
      explain: "単一AZのためAZ障害で失われうる。<b class=\"key\">再作成可能なデータ</b>やセカンダリコピー向け",
      src: 6034
    },
  ],
  mc: [
    {
      id: "c09-mc-01",
      stem: "ある企業は東京リージョンで m6i インスタンスのWebアプリを24時間稼働させている。今後1年以内にコンテナ化して一部を AWS Fargate、一部を AWS Lambda に移行する計画があり、移行先リージョンも未確定である。今後3年間のコンピューティング費用を最も削減できる購入方法はどれか。",
      choices: [
        "m6i のスタンダードリザーブドインスタンスを3年・全額前払いで購入する",
        "3年の EC2 Instance Savings Plans を m6i ファミリーで購入する",
        "3年の Compute Savings Plans を購入する",
        "移行完了までスポットインスタンスで運用する"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"スタンダードRIはファミリー・リージョン固定。Fargate/Lambda には適用されない"},
        {"ok":false,"text":"EC2 Instance SP は特定リージョン・ファミリー限定で、Fargate/Lambda に適用されない"},
        {"ok":true,"text":"ファミリー・リージョンを問わず、<b class=\"key\">Fargate と Lambda にも適用</b>される"},
        {"ok":false,"text":"24時間稼働のWebアプリは中断に耐えられず、スポットは不適"}
      ],
      tip: "「ファミリー/リージョンが変わる」「Lambda・Fargateにも」→ <b class=\"key\">Compute SP</b> に即決",
      src: 6039
    },
    {
      id: "c09-mc-02",
      stem: "ある研究機関は、毎晩数千件のゲノム解析ジョブを実行している。各ジョブは独立しており、チェックポイントから再開でき、翌朝8時までに終わればよい。計算コストを最小化したい。最も適切な構成はどれか。",
      choices: [
        "オンデマンドインスタンスを固定台数で起動する",
        "複数のインスタンスタイプとAZを指定したスポットフリートを price-capacity-optimized 配分戦略で使用する",
        "単一インスタンスタイプのゾーナルリザーブドインスタンスを購入する",
        "Dedicated Hosts を予約購入して実行する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"動作はするが、中断可能な処理にオンデマンドは割高"},
        {"ok":true,"text":"中断耐性があり時間に余裕 → <b class=\"key\">スポット</b>。複数タイプ・AZ＋容量考慮の戦略で中断リスクも低減"},
        {"ok":false,"text":"毎晩数時間の処理に1年/3年の予約は利用率が低く無駄。容量予約も不要"},
        {"ok":false,"text":"BYOLや規制要件がなく、最も高価な選択肢"}
      ],
      tip: "「独立・再開可能・時間に余裕」＝スポットのサイン。単一タイプ指定より<b class=\"key\">多様化</b>が正解",
      src: 6051
    },
    {
      id: "c09-mc-03",
      stem: "あるメディア企業は S3 にユーザー投稿画像を保存している。アクセスは投稿直後に集中するが、どの画像が後から再びバズるかは予測できない。取り出しに遅延は許されず、運用負荷を増やさずにストレージコストを削減したい。最も適切な方法はどれか。",
      choices: [
        "ライフサイクルルールで30日後に S3 Glacier Flexible Retrieval へ移行する",
        "S3 Intelligent-Tiering を使用する",
        "ライフサイクルルールで30日後に S3 One Zone-IA へ移行する",
        "毎月スクリプトでアクセスログを分析し、手動でクラスを変更する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"取り出しに数分〜数時間かかり「遅延不可」に反する"},
        {"ok":true,"text":"<b class=\"key\">アクセスパターンが予測不能</b>な場合の定番。自動階層化で取り出し料金もなし"},
        {"ok":false,"text":"再アクセスが多いと取り出し料金がかさみ、単一AZで原本保管にも不向き"},
        {"ok":false,"text":"運用負荷が大きい"}
      ],
      tip: "「予測できない」＋「運用負荷を増やさない」→ <b class=\"key\">Intelligent-Tiering</b>",
      src: 6063
    },
    {
      id: "c09-mc-04",
      stem: "ある金融機関は、取引記録を7年間保管する規制要件がある。記録は監査時（年1回未満）にのみ参照され、監査人への提出は依頼から48時間以内でよい。最もコスト効率の良いストレージはどれか。",
      choices: [
        "S3 Standard-IA",
        "S3 Glacier Instant Retrieval",
        "S3 Glacier Flexible Retrieval",
        "S3 Glacier Deep Archive"
      ],
      answer: ["D"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"即時取り出し用で、長期アーカイブとしては割高"},
        {"ok":false,"text":"ミリ秒取り出しは不要。Deep Archive より高い"},
        {"ok":false,"text":"要件は満たすが、Deep Archive の方が安い"},
        {"ok":true,"text":"<b class=\"key\">最安</b>のクラス。取り出しは標準12時間以内・大容量48時間以内で要件を満たす"}
      ],
      tip: "「48時間以内でよい」「年1回未満」「長期保管」→ Deep Archive。許容時間が長いほど安いクラス",
      src: 6075
    },
    {
      id: "c09-mc-05",
      stem: "ある企業のプライベートサブネット上の EC2 インスタンス群が、同一リージョンの S3 バケットから毎日数TBのデータを読み込んでいる。請求書を確認したところ、NAT Gateway のデータ処理料金が大きな割合を占めていた。最小の変更でコストを削減する方法はどれか。",
      choices: [
        "NAT Gateway を NAT インスタンスに置き換える",
        "S3 用の VPC ゲートウェイエンドポイントを作成し、プライベートサブネットのルートテーブルに関連付ける",
        "S3 用のインターフェイスエンドポイント（AWS PrivateLink）を各AZに作成する",
        "EC2 インスタンスをパブリックサブネットに移動し、Elastic IP を付与する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"処理料金は減るが、可用性・パッチ適用など運用負荷が増える"},
        {"ok":true,"text":"ゲートウェイエンドポイントは<b class=\"key\">無料</b>。S3 宛て通信が NAT を経由しなくなる"},
        {"ok":false,"text":"機能的には可能だが<b class=\"key\">時間＋GB料金</b>がかかり、ゲートウェイ型より高い"},
        {"ok":false,"text":"セキュリティ要件を損ない、パブリックIPv4の時間課金も発生する"}
      ],
      tip: "「VPC内から S3/DynamoDB」「NAT料金」→ <b class=\"key\">ゲートウェイエンドポイント</b>が鉄板",
      src: 6087
    },
    {
      id: "c09-mc-06",
      stem: "ある企業は、gp2 の 2TB EBS ボリューム（6,000 IOPS 相当）をデータベースに使っている。実際に必要な容量は 500GB、必要な IOPS は 6,000 であり、IOPS を確保するために容量を大きくしていた。性能を維持しつつ最もコストを削減できる方法はどれか。",
      choices: [
        "500GB の gp2 ボリュームを新規作成し、データを移行する",
        "Elastic Volumes で 500GB の io2 に変更する",
        "新規に 500GB の gp3 ボリュームを作成し、IOPS を 6,000 にプロビジョニングしてデータを移行し、切り替える",
        "2TB の st1 ボリュームへ変更する"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"gp2 500GB では 1,500 IOPS（3 IOPS/GB）しか出ず性能不足"},
        {"ok":false,"text":"io2 は高価で、この性能要件には過剰"},
        {"ok":true,"text":"gp3 は<b class=\"key\">容量と IOPS を独立して設定</b>でき、500GB＋6,000 IOPS が可能"},
        {"ok":false,"text":"st1 はHDDでランダムI/Oが多いDBに不向き"}
      ],
      tip: "「IOPSのために容量を盛っている gp2」→ <b class=\"key\">gp3</b> で容量と性能を分離<br>補足：EBS は Elastic Volumes で<b class=\"key\">縮小できない</b>ため、容量削減は新ボリューム作成が必要。同容量のままなら gp2→gp3 はオンライン変更可能",
      src: 6099
    },
    {
      id: "c09-mc-07",
      stem: "ある SaaS 企業は、多数のテナント向けに開発環境のリレーショナルDBを提供している。各DBは平日の日中に断続的に使われ、夜間と週末はほぼアクセスがない。MySQL互換で、運用負荷を最小化しつつコストを下げたい。最も適切な選択肢はどれか。",
      choices: [
        "各テナントに Amazon RDS for MySQL の Multi-AZ 配置を用意し、リザーブドDBインスタンスを購入する",
        "Amazon Aurora Serverless v2 を最小容量 0 ACU（自動一時停止）で構成する",
        "EC2 上に MySQL をインストールし、スポットインスタンスで運用する",
        "Amazon DynamoDB オンデマンドモードに移行する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"常時課金かつ Multi-AZ で倍のコスト。断続利用の開発環境には過剰"},
        {"ok":true,"text":"負荷に応じ自動スケール、アイドル時は<b class=\"key\">0 ACU</b>まで下がりコンピュート課金が止まる"},
        {"ok":false,"text":"中断で DB が停止しうるうえ、運用負荷が高い"},
        {"ok":false,"text":"リレーショナル（MySQL互換）の要件を満たさない"}
      ],
      tip: "「断続的・予測不能」＋「リレーショナル」＋「運用負荷最小」→ <b class=\"key\">Aurora Serverless v2</b>",
      src: 6112
    },
    {
      id: "c09-mc-08",
      stem: "あるゲーム会社は、新作タイトルのリリースに伴い DynamoDB テーブルを新規作成する。リリース直後のトラフィックは予測できず、数分で数十倍に急増する可能性がある。スロットリングを避けつつ、使わない容量への支払いを避けたい。最も適切な構成はどれか。",
      choices: [
        "プロビジョンドモードでピーク想定の WCU/RCU を設定し、リザーブドキャパシティを購入する",
        "プロビジョンドモードで Auto Scaling を設定する",
        "オンデマンドモードを使用する",
        "DynamoDB Accelerator（DAX）を導入し、プロビジョンドモードで最小容量を設定する"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"ピーク前提の容量は平常時に無駄。予測不能なのに長期予約はリスク"},
        {"ok":false,"text":"Auto Scaling は数分単位で追従するため、<b class=\"key\">急激なスパイク</b>ではスロットリングが起こりうる"},
        {"ok":true,"text":"<b class=\"key\">新規・予測不能・急増</b>はオンデマンドの典型。リクエスト単位課金で無駄がない"},
        {"ok":false,"text":"DAX は読み取りキャッシュで書き込みスパイクに効かず、ノード料金も追加"}
      ],
      tip: "「新規」「予測不能」「急増」→ オンデマンド。「安定・予測可能」なら B",
      src: 6124
    },
    {
      id: "c09-mc-09",
      stem: "ある企業は AWS Organizations で50のアカウントを運用している。各開発チームのアカウントで月間予算の100%に達しそうになった時点で、そのアカウントで新しい EC2 インスタンスを起動できないようにし、財務チームの承認後に実行したい。最も運用負荷の少ない方法はどれか。",
      choices: [
        "Cost Explorer のレポートを毎日確認し、超過しそうなアカウントの IAM ポリシーを手動で変更する",
        "AWS Budgets で各アカウントの予算を作成し、承認ワークフロー付きの予算アクションで EC2 起動を拒否する SCP を適用する",
        "Cost Anomaly Detection のアラートを Lambda で受け、インスタンスを終了させる",
        "Trusted Advisor のコスト最適化チェックを毎週実行する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"手動運用で負荷が大きく、見落としも起きる"},
        {"ok":true,"text":"<b class=\"key\">予算アクション</b>は IAM ポリシー/SCP 適用や EC2/RDS 停止を、<b class=\"key\">承認後実行</b>も選べる"},
        {"ok":false,"text":"異常検知は予算しきい値の管理ではなく、実装も独自で負荷が高い"},
        {"ok":false,"text":"Trusted Advisor は推奨提示のみで予算制御はできない"}
      ],
      tip: "「予算」「しきい値」「自動で制限」→ <b class=\"key\">Budgets の予算アクション</b>",
      src: 6136
    },
    {
      id: "c09-mc-10",
      stem: "ある企業は世界中のユーザーに、us-east-1 の S3 バケットから大容量の動画ファイルを直接配信している。インターネットへのデータ転送料金が高く、海外ユーザーのダウンロード速度にも不満が出ている。両方を改善する最も適切な方法はどれか。",
      choices: [
        "各大陸のリージョンへ S3 クロスリージョンレプリケーションを設定する",
        "S3 Transfer Acceleration を有効にする",
        "S3 バケットをオリジンとする Amazon CloudFront ディストリビューションを作成する",
        "バケットを S3 One Zone-IA に変更する"
      ],
      answer: ["C"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"リージョン間転送料と複数コピーの保存料が増える"},
        {"ok":false,"text":"Transfer Acceleration は主に<b class=\"key\">アップロード高速化</b>用で、追加料金がかかる"},
        {"ok":true,"text":"S3 → CloudFront は<b class=\"key\">無料</b>、エッジキャッシュで速度向上・オリジン転送削減"},
        {"ok":false,"text":"ストレージ料金は下がるが取り出し料金が増え、転送料・速度は改善しない"}
      ],
      tip: "「世界中への配信」「転送料」「速度」→ <b class=\"key\">CloudFront</b>",
      src: 6148
    },
    {
      id: "c09-mc-11",
      stem: "あるEC企業は、EC2 フリートの多くのインスタンスで CPU 使用率が平均15%未満であることに気付いた。インスタンスタイプごとに、メモリ使用率も考慮した適正サイズの推奨を、最小の手間で得たい。最も適切な方法はどれか。",
      choices: [
        "AWS Pricing Calculator で各インスタンスタイプの料金を比較する",
        "CloudWatch エージェントを導入してメモリメトリクスを収集し、AWS Compute Optimizer の推奨を確認する",
        "Cost and Usage Report を Athena でクエリし、使用率を算出する",
        "AWS Budgets で使用量予算を作成する"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"見積もりツールで、実際の使用率に基づく推奨は出ない"},
        {"ok":true,"text":"Compute Optimizer は ML で<b class=\"key\">適正サイズ</b>を推奨。メモリを考慮するには <b class=\"key\">CloudWatch エージェント</b>が必要"},
        {"ok":false,"text":"CUR は請求データで、CPU/メモリ使用率は含まれない"},
        {"ok":false,"text":"予算の通知であり、サイズ推奨はしない"}
      ],
      tip: "「適正サイズの推奨」→ Compute Optimizer。「メモリ」の一語でエージェントを思い出す",
      src: 6160
    },
    {
      id: "c09-mc-12",
      stem: "ある企業は社内に12個のVPCを持ち、すべてのVPCが相互に通信し、さらにオンプレミスとも Direct Connect で接続する必要がある。今後VPCは数十個に増える見込みで、ルーティング管理の運用負荷を最小化したい。最も適切な構成はどれか。",
      choices: [
        "すべてのVPC間にフルメッシュの VPC ピアリングを作成する",
        "AWS Transit Gateway を作成し、各VPCと Direct Connect ゲートウェイを接続する",
        "各VPCに Site-to-Site VPN を作成してオンプレミス経由で相互通信する",
        "各VPCで AWS PrivateLink のエンドポイントサービスを公開し合う"
      ],
      answer: ["B"],
      selectCount: 1,
      domain: 4,
      choiceExplain: [
        {"ok":false,"text":"時間料金はないが、接続数が n(n-1)/2 で増え、<b class=\"key\">推移的ルーティング不可</b>で運用負荷が大きい"},
        {"ok":true,"text":"<b class=\"key\">ハブ＆スポーク</b>で集約。アタッチメント料金はかかるが運用負荷が最小"},
        {"ok":false,"text":"オンプレ経由のヘアピン通信で遅延・転送料が増え、管理も煩雑"},
        {"ok":false,"text":"PrivateLink は特定サービスの公開用で、VPC間の全面的な相互通信には不向き"}
      ],
      tip: "「多数VPC」「増える」「運用負荷最小」→ TGW。「2〜3個・最小コスト」ならピアリング",
      src: 6172
    },
    {
      id: "c09-mc-13",
      stem: "ある企業は Auto Scaling グループで本番Webアプリを運用している。平常時は常に10台が必要で、日中のピークには最大40台まで増える。ピーク時の追加分はステートレスで、インスタンスが中断されても他台が処理を引き継げる。最もコスト効率の良い組み合わせはどれか。（2つ選択）",
      choices: [
        "ベースの10台分の利用に対して Savings Plans を購入する",
        "最大40台分のスタンダードリザーブドインスタンスを購入する",
        "混合インスタンスポリシーで、ベース容量を超える分をスポットインスタンスで賄う",
        "全台をスポットインスタンスで運用する",
        "全台を Dedicated Instances で運用する"
      ],
      answer: ["A","C"],
      selectCount: 2,
      domain: 4,
      choiceExplain: [
        {"ok":true,"text":"常時稼働の<b class=\"key\">ベース10台</b>は確約割引が最適"},
        {"ok":false,"text":"ピーク時のみの30台分まで予約すると、平常時に使われない予約が無駄になる"},
        {"ok":true,"text":"中断を許容できる<b class=\"key\">変動分はスポット</b>で大幅に削減できる"},
        {"ok":false,"text":"本番のベース容量までスポットにすると、一斉中断でサービス停止のリスク"},
        {"ok":false,"text":"専有の要件がなく、コストが増えるだけ"}
      ],
      tip: "<b class=\"key\">ベース＝RI/SP、変動＝スポット（またはオンデマンド）</b>の層分けが定番",
      src: 6184
    },
    {
      id: "c09-mc-14",
      stem: "ある企業は AWS Organizations 配下の複数アカウントで、部門ごとのAWSコストを月次で正確に配賦し、さらにリソースIDレベルの詳細データを社内BIツールで分析したい。最も適切な組み合わせはどれか。（2つ選択）",
      choices: [
        "各リソースに「Department」タグを付与し、管理アカウントでコスト配分タグとして有効化する",
        "AWS Trusted Advisor のコスト最適化チェックをエクスポートする",
        "AWS Data Exports（Cost and Usage Report）を S3 に出力し、Amazon Athena でクエリする",
        "AWS Pricing Calculator で部門ごとの見積もりを作成する",
        "各アカウントで AWS Compute Optimizer を有効化する"
      ],
      answer: ["A","C"],
      selectCount: 2,
      domain: 4,
      choiceExplain: [
        {"ok":true,"text":"部門別集計には<b class=\"key\">コスト配分タグの有効化</b>が必須（有効化しないと請求データに出ない）"},
        {"ok":false,"text":"最適化の推奨であり、配賦データではない"},
        {"ok":true,"text":"CUR/Data Exports は<b class=\"key\">最も詳細</b>（リソースID・時間単位）。Athena/QuickSight で分析できる"},
        {"ok":false,"text":"構築前の見積もり用で、実績の配賦には使えない"},
        {"ok":false,"text":"適正サイズの推奨で、コスト配賦とは無関係"}
      ],
      tip: "「部門別配賦」→ タグ有効化、「最も詳細なデータを分析」→ CUR/Data Exports＋Athena",
      src: 6198
    },
    {
      id: "c09-mc-15",
      stem: "ある企業の S3 バケットにはバージョニングが有効なログデータがある。ログは作成後30日間は頻繁に分析され、その後90日までは月1回程度ミリ秒で参照され、それ以降は1年後に削除してよい。請求を確認すると、上書きによる古いバージョンや失敗したアップロードの残骸で想定以上の容量が使われていた。コストを最適化する組み合わせはどれか。（2つ選択）",
      choices: [
        "ライフサイクルルールで、現行バージョンを30日後に S3 Standard-IA、90日後に S3 Glacier Flexible Retrieval へ移行し、365日後に失効させる",
        "ライフサイクルルールで、非現行バージョンの失効と、未完了のマルチパートアップロードの削除を設定する",
        "30日経過したオブジェクトを S3 Glacier Deep Archive へ即座に移行する",
        "バケットのバージョニングを停止すれば、既存の古いバージョンは自動的に削除される",
        "S3 Transfer Acceleration を有効にしてアップロード失敗を防ぐ"
      ],
      answer: ["A","B"],
      selectCount: 2,
      domain: 4,
      choiceExplain: [
        {"ok":true,"text":"アクセス頻度が<b class=\"key\">予測可能</b>なのでライフサイクルで段階移行。30〜90日はミリ秒取得の IA が要件に合う"},
        {"ok":true,"text":"<b class=\"key\">非現行バージョン</b>と<b class=\"key\">未完了マルチパート</b>は見落としがちなコスト源"},
        {"ok":false,"text":"30〜90日の月1回のミリ秒参照に対応できない（取り出しに最大48時間）"},
        {"ok":false,"text":"バージョニングを停止しても<b class=\"key\">既存の旧バージョンは残る</b>"},
        {"ok":false,"text":"速度改善用で追加料金がかかり、残骸の削除にはならない"}
      ],
      tip: "パターンが決まっていれば<b class=\"key\">ライフサイクル</b>、バージョニング有効なら<b class=\"key\">非現行バージョン</b>のルールもセットで考える",
      src: 6212
    },
  ]
});
window.DATA.chapters.push({
  no: 10,
  title: "キーワード逆引きと総仕上げ模擬問題",
  domainNote: "全ドメイン横断",
  src: [6227,7169],
  lessons: [
    { id: "c10-l01", title: "逆引き（セキュリティ・ネットワーク）", pages: [
      {
        id: "c10-l01-p01",
        title: "逆引きの使い方",
        html: "<ul><li>使い方：問題文の<b class=\"key\">キーワード</b>を見たら、反射的に右の<b class=\"key\">正解サービス</b>が浮かぶまで周回する</li><li><span class=\"badge b-freq\">頻出</span>は本試験で特によく出るパターン。迷ったら「要件をすべて満たすか」で最終確認</li></ul>",
        oxIds: [],
        src: [6230,6231]
      },
      {
        id: "c10-l01-p02",
        title: "セキュリティ・ID管理 ①",
        html: "<ul><li>「EC2上のアプリにAWSの認証情報を渡したい（アクセスキーは埋め込まない）」→ <b class=\"key\">IAMロール（インスタンスプロファイル）</b><span class=\"badge b-freq\">頻出</span></li><li>「別アカウントのリソースに一時的にアクセス」→ <b class=\"key\">IAMロール＋STS AssumeRole</b>（クロスアカウントロール）</li><li>「組織内の全アカウントで特定サービス・リージョンの利用を禁止」→ <b class=\"key\">SCP（Organizations）</b><span class=\"badge b-freq\">頻出</span></li><li>「IAMユーザー／ロールが付与できる権限の上限を設定（委任管理）」→ <b class=\"key\">アクセス許可の境界（Permissions Boundary）</b></li><li>「複数アカウントのベストプラクティス環境を素早く構築・ガードレール適用」→ <b class=\"key\">AWS Control Tower</b></li><li>「複数アカウントへの一元的なシングルサインオン」→ <b class=\"key\">IAM Identity Center</b>（旧AWS SSO）</li></ul>",
        oxIds: [],
        src: [6234,6239]
      },
      {
        id: "c10-l01-p03",
        title: "セキュリティ・ID管理 ②",
        html: "<ul><li>「オンプレのActive Directoryの認証情報でAWSにサインイン（ADはオンプレに残す）」→ <b class=\"key\">AD Connector</b></li><li>「AWS上にマネージドなMicrosoft ADが必要（信頼関係・AD対応アプリ）」→ <b class=\"key\">AWS Managed Microsoft AD</b></li><li>「モバイル／Webアプリのユーザー登録・サインイン・ソーシャルログイン」→ <b class=\"key\">Cognito ユーザープール</b><span class=\"badge b-freq\">頻出</span></li><li>「アプリのユーザーに一時的なAWS認証情報を払い出してS3へ直接アクセス」→ <b class=\"key\">Cognito IDプール</b></li><li>「DB認証情報を自動ローテーション」→ <b class=\"key\">Secrets Manager</b><span class=\"badge b-freq\">頻出</span></li><li>「設定値・パラメータを階層管理、低コスト（ローテーション不要）」→ <b class=\"key\">SSM Parameter Store</b></li></ul>",
        oxIds: [],
        src: [6240,6245]
      },
      {
        id: "c10-l01-p04",
        title: "セキュリティ・ID管理 ③",
        html: "<ul><li>「暗号鍵の使用をCloudTrailで監査・鍵ポリシーで制御」→ <b class=\"key\">KMS カスタマー管理キー</b><span class=\"badge b-freq\">頻出</span></li><li>「シングルテナントの専用HSM、鍵を顧客が完全管理（FIPS 140 Level 3）」→ <b class=\"key\">CloudHSM</b></li><li>「パブリックSSL/TLS証明書を無料で発行・自動更新」→ <b class=\"key\">ACM（AWS Certificate Manager）</b></li><li>「CloudFrontで独自ドメインのHTTPS」→ <b class=\"key\">ACM証明書を us-east-1 で発行</b><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span></span></li><li>「SQLインジェクション・XSSからWebアプリを保護」→ <b class=\"key\">AWS WAF</b>（ALB/CloudFront/API Gatewayに関連付け）<span class=\"badge b-freq\">頻出</span></li></ul>",
        oxIds: [],
        src: [6246,6250]
      },
      {
        id: "c10-l01-p05",
        title: "セキュリティ・ID管理（続き） ①",
        html: "<ul><li>「特定の国からのアクセスをブロック」→ <b class=\"key\">AWS WAF 地理的一致ルール</b> or <b class=\"key\">CloudFront 地理的制限</b></li><li>「同一IPからの大量リクエストを制限」→ <b class=\"key\">AWS WAF レートベースルール</b></li><li>「大規模DDoS対策＋24時間の専門チーム（SRT）支援・DDoS時のコスト保護」→ <b class=\"key\">Shield Advanced</b></li><li>「L3/L4の一般的なDDoS対策を追加費用なし」→ <b class=\"key\">Shield Standard</b>（自動で有効）</li><li>「ログを機械学習で分析し、不審な通信・侵害されたインスタンスを検知」→ <b class=\"key\">GuardDuty</b><span class=\"badge b-freq\">頻出</span></li></ul>",
        oxIds: [],
        src: [6251,6255]
      },
      {
        id: "c10-l01-p06",
        title: "セキュリティ・ID管理（続き） ②",
        html: "<ul><li>「S3内の個人情報（PII）・機密データを自動発見」→ <b class=\"key\">Amazon Macie</b><span class=\"badge b-freq\">頻出</span></li><li>「EC2・ECRイメージ・Lambdaの脆弱性（CVE）を継続スキャン」→ <b class=\"key\">Amazon Inspector</b></li><li>「セキュリティ検出結果の根本原因を可視化・調査」→ <b class=\"key\">Amazon Detective</b></li><li>「複数サービス・複数アカウントのセキュリティ検出結果を一元集約・スコア化」→ <b class=\"key\">Security Hub</b></li><li>「組織全体のWAFルール・Shield・SGを一元管理して新規アカウントにも自動適用」→ <b class=\"key\">Firewall Manager</b></li><li>「VPC単位のステートフル検査・IPS・ドメイン名でのアウトバウンド制御」→ <b class=\"key\">AWS Network Firewall</b></li></ul>",
        oxIds: [],
        src: [6256,6261]
      },
      {
        id: "c10-l01-p07",
        title: "セキュリティ・ID管理（続き） ③",
        html: "<ul><li>「S3オブジェクトを一定期間、rootでも削除・上書き不可（WORM）」→ <b class=\"key\">S3 Object Lock コンプライアンスモード</b></li><li>「バックアップを削除不可にしてランサムウェア対策」→ <b class=\"key\">AWS Backup Vault Lock</b></li><li>「S3バケットにCloudFront経由でのみアクセスさせる」→ <b class=\"key\">OAC（Origin Access Control）</b><span class=\"badge b-freq\">頻出</span></li><li>「ログイン不要で一時的にS3の非公開オブジェクトを共有／アップロードさせる」→ <b class=\"key\">S3 署名付きURL</b></li><li>「有料会員だけにCloudFrontの複数ファイルを配信」→ <b class=\"key\">CloudFront 署名付きCookie</b></li></ul>",
        oxIds: [],
        src: [6262,6266]
      },
      {
        id: "c10-l01-p08",
        title: "セキュリティ・ID管理（続き） ④",
        html: "<ul><li>「22番ポートを開けず・踏み台なしでEC2にシェル接続、操作ログ取得」→ <b class=\"key\">SSM Session Manager</b><span class=\"badge b-freq\">頻出</span></li><li>「他アカウントとサブネット・Transit Gatewayを共有」→ <b class=\"key\">AWS RAM（Resource Access Manager）</b></li><li>「S3へのアクセスを特定VPCエンドポイント経由に限定」→ <b class=\"key\">バケットポリシーの aws:SourceVpce 条件</b></li></ul>",
        oxIds: [],
        src: [6267,6269]
      },
      {
        id: "c10-l01-p09",
        title: "ネットワーク・コンテンツ配信 ①",
        html: "<ul><li>「静的IP2つで世界中のユーザーのTCP/UDPを高速化」→ <b class=\"key\">Global Accelerator</b><span class=\"badge b-freq\">頻出</span></li><li>「静的コンテンツ・動画を世界にキャッシュ配信、オリジン負荷軽減」→ <b class=\"key\">CloudFront</b><span class=\"badge b-freq\">頻出</span></li><li>「HTTPのパス／ホスト名でルーティング、コンテナのマイクロサービス」→ <b class=\"key\">ALB</b></li><li>「超低レイテンシ・毎秒数百万リクエスト・TCP/UDP・AZごとに固定IP」→ <b class=\"key\">NLB</b></li><li>「サードパーティのファイアウォール／IDSアプライアンスを透過的に挿入」→ <b class=\"key\">GWLB（Gateway Load Balancer）</b></li><li>「プライベートサブネットのEC2からインターネットへアウトバウンドのみ（IPv4）」→ <b class=\"key\">NAT Gateway</b><span class=\"badge b-freq\">頻出</span></li></ul>",
        oxIds: [],
        src: [6272,6277]
      },
      {
        id: "c10-l01-p10",
        title: "ネットワーク・コンテンツ配信 ②",
        html: "<ul><li>「IPv6でアウトバウンドのみ許可」→ <b class=\"key\">Egress-only インターネットゲートウェイ</b></li><li>「プライベートサブネットからS3/DynamoDBへインターネットを経由せず無料で」→ <b class=\"key\">ゲートウェイ型VPCエンドポイント</b><span class=\"badge b-freq\">頻出</span></li><li>「S3/DynamoDB以外のAWSサービス（SQS・KMS等）にプライベート接続」→ <b class=\"key\">インターフェイス型VPCエンドポイント（PrivateLink）</b></li><li>「自社サービスを数百の顧客VPCにCIDR重複を気にせず公開」→ <b class=\"key\">PrivateLink（NLB＋エンドポイントサービス）</b></li><li>「2つのVPCを1対1で接続」→ <b class=\"key\">VPCピアリング</b>（推移的ルーティング不可）</li><li>「数十〜数百のVPCとオンプレをハブ＆スポークで接続」→ <b class=\"key\">Transit Gateway</b><span class=\"badge b-freq\">頻出</span></li></ul>",
        oxIds: [],
        src: [6278,6283]
      },
      {
        id: "c10-l01-p11",
        title: "ネットワーク・コンテンツ配信 ③",
        html: "<ul><li>「オンプレとの専用線・安定した帯域・一貫したレイテンシ」→ <b class=\"key\">Direct Connect</b></li><li>「オンプレとすぐに（数分〜数時間で）暗号化接続」→ <b class=\"key\">Site-to-Site VPN</b></li><li>「Direct Connectの経路も暗号化したい」→ <b class=\"key\">Direct Connect＋VPN（IPsec）</b> or <b class=\"key\">MACsec</b></li><li>「Direct Connectのバックアップ回線を安く」→ <b class=\"key\">Site-to-Site VPN をバックアップに</b></li><li>「複数リージョンのVPCに1本のDirect Connectで接続」→ <b class=\"key\">Direct Connect Gateway</b></li></ul>",
        oxIds: [],
        src: [6284,6288]
      },
      {
        id: "c10-l01-p12",
        title: "ネットワーク・コンテンツ配信 ④",
        html: "<ul><li>「リモートワーカーのPCからVPCへ接続」→ <b class=\"key\">AWS Client VPN</b></li><li>「ユーザーに最も低レイテンシなリージョンへDNSで振り分け」→ <b class=\"key\">Route 53 レイテンシーベースルーティング</b></li><li>「国・地域ごとに別のコンテンツ（法規制・言語）」→ <b class=\"key\">Route 53 位置情報ルーティング</b></li><li>「地理的距離＋バイアスで流量を寄せる」→ <b class=\"key\">Route 53 地理的近接性ルーティング</b></li><li>「新バージョンに10%だけ流す（カナリア）」→ <b class=\"key\">Route 53 加重ルーティング</b></li><li>「プライマリ障害時にS3静的サイト等へ自動切替」→ <b class=\"key\">Route 53 フェイルオーバールーティング＋ヘルスチェック</b></li></ul>",
        oxIds: [],
        src: [6289,6294]
      },
      {
        id: "c10-l01-p13",
        title: "ネットワーク・コンテンツ配信 ⑤",
        html: "<ul><li>「ゾーンapex（example.com）をALB/CloudFrontに向ける」→ <b class=\"key\">Route 53 エイリアスレコード</b></li><li>「オンプレDNSとVPC内のプライベートDNSを相互に名前解決」→ <b class=\"key\">Route 53 Resolver インバウンド／アウトバウンドエンドポイント</b></li><li>「VPC内の通信（許可・拒否）を記録して調査」→ <b class=\"key\">VPC フローログ</b></li><li>「エッジで軽量なヘッダー書換え・URLリダイレクト（超低コスト）」→ <b class=\"key\">CloudFront Functions</b></li><li>「エッジでネットワーク呼出しを含む処理・オリジンレスポンス加工」→ <b class=\"key\">Lambda@Edge</b></li></ul>",
        oxIds: [],
        src: [6295,6299]
      },
    ] },
    { id: "c10-l02", title: "逆引き（コンピュート・ストレージ・データベース）", pages: [
      {
        id: "c10-l02-p01",
        title: "コンピュート・コンテナ ①",
        html: "<ul><li>「サーバー管理なし・イベント駆動・15分以内の処理」→ <b class=\"key\">AWS Lambda</b><span class=\"badge b-freq\">頻出</span></li><li>「15分を超える処理をサーバーレスコンテナで」→ <b class=\"key\">ECS on Fargate</b></li><li>「既存のKubernetesマニフェスト・エコシステムを活用」→ <b class=\"key\">Amazon EKS</b></li><li>「Dockerコンテナを最もシンプルにAWSネイティブで運用」→ <b class=\"key\">Amazon ECS</b></li><li>「コードをアップロードするだけでWebアプリの環境（ELB・ASG）を自動構築」→ <b class=\"key\">Elastic Beanstalk</b></li><li>「需要に応じてEC2台数を自動増減」→ <b class=\"key\">EC2 Auto Scaling</b><span class=\"badge b-freq\">頻出</span></li></ul>",
        oxIds: [],
        src: [6302,6307]
      },
      {
        id: "c10-l02-p02",
        title: "コンピュート・コンテナ ②",
        html: "<ul><li>「CPU使用率を50%に保つよう自動調整」→ <b class=\"key\">ターゲット追跡スケーリング</b></li><li>「毎週月曜9時にアクセス急増が分かっている」→ <b class=\"key\">スケジュールされたスケーリング</b></li><li>「過去の周期パターンから先回りでスケール」→ <b class=\"key\">予測スケーリング</b></li><li>「スケールアウト時の起動が遅い（初期化に時間）」→ <b class=\"key\">ウォームプール</b> or <b class=\"key\">ゴールデンAMI</b></li><li>「SQSのバックログに応じてワーカーを増減」→ <b class=\"key\">キューのメッセージ数（インスタンスあたりのバックログ）でスケーリング</b></li></ul>",
        oxIds: [],
        src: [6308,6312]
      },
      {
        id: "c10-l02-p03",
        title: "コンピュート・コンテナ ③",
        html: "<ul><li>「HPCで低レイテンシ・高スループットのノード間通信」→ <b class=\"key\">クラスタープレイスメントグループ（＋EFA）</b></li><li>「重要インスタンスを別ハードウェアに分散（少数台）」→ <b class=\"key\">分散（スプレッド）プレイスメントグループ</b></li><li>「Hadoop/Cassandra/Kafkaでラック単位に障害分離」→ <b class=\"key\">パーティションプレイスメントグループ</b></li><li>「ソケット／コア単位のライセンス持ち込み（BYOL）」→ <b class=\"key\">Dedicated Hosts</b></li><li>「ハードウェアを他顧客と共有しないだけでよい」→ <b class=\"key\">Dedicated Instances</b></li><li>「特定AZで確実にキャパシティを確保（期間の約束なし）」→ <b class=\"key\">オンデマンドキャパシティ予約</b></li></ul>",
        oxIds: [],
        src: [6313,6318]
      },
      {
        id: "c10-l02-p04",
        title: "コンピュート・コンテナ ④",
        html: "<ul><li>「メモリ状態を保持して停止し、高速に再開」→ <b class=\"key\">EC2 休止（Hibernate）</b></li><li>「数千のバッチジョブを最適なインスタンスで実行・キュー管理」→ <b class=\"key\">AWS Batch</b></li><li>「レイテンシ数ミリ秒で大都市圏の近くで処理」→ <b class=\"key\">Local Zones</b></li><li>「5Gネットワーク内で超低レイテンシ」→ <b class=\"key\">Wavelength</b></li><li>「データをオンプレに置いたままAWSの同じAPI・サービス（データレジデンシー）」→ <b class=\"key\">AWS Outposts</b></li></ul>",
        oxIds: [],
        src: [6319,6323]
      },
      {
        id: "c10-l02-p05",
        title: "コンピュート・コンテナ ⑤",
        html: "<ul><li>「シンプルなVPS（固定月額）で小規模サイト」→ <b class=\"key\">Amazon Lightsail</b></li><li>「API の作成・認証・スロットリング・キャッシュ」→ <b class=\"key\">Amazon API Gateway</b></li><li>「GraphQL API・リアルタイム購読」→ <b class=\"key\">AWS AppSync</b></li></ul>",
        oxIds: [],
        src: [6324,6326]
      },
      {
        id: "c10-l02-p06",
        title: "ストレージ・データ移行 ①",
        html: "<ul><li>「Linuxの複数EC2（複数AZ）から同時に共有するファイルシステム（NFS）」→ <b class=\"key\">Amazon EFS</b><span class=\"badge b-freq\">頻出</span></li><li>「Windows（SMB）・Active Directory統合の共有ファイル」→ <b class=\"key\">FSx for Windows File Server</b><span class=\"badge b-freq\">頻出</span></li><li>「HPC・機械学習でS3のデータを高速並列処理」→ <b class=\"key\">FSx for Lustre</b></li><li>「NFS/SMB/iSCSIのマルチプロトコル・NetAppから移行」→ <b class=\"key\">FSx for NetApp ONTAP</b></li><li>「ZFSのファイルサーバーをそのまま移行」→ <b class=\"key\">FSx for OpenZFS</b></li><li>「1台のEC2用ブロックストレージ」→ <b class=\"key\">Amazon EBS</b></li></ul>",
        oxIds: [],
        src: [6329,6334]
      },
      {
        id: "c10-l02-p07",
        title: "ストレージ・データ移行 ②",
        html: "<ul><li>「最高のIOPS・低レイテンシの本番DB（ミッションクリティカル）」→ <b class=\"key\">EBS io2 Block Express</b></li><li>「汎用SSDでサイズと独立してIOPSを設定、gp2より安い」→ <b class=\"key\">EBS gp3</b></li><li>「大容量シーケンシャル（ログ・ビッグデータ）を安く」→ <b class=\"key\">EBS st1</b></li><li>「アクセス頻度の低い大容量HDD・最安」→ <b class=\"key\">EBS sc1</b></li><li>「一時データ・バッファ・キャッシュで最高I/O（消えてもよい）」→ <b class=\"key\">インスタンスストア</b></li><li>「同一AZの複数EC2から同じブロックボリュームに接続」→ <b class=\"key\">EBS マルチアタッチ（io1/io2）</b></li></ul>",
        oxIds: [],
        src: [6335,6340]
      },
      {
        id: "c10-l02-p08",
        title: "ストレージ・データ移行 ③",
        html: "<ul><li>「EBSスナップショットの作成・保持を自動化」→ <b class=\"key\">Amazon Data Lifecycle Manager</b> or <b class=\"key\">AWS Backup</b></li><li>「複数サービス・複数アカウントのバックアップを一元管理・クロスリージョンコピー」→ <b class=\"key\">AWS Backup</b><span class=\"badge b-freq\">頻出</span></li><li>「アクセスパターンが不明・予測不能なS3データのコスト最適化」→ <b class=\"key\">S3 Intelligent-Tiering</b><span class=\"badge b-freq\">頻出</span></li><li>「アクセス頻度低いがミリ秒で取り出し、複数AZ耐久」→ <b class=\"key\">S3 Standard-IA</b></li></ul>",
        oxIds: [],
        src: [6341,6344]
      },
      {
        id: "c10-l02-p09",
        title: "ストレージ・データ移行 ④",
        html: "<ul><li>「再作成可能なデータ、低頻度アクセス、最安のIA」→ <b class=\"key\">S3 One Zone-IA</b></li><li>「四半期に1回程度アクセス・ミリ秒取り出し・アーカイブ」→ <b class=\"key\">S3 Glacier Instant Retrieval</b></li><li>「数分〜数時間で取り出せればよいアーカイブ」→ <b class=\"key\">S3 Glacier Flexible Retrieval</b></li></ul>",
        oxIds: [],
        src: [6345,6347]
      },
      {
        id: "c10-l02-p10",
        title: "ストレージ・データ移行（続き） ①",
        html: "<ul><li>「7〜10年保管・12時間以内に取り出せればよい・最安」→ <b class=\"key\">S3 Glacier Deep Archive</b><span class=\"badge b-freq\">頻出</span></li><li>「一定日数後に別クラスへ移動・期限切れで削除」→ <b class=\"key\">S3 ライフサイクルルール</b></li><li>「遠隔地から単一バケットへのアップロードを高速化」→ <b class=\"key\">S3 Transfer Acceleration</b><span class=\"badge b-freq\">頻出</span></li><li>「大きなファイルを並列・再送可能にアップロード」→ <b class=\"key\">マルチパートアップロード</b>（100MB超で推奨）</li><li>「別リージョンにオブジェクトを自動複製（DR・コンプラ）」→ <b class=\"key\">S3 クロスリージョンレプリケーション（CRR）</b></li><li>「既存オブジェクトもまとめて複製・数十億オブジェクトに一括処理」→ <b class=\"key\">S3 Batch Replication / S3 Batch Operations</b></li></ul>",
        oxIds: [],
        src: [6348,6353]
      },
      {
        id: "c10-l02-p11",
        title: "ストレージ・データ移行（続き） ②",
        html: "<ul><li>「誤削除・上書きから復元」→ <b class=\"key\">S3 バージョニング（＋MFA Delete）</b></li><li>「S3にアップロードされたら処理を起動」→ <b class=\"key\">S3 イベント通知 → Lambda/SQS/SNS/EventBridge</b></li><li>「静的Webサイトをサーバーなしでホスト」→ <b class=\"key\">S3 静的ウェブサイトホスティング（＋CloudFront）</b></li><li>「オンプレのアプリからNFS/SMBでS3にファイル保存、ローカルキャッシュ」→ <b class=\"key\">S3 File Gateway</b><span class=\"badge b-freq\">頻出</span></li><li>「オンプレのiSCSIボリュームをAWSにバックアップ（キャッシュ型／保管型）」→ <b class=\"key\">Volume Gateway</b></li><li>「物理テープライブラリを置き換え（既存バックアップソフトのまま）」→ <b class=\"key\">Tape Gateway</b></li></ul>",
        oxIds: [],
        src: [6354,6359]
      },
      {
        id: "c10-l02-p12",
        title: "ストレージ・データ移行（続き） ③",
        html: "<ul><li>「オンプレNAS→EFS/FSx/S3へオンラインで高速・定期転送」→ <b class=\"key\">AWS DataSync</b><span class=\"badge b-freq\">頻出</span></li><li>「帯域が細く数百TB以上を数週間以内に移行」→ <b class=\"key\">Snowball Edge</b>（オフライン転送。2025年11月に新規顧客受付終了だが試験では正解として出る）</li><li>「SFTPで取引先からファイル受領→S3保存（サーバー管理なし）」→ <b class=\"key\">AWS Transfer Family</b></li><li>「オンプレのサーバーをそのままAWSへ（リホスト）」→ <b class=\"key\">AWS Application Migration Service（MGN）</b></li><li>「オンプレサーバーをAWSに継続レプリケーションしてDR（低RPO/RTO）」→ <b class=\"key\">AWS Elastic Disaster Recovery（DRS）</b></li></ul>",
        oxIds: [],
        src: [6360,6364]
      },
      {
        id: "c10-l02-p13",
        title: "データベース ①",
        html: "<ul><li>「ミリ秒未満（マイクロ秒）のレイテンシでDynamoDB読み取り」→ <b class=\"key\">DAX</b><span class=\"badge b-freq\">頻出</span></li><li>「RDBの読み取り負荷を下げ・セッション保存・ランキング」→ <b class=\"key\">ElastiCache（Redis OSS / Valkey）</b></li><li>「シンプルなキャッシュ・マルチスレッド・永続化不要」→ <b class=\"key\">ElastiCache for Memcached</b></li><li>「Redis互換で耐久性のあるプライマリDB」→ <b class=\"key\">Amazon MemoryDB</b></li><li>「AZ障害時に自動フェイルオーバー（同期レプリケーション）」→ <b class=\"key\">RDS Multi-AZ</b><span class=\"badge b-freq\">頻出</span></li><li>「読み取りスケール・レポート処理を本番から分離」→ <b class=\"key\">RDS リードレプリカ</b><span class=\"badge b-freq\">頻出</span></li></ul>",
        oxIds: [],
        src: [6367,6372]
      },
      {
        id: "c10-l02-p14",
        title: "データベース ②",
        html: "<ul><li>「MySQL/PostgreSQL互換で高性能・ストレージ自動拡張・6コピー」→ <b class=\"key\">Amazon Aurora</b></li><li>「リージョン障害に備えたRDB、RPO 1秒・RTO 1分程度」→ <b class=\"key\">Aurora Global Database</b><span class=\"badge b-freq\">頻出</span></li><li>「負荷が読めない・断続的なRDBワークロードを自動スケール」→ <b class=\"key\">Aurora Serverless v2</b></li><li>「本番DBのコピーを素早く安く作ってテスト」→ <b class=\"key\">Aurora クローン</b></li><li>「Lambdaから大量のDB接続でコネクション枯渇」→ <b class=\"key\">RDS Proxy</b><span class=\"badge b-freq\">頻出</span></li><li>「キーバリュー・単一桁ミリ秒・無制限スケール・サーバーレス」→ <b class=\"key\">DynamoDB</b></li></ul>",
        oxIds: [],
        src: [6373,6378]
      },
      {
        id: "c10-l02-p15",
        title: "データベース ③",
        html: "<ul><li>「複数リージョンで読み書き（マルチアクティブ）NoSQL」→ <b class=\"key\">DynamoDB グローバルテーブル</b></li><li>「DynamoDBの変更を捕捉して後続処理」→ <b class=\"key\">DynamoDB Streams（＋Lambda）</b></li><li>「一定期間後に項目を自動削除（追加料金なし）」→ <b class=\"key\">DynamoDB TTL</b></li><li>「DynamoDBを秒単位で過去の時点に復元（最大35日）」→ <b class=\"key\">DynamoDB ポイントインタイムリカバリ（PITR）</b></li><li>「トラフィック予測不能・新規アプリのDynamoDB」→ <b class=\"key\">オンデマンドキャパシティモード</b></li><li>「MongoDB互換のマネージドDB」→ <b class=\"key\">Amazon DocumentDB</b></li></ul>",
        oxIds: [],
        src: [6379,6384]
      },
      {
        id: "c10-l02-p16",
        title: "データベース ④",
        html: "<ul><li>「Cassandra互換・サーバーレス」→ <b class=\"key\">Amazon Keyspaces</b></li><li>「ソーシャルグラフ・不正検知の関係性クエリ」→ <b class=\"key\">Amazon Neptune</b></li><li>「IoTセンサーの時系列データ」→ <b class=\"key\">Amazon Timestream</b></li><li>「Oracle/SQL ServerからAurora等へ移行（スキーマ変換）」→ <b class=\"key\">AWS SCT（DMS Schema Conversion）＋ DMS</b></li><li>「移行中もソースDBを稼働させたまま継続レプリケーション（CDC）」→ <b class=\"key\">AWS DMS</b></li></ul>",
        oxIds: [],
        src: [6385,6389]
      },
      {
        id: "c10-l02-p17",
        title: "データベース ⑤",
        html: "<ul><li>「OSやDBエンジンへのアクセス（カスタマイズ）が必要なRDS」→ <b class=\"key\">RDS Custom（Oracle/SQL Server）</b></li><li>「改ざん不可能な台帳DB」→ <b class=\"key\">Amazon QLDB</b>（<b class=\"key\">2025年7月サポート終了</b>。古い選択肢として出ることがある）</li></ul>",
        oxIds: [],
        src: [6390,6391]
      },
    ] },
    { id: "c10-l03", title: "逆引き（アプリ統合・運用・コスト）", pages: [
      {
        id: "c10-l03-p01",
        title: "アプリ統合・分析・機械学習 ①",
        html: "<ul><li>「コンポーネントを疎結合、スパイクを吸収・バッファリング」→ <b class=\"key\">Amazon SQS</b><span class=\"badge b-freq\">頻出</span></li><li>「順序保証・重複排除（厳密に1回処理）」→ <b class=\"key\">SQS FIFOキュー</b></li><li>「処理に失敗し続けるメッセージを隔離」→ <b class=\"key\">デッドレターキュー（DLQ）</b></li><li>「1つのメッセージを複数のサブスクライバーに同時配信（ファンアウト）」→ <b class=\"key\">SNS → 複数SQS</b><span class=\"badge b-freq\">頻出</span></li><li>「メール／SMS／モバイルプッシュ通知」→ <b class=\"key\">Amazon SNS</b></li><li>「SaaS・AWSサービスのイベントをルールで振り分け」→ <b class=\"key\">Amazon EventBridge</b></li></ul>",
        oxIds: [],
        src: [6394,6399]
      },
      {
        id: "c10-l03-p02",
        title: "アプリ統合・分析・機械学習 ②",
        html: "<ul><li>「cronのような定期実行をサーバーレスで」→ <b class=\"key\">EventBridge Scheduler（ルール）＋ Lambda</b></li><li>「複数のLambdaを順序・分岐・リトライ・人の承認付きで実行」→ <b class=\"key\">AWS Step Functions</b></li><li>「既存のActiveMQ/RabbitMQ（AMQP/MQTT/STOMP等）アプリをコード変更少なく移行」→ <b class=\"key\">Amazon MQ</b></li><li>「リアルタイムのストリーム・複数コンシューマ・再処理（リプレイ）」→ <b class=\"key\">Kinesis Data Streams</b><span class=\"badge b-freq\">頻出</span></li><li>「ストリームをS3/Redshift/OpenSearchへコードなしで配信（ニアリアルタイム）」→ <b class=\"key\">Amazon Data Firehose</b><span class=\"badge b-freq\">頻出</span></li><li>「ストリームをSQLやApache Flinkでリアルタイム分析」→ <b class=\"key\">Managed Service for Apache Flink</b></li></ul>",
        oxIds: [],
        src: [6400,6405]
      },
      {
        id: "c10-l03-p03",
        title: "アプリ統合・分析・機械学習 ③",
        html: "<ul><li>「既存のApache Kafkaをマネージドに」→ <b class=\"key\">Amazon MSK</b></li><li>「S3のデータにサーバーレスでアドホックSQL」→ <b class=\"key\">Amazon Athena</b><span class=\"badge b-freq\">頻出</span></li><li>「ペタバイト級DWH・複雑な集計・BI」→ <b class=\"key\">Amazon Redshift</b></li><li>「Redshiftから S3 のデータも結合してクエリ」→ <b class=\"key\">Redshift Spectrum</b></li><li>「Spark/Hadoopのビッグデータ処理（クラスター制御が必要）」→ <b class=\"key\">Amazon EMR</b></li><li>「サーバーレスETL・データカタログ・クローラー」→ <b class=\"key\">AWS Glue</b></li></ul>",
        oxIds: [],
        src: [6406,6411]
      },
      {
        id: "c10-l03-p04",
        title: "アプリ統合・分析・機械学習 ④",
        html: "<ul><li>「コードなしでデータのクレンジング・正規化」→ <b class=\"key\">AWS Glue DataBrew</b></li><li>「データレイクの列・行レベルの権限を一元管理」→ <b class=\"key\">AWS Lake Formation</b></li><li>「ダッシュボード・BI可視化」→ <b class=\"key\">Amazon QuickSight</b></li><li>「ログの全文検索・可視化（ELK）」→ <b class=\"key\">Amazon OpenSearch Service</b></li><li>「画像・動画から顔・物体・不適切コンテンツを検出」→ <b class=\"key\">Amazon Rekognition</b></li><li>「スキャン文書・帳票から文字やフォームを抽出」→ <b class=\"key\">Amazon Textract</b></li></ul>",
        oxIds: [],
        src: [6412,6417]
      },
      {
        id: "c10-l03-p05",
        title: "アプリ統合・分析・機械学習 ⑤",
        html: "<ul><li>「テキストの感情分析・エンティティ抽出」→ <b class=\"key\">Amazon Comprehend</b></li><li>「音声→テキスト（文字起こし）」→ <b class=\"key\">Amazon Transcribe</b></li><li>「テキスト→音声（読み上げ）」→ <b class=\"key\">Amazon Polly</b></li><li>「機械翻訳」→ <b class=\"key\">Amazon Translate</b></li><li>「チャットボット（音声・テキスト対話）」→ <b class=\"key\">Amazon Lex</b></li></ul>",
        oxIds: [],
        src: [6418,6422]
      },
      {
        id: "c10-l03-p06",
        title: "アプリ統合・分析・機械学習 ⑥",
        html: "<ul><li>「社内文書のインテリジェント検索」→ <b class=\"key\">Amazon Kendra</b></li><li>「独自MLモデルの構築・学習・デプロイ」→ <b class=\"key\">Amazon SageMaker AI</b></li><li>「基盤モデル（生成AI）をAPIで利用」→ <b class=\"key\">Amazon Bedrock</b></li></ul>",
        oxIds: [],
        src: [6423,6425]
      },
      {
        id: "c10-l03-p07",
        title: "運用・監視・DR ①",
        html: "<ul><li>「誰がいつどのAPIを呼んだか（監査）」→ <b class=\"key\">AWS CloudTrail</b><span class=\"badge b-freq\">頻出</span></li><li>「リソース設定の変更履歴・ルール準拠の継続評価」→ <b class=\"key\">AWS Config</b><span class=\"badge b-freq\">頻出</span></li><li>「非準拠リソースを自動修復」→ <b class=\"key\">Config ルール＋SSM Automation による修復</b></li><li>「メトリクス監視・しきい値でアラーム」→ <b class=\"key\">CloudWatch アラーム</b></li><li>「EC2のメモリ使用率・ディスク使用率を取得」→ <b class=\"key\">CloudWatch エージェント</b><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>（標準メトリクスにない）</span></li><li>「ログを集約・メトリクスフィルターでエラー回数を監視」→ <b class=\"key\">CloudWatch Logs</b></li></ul>",
        oxIds: [],
        src: [6428,6433]
      },
      {
        id: "c10-l03-p08",
        title: "運用・監視・DR ②",
        html: "<ul><li>「分散アプリのリクエストを追跡・ボトルネック特定」→ <b class=\"key\">AWS X-Ray</b></li><li>「AWS側の障害・メンテナンスが自分のリソースに影響するか」→ <b class=\"key\">AWS Health Dashboard</b></li><li>「多数のEC2にパッチを一括適用」→ <b class=\"key\">SSM Patch Manager</b></li><li>「多数のEC2にコマンドを一括実行（SSHなし）」→ <b class=\"key\">SSM Run Command</b></li><li>「インフラをコードで定義・再現可能に構築」→ <b class=\"key\">AWS CloudFormation</b></li><li>「複数アカウント・複数リージョンに同じスタックを展開」→ <b class=\"key\">CloudFormation StackSets</b></li></ul>",
        oxIds: [],
        src: [6434,6439]
      },
      {
        id: "c10-l03-p09",
        title: "運用・監視・DR ③",
        html: "<ul><li>「承認済みの製品カタログをセルフサービス提供」→ <b class=\"key\">AWS Service Catalog</b></li><li>「最安のDR、RTO/RPOは数時間〜1日でよい」→ <b class=\"key\">バックアップ＆リストア</b></li><li>「DBだけ常時複製、他は障害時に起動」→ <b class=\"key\">パイロットライト</b></li><li>「縮小版の環境を常時稼働、障害時にスケールアップ」→ <b class=\"key\">ウォームスタンバイ</b></li><li>「RTOほぼゼロ、両リージョンで本番稼働」→ <b class=\"key\">マルチサイト（アクティブ/アクティブ）</b></li><li>「EC2が障害で停止したら自動復旧（同じIP・メタデータ維持）」→ <b class=\"key\">EC2 自動復旧（CloudWatchアラームの復旧アクション）</b></li></ul>",
        oxIds: [],
        src: [6440,6445]
      },
      {
        id: "c10-l03-p10",
        title: "コスト管理・最適化 ①",
        html: "<ul><li>「24時間365日稼働の安定ワークロード、ファミリー・リージョン・Fargate/Lambdaもまたいで割引」→ <b class=\"key\">Compute Savings Plans</b><span class=\"badge b-freq\">頻出</span></li><li>「特定リージョンの特定インスタンスファミリーで最大割引」→ <b class=\"key\">EC2 Instance Savings Plans</b> or <b class=\"key\">スタンダードRI</b></li><li>「中断されてもよいバッチ・ステートレス処理を最安で」→ <b class=\"key\">スポットインスタンス</b><span class=\"badge b-freq\">頻出</span></li><li>「ベースはRI/SP、ピークはオンデマンド、余剰はスポット」→ <b class=\"key\">ASG 混合インスタンスポリシー</b></li><li>「予算超過前にメール通知」→ <b class=\"key\">AWS Budgets</b></li></ul>",
        oxIds: [],
        src: [6448,6452]
      },
      {
        id: "c10-l03-p11",
        title: "コスト管理・最適化 ②",
        html: "<ul><li>「過去のコスト傾向・予測を可視化」→ <b class=\"key\">AWS Cost Explorer</b></li><li>「最も詳細な時間単位の請求明細をS3に出力して分析」→ <b class=\"key\">コストと使用状況レポート（CUR）/ Data Exports</b></li><li>「部門別にコストを配分」→ <b class=\"key\">コスト配分タグ</b></li><li>「過剰スペックのEC2/EBS/Lambdaのサイズ適正化推奨」→ <b class=\"key\">AWS Compute Optimizer</b></li><li>「コスト・セキュリティ・耐障害性のベストプラクティスチェック」→ <b class=\"key\">AWS Trusted Advisor</b></li><li>「異常なコスト増加を機械学習で検知」→ <b class=\"key\">AWS Cost Anomaly Detection</b></li></ul>",
        oxIds: [],
        src: [6453,6458]
      },
      {
        id: "c10-l03-p12",
        title: "コスト管理・最適化 ③",
        html: "<ul><li>「NAT Gateway経由のS3通信料金を削減」→ <b class=\"key\">S3 ゲートウェイエンドポイント</b><span class=\"badge b-freq\">頻出</span></li><li>「CloudFrontでオリジンからのデータ転送料・負荷を削減」→ <b class=\"key\">CloudFront キャッシュ（TTL延長）</b></li><li>「開発環境のEC2を夜間・休日に停止」→ <b class=\"key\">Instance Scheduler / EventBridge＋Lambda</b></li><li>「断続的・予測不能なDB負荷でアイドル時のコスト削減」→ <b class=\"key\">Aurora Serverless v2 / DynamoDB オンデマンド</b></li></ul>",
        oxIds: [],
        src: [6459,6462]
      },
      {
        id: "c10-l03-p13",
        title: "コスト管理・最適化 ④",
        html: "<ul><li>「EBSをgp2から安く・性能も確保」→ <b class=\"key\">gp3へ移行</b></li><li>「古いEBSスナップショットを低コスト保管」→ <b class=\"key\">EBS スナップショットアーカイブ</b></li><li>「別アカウントが取得するS3データ転送料を利用者に負担させる」→ <b class=\"key\">S3 リクエスタ支払い</b></li></ul>",
        oxIds: [],
        src: [6463,6465]
      },
    ] },
    { id: "c10-l04", title: "紛らわしいサービスの比較（前半）", pages: [
      {
        id: "c10-l04-p01",
        title: "SQS/SNS/EventBridge ほか（メッセージング・データベース・キャッシュ・暗号化） ①",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>SQS vs SNS vs EventBridge<ul><li><b class=\"key\">SQS</b>＝キュー（プル型・1メッセージを1コンシューマが処理・バッファ）</li><li><b class=\"key\">SNS</b>＝Pub/Sub（プッシュ型・複数サブスクライバーへ同時配信）</li><li><b class=\"key\">EventBridge</b>＝イベントバス（内容でルーティング・SaaS/AWSイベント連携・スケジュール）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>SQS 標準 vs FIFO<ul><li>標準＝ほぼ無制限スループット・<b class=\"key\">少なくとも1回</b>・順序ベストエフォート</li><li>FIFO＝<b class=\"key\">順序保証・重複排除（厳密に1回）</b>・スループットに上限あり</li></ul></li></ul>",
        oxIds: [],
        src: [6468,6474]
      },
      {
        id: "c10-l04-p02",
        title: "SQS/SNS/EventBridge ほか（メッセージング・データベース・キャッシュ・暗号化） ②",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Kinesis Data Streams vs Data Firehose<ul><li><b class=\"key\">Data Streams</b>＝リアルタイム・独自コンシューマ・データ保持してリプレイ可</li><li><b class=\"key\">Firehose</b>＝フルマネージド配信（S3/Redshift/OpenSearch等）・ニアリアルタイム・保持/リプレイなし</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Kinesis Data Streams vs SQS<ul><li>Kinesis＝<b class=\"key\">複数コンシューマが同じデータを読み</b>、順序（シャード内）とリプレイが可能</li><li>SQS＝処理したら削除するタスクキュー。個別メッセージの遅延・可視性制御</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Step Functions vs SQS<ul><li>Step Functions＝ワークフローの<b class=\"key\">オーケストレーション</b>（順序・分岐・リトライ・状態管理）</li><li>SQS＝コンポーネント間の<b class=\"key\">バッファ（疎結合）</b></li></ul></li><li><span class=\"badge b-cmp\">比較</span>Amazon MQ vs SQS/SNS<ul><li>MQ＝既存の<b class=\"key\">標準プロトコル（AMQP/MQTT/STOMP/JMS）</b>アプリの移行用</li><li>SQS/SNS＝新規クラウドネイティブ開発向け（独自API・無制限スケール）</li></ul></li></ul>",
        oxIds: [],
        src: [6475,6486]
      },
      {
        id: "c10-l04-p03",
        title: "SQS/SNS/EventBridge ほか（メッセージング・データベース・キャッシュ・暗号化） ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>RDS Multi-AZ vs リードレプリカ<ul><li>Multi-AZ＝<b class=\"key\">可用性</b>（同期レプリケーション・自動フェイルオーバー・スタンバイは読み取り不可※）</li><li>リードレプリカ＝<b class=\"key\">読み取り性能</b>（非同期・読み取り可・手動昇格）</li><li>※Multi-AZ DBクラスター（スタンバイ2台）はスタンバイも読み取り可</li></ul></li><li><span class=\"badge b-cmp\">比較</span>RDS vs Aurora<ul><li>Aurora＝ストレージが<b class=\"key\">3AZに6コピー</b>で自動拡張、レプリカ最大15・フェイルオーバー高速</li><li>RDS＝エンジンの選択肢が広い（Oracle/SQL Server/Db2等）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Aurora Global Database vs DynamoDB グローバルテーブル<ul><li>Aurora Global＝<b class=\"key\">RDB</b>・書込みはプライマリリージョンのみ・DR用（RPO約1秒）</li><li>DynamoDB グローバルテーブル＝<b class=\"key\">NoSQL</b>・<b class=\"key\">全リージョンで読み書き可</b>（マルチアクティブ）</li></ul></li></ul>",
        oxIds: [],
        src: [6487,6496]
      },
      {
        id: "c10-l04-p04",
        title: "SQS/SNS/EventBridge ほか（メッセージング・データベース・キャッシュ・暗号化） ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>ElastiCache vs DAX<ul><li>DAX＝<b class=\"key\">DynamoDB専用</b>のインメモリキャッシュ（APIほぼ互換・コード変更最小）</li><li>ElastiCache＝RDS等の汎用キャッシュ（アプリ側でキャッシュロジック実装）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>ElastiCache Redis OSS vs Memcached<ul><li>Redis＝<b class=\"key\">レプリケーション・Multi-AZ・永続化・ソート済みセット</b>（ランキング）</li><li>Memcached＝シンプル・マルチスレッド・永続化/レプリケーションなし</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Secrets Manager vs Parameter Store<ul><li>Secrets Manager＝<b class=\"key\">自動ローテーション標準装備</b>・有料・クロスリージョン複製</li><li>Parameter Store＝設定値・シークレットを階層管理・標準は<b class=\"key\">無料</b>・ローテーション機能なし</li></ul></li><li><span class=\"badge b-cmp\">比較</span>KMS vs CloudHSM<ul><li>KMS＝マルチテナントのマネージド鍵管理。AWSサービス統合・<b class=\"key\">運用負荷小</b></li><li>CloudHSM＝<b class=\"key\">シングルテナントHSM</b>を顧客が管理（鍵の完全な管理権・規制要件）</li></ul></li></ul>",
        oxIds: [],
        src: [6497,6508]
      },
      {
        id: "c10-l04-p05",
        title: "SQS/SNS/EventBridge ほか（メッセージング・データベース・キャッシュ・暗号化） ⑤",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>SSE-S3 vs SSE-KMS vs SSE-C<ul><li>SSE-S3＝S3管理キー（<b class=\"key\">既定で有効</b>）・追加設定不要</li><li>SSE-KMS＝KMSキー・<b class=\"key\">鍵使用をCloudTrailで監査</b>・鍵ポリシーで制御</li><li>SSE-C＝<b class=\"key\">顧客が鍵をリクエストごとに提供</b>（AWSは鍵を保存しない）</li></ul></li></ul>",
        oxIds: [],
        src: [6509,6512]
      },
      {
        id: "c10-l04-p06",
        title: "セキュリティグループ/NACL ほか（監視・ストレージ・防御・負荷分散） ①",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>セキュリティグループ vs ネットワークACL<ul><li>SG＝<b class=\"key\">インスタンス（ENI）単位・ステートフル・許可のみ</b></li><li>NACL＝<b class=\"key\">サブネット単位・ステートレス・許可と拒否</b>・ルール番号順に評価</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>特定IPを<b class=\"key\">拒否</b>するならNACL（SGに拒否ルールはない）</span></li></ul></li><li><span class=\"badge b-cmp\">比較</span>CloudTrail vs Config vs CloudWatch<ul><li>CloudTrail＝<b class=\"key\">誰が何をした</b>（API操作の記録）</li><li>Config＝<b class=\"key\">リソースがどういう設定だった／準拠しているか</b>（構成履歴）</li><li>CloudWatch＝<b class=\"key\">性能・状態</b>（メトリクス・ログ・アラーム）</li></ul></li></ul>",
        oxIds: [],
        src: [6513,6520]
      },
      {
        id: "c10-l04-p07",
        title: "セキュリティグループ/NACL ほか（監視・ストレージ・防御・負荷分散） ②",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Storage Gateway vs DataSync<ul><li>Storage Gateway＝オンプレから<b class=\"key\">継続的に使う</b>ハイブリッドストレージ（ローカルキャッシュ）</li><li>DataSync＝<b class=\"key\">移行・定期転送</b>用のオンライン高速データ転送</li></ul></li><li><span class=\"badge b-cmp\">比較</span>DataSync vs Snowball Edge<ul><li>回線に十分な帯域があり期限内に転送できる→<b class=\"key\">DataSync</b></li><li>帯域不足・数百TB以上・期限が短い→<b class=\"key\">Snowball Edge</b>（物理デバイス輸送）</li></ul></li></ul>",
        oxIds: [],
        src: [6521,6526]
      },
      {
        id: "c10-l04-p08",
        title: "セキュリティグループ/NACL ほか（監視・ストレージ・防御・負荷分散） ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>EFS vs FSx vs EBS<ul><li>EBS＝<b class=\"key\">1台（同一AZ）</b>のブロックストレージ</li><li>EFS＝<b class=\"key\">Linux/NFS</b>の共有ファイル・複数AZ・自動拡張</li><li>FSx＝特定ファイルシステム（<b class=\"key\">Windows SMB</b>／<b class=\"key\">Lustre（HPC）</b>／ONTAP／OpenZFS）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>EBS vs インスタンスストア<ul><li>EBS＝永続・スナップショット可・停止しても残る</li><li>インスタンスストア＝ホスト直結で高速だが<b class=\"key\">停止・終了で消える</b>（一時データのみ）</li></ul></li></ul>",
        oxIds: [],
        src: [6527,6533]
      },
      {
        id: "c10-l04-p09",
        title: "セキュリティグループ/NACL ほか（監視・ストレージ・防御・負荷分散） ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>gp3 vs io2 Block Express<ul><li>gp3＝汎用SSD・ベースライン<b class=\"key\">3,000 IOPS</b>・容量とIOPSを独立設定・安い</li><li>io2 Block Express＝最高性能（最大<b class=\"key\">256,000 IOPS</b>）・高耐久・ミッションクリティカルDB</li></ul></li><li><span class=\"badge b-cmp\">比較</span>st1 vs sc1<ul><li>st1＝<b class=\"key\">スループット最適化</b>HDD（頻繁アクセスの大容量シーケンシャル）</li><li>sc1＝<b class=\"key\">コールド</b>HDD（低頻度・最安）。どちらもブートボリューム不可</li></ul></li></ul>",
        oxIds: [],
        src: [6534,6539]
      },
      {
        id: "c10-l04-p10",
        title: "セキュリティグループ/NACL ほか（監視・ストレージ・防御・負荷分散） ⑤",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Shield vs WAF vs GuardDuty<ul><li>Shield＝<b class=\"key\">DDoS</b>対策（Standardは無料・Advancedは有料＋SRT）</li><li>WAF＝<b class=\"key\">L7のWeb攻撃</b>（SQLi・XSS・レート制限・IP/国ブロック）</li><li>GuardDuty＝<b class=\"key\">脅威検知</b>（ログを分析して検出するだけ。ブロックはしない）</li></ul></li></ul>",
        oxIds: [],
        src: [6540,6543]
      },
      {
        id: "c10-l04-p11",
        title: "セキュリティグループ/NACL ほか（監視・ストレージ・防御・負荷分散） ⑥",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>GuardDuty vs Inspector vs Macie vs Detective<ul><li>GuardDuty＝不審な<b class=\"key\">挙動</b>の検知／Inspector＝<b class=\"key\">脆弱性</b>スキャン</li><li>Macie＝S3の<b class=\"key\">機密データ</b>発見／Detective＝検出結果の<b class=\"key\">調査・根本原因分析</b></li></ul></li><li><span class=\"badge b-cmp\">比較</span>Security Hub vs Firewall Manager<ul><li>Security Hub＝セキュリティ<b class=\"key\">検出結果の集約</b>とベストプラクティス評価</li><li>Firewall Manager＝<b class=\"key\">WAF/Shield/SG/Network Firewallのルールを組織全体に一元適用</b></li></ul></li></ul>",
        oxIds: [],
        src: [6544,6549]
      },
      {
        id: "c10-l04-p12",
        title: "セキュリティグループ/NACL ほか（監視・ストレージ・防御・負荷分散） ⑦",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>AWS WAF vs Network Firewall<ul><li>WAF＝HTTP(S)アプリ層（ALB/CloudFront/API Gateway等の前段）</li><li>Network Firewall＝<b class=\"key\">VPC全体</b>のL3〜L7トラフィック検査（IPS・ドメインフィルタ）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>CloudFront vs Global Accelerator<ul><li>CloudFront＝<b class=\"key\">HTTP(S)コンテンツのキャッシュ</b>配信</li><li>Global Accelerator＝キャッシュなし、<b class=\"key\">TCP/UDP</b>をAWS網で高速化・<b class=\"key\">静的エニーキャストIP2つ</b>・高速リージョン切替</li></ul></li></ul>",
        oxIds: [],
        src: [6550,6555]
      },
      {
        id: "c10-l04-p13",
        title: "セキュリティグループ/NACL ほか（監視・ストレージ・防御・負荷分散） ⑧",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>ALB vs NLB vs GWLB<ul><li>ALB＝<b class=\"key\">L7</b>（パス/ホスト/ヘッダー振り分け・認証・Lambdaターゲット）</li><li>NLB＝<b class=\"key\">L4</b>（TCP/UDP・超低レイテンシ・<b class=\"key\">固定IP/EIP</b>・PrivateLink）</li><li>GWLB＝<b class=\"key\">L3</b>（セキュリティアプライアンスの透過挿入・GENEVE）</li></ul></li></ul>",
        oxIds: [],
        src: [6556,6559]
      },
    ] },
    { id: "c10-l05", title: "紛らわしいサービスの比較（後半）", pages: [
      {
        id: "c10-l05-p01",
        title: "VPCピアリング/Transit Gateway/PrivateLink ほか（接続・ID・購入・S3） ①",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>VPCピアリング vs Transit Gateway vs PrivateLink<ul><li>ピアリング＝1対1・<b class=\"key\">推移的ルーティング不可</b>・少数VPCなら安い</li><li>Transit Gateway＝ハブ＆スポークで<b class=\"key\">多数VPC＋オンプレ</b>を集約</li><li>PrivateLink＝<b class=\"key\">特定サービスだけ</b>を公開（CIDR重複OK・一方向）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>ゲートウェイエンドポイント vs インターフェイスエンドポイント<ul><li>ゲートウェイ型＝<b class=\"key\">S3とDynamoDBのみ</b>・ルートテーブルに追加・<b class=\"key\">無料</b></li><li>インターフェイス型＝多数のサービス・ENI（プライベートIP）・<b class=\"key\">時間＋データ課金</b>・オンプレからも利用可</li></ul></li></ul>",
        oxIds: [],
        src: [6560,6566]
      },
      {
        id: "c10-l05-p02",
        title: "VPCピアリング/Transit Gateway/PrivateLink ほか（接続・ID・購入・S3） ②",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Site-to-Site VPN vs Direct Connect<ul><li>VPN＝インターネット経由・<b class=\"key\">IPsec暗号化</b>・すぐ使える・安い</li><li>Direct Connect＝<b class=\"key\">専用線</b>・安定帯域/低レイテンシ・開通に時間（数週間〜）・<b class=\"key\">既定は暗号化なし</b></li></ul></li><li><span class=\"badge b-cmp\">比較</span>NAT Gateway vs NAT インスタンス<ul><li>NAT Gateway＝マネージド・AZ内で冗長・自動スケール（<b class=\"key\">AZごとに配置</b>がHA）</li><li>NAT インスタンス＝自前EC2で運用負荷大（試験では古い選択肢）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Cognito ユーザープール vs IDプール<ul><li>ユーザープール＝<b class=\"key\">認証</b>（サインアップ/サインイン・JWT発行）</li><li>IDプール＝<b class=\"key\">認可</b>（一時的なAWS認証情報を払い出す）</li></ul></li></ul>",
        oxIds: [],
        src: [6567,6575]
      },
      {
        id: "c10-l05-p03",
        title: "VPCピアリング/Transit Gateway/PrivateLink ほか（接続・ID・購入・S3） ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>SCP vs IAMポリシー vs アクセス許可の境界<ul><li>SCP＝アカウント単位の<b class=\"key\">上限</b>（権限を付与しない・管理アカウントには効かない）</li><li>IAMポリシー＝実際に<b class=\"key\">権限を付与</b></li><li>境界＝ユーザー/ロール単位の<b class=\"key\">上限</b></li><li>共通：<b class=\"key\">明示的Denyが常に優先</b></li></ul></li><li><span class=\"badge b-cmp\">比較</span>Organizations vs Control Tower<ul><li>Organizations＝アカウントの一元管理・一括請求・SCP</li><li>Control Tower＝Organizationsの上に<b class=\"key\">ランディングゾーン＋ガードレール</b>を自動構築</li></ul></li></ul>",
        oxIds: [],
        src: [6576,6583]
      },
      {
        id: "c10-l05-p04",
        title: "VPCピアリング/Transit Gateway/PrivateLink ほか（接続・ID・購入・S3） ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>リザーブドインスタンス vs Savings Plans<ul><li>RI＝インスタンスタイプ等に紐づく割引（コンバーティブルRIは交換可）</li><li>Savings Plans＝<b class=\"key\">時間あたりの利用額</b>をコミット。Compute SPは<b class=\"key\">EC2・Fargate・Lambda</b>に適用</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Dedicated Hosts vs Dedicated Instances<ul><li>Dedicated Hosts＝<b class=\"key\">物理サーバー丸ごと</b>・ソケット/コアが見える・<b class=\"key\">BYOL</b></li><li>Dedicated Instances＝専用ハードウェアだがホストの制御・可視性なし</li></ul></li></ul>",
        oxIds: [],
        src: [6584,6589]
      },
      {
        id: "c10-l05-p05",
        title: "VPCピアリング/Transit Gateway/PrivateLink ほか（接続・ID・購入・S3） ⑤",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>S3 Standard-IA vs One Zone-IA vs Glacier Instant Retrieval<ul><li>Standard-IA＝低頻度・複数AZ・最低<b class=\"key\">30日</b></li><li>One Zone-IA＝<b class=\"key\">単一AZ</b>（AZ消失でデータ喪失）・再作成可能データ向け・最低30日</li><li>Glacier IR＝さらに低頻度（四半期1回程度）・ミリ秒取り出し・最低<b class=\"key\">90日</b></li></ul></li></ul>",
        oxIds: [],
        src: [6590,6593]
      },
      {
        id: "c10-l05-p06",
        title: "VPCピアリング/Transit Gateway/PrivateLink ほか（接続・ID・購入・S3） ⑥",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Glacier Flexible Retrieval vs Deep Archive<ul><li>Flexible＝取り出し<b class=\"key\">数分〜12時間</b>・最低<b class=\"key\">90日</b></li><li>Deep Archive＝<b class=\"key\">最安</b>・取り出し<b class=\"key\">標準12時間以内／大容量48時間以内</b>・最低<b class=\"key\">180日</b></li></ul></li></ul>",
        oxIds: [],
        src: [6594,6596]
      },
      {
        id: "c10-l05-p07",
        title: "VPCピアリング/Transit Gateway/PrivateLink ほか（接続・ID・購入・S3） ⑦",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Object Lock ガバナンスモード vs コンプライアンスモード<ul><li>ガバナンス＝特別な権限があれば削除・設定変更可</li><li>コンプライアンス＝保持期間中は<b class=\"key\">rootユーザーも削除不可</b>・期間短縮不可</li></ul></li><li><span class=\"badge b-cmp\">比較</span>S3署名付きURL vs CloudFront署名付きURL/Cookie<ul><li>S3署名付きURL＝S3オブジェクトに直接・一時アクセス（アップロードにも使える）</li><li>CloudFront署名付き＝CDN経由の配信を制限。複数ファイルは<b class=\"key\">署名付きCookie</b></li></ul></li><li><span class=\"badge b-cmp\">比較</span>OAC vs OAI<ul><li>OAC＝現行推奨。<b class=\"key\">SSE-KMS暗号化オブジェクト</b>や全リージョン・動的リクエストに対応</li><li>OAI＝レガシー（新規はOACを使う）</li></ul></li></ul>",
        oxIds: [],
        src: [6597,6605]
      },
      {
        id: "c10-l05-p08",
        title: "Athena/Redshift/EMR ほか（分析・コンピュート・DR・運用） ①",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Athena vs Redshift vs EMR<ul><li>Athena＝S3に<b class=\"key\">直接SQL</b>・サーバーレス・スキャン量課金・アドホック分析</li><li>Redshift＝データをロードする<b class=\"key\">DWH</b>・定常的な複雑クエリ・BI</li><li>EMR＝Spark/Hadoopの<b class=\"key\">クラスター</b>・独自処理や細かな制御</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Glue vs EMR<ul><li>Glue＝<b class=\"key\">サーバーレスETL</b>・データカタログ（運用負荷小）</li><li>EMR＝クラスター管理が必要だが、フレームワークや設定の自由度が高い</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Lambda vs Fargate vs EC2<ul><li>Lambda＝イベント駆動・<b class=\"key\">最大15分</b>・リクエスト課金</li><li>Fargate＝コンテナ・長時間実行可・サーバー管理なし</li><li>EC2＝OSまで制御・GPUや特殊要件・ライセンス要件</li></ul></li><li><span class=\"badge b-cmp\">比較</span>ECS vs EKS<ul><li>ECS＝AWS独自のシンプルなオーケストレーション</li><li>EKS＝<b class=\"key\">Kubernetes</b>互換（既存のK8s資産・マルチクラウド移植性）</li></ul></li></ul>",
        oxIds: [],
        src: [6606,6619]
      },
      {
        id: "c10-l05-p09",
        title: "Athena/Redshift/EMR ほか（分析・コンピュート・DR・運用） ②",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Elastic Beanstalk vs CloudFormation<ul><li>Beanstalk＝アプリを置くだけの<b class=\"key\">PaaS</b>（Web/ワーカー環境）</li><li>CloudFormation＝あらゆるAWSリソースを<b class=\"key\">コードで定義</b>（IaC）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>DR 4戦略（コスト安→高、RTO長→短）<ul><li><b class=\"key\">バックアップ＆リストア → パイロットライト → ウォームスタンバイ → マルチサイト</b></li><li>パイロットライト＝コアのみ稼働（<b class=\"key\">DBは複製、サーバーは停止</b>）</li><li>ウォームスタンバイ＝<b class=\"key\">縮小版のフル環境が稼働中</b></li></ul></li></ul>",
        oxIds: [],
        src: [6620,6626]
      },
      {
        id: "c10-l05-p10",
        title: "Athena/Redshift/EMR ほか（分析・コンピュート・DR・運用） ③",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>MGN vs DMS<ul><li>MGN＝<b class=\"key\">サーバー丸ごと</b>（OS・アプリ）のリホスト</li><li>DMS＝<b class=\"key\">データベースのデータ</b>移行・継続レプリケーション</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Route 53 レイテンシー vs 位置情報 vs 地理的近接性<ul><li>レイテンシー＝<b class=\"key\">速さ</b>で選ぶ</li><li>位置情報＝ユーザーの<b class=\"key\">国・大陸</b>で決める（コンテンツの出し分け・規制）</li><li>地理的近接性＝<b class=\"key\">距離＋バイアス</b>で流量を調整</li></ul></li></ul>",
        oxIds: [],
        src: [6627,6633]
      },
      {
        id: "c10-l05-p11",
        title: "Athena/Redshift/EMR ほか（分析・コンピュート・DR・運用） ④",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>Cost Explorer vs Budgets vs CUR<ul><li>Cost Explorer＝<b class=\"key\">可視化・分析・予測</b></li><li>Budgets＝<b class=\"key\">しきい値でアラート</b>（アクション実行も可）</li><li>CUR＝<b class=\"key\">最も詳細な明細</b>をS3へ（Athena/QuickSightで分析）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>Trusted Advisor vs Compute Optimizer<ul><li>Trusted Advisor＝コスト・セキュリティ・耐障害性など<b class=\"key\">幅広いチェック</b></li><li>Compute Optimizer＝EC2/EBS/Lambda等の<b class=\"key\">ML ベースのサイズ適正化</b>に特化</li></ul></li></ul>",
        oxIds: [],
        src: [6634,6640]
      },
      {
        id: "c10-l05-p12",
        title: "Athena/Redshift/EMR ほか（分析・コンピュート・DR・運用） ⑤",
        html: "<ul><li><span class=\"badge b-cmp\">比較</span>AWS Managed Microsoft AD vs AD Connector<ul><li>Managed AD＝AWS上に<b class=\"key\">本物のAD</b>（オンプレと信頼関係も可）</li><li>AD Connector＝オンプレADへの<b class=\"key\">プロキシ</b>（ディレクトリ情報をAWSに持たない）</li></ul></li><li><span class=\"badge b-cmp\">比較</span>AWS Backup vs Data Lifecycle Manager<ul><li>AWS Backup＝<b class=\"key\">多サービス横断</b>・クロスアカウント/リージョン・Vault Lock</li><li>DLM＝<b class=\"key\">EBSスナップショット/AMI</b>の作成・保持の自動化に特化</li></ul></li></ul>",
        oxIds: [],
        src: [6641,6646]
      },
    ] },
    { id: "c10-l06", title: "修飾語の解き方と試験直前の数字", pages: [
      {
        id: "c10-l06-p01",
        title: "修飾語の大原則と、運用負荷・コスト・変更・可用性 ①",
        html: "<ul><li>大原則：まず<b class=\"key\">要件（機能・RPO/RTO・セキュリティ条件）をすべて満たす選択肢</b>に絞り、最後に修飾語で1つに決める</li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>修飾語に飛びついて要件を落とす（例：最安だが取り出し時間の要件を満たさない）</span></li></ul><h4>「運用上のオーバーヘッドが最も少ない」「管理の手間を最小限に」</h4><ul><li>方向性：<b class=\"key\">マネージド／サーバーレス／組み込み機能</b>を選ぶ。自作スクリプト・EC2自前運用は×</li><li>典型的な正解パターン<ul><li>EC2上の自前DB → <b class=\"key\">RDS / Aurora / DynamoDB</b></li><li>cron用EC2 → <b class=\"key\">EventBridge Scheduler＋Lambda</b></li><li>自作のローテーションスクリプト → <b class=\"key\">Secrets Manager 自動ローテーション</b></li><li>自作のスナップショットスクリプト → <b class=\"key\">AWS Backup / DLM</b></li></ul></li></ul>",
        oxIds: [],
        src: [6649,6658]
      },
      {
        id: "c10-l06-p02",
        title: "修飾語の大原則と、運用負荷・コスト・変更・可用性 ②",
        html: "<ul><li>EC2でKafka → <b class=\"key\">MSK</b>、EC2でETL → <b class=\"key\">Glue</b>、EC2でSFTP → <b class=\"key\">Transfer Family</b><ul><li>コンテナのEC2管理 → <b class=\"key\">Fargate</b></li><li>踏み台ホスト → <b class=\"key\">Session Manager</b></li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「Lambdaで独自に実装」は柔軟だが、同じことができる<b class=\"key\">組み込み機能</b>があればそちらが正解</span></li></ul>",
        oxIds: [],
        src: [6659,6662]
      },
      {
        id: "c10-l06-p03",
        title: "修飾語の大原則と、運用負荷・コスト・変更・可用性 ③",
        html: "<h4>「最もコスト効率が高い」「最も低コストで」</h4><ul><li>方向性：要件を満たす中で<b class=\"key\">最も安い</b>構成。過剰な冗長化・過剰性能は×</li><li>典型的な正解パターン<ul><li>中断可能な処理 → <b class=\"key\">スポット</b>／常時稼働 → <b class=\"key\">Savings Plans・RI</b></li><li>S3のアクセス頻度に応じて → <b class=\"key\">ライフサイクル</b>・<b class=\"key\">Intelligent-Tiering</b>・<b class=\"key\">Glacier系</b></li></ul></li></ul>",
        oxIds: [],
        src: [6665,6668]
      },
      {
        id: "c10-l06-p04",
        title: "修飾語の大原則と、運用負荷・コスト・変更・可用性 ④",
        html: "<ul><li>NAT経由のS3通信 → <b class=\"key\">ゲートウェイエンドポイント</b><ul><li>断続的な負荷 → <b class=\"key\">Lambda・Aurora Serverless v2・DynamoDBオンデマンド</b></li><li>再作成可能なデータ → <b class=\"key\">One Zone-IA</b></li><li>開発環境 → 夜間停止・単一AZ</li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>最安クラス（Deep Archive）でも「ミリ秒で取得」要件があれば×</span></li></ul><h4>「最小限の変更で」「アプリのコードを変更せずに」</h4><ul><li>方向性：既存アーキテクチャ・プロトコルを<b class=\"key\">そのまま活かす</b>。作り直し（リアーキテクト）は×</li><li>典型的な正解パターン<ul><li>可用性向上 → <b class=\"key\">RDS Multi-AZ を有効化</b>（エンドポイント名は変わらない）</li><li>DB接続枯渇 → <b class=\"key\">RDS Proxy</b></li></ul></li></ul>",
        oxIds: [],
        src: [6669,6679]
      },
      {
        id: "c10-l06-p05",
        title: "修飾語の大原則と、運用負荷・コスト・変更・可用性 ⑤",
        html: "<ul><li>DynamoDB高速化 → <b class=\"key\">DAX</b>（ElastiCacheはコード改修が大きい）<ul><li>既存NFS → <b class=\"key\">EFS</b>、SMB → <b class=\"key\">FSx for Windows</b>、ActiveMQ → <b class=\"key\">Amazon MQ</b>、MongoDB → <b class=\"key\">DocumentDB</b></li><li>サーバー移行 → <b class=\"key\">MGN（リホスト）</b></li></ul></li></ul>",
        oxIds: [],
        src: [6680,6682]
      },
      {
        id: "c10-l06-p06",
        title: "修飾語の大原則と、運用負荷・コスト・変更・可用性 ⑥",
        html: "<ul><li>静的IPを許可リストに登録済み → <b class=\"key\">Global Accelerator / NLB</b></li></ul><h4>「最も高い可用性」「耐障害性」「単一障害点をなくす」</h4><ul><li>方向性：<b class=\"key\">複数AZ</b>（AZ障害）→ さらに<b class=\"key\">複数リージョン</b>（リージョン障害・DR）</li></ul>",
        oxIds: [],
        src: [6683,6686]
      },
      {
        id: "c10-l06-p07",
        title: "修飾語の大原則と、運用負荷・コスト・変更・可用性 ⑦",
        html: "<ul><li>典型的な正解パターン<ul><li>EC2 → <b class=\"key\">複数AZにまたがるASG＋ELB</b></li><li>DB → <b class=\"key\">Multi-AZ</b>、リージョン障害 → <b class=\"key\">Aurora Global Database / DynamoDB グローバルテーブル</b></li><li>NAT Gateway → <b class=\"key\">AZごとに1つ</b></li><li>疎結合 → <b class=\"key\">SQS</b>で障害の波及を防ぐ</li><li>DNS → <b class=\"key\">Route 53 フェイルオーバー＋ヘルスチェック</b></li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>リードレプリカ単体は自動フェイルオーバーしない（RDS）。EBSは単一AZ</span></li></ul>",
        oxIds: [],
        src: [6687,6693]
      },
      {
        id: "c10-l06-p08",
        title: "セキュア・性能・リアルタイム・疎結合・移行・改ざん防止・既存継続 ①",
        html: "<h4>「最もセキュア」「最小権限」「インターネットを経由しない」</h4><ul><li>方向性：<b class=\"key\">IAMロール（一時認証情報）</b>、<b class=\"key\">プライベート接続</b>、<b class=\"key\">暗号化</b>、<b class=\"key\">最小権限</b></li><li>典型的な正解パターン<ul><li>アクセスキー埋込み → <b class=\"key\">IAMロール</b></li><li>インターネット経由のS3アクセス → <b class=\"key\">VPCエンドポイント</b>＋バケットポリシー</li></ul></li></ul>",
        oxIds: [],
        src: [6696,6699]
      },
      {
        id: "c10-l06-p09",
        title: "セキュア・性能・リアルタイム・疎結合・移行・改ざん防止・既存継続 ②",
        html: "<ul><li>パスワード平文 → <b class=\"key\">Secrets Manager</b><ul><li>鍵の監査が必要 → <b class=\"key\">SSE-KMS（カスタマー管理キー）</b></li><li>組織全体の禁止 → <b class=\"key\">SCP</b></li><li>転送中の暗号化 → <b class=\"key\">TLS（ACM証明書）</b>、S3は <b class=\"key\">aws:SecureTransport</b> 条件</li></ul></li><li><span class=\"trap\"><span class=\"badge b-trap\">ひっかけ</span>「セキュリティグループで0.0.0.0/0を許可」「ルートユーザーのアクセスキー作成」は常に×</span></li></ul>",
        oxIds: [],
        src: [6700,6704]
      },
      {
        id: "c10-l06-p10",
        title: "セキュア・性能・リアルタイム・疎結合・移行・改ざん防止・既存継続 ③",
        html: "<h4>「最もパフォーマンスが高い」「レイテンシを最小化」</h4><ul><li>方向性：<b class=\"key\">キャッシュ</b>・<b class=\"key\">エッジ</b>・<b class=\"key\">読み取り分散</b>・<b class=\"key\">近い場所で処理</b></li><li>典型的な正解パターン<ul><li>静的配信 → <b class=\"key\">CloudFront</b>、TCP/UDPのグローバル → <b class=\"key\">Global Accelerator</b></li></ul></li></ul>",
        oxIds: [],
        src: [6707,6709]
      },
      {
        id: "c10-l06-p11",
        title: "セキュア・性能・リアルタイム・疎結合・移行・改ざん防止・既存継続 ④",
        html: "<ul><li>DB読取り → <b class=\"key\">リードレプリカ / ElastiCache / DAX</b><ul><li>ノード間通信 → <b class=\"key\">クラスタープレイスメントグループ</b></li><li>高IOPS → <b class=\"key\">io2 Block Express</b>、一時I/O → <b class=\"key\">インスタンスストア</b></li><li>遠方からのS3アップロード → <b class=\"key\">Transfer Acceleration＋マルチパート</b></li></ul></li></ul><h4>「リアルタイム」「ニアリアルタイム」「バッチ」</h4><ul><li>「リアルタイム・ミリ秒・独自処理」→ <b class=\"key\">Kinesis Data Streams</b></li></ul>",
        oxIds: [],
        src: [6710,6716]
      },
      {
        id: "c10-l06-p12",
        title: "セキュア・性能・リアルタイム・疎結合・移行・改ざん防止・既存継続 ⑤",
        html: "<ul><li>「ニアリアルタイム（数十秒〜数分の遅延可）・S3へ格納」→ <b class=\"key\">Data Firehose</b></li><li>「夜間バッチ」→ <b class=\"key\">AWS Batch / Glue ジョブ / スポット</b></li></ul><h4>「疎結合」「スパイクを吸収」「メッセージを失わない」</h4><ul><li>方向性：<b class=\"key\">SQS</b>でバッファ、<b class=\"key\">SNS</b>でファンアウト、<b class=\"key\">EventBridge</b>でルーティング</li></ul>",
        oxIds: [],
        src: [6717,6721]
      },
      {
        id: "c10-l06-p13",
        title: "セキュア・性能・リアルタイム・疎結合・移行・改ざん防止・既存継続 ⑥",
        html: "<ul><li>「処理順序を守る」→ <b class=\"key\">SQS FIFO</b>、「再処理不能なメッセージ」→ <b class=\"key\">DLQ</b></li></ul><h4>「できるだけ早く移行」「期限が迫っている」</h4><ul><li>帯域から計算：<b class=\"key\">1Gbpsで100TBは約9日以上</b>（回線使用率100%でも）</li><li>回線で足りる → <b class=\"key\">DataSync</b>、足りない → <b class=\"key\">Snowball Edge</b></li></ul>",
        oxIds: [],
        src: [6722,6726]
      },
      {
        id: "c10-l06-p14",
        title: "セキュア・性能・リアルタイム・疎結合・移行・改ざん防止・既存継続 ⑦",
        html: "<ul><li>サーバー丸ごと → <b class=\"key\">MGN</b>、DB → <b class=\"key\">DMS</b></li></ul><h4>「改ざんできない」「削除できない」「コンプライアンスで◯年保管」</h4><ul><li><b class=\"key\">S3 Object Lock（コンプライアンスモード）</b>、<b class=\"key\">AWS Backup Vault Lock</b>、<b class=\"key\">Glacier Vault Lock</b></li><li>長期保管＋めったに取り出さない → <b class=\"key\">Glacier Deep Archive</b>＋ライフサイクル</li></ul>",
        oxIds: [],
        src: [6727,6731]
      },
      {
        id: "c10-l06-p15",
        title: "セキュア・性能・リアルタイム・疎結合・移行・改ざん防止・既存継続 ⑧",
        html: "<h4>「既存の◯◯を使い続けたい」</h4><ul><li>既存AD → <b class=\"key\">AD Connector / Managed Microsoft AD</b></li><li>既存のKubernetes → <b class=\"key\">EKS</b>、既存のKafka → <b class=\"key\">MSK</b>、既存のMQ → <b class=\"key\">Amazon MQ</b></li><li>オンプレに残すがクラウドに容量拡張 → <b class=\"key\">Storage Gateway</b></li><li>既存ライセンス（ソケット単位）→ <b class=\"key\">Dedicated Hosts</b></li></ul>",
        oxIds: [],
        src: [6734,6737]
      },
      {
        id: "c10-l06-p16",
        title: "試験直前の数字まとめ ①",
        html: "<h4>コンピュート</h4><ul><li>Lambda：最大実行時間<b class=\"key\">15分</b>、メモリ<b class=\"key\">128MB〜10,240MB</b>、/tmp最大<b class=\"key\">10GB</b></li><li>Lambda：同時実行数の既定クォータ<b class=\"key\">1,000</b>／リージョン（引上げ可）</li><li>スポット：最大<b class=\"key\">90%</b>割引、中断の<b class=\"key\">2分前</b>通知</li></ul>",
        oxIds: [],
        src: [6741,6743]
      },
      {
        id: "c10-l06-p17",
        title: "試験直前の数字まとめ ②",
        html: "<ul><li>RI・Savings Plans：最大<b class=\"key\">72%</b>割引（Compute SPは最大<b class=\"key\">66%</b>）、期間<b class=\"key\">1年 or 3年</b></li><li>分散プレイスメントグループ：1グループ・1AZあたり実行中インスタンス最大<b class=\"key\">7台</b></li><li>Auto Scaling：既定のクールダウン<b class=\"key\">300秒</b></li></ul>",
        oxIds: [],
        src: [6744,6746]
      },
      {
        id: "c10-l06-p18",
        title: "試験直前の数字まとめ ③",
        html: "<ul><li>CloudWatch：基本モニタリング<b class=\"key\">5分</b>間隔、詳細モニタリング<b class=\"key\">1分</b>間隔</li><li>API Gateway：統合タイムアウト既定<b class=\"key\">29秒</b>、既定スロットリング<b class=\"key\">10,000 rps</b>（バースト5,000）</li><li>Step Functions：Standard最大<b class=\"key\">1年</b>、Express最大<b class=\"key\">5分</b></li></ul>",
        oxIds: [],
        src: [6747,6749]
      },
      {
        id: "c10-l06-p19",
        title: "試験直前の数字まとめ ④",
        html: "<h4>ストレージ</h4><ul><li>S3：オブジェクト最大<b class=\"key\">5TB</b>、単一PUT最大<b class=\"key\">5GB</b>、マルチパートは<b class=\"key\">100MB超</b>で推奨</li><li>S3：耐久性<b class=\"key\">99.999999999%（イレブンナイン）</b></li></ul>",
        oxIds: [],
        src: [6752,6753]
      },
      {
        id: "c10-l06-p20",
        title: "試験直前の数字まとめ ⑤",
        html: "<ul><li>S3 可用性（設計値）：Standard <b class=\"key\">99.99%</b>／Standard-IA <b class=\"key\">99.9%</b>／One Zone-IA <b class=\"key\">99.5%</b></li><li>S3：プレフィックスあたり <b class=\"key\">3,500 PUT/COPY/POST/DELETE</b>・<b class=\"key\">5,500 GET/HEAD</b> リクエスト/秒</li></ul>",
        oxIds: [],
        src: [6754,6755]
      },
      {
        id: "c10-l06-p21",
        title: "試験直前の数字まとめ ⑥",
        html: "<ul><li>S3 最低保存期間：Standard-IA・One Zone-IA <b class=\"key\">30日</b>／Glacier IR・Flexible <b class=\"key\">90日</b>／Deep Archive <b class=\"key\">180日</b></li><li>S3 IA系の最小課金オブジェクトサイズ：<b class=\"key\">128KB</b></li></ul>",
        oxIds: [],
        src: [6756,6757]
      },
      {
        id: "c10-l06-p22",
        title: "試験直前の数字まとめ ⑦",
        html: "<ul><li>Glacier Flexible 取り出し：迅速<b class=\"key\">1〜5分</b>／標準<b class=\"key\">3〜5時間</b>／大容量<b class=\"key\">5〜12時間</b></li><li>Glacier Deep Archive 取り出し：標準<b class=\"key\">12時間以内</b>／大容量<b class=\"key\">48時間以内</b></li><li>S3：<b class=\"key\">強い整合性</b>（書込み直後の読み取りで最新を返す）</li></ul>",
        oxIds: [],
        src: [6758,6760]
      },
      {
        id: "c10-l06-p23",
        title: "試験直前の数字まとめ ⑧",
        html: "<ul><li>EBS gp3：ベースライン<b class=\"key\">3,000 IOPS・125MB/秒</b>（容量と独立して追加可能）</li><li>EBS io2 Block Express：最大<b class=\"key\">256,000 IOPS</b></li><li>EBS マルチアタッチ：<b class=\"key\">io1/io2</b>のみ・<b class=\"key\">同一AZ</b>・最大<b class=\"key\">16</b>インスタンス（Nitro）</li><li>EBS：<b class=\"key\">単一AZ</b>のリソース（別AZへはスナップショット経由）</li></ul>",
        oxIds: [],
        src: [6761,6764]
      },
      {
        id: "c10-l06-p24",
        title: "試験直前の数字まとめ ⑨",
        html: "<h4>データベース</h4><ul><li>RDS 自動バックアップ保持：最大<b class=\"key\">35日</b>（PITRは通常<b class=\"key\">5分前</b>程度まで）</li><li>RDS Multi-AZ（インスタンス）フェイルオーバー：通常<b class=\"key\">60〜120秒</b></li><li>RDS リードレプリカ：MySQL/MariaDB/PostgreSQLで最大<b class=\"key\">15</b></li><li>Aurora：<b class=\"key\">3AZに6コピー</b>、Auroraレプリカ最大<b class=\"key\">15</b></li></ul>",
        oxIds: [],
        src: [6767,6770]
      },
      {
        id: "c10-l06-p25",
        title: "試験直前の数字まとめ ⑩",
        html: "<ul><li>Aurora Global Database：レプリケーション遅延通常<b class=\"key\">1秒未満</b>、RPO約<b class=\"key\">1秒</b>・RTO約<b class=\"key\">1分</b></li><li>DynamoDB：項目サイズ最大<b class=\"key\">400KB</b>、PITRは最大<b class=\"key\">35日</b>前まで</li></ul>",
        oxIds: [],
        src: [6771,6772]
      },
      {
        id: "c10-l06-p26",
        title: "試験直前の数字まとめ ⑪",
        html: "<ul><li>DynamoDB：レイテンシ<b class=\"key\">1桁ミリ秒</b>、DAXで<b class=\"key\">マイクロ秒</b></li></ul><h4>アプリ統合・分析</h4><ul><li>SQS：保持期間既定<b class=\"key\">4日</b>（<b class=\"key\">1分〜14日</b>）</li></ul>",
        oxIds: [],
        src: [6773,6776]
      },
      {
        id: "c10-l06-p27",
        title: "試験直前の数字まとめ ⑫",
        html: "<ul><li>SQS：可視性タイムアウト既定<b class=\"key\">30秒</b>・最大<b class=\"key\">12時間</b>、ロングポーリング最大<b class=\"key\">20秒</b>、遅延キュー最大<b class=\"key\">15分</b></li><li>SQS FIFO：<b class=\"key\">300</b>メッセージ/秒（バッチで<b class=\"key\">3,000</b>。高スループットモードでさらに上）</li></ul>",
        oxIds: [],
        src: [6777,6778]
      },
      {
        id: "c10-l06-p28",
        title: "試験直前の数字まとめ ⑬",
        html: "<ul><li>Kinesis Data Streams：保持期間既定<b class=\"key\">24時間</b>・最大<b class=\"key\">365日</b></li><li>Kinesis シャード：書込み<b class=\"key\">1MB/秒 or 1,000レコード/秒</b>、読取り<b class=\"key\">2MB/秒</b></li><li>Athena：<b class=\"key\">スキャンしたデータ量</b>で課金 → 列指向（Parquet）・パーティション・圧縮で削減</li></ul>",
        oxIds: [],
        src: [6779,6781]
      },
      {
        id: "c10-l06-p29",
        title: "試験直前の数字まとめ ⑭",
        html: "<h4>ネットワーク・セキュリティ・運用</h4><ul><li>VPC：CIDRは <b class=\"key\">/16〜/28</b>、各サブネットで<b class=\"key\">5個</b>のIPがAWS予約</li><li>Global Accelerator：<b class=\"key\">静的エニーキャストIP 2つ</b></li><li>Gateway Load Balancer：<b class=\"key\">GENEVE（ポート6081）</b></li><li>CloudFront用ACM証明書：<b class=\"key\">us-east-1（バージニア北部）</b></li></ul>",
        oxIds: [],
        src: [6784,6787]
      },
      {
        id: "c10-l06-p30",
        title: "試験直前の数字まとめ ⑮",
        html: "<ul><li>Shield Advanced：月額<b class=\"key\">3,000 USD</b>（組織単位）・<b class=\"key\">1年</b>コミット</li><li>CloudTrail：イベント履歴（管理イベント）は<b class=\"key\">90日</b>無料で閲覧。長期保存は証跡でS3へ</li><li>KMS：カスタマー管理キーの自動ローテーションは任意（既定<b class=\"key\">1年</b>ごと、期間は変更可）</li><li>DR の目安：RPO＝<b class=\"key\">どれだけのデータ損失を許容</b>、RTO＝<b class=\"key\">どれだけの停止時間を許容</b></li></ul>",
        oxIds: [],
        src: [6788,6791]
      },
    ] },
  ],
  ox: [
  ],
  mc: []
});
window.DATA.chapters.find(c => c.no === 10).mc.push(
  {
    id: "c10-mc-01",
    stem: "ある企業は静的Webサイトを S3 バケットに置き、CloudFront で世界に配信している。<br>要件：ユーザーが S3 のURLに直接アクセスすることを禁止し、CloudFront 経由のみ許可したい<br>オブジェクトは SSE-KMS で暗号化されている。最も適切な方法はどれか",
    choices: [
      "S3 バケットを公開し、CloudFront の地理的制限を有効にする",
      "Origin Access Control（OAC）を設定し、バケットポリシーで CloudFront ディストリビューションのみを許可する",
      "S3 署名付きURLを生成してすべてのユーザーに配布する",
      "S3 バケットに AWS WAF を直接関連付けて CloudFront のIPのみ許可する"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 1,
    choiceExplain: [
      {"ok":false,"text":"地理的制限は国単位の制御。S3への直接アクセスは防げない"},
      {"ok":true,"text":"OAC＋バケットポリシーでCloudFrontのみ許可。OACは<b class=\"key\">SSE-KMS</b>にも対応"},
      {"ok":false,"text":"署名付きURLは個別の一時共有用。CloudFront経由の強制にならない"},
      {"ok":false,"text":"WAFはS3バケットに直接関連付けられない（CloudFront/ALB/API Gateway等）"}
    ],
    tip: "「CloudFront経由のみ」→ <b class=\"key\">OAC</b>（旧OAIより新しく、KMS対応）",
    src: 6796
  },
  {
    id: "c10-mc-02",
    stem: "プライベートサブネットの EC2 が S3 バケットに大量のデータを書き込む。<br>現在は NAT Gateway 経由。セキュリティ部門は「通信がインターネットを経由しないこと」と<br>「そのバケットへは当該VPCからのアクセスのみ許可すること」を求めている。満たす組合せはどれか（2つ）",
    choices: [
      "VPC に S3 用のゲートウェイ VPC エンドポイントを作成し、ルートテーブルに関連付ける",
      "バケットポリシーで aws:SourceVpce 条件を使い、そのエンドポイント以外からのアクセスを拒否する",
      "NAT Gateway をパブリックサブネットから別AZに移動する",
      "EC2 のセキュリティグループで S3 のパブリックIP範囲へのアウトバウンドを拒否する",
      "S3 Transfer Acceleration を有効にする"
    ],
    answer: ["A","B"],
    selectCount: 2,
    domain: 1,
    choiceExplain: [
      {"ok":true,"text":"ゲートウェイエンドポイントでAWSネットワーク内の経路になる（無料）"},
      {"ok":true,"text":"<b class=\"key\">aws:SourceVpce</b>条件で、指定エンドポイント経由以外を拒否できる"},
      {"ok":false,"text":"NAT Gatewayの場所を変えてもインターネット経由のまま"},
      {"ok":false,"text":"SGに拒否ルールはない（許可のみ）"},
      {"ok":false,"text":"Transfer Accelerationはエッジ経由の高速化で、要件と無関係"}
    ],
    tip: "「インターネットを経由せずS3」→ <b class=\"key\">ゲートウェイエンドポイント</b>＋<b class=\"key\">バケットポリシー</b>がセット",
    src: 6810
  },
  {
    id: "c10-mc-03",
    stem: "ある企業は AWS Organizations で50アカウントを管理している。<br>要件：全メンバーアカウントで、どのIAMユーザー・ロールであっても CloudTrail の停止・削除をできなくしたい<br>今後追加されるアカウントにも自動で適用したい。最も運用負荷の少ない方法はどれか",
    choices: [
      "各アカウントのIAMポリシーに cloudtrail:StopLogging を拒否する文を追加する",
      "ルートOUに cloudtrail:StopLogging と cloudtrail:DeleteTrail を拒否するSCPをアタッチする",
      "AWS Config ルールで CloudTrail の停止を検知し、メールで通知する",
      "GuardDuty を有効化して CloudTrail の停止を検知する"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 1,
    choiceExplain: [
      {"ok":false,"text":"アカウントごとの手作業。管理者がポリシー自体を外せる"},
      {"ok":true,"text":"SCPはOU配下の全アカウント（<b class=\"key\">新規も含む</b>）の権限上限を制限し、ルートユーザーにも効く"},
      {"ok":false,"text":"検知・通知だけで「できなくする」要件を満たさない"},
      {"ok":false,"text":"GuardDutyは脅威検知で、操作を防止しない"}
    ],
    tip: "「組織全体で<b class=\"key\">禁止</b>」→ <b class=\"key\">SCP</b>。検知系（Config/GuardDuty）は「防止」にならない",
    src: 6826
  },
  {
    id: "c10-mc-04",
    stem: "モバイルアプリ開発チームは、ユーザーが Google アカウントでサインインし、<br>自分の写真を S3 に直接アップロードできるようにしたい。アプリに長期のアクセスキーを埋め込んではならない<br>サーバー管理は最小限にしたい。最も適切な構成はどれか",
    choices: [
      "IAMユーザーをアプリ利用者ごとに作成し、アクセスキーをアプリに配布する",
      "Cognito ユーザープールでソーシャルサインインを行い、Cognito IDプールで一時的なAWS認証情報を取得する",
      "EC2 上に認証サーバーを構築し、S3 へのアップロードをすべてプロキシする",
      "IAM Identity Center にユーザーを登録し、アプリから許可セットを引き受ける"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 1,
    choiceExplain: [
      {"ok":false,"text":"長期アクセスキーの配布はセキュリティ上NG・大量ユーザーに不向き"},
      {"ok":true,"text":"ユーザープール＝<b class=\"key\">認証</b>、IDプール＝<b class=\"key\">一時認証情報（認可）</b>の定番構成"},
      {"ok":false,"text":"運用負荷が大きく、スケールも自前"},
      {"ok":false,"text":"Identity Centerは従業員のAWSアカウント／業務アプリへのSSO用。一般消費者向けアプリではない"}
    ],
    tip: "「アプリのエンドユーザー＋AWSリソースへ直接」→ <b class=\"key\">Cognito（ユーザープール＋IDプール）</b>",
    src: 6840
  },
  {
    id: "c10-mc-05",
    stem: "ある医療系企業は、数百の S3 バケットに保存されたファイルの中に、<br>誤って個人情報（氏名・クレジットカード番号等）が含まれていないかを継続的に自動検出したい<br>最も運用負荷の少ないサービスはどれか",
    choices: [
      "Amazon Inspector",
      "Amazon GuardDuty",
      "Amazon Macie",
      "AWS Config"
    ],
    answer: ["C"],
    selectCount: 1,
    domain: 1,
    choiceExplain: [
      {"ok":false,"text":"Inspectorは EC2・ECR・Lambda の<b class=\"key\">脆弱性</b>スキャン"},
      {"ok":false,"text":"GuardDutyは不審な<b class=\"key\">挙動</b>の検知（S3保護はあるがデータ内容の機密分類ではない）"},
      {"ok":true,"text":"Macieは機械学習とパターンマッチで S3 内の<b class=\"key\">機密データ（PII）</b>を発見"},
      {"ok":false,"text":"Configは設定の準拠評価で、オブジェクトの中身は見ない"}
    ],
    tip: "「S3」＋「個人情報・機密データ」→ <b class=\"key\">Macie</b>",
    src: 6854
  },
  {
    id: "c10-mc-06",
    stem: "ALB の背後で稼働する EC2 上のWebアプリに対し、SQLインジェクション攻撃が<br>観測された。アプリのコードを変更せずに、早急に防御したい。最も適切なものはどれか",
    choices: [
      "ALB に AWS WAF のWeb ACLを関連付け、SQLインジェクション対策のマネージドルールを有効化する",
      "Shield Advanced をサブスクライブする",
      "ネットワークACLで攻撃元IPをすべて拒否する",
      "Amazon Inspector でEC2をスキャンする"
    ],
    answer: ["A"],
    selectCount: 1,
    domain: 1,
    choiceExplain: [
      {"ok":true,"text":"WAFは<b class=\"key\">L7</b>でSQLi・XSSを検査・ブロック。マネージドルールで即時適用可能"},
      {"ok":false,"text":"Shield AdvancedはDDoS対策が主目的。SQLiの検査はWAFの役割"},
      {"ok":false,"text":"攻撃元IPは変わり得る。NACLはL3/L4でSQLの中身を見られない"},
      {"ok":false,"text":"Inspectorは脆弱性の発見で、攻撃をブロックしない"}
    ],
    tip: "「SQLインジェクション・XSS」→ <b class=\"key\">WAF</b>、「DDoS」→ <b class=\"key\">Shield</b>",
    src: 6868
  },
  {
    id: "c10-mc-07",
    stem: "ある企業は S3 に保存する機密データを暗号化したい。要件は以下のとおり<br>暗号鍵の使用履歴を監査できること／鍵の利用を許可するユーザーを鍵ポリシーで制御できること<br>鍵は毎年自動でローテーションされること／運用負荷は最小限にすること",
    choices: [
      "SSE-S3 を使用する",
      "SSE-KMS（カスタマー管理キー）を使用し、自動ローテーションを有効化する",
      "SSE-C を使用し、鍵をオンプレミスで管理する",
      "CloudHSM クラスターを構築し、アプリでクライアント側暗号化を行う"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 1,
    choiceExplain: [
      {"ok":false,"text":"SSE-S3は鍵ポリシーでの利用者制御や鍵単位の監査ができない"},
      {"ok":true,"text":"<b class=\"key\">カスタマー管理キー</b>は鍵ポリシーで制御、CloudTrailで使用を監査、自動ローテーション可"},
      {"ok":false,"text":"SSE-Cは鍵管理・ローテーションを顧客が自前で行う（運用負荷大）"},
      {"ok":false,"text":"専用HSMの運用とアプリ改修が必要で過剰"}
    ],
    tip: "「監査」「鍵ポリシー」「自動ローテーション」→ <b class=\"key\">SSE-KMS＋カスタマー管理キー</b>",
    src: 6881
  },
  {
    id: "c10-mc-08",
    stem: "運用チームはプライベートサブネットの数百台のEC2にシェルでログインして作業する。<br>現在は踏み台ホスト経由のSSH（22番ポート）。セキュリティ部門は、インバウンドポートを一切開けず、<br>全操作のログを残すことを求めている。最も適切なものはどれか",
    choices: [
      "踏み台ホストをAuto Scalingで冗長化し、SSHの送信元IPを制限する",
      "Systems Manager Session Manager を使い、セッションログを CloudWatch Logs / S3 に保存する",
      "EC2 Instance Connect を使い、パブリックIPを付与する",
      "Site-to-Site VPN を構築し、オンプレミスから直接SSHする"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 1,
    choiceExplain: [
      {"ok":false,"text":"22番ポートを開けたまま。踏み台の運用も残る"},
      {"ok":true,"text":"SSMエージェントが<b class=\"key\">アウトバウンド</b>で接続するため<b class=\"key\">インバウンドポート不要</b>。操作ログを保存可能"},
      {"ok":false,"text":"パブリックIPの付与やSSHポート開放が必要になり要件違反"},
      {"ok":false,"text":"SSH（22番）の開放が必要"}
    ],
    tip: "「ポートを開けない」「踏み台不要」「操作ログ」→ <b class=\"key\">Session Manager</b>",
    src: 6895
  },
  {
    id: "c10-mc-09",
    stem: "EC2 上のアプリが単一AZの RDS for MySQL を使っている。<br>AZ障害時でもDBが数分以内に自動で復旧するようにしたい。アプリの変更は最小限にしたい<br>最も適切なものはどれか",
    choices: [
      "別AZにリードレプリカを作成し、障害時に手動で昇格する",
      "RDS の Multi-AZ 配置を有効化する",
      "1時間ごとにスナップショットを取得し、障害時に別AZで復元する",
      "DBを DynamoDB に移行する"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 2,
    choiceExplain: [
      {"ok":false,"text":"昇格は手動。エンドポイントも変わるためアプリ変更が必要"},
      {"ok":true,"text":"同期レプリケーションのスタンバイへ<b class=\"key\">自動フェイルオーバー</b>。<b class=\"key\">DNS名は変わらない</b>"},
      {"ok":false,"text":"復元に時間がかかり、最大1時間分のデータを失う"},
      {"ok":false,"text":"スキーマ・コードの全面改修が必要"}
    ],
    tip: "「AZ障害」「自動」「変更最小」→ <b class=\"key\">Multi-AZ</b>。読み取り性能ならリードレプリカ",
    src: 6909
  },
  {
    id: "c10-mc-10",
    stem: "EC2 上のWeb層が注文を受け付け、同じインスタンス上で決済・在庫処理をしている<br>セール時のアクセス急増で処理が追いつかず、注文が失われている<br>注文を失わず、負荷に応じて処理能力を自動で増減したい。満たす組合せはどれか（2つ）",
    choices: [
      "Web層と処理層の間に SQS キューを置き、Web層は注文をキューに送信する",
      "処理層を Auto Scaling グループにし、キューのインスタンスあたりバックログでスケーリングする",
      "Web層のインスタンスタイプを最大サイズに変更する",
      "注文データを Amazon SNS トピックに発行し、処理層はトピックをポーリングする",
      "処理層を単一の大型インスタンスにして、クラスタープレイスメントグループに配置する"
    ],
    answer: ["A","B"],
    selectCount: 2,
    domain: 2,
    choiceExplain: [
      {"ok":true,"text":"SQSが注文を<b class=\"key\">永続的にバッファ</b>し、スパイクを吸収（疎結合）"},
      {"ok":true,"text":"キューの滞留量に応じてワーカーを増減するのが定石"},
      {"ok":false,"text":"垂直スケールには限界があり、単一障害点も残る"},
      {"ok":false,"text":"SNSはプッシュ型で保持しない。ポーリングする仕組みではない"},
      {"ok":false,"text":"単一インスタンスは自動増減しない・単一障害点"}
    ],
    tip: "「注文を失わない」「スパイク」→ <b class=\"key\">SQS</b>＋<b class=\"key\">バックログでASG</b>",
    src: 6923
  },
  {
    id: "c10-mc-11",
    stem: "グローバルEC事業者が Aurora MySQL を使っている。リージョン全体の障害に備え、<br>RPO は約1秒、RTO は約1分を求めている。他リージョンからの読み取りも低レイテンシにしたい<br>最も適切なものはどれか",
    choices: [
      "同一リージョン内に Aurora レプリカを15台追加する",
      "Aurora Global Database を構成し、セカンダリリージョンを追加する",
      "日次の自動スナップショットを別リージョンへコピーする",
      "AWS DMS で別リージョンの RDS for MySQL へ継続レプリケーションする"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 2,
    choiceExplain: [
      {"ok":false,"text":"同一リージョン内ではリージョン障害に対応できない"},
      {"ok":true,"text":"ストレージレベルの複製で遅延は通常<b class=\"key\">1秒未満</b>、セカンダリの昇格は<b class=\"key\">約1分</b>"},
      {"ok":false,"text":"RPOが最大24時間、復元に時間がかかる"},
      {"ok":false,"text":"運用負荷が高く、RPO/RTO約1秒/1分の保証は難しい"}
    ],
    tip: "「Aurora」＋「リージョン障害」＋「RPO秒単位」→ <b class=\"key\">Aurora Global Database</b>",
    src: 6939
  },
  {
    id: "c10-mc-12",
    stem: "ある企業のWebサイトは ALB＋EC2 で稼働している。障害時には、<br>S3 でホストした「メンテナンス中」の静的ページを自動で表示したい。最も適切なものはどれか",
    choices: [
      "Route 53 の加重ルーティングで ALB と S3 に 50% ずつ振り分ける",
      "Route 53 のフェイルオーバールーティングで ALB をプライマリ（ヘルスチェック付き）、S3 をセカンダリにする",
      "Route 53 のレイテンシーベースルーティングを設定する",
      "ALB のリスナールールで S3 バケットにリダイレクトする"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 2,
    choiceExplain: [
      {"ok":false,"text":"正常時も半分がメンテナンスページになる"},
      {"ok":true,"text":"ヘルスチェック失敗時に<b class=\"key\">自動でセカンダリ</b>へ切り替わる"},
      {"ok":false,"text":"速さで振り分けるもので、障害切替が目的ではない"},
      {"ok":false,"text":"ALB自体やEC2の障害時の自動切替にならない"}
    ],
    tip: "「障害時に自動で別サイトへ」→ <b class=\"key\">フェイルオーバールーティング＋ヘルスチェック</b>",
    src: 6953
  },
  {
    id: "c10-mc-13",
    stem: "金融取引システムでは、同一口座の取引メッセージを必ず送信順に1回だけ処理する必要がある<br>異なる口座の取引は並列に処理してスループットを確保したい。最も適切なものはどれか",
    choices: [
      "SQS 標準キューを使い、コンシューマ側でタイムスタンプ順に並べ替える",
      "SQS FIFO キューを使い、口座IDをメッセージグループIDに設定する",
      "SNS 標準トピックで複数の SQS にファンアウトする",
      "Kinesis Data Firehose で S3 に配信する"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 2,
    choiceExplain: [
      {"ok":false,"text":"標準キューは<b class=\"key\">少なくとも1回</b>配信で重複があり得る。並べ替えの自作も負荷大"},
      {"ok":true,"text":"FIFOは<b class=\"key\">順序保証・重複排除</b>。<b class=\"key\">メッセージグループID</b>ごとに順序を保ち、グループ間は並列処理"},
      {"ok":false,"text":"SNS標準トピックは順序保証なし"},
      {"ok":false,"text":"Firehoseは配信サービスで、順序付きの1回処理の仕組みではない"}
    ],
    tip: "「順序」「1回だけ」→ <b class=\"key\">FIFO</b>、「一部だけ順序・他は並列」→ <b class=\"key\">メッセージグループID</b>",
    src: 6966
  },
  {
    id: "c10-mc-14",
    stem: "ある企業はオンプレミスのファイルサーバーとDBのDR先として AWS を使いたい<br>要件：RTO 24時間・RPO 24時間で十分。DR環境の平常時コストは最小にしたい<br>最も適切なDR戦略はどれか",
    choices: [
      "マルチサイト（アクティブ/アクティブ）",
      "ウォームスタンバイ",
      "パイロットライト",
      "バックアップ＆リストア（AWS Backup 等で日次バックアップを AWS に保存）"
    ],
    answer: ["D"],
    selectCount: 1,
    domain: 2,
    choiceExplain: [
      {"ok":false,"text":"RTOほぼゼロ向け。最も高コスト"},
      {"ok":false,"text":"縮小版環境が常時稼働しコストがかかる"},
      {"ok":false,"text":"DBの常時複製のコストがかかる。RTO/RPO 24時間には過剰"},
      {"ok":true,"text":"平常時はバックアップ保管費のみ。RTO/RPOが時間〜日単位なら最安"}
    ],
    tip: "DR戦略は<b class=\"key\">RTO/RPOの許容度</b>で選ぶ。緩い要件＋最安 → <b class=\"key\">バックアップ＆リストア</b>",
    src: 6979
  },
  {
    id: "c10-mc-15",
    stem: "EC2 上のWebアプリ（1台・単一AZ）と RDS for PostgreSQL（シングルAZ）で<br>構成されたシステムがある。単一障害点を排除し、AZ障害でも稼働を続けられるようにしたい<br>満たす組合せはどれか（2つ）",
    choices: [
      "2つ以上のAZにまたがる Auto Scaling グループで EC2 を起動し、ALB の背後に置く",
      "RDS を Multi-AZ 配置に変更する",
      "EC2 を大きなインスタンスタイプに変更する",
      "同じAZに RDS のリードレプリカを作成する",
      "EC2 をクラスタープレイスメントグループに配置する"
    ],
    answer: ["A","B"],
    selectCount: 2,
    domain: 2,
    choiceExplain: [
      {"ok":true,"text":"複数AZのASG＋ALBで、Web層のAZ障害に耐える"},
      {"ok":true,"text":"DB層のAZ障害時に自動フェイルオーバー"},
      {"ok":false,"text":"サイズを上げても単一障害点のまま"},
      {"ok":false,"text":"同一AZではAZ障害に耐えられず、自動フェイルオーバーもしない"},
      {"ok":false,"text":"クラスタープレイスメントグループは<b class=\"key\">単一AZ</b>で低レイテンシ用。可用性は下がる"}
    ],
    tip: "「AZ障害でも稼働」→ 各層を<b class=\"key\">マルチAZ化</b>（Web＝ASG＋ELB、DB＝Multi-AZ）",
    src: 6993
  },
  {
    id: "c10-mc-16",
    stem: "ゲームのリーダーボードとセッション情報を DynamoDB に保存している<br>読み取りが非常に多く、一部の項目に読み取りが集中している。読み取りレイテンシをマイクロ秒単位にしたい<br>アプリのコード変更は最小限にしたい。最も適切なものはどれか",
    choices: [
      "DynamoDB Accelerator（DAX）クラスターを導入する",
      "ElastiCache for Memcached を導入し、アプリにキャッシュロジックを実装する",
      "DynamoDB のプロビジョンド読み込みキャパシティを2倍にする",
      "DynamoDB グローバルテーブルを有効化する"
    ],
    answer: ["A"],
    selectCount: 1,
    domain: 3,
    choiceExplain: [
      {"ok":true,"text":"DAXは DynamoDB 専用のインメモリキャッシュ。<b class=\"key\">APIほぼ互換</b>でコード変更最小、<b class=\"key\">マイクロ秒</b>の読み取り"},
      {"ok":false,"text":"キャッシュロジックの実装が必要（コード変更大）"},
      {"ok":false,"text":"スループットは上がるがレイテンシは1桁ミリ秒のまま"},
      {"ok":false,"text":"マルチリージョン複製で、同一リージョン内の読み取りレイテンシ改善策ではない"}
    ],
    tip: "「DynamoDB」＋「マイクロ秒」→ <b class=\"key\">DAX</b>",
    src: 7009
  },
  {
    id: "c10-mc-17",
    stem: "世界各地の拠点から、us-east-1 の S3 バケットへ数GBの動画ファイルを<br>アップロードしている。遠方拠点からのアップロードが遅く、ネットワーク断で最初からやり直しになることがある<br>改善策として適切なものはどれか（2つ）",
    choices: [
      "S3 Transfer Acceleration を有効にし、高速化エンドポイントでアップロードする",
      "マルチパートアップロードを使用する",
      "Global Accelerator のエンドポイントに S3 バケットを直接登録する",
      "バケットのストレージクラスを S3 Standard-IA に変更する",
      "S3 バケットのバージョニングを有効にする"
    ],
    answer: ["A","B"],
    selectCount: 2,
    domain: 3,
    choiceExplain: [
      {"ok":true,"text":"最寄りのエッジから AWS バックボーン経由で転送し、遠距離アップロードを高速化"},
      {"ok":true,"text":"パートを<b class=\"key\">並列</b>転送でき、失敗した<b class=\"key\">パートだけ再送</b>できる"},
      {"ok":false,"text":"Global Acceleratorのエンドポイントは ALB/NLB/EC2/EIP。S3バケットを直接登録できない"},
      {"ok":false,"text":"ストレージクラスは転送性能に関係しない"},
      {"ok":false,"text":"バージョニングは誤削除対策で、転送性能は変わらない"}
    ],
    tip: "「遠方からS3へアップロード」→ <b class=\"key\">Transfer Acceleration</b>、「大容量・再送」→ <b class=\"key\">マルチパート</b>",
    src: 7023
  },
  {
    id: "c10-mc-18",
    stem: "オンラインゲーム会社は、UDP を使うゲームサーバーを複数リージョンの NLB の背後で運用している<br>世界中のプレイヤーの遅延とジッターを減らしたい。また、企業ユーザーのファイアウォールに登録するため、<br>固定のIPアドレスが必要である。最も適切なものはどれか",
    choices: [
      "Amazon CloudFront ディストリビューションを作成する",
      "AWS Global Accelerator を作成し、各リージョンの NLB をエンドポイントにする",
      "Route 53 のレイテンシーベースルーティングを設定する",
      "各リージョンの NLB に Elastic IP を割り当て、すべてのIPを登録してもらう"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 3,
    choiceExplain: [
      {"ok":false,"text":"CloudFrontはHTTP(S)向けで、<b class=\"key\">UDP</b>のゲームトラフィックには使えない"},
      {"ok":true,"text":"<b class=\"key\">静的エニーキャストIP 2つ</b>で、最寄りエッジからAWS網経由。UDP対応・リージョン切替も高速"},
      {"ok":false,"text":"DNSでの振り分けのみで、経路はインターネット。固定IPの要件も満たしにくい"},
      {"ok":false,"text":"IPが多数になり管理が煩雑。経路の高速化にもならない"}
    ],
    tip: "「UDP」「固定IP」「グローバル」→ <b class=\"key\">Global Accelerator</b>",
    src: 7039
  },
  {
    id: "c10-mc-19",
    stem: "研究機関は、ノード間で密に通信する数値流体シミュレーション（HPC）を EC2 で実行する<br>ノード間のネットワークレイテンシを最小化し、スループットを最大化したい。最も適切なものはどれか",
    choices: [
      "分散（スプレッド）プレイスメントグループに配置する",
      "パーティションプレイスメントグループに配置する",
      "単一AZのクラスタープレイスメントグループに配置し、EFA 対応インスタンスを使う",
      "複数AZにまたがる Auto Scaling グループで起動する"
    ],
    answer: ["C"],
    selectCount: 1,
    domain: 3,
    choiceExplain: [
      {"ok":false,"text":"スプレッドは別ハードウェアに分散して<b class=\"key\">障害の影響を減らす</b>ためのもの"},
      {"ok":false,"text":"パーティションはHadoop等の<b class=\"key\">ラック単位の障害分離</b>用"},
      {"ok":true,"text":"クラスターは同一AZ内で近接配置し<b class=\"key\">低レイテンシ・高帯域</b>。EFAでさらに高速化"},
      {"ok":false,"text":"AZ間通信はレイテンシが増える"}
    ],
    tip: "「HPC」「ノード間低レイテンシ」→ <b class=\"key\">クラスタープレイスメントグループ</b>",
    src: 7053
  },
  {
    id: "c10-mc-20",
    stem: "ある企業は S3 に日付ごとのCSVログ（数TB）を保存し、Athena で分析している<br>クエリが遅く、料金も高い。多くのクエリは特定の日付範囲の、一部の列だけを対象にしている<br>クエリ性能を上げつつコストを下げる方法として適切なものはどれか（2つ）",
    choices: [
      "データを Apache Parquet などの列指向形式に変換し、圧縮する",
      "データを日付でパーティション分割し、クエリでパーティション条件を指定する",
      "S3 バケットのストレージクラスを S3 Glacier Flexible Retrieval に変更する",
      "S3 バケットのバージョニングを有効化する",
      "Athena のクエリ結果を CloudFront でキャッシュする"
    ],
    answer: ["A","B"],
    selectCount: 2,
    domain: 3,
    choiceExplain: [
      {"ok":true,"text":"列指向なら<b class=\"key\">必要な列だけ</b>読み、圧縮でスキャン量がさらに減る"},
      {"ok":true,"text":"パーティションで<b class=\"key\">対象日付以外を読まない</b>"},
      {"ok":false,"text":"Glacier Flexible Retrieval のデータはAthenaで直接クエリできず、取り出しが必要"},
      {"ok":false,"text":"バージョニングはスキャン量に関係しない"},
      {"ok":false,"text":"Athenaの性能・課金（スキャン量）改善策ではない"}
    ],
    tip: "Athenaは<b class=\"key\">スキャン量課金</b> → 「列指向・パーティション・圧縮」で<b class=\"key\">読む量を減らす</b>",
    src: 7066
  },
  {
    id: "c10-mc-21",
    stem: "ある企業は Lambda 関数から RDS for MySQL に接続している。トラフィック急増時に<br>Lambda の同時実行数が増えると「Too many connections」エラーが発生する<br>アプリのコード変更を最小限にして解決したい。最も適切なものはどれか",
    choices: [
      "RDS のインスタンスサイズを最大にする",
      "RDS Proxy を作成し、Lambda の接続先をプロキシのエンドポイントに変更する",
      "Lambda の予約同時実行数を1に設定する",
      "DB を DynamoDB に移行する"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 3,
    choiceExplain: [
      {"ok":false,"text":"最大接続数は増えるがコスト増で根本解決にならない"},
      {"ok":true,"text":"RDS Proxyが<b class=\"key\">接続をプール・共有</b>し、DBへの接続数を抑える。接続先変更のみ"},
      {"ok":false,"text":"同時実行1では処理が詰まりスループットが極端に下がる"},
      {"ok":false,"text":"全面的な改修が必要"}
    ],
    tip: "「Lambda＋RDS」「接続数」→ <b class=\"key\">RDS Proxy</b>",
    src: 7082
  },
  {
    id: "c10-mc-22",
    stem: "ある企業は今後3年間、24時間稼働のワークロードを EC2 で運用する予定である<br>途中でインスタンスファミリーの変更や、一部を ECS on Fargate へ移行する計画がある<br>柔軟性を保ちつつコストを最も削減できるものはどれか",
    choices: [
      "3年のスタンダードリザーブドインスタンスを購入する",
      "3年の Compute Savings Plans を購入する",
      "スポットインスタンスで運用する",
      "オンデマンドキャパシティ予約を作成する"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 4,
    choiceExplain: [
      {"ok":false,"text":"スタンダードRIはファミリー変更不可、Fargateには適用されない"},
      {"ok":true,"text":"Compute SPは<b class=\"key\">ファミリー・サイズ・リージョン・OS</b>を問わず、<b class=\"key\">Fargate・Lambda</b>にも適用"},
      {"ok":false,"text":"24時間止められないワークロードには中断リスクがある"},
      {"ok":false,"text":"キャパシティ確保のみで割引はない"}
    ],
    tip: "「長期安定稼働」＋「Fargate/Lambdaにも」「変更の柔軟性」→ <b class=\"key\">Compute Savings Plans</b>",
    src: 7096
  },
  {
    id: "c10-mc-23",
    stem: "メディア企業は、毎晩数千本の動画を変換するバッチ処理を実行している<br>処理はステートレスで、途中で中断されても再実行でき、翌朝までに終わればよい<br>最もコスト効率の高いコンピューティングはどれか",
    choices: [
      "オンデマンドインスタンス",
      "1年のリザーブドインスタンス",
      "スポットインスタンス（複数のインスタンスタイプを指定）",
      "Dedicated Hosts"
    ],
    answer: ["C"],
    selectCount: 1,
    domain: 4,
    choiceExplain: [
      {"ok":false,"text":"要件は満たすが最安ではない"},
      {"ok":false,"text":"夜間だけの利用で常時分の料金を払うことになり非効率"},
      {"ok":true,"text":"最大<b class=\"key\">90%</b>割引。中断可能・期限に余裕があるバッチに最適。複数タイプ指定で中断リスクを分散"},
      {"ok":false,"text":"ライセンス要件がないのに専有ハードウェアは高額"}
    ],
    tip: "「中断されてもよい」「ステートレス」「バッチ」→ <b class=\"key\">スポット</b>",
    src: 7110
  },
  {
    id: "c10-mc-24",
    stem: "あるデータ分析チームは S3 に数百TBのデータを保存している<br>オブジェクトごとのアクセスパターンは予測できず、頻繁にアクセスされるものと何か月も使われないものが混在する<br>取り出しは常にミリ秒で行える必要がある。運用負荷を増やさずストレージコストを下げたい。最も適切なものはどれか",
    choices: [
      "すべてのオブジェクトを S3 Standard-IA に移行する",
      "S3 Intelligent-Tiering を使用する",
      "30日後に S3 Glacier Deep Archive へ移行するライフサイクルルールを設定する",
      "すべてのオブジェクトを S3 One Zone-IA に移行する"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 4,
    choiceExplain: [
      {"ok":false,"text":"頻繁にアクセスされるデータは取り出し料金がかさむ"},
      {"ok":true,"text":"アクセス状況を監視し自動で階層を移動。<b class=\"key\">取り出し料金なし</b>、既定の階層はミリ秒アクセス"},
      {"ok":false,"text":"Deep Archiveの取り出しは<b class=\"key\">12時間以内</b>で要件違反"},
      {"ok":false,"text":"単一AZで耐久性が下がる。頻繁アクセス分の取り出し料金も発生"}
    ],
    tip: "「アクセスパターン不明・予測不能」→ <b class=\"key\">Intelligent-Tiering</b>",
    src: 7124
  },
  {
    id: "c10-mc-25",
    stem: "プライベートサブネットの EC2 群が、毎日数十TBのデータを同一リージョンの S3 と<br>やり取りしている。請求書を確認すると NAT Gateway のデータ処理料金が大きな割合を占めていた<br>機能を変えずにコストを最も削減できるものはどれか",
    choices: [
      "NAT Gateway を NAT インスタンスに置き換える",
      "S3 用のゲートウェイ VPC エンドポイントを作成し、ルートテーブルに追加する",
      "S3 用のインターフェイス VPC エンドポイントを各AZに作成する",
      "EC2 をパブリックサブネットに移動してパブリックIPを付与する"
    ],
    answer: ["B"],
    selectCount: 1,
    domain: 4,
    choiceExplain: [
      {"ok":false,"text":"運用負荷が増え、可用性・性能も下がる"},
      {"ok":true,"text":"ゲートウェイエンドポイントは<b class=\"key\">無料</b>で、S3通信がNAT Gatewayを通らなくなる"},
      {"ok":false,"text":"インターフェイス型は時間料金とデータ処理料金がかかり、Bより高い"},
      {"ok":false,"text":"セキュリティ要件を損なう"}
    ],
    tip: "「NAT Gateway経由のS3/DynamoDB通信コスト」→ <b class=\"key\">ゲートウェイエンドポイント</b>",
    src: 7138
  },
  {
    id: "c10-mc-26",
    stem: "ある企業はアプリログを S3 Standard に保存している。アクセス傾向は以下のとおり<br>作成後30日間は頻繁に参照される／30日以降も月に数回参照され、その際は即時（ミリ秒）に取得する必要がある<br>AZ障害でもデータを失ってはならない／作成から1年後には不要になる<br>最もコスト効率の高い組合せはどれか（2つ）",
    choices: [
      "作成30日後に S3 Standard-IA へ移行するライフサイクルルールを設定する",
      "作成365日後にオブジェクトを削除（有効期限切れ）するライフサイクルルールを設定する",
      "作成30日後に S3 Glacier Flexible Retrieval へ移行する",
      "作成30日後に S3 One Zone-IA へ移行する",
      "バージョニングを有効にして過去のバージョンをすべて保持する"
    ],
    answer: ["A","B"],
    selectCount: 2,
    domain: 4,
    choiceExplain: [
      {"ok":true,"text":"複数AZに保存・ミリ秒取得・低頻度アクセス向けで Standard より安い"},
      {"ok":true,"text":"不要になったデータを<b class=\"key\">有効期限アクション</b>で自動削除し、保存料金をなくす"},
      {"ok":false,"text":"取り出しに<b class=\"key\">数分〜数時間</b>かかり、ミリ秒取得の要件を満たさない"},
      {"ok":false,"text":"<b class=\"key\">単一AZ</b>のためAZ障害でデータを失う可能性がある"},
      {"ok":false,"text":"保存量が増えてコスト増"}
    ],
    tip: "ライフサイクルは「<b class=\"key\">移行（Transition）</b>」と「<b class=\"key\">有効期限（Expiration）</b>」の2本立て。要件（取得時間・耐久性）で消去",
    src: 7152
  }
);
