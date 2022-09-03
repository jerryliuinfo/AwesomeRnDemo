
function symbolTest(){
  let s1 = Symbol('foo')
  let s2 = Symbol('bar')
  // console.log(`s1:${s1}, s2:${s2}`);
  console.log(s1,s2);
  console.log(s1.toString(),s2.toString());
  let desc = s1.description
  console.log(`desc: ${desc}`);
}
symbolTest()

const ShapeType = {
  triangle: 'Triangle',
  square: 'Square',
}

/**
 * 消除魔术字符串
 */
function removeMagicStr(shape){
  let area = 0
  switch (shape){
    case 'Triangle':
      area = 10
      console.log(`param is Triangle`);
      break
    case ShapeType.square:
      area = 20
      console.log(`param is Square`);
      break
  }
  return area
}

removeMagicStr('Triangle')
removeMagicStr(ShapeType.triangle)
removeMagicStr(ShapeType.square)
