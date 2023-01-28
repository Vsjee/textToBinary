export const toBinary = (input: string): String => {
  let result: string = '';
  for (let i = 0; i < input.length; i++) {
    let bin = input[i].charCodeAt(0).toString(2);
    result += Array(8 - bin.length + 1).join('0') + bin + ' ';
  }
  return result;
};
