interface MyIndexInterface1 {
  [_: string]: number;
}

interface MyIndexInterface2 {
  [_: number]: string;
}

const mii1: MyIndexInterface1 = {
  myKey: 42,
};

const mii2: MyIndexInterface2 = {
  42: 'myKey',
};

console.log(mii1);
console.log(mii2);
