//字符串的新增方法: https://es6.ruanyifeng.com/#docs/string-methods
// String.raw() ES6 还为原生的 String 对象，提供了一个raw()方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。

let raw = String.raw`Hi \n ${2+3}`
console.log(`raw:${raw}`);


// 实例方法：includes(), startsWith(), endsWith()

let s = 'Hello world!'
let r1 = s.startsWith('hello',6)
let r2 = s.endsWith('!',)
let r3 = s.startsWith('o')
console.log(`r1:${r1}, r2:${r2}, r3:${r3}`);

//repeat

let repeat1 = 'hello'.repeat(2)
console.log(`repeat1:${repeat1}`);

//参数如果是小数，会被取整。
let a = 'na'.repeat(2.9)
let b = 'na'.repeat(0)
//Invalid count value
// let c = 'na'.repeat(-1)
console.log(`a:${a}, b:${b}`);

//实例方法：padStart()，padEnd()
//ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
let source = 'x'
console.log(source.padStart(5,'ab'));
console.log(source.padStart(4,'ab'));
console.log(source.padEnd(5,'ab'));
console.log(source.padEnd(4,'ab'));


//实例方法：trimStart()，trimEnd()

const value = ' abc '

const trim = value.trim()
const trimStart = value.trimStart()
const trimEnd = value.trimEnd()

console.log(`trim:${trim}, trimStart:${trimStart}, trimEnd:${trimEnd}`);

//replaceAll
let replaceStr = "aabbcc"
const replace = replaceStr.replace('b', '_')
const replaceAll = replaceStr.replaceAll('b', '_')
console.log(`replace1:${replace}, replaceAll:${replaceAll}`);
