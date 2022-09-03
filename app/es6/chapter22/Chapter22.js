/**
 * https://es6.ruanyifeng.com/#docs/class
 * Class 的基本语法
 */

class Point{
  constructor(x,y) {
    this.x = x
    this.y = y
  }

  toString(){
    return`(${this.x}, ${this.y})`
  }

  toValue(){

  }

}


function fun22_1(){
  const point = new Point(1,2)
  console.log(`fun22_1 point:${point}`);
}




/**
 * 类的实例
 */
function fun22_3(){
  const point = new Point(1,2)
  console.log(`fun22_3 point:${point}`);
  console.log(`fun22_3 hasProperty x:${point.hasOwnProperty('x')}`);
  console.log(`fun22_3 hasProperty y:${point.hasOwnProperty('y')}`);
  console.log(`fun22_3 toString:${point.hasOwnProperty('toString')}`); //false
  console.log(`fun22_3 toString2:${point.__proto__.hasOwnProperty('toString')}`); //true
}
fun22_3()



let methodName = 'getArea'

class IncreasingCounter{
  _count = 0



  bar = 'hello';
  baz = 'world';

  get value(){
    console.log(`Getting the current value`);
    return this._count
  }

  increment(){
    this._count++
  }


  get prop(){
    return "getter"
  }

  set prop(value){
    console.log(`setter:${value}`);
  }

  //类的方法名从表达式获得
  [methodName](){
    return Math.sqrt(this._count)
  }

  static staticMethod(){
    console.log(`I am static method`);
  }
}

/**
 * 实例属性的新写法
 */
function fun22_4(){
  const count = new IncreasingCounter()
  count.increment()
  console.log(`fun22_4 count:${count.value}`);

  //取值函数(getter) 和 存值函数(setter)

  count.prop = 123
  console.log(`fun22_4 prop:${count.prop}`);

  //类的属性名可以当做表达式
  count.increment()
  console.log(`fun22_4 getArea:${count.getArea()}`);

  IncreasingCounter.staticMethod()
}
fun22_4()



class Foo{
  //私有属性
  #count = 0

  //私有方法
  #sqrt(){
    return Math.sqrt(this.count2)
  }

  printSqrt(){
    console.log(this.#sqrt());
  }

  count2 = 0

  get value(){
    console.log(`Getting current value:${this.#count}`);
    return this.#count
  }

  increment(){
    this.#count++
    this.count2++
  }


  static staticMethod(){
    console.log(`Foo static classMethod`);
  }

  static myStaticProp = 42


  static isFooType(obj){
    if (#count in obj){
      //私有属性 #count  存在，说明是 Foo 的实例
      return true
    }else{
      return false
    }
  }
}

class Bar extends Foo{

}


/**
 * 静态方法
 */
function fun22_8(){
  const foo = new Foo()

  Bar.staticMethod()
}

/**
 * 静态属性
 */
function fun22_9() {
  console.log(`静态属性:${Foo.myStaticProp}`);
}
fun22_9()


/**
 * 私有属性
 */
function fun22_10(){
   const foo = new Foo()
  foo.increment()
  foo.increment()
  //私有属性
  const count = foo.value
  console.log(`private property count:${count}, count2:${foo.count2}`)

  //私有方法
  foo.printSqrt()
}

fun22_10()



function fun22_10_inOperator(){
  let result1 = Foo.isFooType(new Foo())
  let result2 = Foo.isFooType(new IncreasingCounter())
  console.log(`result1:${result1}, result2:${result2}`);
}
fun22_10_inOperator()


/**
 * this 指向
 */

class Logger{

  constructor() {
    //在构造方法中绑定this，这样就不会找不到print方法了。
    this.printName = this.printName.bind(this)
    // this.printName = () => this
  }

  printName(name = 'there'){
    this.print(name)
  }

  print(text){
    console.log(`this usage: ${text}`);
  }
}

/**
 * 类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错
 */
function fun22_12(){
  const logger = new Logger()
  const { printName } = logger
  printName()


}

fun22_12()
