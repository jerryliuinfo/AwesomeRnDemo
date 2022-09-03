/**
 * Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），
 * 即对编程语言进行编程
 */
let obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey} to ${value}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
function proxyTest(){
  obj.count = 1
  ++obj.count
}
proxyTest()


let proxyGet = new Proxy({},{
  get:function(target,propKey) {
    if (propKey === 'time'){
      return '20220801'
    }else if (propKey === 'name'){
      return 'jerry'
    }
    return 'default title'
  }
})

function proxyGetTest(){
  console.log(`proxyGetTest time:${proxyGet.time},name:${proxyGet.name}, title:${proxyGet.title}`);
}

proxyGetTest()

