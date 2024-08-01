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

var animationContainer = ducument.getElementById("lottieKaffe");

var animation = lottie.loadAnimation({
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "kaffe.json",
});
