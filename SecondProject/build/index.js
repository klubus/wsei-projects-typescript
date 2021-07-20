const clapAudioSound = document.querySelector(".clap");
const boomAudioSound = document.querySelector(".boom");
const hihatAudioSound = document.querySelector(".hihat");
const kickAudioSound = document.querySelector(".kick");
const openhatAudioSound = document.querySelector(".openhat");
const rideAudioSound = document.querySelector(".ride");
const snareAudioSound = document.querySelector(".snare");
const tinkAudioSound = document.querySelector(".tink");
const tomAudioSound = document.querySelector(".tom");

const allSoundBtns = document.querySelectorAll("#soundBtn");
const allPlayBtns = document.querySelectorAll(".play");
const allRecordBtns = document.querySelectorAll(".record");
const allStopBtns = document.querySelectorAll(".stop");

let currentChannel;

let isRecording = false;

let channels = {
  channel1: [],
  channel2: [],
  channel3: [],
  channel4: [],
};

const handleRecordChannel = (recordBtn) => {
  currentChannel = recordBtn.id.slice(13, 14);
  isRecording = true;

  recordBtn.disabled = true;

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

const handlePlayChannel = (playBtn) => {
  const selectedChannelToPlay = playBtn.id.slice(11, 12);
  isRecording = false;
  const selectedChannelArray = channels[`channel${selectedChannelToPlay}`];

  playBtn.disabled = true;

  selectedChannelArray.forEach((sound, index) => {
    setTimeout(() => {
      handleAudioPlay(sound);
    }, 500 * index);
  });

  setTimeout(() => {
    playBtn.disabled = false;
  }, 510 * selectedChannelArray.length - 1);
};

const handleStopRecording = (stopBtn) => {
  const currentStopBtn = stopBtn.id.slice(11, 12);

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

allRecordBtns.forEach((recordBtn) => {
  recordBtn.addEventListener("click", () => handleRecordChannel(recordBtn));
});

allStopBtns.forEach((stopBtn) => {
  stopBtn.addEventListener("click", () => handleStopRecording(stopBtn));
});

allPlayBtns.forEach((playBtn) => {
  playBtn.addEventListener("click", () => handlePlayChannel(playBtn));
});

const handleAudioPlay = (sound) => {
  if (isRecording) {
    channels[`channel${currentChannel}`].push(sound);
  }
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
      break;
  }
};

allSoundBtns.forEach((soundBtn) => {
  const sound = soundBtn.innerText.slice(2, 3).toLowerCase();
  soundBtn.addEventListener("click", () => handleAudioPlay(sound));
});

document.body.addEventListener("keypress", (e) => handleAudioPlay(e.key));
