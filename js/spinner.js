
window.addEventListener("load", () => {
  setTimeout(() => {
  const spinner = document.getElementById("spinner");
  document.body.classList.remove("loading");
  spinner.style.display = "none";
}, 100); // 1000 es 1 seg 
});

