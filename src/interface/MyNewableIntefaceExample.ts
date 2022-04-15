interface MyInterface {
  s: string;
}

interface MyNewableInteface {
  new (s: string): MyInterface;
}

class MyClass implements MyInterface {
  constructor(public s: string) {
    console.log(s);
  }
}

const mni: MyNewableInteface = MyClass;

console.log(mni.name);
