window.addEventListener("load",bindEvents);

function bindEvents(){

    document.getElementById("btn0").addEventListener("click",display);
    document.getElementById("btn1").addEventListener("click",display);
    document.getElementById("btn2").addEventListener("click",display);
    document.getElementById("btn3").addEventListener("click",display);
    document.getElementById("btn4").addEventListener("click",display);
    document.getElementById("btn5").addEventListener("click",display);
    document.getElementById("btn6").addEventListener("click",display);
    document.getElementById("btn7").addEventListener("click",display);
    document.getElementById("btn8").addEventListener("click",display);
    document.getElementById("btn9").addEventListener("click",display);
    document.getElementById("btnDot").addEventListener("click",display);
    document.getElementById("btnPlus").addEventListener("click",display);
    document.getElementById("btnMinus").addEventListener("click",display);
    document.getElementById("btnCross").addEventListener("click",display);
    document.getElementById("btnDivide").addEventListener("click",display);
    document.getElementById("btnEqual").addEventListener("click",answer);
    document.getElementById("btnClearAll").addEventListener("click",clearAll);
}


function clearAll(){
    document.querySelector("#input").innerText=" ";   
}

function answer(){
    
    let earlierText=onScreen();
    let ans = eval(earlierText);
    document.querySelector("#input").innerText=ans;   
}

function onScreen(){
    let earlierText = document.querySelector("#input").innerText;
    return earlierText;
}

function display(){
    let earlierText = onScreen();
    let btn=this;
    let text=btn.innerText;
    console.log(text);
    document.querySelector("#input").innerText=earlierText + text;
}