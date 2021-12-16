'use strict'

window.addEventListener('DOMContentLoaded', start)
const handInBtn = document.getElementById('handin-btn')
const editBtn = document.getElementById('editBtn')


function start() {
  handInBtn.addEventListener('click', handIn)
  editBtn.addEventListener('click', edit)
}

function handIn() {
  console.log('Project handed in')

  console.log('Edit btn added')
  handInBtn.classList.add('disabled')
  
  editBtn.classList.remove('hidden')
  if(handInBtn.classList.contains("disabled")){
    document.getElementById('file').disabled = true
    document.getElementById('pComment').disabled = true
  }
}
function edit() {
  handInBtn.classList.remove('disabled')
  editBtn.classList.add('hidden')
  if(editBtn.classList.contains("hidden")){
    document.getElementById('file').disabled = false
    document.getElementById('pComment').disabled = false

  }
}
// const fileContainer = document.querySelector(".files");
// const fileBtn = document.getElementById('file');
// fileBtn.addEventListener('click', addFiles)
// const newFile = `<input type="file" id="file" />`;

// function addFiles(){
//   if(fileBtn.files[0,1]){
//     console.log('No files chosen')
//   } else{
//     console.log('a file is chosen')
//     fileContainer.insertAdjacentHTML("afterbegin", newFile);
//   }
// }
// const select = document.getElementById('select');
// select.addEventListener('change', selectAction);

// function selectAction(){
//   console.log(select.value);
//   if(select.value === "project1"){
//     document.getElementById("1").classList.remove("hidden");
//     document.getElementById("2").classList.add("hidden");
//     document.getElementById("3").classList.add("hidden");
//   } else if (select.value === "task") {
//     document.getElementById("1").classList.add("hidden");
//     document.getElementById("2").classList.remove("hidden");
//     document.getElementById("3").classList.add("hidden");
//   }
//   else if (select.value === "exam") {
//     document.getElementById("1").classList.add("hidden");
//     document.getElementById("2").classList.add("hidden");
//     document.getElementById("3").classList.remove("hidden");
//   }
// }
