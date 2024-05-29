// ==UserScript==
// @name         Auto Click Hidden Posts on RPGHQ
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically click hidden posts and buttons on rpghq.org
// @author       Your Name
// @match        *://rpghq.org/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function clickAllButtons(selector) {
    var buttons = document.querySelectorAll(selector);
    buttons.forEach(function (button) {
      button.click();
    });
  }

  function main() {
    var hiddenPostsLink = document.getElementById("display-hidden-posts-link");
    if (hiddenPostsLink) {
      hiddenPostsLink.click();
    }
    setTimeout(function () {
      clickAllButtons(".ignored-poster-wrapper .display_post");
    }, 500);
    setTimeout(function () {
      clickAllButtons(".ignore .display_post");
    }, 100);
  }

  window.addEventListener("load", main);
})();
