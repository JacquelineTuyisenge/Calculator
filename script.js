// Variables from HTML elements
let button0 = document.getElementById("0");
let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");
let button5 = document.getElementById("5");
let button6 = document.getElementById("6");
let button7 = document.getElementById("7");
let button8 = document.getElementById("8");
let button9 = document.getElementById("9");
let buttonDot = document.getElementById(".");
let buttonEqual = document.getElementById("=");
let buttonAdd = document.getElementById("+");
let buttonSub = document.getElementById("-");
let buttonMul = document.getElementById("*");
let buttonDiv = document.getElementById("/");
let buttonDel = document.getElementById("del");
let buttonPercent = document.getElementById("%");
let buttonPower = document.getElementById("^");
let buttonFact = document.getElementById("!");
let buttonNegative = document.getElementById("neg");
let topScreenText = document.getElementById("screenTextTop");
let bottomScreenText = document.getElementById("screenTextBottom");

// Creating event listeners for buttons
button0.addEventListener("click", button0Clicked);
button1.addEventListener("click", button1Clicked);
button2.addEventListener("click", button2Clicked);
button3.addEventListener("click", button3Clicked);
button4.addEventListener("click", button4Clicked);
button5.addEventListener("click", button5Clicked);
button6.addEventListener("click", button6Clicked);
button7.addEventListener("click", button7Clicked);
button8.addEventListener("click", button8Clicked);
button9.addEventListener("click", button9Clicked);
buttonDot.addEventListener("click", buttonDotClicked);
buttonEqual.addEventListener("click", buttonEqualClicked);
buttonAdd.addEventListener("click", buttonAddClicked);
buttonSub.addEventListener("click", buttonSubClicked);
buttonMul.addEventListener("click", buttonMulClicked);
buttonDiv.addEventListener("click", buttonDivClicked);
buttonDel.addEventListener("click", buttonDelClicked);
buttonPercent.addEventListener("click", buttonPercentClicked);
buttonPower.addEventListener("click", buttonPowerClicked);
buttonFact.addEventListener("click", buttonFactClicked);
buttonNegative.addEventListener("click", buttonNegativeClicked);

// Variables
let operatorClicked = false;
let number1 = "";
let number2 = "";
let operator = "";

function operatorUsed(operatorButtonPressed) {
  if (number1 !== "") {
    operator = operatorButtonPressed;
    operatorClicked = true;
    topScreenText.textContent = number1 + " " + operator;
  }
}

function operate() {
  let result;
  switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      if (number2 === "0") {
        topScreenText.textContent = "Division by zero";
        bottomScreenText.textContent = "Game Over";
        return;
      }
      result = divide(number1, number2);
      break;
    default:
      return;
  }
  topScreenText.textContent = number1 + " " + operator + " " + number2;
  bottomScreenText.textContent = result;
  number1 = result.toString();
  number2 = "";
  operator = "";
}

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Function for buttons when clicked
function button1Clicked() {
  if (operatorClicked === false && number1.length <= 8) {
    number1 += "1";
    bottomScreenText.textContent = number1;
  } else if (operatorClicked === true && number2.length <= 8) {
    number2 += "1";
    bottomScreenText.textContent = number2;
  }
}

function button2Clicked() {
  if (operatorClicked === false && number1.length <= 8) {
    number1 += "2";
    bottomScreenText.textContent = number1;
  } else if (operatorClicked === true && number2.length <= 8) {
    number2 += "2";
    bottomScreenText.textContent = number2;
  }
}

function button3Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 3;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 3;
        document.getElementById("screenTextBottom").textContent = number2;
    }
}

function button4Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 4;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 4;
        document.getElementById("screenTextBottom").textContent = number2;
    }
}

function button5Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 5;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 5;
        document.getElementById("screenTextBottom").textContent = number2;
    }
}

function button6Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 6;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 6;
        document.getElementById("screenTextBottom").textContent = number2;
    }
}

function button7Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 7;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 7;
        document.getElementById("screenTextBottom").textContent = number2;
    }
}

function button8Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 8;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 8;
        document.getElementById("screenTextBottom").textContent = number2;
    }
}

function button9Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 9;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 9;
        document.getElementById("screenTextBottom").textContent = number2;
    }
}

function button0Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 0;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 0;
        document.getElementById("screenTextBottom").textContent = number2;
    }
}

function buttonDotClicked() {
  if (operatorClicked === false && !number1.includes(".") && number1.length <= 7) {
    number1 += ".";
    bottomScreenText.textContent = number1;
  } else if (operatorClicked === true && !number2.includes(".") && number2.length <= 7) {
    number2 += ".";
    bottomScreenText.textContent = number2;
  }
}

function buttonEqualClicked() {
  if (number2 === "0" && operator === "/") {
    topScreenText.textContent = "Division by zero";
    bottomScreenText.textContent = "Game Over";
    number1 = "";
    number2 = "";
    operatorClicked = false;
  } else if (number2 !== "") {
    operate();
  }
}

function buttonAddClicked() {
  if (operator === "+") {
    topScreenText.textContent = "Addition by zero";
    operatorUsed("+");
  }
}

function buttonSubClicked(){
    if(operator == "-")
        {
            document.getElementById("screenTextTop").textContent = "Subtraction by zero";
            operatorUsed("-");
            console.log(operator)
        }
}

function buttonMulClicked(){
    if(operator == "*")
        {
            document.getElementById("screenTextTop").textContent = "Multiplication by zero";
            operatorUsed("*");
            console.log(operator)
        }
}

function buttonDivClicked(){
    if(operator == "/")
        {
            document.getElementById("screenTextTop").textContent = "Division by zero";
            operatorUsed("/");
            console.log(operator)
        }
}

function buttonNegativeClicked() {
  if (operatorClicked === false) {
    if (!number1.startsWith("-")) {
      number1 = "-" + number1;
    } else {
      number1 = number1.substring(1);
    }
    bottomScreenText.textContent = number1;
  } else {
    if (!number2.startsWith("-")) {
      number2 = "-" + number2;
    } else {
      number2 = number2.substring(1);
    }
    bottomScreenText.textContent = number2;
  }
}

function buttonDelClicked() {
  if (operatorClicked === false && number1.length > 0) {
    number1 = number1.slice(0, -1);
    bottomScreenText.textContent = number1;
  } else if (operatorClicked === true && number2.length > 0) {
    number2 = number2.slice(0, -1);
    bottomScreenText.textContent = number2;
  }
}

function buttonPercentClicked() {
    // Get the number and percentage from the calculator's state or input
    var number = parseFloat(document.getElementById("number").value);
    var percentage = parseFloat(document.getElementById("percentage").value);
  
    // Perform the percentage calculation
    var result = (number * percentage) / 100;
  
    // Update the display on the webpage with the result
    document.getElementById("screenTextTop").textContent = result;
  
    // Log the result to the console for debugging
    console.log("Result: " + result);
  }

  function buttonFactClicked() {
    // Get the number from the calculator's state or input
    var number = parseInt(document.getElementById("number").value);
  
    // Perform the factorial operation
    var result = calculateFactorial(number);
  
    // Update the display on the webpage with the result
    document.getElementById("screenTextTop").textContent = result;
  
    // Log the result to the console for debugging
    console.log("Result: " + result);
  }

// Function to calculate factorial
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Function to perform power operation
function buttonPowerClicked() {
  // Get the base and exponent from the calculator's state or input
  var base = parseFloat(number1);
  var exponent = parseFloat(number2);

  // Perform the power operation
  var result = Math.pow(base, exponent);

  // Update the display on the webpage with the result
  topScreenText.textContent = base + " ^ " + exponent;
  bottomScreenText.textContent = result;

  // Log the result to the console for debugging
  console.log("Result: " + result);
}
 function add(number1, number2)
  {
    return parseFloat(number1) + parseFloat(number2);
  }

  function subtract(number1, number2)
  {
    return number1 - number2;
  }

  function multiply(number1, number2)
  {
    return number1 * number2;
  }

  function divide(number1, number2)
  {
    return number1 / number2;
  } 
