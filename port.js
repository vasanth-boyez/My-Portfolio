const navBtn = document.querySelector(".nav-btn");
const menuItems = document.querySelector(".menu-items");

navBtn.addEventListener("click", () => {
  menuItems.classList.toggle("show");
});
