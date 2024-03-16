document.getElementById("back-btn").onclick = () => {
    window.location.assign(rootPath)
};

const chordDisplay = document.getElementById("chord");

let displayChangeInterval = 2000;
let playing = false;

const playBtn = document.getElementById("play-btn");
const playBtnTxt = document.querySelector("#play-btn p");
playBtn.addEventListener("click", () => {
    playing = !playing;
    if (playing == true) {
        playerLoop();
        playBtnTxt.textContent = "STOP";
    } else {
        playBtnTxt.textContent = "PLAY";
    }
});

const playerLoop = (async () => {
    while (playing) {
        const toneNotations = toneToString(Math.floor(Math.random() * 12))
        const strRootTone = toneNotations[toneNotations.length > 1 ? Math.floor(Math.random() * toneNotations.length) : 0];
        const strChordMode = ["", "m"][Math.floor(Math.random() * 2)];
        chordDisplay.textContent = `${strRootTone}${strChordMode}`;
        await sleep(displayChangeInterval);
    }
    chordDisplay.textContent = "";
});