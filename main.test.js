const tok = require('./main.js').tok;

const tokenizerTests = [
[
`echo "Hello, World!"`,
'[{\"col\":0,\"line\":1,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":4,\"line\":1,\"type\":\"Operator\",\"value\":\"\\\"Hello, World!\\\"\"}]'
],
[`function hello {
  echo "Hello $1"
  echo "Got $# args"
}
hello "World" "again"`, 
`[{\"col\":0,\"line\":1,\"type\":\"Identifier\",\"value\":\"function\"},{\"col\":9,\"line\":1,\"type\":\"Identifier\",\"value\":\"hello\"},{\"col\":15,\"line\":1,\"type\":\"Operator\",\"value\":\"{\"},{\"col\":17,\"line\":1,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":3,\"line\":2,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":7,\"line\":2,\"type\":\"Operator\",\"value\":\"\\\"Hello $1\\\"\"},{\"col\":18,\"line\":2,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":3,\"line\":3,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":7,\"line\":3,\"type\":\"Operator\",\"value\":\"\\\"Got $# args\\\"\"},{\"col\":21,\"line\":3,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":4,\"type\":\"Operator\",\"value\":\"}\"},{\"col\":3,\"line\":4,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":5,\"type\":\"Identifier\",\"value\":\"hello\"},{\"col\":6,\"line\":5,\"type\":\"Operator\",\"value\":\"\\\"World\\\"\"},{\"col\":13,\"line\":5,\"type\":\"Operator\",\"value\":\"\\\"again\\\"\"}]`
],
[
`set a = 5 + 2
echo $a
echo $(5 + 2)

set b = 5 - 2
echo $b

set c = 5 * 2
echo $c

set d = 5 / 2
echo $d

set e = 5 // 2
echo $e

set f = 5 % 2
echo $f

set g = 5 ** 2
echo $g`, 
`[{\"col\":0,\"line\":1,\"type\":\"Identifier\",\"value\":\"set\"},{\"col\":4,\"line\":1,\"type\":\"Identifier\",\"value\":\"a\"},{\"col\":6,\"line\":1,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":8,\"line\":1,\"type\":\"Number\",\"value\":\"5\"},{\"col\":10,\"line\":1,\"type\":\"Operator\",\"value\":\"+\"},{\"col\":12,\"line\":1,\"type\":\"Number\",\"value\":\"2\"},{\"col\":14,\"line\":1,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":2,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":6,\"line\":2,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":7,\"line\":2,\"type\":\"Identifier\",\"value\":\"a\"},{\"col\":9,\"line\":2,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":3,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":6,\"line\":3,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":7,\"line\":3,\"type\":\"Operator\",\"value\":\"(\"},{\"col\":8,\"line\":3,\"type\":\"Number\",\"value\":\"5\"},{\"col\":10,\"line\":3,\"type\":\"Operator\",\"value\":\"+\"},{\"col\":12,\"line\":3,\"type\":\"Number\",\"value\":\"2\"},{\"col\":13,\"line\":3,\"type\":\"Operator\",\"value\":\")\"},{\"col\":15,\"line\":3,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":2,\"line\":4,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":5,\"type\":\"Identifier\",\"value\":\"set\"},{\"col\":5,\"line\":5,\"type\":\"Identifier\",\"value\":\"b\"},{\"col\":7,\"line\":5,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":9,\"line\":5,\"type\":\"Number\",\"value\":\"5\"},{\"col\":11,\"line\":5,\"type\":\"Operator\",\"value\":\"-\"},{\"col\":13,\"line\":5,\"type\":\"Number\",\"value\":\"2\"},{\"col\":15,\"line\":5,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":6,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":6,\"line\":6,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":7,\"line\":6,\"type\":\"Identifier\",\"value\":\"b\"},{\"col\":9,\"line\":6,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":2,\"line\":7,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":8,\"type\":\"Identifier\",\"value\":\"set\"},{\"col\":5,\"line\":8,\"type\":\"Identifier\",\"value\":\"c\"},{\"col\":7,\"line\":8,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":9,\"line\":8,\"type\":\"Number\",\"value\":\"5\"},{\"col\":11,\"line\":8,\"type\":\"Operator\",\"value\":\"*\"},{\"col\":13,\"line\":8,\"type\":\"Number\",\"value\":\"2\"},{\"col\":15,\"line\":8,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":9,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":6,\"line\":9,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":7,\"line\":9,\"type\":\"Identifier\",\"value\":\"c\"},{\"col\":9,\"line\":9,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":2,\"line\":10,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":11,\"type\":\"Identifier\",\"value\":\"set\"},{\"col\":5,\"line\":11,\"type\":\"Identifier\",\"value\":\"d\"},{\"col\":7,\"line\":11,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":9,\"line\":11,\"type\":\"Number\",\"value\":\"5\"},{\"col\":11,\"line\":11,\"type\":\"Operator\",\"value\":\"/\"},{\"col\":13,\"line\":11,\"type\":\"Number\",\"value\":\"2\"},{\"col\":15,\"line\":11,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":12,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":6,\"line\":12,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":7,\"line\":12,\"type\":\"Identifier\",\"value\":\"d\"},{\"col\":9,\"line\":12,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":2,\"line\":13,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":14,\"type\":\"Identifier\",\"value\":\"set\"},{\"col\":5,\"line\":14,\"type\":\"Identifier\",\"value\":\"e\"},{\"col\":7,\"line\":14,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":9,\"line\":14,\"type\":\"Number\",\"value\":\"5\"},{\"col\":11,\"line\":14,\"type\":\"Operator\",\"value\":\"/\"},{\"col\":12,\"line\":14,\"type\":\"Operator\",\"value\":\"/\"},{\"col\":14,\"line\":14,\"type\":\"Number\",\"value\":\"2\"},{\"col\":16,\"line\":14,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":15,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":6,\"line\":15,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":7,\"line\":15,\"type\":\"Identifier\",\"value\":\"e\"},{\"col\":9,\"line\":15,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":2,\"line\":16,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":17,\"type\":\"Identifier\",\"value\":\"set\"},{\"col\":5,\"line\":17,\"type\":\"Identifier\",\"value\":\"f\"},{\"col\":7,\"line\":17,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":9,\"line\":17,\"type\":\"Number\",\"value\":\"5\"},{\"col\":11,\"line\":17,\"type\":\"Operator\",\"value\":\"%\"},{\"col\":13,\"line\":17,\"type\":\"Number\",\"value\":\"2\"},{\"col\":15,\"line\":17,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":18,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":6,\"line\":18,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":7,\"line\":18,\"type\":\"Identifier\",\"value\":\"f\"},{\"col\":9,\"line\":18,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":2,\"line\":19,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":20,\"type\":\"Identifier\",\"value\":\"set\"},{\"col\":5,\"line\":20,\"type\":\"Identifier\",\"value\":\"g\"},{\"col\":7,\"line\":20,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":9,\"line\":20,\"type\":\"Number\",\"value\":\"5\"},{\"col\":11,\"line\":20,\"type\":\"Operator\",\"value\":\"*\"},{\"col\":12,\"line\":20,\"type\":\"Operator\",\"value\":\"*\"},{\"col\":14,\"line\":20,\"type\":\"Number\",\"value\":\"2\"},{\"col\":16,\"line\":20,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":21,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":6,\"line\":21,\"type\":\"Operator\",\"value\":\"$\"}]`
],
[
`for i in 1 2 3
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
`[{\"col\":0,\"line\":1,\"type\":\"Identifier\",\"value\":\"for\"},{\"col\":4,\"line\":1,\"type\":\"Identifier\",\"value\":\"i\"},{\"col\":6,\"line\":1,\"type\":\"Identifier\",\"value\":\"in\"},{\"col\":9,\"line\":1,\"type\":\"Number\",\"value\":\"1\"},{\"col\":11,\"line\":1,\"type\":\"Number\",\"value\":\"2\"},{\"col\":13,\"line\":1,\"type\":\"Number\",\"value\":\"3\"},{\"col\":15,\"line\":1,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":2,\"type\":\"Identifier\",\"value\":\"do\"},{\"col\":4,\"line\":2,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":3,\"line\":3,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":8,\"line\":3,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":9,\"line\":3,\"type\":\"Identifier\",\"value\":\"i\"},{\"col\":11,\"line\":3,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":4,\"type\":\"Identifier\",\"value\":\"done\"},{\"col\":6,\"line\":4,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":2,\"line\":5,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":6,\"type\":\"Identifier\",\"value\":\"for\"},{\"col\":5,\"line\":6,\"type\":\"Identifier\",\"value\":\"j\"},{\"col\":7,\"line\":6,\"type\":\"Identifier\",\"value\":\"in\"},{\"col\":10,\"line\":6,\"type\":\"Operator\",\"value\":\"{\"},{\"col\":11,\"line\":6,\"type\":\"Number\",\"value\":\"4..6\"},{\"col\":15,\"line\":6,\"type\":\"Operator\",\"value\":\"}\"},{\"col\":17,\"line\":6,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":7,\"type\":\"Identifier\",\"value\":\"do\"},{\"col\":4,\"line\":7,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":3,\"line\":8,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":8,\"line\":8,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":9,\"line\":8,\"type\":\"Identifier\",\"value\":\"j\"},{\"col\":11,\"line\":8,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":9,\"type\":\"Identifier\",\"value\":\"done\"},{\"col\":6,\"line\":9,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":2,\"line\":10,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":11,\"type\":\"Identifier\",\"value\":\"for\"},{\"col\":5,\"line\":11,\"type\":\"Identifier\",\"value\":\"k\"},{\"col\":7,\"line\":11,\"type\":\"Identifier\",\"value\":\"in\"},{\"col\":10,\"line\":11,\"type\":\"Operator\",\"value\":\"{\"},{\"col\":11,\"line\":11,\"type\":\"Number\",\"value\":\"7..10..2\"},{\"col\":19,\"line\":11,\"type\":\"Operator\",\"value\":\"}\"},{\"col\":21,\"line\":11,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":12,\"type\":\"Identifier\",\"value\":\"do\"},{\"col\":4,\"line\":12,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":3,\"line\":13,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":8,\"line\":13,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":9,\"line\":13,\"type\":\"Identifier\",\"value\":\"k\"},{\"col\":11,\"line\":13,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"}]`
],
[
`x=1
while $x <= 5
do
  echo $x
  let x = $x + 1
done
echo "X is $x"`, 
`[{\"col\":0,\"line\":1,\"type\":\"Identifier\",\"value\":\"x\"},{\"col\":1,\"line\":1,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":2,\"line\":1,\"type\":\"Number\",\"value\":\"1\"},{\"col\":4,\"line\":1,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":2,\"type\":\"Identifier\",\"value\":\"while\"},{\"col\":7,\"line\":2,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":8,\"line\":2,\"type\":\"Identifier\",\"value\":\"x\"},{\"col\":10,\"line\":2,\"type\":\"Operator\",\"value\":\"<\"},{\"col\":11,\"line\":2,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":13,\"line\":2,\"type\":\"Number\",\"value\":\"5\"},{\"col\":15,\"line\":2,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":3,\"type\":\"Identifier\",\"value\":\"do\"},{\"col\":4,\"line\":3,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":3,\"line\":4,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":8,\"line\":4,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":9,\"line\":4,\"type\":\"Identifier\",\"value\":\"x\"},{\"col\":11,\"line\":4,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":3,\"line\":5,\"type\":\"Identifier\",\"value\":\"let\"},{\"col\":7,\"line\":5,\"type\":\"Identifier\",\"value\":\"x\"},{\"col\":9,\"line\":5,\"type\":\"Operator\",\"value\":\"=\"},{\"col\":11,\"line\":5,\"type\":\"Operator\",\"value\":\"$\"},{\"col\":12,\"line\":5,\"type\":\"Identifier\",\"value\":\"x\"},{\"col\":14,\"line\":5,\"type\":\"Operator\",\"value\":\"+\"},{\"col\":16,\"line\":5,\"type\":\"Number\",\"value\":\"1\"},{\"col\":18,\"line\":5,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":6,\"type\":\"Identifier\",\"value\":\"done\"},{\"col\":6,\"line\":6,\"type\":\"Identifier\",\"value\":\"\\\\NEWLINE\\\\\"},{\"col\":1,\"line\":7,\"type\":\"Identifier\",\"value\":\"echo\"},{\"col\":5,\"line\":7,\"type\":\"Operator\",\"value\":\"\\\"X is $x\\\"\"}]`
]
]

for (const n of tokenizerTests) {
  test(n[0], () => {
    expect(JSON.stringify(tok(n[0]))).toEqual(n[1]);
  });  
}