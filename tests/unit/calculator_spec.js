var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // calculator.add() - add 1 to 4 and get 5
  it('it should add two numbers', function(){
    assert.equal(calculator.runningTotal, 0);
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5);
  });

  // calculator.subtract() subtract 4 from 7 and get 3
  it('it should subtract two numbers', function(){
    assert.equal(calculator.runningTotal, 0);
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('it should multiply two numbers', function(){
    assert.equal(calculator.runningTotal, 0);
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

  // calculator.divide() - divide 21 by 7 and get 3
  it('it should divide one number by another', function(){
    assert.equal(calculator.runningTotal, 0);
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });

  // calculator.numberClick() - concatenate multiple number button clicks
  it('it should concatenate multiple number button clicks', function(){
    assert.equal(calculator.runningTotal, 0);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(7);
    assert.equal(calculator.runningTotal, 347);
  });

  // calculator.operatorClick() - chain multiple operations together
  it('it should chain multiple operations together', function(){
    assert.equal(calculator.runningTotal, 0);
    calculator.numberClick(5);
    calculator.operatorClick("+");
    calculator.numberClick(6);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 10);
  });

  // calculator.clearClick() - clear the running total without affecting the calculation
  it('it should clear the running total without affecting the calculation', function(){
    assert.equal(calculator.runningTotal, 0);
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 8);
    assert.equal(calculator.previousTotal, 8);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
    assert.equal(calculator.previousTotal, 8);
  });

});
