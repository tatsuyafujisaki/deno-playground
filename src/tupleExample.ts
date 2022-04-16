function doSomething(triple: [boolean, number, string]) {
  const [a, b, c] = triple;
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);

  const d = triple[0];
  const e = triple[1];
  const f = triple[2];
  console.log(typeof d);
  console.log(typeof e);
  console.log(typeof f);
}

doSomething([true, 42, '42']);
