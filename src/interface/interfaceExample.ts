interface MyInterface1 {
  x: number | string;
  f1: () => void;
  f2: () => string;
}

const mi: MyInterface1 = {
  x: 123,
  f1: function () {
    console.log('Hello');
  },
  f2: function () {
    return 'Hello';
  },
};

mi.f1();
console.log(mi.f2());
