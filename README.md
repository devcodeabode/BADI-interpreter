# BADI-interpreter
## Build instructions
For a first time build, clone the codebase and then run
```
npm install
```
After this, running indiviual modules can be done via
```bash
cd src && node tokenizer.js
```
## Npm scripts
### Test
Running all tests for the project can be done with:
```
npm run test
```
### Update
Instead of using `git pull` to get all of the new code, it is recommended that you use the following command. This will allow you to skip the `npm install` step
```
npm run update
```
### Clean
If you have made changes to the code which prevent you from pulling (and those changes are unimportant) you can use:
```
npm run clean
```
which will remove all changes made to the code and get a fresh pull from the github.
