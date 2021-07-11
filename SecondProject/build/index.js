const clapAudioSound = document.querySelector(".clap");
const boomAudioSound = document.querySelector(".boom");
const hihatAudioSound = document.querySelector(".hihat");
const kickAudioSound = document.querySelector(".kick");
const openhatAudioSound = document.querySelector(".openhat");
const rideAudioSound = document.querySelector(".ride");
const snareAudioSound = document.querySelector(".snare");
const tinkAudioSound = document.querySelector(".tink");
const tomAudioSound = document.querySelector(".tom");

const clapBtn = document.querySelector(".clapBtn");
const boomBtn = document.querySelector(".boomBtn");
const hihatBtn = document.querySelector(".hihatBtn");
const kickBtn = document.querySelector(".kickBtn");
const openhatBtn = document.querySelector(".openhatBtn");
const rideBtn = document.querySelector(".rideBtn");
const snareBtn = document.querySelector(".snareBtn");
const tinkBtn = document.querySelector(".tinkBtn");
const tomBtn = document.querySelector(".tomBtn");
console.log(clapAudioSound);

const clapAudioPlay = () => {
  clapAudioSound.play();
};

const boomAudioPlay = () => {
  boomAudioSound.play();
};

const hihatAudioPlay = () => {
  hihatAudioSound.play();
};


const kickAudioPlay = () => {
  kickAudioSound.play();
};


const openhatAudioPlay = () => {
  openhatAudioSound.play();
};


const rideAudioPlay = () => {
  rideAudioSound.play();
};


const snareAudioPlay = () => {
  snareAudioSound.play();
};

const tinkAudioPlay = () => {
  tinkAudioSound.play();
};

const tomAudioPlay = () => {
  tomAudioSound.play();
};


const handleAudioPlayOnKeyPress = (e) => {
  console.log(e.key);

  switch (e.key) {
    case "q":
      clapAudioSound.play();
      break;
    case "w":
      boomAudioSound.play();
      break;
    case "e":
      hihatAudioSound.play();
      break;
    case "a":
      kickAudioSound.play();
      break;
    case "s":
      openhatAudioSound.play();
      break;
    case "d":
      rideAudioSound.play();
      break;
    case "z":
      snareAudioSound.play();
      break;
    case "x":
      tinkAudioSound.play();
      break;
    case "c":
      tomAudioSound.play();
      break;

    default:
      break;
  }
};

clapBtn.addEventListener("click", clapAudioPlay);
boomBtn.addEventListener("click", boomAudioPlay);
hihatBtn.addEventListener("click", hihatAudioPlay);
kickBtn.addEventListener("click", kickAudioPlay);
openhatBtn.addEventListener("click", openhatAudioPlay);
rideBtn.addEventListener("click", rideAudioPlay);
snareBtn.addEventListener("click", snareAudioPlay);
tinkBtn.addEventListener("click", tinkAudioPlay);
tomBtn.addEventListener("click", tomAudioPlay);

document.body.addEventListener("keypress", handleAudioPlayOnKeyPress);
