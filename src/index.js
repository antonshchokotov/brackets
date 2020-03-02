module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(arr => arr.join(''));
  let currentLength = 0;
  do {
    currentLength = str.length;
    brackets.forEach(x => str = str.replace(x, ''));
  } while (currentLength != str.length)
  return !str.length;
}