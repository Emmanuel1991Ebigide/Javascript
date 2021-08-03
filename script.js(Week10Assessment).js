function spinalCase(str) {
  return str .split(/\s|_|(?=[A-Z])/) .join('-') .toLowerCase()}
console.log(spinalCase('AllThe-small Books'));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('This Is My Friend Bag'));