const burgermenu = document.querySelector("#burger_java");
const navbar = document.querySelector("#navbar");

burgermenu.addEventListener("click", onBurgerMenuClick);

function onBurgerMenuClick() {
  navbar.classList.toggle("open");
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
  start_time();
});

document.getElementById("spil_igen1").addEventListener("click", () => {
  visSkærm("start"); // Tilbage til start
  location.reload();
});

document.getElementById("spil_igen2").addEventListener("click", () => {
  visSkærm("start"); // Tilbage til start
});

// Start med at vise startskærmen
visSkærm("start");

// KNAP ELEMENTER
const playknapDiv = document.getElementById("play_knap");

// GAME ELEMENTER(FISK OG FLY)

// Vælg fisk_container elementet
const fiskContainer = document.getElementById("fisk_container1");

// Tilføj en klik-event listener til fisk_container
fiskContainer.addEventListener("click", () => {
  // Tilføj 'hidden' klassen for at gøre elementet usynligt
  fiskContainer.classList.add("hidden");
  score += 1;

  // Opdater score_board med den nye score
  scoreBoard.textContent = "Score: " + score;
});

const fiskContainers = document.querySelectorAll(".fisk_container");

fiskContainers.forEach((container) => {
  container.addEventListener("click", () => {
    container.classList.add("hidden");
    score += 1;
    scoreBoard.textContent = "Score: " + score;
  });
});

const flyContainer = document.getElementById("fly_container1");

flyContainer.addEventListener("click", () => {
  flyContainer.classList.add("hidden");
  document.getElementById("energy_board3").classList.add("hidden");
});

// UI ELEMENTER
const scoreBoard = document.getElementById("score_board");
let score = 0;

function start_time() {
  const timeBoardSand = document.getElementById("time_board_sand");
  const totalTime = 15; // Total tid i sekunder
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
  //startTimer();
}

var animationContainer = document.getElementById("lottieKaffe");

var animation = lottie.loadAnimation({
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "kaffe.json",
});
