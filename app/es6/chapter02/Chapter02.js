
//ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效
{
  let a = 10;
  var b = 1
}

//ReferenceError: a is not defined.
// console.log(a);
console.log(b);

var array = []

for (var i = 0; i < 10; i++) {
  array[i] = function() {
    console.log(i);
  }
}
//变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i，因此输出 10
array[6]()


//var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined
console.log(foo);
var foo = 2


// let 的情况
// console.log(bar); // 报错ReferenceError
let bar = 2;

const PI = 3.14

if (true){
  const  MAX = 5
}

const foo2 = {}
foo2.prop = 123
console.log(`foo2 prop: ${foo2.prop}`);

//如果真的想将对象冻结，应该使用Object.freeze方法。
const  horse = Object.freeze({})
horse.prop = 123
console.log(`horse prop: ${horse.prop}`);

//除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数
var constanize = (obj) => {
  Object.freeze(obj)
  Object.keys(obj).forEach((key,index) => {
    if (typeof obj[key] === 'object'){
      constanize(obj[key])
    }
  })
}

 class User{
  constructor(name) {
    this.name = name
  }
}


const user = new User("zhangsan")
// constanize(user)

user.name = "lisi"
console.log(`user name:${user.name}`);


//顶层对象的属性

var a = 1
console.log(`a1"${this.a}`);
let bb = 2
console.log(`a2"${window.bb}`);
