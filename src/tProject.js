'use strict'

window.addEventListener('DOMContentLoaded', start)

const fileContainer = document.querySelector(".files");
const fileBtn = document.getElementById('file');
const newFile = `<input type="file" id="file" />`;

const select = document.getElementById('select');

function start() {
    fileBtn.addEventListener('click', addFiles);
    select.addEventListener('change', selectAction);
}


function addFiles(){
  if(fileBtn.files[0,1]){
    console.log('No files chosen')
  } else{
    console.log('a file is chosen')
    fileContainer.insertAdjacentHTML("afterbegin", newFile);
  }
}

function selectAction(){
  console.log(select.value);
  if(select.value === "project1"){
    document.getElementById("1").classList.remove("hidden");
    document.getElementById("2").classList.add("hidden");
    document.getElementById("3").classList.add("hidden");
  } else if (select.value === "task") {
    document.getElementById("1").classList.add("hidden");
    document.getElementById("2").classList.remove("hidden");
    document.getElementById("3").classList.add("hidden");
  }
  else if (select.value === "exam") {
    document.getElementById("1").classList.add("hidden");
    document.getElementById("2").classList.add("hidden");
    document.getElementById("3").classList.remove("hidden");
  }
}
