
class User{
  constructor(account) {
    this.account = account
  }
}
class Account{
  constructor(uid) {
    this.uid = uid
  }

}
/**
 * 指数运算符
 */

function zhishuOperator(){
  let result = 2 ** 3
  console.log(`zhishu result:${result}`);
}
zhishuOperator()

/**
 * 上面的三行代码都通过||运算符指定默认值，但是这样写是错的。开发者的原意是，只要属性的值为null或undefined，
 * 默认值就会生效，但是属性的值如果为空字符串或false或0，默认值也会生效。
 */
function elvisOperator(){
  // let user = User(new Account('134'))
  // const uid = user.account?.uid || 'default'
  // console.log(`elvisOperator uid:${uid}`);

  let user = new User('')
  let defaultStr1 = user?.account || "default Id"
  let defaultStr2 = user?.account ?? "default Id"
  console.log(`defaultStr1: ${defaultStr1},defaultStr2:${defaultStr2}`);


  let defaultBoolean = user?.account || true
  let defaultBoolean2 = user?.account ?? true
  console.log(`defaultBoolean: ${defaultBoolean},defaultBoolean2:${defaultBoolean2}`);

}
elvisOperator()
