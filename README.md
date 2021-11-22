# prettier-eslint-sample
A simple repo to use as an example of possible prettier-eslint bugs

Running `npx prettier index.js` yeilds the following, which indicates that there's no spaces in the function parameters, which the eslint and prettier rules show should look like `( arg1, arg2 )`, and also the line length is over 80 on one line

```
const exampleFunction = (arg1, arg2) => {
        console.log(
                'A really long description text string that should, ideally, get wrapped for me',
                arg1,
                arg2
        );
};
```

If I run `npx prettier-eslint index.js` the output looks like below: correct spacing in the funtion params, but still no proseWrap for the line longer than 80 characters.

```
const exampleFunction = ( arg1, arg2 ) => {
        console.log(
                'A really long description text string that should, ideally, get wrapped for me',
                arg1,
                arg2
        );
};
```

If I use the prettier-eslint plugin in the VSCode editor via `ctrl + shift + p : Format Document With : Prettier Eslint (default)` the spaces aren't introduced by first applying Prettier and then Eslint.

Perhaps Prettier can't really know how to wrap that long line, but I woudl think the Prettier-ESLint VSCode plugin would be able to fix the parens in the function params like prettier-eslint indicates it would from the command line?
