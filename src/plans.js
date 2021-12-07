"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelectorAll(".submenu_item").forEach((item) => {
    item.addEventListener("click", toggleItem);
  });
}

function toggleItem() {
  document.querySelectorAll(".submenu_item").forEach((item) => {
    item.addEventListener("click", () => {
      console.log("add disabled click");
      item.classList.add("disabled");
    });
  });

  this.classList.remove("disabled");

  // document.querySelectorAll(".submenu_item").forEach(item => {
  //     if (item.classList.contains("disabled")){
  //         document.querySelectorAll(`.${item.dataset.course}`).forEach(listItem=>{
  //             listItem.classList.add("hidden")
  //         })
  //     } else {
  //         document.querySelectorAll(`.${item.dataset.course}`).forEach(listItem=>{
  //             listItem.classList.remove("hidden")
  //         })
  //     }
  // });
}
