

const clapAudioSound:HTMLAudioElement = document.querySelector(".clap");
const boomAudioSound:HTMLAudioElement = document.querySelector(".boom");
const hihatAudioSound:HTMLAudioElement = document.querySelector(".hihat");
const kickAudioSound:HTMLAudioElement = document.querySelector(".kick");
const openhatAudioSound:HTMLAudioElement = document.querySelector(".openhat");
const rideAudioSound:HTMLAudioElement = document.querySelector(".ride");
const snareAudioSound:HTMLAudioElement = document.querySelector(".snare");
const tinkAudioSound:HTMLAudioElement = document.querySelector(".tink");
const tomAudioSound:HTMLAudioElement = document.querySelector(".tom");

const allSoundBtns:NodeListOf<HTMLButtonElement> = document.querySelectorAll("#soundBtn");
const allPlayBtns:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".play");
const allRecordBtns:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".record");
const allStopBtns:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".stop");


let currentChannel: string;

let isRecording:boolean = false;



type Channels = {
  channel1: string[],
  channel2: string[],
  channel3: string[],
  channel4: string[],
}


let channels:Channels = {
  channel1: [],
  channel2: [],
  channel3: [],
  channel4: [],
};



const handleRecordChannel = (recordBtn: HTMLButtonElement):void => {
  currentChannel = recordBtn.id.slice(13, 14);
  isRecording = true;

  recordBtn.disabled = true;

  allPlayBtns.forEach((btn:any) => {
    btn.disabled = true;
  });
  allRecordBtns.forEach((btn:any) => {
    btn.disabled = true;
  });
  allStopBtns.forEach((btn:any) => {
    if (btn.id.slice(11, 12) !== currentChannel) {
      btn.disabled = true;
    }
  });
};


const handlePlayChannel = (playBtn:HTMLButtonElement): void => {
  const selectedChannelToPlay:string = playBtn.id.slice(11, 12);
  isRecording = false;
  const selectedChannelArray:string[] = channels[`channel${selectedChannelToPlay}`];

  playBtn.disabled = true;

  selectedChannelArray.forEach((sound:string, index:number) => {
    setTimeout(() => {
      handleAudioPlay(sound);
    }, 500 * index);
  });

  setTimeout(() => {
    playBtn.disabled = false;
  }, 510 * selectedChannelArray.length - 1);
};

const handleStopRecording = (stopBtn:HTMLButtonElement):void => {
  const currentStopBtn:string = stopBtn.id.slice(11, 12);

  allPlayBtns.forEach((btn:any) => {
    btn.disabled = false;
  });
  allRecordBtns.forEach((btn:any) => {
    if (btn.id.slice(13, 14) !== currentStopBtn) {
      btn.disabled = false;
    }
  });
  allStopBtns.forEach((btn:any) => {
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


const handleAudioPlay = (sound: string):void => {
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

allSoundBtns.forEach((soundBtn: any) => {
  const sound = soundBtn.innerText.slice(2, 3).toLowerCase();
  soundBtn.addEventListener("click", () => handleAudioPlay(sound));
});

document.body.addEventListener("keypress", (e) => handleAudioPlay(e.key));
