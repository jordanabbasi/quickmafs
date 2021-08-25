const getRandomNonzeroDigit = () => {
  return 1 + Math.floor(8 * Math.random());
}

const getTwoRandomNonzeroDigits = () => {
  return [getRandomNonzeroDigit(), getRandomNonzeroDigit()];
}

const getEmojiForStreak = (streak) => {
  const emoji = ['😞','😊','😎','🔥'];

  if (streak >= 10) return emoji[3];
  if (streak >= 5) return emoji[2];
  if (streak >= 1) return emoji[1];
  return emoji[0];
}

const isCorrectSum = (nums, answer) => {
  return nums[0] + nums[1] === answer;
}

module.exports = {
  getTwoRandomNonzeroDigits,
  getEmojiForStreak,
  isCorrectSum
}