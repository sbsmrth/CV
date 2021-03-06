const navbar = document.querySelector("nav");
const cbox = document.querySelector("#changelg");
const button = document.getElementById("btn");

addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("main-nav-dark");
  } else {
    navbar.classList.remove("main-nav-dark");
  }
});

button.addEventListener("click", () => {
  const items = document.querySelector(".main-nav__content");
  items.classList.toggle("open");
});

cbox.addEventListener("click", () => {
  cbox.checked
    ? (location.href = "/es/index.html")
    : (location.href = "/index.html");
});
