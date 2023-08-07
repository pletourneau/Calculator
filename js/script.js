// business logic
function product(number1, number2) {
  return number1 / number2;
}

function add(number1, number2) {
  return number1 + number2;
}


// user interface logic 


const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));



window.alert(product(number1, number2));




