exports.calculatorModule = Calculator;

function Calculator(skinName) {
  this.skin = skinName
}  //this is a constructor

Calculator.prototype.pingPong = function(goal) {
  var output = [];// this is a prototype or a method code
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}
