// ============================================================
// 作品リスト（このファイルだけ編集すればギャラリーが更新されます）
//
// ■ 新しい作品の追加方法
//   1. images/works/ に画像を入れる（webp / jpg / png どれでもOK）
//   2. 下の WORKS の先頭に1行追加する
//      { src: "ファイル名", cat: "illust" または "fanart" },
//   ※ w / h は画像の縦横サイズ。省略してもOK（あるとレイアウトが安定）
//   ※ tools/add_work.py を使うと自動で最適化＋行追加されます
//   ※ 作品の削除・トップ3枚の変更は manage.html が便利です
// ============================================================

// トップの大きく見せる3枚（works内のsrcを指定）
const FEATURED = ["bani.webp", "px128146995.webp", "i06.webp"];

const WORKS = [
  { src: "bani.webp", cat: "illust", w: 1131, h: 1600 },
  { src: "px138842432.webp", cat: "fanart", w: 1600, h: 944 },
  { src: "px133535224.webp", cat: "fanart", w: 1600, h: 1033 },
  { src: "px128891223.webp", cat: "fanart", w: 931, h: 1600 },
  { src: "px128146995.webp", cat: "illust", w: 1070, h: 1600 },
  { src: "px124540650.webp", cat: "fanart", w: 888, h: 1600 },
  { src: "px120553015.webp", cat: "fanart", w: 942, h: 1600 },
  { src: "i01.webp", cat: "illust", w: 1600, h: 1424 },
  { src: "i02.webp", cat: "illust", w: 996, h: 1600 },
  { src: "i03.webp", cat: "illust", w: 1106, h: 1600 },
  { src: "i04.webp", cat: "illust", w: 986, h: 1445 },
  { src: "i05.webp", cat: "illust", w: 1280, h: 720 },
  { src: "i06.webp", cat: "illust", w: 1133, h: 1600 },
  { src: "i07.webp", cat: "illust", w: 1133, h: 1600 },
  { src: "i08.webp", cat: "illust", w: 1133, h: 1600 },
  { src: "i09.webp", cat: "illust", w: 1075, h: 1500 },
  { src: "i10.webp", cat: "illust", w: 1002, h: 1434 },
  { src: "i11.webp", cat: "illust", w: 1600, h: 1084 },
  { src: "i12.webp", cat: "illust", w: 1000, h: 1600 },
  { src: "i13.webp", cat: "illust", w: 1000, h: 1600 },
  { src: "i14.webp", cat: "illust", w: 1032, h: 1600 },
  { src: "i15.webp", cat: "illust", w: 1012, h: 1600 },
  { src: "i16.webp", cat: "illust", w: 1338, h: 1600 },
  { src: "i17.webp", cat: "illust", w: 1600, h: 1224 },
  { src: "i18.webp", cat: "illust", w: 1133, h: 1600 },
  { src: "i19.webp", cat: "illust", w: 1039, h: 1600 },
  { src: "i20.webp", cat: "illust", w: 1205, h: 580 },
  { src: "f01.webp", cat: "fanart", w: 1071, h: 1600 },
  { src: "f02.webp", cat: "fanart", w: 981, h: 1600 },
  { src: "f03.webp", cat: "fanart", w: 602, h: 1600 },
  { src: "f04.webp", cat: "fanart", w: 908, h: 1600 },
  { src: "f05.webp", cat: "fanart", w: 1022, h: 1600 },
  { src: "f06.webp", cat: "fanart", w: 906, h: 1600 },
  { src: "f07.webp", cat: "fanart", w: 952, h: 1600 },
  { src: "f08.webp", cat: "fanart", w: 1600, h: 1088 },
  { src: "f09.webp", cat: "fanart", w: 1086, h: 1600 },
  { src: "f10.webp", cat: "fanart", w: 1034, h: 1600 },
  { src: "f11.webp", cat: "fanart", w: 1600, h: 546 },
  { src: "f13.webp", cat: "fanart", w: 1161, h: 1600 },
  { src: "f17.webp", cat: "fanart", w: 973, h: 1600 },
  { src: "f22.webp", cat: "fanart", w: 958, h: 1600 },
  { src: "f24.webp", cat: "fanart", w: 1133, h: 1600 },
];
