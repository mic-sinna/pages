const rootPath = "https://mic-sinna.github.io/pages/music-gym";

function toneToString(tone) {
    if (typeof(tone) != "number" || tone % 1 != 0 || 
        tone < 0 || tone > 11
    ) {
        throw new Error("The parameter 'tone' must be an integer between 0 and 11.");
    } else {
        let toneNotations;
        switch(tone) {
            case 0:
                toneNotations = ["C"];
                break;
            case 1:
                toneNotations = ["C\u266F","D\u266D"];
                break;
            case 2:
                toneNotations = ["D"];
                break;
            case 3:
                toneNotations = ["D\u266F","E\u266D"];
                break;
            case 4:
                toneNotations = ["E"];
                break;
            case 5:
                toneNotations = ["F"];
                break;
            case 6:
                toneNotations = ["F\u266F","G\u266D"];
                break;
            case 7:
                toneNotations = ["G"];
                break;
            case 8:
                toneNotations = ["G\u266F","A\u266D"];
                break;
            case 9:
                toneNotations = ["A"];
                break;
            case 10:
                toneNotations = ["A\u266F","B\u266D"];
                break;
            case 11:
                toneNotations = ["B"];
                break;
        }
        return toneNotations;
    }
}

function sleep(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve();
            } catch (err) {
                reject(err);
            }
        }, duration);
    });
}

class SliderElement {

    constructor(id) {
        this.elem = document.querySelector("#"+id+".slider");
        this.proportion = 0;
        this.mouseIsHeld = false;
        this.sliderHandleIsHeld = false;
        this.sliderHandleIsMousedOver = false;
        this.updateHandlers = [];
        const scaleBox = document.createElement("div");
        scaleBox.classList.add("scale");
        const leftBar = document.createElement("div");
        leftBar.classList.add("leftBar");
        scaleBox.appendChild(leftBar);
        const rightBar = document.createElement("div");
        rightBar.classList.add("rightBar");
        scaleBox.appendChild(rightBar);
        const handleBox = document.createElement("div");
        handleBox.classList.add("handle-box");
        const handle = document.createElement("div");
        handle.classList.add("handle");
        handleBox.appendChild(handle);
        scaleBox.appendChild(handleBox);
        this.elem.appendChild(scaleBox);

        document.addEventListener("mousedown", () => {
            this.mouseIsHeld = true;
            if (this.sliderHandleIsMousedOver) {
                this.sliderHandleIsHeld = true;
            }
        });
        document.addEventListener("mouseup", () => {
            this.mouseIsHeld = false;
            this.sliderHandleIsHeld = false;
        });
        handle.addEventListener("mouseover", () => {
            this.sliderHandleIsMousedOver = true;
        });
        handle.addEventListener("mouseout", () => {
            this.sliderHandleIsMousedOver = false;
        });
        document.addEventListener("mousemove", (ev) => {
            if (this.sliderHandleIsHeld) {
                const {left, right} = scaleBox.getBoundingClientRect();
                this.proportion = Math.round((ev.clientX - left) / (right - left) * 100) / 100;
                if (this.proportion < 0) {
                    this.proportion = 0;
                } else if (this.proportion > 1) {
                    this.proportion = 1;
                }
                this.updateHandlers.forEach(h => { h(this.proportion); });
                handle.style.left = (this.proportion * 100) + "%";
                leftBar.style.width = (this.proportion * 100) + "%";
                rightBar.style.width = ((1 - this.proportion) * 100) + "%";
            }
        });
    }

    addUpdateHandler(handler) {
        this.updateHandlers.push(handler);
    }

    removeUpdateHandler(handler) {
        this.updateHandlers = this.updateHandlers.filter(h => h != handler);
    }

}