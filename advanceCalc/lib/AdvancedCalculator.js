// Prompt to ask the user to select the type of Calculator
var calculator_type = prompt("Please choose a one of the calculator options: 1) Basic, 2) Advanced 3) BMI and 4) Trip Calculator");

switch (calculator_type) {
  case "1":
    basic();
    break;
  case "2":
    advanced();
    break;
  case "3":
    BMI();
    break;
  case "4":
    Trip_cal();
    break;
default:
alert("Please enter the right input")
}
function basic() {
  var number1 = parseFloat(prompt("Enter first number:"));
var operator = prompt("Enter a operator:");
var number2 = parseFloat(prompt("Enter second number:"));

if (operator == "+") {
  addTwonumbers()

}

}
