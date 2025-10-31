window.addEventListener("scroll", function () {
  document
    .getElementById("header")
    .classList.toggle("scroll", window.scrollY > 69);
});

function open_slidebar() {
  document.getElementById("slidebar").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("open");
  document.getElementById("sword").classList.toggle("open");
  document.getElementById("navbar").classList.toggle("open");
}

function easter_egg(eggs) {
  const name = ["malik", "nathan", "jabir"];
  const clickedClass = eggs.classList[0];
  document.getElementById("header").classList.remove(...name);
  document.getElementById("header").classList.add(clickedClass);
}
