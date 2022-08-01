let budget = 1_000_000
console.log(budget === 10 ** 6);

//Number.isFinite()

Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false

//Number.isNaN方法用来判断一个值是否严格等于NaN，它会首先判断传入的值是否为数字类型，如不是，直接返回false。


//Number.parseInt()

const num1 = Number.parseInt('12.34')
const num2 = Number.parseFloat('12.34')

console.log(`num1: ${num1}, num2: ${num2}`);

const isInteger1 = Number.isInteger(25)
const isInteger2 = Number.isInteger(25.1)
console.log(`isInteger1: ${isInteger1}, isInteger2: ${isInteger2}`);

//Math.trunc() Math.trunc方法用于去除一个数的小数部分，返回整数部分。

const trunc1 = Math.trunc(4.1)
const trunc2 = Math.trunc(4.9)
const trunc3 = Math.trunc(-4.1)
const trunc4 = Math.trunc(-4.9)
console.log(`trunc1: ${trunc1}, trunc2: ${trunc2}, trunc3: ${trunc3}, trunc4: ${trunc4}`);

//对于非数值，Math.trunc内部使用Number方法将其先转为数值。

//Math.sign() Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
//
// 它会返回五种值。
//
// 参数为正数，返回+1；
// 参数为负数，返回-1；
// 参数为 0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN。

console.log(`sign test: ${Math.sign(5)}, ${Math.sign(-5)}, ${Math.sign(0)}, 
${Math.sign(-0)}, ${Math.sign(NaN)}`);

//Math.cbrt() 方法用于计算一个数的立方根。

console.log(`cbrt test: ${Math.cbrt(-1)},${Math.cbrt(0)},${Math.cbrt(1)},${Math.cbrt(2)} `);


