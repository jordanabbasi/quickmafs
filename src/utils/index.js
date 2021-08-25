const getRandomNonzeroDigit = () => {
  return 1 + Math.floor(8 * Math.random());
}

const getTwoRandomNonzeroDigits = () => {
  return [getRandomNonzeroDigit(), getRandomNonzeroDigit()];
}

module.exports = {
  getTwoRandomNonzeroDigits
}