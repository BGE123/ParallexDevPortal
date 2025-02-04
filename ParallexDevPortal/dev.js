function myFunction(x) {
  x.classList.toggle("change");
  let nav = document.querySelector(".t");
  if (nav.style.left === "0px") {
    nav.style.left = "-390px";
  } else {
    nav.style.left = "0px";
  }
}
