"use strict";

$(document).ready(() => {
  const off = $("#light-off");
  const on = $("#light-on");
  const body = $("body");
  const txt = $(".light-toggled");
  const mainAnchor = $("main a");
  const main = $("main");
  const h1 = $("h1");
  const footer = $("footer");

  // Changes the contrast of the website.
  const changeColor = () => {
    // Swap values of the display of the light bulbs:
    const initialOnDisplay = on.css("display");
    on.css("display", off.css("display"));
    off.css("display", initialOnDisplay);

    // Swap values of the color of the background and text:
    const initialBgColor = body.css("backgroundColor");
    body.css("backgroundColor", txt.css("color"));
    txt.css("color", initialBgColor);

    // Switch the anchor tags' color to be darkblue or lightblue:
    switch (mainAnchor.css("color")) {
      case "rgb(0, 150, 255)":
        mainAnchor.css("color", "rgb(0, 0, 255)");
        break;
      case "rgb(0, 0, 255)":
        mainAnchor.css("color", "rgb(0, 150, 255)");
        break;
      case undefined:
        break;
      default:
        alert("A problem has occured.");
        break;
    }
  };

  // Detect when light bulb is clicked:
  $("#light-off, #light-on").click(changeColor);

  // Detect when menu button is clicked; hide or show the side bar if clicked.
  const sideBar = () => {
    $(".side-bar").animate({ width: "toggle" }, 350);
    $(".container").toggleClass("change");

    // Switch the contrast of the main and h1 element:
    switch (main.css("opacity")) {
      case "1":
        main.css("opacity", "0.5");
        h1.css("opacity", "0.5");
        footer.css("opacity", "0.5");
        break;
      case "0.5":
        main.css("opacity", "1");
        h1.css("opacity", "1");
        footer.css("opacity", "1");
        break;
      default:
        alert("A problem has occured.");
    }
  };
  $(".container").click(sideBar);

  // Hide the side bar if the main or footer element is clicked:
  $("main, footer, h1").click(() => {
    if (main.css("opacity") == "0.5") sideBar();
  });

  // Shows the rest of the header content when the menu button is hovered:
  $("#menu-whole").hover(
    () => {
      $("#short-header").css("display", "flex");
    },
    () => {
      $("#short-header").css("display", "none");
    },
  );

  // Change the year of the footer to the current year.
  $("footer > p").text(`© ${new Date().getFullYear()} Developing Facts Private Limited. All rights reserved.`);
});
