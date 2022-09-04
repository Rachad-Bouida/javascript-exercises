const ftoc = function(fahrn) {
  let celc 
  celc = (fahrn - 32) * 5/9
  return Math.round(celc * 10) / 10;
};

const ctof = function(cels) {
  let fahrn
  fahrn = cels * 9/5 + 32
  return Math.round(fahrn * 10)/ 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
