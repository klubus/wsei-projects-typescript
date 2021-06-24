var channel1 = [];
var clapAudio = document.querySelector('[data-sound="clap"]');
var boomAudio = document.querySelector('[data-sound="boom"]');
var hihatAudio = document.querySelector('[data-sound="hihat"]');
var kickAudio = document.querySelector('[data-sound="kick"]');
var openhatAudio = document.querySelector('[data-sound="openhat"]');
var rideAudio = document.querySelector('[data-sound="ride"]');
var snareAudio = document.querySelector('[data-sound="snare"]');
var tinkAudio = document.querySelector('[data-sound="tink"]');
var tomAudio = document.querySelector('[data-sound="tom"]');
var playChannel1Btn = document.querySelector('#playChannel1');
var playChannel1BtnRecorder = document.querySelector('#playChannel1Record');
var progressBar = document.getElementById('prog-bar');
var recorder = false;
var differenceTime = 0;
document.body.addEventListener('keypress', onKeyDown);
playChannel1Btn.addEventListener('click', onPlayChannel1);
playChannel1BtnRecorder.addEventListener('click', playChannel1Recorder);
function playChannel1Recorder(ev) {
    recorder = !recorder;
    if (recorder) {
        playChannel1BtnRecorder.innerHTML = "Stop";
        differenceTime = ev.timeStamp;
        channel1 = [];
    }
    else
        playChannel1BtnRecorder.innerHTML = "Record";
}
function onKeyDown(ev) {
    if (recorder) {
        var key = ev.key;
        var time = ev.timeStamp - differenceTime;
        channel1.push({
            key: key,
            time: time
        });
        playSound(key, 0);
        console.log(channel1);
    }
    else {
        playSound(ev.key, 0);
    }
}
function playSound(key, soundTime) {
    progressBar.value = soundTime;
    switch (key) {
        case 'q':
        case 'Q':
            clapAudio.currentTime = 0;
            clapAudio.play();
            break;
        case 'w':
        case 'W':
            boomAudio.currentTime = 0;
            boomAudio.play();
            break;
        case 'e':
        case 'E':
            hihatAudio.currentTime = 0;
            hihatAudio.play();
            break;
        case 'a':
        case 'A':
            kickAudio.currentTime = 0;
            kickAudio.play();
            break;
        case 's':
        case 'S':
            openhatAudio.currentTime = 0;
            openhatAudio.play();
            break;
        case 'd':
        case 'D':
            rideAudio.currentTime = 0;
            rideAudio.play();
            break;
        case 'z':
        case 'z':
            snareAudio.currentTime = 0;
            snareAudio.play();
            break;
        case 'x':
        case 'X':
            tinkAudio.currentTime = 0;
            tinkAudio.play();
            break;
        case 'c':
        case 'C':
            tomAudio.currentTime = 0;
            tomAudio.play();
            break;
    }
}
function onPlayChannel1() {
    playChannel1();
}
function playChannel1() {
    var prevTime = 0;
    progressBar.max = channel1[channel1.length - 1].time;
    progressBar.value = 0;
    channel1.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () { return playSound(sound.key, sound.time); }, timeout);
    });
}
