const plus_button = document.getElementById("plus");
const sub_button = document.getElementById("minus");
const divide_button = document.getElementById("divide");
const multiply_button = document.getElementById("multiply");
const point_button = document.getElementById("point");
const equals_button = document.getElementById("equals");
const display = document.getElementById("display");

divide_button.disabled = true;
multiply_button.disabled = true;
point_button.disabled = true;
equals_button.disabled = true;

let calculation = "";
let result = 0;
equal_pressed = 0;

function update_display() {
  display.value = calculation;
}
function update_display_sign() {
  display.value = result;
}

function updatecalculation(button) {
  divide_button.disabled = false;
  multiply_button.disabled = false;
  point_button.disabled = false;
  equals_button.disabled = false;

  if (button === "one") {
    calculation += "1";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "two") {
    calculation += "2";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "three") {
    calculation += "3";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "four") {
    calculation += "4";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "five") {
    calculation += "5";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "six") {
    calculation += "6";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "seven") {
    calculation += "7";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "eight") {
    calculation += "8";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "nine") {
    calculation += "9";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "zero") {
    calculation += "0";
    console.log(calculation);
    update_display();
    result = calculation;
  } else if (button === "plus") {
    if (equal_pressed > 0) {
      result += "+";
      calculation = result;
      update_display_sign();
    } else {
      calculation += "+";
      console.log(calculation);
      update_display();
    }
  } else if (button === "minus") {
    if (equal_pressed > 0) {
      result += "-";
      calculation = result;
      update_display_sign();
    } else {
      calculation += "-";
      console.log(calculation);
      update_display();
    }
  } else if (button === "divide") {
    if (equal_pressed > 0) {
      result += "/";
      calculation = result;
      update_display_sign();
      divide_button.disabled = true;
    } else {
      calculation += "/";
      console.log(calculation);
      update_display();
      divide_button.disabled = true;
    }
  } else if (button === "multiply") {
    if (equal_pressed > 0) {
      result += "*";
      calculation = result;
      update_display_sign();
      multiply_button.disabled = true;
    } else {
      calculation += "*";
      console.log(calculation);
      update_display();
      multiply_button.disabled = true;
    }
  } else if (button === "point") {
    if (equal_pressed > 0) {
      result += ".";
      calculation = result;
      update_display_sign();
    } else {
      calculation += ".";
      console.log(calculation);
      update_display();
    }
  } else if (button === "equals") {
    equal_pressed += 1;
    try {
      calculation = eval(result);
      console.log(calculation);
      update_display();
      result = calculation;
      calculation = "";
    } catch (error) {
      calculation = "Syntax Error";
      update_display();
    }
  } else {
    result = "";
    calculation = "";
    console.log(calculation);
    divide_button.disabled = true;
    multiply_button.disabled = true;
    point_button.disabled = true;
    equals_button.disabled = true;
    update_display();
  }
}
