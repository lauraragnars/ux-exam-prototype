"use strict"

const menuContainer = document.querySelector(".menu")

const menu = `<div class="menu_top">LOGO</div>
<ul class="menuitems">
  <li class="menuitem"><a href="dashboard.html">Dashboard</a></li>
  <li class="menuitem"><a href="plans.html">Plans</a></li>
  <li class="menuitem"><a href="calendar.html">Calendar</a></li>
  <li class="menuitem"><a href="courses.html">Courses</a></li>
  <li class="menuitem"><a href="announcements.html">Announcements</a></li>
  <li class="menuitem"><a href="messages.html">Messages</a></li>
</ul>
<div class="menu_bottom"></div>`

menuContainer.insertAdjacentHTML('afterbegin', menu)
