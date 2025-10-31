function open_letter() {
  document.getElementById("letter").classList.toggle("open");
}

// Début incertain d'un code qui va peut-être pas fonctionné
// finalement il fonctionne car Malik il est vraiment trop fort dans la résolution de problème
function this_news(element) {
  const cst = ["x1", "x2", "x3", "x4", "x5", "x6"];
  const clickedClass = element.classList[0];
  document.getElementById("switchNews").classList.remove(...cst);
  document.getElementById("switchNews").classList.add(clickedClass);
}
