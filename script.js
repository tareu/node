function getRandomInt(min, max) {
          const minCeiled = Math.ceil(min);
          const maxFloored = Math.floor(max);
          return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
window.onload = (event) => {
        text = ""
        textlength = 10000
        for (let i = 0; i < textlength; i++) {
                if (getRandomInt(0,2) == 0) {
                        text += "&#9608";
                }
                if (getRandomInt(0,2) == 1) {
                        text += "&#9617";
                }
        }
        document.getElementById("main").innerHTML = text;
        document.getElementById("main").style.wordWrap = "break-word";
        document.getElementById("main").style.font = "150px arial,serif";
        var div = document.createElement("div");
        div.style.width = "1300px";
        div.style.height = "150px";
        div.style.color = "#ffdbf7";
        div.style.background = "#5cfffc";
        div.style.position = "fixed";
        div.style.top = "50px"
        div.style.left = "50px"
        div.style.zIndex = "9";
        div.innerHTML = "Petar Milenkovic";
        document.getElementById("main").appendChild(div);

};
