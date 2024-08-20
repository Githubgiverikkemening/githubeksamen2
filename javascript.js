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

function skjulAlleSkærme() {
  const skærme = document.querySelectorAll("#screen > div");
  skærme.forEach((skærm) => {
    skærm.style.display = "none";
  });
}

// Funktion til at vise en specifik skærm ved dens ID
function visSkærm(skærmId) {
  skjulAlleSkærme();
  const skærm = document.getElementById(skærmId);
  if (skærm) {
    skærm.style.display = "block";
  }
}

// Tilføj event listeners til knapper for at skifte skærme
document.getElementById("play_knap").addEventListener("click", () => {
  visSkærm("game"); // Start spillet
});

document.getElementById("spil_igen1").addEventListener("click", () => {
  visSkærm("start"); // Tilbage til start
});

document.getElementById("spil_igen2").addEventListener("click", () => {
  visSkærm("start"); // Tilbage til start
});

// Start med at vise startskærmen
visSkærm("start");

// KNAP ELEMENTER
const playknapDiv = document.getElementById("play_knap");

// play_knap.addEventListener("click", function () {
//   alert("Div clicked!");
// });

// const playigenDiv1 = document.getElementById("spil_igen1");

// spil_igen1.addEventListener("click", function () {
//   alert("Div clicked!");
// });

// const playigenDiv2 = document.getElementById("spil_igen2");

// spil_igen2.addEventListener("click", function () {
//   alert("Div clicked!");
// });

// GAME ELEMENTER(FISK OG FLY)

// Vælg fisk_container elementet
const fiskContainer = document.getElementById("fisk_container");

// Tilføj en klik-event listener til fisk_container
fiskContainer.addEventListener("click", () => {
  // Tilføj 'hidden' klassen for at gøre elementet usynligt
  fiskContainer.classList.add("hidden");
});

// UI ELEMENTER
document.addEventListener("DOMContentLoaded", function () {
  const timeBoardSand = document.getElementById("time_board_sand");
  const totalTime = 30; // Total tid i sekunder
  let timerInterval; // Global variabel til timer interval
  let remainingTime = totalTime;

  function startTimer() {
    const startTime = Date.now();
    const endTime = startTime + totalTime * 1000;

    function updateTime() {
      const now = Date.now();
      remainingTime = Math.max(0, Math.floor((endTime - now) / 1000));
      const progress = (1 - remainingTime / totalTime) * 100;

      // Adjust the clip-path based on the remaining time
      timeBoardSand.style.clipPath = `inset(${progress}% 0 0 0)`;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        visSkærm("game_over"); // Vis game over skærmen
      }
    }

    // Clear any existing intervals
    if (timerInterval) {
      clearInterval(timerInterval);
    }

    // Reset clip-path for a fresh start
    timeBoardSand.style.clipPath = `inset(0% 0 0 0)`;

    // Start the timer
    timerInterval = setInterval(updateTime, 1000);
    updateTime(); // Initial call to set the correct state immediately
  }

  // Start the timer when the page loads
  startTimer();
});

var animationContainer = ducument.getElementById("lottieKaffe");

var animation = lottie.loadAnimation({
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "kaffe.json",
});
