var num1 = 0;
var num2 = 0;
function click1 (e) {
  num1 = parseInt(e.target.innerHTML);
  document.getElementById('num1').innerHTML=num1
}
function click2 (e) {
  num2 = parseInt(e.target.innerHTML);
  document.getElementById('num2').innerHTML=num1
}
function add () {
  var result = num1+num2;
  document.getElementById('result').innerHTML= num1 + " + " + num2 + " = " + result;
  num1 = 0
  num2 = 0
}
function subtract () {
  var result = num1-num2;
  document.getElementById('result').innerHTML= num1 + " - " + num2 + " = " + result;
  num1 = 0
  num2 = 0
}
function multiply () {
  var result = num1*num2;
  document.getElementById('result').innerHTML= num1 + " x " + num2 + " = " + result;
  num1 = 0
  num2 = 0
}
function divide () {
  var result = num1/num2;
  if (num1%num2 !== 0) {
    if (num1 > num2) {
      var integer = Math.floor(num1/num2)
      var fraction = num1%num2 + "/ " + num2
      var result = integer.toString() + " and " + fraction.toString()
      document.getElementById('result').innerHTML= num1 + " / " + num2 + " = " + result;
      console.log("Result is" + result)
    }
    else {
  var  result = num1 + " / " + num2;
    }
  }
}
function square() {
  if (num1 > 0) {
    var result = num1 + " squared is " + num1*num1
    document.getElementById('result').innerHTML=result;
    num1 = 0
    num2 = 0
  }
  else {
    var result = num2*num2
    document.getElementById('result').innerHTML=result;
    num1 = 0
    num2 = 0
  }
}
function home() {
  location.href='../index.html'
}
