function addTwonumbers(num1,num2) {
  return num1 + num2;
  }
function subNumbers(num1,num2) {
  return num1 - num2;
  }
function multiNumbers(num1,num2) {
  return num1 * num2;
  }
function divideNumbers(num1,num2) {
  return num1 / num2;
  }

  function sqrRoot(num1) {
    return Math.sqrt(num1)

  }

  function power(num1,num2) {
    return(Math.pow(num1,num2))

  }

  function bmiMetric(height,weight){
    var height2 = (height/100);
    return (weight/(height2 * height2));
  }

  function bmiImpe(height, weight){
   return bmi = Math.round(weight / Math.pow(height, 2) * 703);
}

function tripCal(distance,fuel,costPerGallon,speed){
  if (speed > 60 ) {
    // if the speed is greater than 60 reduce by 2 mpg.
    var mpg = (speed % 60 * 2);
    var reduced_mpg = fuel -  mpg;
    return (distance/reduced_mpg)*costPerGallon;

  }else {
    return (distance/fuel)*costPerGallon;
  }

}


  module.exports = {
    addTwonumbers:addTwonumbers,
    subNumbers:subNumbers,
    multiNumbers:multiNumbers,
    divideNumbers:divideNumbers,
    sqrRoot:sqrRoot,
    power:power,
    bmiMetric:bmiMetric,
    bmiImpe:bmiImpe,
    tripCal:tripCal

  }
