function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

function operate(operator, num1, num2) {
  if (num1 === NaN || num2 === NaN) return "First Or Second Number Empty";
  if (!operator) return "Missing Required Operator";
  if (num1 === 0 && num2 === 0 && operator === "/") return "Cannot Divide By 0";
  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return subtract(num1, num2);
  }
  if (operator === "x") {
    return multiply(num1, num2);
  }
  if (operator === "/") {
    return divide(num1, num2);
  }
  if (operator === "%") {
    return remainder(num1, num2);
  }
}

function StoreDisplayValue() {
  if (operator) {
    counter = 0;
    num2 = parseFloat(display.textContent);
  } else num1 = parseFloat(display.textContent);
}

function RoundToNearestDecimal(float) {
  return Math.ceil(float * 100) / 100;
}

function CheckForFloat(num) {
  if (Number(num) === num && num % 1 !== 0) return RoundToNearestDecimal(num);
  return num;
}

let calculator = document.querySelector(".container");
let display = document.querySelector("#display");
let placeholder = document.querySelector("#placeholder");
let children = calculator.children;
let num1 = 0;
let num2 = 0;
let operator = "";
let counter = 0;

for (let i = 0; i < children.length; i++) {
  children[i].addEventListener("click", () => {
    if (
      parseFloat(children[i].textContent) ||
      parseFloat(children[i].textContent) === 00
    ) {
      if (placeholder) {
        display.removeChild(placeholder);
        placeholder = undefined;
      }
      display.innerHTML += "<h1>" + children[i].textContent + "</h1>";
      StoreDisplayValue();
    } else {
      if (
        children[i].textContent === "+" ||
        children[i].textContent === "-" ||
        children[i].textContent === "×" ||
        children[i].textContent === "÷" ||
        children[i].textContent === "%"
      ) {
        if (operator) {
          num1 = operate(operator, num1, num2);
          num2 = "";
          display.innerHTML = "<h1 id='placeholder'>" + num1 + "</h1>";
          placeholder = document.querySelector("#placeholder");
          operator = children[i].textContent;
        } else {
          counter++;
          display.textContent = "";
          operator = children[i].textContent;
          display.innerHTML = "<h1 id='placeholder'>" + num1 + "</h1>";
          placeholder = document.querySelector("#placeholder");
        }
      } else if (children[i].textContent === "C") {
        if (display.children.length === 1) {
          display.innerHTML = "<h1 id='placeholder'>0</h1>";
          placeholder = document.querySelector("#placeholder");
          StoreDisplayValue();
        } else {
          display.removeChild(display.lastElementChild);
          StoreDisplayValue();
        }
      } else if (children[i].textContent === "AC") {
        display.textContent = "";
        num1 = NaN;
        num2 = NaN;
        operator = "";
        display.innerHTML = "<h1 id='placeholder'>0</h1>";
        placeholder = document.querySelector("#placeholder");
      } else if (children[i].textContent === "=") {
        display.innerHTML =
          "<h1 id='placeholder'>" +
          CheckForFloat(operate(operator, num1, num2)) +
          "</h1>";
        placeholder = document.querySelector("#placeholder");
        num1 = NaN;
        num2 = NaN;
        operator = "";
      } else if (children[i].textContent === ".") {
        let displayChildren = display.children;
        for (let i = 0; i < displayChildren.length; i++) {
          if (displayChildren[i].textContent === ".") return;
        }
        display.innerHTML += "<h1>" + children[i].textContent + "</h1>";
        StoreDisplayValue();
      }
    }
    console.log(num1);
    console.log(operator);
    console.log(num2);
  });
}
