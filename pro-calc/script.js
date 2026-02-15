
let display = document.getElementById("display");
let preview = document.getElementById("preview");
let historyBox = document.getElementById("history");

function append(val) {
    if (display.innerText === "0") {
        display.innerText = val;
    } else {
        display.innerText += val;
    }
    preview.innerText = display.innerText;
}

function clearAll() {
    display.innerText = "0";
    preview.innerText = "";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || "0";
    preview.innerText = display.innerText;
}

function calculate() {
    try {
        let result = Function('"use strict";return (' + display.innerText + ')')();
        historyBox.innerHTML += display.innerText + " = " + result + "<br>";
        display.innerText = result;
        preview.innerText = "";
    } catch {
        display.innerText = "Error";
    }
}

function clearHistory() {
    historyBox.innerHTML = "";
}

function toggleTheme() {
    document.body.classList.toggle("light");
}

document.addEventListener("keydown", function(e) {
    if (!isNaN(e.key) || "+-*/().".includes(e.key)) {
        append(e.key);
    }
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteLast();
});
