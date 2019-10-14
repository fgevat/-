const Expression = require('./index.js');

const test = [
  { expr: '(2 + 2) * 2', expected: 8 },
  { expr: 'max(3,12,10,1,7) + 3 ^ 5', expected: 255 },
  { expr: 'pow(min(3, 10), 5)', expected: 243 },
  { expr: '2+2*2', expected: 6 },
  { expr: '((12^2 - (144 - 11)) - 11) - 11', expected: -11 }
];

var calc = new Expression();
for (let {expr, expected} of test) {
  let res = calc.eval(expr);
  console.log(res === expected, `${expr} ожидалось ${expected}, итог ${res}`);
}
