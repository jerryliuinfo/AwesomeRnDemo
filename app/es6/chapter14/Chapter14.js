/**
 * Set 和 Map
 * https://es6.ruanyifeng.com/#docs/set-map
 */

function setTest(){
  let array = [2,3,5,4,5,2,3]
  const set = new Set(array)
    // [2, 3, 5, 4, 5, 2, 2].forEach(x => set.add(x));

  for (const x of set) {
    console.log(`x: ${x}`);
  }
  //下面方法也可以用于，去除字符串里面的重复字符。
  let result = [...new Set(array)]
  console.log(`result: ${result}`);

}
setTest()


function setIterator(){
  let array = [2,3,5,4,5,2,3]
  const set = new Set(array)
  for (const key of set.keys()) {
    console.log(`setIterator key: ${key}`);
  }
  for (const item of set.values()) {
    console.log(`setIterator item: ${item}`);
  }
  for (const item of set.entries()) {
    console.log(`setIterator entry key: ${item}`);
  }

  set.forEach( (value,key) => {
    console.log(`forEach key:${key}, value: ${value}`);
  })
}
setIterator()


/**
 * WeakSet
 * WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
 *
 * 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
 */

function weakSetTest(){
  const ws = new WeakSet()
  //TypeError: Invalid value used in weak set
  // ws.add(1)
}
weakSetTest()


function mapTest(){
  const  map = new Map()
  const o = {p: 'Hello World'}
  map.set(o, 'content')
  console.log(`mapTest o: ${map.get(o)}, hasO: ${map.has(o)}`);
  map.delete(o)
  console.log(`mapTest after delete, hasO: ${map.has(o)}`);

  const userMap = new Map()
  const key1 = 'zhangsan'
  userMap.set(key1, 18)
  userMap.set('lisi', 20)
  console.log(`size: ${userMap.size}, has zhangsan:${userMap.has(key1)}, value:${userMap.get(key1)}`);
  userMap.delete(key1)
  console.log(`mapTest delete value:${userMap.get(key1)}`);

  //clear方法清除所有成员，没有返回值。
  userMap.clear()
  console.log(`mapTest after clear:${userMap.size}`);



}
mapTest()


/**
 * 与其他数据结构的互相转换 § ⇧
 */

function mapTransform(){
  const map = new Map()
    .set('zhangsan',18)
    .set('lisi',20)

  let array = [...map]
  console.log(`array:${array}`);
}
mapTransform()
