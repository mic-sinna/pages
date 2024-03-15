const data = {
    exercises: [
        {name: "Flash Chords", localPath: "/flash-chords"},
        {name: "Interval Recognition", localPath: "/interval-recognition"},
        {name: "Chord Recognition", localPath: "/chord-recognition"}
    ]
};

const exerciseContainer = document.querySelector("#exercises");

for (let ex of data.exercises) {
    const div = document.createElement("div");
    div.classList.add("exercise");
    const pName = document.createElement("p");
    pName.textContent = ex.name;
    div.appendChild(pName);
    div.onclick = () => {
        window.location.assign(rootPath+ex.localPath);
    };
    exerciseContainer.appendChild(div);
}