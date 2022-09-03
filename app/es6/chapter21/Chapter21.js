/**
 * ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
 */
const fs = require("fs");
const Console = require("console");

const readFile = function(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, function(err, data) {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
};

const file1Path = "E:\\etc\\text1.txt";
const file2Path = "E:\\etc\\text2.txt";


const genReadFile = function* () {
  const f1 = yield readFile("/etc/fstab");
  const f2 = yield readFile("/etc/shells");
  console.log(f1.toString());
  console.log(f2.toString());
};
genReadFile();
/**
 * async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
 * 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
 * @returns {Promise<*>}
 */
const asyncReadFile = async function() {
  const f1 = await readFile(file1Path);
  const f2 = await readFile(file2Path);

  console.log(`f1 result:${f1.toString()}`);
  console.log(`f2 result:${f2.toString()}`);
  return f1 + f2;
};

asyncReadFile().then((result) => {
  console.log(`async then:${result}`);
});

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  console.log(`asyncPrint before await`);
  await timeout(ms);
  //等待 timeout 函数执行完成，才会执行下面的语句
  console.log(`asyncPrint after await`);
}

function testAsyncAwait() {
  asyncPrint("Hello world", 200);
}

testAsyncAwait();


//函数声明
async function foo() {

}

const foo2 = async function() {

};
//对象的方法
let obj = {
  async foo3() {
    /*return await new Promise((resolve, reject) =>{
      resolve ('foo3')
    })*/
    //async函数内部return语句返回的值，会成为then方法回调函数的参数。
    return "foo3";
  },
};

function multiTypeAsync() {
  obj.foo3().then((result) => {
    console.log(`multiTypeAsync result:${result}`);
  });
}

multiTypeAsync();


/**
 * async函数内部return语句返回的值，会成为then方法回调函数的参数。
 * @returns {Promise<string>}
 */
async function f1() {
  return "Hello f1";
}

function returnPromise() {
  f1().then((result) => {
    console.log(`returnPromise then:${result}`);
  }).catch((error) => {
    console.log(`returnPromise catch:${error}`);
  });
}

returnPromise();


async function reject() {
  throw new Error("出错了");
}

function rejectPromise() {
  reject().then((result) => {
    console.log(`rejectPromise then:${result}`);
  }, (error) => {
    console.log(`rejectPromise error:${error}`);
  });
}

rejectPromise();

async function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "www.baidu.com");
  });
}

async function getUserInfo() {
  console.log(`begin getUserInfo`);
  let response = await fetch();
  return response;
}

getUserInfo().then((result) => {
  console.log(`getUserInfo then:${result} `);
}).catch((error) => {
  console.log(`getUserInfo catch:${error} `);
});


//
// class Sleep {
//   constructor(timeout) {
//     this.timeout = timeout;
//   }
//   then(resolve, reject) {
//     const startTime = Date.now();
//     setTimeout(
//       () => resolve(Date.now() - startTime),
//       this.timeout
//     );
//   }
// }


async function awaitReject() {
  await Promise.reject("出错了");
}

/**
 * await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。
 */
function awaitRejectTest() {
  awaitReject().then(result => {
    console.log(`awaitRejectTest then:${result}`);
  }).catch(error => {
    console.log(`awaitRejectTest error:${error}`);
  });
}

awaitRejectTest();

/**
 * 任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行
 */

async function f3() {
  await Promise.reject("出错了");
  await Promise.resolve("Hello world");
}

async function f4() {
  try {
    await Promise.reject("出错了");
  } catch (error) {
  }
  await Promise.resolve("Hello world");
}

/**
 * 有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。
 * 这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行
 */
function awaitTryCatch() {
  f3().then((result) => {
    console.log(`f3 awaitTryCatch then:${result}`);
  }).catch(error => {
    console.log(`f3 awaitTryCatch error:${error}`);
  });

  f4().then((result) => {
    console.log(`f4 awaitTryCatch then:${result}`);
  }).catch(error => {
    console.log(`f4 awaitTryCatch error:${error}`);
  });
}

awaitTryCatch();


/**
 * 错误处理
 */

async function errorDeal() {
  await new Promise((resolve, reject) => {
    throw new Error("出错了");
  });
}

errorDeal().then(v => Console.log(v)).catch(e => {
  Console.log(`catch error:${e}`);
});

function getPromise() {
  return new Promise((resolve, reject) => {
    reject(`getPromise error`);
  });
}


async function myFunction() {
  await getPromise().catch(error => {
    console.log(`Promise catch error:${error}`);
  });

  try {
    await getPromise();
  } catch (e) {
    console.log(`try catch error:${e}`);
  }
}

myFunction();


function fetch1(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('fetch1 result')
    }, 2000)
  })
}
function fetch2(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('fetch2 result')
    }, 1000)

  })
}

async function awaitPromiseAll(){
  //写法1
  let startTime = new Date().getTime()
  let [result1,result2] =  await Promise.all([fetch1(),fetch2()])
  let endTime = new Date().getTime()
  console.log(`Promise.all cost time: ${endTime - startTime}`);

  //寫法2
  let fetch1Promise = fetch1()
  let fetch2Promise = fetch2()

  fetch1Promise.then((result) => {
    console.log(`Promise.all fetch1 result: ${result}`);
  })

  startTime = new Date().getTime()
  let foo =  await fetch1Promise
  let bar =  await fetch2Promise
  endTime = new Date().getTime()
  console.log(`wait seperately cost time: ${endTime - startTime}`);
}
awaitPromiseAll()


/**
 * 假定某个 DOM 元素上面，部署了一系列的动画，前一个动画结束，才能开始后一个。
 * 如果当中有一个动画出错，就不再往下执行，返回上一个成功执行的动画的返回值。
 *
 * @param elem
 * @param animations
 * @returns {Promise<void>}
 */
async function chainAnimationsAsync(elem, animations){
  let ret = null
  async function anim(index) {
    console.log(`animation ${index} begin run`);
    return new Promise((resolve, reject) => {
      if (index >= 1){
        reject(`animation ${index} execute error`)
      }else {
        resolve(`animation ${index} run`)
      }
    })
  }

  //只要有一個失敗就不會繼續執行了
 /* for (let index of animations.keys()) {
    ret = await anim(index)
  }*/

  for (let index of animations.keys()) {
    ret = await anim(index).catch(error => {
      console.log(`animation ${index} failed, but the error is catched`);
    })
  }

  /*try {
    for (let index of animations.keys()) {
      ret = await anim(index)
    }
  }
  catch (e){
    console.log(e);
  }*/
  return ret
}

function fun21_5(){
  chainAnimationsAsync(1,["anim1", "anim2", "anim3"]).then((result) => {
    console.log(`fun21_5 chainAnimationsAsync then result:${result}`);
  }).catch(error => {
      console.log(`fun21_5 chainAnimationsAsync catch error:${error}`);
    }
  )
}

fun21_5()

/**
 * 经常遇到一组异步操作，需要按照顺序完成。比如，依次远程读取一组 URL，然后按照读取的顺序输出结果
 */

function fetchOrder(url){
  return new Promise(resolve => {
    setTimeout(() =>{
      resolve({text:`fetch order ${url}`})
    }, 500)
    }
  )
}
function loginOrder(urls){
  let startTime = new Date().getTime()
  const textPromise = urls.map(url => {
    return fetchOrder(url).then(response => response.text)
  })

  textPromise.reduce((chain,current) => {
    return chain.then(() => current).then( text => {
      console.log(`fun_21_6 text:${text}`);})
  }, Promise.resolve())
  console.log(`fun_21_6 loginOrder cost time:${new Date().getTime() - startTime}`);
}


async function loginOrderByAsync(urls){
  let startTime = new Date().getTime()
  for (const url of urls) {
    const response = await fetchOrder(url)
    console.log(`fun_21_6 loginOrderByAsync response:${await response.text}`);
  }
  console.log(`fun_21_6 loginOrderByAsync cost time:${new Date().getTime() - startTime}`);
}

/**
 * 上面代码确实大大简化，问题是所有远程操作都是继发。只有前一个 URL 返回结果，
 * 才会去读取下一个 URL，这样做效率很差，非常浪费时间。我们需要的是并发发出远程请求。
 * @param urls
 * @returns {Promise<void>}
 */
async function loginOrderByConcurrency(urls){
  //并发读取 url
  const textPromises = urls.map(async url => {
    console.log(`fun_21_6 loginOrderByConcurrency 1111`);

    const response = await fetchOrder(url)
    console.log(`fun_21_6 loginOrderByConcurrency 222`);
    return response.text
  })

  let startTime = new Date().getTime()
  for (const textPromise of textPromises) {
    console.log(`fun_21_6 loginOrderByConcurrency result:${await textPromise} `);
  }
  console.log(`fun_21_6 loginOrderByConcurrency cost time:${new Date().getTime() - startTime}`);
}


function fun_21_6() {
  const urls = ["www.baidu.com", "www.sina.com"]
  loginOrder(urls)
  //串行执行
  loginOrderByAsync(urls).then()
  //并发执行
  loginOrderByConcurrency(urls).then()
}

fun_21_6()


