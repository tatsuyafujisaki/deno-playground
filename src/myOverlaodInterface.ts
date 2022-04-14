interface MyOverloadInteface {
  (input: number): string;
  (input: string): string;
}

const moi: MyOverloadInteface = input => {
  return typeof input === 'string' ? input : input.toString();
};

console.log(moi('Hello'));
console.log(moi(42));
