const ftoc = function(F) {
  let C = (F - 32) * (5 / 9);
  if (Number.isInteger(C)) {
    return C;
  }
  return Number(Number.parseFloat(C).toFixed(1));
};

const ctof = function(C) {
  let F = C * (9 / 5) + 32;
  if (Number.isInteger(F)) {
    return F;
  }
  return Number(Number.parseFloat(F).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
