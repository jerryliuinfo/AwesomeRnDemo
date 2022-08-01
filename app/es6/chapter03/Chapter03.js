//ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

let [a,b,c] = [1,2,3]
console.log(`a:${a}, b:${b}, c:${c}`);

let [foo, [[bar], baz]] = [1,[[2],3]]
console.log(`foo:${foo}, bar:${bar}, baz:${baz}`);


let [,,third] = ['foo','bar', 'baz']
console.log(`third: ${third}`);

let [x,,y] = [1,2,3,4]
console.log(`x:${x}, y:${y}`);

let [header, ...tail] = [1,2,3,4]
console.log(`header: ${header}, tail:${tail}`);

//默认值
let [dog = true] = []

let [x1, y1 = 'b'] = ['a']
let [x2, y2 = 'b'] = ['a', undefined]
console.log(`dog:${dog}, x1:${x1}, y1:${y1}, x2:${x2}, y2:${y2}`);

//对象的解构赋值
//解构不仅可以用于数组，还可以用于对象。

let userJson =  {name: 'zhangsan', age:18}
let {name, age,email} =userJson
console.log(`name:${name},age:${age},email:${email}`);

//果变量名与属性名不一致，必须写成下面这样
let {name: username} = userJson
console.log(`username:${username}`);

//对象的解构也可以指定默认值。
let {avator1,avatorDefault = "www.avator.com" } = userJson
console.log(`avator1:${avator1}, avatorDefault:${avatorDefault}`);


//字符串的解构赋值
const [chart1,chart2,chart3,chart4,chart5] = 'Hello'
console.log(`chart2:${chart2},chart5:${chart5}`);
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

let {length: size} = 'hello'
console.log(`size:${size}`);

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

let {toString:s1} = 123
let {toString:s2} = true
console.log(`s1 is Number:${s1 === Number.prototype.toString}`);
console.log(`s2 is Boolean:${s2 === Boolean.prototype.toString}`);

//函数参数的解构赋值

function add([x,y = 4]){
  return x +y
}

add([1,2])


function move({x = 0, y = 0} = {}){
  return [x,y]
}

const move1 = move({x:3, y:8})
const move2 = move({x:3})
const move3 = move({})
const move4 = move()

console.log(`move1:${move1}, move2:${move2}, move3:${move3}, move4:${move4}`);
