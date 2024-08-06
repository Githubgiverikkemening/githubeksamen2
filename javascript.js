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

play_knap.addEventListener("click", function () {
  alert("Div clicked!");
});

const playigenDiv1 = document.getElementById("spil_igen1");

spil_igen1.addEventListener("click", function () {
  alert("Div clicked!");
});

const playigenDiv2 = document.getElementById("spil_igen2");

spil_igen2.addEventListener("click", function () {
  alert("Div clicked!");
});

// GAME ELEMENTER(FISK OG FLY)

document.addEventListener("DOMContentLoaded", function () {
  const fiskContainer = document.getElementById("fisk_container");

  // Tilføj en klik-begivenhedslytter til fisk_container
  fiskContainer.addEventListener("click", () => {
    // Gør elementet usynligt
    fiskContainer.classList.add("hidden");

    // Flyt elementet til en ny position efter det er blevet usynligt
    setTimeout(() => {
      fiskContainer.style.top = Math.random() * 80 + "%"; // Ny tilfældig top-position
      fiskContainer.style.left = Math.random() * 80 + "%"; // Ny tilfældig left-position
      fiskContainer.classList.remove("hidden"); // Gør elementet synligt igen
    }, 300); // 300ms forsinkelse for at matche transition-tiden
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
