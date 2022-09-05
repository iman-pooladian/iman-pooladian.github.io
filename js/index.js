const preloading = document.querySelector(".preloading-container");
let key1;
let op = 1;
window.addEventListener("load", function () {
  key1 = this.setInterval(transparency, 10);
});

function transparency() {
  op -= 0.01;
  preloading.style.opacity = op;
  if (op < 0) {
    clearInterval(key1);
    preloading.classList.add("hidden");
  }
}