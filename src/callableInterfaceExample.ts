interface MyCallableInteface {
  (): string;
}

const myCallableInterface: MyCallableInteface = () => 'Hello';

console.log(myCallableInterface());
