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

document.addEventListener("DOMContentLoaded", () => {
  const fiskContainer = document.getElementById("fisk_container");

  // Funktion til at sætte fisk_container på en tilfældig startposition
  function setRandomStartPosition() {
    const maxLeft = window.innerWidth - fiskContainer.offsetWidth;

    // Generer en tilfældig vandret position inden for synligt område
    const randomLeft = Math.random() * maxLeft;

    // Sæt den initiale top til 0 for at starte fra toppen
    fiskContainer.style.left = `${randomLeft}px`;
    fiskContainer.style.top = `0px`;
  }

  // Sæt fisk_container på en tilfældig position ved load
  setRandomStartPosition();

  // Tilføj en klik-event listener til fisk_container for at få den til at forsvinde
  fiskContainer.addEventListener("click", () => {
    fiskContainer.classList.add("hidden"); // Gør containeren usynlig
    fiskContainer.style.animationPlayState = "paused"; // Pause animationen
    alert("Fisk container klikket!"); // Feedback til brugeren
  });
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
