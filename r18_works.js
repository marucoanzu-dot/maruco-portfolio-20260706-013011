// ============================================================
// R18 販売作品リスト（r18.html で使用）
// tools/sync_new_works.py がDLsiteの新刊・予告を自動で追加します
// 手動追加する場合は images/r18/ に表紙を入れて1行追加:
//   { img: "ファイル名", title: "作品名", dlsite: "作品URL", upcoming: false },
// ============================================================
const R18_WORKS = [
  { img: "RJ01634387.webp", title: "爻光将軍といいことしたい", dlsite: "https://www.dlsite.com/maniax/announce/=/product_id/RJ01634387.html", upcoming: true },
  { img: "RJ01569118.webp", title: "開拓の導き、追加機能(ふたなり)から", dlsite: "https://www.dlsite.com/maniax/work/=/product_id/RJ01569118.html", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_740530/", upcoming: false },
  { img: "RJ01459150.webp", title: "稲妻湯けむり銭湯夜話", dlsite: "https://www.dlsite.com/maniax/work/=/product_id/RJ01459150.html", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_657197/", upcoming: false },
  { img: "RJ01318578.webp", title: "蜜を食らわば毒まで", dlsite: "https://www.dlsite.com/maniax/work/=/product_id/RJ01318578.html", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_503163/", upcoming: false },
  { img: "RJ01245383.webp", title: "愉しいこと、シよ?", dlsite: "https://www.dlsite.com/maniax/work/=/product_id/RJ01245383.html", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_434546/", upcoming: false },
  { img: "RJ01140515.webp", title: "TEYVAT Bunny Club", dlsite: "https://www.dlsite.com/maniax/work/=/product_id/RJ01140515.html", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_332217/", upcoming: false },
  { img: "RJ01091661.webp", title: "ヒミツの××開発", dlsite: "https://www.dlsite.com/maniax/work/=/product_id/RJ01091661.html", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_291077/", upcoming: false },
  { img: "RJ01016683.webp", title: "稲妻しっぽり温泉休暇", dlsite: "https://www.dlsite.com/maniax/work/=/product_id/RJ01016683.html", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_258054/", upcoming: false },
  { img: "RJ410577.webp", title: "宮司様の思うまま", dlsite: "https://www.dlsite.com/maniax/work/=/product_id/RJ410577.html", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_239802/", upcoming: false },
];
