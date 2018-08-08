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
  it("Should multiply two numbers together", function(){
    expect(calculator.Multinumbers(6,2)).toEqual(12);
    expect(calculator.Multinumbers(5,2)).toEqual(10);

  })
  it("Should divide two numbers together", function(){
    expect(calculator.Dividenumbers(6,2)).toEqual(3);
    expect(calculator.Dividenumbers(12,2)).toEqual(6);

  })
  it("Should power two numbers", function(){
    expect(calculator.power(6,2)).toEqual(36);
    expect(calculator.power(12,2)).toEqual(144);

  })
  it("Should return square root of the number", function(){
    expect(calculator.SqrRoot(25)).toEqual(5);
    expect(calculator.SqrRoot(64)).toEqual(8);

  })
  it("Should return BMI for metric", function(){
    expect(calculator.BmiMetric(100,65)).toEqual(65);
    expect(calculator.BmiMetric(100,35)).toEqual(35);


  })

  it("Should return the BM1 for imperial", function(){
     expect(calculator.BmiImpe(100,200)).toEqual(14);
     expect(calculator.BmiImpe(40,150)).toEqual(66);
   })
   it("Should calculate trip figures", function(){
     expect(calculator.TripCal(60,60,1,60)).toEqual(1);
   })


})
