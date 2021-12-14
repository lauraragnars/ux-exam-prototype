"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  const mainContainer = document.querySelector(".container");
  const editProfile = `
  <div class="edit_profile_container">
  <div class="edit_profile_box">
    <div class="close_edit_profile">
      <p>X</p>
    </div>
    <div class="form_profile">
      <img class="photo" src="./assets/profilepicture.png" alt="Profile picture" />
      <h3>Sabrina Smith</h3>
    </div>
    <form id="update_user_form">
      <label for="update_username">First Name: </label><br />
      <input type="text" name="update_username" placeholder="Sabrina" /><br />
      <label for="update_user_lastName">Last Name: </label><br />
      <input type="text" name="update_user_lastName" placeholder="Last Name" /><br />
      <label for="update_user_email">Email: </label><br />
      <input type="text" name="update_user_email" placeholder="sabrina@sabrina.is" /><br />
      <label for="update_user_phonenumber">Phonenumber: </label><br />
      <input type="text" name="update_user_phonenumber" placeholder="12345678" /><br />
      <label for="update_user_password">Password: </label><br />
      <input type="password" name="update_user_password" value="hallohallohallo" /><br />

      <button class="update_button">Update Profile Info</button>
    </form>
  </div>
</div>`;

  mainContainer.insertAdjacentHTML("afterbegin", editProfile);

  document.querySelector(".toggle-menu").addEventListener("click", toggleMenu);
  document.querySelector(".edit_profile_container").style.display = "none";
  document.querySelector(".edit_profile_button").addEventListener("click", openEditProfile);
}

function toggleMenu() {
  const menu = document.querySelector(".menu_container");

  if (menu.classList.contains("show")) {
    this.textContent = "☰";
    document.querySelector(".toggle-menu").style.right = "unset";
    document.querySelector(".toggle-menu").style.left = "1.5rem";
    menu.classList.add("hide");
    menu.classList.remove("show");
  } else {
    this.textContent = "X";
    document.querySelector(".toggle-menu").style.right = "1.5rem";
    document.querySelector(".toggle-menu").style.left = "unset";
    menu.classList.remove("hide");
    menu.classList.add("show");
  }
}

function openEditProfile() {
  console.log("openEditProfile");
  document.querySelector(".edit_profile_container").style.display = "flex";
  document.querySelector(".close_edit_profile").addEventListener("click", () => {
    document.querySelector(".edit_profile_container").style.display = "none";
  });
}

// const student = document.getElementById("student");
// const teacher = document.getElementById("teacher");
// const studLog = document.getElementById("studentLogin");
// const teachLog = document.getElementById("teacherLogin");
// const divStud = document.getElementById("login_student");
// const divTeach = document.getElementById("login_teacher");
// student.addEventListener("click", toggleLogin);
// teacher.addEventListener("click", toggleLogin);
// function toggleLogin() {
//   if (studLog.classList.contains("hidden")) {
//     studLog.classList.remove("hidden");
//     teachLog.classList.add("hidden");
//     divStud.classList.add("active");
//     divTeach.classList.remove("active");
//   } else if (teachLog.classList.contains("hidden")) {
//     studLog.classList.add("hidden");
//     teachLog.classList.remove("hidden");
//     divTeach.classList.add("active");
//     divStud.classList.remove("active");
//   }
// }
