const fs = require("fs");
const tokenize = require("./tokenizer.js").tokenize;

class Parser {
  constructor(tokens) {
    const temp = tokenize(tokens);
    this.curr = temp.shift();
    this.tokens = temp;
    this.errors = JSON.parse(
      fs.readFileSync("./errors.json", {
        encoding: "utf8",
        flag: "r",
      })
    );
  }

  next() {
    const temp = this.tokens.shift();
    this.curr = temp;
    return temp;
  }

  throwErr(token, errType) {
    throw `ERROR: ${this.errors[errType]}  [${token.line}:${token.col}]`;
  }

  getFactor() {
    let node = this.curr;
    if (node.type === "Number") {
      this.curr = this.next();
      return {
        token: node,
        type: node.type,
        value: parseFloat(node.value),
      };
    } else if (node.type === "Operator" && node.value === "(") {
      this.curr = this.next();
      node = this.getExpr();

      if (this.curr.type === "Operator" && this.curr.value === ")") return node;
      else this.throwErr(node, "missing-paren");
    }
  }

  getTerm() {
    let node = this.getFactor();

    while ("*/".includes(this.curr.value)) {
      const token = this.curr;
      if (token.type === "Operator" && token.value === "*") this.next();
      else if (token.type === "Operator" && token.value === "/") this.next();
      else this.throwErr(token, "op-expected");

      node = {
        type: "binop",
        left: node,
        op: token,
        right: this.getFactor(),
      };
    }
    return node;
  }

  getExpr() {
    /*
     * expr   : term ((PLUS | MINUS) term)*
     * term   : factor ((MUL | DIV) factor)*
     * factor : INTEGER | LPAREN expr RPAREN
     */
    let node = this.getTerm();

    while ("+-".includes(this.curr.value)) {
      const token = this.curr;
      if (token.type === "Operator" && token.value === "+") this.next();
      else if (token.type === "Operator" && token.value === "-") this.next();
      else this.throwErr(token, "op-expected");

      node = {
        type: "binop",
        left: node,
        op: token,
        right: this.getTerm(),
      };
    }
    return node;
  }

  parse() {
    return this.getExpr();
  }
}

const main = (() => {
  //console.log(testParse.tokens);
  console.log(new Parser(`1 ( 3 )\n`).parse());
})();

module.exports = { Parser };
