document.getElementById("back-btn").onclick = () => {
    window.location.assign(rootPath)
};

const chordDisplay = document.getElementById("chord");

const displayChangeIntervalRangeMin = 1000;
const displayChangeIntervalRangeMax = 4000;
const speedSlider = new SliderElement("speed-slider");

let playing = false;
const playerLoop = async () => {
    while (playing) {
        const toneNotations = toneToString(Math.floor(Math.random() * 12))
        const strRootTone = toneNotations[toneNotations.length > 1 ? Math.floor(Math.random() * toneNotations.length) : 0];
        const strChordMode = ["", "m"][Math.floor(Math.random() * 2)];
        chordDisplay.textContent = `${strRootTone}${strChordMode}`;
        const minChangeFreq = 1 / displayChangeIntervalRangeMax;
        const maxChangeFreq = 1 / displayChangeIntervalRangeMin;
        const changeFreq = minChangeFreq + (maxChangeFreq - minChangeFreq) * speedSlider.proportion
        await sleep(1 / changeFreq);
    }
    chordDisplay.textContent = "";
};

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