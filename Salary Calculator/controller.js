import { salaryCal } from "./brain.js";

window.addEventListener("load", bindEvents);

function bindEvents() {
    console.log("hello");
    document.querySelector("#btn").addEventListener("click", validate);
}

function clearInnerBox() {
    console.log("Cleared");
    let innerBox = document.querySelector("#innerBox");
    innerBox.innerHTML = "";
}


function validate() {
    clearInnerBox();
    let text = parseInt(document.querySelector("#typeHere").value);
    if (!(text == "") && !(isNaN(parseInt(text)))) {
        compute(text);
    } else {
        let h3 = document.createElement("h3");
        let innerBox = document.querySelector("#innerBox");
        h3.innerText = "Enter Valid Salary"
        innerBox.appendChild(h3);
    }
}

function createData(fieldset) {
    for (const key in salaryCal) {
        if (typeof salaryCal[key] === "function") {
            let p = document.createElement("p");
            p.innerText = `${key} : ₹ ${salaryCal[key]().toLocaleString('hi-IN')}`
            fieldset.appendChild(p);
        }
    }
}


function compute(text) {
    salaryCal.basicSalary = text;
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    let innerBox = document.querySelector("#innerBox");
    innerBox.appendChild(fieldset);
    fieldset.appendChild(legend);
    legend.innerText = "Allowances";

    createData(fieldset);
}