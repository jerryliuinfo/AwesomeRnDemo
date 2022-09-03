/**
 * https://es6.ruanyifeng.com/#docs/style
 * JavaScript 风格规范
 */

/**
 * 全局常量和线程安全
 */
function func26_1() {
  //bad
  var a = 1;
  var b = 2;
  var c = 3;

  //good
  const aa = 1;
  const bb = 2;
  const cc = 3;

  //best
  const [aaa, bbb, ccc] = [1, 2, 3];
  console.log(`aaa:${aaa}, bbb:${bbb}, ccc:${ccc}`);
}

func26_1();

/**
 * 静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。
 */
function func26_2() {
  //bad
  const a = "foobar";

  const b = "foo" + a + "bar";

  //acceptable
  const aa = "foobar";
  const bb = `foo${a}bar`;
}

func26_2();

/**
 * 使用数组成员对变量赋值时，优先使用解构赋值。
 */
function fun26_3() {
  const arr = [1, 2, 3];

  //bad
  const first = arr[0];
  const second = arr[1];

  //good
  const [first2, second2] = arr;
  console.log(`first:${first}, second:${second}`);
  console.log(`first2:${first2}, second2:${second2}`);
}

fun26_3();

/**
 * 函数的参数如果是对象的成员，优先使用解构赋值。
 */
//bad
function getFullNameBad(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

//good
function getFullNameGood(user) {
  const { firstName, lastName } = obj;
}

//best
function getFullNameBeast({ firstName, lastName }) {
}


function fun_26_2_destructor() {
  //bad
  function getFullNameBad(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
    console.log(`getFullNameBad firstName:${firstName}, lastName:${lastName}`);
  }

  //good
  function getFullNameGood(user) {
    const { firstName, lastName } = user;
    console.log(`getFullNameGood firstName:${firstName}, lastName:${lastName}`);

  }

  //best
  function getFullNameBeast({ firstName, lastName }) {
    console.log(`getFullNameBeast firstName:${firstName}, lastName:${lastName}`);
  }

  let user = { firstName: "jerry", lastName: "liu" };
  getFullNameBad(user);
  getFullNameGood(user);
  getFullNameBeast(user);

}

fun_26_2_destructor();

/**
 * 如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序
 */
function fun_26_2_multi_return_value() {
  function processInputBad(input) {
    const left = 10;
    const right = 20;
    return [left, right];
  }

  function processInputGood(input) {
    const left = 10;
    const right = 20;
    return { left, right };
  }

  let [a, b] = processInputBad(null);
  const { left, right } = processInputGood(null);
  console.log(`processInputBad a:${a},b:${b}`);
  console.log(`processInputGood left:${left},right:${right}`);
}

fun_26_2_multi_return_value();


/**
 * 对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
 */
function fun_26_4() {
  //bad
  const a = {};
  a.x = 3;

  //如果不可避免要添加新的属性
  const aa = {};
  Object.assign(aa, { x: 4 });

  //best
  const aaa = { x: null };
  aaa.x = 5;
  console.log(a, aa, aaa);


  //对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写
  let ref = "some value";
  const atomBad = {
    ref: ref,
    value: 1,
    addValue: function(value) {
      return atomBad.value + value;
    },
  };

  const atomGood = {
    ref: ref,
    value: 1,
    addValue: function(value) {
      return atomBad.value + value;
    },
  };

  console.log(`bad: ${atomBad.addValue(2)}, good:${atomGood.addValue(3)}`);
}

fun_26_4();


/**
 * 使用扩展运算符（...）拷贝数组
 */
function fun26_5_copyArray() {
  const items = ["aaa", "bbb", "ccc"];

  //bad
  const itemsCopyBad = [];
  const len = items.length;
  for (let i = 0; i < len; i++) {
    itemsCopyBad[i] = items[i];
  }

  //good
  const itemsCopyGood = [...items];
  console.log(`itemsCopyBad:${itemsCopyBad}, itemsCopyGood:${itemsCopyGood}`);
}

fun26_5_copyArray();

/**
 * 立即执行函数可以写成箭头函数的形式。
 */
function fun_26_6() {
  (() => {
    console.log("Hello world");
  })();

  //那些使用匿名函数当作参数的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。
  //bad
  let badArray = [1, 2, 3].map(function(x) {
    return x * x;
  })
   let goodArray = [1, 2, 3].map(x => {
    return x * x;
  });

  console.log(`badArray:${badArray}, goodArray:${goodArray}`);

  //箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this。


  //bad
  function dividerBad(a,b, option =false){

  }
  //good
  function dividerGood(a,b, {option = false} = {}) {

  }

  /**
   * 要在函数体内使用 arguments 变量，使用 rest 运算符（...）代替。
   * 因为 rest 运算符显式表明你想要获取参数，而且 arguments 是一个类似数组的对象，
   * 而 rest 运算符可以提供一个真正的数组。
   * @returns {*}
   */
  //bad
  function concatenateAllBad(){
    const args = Array.prototype.slice.call(arguments)
    return args.join('')
  }
  //good
  function concatenateAllBad(...args){
    return args.join('')
  }


}

fun_26_6();


function fun_26_7_map(){
  let map = new Map()
  map.set("zhangsan",18)
  map.set("lisi",20)

  for (const key of map.keys()) {
    console.log(`fun_26_7_map key:${key}`);
  }

  for (const value of map.values()) {
    console.log(`fun_26_7_map value:${value}`);
  }

  for (const item of map.entries()) {
    console.log(`fun_26_7_map item key:${item[0]}, value:${item[1]}`);
  }
}
fun_26_7_map()


class Queue{
  constructor(contents = []) {
    this._queue = [...contents]
  }

  pop(){
    const value = this._queue[0]
    this._queue.slice(0,1)
    return value
  }
}
function fun26_8(){
  let contents = [1,2,3,4,5]
  const queue = new Queue(contents)
  let element = queue.pop()
  console.log(`pop1 ${element}, queue:${queue._queue}`);
   element = queue.pop()
  console.log(`pop2 ${element}, queue:${queue._queue}`);
}
fun26_8()



