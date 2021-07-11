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

const playChannel1Btn = document.querySelector("#playChannel1Btn");
const stopChannel1Btn = document.querySelector("#stopChannel1Btn");
const recordChannel1Btn = document.querySelector("#recordChannel1Btn");
const progressBar1 = document.querySelector("#progress-bar1");

const allPlayBtns = document.querySelectorAll(".play");
const allRecordBtns = document.querySelectorAll(".record");
const allStopBtns = document.querySelectorAll(".stop");

// let start = "";
// let time = 0;
let currentChannel;

let isRecording = false;

let channels = {
  channel1: [],
  channel2: [],
  channel3: [],
  channel4: [],
};

const handleRecordChannel = (e) => {
  currentChannel = e.target.id.slice(13, 14);
  isRecording = true;

  e.target.disabled = true;

  allPlayBtns.forEach((btn) => {
    btn.disabled = true;
  });
  allRecordBtns.forEach((btn) => {
    btn.disabled = true;
  });
  allStopBtns.forEach((btn) => {
    if (btn.id.slice(11, 12) !== currentChannel) {
      btn.disabled = true;
    }
  });
};

const handlePlayChannel = (e) => {
  const selectedChannelToPlay = e.target.id.slice(11, 12);
  isRecording = false;
  const selectedChannelArray = channels[`channel${selectedChannelToPlay}`];

  selectedChannelArray.forEach((sound, index) => {
    setTimeout(() => {
      handlePlaySound(sound);
    }, 500 * index);
  });
};

const handleStopRecording = (e) => {
  const currentStopBtn = e.target.id.slice(11, 12);

  allPlayBtns.forEach((btn) => {
    btn.disabled = false;
  });
  allRecordBtns.forEach((btn) => {
    if (btn.id.slice(13, 14) !== currentStopBtn) {
      btn.disabled = false;
    }
  });
  allStopBtns.forEach((btn) => {
    btn.disabled = false;
  });
};

recordChannel1Btn.addEventListener("click", handleRecordChannel);
stopChannel1Btn.addEventListener("click", handleStopRecording);
playChannel1Btn.addEventListener("click", handlePlayChannel);

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
  if (isRecording) {
    channels[`channel${currentChannel}`].push(e.key);
  }
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

const handlePlaySound = (sound) => {
  console.log(sound);
  switch (sound) {
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
