interface MyCallableInteface {
  (): string;
}

const mci: MyCallableInteface = () => 'Hello';

console.log(mci());
