const digitLength = (num: number) => (Math.log(num) * Math.LOG10E + 1) | 0;
const shorter = (num: number, toFixed = 2) =>
  num % 1 !== 0 ? num.toFixed(toFixed) : num + ".00";

function prettifyNumber(number: number, toFixed = 2) {
  let letters = [
    "K",
    "M",
    "B",
    "T",
    "Q",
    "A",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "L",
  ];
  let zeros = digitLength(number) - 1;

  if (zeros < 3) return shorter(number, toFixed);

  let multiples = Math.floor(zeros / 3);

  let symbol = letters[multiples - 1];
  let divider = Math.pow(10, multiples * 3);

  return shorter(number / divider, toFixed) + symbol;
}

export default prettifyNumber;
