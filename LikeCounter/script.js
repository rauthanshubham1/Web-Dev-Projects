window.addEventListener("load", bindEvents);

var count = 0;

function bindEvents() {
    console.log("Binding Events");
    document.querySelector("#btn").addEventListener("click", increaseLike);
}

function increaseLike() {
    console.log("Like button is pressed");
    ++count;
    let span = document.querySelector("#count");
    span.innerText=count;
}