function getRandomInt(min, max) {
          const minCeiled = Math.ceil(min);
          const maxFloored = Math.floor(max);
          return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
text = ""
textlength = 10000
for (let i = 0; i < textlength; i++) {
        text += getRandomInt(0,2);
}
window.onload = (event) => {
        document.getElementById("main").innerHTML = text;
        document.getElementById("main").style.wordWrap = "break-word";

};
