"use strict"

window.addEventListener("DOMContentLoaded", begin)

function begin(){

    document.querySelectorAll(".submenu_item").forEach(item => {
        item.addEventListener("click", toggleItem)
    });
}

function toggleItem(){

    console.log("toggle item")
    if(this.classList.contains("disabled")){
        this.classList.remove("disabled")
    }else {
        console.log("ekse")
        this.classList.add("disabled")
    }

    document.querySelectorAll(".submenu_item").forEach(item => {
        if (item.classList.contains("disabled")){
            document.querySelectorAll(`.${item.dataset.course}`).forEach(listItem=>{
                listItem.classList.add("hidden")
            })
        } else {
            document.querySelectorAll(`.${item.dataset.course}`).forEach(listItem=>{
                listItem.classList.remove("hidden")
            })
        }
    });
}

