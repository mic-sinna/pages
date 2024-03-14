console.log("JS Loaded.");

for (let node of document.querySelectorAll(".exercise")) {
    node.onclick = () => {
        window.location.assign("https://mic-sinna.github.io/pages/music-gym/lol");
    };
}