module.exports = function check(str, bracketsConfig) {

  const brackets1 = ['(', '{', '|', '['];
  const closingPare = { [')']: '(', ['}']: '{', ['|']: '|', [']']: '[', };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let bracketsConfig = str[i];
    if (brackets1.includes(bracketsConfig)) {
      stack.push(bracketsConfig);
    } else {
      if (stack.length === 0) {
        return false;
      }
      
      let topBracketConfig = stack[stack.length - 1];
      if (closingPare[bracketsConfig] === topBracketConfig) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
