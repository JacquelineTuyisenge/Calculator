//variables from html elements
let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");
let button5 = document.getElementById("5");
let button6 = document.getElementById("6");
let button7 = document.getElementById("7");
let button8 = document.getElementById("8");
let button9 = document.getElementById("9");
let button0 = document.getElementById("0");
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
let topScreenText = document.getElementById("screenTextTop").textContent;
let bottomScreenText = document.getElementById("screenTextBottom").textContent;

//creating event listeners for buttons
button1.addEventListener("click", button1Clicked);
button2.addEventListener("click", button2Clicked);
button3.addEventListener("click", button3Clicked);
button4.addEventListener("click", button4Clicked);
button5.addEventListener("click", button5Clicked);
button6.addEventListener("click", button6Clicked);
button7.addEventListener("click", button7Clicked);
button8.addEventListener("click", button8Clicked);
button9.addEventListener("click", button9Clicked);
button0.addEventListener("click", button0Clicked);
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

//variables
let operatorClicked = false;
let defaultBottomNumber = 0;
let number1 = "";
let number2 = "";
let number3 = "";
let operator = "";

//function 'operate' that takes the above variables.
//It takes the number and then calls one of above functions on the numbers.
function operatorUsed(operatorButtonPressed)
{   //first if statement doesn't allow an operator to be pressed without a number pressed first
        if (number1 != "")
            
            //switch statement to take the operator button pressed
            //on the calculator and change the operator variable accordingly
            if (number2 == "")
            {
                switch(operatorButtonPressed){
                    case "+":
                        operator = "+";
                        break;
    
                    case "-":
                        operator = "-";
                        break;
    
                    case "*":
                        operator = "*";
                        break;
    
                    case "/":
                            operator = "/";
                            break;
                }
                console.log("this is the first section")
                operatorClicked = true;
                document.getElementById("screenTextTop").textContent = number1 + " " + operator + " " + number2;
            }

            if (number2 != "")
            {
                switch(operatorButtonPressed){
                    case "+":
                        operator = "+";
                        break;

                    case "-":
                        operator = "-";
                        break;

                    case "*":
                        operator = "*";
                        break;

                    case "/":
                        operator = "/";
                        break;
                }
                

                console.log("this is the second section")
                number1 = number3;
                number3 = "";
                number2 = "";

                document.getElementById("screenTextTop").textContent = number1 + " " + operator + " " + number2;
                document.getElementById("screenTextBottom").textContent = "";
            }
}

//function for buttons when clicked
function button1Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 1;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 1;
        document.getElementById("screenTextBottom").textContent = number2;
    }
}

function button2Clicked(){
    if (operatorClicked == false && number1.length <= 8)
    {
        number1 += 2;
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true && number1.length <= 8)
    {
        number2 += 2;
        document.getElementById("screenTextBottom").textContent = number2;
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

function buttonDotClicked(){
    if (operatorClicked == false)
    {  
        if (number1.includes(".") != true)
        {
            number1 += ".";
            document.getElementById("screenTextBottom").textContent = number1;
        }
    }

    else if (operatorClicked == true)
    {
        if (number2.includes(".") != true)
        {
            number2 += ".";
            document.getElementById("screenTextBottom").textContent = number2;
        }
    }
}

function buttonEqualClicked(){
    if(number2 == 0 && operator == "/")
        {
            document.getElementById("screenTextTop").textContent = "Divided by zero";
            document.getElementById("screenTextBottom").textContent = "Game Over";
            number1 = "";
            number2 = ""
            number3 = "";
            operatorClicked = false;
        }

        else if(number2 != "")
        {
            operate()       
        }
}

function buttonAddClicked(){
    if(operator == "+")
        {
            document.getElementById("screenTextTop").textContent = "Addition by zero";
            operatorUsed("+");
            console.log(operator)
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

function buttonNegativeClicked(){
    let negative = "-";

    if (operatorClicked == false)
    {
        if (number1.includes("-") != true)
        {
            number1 = negative += number1;
            document.getElementById("screenTextBottom").textContent = number1;
        }

        else if (number1.includes("-") == true)
        {
            number1 = number1.substring(1);
            document.getElementById("screenTextBottom").textContent = number1;
        }

    }

    else if (operatorClicked == true)
    {
        if (number2.includes("-") != true)
        {
            number2 = negative += number2;
            document.getElementById("screenTextBottom").textContent = number2;
        }

        else if (number2.includes("-") == true)
        {
            number2 = number2.substring(1);
            document.getElementById("screenTextBottom").textContent = number2;
        }
    }
}

function buttonDelClicked()
{
    if (operatorClicked == false)
    {
        number1 = number1.slice(0, -1);        
        document.getElementById("screenTextBottom").textContent = number1;
    }

    else if (operatorClicked == true)
    {
            number2 = number2.slice(0, -1);        
            document.getElementById("screenTextBottom").textContent = number2;
    }

        batteryCheck()
        console.log("Delete button pressed")
    
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
  
  function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }

  function buttonPowerClicked() {
    // Get the base and exponent from the calculator's state or input
    var base = parseFloat(document.getElementById("base").value);
    var exponent = parseFloat(document.getElementById("exponent").value);
  
    // Perform the power operation
    var result = Math.pow(base, exponent);
  
    // Update the display on the webpage with the result
    document.getElementById("screenTextTop").textContent = result;
  
    // Log the result to the console for debugging
    console.log("Result: " + result);
  }

  function add(number1, number2)
  {
    return parseFloat(number1) + parseFloat(number2);
  }

  function subtract(number1, number2)
  {
    return parseFloat(number1) - parseFloat(number2);
  }

  function multiply(number1, number2)
  {
    return parseFloat(number1) * parseFloat(number2);
  }

  function divide(number1, number2)
  {
    return parseFloat(number1) / parseFloat(number2);
  } 