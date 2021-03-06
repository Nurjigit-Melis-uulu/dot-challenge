let dot = document.querySelector(".dot");
let dotMove = document.querySelector(".dot-move");
let lineX = document.querySelector(".lineX");
let lineY = document.querySelector(".lineY");
let createButton = document.querySelector("#create");
let clearButton = document.querySelector("#clear");
let dotBox = document.querySelector('.dot-box');
let creatingStatus = false;

document.addEventListener("click", event => {
  let pos = document.querySelector("body").getBoundingClientRect();
  let eventX = event.clientX;
  let eventY = event.clientY;

  if (
    eventX + dotMove.clientWidth / 2 >= pos.right - 60 ||
    eventY + dotMove.clientHeight / 2 >= pos.bottom - 60
  ) {
    return;
  } else {
    dot.style.left = `${event.clientX - dot.clientWidth / 2}px`;
    dot.style.top = `${event.clientY - dot.clientHeight / 2}px`;
  }

  if (creatingStatus) {
    let element = document.createElement("div");
    element.className = "dot";
    element.style.left = `${event.clientX - dot.clientWidth / 2}px`;
    element.style.top = `${event.clientY - dot.clientHeight / 2}px`;
    dotBox.append(element);
  }
});

document.addEventListener("mousemove", event => {
  let pos = document.querySelector("body").getBoundingClientRect();
  let dotMovePos = dotMove.getBoundingClientRect();
  let dotPos = dot.getBoundingClientRect();
  let eventX = event.clientX;
  let eventY = event.clientY;

  if (dotPos.right + 40 >= pos.right) {
    dot.style.left = `${pos.right - 40}px`;
  }
  if (dotPos.bottom + 40 >= pos.bottom) {
    dot.style.top = `${pos.bottom - 40}px`;
  }

  if (
    dotMovePos.right >= pos.right - 60 &&
    eventX + dotMove.clientWidth / 2 >= pos.right - 60
  ) {
    return;
  } else if (
    dotMovePos.bottom >= pos.bottom - 60 &&
    eventY + dotMove.clientHeight / 2 >= pos.bottom - 60
  ) {
    return;
  } else {
    dotMove.style.left = `${event.clientX - dotMove.clientWidth / 2}px`;
    dotMove.style.top = `${event.clientY - dotMove.clientHeight / 2}px`;
    lineX.style.top = `${event.clientY}px`;
    lineY.style.left = `${event.clientX}px`;
  }
});

createButton.addEventListener("click", () => {
  creatingStatus = !creatingStatus;
  if (creatingStatus) {
    createButton.innerHTML = "Creating element is true"
  } else {
    createButton.innerHTML = "Creating element is false"
  }
});

clearButton.addEventListener("click", () => {
  dotBox.innerHTML = "";
});