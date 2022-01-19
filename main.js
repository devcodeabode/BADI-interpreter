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


const main = (() => {
    const data = `for ((counter=10; counter>0; counter--))
    do 
    echo -n "$counter "
    #This is a comment
    done
    printf "\\n"`;

    console.log(tokenize(data));
})();