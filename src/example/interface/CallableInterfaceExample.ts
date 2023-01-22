interface MyCallableInteface2 {
  (): string;
}

const mci: MyCallableInteface2 = () => 'Hello';

console.log(mci());
