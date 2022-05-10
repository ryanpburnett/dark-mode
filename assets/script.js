let switcheroo = document.querySelector("#switcheroo");
let boxen = document.querySelector(".boxen");
let mode = "dark";

switcheroo.addEventListener("click", function() {
    if (mode === "dark") {
        mode = "light";
        boxen.setAttribute("class", "light");
    }else{
        mode = "dark";
        boxen.setAttribute("class", "dark");
    }
});