/**
 * Write an algorithm that maps a int pass to excel col names
 * eg - 
 * A    - 1
 * B    - 2
 * Z    - 26
 * AA   - 27
 * AZ   - 52 .... and so on.
 * @number {*} input 
 * @returns string
 */


export const mapNoToExcelColNames = (input) => {
  var mapArr = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
  let num = input;
  let res='';

  while(num >= 1) {
    const mod = num % 26;
    res = mapArr[mod] + res;
    const decfac = mod === 0 ? num - 26 : num - mod;
    num = Math.floor(decfac/26);
  }

  return res;
}
