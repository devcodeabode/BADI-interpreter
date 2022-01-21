/**
 * Token class
 */
class Token {
  constructor() {
    this.col = 1;
    this.line = 1;
    this.type = undefined;
    this.value = undefined;
  }
  /**
   * String format of Token
   * @returns String format as: <type::value line:col>
   */
  toString() { return `<${this.type}::${this.value} ${this.line}:${this.col}>`; }
}


/**
 * The new and improved tokenizer
 * @param {String} input Text to be tokenized
 * @returns List of tokens
 */
const tokenize = (input) => {
  // replaces tabs with spaces and new lines with \NEWLINE\
  input = input.replace(/\t/g, ' ').replace(/\n/g, ' \\NEWLINE\\ ');
  const operators = `+-*&^%$!@<>{"}[]()/?;:#@='`;

  // Important values to determine token attributes
  let line = 1;
  let col = 0;
  let token = new Token();
  let lastToken = undefined;
  let tokens = [];
  // Pointer to current char
  let i = 0;
  // Pointer to beginning of token
  let j = 0;

  // Create the tokens
  while (i < input.length) {
    // Dealing with operators & strings
    if (operators.includes(input.slice(j, i))) {
      // If it's a string
      if (input.slice(j, i).trim() === '"') {
        // move to the end of the string
        while (input[i] !== '"') {
          ++col;
          ++i;
        }
        // Don't forget to include that quote!
        ++i
      }
      token.value = input.slice(j, i);
      token.col = token.col = col - token.value.length;
      token.line = line;
      token.type = 'Operator';
      token.value.trim() !== '' && tokens.push(token);
      token = new Token();
      j = i;
    }

    // Deal with non-operators & strings
    if (operators.includes(input[i]) || input[i] === ' ') {
      token.value = input.slice(j, i).trim();
      token.col = col - token.value.length;
      token.line = line;

      if (token.value === '\\NEWLINE\\') {
        ++line;
        col = 0;
      }

      if (!isNaN(parseFloat(token.value)))
        token.type = 'Number'
      else
        token.type = 'Identifier'
      // Pushes token if it isn't whitespace
      token.value !== '' && tokens.push(token);
      token = new Token();
      j = i;
    }
    ++col
    ++i;
  }
  tokens.map(t => t.value = t.value.trim())
  return tokens;
}

// const main = (() => {
//   const data = 
// `function hello {
//   echo "Hello $1"
//   echo "Got $# args"
// }
// hello "World" "again"`;

//   console.log(tokenize(data));
// })();

module.exports = { tokenize } // for testing