interface MyCallableInteface {
  (): string;
}

const myCallableInterface: MyCallableInteface = () => 'aiueo';

console.log(myCallableInterface());
