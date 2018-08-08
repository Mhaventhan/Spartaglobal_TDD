describe("Testing calculator methods", function(){
  var calculator = require("../lib/CalculatorMethods.js");

  it("Should add two numbers together", function(){
    expect(calculator.addTwonumbers(3,2)).toEqual(5);
    expect(calculator.addTwonumbers(7,2)).toEqual(9);

  });
  it("Should subtract two numbers together", function(){
    expect(calculator.Subnumbers(3,2)).toEqual(1);
    expect(calculator.Subnumbers(5,2)).toEqual(3);

  })

})
