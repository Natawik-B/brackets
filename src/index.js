module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  let newBracketsConfig = new Map(bracketsConfig);

  str.split('').forEach((elem) => {
    if (elem == newBracketsConfig.get(stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(elem);
    }
  })
  return stack.length !== 0 ? false : true;
}