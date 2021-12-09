"use strict";

window.addEventListener("DOMContentLoaded", start);

// function start() {
//   document.querySelectorAll(".submenu_item").forEach((item) => {
//     item.addEventListener("click", toggleItem);
//   });
// }

// function toggleItem() {
//   document.querySelectorAll(".submenu_item").forEach((item) => {
//     item.addEventListener("click", () => {
//       console.log("add disabled click");
//       item.classList.add("disabled");
//     });
//   });

//   this.classList.remove("disabled");

//   document.querySelectorAll(".submenu_item").forEach(item => {
//       if (item.classList.contains("disabled")){
//           document.querySelectorAll(`.${item.dataset.course}`).forEach(listItem=>{
//               listItem.classList.add("hidden")
//           })
//       } else {
//           document.querySelectorAll(`.${item.dataset.course}`).forEach(listItem=>{
//               listItem.classList.remove("hidden")
//           })
//       }
//   });
// }

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
