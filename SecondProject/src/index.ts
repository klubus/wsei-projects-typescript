const clapAudioSound:HTMLAudioElement = document.querySelector(".clap");
const boomAudioSound:HTMLAudioElement = document.querySelector(".boom");
const hihatAudioSound:HTMLAudioElement = document.querySelector(".hihat");
const kickAudioSound:HTMLAudioElement = document.querySelector(".kick");
const openhatAudioSound:HTMLAudioElement = document.querySelector(".openhat");
const rideAudioSound:HTMLAudioElement = document.querySelector(".ride");
const snareAudioSound:HTMLAudioElement = document.querySelector(".snare");
const tinkAudioSound:HTMLAudioElement = document.querySelector(".tink");
const tomAudioSound:HTMLAudioElement = document.querySelector(".tom");

const clapBtn: HTMLButtonElement = document.querySelector(".clapBtn");
console.log(clapAudioSound);

const handleAudioPlay = (): void => {
  clapAudioSound.play();
  boomAudioSound.play();
};



const handleAudioPlayOnKeyPress = (e: KeyboardEvent):void => {

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

clapBtn.addEventListener("click", handleAudioPlay);

document.body.addEventListener("keypress", handleAudioPlayOnKeyPress);
