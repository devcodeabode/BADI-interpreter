const tokenize = require('../src/tokenizer.js').tokenize;
const parse = require('../src/parser.js').parse;

const tests = [
  
]

for (const n of tests) {
  test(n[0], () => {
    expect(JSON.stringify(parse(tokenize(n[0])))).toEqual(n[1]);
  });  
}