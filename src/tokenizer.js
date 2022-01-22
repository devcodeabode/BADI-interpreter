/**
 * Token class
 */
class Token {
  constructor(col, line, type, value) {
    this.col = col;
    this.line = line;
    this.type = type;
    this.value = value;
  }
  /**
   * String format of Token
   * @returns String format as: <type::value line:col>
   */
  toString() {
    return `<${this.type}::${this.value} ${this.line}:${this.col}>`;
  }
}

const parseOP = () => {};

/**
 * The new and improved tokenizer
 * @param {String} input Text to be tokenized
 * @returns List of tokens
 */
const tokenize = (input) => {
  // replaces tabs with spaces and new lines with \NEWLINE\
  input = input.replace(/\t/g, " ").replace(/\n/g, " \\NEWLINE\\ ");
  const operators = `+-*&^%$!@<>{"}[]()/?;:#@='`;

  // Important values to determine token attributes
  let line = 1;
  let col = 0;
  let tokens = [];
  let cursor = 0;
  let tokenStart = 0;

  // Create the tokens
  while (cursor < input.length) {
    // Dealing with operators & strings
    if (operators.includes(input.slice(tokenStart, cursor))) {
      // If it's a string
      if (input.slice(tokenStart, cursor).trim() === '"') {
        while (input[cursor] !== '"') {
          ++col;
          ++cursor;
        }
        // Don't forget to include that quote!
        ++cursor;
      }

      input.slice(tokenStart, cursor).trim() !== "" &&
        tokens.push(
          new Token(
            col - input.slice(tokenStart, cursor).length,
            line,
            "Operator",
            input.slice(tokenStart, cursor)
          )
        );
      tokenStart = cursor;
    }

    // Deal with non-operators & strings
    if (operators.includes(input[cursor]) || input[cursor] === " ") {
      const value = input.slice(tokenStart, cursor).trim();

      const token = new Token(
        col - value.length,
        line,
        !isNaN(parseFloat(value)) ? "Number" : "Identifier",
        value
      );

      if (token.value === "\\NEWLINE\\") {
        ++line;
        col = 0;
      }

      // Pushes token if it isn't whitespace
      token.value !== "" && tokens.push(token);
      tokenStart = cursor;
    }
    ++col, ++cursor;
  }
  tokens.map((t) => (t.value = t.value.trim()));
  return tokens;
};

// const main = (() => {
//   const data =
// `function hello {
//   echo "Hello $1"
//   echo "Got $# args"
// }
// hello "World" "again"`;

//   console.log(tokenize(data));
// })();

module.exports = { tokenize }; // for testing
