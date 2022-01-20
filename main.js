const tokenize = (text) => 
   `${text}\n`
    .replace(/#(.*?)\n/g, "")
    .match(/"(.*?)"|[^\s]+/g)
    .map(t => {
      return !t.includes('"') ?
        t.replace(/(?!"(.*?)")(\+|-|\*|\/|=|'|\!|%|&|\||~|\?|:|;|<|>|\.|,|\{|\}|\(|\)|\[|\]|\^|\$)/g, ' $& ')
        .match(/"(.*?)"|[^\s]+/g)
        : t;
    })
    .flat();

const tok = (text) => {
  const operators = '+-*&^%$!@<>{}[]()/?;:'.split('');
  let token;
  for (let i = 0; i < text.length; ++i) {

  }
}

const main = (() => {
    const data = `function hello {
      echo "Hello $1"
      echo "Got $# args"
    }
    hello "World" "again"`;

    console.log(tokenize(data));
})();

module.exports = { tokenize } // for testing