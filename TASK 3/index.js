let screen = document.getElementById("screen");

const solveEquation = () => {
  let equation = screen.value;
  equation = equation.replace("÷", "/");
  equation = equation.replace("x", "*");

  screen.value = eval(equation);
};

const handleClick = (e) => {
  let pressedBtn = document.getElementById(e.id);
  switch (pressedBtn.id) {
    case "clear":
      screen.value = 0;
      break;
    case "one":
      if (screen.value === "0.") {
        screen.value += 1;
      } else if (screen.value != 0) {
        screen.value += 1;
      } else {
        screen.value = 1;
      }
      break;
    case "two":
      if (screen.value === "0.") {
        screen.value += 2;
      } else if (screen.value != 0) {
        screen.value += 2;
      } else {
        screen.value = 2;
      }
      break;
    case "zero":
      if (screen.value != 0) {
        screen.value += 0;
      } else {
        screen.value = 0;
      }
      break;
    case "three":

      if (screen.value === "0.") {
        screen.value += 3;
      }
      else if (screen.value != 0) {
        screen.value += 3;
      } else {
        screen.value = 3;
      }
      break;
    case "four":
        if (screen.value === "0.") {
            screen.value += 4;
          }
          else if (screen.value != 0) {
        screen.value += 4;
      } else {
        screen.value = 4;
      }
      break;
    case "five":
        if (screen.value === "0.") {
            screen.value += 5;
          }
          else if (screen.value != 0) {
        screen.value += 5;
      } else {
        screen.value = 5;
      }
      break;
    case "six":
        if (screen.value === "0.") {
            screen.value += 6;
          }
          else if (screen.value != 0) {
        screen.value += 6;
      } else {
        screen.value = 6;
      }
      break;
    case "seven":
        if (screen.value === "0.") {
            screen.value += 7;
          }
          else if (screen.value != 0) {
        screen.value += 7;
      } else {
        screen.value = 7;
      }
      break;
    case "eight":
      if (screen.value === "0.") {
        screen.value += 8;
      } else if (screen.value != 0) {
        screen.value += 8;
      } else {
        screen.value = 8;
      }
      break;
    case "nine":
      if (screen.value === "0.") {
        screen.value += 9;
      } else if (screen.value != 0) {
        screen.value += 9;
      } else {
        screen.value = 9;
      }
      break;
    case "add":
      if (screen.value != 0) {
        screen.value += "+";
      } else {
        screen.value = 0;
      }
      break;
    case "sub":
      if (screen.value != 0) {
        screen.value += "-";
      } else {
        screen.value = 0;
      }
      break;
    case "mul":
      if (screen.value != 0) {
        screen.value += "x";
      } else {
        screen.value = 0;
      }
      break;
    case "div":
      if (screen.value != 0) {
        screen.value += "÷";
      } else {
        screen.value = 0;
      }
      break;
    case "dec":
      if (screen.value != 0) {
        screen.value += ".";
      } else {
        screen.value = "0.";
      }
      break;

    case "equals":
      solveEquation();
  }
};

console.log(screen.value);
