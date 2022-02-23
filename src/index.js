module.exports = function check(str, bracketsConfig) {

  const bracketsOpen = ['(', '{', '|', '['];
  const closingPare = {[')']: '(', ['}']: '{', ['|']: '|', [']']: '['};

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let bracketsConfig = str[i];
    let topBracketsConfig = stack[stack.length - 1];

    if (bracketsOpen.includes(bracketsConfig)) {
      if (bracketsConfig === topBracketsConfig && (bracketsConfig === '|' ||bracketsConfig === '7' ||bracketsConfig === '8' ||bracketsConfig === '2' ||bracketsConfig === '5' ||bracketsConfig === '6')) {
        stack.pop();
      } else {
        stack.push(bracketsConfig);
        }
      } else {
      if (stack.length === 0) {
        return false;
      }
      
      if (closingPare[bracketsConfig] === topBracketsConfig) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}