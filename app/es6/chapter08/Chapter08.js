//函数的扩展 https://es6.ruanyifeng.com/#docs/function


function log(x, y = 'world'){
  console.log(`x:${x}, y:${y}`);
}

console.log('Hello');
console.log('Hello', 'China');
console.log('Hello','');


//与解构赋值默认值结合使用

function foo({x, y = 5}){
  console.log(`foo x:${x}, y:${y}`);
}

foo({})
foo({x: 1})
foo({x: 1, y:2})
// foo()


//函数的 length 属性  指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
const length1 = function(a){}.length
const length2 = function(a = 5){}.length
const length3 = function(a,b, c = 5){}.length
console.log(`length1:${length1}, length2:${length2}, length3:${length3}`);

//应用 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。

function throwIfMissing(){
  throw new Error('Missing parameter')
}


function foo(mustBeProvided = throwIfMissing()){
  return mustBeProvided
}

console.log('mustBeProvided1: '+ foo(3));
// console.log('mustBeProvided2: '+foo());


//rest 参数 ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
function add(...values){
  let sum = 0
  for (let item of values) {
    sum += item
  }
  return sum
}

const rest1 = add(1.2,3)
console.log(`rest1: ${rest1}`);



function sortNumberByArgs(){
  return Array.from(arguments).sort()
}

const sortNumbersByRest = (...numbers) => numbers.sort()

const byArgs = sortNumberByArgs(3,1,2)
const byRest = sortNumbersByRest(3,1,2)

console.log(`byArgs:${byArgs}, byRest:${byRest}`);

//注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错

//name 属性 函数的name属性，返回该函数的函数名。

function foo(){}

console.log(`fun name:${foo.name}`);


//箭头函数

let f = v => v;
//等同于

var f2 = function(v) {
  return v
}

console.log(`f: ${f(1)}, arrow: ${f2(1)}`);


let sum = (num1, num2) => num1 + num2
//等价于
let sum2 = function(num1, num2){
  return num1 + num2
}

console.log(`sum:${sum(1,3)}, sum2:${sum2(1,3)}`);


//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

//报错
// let getTempItem = id => { id: id, name2: "Temp"}
let getTempItem = id => ({ id: id, name: "Temp"})
let result = getTempItem(10)
console.log(`getTempItem id: ${result.id}, name:${result.name}`);


//箭头函数可以与变量解构结合使用。

const  full = ({first,last}) => first + " " + last
//等同于
function full2(person){
  return person.first + ' '+ person.last
}

const destructor1 =  full2({first:'jerry', last: 'liu'})

console.log(`destructor1: ${destructor1}`);

//箭头函数的一个用处是简化回调函数。
const map1 = [1,2,3].map(function(x){
  return x * x
})

//等价于
const map2 = [1,2,3].map( x => x * x)
console.log(`map1: ${map1}, map2: ${map2}`);

// 普通函数写法
let sort1 = [3,10,2].sort(function (a, b) {
  return a - b;
});

// 箭头函数写法
let sort2 = [3,10,2].sort((a, b) => a - b);
console.log(`sort1: ${sort1}, sort2: ${sort2}`);
