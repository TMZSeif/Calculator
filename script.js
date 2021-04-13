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
  if (operator === "add") {
    console.log(add(num1, num2));
  }
  if (operator === "subtract") {
    console.log(subtract(num1, num2));
  }
  if (operator === "multiply") {
    console.log(multiply(num1, num2));
  }
  if (operator === "divide") {
    console.log(divide(num1, num2));
  }
  if (operator === "remainder") {
    console.log(remainder(num1, num2));
  }
}

operate("remainder");
