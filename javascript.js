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
  location.reload();
});

// Start med at vise startskærmen
visSkærm("start");

// KNAP ELEMENTER
const playknapDiv = document.getElementById("play_knap");

// GAME ELEMENTER(FISK OG FLY)

const maxScore = 15;
const fiskContainers = document.querySelectorAll(".fisk_container");

fiskContainers.forEach((container) => {
  container.addEventListener("click", () => {
    container.classList.add("hidden");
    score += 1;
    scoreBoard.textContent = "Score: " + score;

    // Tjek om spilleren har nået den maksimale score
    if (score >= maxScore) {
      visSkærm("level_complete"); // Vis skærmen for level complete
      return; // Stop yderligere handlinger
    }

    // Efter et kort stykke tid (f.eks. 1 sekund) vises fisken igen på en ny position
    setTimeout(() => {
      const newPosition = getRandomPosition();
      container.style.left = `${newPosition.x}px`;
      container.style.top = `${newPosition.y}px`;

      // Vis fisken igen
      container.classList.remove("hidden");
    }, 1000); // 1 sekunds forsinkelse
  });
});

function resetFish() {
  const fishContainers = document.querySelectorAll(".fisk_container");
  fishContainers.forEach((container) => {
    container.classList.remove("hidden");
    // Sæt ny tilfældig position
    container.style.top = `${Math.random() * 80}%`;
    container.style.left = `${Math.random() * 80}%`;
  });
}

function incrementScore() {
  score++;
  if (score >= maxScore) {
    document.getElementById("level_complete").style.display = "block";
  }
}

function fishClickHandler(event) {
  event.currentTarget.classList.add("hidden");
  incrementScore();
  if (score < maxScore) {
    resetFish();
  }
}

function getRandomPosition() {
  const screen = document.getElementById("game_elements");
  const screenWidth = screen.clientWidth;
  const screenHeight = screen.clientHeight;

  // Generer tilfældige positioner inden for skærmens dimensioner
  const randomX = Math.random() * (screenWidth - 100); // Juster for fiskens bredde
  const randomY = Math.random() * (screenHeight - 100); // Juster for fiskens højde

  return { x: randomX, y: randomY };
}

const flyContainers = document.querySelectorAll(".fly_container");
// Tæller for hvilket energy board der skal skjules
let currentEnergyBoardIndex = 0;

// Funktion til at skjule det næste energy board
function hideNextEnergyBoard() {
  // Skab en liste over energy boards
  const energyBoards = [
    document.getElementById("energy_board1"),
    document.getElementById("energy_board2"),
    document.getElementById("energy_board3"),
  ];

  // Skjul det energy board, der svarer til currentEnergyBoardIndex
  if (currentEnergyBoardIndex < energyBoards.length) {
    energyBoards[currentEnergyBoardIndex].classList.add("hidden");
    currentEnergyBoardIndex++;
  }
  if (currentEnergyBoardIndex === energyBoards.length) {
    visSkærm("game_over"); // Vis game over skærmen
  }
}
// Tilføj en klik-event listener til hver fly_container
flyContainers.forEach((container) => {
  container.addEventListener("click", () => {
    // Skjul fly_container
    container.classList.add("hidden");

    // Skjul det næste energy board
    hideNextEnergyBoard();

    // Efter et kort stykke tid (f.eks. 1 sekund) vises fisken igen på en ny position
    setTimeout(() => {
      const newPosition = getRandomPosition();
      container.style.left = `${newPosition.x}px`;
      container.style.top = `${newPosition.y}px`;

      // Vis fisken igen
      container.classList.remove("hidden");
    }, 1000); // 1 sekunds forsinkelse
  });
});

// UI ELEMENTER
const scoreBoard = document.getElementById("score_board");
let score = 0;

function start_time() {
  const timeBoardSand = document.getElementById("time_board_sand");
  const totalTime = 60; // Total tid i sekunder
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
  startTimer();
}

var animationContainer = document.getElementById("lottieKaffe");

var animation = lottie.loadAnimation({
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "kaffe.json",
});

function navigateTo(url) {
  window.location.href = url;
}

document.getElementById("tema2").addEventListener("click", function () {
  navigateTo(
    "http://christianfranckramirez.com/mmd/portfolio/tema2/website/min_computer.html"
  );
});

document.getElementById("tema3").addEventListener("click", function () {
  navigateTo(
    "http://christianfranckramirez.com/mmd/portfolio/tema3/livesharing/index.html"
  );
});

document.getElementById("tema4").addEventListener("click", function () {
  navigateTo("http://127.0.0.1:5500/spil_animation.html");
});

document.getElementById("tema5").addEventListener("click", function () {
  navigateTo(
    "http://christianfranckramirez.com/mmd/portfolio/tema5/passionsite/index.html"
  );
});
