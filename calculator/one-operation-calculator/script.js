    var num1 = 0;
    var num2 =  0;
    var symbol = "+";


var displayDiv = document.querySelector("#display");
var resetDisplay = true;

function setOP(operator) {
    num1 = displayDiv.innerText;
    symbol = operator;
    resetDisplay = true;
    // console.log("num1 = " + num1 + ", symbol = " + symbol);
}

function press(key) {
    if (resetDisplay) {
        displayDiv.innerHTML = "";
        resetDisplay = false;
    }
    displayDiv.innerText = displayDiv.innerText + key;
}

function clr() {
    displayDiv.innerText = 0;
    num1 = 0;
    num2 = 0;
    symbol= "+";
    // console.log(num1, num2, symbol);
}

function calculate(){
    num2 = displayDiv.innerText;
    console.log("num1 = " + num1 + ", symbol = " + symbol + ", num2 = " + num2);
    if (symbol == "+") {
        displayDiv.innerText = parseFloat(num1) + parseFloat(num2);
    } else if (symbol == "-"){
        displayDiv.innerText = parseFloat(num1) - parseFloat(num2);
    } else if (symbol == "*"){
        displayDiv.innerText = parseFloat(num1) * parseFloat(num2);
    } else if (symbol == "/"){
        displayDiv.innerText = parseFloat(num1) / parseFloat(num2);
    }
    resetDisplay = true;
}
