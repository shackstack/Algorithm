/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false;

  const stringifiedX = x.toString();

  for (let i = 0; i < stringifiedX.length / 2; i++) {
    if (stringifiedX.at(i) !== stringifiedX.at(-i - 1)) return false;
  }

  return true;
};
