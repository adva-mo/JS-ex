const player1 = document.querySelector("#player1-race");
const player2 = document.querySelector("#player2-race");
let p1 = player1.firstElementChild;
let p2 = player2.firstElementChild;

window.addEventListener("keyup", (e) => {
  const key = e.key;
  if (key === "a") {
    if (p1.nextElementSibling !== null) {
      p1.classList.remove("active");
      p1 = p1.nextElementSibling;
      p1.classList.add("active");
    } else {
      alert("Player 1 Won");
    }
  }

  if (key === "d") {
    if (p2.nextElementSibling !== null) {
      p2.classList.remove("active");
      p2 = p2.nextElementSibling;
      p2.classList.add("active");
    } else {
      alert("Player 2 Won");
    }
  }
});
