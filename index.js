let lastScrollY = window.scrollY;
const navbar = document.getElementById("container");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});

const btn = document.getElementById("dropdownButton");
const menu = document.getElementById("dropdownMenu");
const infor = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  btn.classList.toggle("ring-7");
  btn.classList.toggle("ring-[rgba(30,64,175,0.7)]");
});

infor.addEventListener("click", () => {
  infor.classList.toggle("ring-7");
  infor.classList.toggle("ring-[rgba(30,64,175,0.7)]");
});

document.addEventListener("click", function (e) {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
    btn.classList.remove("ring-7", "ring-[rgba(30,64,175,0.7)]");
  }
});

document.addEventListener("click", function (e) {
  if (!infor.contains(e.target) && !menu.contains(e.target)) {
    infor.classList.remove("ring-7", "ring-[rgba(30,64,175,0.7)]");
  }
});
