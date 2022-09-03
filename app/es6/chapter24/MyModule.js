// export {RoutePath} from './Module'


let firstNmae = 'Jerry'
let lastName = 'Liu'

export function hello(x,y){
  return x * y
}


function multiPly(x,y){
  return x * y
}

export {firstNmae, lastName, multiPly as abc}





export const RoutePath = {
  pwdSet: "pwdSet",
  home: "home"
}

