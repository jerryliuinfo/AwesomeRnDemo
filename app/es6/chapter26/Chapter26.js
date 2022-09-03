
// import * as Constants from "./Module";


/*
import { abc, firstNmae, hello, lastName, RoutePath } from "./MyModule.js";
import * as ApiConstants from "../constans/ApiConstants.js";

function importModule(){
  console.log(firstNmae);
  console.log(lastName);

  abc(1,2)
  hello()

   console.log(`A:${ApiConstants.A}, B:${ApiConstants.B}`);


  console.log(`pwdSet:${RoutePath.pwdSet}, home:${RoutePath.home}`);
}

importModule()
*/

//对象添加方法
let obj = {
  add:function(a, b) {
    return a + b
  }
}
console.log(`add result:${obj.add(1,2)}`);


let obj1 = {
  name: 'jerry'
}

let obj2 = {
  name: 'jerry'
}
//is 判断相等(严格相等)
console.log(`resul1"${obj1.name == obj2.name}, result2:${Object.is(obj1.name, obj2.name)}`);


let a = { a: 'Jerry'}
let b = { b: 'Tom'}
let c = { c: 'Lucy'}

let d = Object.assign(a,b,c)
console.log(d);
