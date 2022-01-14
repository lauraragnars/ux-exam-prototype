"use strict";

window.addEventListener("DOMContentLoaded", start);
const student = document.getElementById("student");
const teacher = document.getElementById("teacher");
const studLog = document.getElementById("studentLogin");
const teachLog = document.getElementById("teacherLogin");
const divStud = document.getElementById("login_student");
const divTeach = document.getElementById("login_teacher");
function start() {
  student.addEventListener("click", toggleLogin);
  teacher.addEventListener("click", toggleLogin);
}

function toggleLogin() {
  if (studLog.classList.contains("hidden")) {
    studLog.classList.remove("hidden");
    teachLog.classList.add("hidden");
    divStud.classList.add("active");
    divTeach.classList.remove("active");
  } else if (teachLog.classList.contains("hidden")) {
    studLog.classList.add("hidden");
    teachLog.classList.remove("hidden");
    divTeach.classList.add("active");
    divStud.classList.remove("active");
  }
}
