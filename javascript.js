const burgermenu = document.querySelector("#burger_java");
const navbar = document.querySelector("#navbar");

burgermenu.addEventListener("click", onBurgerMenuClick);

function onBurgerMenuClick() {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
}

const fiskContainer = document.getElementById("fisk_container");
const startButton = document.getElementById("startAnimation");

function setRandomStartPosition() {
  const maxLeft = window.innerWidth - fiskContainer.offsetWidth;
  const maxTop = window.innerHeight - fiskContainer.offsetHeight;

  const randomLeft = Math.random() * maxLeft;
  const randomTop = Math.random() * maxTop;

  fiskContainer.style.left = `${randomLeft}4px`;
  fiskContainer.style.top = `${randomTop}10px`;
}

startButton.addEventListener("click", () => {
  setRandomStartPosition();
  fiskContainer.style.animationPlayState = "running";
  fiskContainer.classList.remove("hidden");
});

fiskContainer.addEventListener("click", () => {
  fiskContainer.classList.add("hidden");
  fiskContainer.style.animationPlayState = "paused";
});
var animationContainer = ducument.getElementById("lottieKaffe");

var animation = lottie.loadAnimation({
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "kaffe.json",
});

window.addEventListener("load", startGame);

function startGame() {
  console.log("startGame");

  document.querySelector("#time_board_sand").classList.add("timeglastimer");

  document
    .querySelector("#time_board_sand")
    .addEventListener("animationend", endGame);
}

function endGame() {
  console.log("endGame");

  document
    .querySelector("#time_board_sand")
    .removeEventListener("animationend", endGame);

  console.log("Tiden er gået");
}

document.addEventListener("DOMContentLoaded", function () {
  const fiskContainer = document.getElementById("fisk_container");
  const energyBoard2 = document.getElementById("energy_board2");

  // Event listener for fisk_container
  fiskContainer.addEventListener("click", function () {
    // Sæt energy_board2 til at være usynlig
    energyBoard2.style.display = "none";
  });
});
