var num1 = 0;
var num2 = 0;
function click1 (e) {
  num1 = parseInt(e.target.innerHTML);
}
function click2 (e) {
  num2 = parseInt(e.target.innerHTML);
}
function add () {
  var result = num1+num2;
  document.getElementById('result').innerHTML=result;
  num1 = 0
  num2 = 0
}
function subtract () {
  var result = num1-num2;
  document.getElementById('result').innerHTML=result;
  num1 = 0
  num2 = 0
}
function multiply () {
  var result = num1*num2;
  document.getElementById('result').innerHTML=result;
  num1 = 0
  num2 = 0
}
function divide () {
  var result = num1/num2;
  if (num1%num2 !== 0) {
    if (num1 < num2) {
      var integer = Math.floor(num1/num2)
      var fraction = num1%num2
      answer = integer.toString() + " " + fraction.toString() + "/" + num2
    }
    result = num1 + " / " + num2;
  }
  document.getElementById('result').innerHTML=result;
  num1 = 0
  num2 = 0
}
