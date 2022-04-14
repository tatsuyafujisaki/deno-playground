interface MyInterface {
  x: number | string;
  f1: () => void;
  f2: () => string;
  (): string;
}

const mi: MyInterface = {
  x: 123,
  f1: function () {
    console.log('Hello');
  },
  f2: function () {
    return 'Hello';
  },
  (): function ()
};

mi.f1();
console.log(mi.f2());
