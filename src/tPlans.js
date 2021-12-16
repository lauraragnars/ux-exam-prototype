"use strict";

window.addEventListener("DOMContentLoaded", start);
const updateBtn = document.getElementById("updatePlan");
const editBtn = document.getElementById("editPlans");
function start() {
  updateBtn.addEventListener("click", update);
  editBtn.addEventListener("click", edit);
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

function update() {
  updateBtn.classList.add("hidden");
  editBtn.classList.remove("hidden");
  if (updateBtn.classList.contains("hidden")) {
    document.getElementById("file").classList.add("hidden");
  }
}
function edit() {
  updateBtn.classList.remove("hidden");
  editBtn.classList.add("hidden");
  if (editBtn.classList.contains("hidden")) {
    document.getElementById("file").classList.remove("hidden");
  }
}
