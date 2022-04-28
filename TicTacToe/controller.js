import { Tasks } from "./brain.js";
window.addEventListener("load", bindEvents);

function bindEvents() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(btn => btn.addEventListener("click", check));
}

function check() {
    if (this.innerText.length == 0) {
        printXorO(this);
    }
}

function checkResult() {
    let buttons = document.querySelectorAll("button");
    if (
        // rows
        buttons[0].innerText == "X" && buttons[1].innerText == "X" && buttons[2].innerText == "X" ||
        buttons[3].innerText == "X" && buttons[4].innerText == "X" && buttons[5].innerText == "X" ||
        buttons[6].innerText == "X" && buttons[7].innerText == "X" && buttons[8].innerText == "X" ||

        buttons[0].innerText == "O" && buttons[1].innerText == "O" && buttons[2].innerText == "O" ||
        buttons[3].innerText == "O" && buttons[4].innerText == "O" && buttons[5].innerText == "O" ||
        buttons[6].innerText == "O" && buttons[7].innerText == "O" && buttons[8].innerText == "O" ||

        // column
        buttons[0].innerText == "X" && buttons[3].innerText == "X" && buttons[6].innerText == "X" ||
        buttons[1].innerText == "X" && buttons[4].innerText == "X" && buttons[7].innerText == "X" ||
        buttons[2].innerText == "X" && buttons[5].innerText == "X" && buttons[8].innerText == "X" ||

        buttons[0].innerText == "O" && buttons[3].innerText == "O" && buttons[6].innerText == "O" ||
        buttons[1].innerText == "O" && buttons[4].innerText == "O" && buttons[7].innerText == "O" ||
        buttons[2].innerText == "O" && buttons[5].innerText == "O" && buttons[8].innerText == "O" ||

        //cross
        buttons[0].innerText == "X" && buttons[4].innerText == "X" && buttons[8].innerText == "X" ||
        buttons[2].innerText == "X" && buttons[4].innerText == "X" && buttons[6].innerText == "X" ||

        buttons[0].innerText == "O" && buttons[4].innerText == "O" && buttons[8].innerText == "O" ||
        buttons[2].innerText == "O" && buttons[4].innerText == "O" && buttons[6].innerText == "O"
    ) {
        alert("You won");
        return true;
    }
}

function reset() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => button.innerText = "");
    Tasks.flag = true;
    Tasks.counter = 0;
}

function printXorO(that) {
    Tasks.counterInc();
    let btn = that;
    if (Tasks.flag) {
        console.log("0");
        btn.innerText = "O";
        Tasks.opposite();
    } else {
        console.log("X");
        btn.innerText = "X";
        Tasks.opposite();
    }
    if (Tasks.counter >= 4) {
        if (checkResult()) {
            reset();
        }
    }
    if (Tasks.counter == 9) {
        alert("Game Draw");
        reset();
    }
}

