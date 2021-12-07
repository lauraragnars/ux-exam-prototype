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
