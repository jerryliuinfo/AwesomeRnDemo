function promiseBasicUsage(){
  const promise = new Promise(function(resolve,reject){
    let value = Math.random()
    if (value > 0.6){
      resolve(value)
    }else {
      reject('less than 0.6')
    }
  })

  promise.then((result) => {
    console.log(`promiseBasicUsage on success: ${result}`);
    }
  ).catch((error) => {
    console.log(`promiseBasicUsage on failed: ${error}`);
  })

}
promiseBasicUsage()


function promiseTimeout(){
  function timeout(ms){
    return new Promise((resolve,reject) => {
      setTimeout(resolve, ms, 'done')
    })
  }

  timeout(100).then((value) => {
    console.log(`promiseTimeout value:${value}`);
  })
}
promiseTimeout()


function promiseExecuteImmediately(){
  let promise = new Promise(function(resolve, reject){
    console.log(`Promise`);
    resolve()
  })
  promise.then(function(){
    console.log(`resolved`);
  })
  console.log(`Hi`);
}

promiseExecuteImmediately()


function getPromise(value){
  let boundaryValue = 0.5
  const promise = new Promise(function(resolve,reject){
    if (value > boundaryValue){
      resolve(value)
      console.log(`value: ${value}, bigger than ${boundaryValue}, resolve`)
    }else {
      resolve(value)

      // reject(`value: ${value}, less than  ${boundaryValue}. reject`)
      console.log(`value: ${value}, less than  ${boundaryValue}. reject`)
    }
  })
  return promise
}

function promiseFinally(){
  const promise = getPromise(Math.random())
  promise.then((result) => {
    console.log(`promiseFinally do then result:${result}`);
  }).catch((error) => {
    console.log(`promiseFinally catch error: ${error}`);
  }).finally(() => {
    console.log(`promiseFinally do finally`);
  })
}
promiseFinally()

/**
 * Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
 * 1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
 *
 * （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 */
function promiseAll(){
  const promises = [1,2,3,4].map((value) => {
    return getPromise(Math.random())
  })
  Promise.all(promises).then((result) => {
    console.log(`promiseAll then: ${result}`);
  }).catch((error) => {
    console.log(`promiseAll error: ${error}`);
  })
}
promiseAll()


/**
 * 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法
 */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(' hello')
  }, 1000)
}).then(result => result)
  .catch(e => e)

const p2 = new Promise((resolve, reject) => {
  throw new Error(' 报错了')
  // resolve(' hello')

}).then(result => result)
  .catch(e => e)

function promiseAllTest2(){
  //哪个先回调就执行哪个
  Promise.all([p1,p2]).then( (result) => {
    console.log(`promiseAllTest2 all then: ${result}`)
  }).catch( (e) => {
    console.log(`promiseAllTest2 catch error: ${e}`);
  })
}
promiseAllTest2()


async function promiseAllTest3() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(' hello')
    }, 1000)
  }).then(result => result)
    .catch(e => e)

  const p2 = new Promise((resolve, reject) => {
    throw new Error(' 报错了')
  }).then(result => result)
  try {
    await Promise.all([p1, p2])
    console.log('promiseAllTest3 所有请求都成功。');
  }catch (err){
    console.log(`promiseAllTest3 至少一个请求失败，其他请求可能还没结束, error:${err}`);
  }
}
promiseAllTest3().then(r => console.log(`promiseAllTest3 result:${r}`))



/**
 * Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
 * 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，
 * 就传递给p的回调函数。
 */
function promiseRace(){
  const p = Promise.race([
    p1,
    new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error('Promise2 request timeout')), 2000)
    })
  ]);
  p.then((result) => {
    console.log(`promiseRace then result:${result}`);
  }).catch( error => {
    console.log(`promiseRace catch error:${error}`);
  })
}
promiseRace()

/**
 * 有时候，我们希望等到一组异步操作都结束了，不管每一个操作是成功还是失败，再进行下一步操作。但是，
 * 现有的 Promise 方法很难实现这个要求
 * Promise.all()方法只适合所有异步操作都成功的情况，如果有一个操作失败，就无法满足要求。
 *  { status: 'fulfilled', value: 42 },
 * { status: 'rejected', reason: -1 }
 * results的每个成员是一个对象，对象的格式是固定的，对应异步操作的结果。
 * 成员对象的status属性的值只可能是字符串fulfilled或字符串rejected，用来区分异步操作是成功还是失败。如果是成功（fulfilled），
 * 对象会有value属性，如果是失败（rejected），会有reason属性，对应两种状态时前面异步操作的返回值
 */
async function promiseAllSettled() {
  const resloved = Promise.resolve(42)
  const rejected = Promise.reject(-1)
  const allSettledPromise =  Promise.allSettled([resloved, rejected])
  allSettledPromise.then((results) => {
    console.log(`Promise allSettled results:${results}`);
    //
    console.log(results[0], results[1]);

    const successPromise = results.filter(p => p.status === 'fulfilled')
    const errorReason = results.filter(p => p.status === 'rejected')
      .map(p => p.reason)
    console.log(`Promise allSettled errorReason:${errorReason} `);
  })
}
promiseAllSettled()

function fetch(url){
  return new Promise((resolve, reject) => {
    let timeout = Math.random() * 1000
    console.log(`fetch url:${url}, timeout:${timeout}`);
    setTimeout(() =>{
      if (timeout > 500){
        resolve(`resolve ${url}`)
      }else {
        reject(`reject ${url}`)
      }
    },timeout)
  })
}

/**
 * ES2021 引入了Promise.any()方法。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。
 * 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。
 * @returns {Promise<void>}
 */
async function promiseAny() {
  const promise = [
    fetch('/aaa').then(() => "a"),
    fetch('/bbb').then(() => "b"),
    fetch('/ccc').then(() => "c"),
  ]
  try {
    const first = await Promise.any(promise)
    console.log(`promiseAny first:${first}`);
  }catch (e) {
    console.log(`promiseAny error:${e}`);
  }



  var resolved = Promise.resolve(42);
  var rejected = Promise.reject(-1);
  var alsoRejected = Promise.reject(Infinity);

  Promise.any([resolved, rejected, alsoRejected]).then(function (result) {
    console.log(`Promise.any result`); // 42
  });

  Promise.any([rejected,alsoRejected]).catch((results) => {
    console.log(`Promise.any results instanceof AggregateError`); // true
    console.log(`Promise.any: ${results.errors}`); // [-1, Infinity]
  })
}

promiseAny()


function promiseResolve(){
  //（1）参数是一个 Promise 实例
  let promise =  Promise.resolve(new Promise((resolve, reject) => {
    resolve(100)
  }))
  promise.then((result) => {
    console.log(`PromiseResolve result:${result}`);
  })

  //（2）参数是一个thenable对象
  let thenable = {
    then:function(resolve,reject){
      resolve(42)
    }
  }
  let p1 = Promise.resolve(thenable)
  p1.then((result) => {
    console.log(`PromiseResolve result2: ${result}`);
  })

  /**
   * 参数不是具有then()方法的对象，或根本就不是对象
   * 如果参数是一个原始值，或者是一个不具有then()方法的对象，则Promise.resolve()方法返回一个新的 Promise 对象，状态为resolved
   */

  let p2 = Promise.resolve('Hello')
  p2.then((result) => {
    console.log(`PromiseResolve result3: ${result}`);
  })

  //（4）不带有任何参数
  let p3 = Promise.resolve()
  p3.then((result) => {
    console.log(`PromiseResolve p3 result:${result}`);
  })
}
promiseResolve()


/**
 * Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
 * 以下代码生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。
 * Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。
 */
function promiseReject(){
  // 等同于
  const p = new Promise((resolve, reject) => reject('出错了'))
  p.then(null, function (s) {
    console.log(`Promise reject then ${s}`)
  });

  Promise.reject('出错了').catch((e) => {
    console.log(`Promise reject e:${e}`);
  })
}
promiseReject()


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
