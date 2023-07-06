var menu = document.querySelector(".menu-icon");
var child = menu.querySelectorAll("div");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  child.forEach(function (child) {
    child.classList.remove("no-animation");
  });
});
