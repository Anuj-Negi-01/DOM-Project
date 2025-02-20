const allButtons = document.querySelectorAll("button");
const display = document.querySelector("#display");
let displayValue = "";

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.textContent) {
      case "AC":
        display.value = "";
        displayValue = "";
        break;
      case "DEL":
        display.value = display.value.slice(0, -1);
        displayValue = displayValue.slice(0, -1);
        break;
      case "%":
        displayValue += "/100";
        display.value = eval(displayValue);
        displayValue = display.value;
        break;
      case "÷":
        if (
          display.value.endsWith("+") ||
          display.value.endsWith("-") ||
          display.value.endsWith("X") ||
          display.value.endsWith("^") ||
          display.value.endsWith("÷")
        ) {
          display.value = display.value.slice(0, -1);
          displayValue = displayValue.slice(0, -1);
          displayValue += "/";
          display.value += "÷";
        } else {
          displayValue += "/";
          display.value += "÷";
        }
        break;
      case "X":
        if (
          display.value.endsWith("+") ||
          display.value.endsWith("-") ||
          display.value.endsWith("X") ||
          display.value.endsWith("^") ||
          display.value.endsWith("÷")
        ) {
          display.value = display.value.slice(0, -1);
          displayValue = displayValue.slice(0, -1);
          displayValue += "*";
          display.value += "X";
        }
        else{
          displayValue += "*";
          display.value += "X";
        }
        break;
      case "+":
        if (
          display.value.endsWith("+") ||
          display.value.endsWith("-") ||
          display.value.endsWith("X") ||
          display.value.endsWith("^") ||
          display.value.endsWith("÷")
        ) {
          display.value = display.value.slice(0, -1);
          displayValue = displayValue.slice(0, -1);
          displayValue += "+";
          display.value += "+";
        }
        else{
          displayValue += "+";
          display.value += "+";
        }
        break;
      case "-":
        if (
          display.value.endsWith("+") ||
          display.value.endsWith("-") ||
          display.value.endsWith("X") ||
          display.value.endsWith("^") ||
          display.value.endsWith("÷")
        ) {
          display.value = display.value.slice(0, -1);
          displayValue = displayValue.slice(0, -1);
          displayValue += "-";
          display.value += "-";
        }
        else{
          displayValue += "-";
          display.value += "-";
        }
        break;
      case "=":
        if (
          displayValue.endsWith("+") ||
          displayValue.endsWith("-") ||
          displayValue.endsWith("*") ||
          displayValue.endsWith("/") ||
          displayValue.endsWith("^")
        ) {
          alert("Please enter vaild numbers");
          displayValue = "";
          display.value = "";
          return;
        }
        display.value = eval(displayValue);
        displayValue = display.value;
        if (displayValue == "Infinity") {
          alert(`can't divide by zero`);
          display.value = "";
          displayValue = "";
        }
        break;
      case "^":
        if (
          display.value.endsWith("+") ||
          display.value.endsWith("-") ||
          display.value.endsWith("X") ||
          display.value.endsWith("^") ||
          display.value.endsWith("÷")
        ) {
          display.value = display.value.slice(0, -1);
          displayValue = displayValue.slice(0, -1);
          displayValue += "**";
          display.value += "^";
        }
        else{
          displayValue += "**";
          display.value += "^";
        }
        break;
      default:
        display.value += button.textContent;
        displayValue += button.textContent;
    }
  });
});
