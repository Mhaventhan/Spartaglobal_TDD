function addTwonumbers(num1,num2) {
  return num1 + num2;
  }
function Subnumbers(num1,num2) {
  return num1 - num2;
  }
function Multinumbers(num1,num2) {
  return num1 * num2;
  }
function Dividenumbers(num1,num2) {
  return num1 / num2;
  }

  function SqrRoot(num1) {
    return Math.sqrt(num1)

  }

  function power(num1,num2) {
    return(Math.pow(num1,num2))

  }

  function BmiMetric(height,weight){
    var height2 = (height/100);
    return (weight/(height2 * height2));
  }

  function BmiImpe(height, weight){
   return bmi = Math.round(weight / Math.pow(height, 2) * 703);
}

function TripCal(distance,fuel,costPerGallon,speed){
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
    Subnumbers:Subnumbers,
    Multinumbers:Multinumbers,
    Dividenumbers:Dividenumbers,
    SqrRoot:SqrRoot,
    power:power,
    BmiMetric:BmiMetric,
    BmiImpe:BmiImpe,
    TripCal:TripCal

  }
