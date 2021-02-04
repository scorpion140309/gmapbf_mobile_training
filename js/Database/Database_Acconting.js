//
const DB_Acounting = new QuizDatabase(
	'アカウンティング',
	new Array(
        new QuizSingleData('流動負債について、正しく説明しているのはどれか？', '営業サイクル中または短期間に支払う負債である。', '長期的（1年を超える）負債である。', '主に財務活動（資金調達活動）に対応する。', '社債、退職給付引当金、賞与引当金などがある。', '3-7貸借対照表（負債＋純資産）'),
        new QuizSingleData('固定負債について、「誤った説明」をしているのはどれか？', '支払手形、買掛金、未払費用、未払金などがある。', '長期的（1年を超える）負債である。', '社債、退職給付引当金などがある。', '主に財務活動（資金調達活動）に対応する。', '3-7貸借対照表（負債＋純資産）'),
        new QuizSingleData('成長中の企業について、適切に説明をしているのはどれか？', '営業収支：マイナス、投資活動：マイナス、財務活動：プラス', '営業収支：プラス　、投資活動：マイナス、財務活動：均衡状態', '営業収支：プラス　、投資活動：抑え気味、財務活動：マイナス', '営業収支：マイナス、投資活動：プラス、財務活動：マイナス', '3-8キャッシュフロー計算書'),
        new QuizSingleData('安定期の企業について、適切に説明をしているのはどれか？', '営業収支：プラス　、投資活動：マイナス、財務活動：均衡状態', '営業収支：マイナス、投資活動：マイナス、財務活動：プラス', '営業収支：プラス　、投資活動：抑え気味、財務活動：マイナス', '営業収支：マイナス、投資活動：プラス、財務活動：マイナス', '3-8キャッシュフロー計算書'),
        new QuizSingleData('成熟期の企業について、適切に説明をしているのはどれか？', '営業収支：プラス　、投資活動：抑え気味、財務活動：マイナス', '営業収支：プラス　、投資活動：マイナス、財務活動：均衡状態', '営業収支：マイナス、投資活動：マイナス、財務活動：プラス', '営業収支：マイナス、投資活動：プラス、財務活動：マイナス', '3-8キャッシュフロー計算書'),
        new QuizSingleData('子会社・連結会社の基準について、「誤った説明」をしているのはどれか？', '持ち株が50%未満の場合、子会社とは認定されない。', '親会社が過半数の株式所有している場合、子会社と認定される。', '親会社が20%以上50%以下の議決権付き株式を所有している場合、連結会社と認定される。', '親会社と連結子会社のBSを合算するが、内部の取引項目は相殺する。', '3-9連結会計'),
        new QuizSingleData('財務会計の視点で計算した今期の納税額よりも税務会計で計算した納税額が少ない場合について、適切に説明をしているのはどれか？', '将来の租税負担として「繰延税金負債」を計上する。', '将来の租税負担として「繰延税金資産」を計上する。', '将来の租税負担として「繰上げ税金負債」を計上する。', '将来の租税負担として「繰上げ税金資産」を計上する。', '3-10税効果会計と退職給付会計'),
        new QuizSingleData('売買目的の有価証券の計上基準はどれか？', '時価法', '低価法', '原価法', '償却原価法', '3-11有価証券(時価会計)'),
        new QuizSingleData('満期保有目的の債権の計上基準はどれか？', '償却原価法', '時価法', '低価法', '原価法', '3-11有価証券(時価会計)'),
        new QuizSingleData('子会社・関連会社株式の計上基準はどれか？', '原価法', '償却原価法', '時価法', '低価法', '3-11有価証券(時価会計)'),
        new QuizSingleData('ROA(ReturnOnAssets)について、適切に説明をしているのはどれか？', '利益／総資産', '利益／売上高', '売上高／総資産', '利益／負債', '3-12総合力分析：ROAとROE'),
        new QuizSingleData('ROE(ReturnOnEquty)について、適切に説明をしているのはどれか？', '利益／自己資本', '総資産／自己資本', '売上高／総資産', '利益／総資産', '3-12総合力分析：ROAとROE'),
        new QuizSingleData('売上高営業利益率（営業利益／売上高について）、「誤った説明」をしているのはどれか？', '財務活動なども含めた通常の企業活動における利益率を示す。', '本業の利益率が高いかどうかを示す。', '販売活動や管理活動の効率性を示す。', '広告宣伝費の金額比較でマーケティング戦略の相違などが把握できる。', '3-13収益性分析'),
        new QuizSingleData('インタレスト・カバレッジ・レシオについて、適切に説明をしているのはどれか？', '事業利益が支払うべき金利の何倍あるか、金利支払能力を示す指標。', '固定資産の調達がどれだけ純資産によって賄われているかを示す指標。', '流動資産のうち現金化しにくい棚卸資産などを除いたもの。', '短期間（1年以内）に現金化される資産と、短期間に返済すべき負債の比率。', '3-14安全性分析'),
        new QuizSingleData('固定比率の算出方法について、適切に説明をしているのはどれか？', '固定資産／純資産', '固定資産／流動資産', '固定資産／(負債+純資産)', '固定資産／(純資産+固定負債)', '3-14安全性分析'),
        new QuizSingleData('配当性向の算出方法について、適切に説明をしているのはどれか？', '配当金総額／税引き後当期純利益', '税引き後当期純利益／発行済み株式数', '時価総額／税引き後当期純利益', '株価／1株当たりの純資産額', '3-15株式市場が企業評価する指標'),
        new QuizSingleData('EPSの算出方法について、適切に説明をしているのはどれか？', '税引き後当期純利益／発行済み株式数', '配当金総額／税引き後当期純利益', '時価総額／税引き後当期純利益', '株価／1株当たりの純資産額', '3-15株式市場が企業評価する指標'),
        new QuizSingleData('PERの算出方法について、適切に説明をしているのはどれか？', '時価総額／税引き後当期純利益', '税引き後当期純利益／発行済み株式数', '配当金総額／税引き後当期純利益', '株価／1株当たりの純資産額', '3-15株式市場が企業評価する指標'),
        new QuizSingleData('PBRの算出方法について、適切に説明をしているのはどれか？', '株価／1株当たりの純資産額', '時価総額／税引き後当期純利益', '税引き後当期純利益／発行済み株式数', '配当金総額／税引き後当期純利益', '3-15株式市場が企業評価する指標'),
        new QuizSingleData('たな卸資産の評価方法について、「誤った用語」はどれか？', '先入後出法', '先入先出法', '後入先出法', '平均法', '3-16たな卸資産'),
        new QuizSingleData('減価償却の定額法の算出方法について、適切に説明しているのはどれか？', '（取得原価－残存価値）×（１÷耐用年数）', '（取得原価－減価償却費の累計）×償却率', '（取得原価－残存価値）×償却率', '（取得原価－減価償却費の累計）×（１÷耐用年数）', '3-17減価償却と固定資産'),
        new QuizSingleData('減価償却の定率法の算出方法について、適切に説明しているのはどれか？', '（取得原価－減価償却費の累計）×償却率', '（取得原価－残存価値）×（１÷耐用年数）', '（取得原価－残存価値）×償却率', '（取得原価－減価償却費の累計）×（１÷耐用年数）', '3-17減価償却と固定資産'),
        new QuizSingleData('売上：290万円、変動費：60万円、固定費：70万円の時、損益分岐点売上高に一番近いのはどれか？', '88万円', '79万円', '76万円', '92万円', '3-18損益分岐点分析'),
        new QuizSingleData('会計上の原価計算方法として、適切なものはどれか？', '全部原価計算', '部分原価計算', '直接原価計算', '間接原価計算', '3-19原価計算'),
        new QuizSingleData('BSC（BalancedScorecard）の4つの視点に「含まれない」ものはどれか？', 'マーケティング', '財務', '顧客', '学習', '3-20マネジメント・コントロール'),
    )
);
