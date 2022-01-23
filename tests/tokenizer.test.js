const tokenize = require("../src/tokenizer.js").tokenize;

const tests = [
  [
    `echo "Hello, World!"`,
    ["<Identifier::echo 1:0>", '<Operator::"Hello, World!" 1:4>'],
  ],
  [
    `function hello {
  echo "Hello $1"
  echo "Got $# args"
}
hello "World" "again"`,
    [
      "<Identifier::function 1:0>",
      "<Identifier::hello 1:9>",
      "<Operator::{ 1:15>",
      "<Identifier::\\NEWLINE\\ 1:17>",
      "<Identifier::echo 2:3>",
      '<Operator::"Hello $1" 2:7>',
      "<Identifier::\\NEWLINE\\ 2:18>",
      "<Identifier::echo 3:3>",
      '<Operator::"Got $# args" 3:7>',
      "<Identifier::\\NEWLINE\\ 3:21>",
      "<Operator::} 4:1>",
      "<Identifier::\\NEWLINE\\ 4:3>",
      "<Identifier::hello 5:1>",
      '<Operator::"World" 5:6>',
      '<Operator::"again" 5:13>',
    ],
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
    [
      "<Identifier::set 1:0>",
      "<Identifier::a 1:4>",
      "<Operator::= 1:6>",
      "<Number::5 1:8>",
      "<Operator::+ 1:10>",
      "<Number::2 1:12>",
      "<Identifier::\\NEWLINE\\ 1:14>",
      "<Identifier::echo 2:1>",
      "<Operator::$ 2:6>",
      "<Identifier::a 2:7>",
      "<Identifier::\\NEWLINE\\ 2:9>",
      "<Identifier::echo 3:1>",
      "<Operator::$ 3:6>",
      "<Operator::( 3:7>",
      "<Number::5 3:8>",
      "<Operator::+ 3:10>",
      "<Number::2 3:12>",
      "<Operator::) 3:13>",
      "<Identifier::\\NEWLINE\\ 3:15>",
      "<Identifier::\\NEWLINE\\ 4:2>",
      "<Identifier::set 5:1>",
      "<Identifier::b 5:5>",
      "<Operator::= 5:7>",
      "<Number::5 5:9>",
      "<Operator::- 5:11>",
      "<Number::2 5:13>",
      "<Identifier::\\NEWLINE\\ 5:15>",
      "<Identifier::echo 6:1>",
      "<Operator::$ 6:6>",
      "<Identifier::b 6:7>",
      "<Identifier::\\NEWLINE\\ 6:9>",
      "<Identifier::\\NEWLINE\\ 7:2>",
      "<Identifier::set 8:1>",
      "<Identifier::c 8:5>",
      "<Operator::= 8:7>",
      "<Number::5 8:9>",
      "<Operator::* 8:11>",
      "<Number::2 8:13>",
      "<Identifier::\\NEWLINE\\ 8:15>",
      "<Identifier::echo 9:1>",
      "<Operator::$ 9:6>",
      "<Identifier::c 9:7>",
      "<Identifier::\\NEWLINE\\ 9:9>",
      "<Identifier::\\NEWLINE\\ 10:2>",
      "<Identifier::set 11:1>",
      "<Identifier::d 11:5>",
      "<Operator::= 11:7>",
      "<Number::5 11:9>",
      "<Operator::/ 11:11>",
      "<Number::2 11:13>",
      "<Identifier::\\NEWLINE\\ 11:15>",
      "<Identifier::echo 12:1>",
      "<Operator::$ 12:6>",
      "<Identifier::d 12:7>",
      "<Identifier::\\NEWLINE\\ 12:9>",
      "<Identifier::\\NEWLINE\\ 13:2>",
      "<Identifier::set 14:1>",
      "<Identifier::e 14:5>",
      "<Operator::= 14:7>",
      "<Number::5 14:9>",
      "<Operator::/ 14:11>",
      "<Operator::/ 14:12>",
      "<Number::2 14:14>",
      "<Identifier::\\NEWLINE\\ 14:16>",
      "<Identifier::echo 15:1>",
      "<Operator::$ 15:6>",
      "<Identifier::e 15:7>",
      "<Identifier::\\NEWLINE\\ 15:9>",
      "<Identifier::\\NEWLINE\\ 16:2>",
      "<Identifier::set 17:1>",
      "<Identifier::f 17:5>",
      "<Operator::= 17:7>",
      "<Number::5 17:9>",
      "<Operator::% 17:11>",
      "<Number::2 17:13>",
      "<Identifier::\\NEWLINE\\ 17:15>",
      "<Identifier::echo 18:1>",
      "<Operator::$ 18:6>",
      "<Identifier::f 18:7>",
      "<Identifier::\\NEWLINE\\ 18:9>",
      "<Identifier::\\NEWLINE\\ 19:2>",
      "<Identifier::set 20:1>",
      "<Identifier::g 20:5>",
      "<Operator::= 20:7>",
      "<Number::5 20:9>",
      "<Operator::* 20:11>",
      "<Operator::* 20:12>",
      "<Number::2 20:14>",
      "<Identifier::\\NEWLINE\\ 20:16>",
      "<Identifier::echo 21:1>",
      "<Operator::$ 21:6>",
    ],
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
    [
      "<Identifier::for 1:0>",
      "<Identifier::i 1:4>",
      "<Identifier::in 1:6>",
      "<Number::1 1:9>",
      "<Number::2 1:11>",
      "<Number::3 1:13>",
      "<Identifier::\\NEWLINE\\ 1:15>",
      "<Identifier::do 2:1>",
      "<Identifier::\\NEWLINE\\ 2:4>",
      "<Identifier::echo 3:3>",
      "<Operator::$ 3:8>",
      "<Identifier::i 3:9>",
      "<Identifier::\\NEWLINE\\ 3:11>",
      "<Identifier::done 4:1>",
      "<Identifier::\\NEWLINE\\ 4:6>",
      "<Identifier::\\NEWLINE\\ 5:2>",
      "<Identifier::for 6:1>",
      "<Identifier::j 6:5>",
      "<Identifier::in 6:7>",
      "<Operator::{ 6:10>",
      "<Number::4..6 6:11>",
      "<Operator::} 6:15>",
      "<Identifier::\\NEWLINE\\ 6:17>",
      "<Identifier::do 7:1>",
      "<Identifier::\\NEWLINE\\ 7:4>",
      "<Identifier::echo 8:3>",
      "<Operator::$ 8:8>",
      "<Identifier::j 8:9>",
      "<Identifier::\\NEWLINE\\ 8:11>",
      "<Identifier::done 9:1>",
      "<Identifier::\\NEWLINE\\ 9:6>",
      "<Identifier::\\NEWLINE\\ 10:2>",
      "<Identifier::for 11:1>",
      "<Identifier::k 11:5>",
      "<Identifier::in 11:7>",
      "<Operator::{ 11:10>",
      "<Number::7..10..2 11:11>",
      "<Operator::} 11:19>",
      "<Identifier::\\NEWLINE\\ 11:21>",
      "<Identifier::do 12:1>",
      "<Identifier::\\NEWLINE\\ 12:4>",
      "<Identifier::echo 13:3>",
      "<Operator::$ 13:8>",
      "<Identifier::k 13:9>",
      "<Identifier::\\NEWLINE\\ 13:11>",
    ],
  ],
  [
    `x=1
while $x <= 5
do
  echo $x
  let x = $x + 1
done
echo "X is $x"`,
    [
      "<Identifier::x 1:0>",
      "<Operator::= 1:1>",
      "<Number::1 1:2>",
      "<Identifier::\\NEWLINE\\ 1:4>",
      "<Identifier::while 2:1>",
      "<Operator::$ 2:7>",
      "<Identifier::x 2:8>",
      "<Operator::< 2:10>",
      "<Operator::= 2:11>",
      "<Number::5 2:13>",
      "<Identifier::\\NEWLINE\\ 2:15>",
      "<Identifier::do 3:1>",
      "<Identifier::\\NEWLINE\\ 3:4>",
      "<Identifier::echo 4:3>",
      "<Operator::$ 4:8>",
      "<Identifier::x 4:9>",
      "<Identifier::\\NEWLINE\\ 4:11>",
      "<Identifier::let 5:3>",
      "<Identifier::x 5:7>",
      "<Operator::= 5:9>",
      "<Operator::$ 5:11>",
      "<Identifier::x 5:12>",
      "<Operator::+ 5:14>",
      "<Number::1 5:16>",
      "<Identifier::\\NEWLINE\\ 5:18>",
      "<Identifier::done 6:1>",
      "<Identifier::\\NEWLINE\\ 6:6>",
      "<Identifier::echo 7:1>",
      '<Operator::"X is $x" 7:5>',
    ],
  ],
];

for (const n of tests) {
  test(n[0], () => {
    expect(tokenize(n[0]).map((t) => t.toString())).toEqual(n[1]);
  });
}
