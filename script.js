// Get mp3 files
const trackA = new Audio();
trackA.src = "/sounds/Mario Coin.mp3";
trackA.volume = 0.2;
const trackB = new Audio();
trackB.src = "/sounds/MGS Alert.mp3";
trackB.volume = 0.5;
const trackC = new Audio();
trackC.src = "/sounds/Minecraft Creeper.mp3";
const trackD = new Audio();
trackD.src = "/sounds/Pokecenter.mp3";
trackD.volume = 0.4;

// Get DOM
const btnA = document.querySelector("#btnA");
const btnB = document.querySelector("#btnB");
const btnC = document.querySelector("#btnC");
const btnD = document.querySelector("#btnD");

// Add eventListener
btnA.addEventListener("click", () => {
  trackA.play();
})
btnB.addEventListener("click", () => {
  trackB.play();
})
btnC.addEventListener("click", () => {
  trackC.play();
})
btnD.addEventListener("click", () => {
  trackD.play();
})