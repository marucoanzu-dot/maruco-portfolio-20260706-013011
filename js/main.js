/* ============================================================
   maruco portfolio — main.js
   works.js の WORKS / FEATURED を読んでギャラリーを描画します
   ============================================================ */
(function () {
  "use strict";

  var WORKS_DIR = "images/works/";
  var THUMBS_DIR = "images/thumbs/";
  var CONTACT_TO = "marucoanzu@gmail.com";

  /* ---------- hero panels ---------- */
  var heroPanels = document.getElementById("heroPanels");
  (FEATURED || []).slice(0, 3).forEach(function (src) {
    var d = document.createElement("div");
    d.className = "hero-panel";
    var img = document.createElement("img");
    img.src = WORKS_DIR + src;
    img.alt = "";
    d.appendChild(img);
    heroPanels.appendChild(d);
  });

  /* ---------- works grid ---------- */
  var grid = document.getElementById("grid");
  var visibleList = []; // 現在表示中の作品（lightboxの順送り用）

  WORKS.forEach(function (w, idx) {
    var item = document.createElement("figure");
    item.className = "grid-item";
    item.dataset.cat = w.cat;
    item.dataset.idx = idx;

    var img = document.createElement("img");
    // サムネがあれば使い、無ければ本体画像にフォールバック
    img.src = THUMBS_DIR + w.src;
    img.onerror = function () {
      this.onerror = null;
      this.src = WORKS_DIR + w.src;
    };
    img.alt = w.cat === "fanart" ? "fanart" : "illustration";
    img.loading = "lazy";
    if (w.w && w.h) {
      img.width = w.w;
      img.height = w.h;
    }
    item.appendChild(img);
    item.addEventListener("click", function () {
      openLightbox(idx);
    });
    grid.appendChild(item);
  });

  /* ---------- scroll reveal ---------- */
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".grid-item").forEach(function (el) {
    io.observe(el);
  });

  /* ---------- filter ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.dataset.filter;
      document.querySelectorAll(".grid-item").forEach(function (el) {
        var show = f === "all" || el.dataset.cat === f;
        el.classList.toggle("is-hidden", !show);
        if (show) el.classList.add("is-visible");
      });
    });
  });

  function currentVisible() {
    return Array.prototype.slice
      .call(document.querySelectorAll(".grid-item:not(.is-hidden)"))
      .map(function (el) { return parseInt(el.dataset.idx, 10); });
  }

  /* ---------- lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCount = document.getElementById("lbCount");
  var lbPos = 0;

  function openLightbox(workIdx) {
    visibleList = currentVisible();
    lbPos = visibleList.indexOf(workIdx);
    if (lbPos < 0) lbPos = 0;
    showLb();
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function showLb() {
    var w = WORKS[visibleList[lbPos]];
    lbImg.src = WORKS_DIR + w.src;
    lbCount.textContent = (lbPos + 1) + " / " + visibleList.length;
    // 隣の画像を先読み
    [lbPos + 1, lbPos - 1].forEach(function (p) {
      var i = (p + visibleList.length) % visibleList.length;
      new Image().src = WORKS_DIR + WORKS[visibleList[i]].src;
    });
  }
  function lbNav(dir) {
    lbPos = (lbPos + dir + visibleList.length) % visibleList.length;
    showLb();
  }

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", function () { lbNav(-1); });
  document.getElementById("lbNext").addEventListener("click", function () { lbNav(1); });
  lb.addEventListener("click", function (e) {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbNav(-1);
    if (e.key === "ArrowRight") lbNav(1);
  });
  // スワイプ対応
  var touchX = null;
  lb.addEventListener("touchstart", function (e) {
    touchX = e.touches[0].clientX;
  }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) lbNav(dx < 0 ? 1 : -1);
    touchX = null;
  }, { passive: true });

  /* ---------- header ---------- */
  var header = document.getElementById("siteHeader");
  window.addEventListener("scroll", function () {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive: true });

  /* ---------- mobile nav ---------- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  navToggle.addEventListener("click", function () {
    nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open");
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
    });
  });

  /* ---------- contact form (mailto) ---------- */
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var body = [
      "お名前: " + f.name.value,
      "メールアドレス: " + f.email.value,
      "ご依頼の種類: " + f.kind.value,
      "ご予算: " + (f.budget.value || "未記入"),
      "希望納期: " + (f.deadline.value || "未記入"),
      "実績公開: " + f.publish.value,
      "",
      "ご依頼内容:",
      f.details.value,
    ].join("\n");
    var url =
      "mailto:" + CONTACT_TO +
      "?subject=" + encodeURIComponent("【ご依頼・ご相談】" + f.name.value + "様") +
      "&body=" + encodeURIComponent(body);
    window.location.href = url;
  });
})();
