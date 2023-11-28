function printJsonRootType(json: string) {
  let parsed = JSON.parse(json);
  console.log(parsed == null ? 'null' : Array.isArray(parsed) ? 'array' : typeof parsed);
}

printJsonRootType('null'); // null

printJsonRootType('true'); // true
printJsonRootType('false'); // false

printJsonRootType('-1'); // number
printJsonRootType('3.14'); // number

printJsonRootType('"abc"'); // string

printJsonRootType('{ "name": "Jane", "age": 18, "hobby": null }') // object

printJsonRootType('["a", "b"]'); // array
