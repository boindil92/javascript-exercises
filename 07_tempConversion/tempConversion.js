const convertToCelsius = function(f) {
  
  const k=1.8;
  let c= (f-32)/k;
  let cRound=Math.round(c*10)/10;

  return cRound;


};

const convertToFahrenheit = function(a) {

  b=a*1.8+32;
  bOneDec= Math.round(b*10)/10;

  return bOneDec;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
