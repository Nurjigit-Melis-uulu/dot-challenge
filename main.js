let dot = document.querySelector(".dot");
let dotMove = document.querySelector(".dot-move");
let lineX = document.querySelector(".lineX");
let lineY = document.querySelector(".lineY");

document.addEventListener("click", event => {
  dot.style.left = `${event.clientX - dot.clientWidth / 2}px`;
  dot.style.top = `${event.clientY - dot.clientHeight / 2}px`;
});

document.addEventListener("mousemove", event => {
  dotMove.style.left = `${event.clientX - dotMove.clientWidth / 2}px`;
  dotMove.style.top = `${event.clientY - dotMove.clientHeight / 2}px`;
  lineX.style.top = `${event.clientY}px`;
  lineY.style.left = `${event.clientX}px`;
});
