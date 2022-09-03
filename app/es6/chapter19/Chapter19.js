

function getFoo(){
  return new Promise((resolve, reject) =>{
     resolve('foo')
  })
}

function generatorTest(){
  const g = function*(){
    try {
      const foo = yield  getFoo
    }catch (e){

    }
  }
}

/**
 * 形式上，Generator 函数是一个普通函数，但是有两个特征。
 * 一是，function关键字与函数名之间有一个星号；
 * 二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
 * @returns {Generator<*, void, *>}
 */
function* helloWorldGenerator(){
  yield 'Hello'
  yield 'world'
  return 'ending'
}


function generatorTest(){
  let hw = helloWorldGenerator()
  console.log(hw.next()); //{ value: 'Hello', done: false }
  console.log(hw.next()); //{ value: 'world', done: false }
  console.log(hw.next()); //{ value: 'ending', done: true }
}
generatorTest()


/**
 * Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
 * @returns {Generator<*, void, *>}
 */
function *f(){
  console.log(`f() executed`);
}

function notYieldFun(){
  let generator = f()
  setTimeout(() => {
    generator.next()
  }, 2000)
}
notYieldFun()


function generatorWithIterator(){
  let myIterable = {}

  myIterable[Symbol.iterator] = function* (){
    yield  1;
    yield  2;
    yield  3;
  }
  console.log("result:" +[...myIterable]);
}
generatorWithIterator()


function * nextParam(){
  for (let i = 0; true;i++){
    let reset = yield  i;
    if (reset){
      i -= 1
    }
  }
}
function generatorNextParam(){
  let g = nextParam()
  console.log(g.next());
  console.log(g.next());
  console.log(g.next(true));
}
generatorNextParam()


function* foo2(){
  yield 1
  yield 2
  yield 3
  yield 4
  return 5
}

/**
 * for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法。
 */
function generatorForOf(){
  for (let v of foo2()) {
    console.log(`generatorForOf v:${v}`);
  }
}
generatorForOf()


function* numbers(){
  yield 1
  yield 2
  return 3
  yield 4
}

function iterator(){
  console.log(`... result: ${[...numbers()]}`);
  console.log(`Array from result: ${Array.from(numbers())}`);

  let [x,y] = numbers() //1 2
  let {x2,y2} = numbers() //undefined  undefined
  console.log(`x:${x}, y:${y}`);

  for (let n of numbers()){
    console.log(`n:${n}`);
  }
}

iterator()

let g = function* (){
   try {
     yield
   }catch (e){
     console.log(`内部捕获`, e);
   }
}


/**
 * 遍历器对象i连续抛出两个错误。第一个错误被 Generator 函数体内的catch语句捕获。i第二次抛出错误，
 * 由于 Generator 函数内部的catch语句已经执行过了，
 * 不会再捕捉到这个错误了，所以这个错误就被抛出了 Generator 函数体，被函数体外的catch语句捕获。
 */
function generatorThrow(){
  let i = g()
  i.next()
  try {
    i.throw('a')
    i.throw('b')
  }catch (e) {
    console.log(`外部获取`,e);
  }
}
generatorThrow()
