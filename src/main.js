"use strict";

const toggleNav = () => {
  const hamburgerLineTop = document.getElementById("js_hamburger-linetop");
  const hamburgerLineCenter = document.getElementById(
    "js_hamburger-linecenter"
  );
  const hamburgerLineBottom = document.getElementById(
    "js_hamburger-linebottom"
  );
  const nav = document.getElementById("js_nav");
  const hamburger = document.getElementById("js_drawer_hamburger");
  const closeHamburger = document.getElementsByClassName("js_close-hamburger");

  // ハンバーガーがクリックされたら
  hamburger.addEventListener("click", () => {
    // nav要素のクラスに"nav_open"を追加
    nav.classList.toggle("nav_open");
    // アニメーション
    hamburgerLineTop.classList.toggle("hamburger-linetop-later");
    hamburgerLineCenter.classList.toggle("hamburger-linecenter-later");
    hamburgerLineBottom.classList.toggle("hamburger-linebottom-later");
  });

  // nav-itemがクリックされたら
  closeHamburger[0].addEventListener("click", () => {
    // nav要素のクラスから"nav_open"を削除
    nav.classList.remove("nav_open");
  });
  closeHamburger[1].addEventListener("click", () => {
    nav.classList.remove("nav_open");
  });
  closeHamburger[2].addEventListener("click", () => {
    nav.classList.remove("nav_open");
  });
};

toggleNav();
