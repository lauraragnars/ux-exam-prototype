"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  let allButtons = document.querySelectorAll("#plans .submenu_item");
  console.log("allButtons", allButtons);
  // let allTabs = document.querySelectorAll(".tab");
  // console.log("allTabs", allTabs);

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
      allButtons.forEach((button) => {
        console.log("submenu button click");
        button.classList.add("disabled");
      });

      console.log("this", this);
      if (this === allButtons[0]) {
        this.classList.remove("disabled");
      } else if (this === allButtons[1]) {
        this.classList.remove("disabled");
      } else if (this === allButtons[2]) {
        this.classList.remove("disabled");
      }
    });
  }
}
