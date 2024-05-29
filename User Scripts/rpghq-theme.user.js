// ==UserScript==
// @name         Apply Custom CSS to RPGHQ Chat
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Applies custom CSS to chat.rpghq.org
// @author       Your Name
// @match        https://chat.rpghq.org/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Custom CSS including Open Sans font
  const customCSS = `
        .dark-theme, .butter-theme {
            --bg-surface: #282F3C;
            --bg-surface-low: #151D27;
            --bg-surface-extra-low: #101822;
        }
        ._15q3ngn1 {
            --oq6d07a: #3a404a;
            --oq6d075: #282F3C;
            --oq6d07z: #d31141;
        }
        .notification-badge {
            background-color: #d31141 !important;
        }

        .notification-badge .text {
            color: #fff !important;
        }
        ._1glssn51:hover, ._1glssn51:focus-visible {
            color: #FFCCD4 !important;
        }
        ._1y5oo570 {
            background-color: #222833;
        }
        ._13tt0gb6 {
            background-color: #222833;
        }
        ._1bv8u1w7 {
            background-color: #222833;
        }
        .hru6be1 {
            background-color: #222833;
        }
        .brs7cea {
            background-color: #222833;
        }
        ._15q3ngn1 {
            --oq6d07a: #364051;
        }
        ._13qe89mg {
             color: #fff;
        }

        ._1bv8u1wa {
             --_1bv8u1w0: #E06262;
             --_1bv8u1w1: #fb6d6d;
             --_1bv8u1w3: #FF7070;
             --_1bv8u1w2: #E06262;
        }

        ._161nxvea {
             background-color: #3A4456;
        }
    `;

  // Create a style element
  const style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(customCSS));

  // Append the style element to the head
  document.head.appendChild(style);
})();
