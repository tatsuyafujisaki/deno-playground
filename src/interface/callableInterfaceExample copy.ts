interface MyInterface {
  name: string;
}

interface MyNewableInteface {
  new (s: string): MyInterface;
}

class MyClass implements MyInterface {
  constructor(public name: string) {
    console.log(name);
  }
}

const aaa: MyNewableInteface = MyClass;

console.log(aaa.name);
