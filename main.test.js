const tokenize = require('./main.js').tokenize;

const tokenizerTests = [
  [`set a = 5 + 2
  echo $a
  echo $(5 + 2)`, 
    ['set',  'a', '=','5', '+', '2', 'echo', '$', 'a', 'echo', '$', '(', '5', '+', '2', ')']
  ],
  [`for i in 1 2 3
  do
    echo $i
  done`, 
    ['for', 'i', 'in', '1', '2', '3', 'do', 'echo', '$', 'i', 'done']
  ],
  [`for i in 1 2 3
  do
    echo $i
  done
  
  for j in {4..6}
  do
    echo $j
  done
  
  for k in {7..10..2}
  do
    echo $k
  done`, 
    [
      'for',  'i',    'in',   '1',    '2',
      '3',    'do',   'echo', '$',    'i',
      'done', 'for',  'j',    'in',   '{',
      '4',    '.',    '.',    '6',    '}',
      'do',   'echo', '$',    'j',    'done',
      'for',  'k',    'in',   '{',    '7',
      '.',    '.',    '10',   '.',    '.',
      '2',    '}',    'do',   'echo', '$',
      'k',    'done'
    ]
  ],
  [`function hello {
    echo "Hello $1"
    echo "Got $# args"
  }
  hello "World" "again"`,
  [
    'function',   'hello',
    '{',          'echo',
    '"Hello $1"', 'echo',
    '"Got',       '$',
    '}',          'hello',
    '"World"',    '"again"'
  ]]
]

for (const n of tokenizerTests) {
  test(n[0], () => {
    expect(tokenize(n[0])).toEqual(n[1]);
  });  
}