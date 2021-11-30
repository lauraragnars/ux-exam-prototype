"use strict"

window.addEventListener("DOMContentLoaded", start)

function start(){
    const menuContainer = document.querySelector(".container")

    const menu = `
    <p class="toggle-menu">☰</p>
    <div class="menu_container hide">
        <nav class="menu">
            <div class="menu_top">
                <img src="./assets/icons/logo.svg" alt="Icon">
            </div>
            <ul class="menuitems">
            <li class="selected"><img src="./assets/icons/filled/home.svg" alt="Icon"><a href="dashboard.html">Dashboard</a></li>
            <li><img src="./assets/icons/outline/chart.svg" alt="Icon"><a href="plans.html">Plans</a></li>
            <li><img src="./assets/icons/outline/chart.svg" alt="Icon"><a href="tasks.html">Tasks</a></li>
            <li><img src="./assets/icons/outline/category.svg" alt="Icon"><a href="courses.html">Courses</a></li>
            <li><img src="./assets/icons/outline/calendar.svg" alt="Icon"><a href="calendar.html">Calendar</a></li>
            <li><img src="./assets/icons/outline/infosquare.svg" alt="Icon"><a href="announcements.html">Announcements</a></li>
            <li><img src="./assets/icons/outline/paper.svg" alt="Icon"><a href="messages.html">Messages</a></li>
            </ul>
            <div class="menu_bottom">
                <img src="./assets/icons/outline/logout.svg" alt="Icon">
                <a href="index.html">Logout</a>
            </div>
        </nav>
    </div>`
    
    menuContainer.insertAdjacentHTML('afterbegin', menu)

    document.querySelector(".toggle-menu").addEventListener("click", toggleMenu)
}

function toggleMenu(){
    const menu = document.querySelector(".menu_container")

    if (menu.classList.contains("show")){
        this.textContent = "☰"
        menu.classList.add("hide")
        menu.classList.remove("show")
    } else {
        this.textContent = "X"
        menu.classList.remove("hide")
        menu.classList.add("show")
    }
}


