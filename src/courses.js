"use strict";

window.addEventListener("DOMContentLoaded", start);
let submenuItems = document.querySelectorAll("#courses .submenu_item");

function start() {
  let allDropdownItems = document.querySelectorAll("#courses .dropdown_item");
  console.log("allDropdownItems", allDropdownItems);

  console.log("submenuItems", submenuItems);
  submenuItems.forEach((item) => {
    item.addEventListener("click", submenu);
  });

  for (let i = 0; i < allDropdownItems.length; i++) {
    allDropdownItems[i].addEventListener("click", function () {
      document.querySelectorAll(".project").forEach((item) => {
        item.classList.remove("hidden");
      });
      document.querySelectorAll(".task").forEach((item) => {
        item.classList.remove("hidden");
      });
      document.querySelectorAll(".exam").forEach((item) => {
        item.classList.remove("hidden");
      });

      console.log("this", this);
      if (this === allDropdownItems[0]) {
        //All Courses
        document.querySelector(".active").textContent = "All Courses";
      } else if (this === allDropdownItems[1]) {
        //UX
        document.querySelector(".active").textContent = "User Experience";
        document.querySelectorAll(".db").forEach((dbItem) => {
          dbItem.classList.add("hidden");
        });
        document.querySelectorAll(".wd").forEach((wdItem) => {
          wdItem.classList.add("hidden");
        });
      } else if (this === allDropdownItems[2]) {
        //Databases
        document.querySelector(".active").textContent = "Databases";

        document.querySelectorAll(".ux").forEach((uxItem) => {
          uxItem.classList.add("hidden");
        });
        document.querySelectorAll(".wd").forEach((wdItem) => {
          wdItem.classList.add("hidden");
        });
      } else if (this === allDropdownItems[3]) {
        //Web Dev
        document.querySelector(".active").textContent = "Web Development";

        document.querySelectorAll(".db").forEach((dbItem) => {
          dbItem.classList.add("hidden");
        });
        document.querySelectorAll(".ux").forEach((uxItem) => {
          uxItem.classList.add("hidden");
        });
      }
    });
  }
}

// function begin() {
//   document.querySelectorAll(".submenu_item").forEach((item) => {
//     item.addEventListener("click", toggleItem);
//   });
// }

// function toggleItem() {
//   console.log("toggle item");
//   if (this.classList.contains("disabled")) {
//     this.classList.remove("disabled");
//   } else {
//     console.log("else");
//     this.classList.add("disabled");
//   }

//   document.querySelectorAll(".submenu_item").forEach((item) => {
//     if (item.classList.contains("disabled")) {
//       document.querySelectorAll(`.${item.dataset.course}`).forEach((listItem) => {
//         listItem.classList.add("hidden");
//       });
//     } else {
//       document.querySelectorAll(`.${item.dataset.course}`).forEach((listItem) => {
//         listItem.classList.remove("hidden");
//       });
//     }
//   });
// }
function submenu() {
  console.log("submenu");

  console.log("this submenu", this);
  if (this === submenuItems[0]) {
    document.querySelector(".tasks_container").classList.add("hidden");
    document.querySelector(".exams_container").classList.add("hidden");
    document.querySelector(".projects_container").classList.remove("hidden");
    submenuItems[0].classList.add("underline");
    submenuItems[1].classList.remove("underline");
    submenuItems[2].classList.remove("underline");
  } else if (this === submenuItems[1]) {
    document.querySelector(".tasks_container").classList.remove("hidden");
    document.querySelector(".projects_container").classList.add("hidden");
    document.querySelector(".exams_container").classList.add("hidden");
    submenuItems[1].classList.add("underline");
    submenuItems[0].classList.remove("underline");
    submenuItems[2].classList.remove("underline");
  } else if (this === submenuItems[2]) {
    document.querySelector(".exams_container").classList.remove("hidden");
    document.querySelector(".projects_container").classList.add("hidden");
    document.querySelector(".tasks_container").classList.add("hidden");
    submenuItems[2].classList.add("underline");
    submenuItems[0].classList.remove("underline");
    submenuItems[1].classList.remove("underline");
  }
}
