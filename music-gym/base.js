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
            } catch {
                reject();
            }
        }, duration);
    });
}