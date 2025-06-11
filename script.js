function getRandomInt(min, max) {
          const minCeiled = Math.ceil(min);
          const maxFloored = Math.floor(max);
          return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
text = ""
textlength = 100
for (let i = 0; i < textlength; i++) {
        text += getRandomInt(0,2);
}
window.onload = (event) => {
        document.getElementById("main").innerHTML = getRandomInt(0,2);
};
