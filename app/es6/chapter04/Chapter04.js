 class Person{
  constructor(name) {
    this.name = name
  }
}

const personJson = JSON.stringify(new Person("zhangsan"))
console.log(`personJson:${personJson}`);


//标签模板 模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。

