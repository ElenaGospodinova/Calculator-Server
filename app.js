function calculate(){
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let result = '';
  const operator = document.getElementById('operator').value;

  if (isNaN(num1)|| isNaN(num2)) {
    result = "Error: Invalid input value";
  } else if (operator === "add") {
    result = num1 + num2;
  } else if (operator === "subtract") {
    result = num1 - num2;
  } else if (operator === "multiply") {
    result = num1 * num2;
  } else if (operator === "divide") {
    result = num1 / num2;
  } else if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&_+=".includes(operator)) {
    result = "Error: Invalid operator";
  } else {
    result = "Error: Invalid operator";
  }
    document.getElementById("result").innerHTML = "The result is: " + result;  

}



  