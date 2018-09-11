# TypeScript intro

## Ensure you have TypeScript installed.

Ensure you have TypeScript installed locally.

Open a terminal and type in:

```
tsc -v
```

To see if you have it installed.

If you don't have it installed install it globally using:

```
npm install -g typescript
```

## Clone this repo

Clone this repo using git into a local repo.

`git clone https://github.com/codex-academy/typescript-intro`

## Use VS Code as your editor.

Use VS Code as your editor as it's go good TypeScript support.

Change into the `typescript-intro` folder in the terminal and type:

```
code .
```

To open the project in VS Code.

## Generate JavaScript

Use this command to generate JavaScript from the TypeScript code:

```
tsc -w
```

Or by using `CTRL-Shift-B` in VS Code select `tsc: watch`.

Ensure that the task that is generating the js code is always running in the back ground.

## Run the JavaScript code using NodeJS

Run the JavaScript generated in the `dist` folder. Using this command

```
node dist/index.js
```

## Do this

Create a file called `index.ts` in the project root folder.

### Run the greet.ts file

Import the `greet.ts` file into the `index.ts` file and use the `greet` function to greet some names.

Note to import modules use: `import {greet} from './greet;'`

### Run the greeter.ts file

Import the `greeter.ts` file into the `index.ts` file and use the `Greeter` function to greet some names. See how the counter is working.

### Change the greeter factory function into a Class

Copy the code inside the `greeter.ts` file into a new file called `the-greeter.ts` and change it into a Class called `TheGreeter`. Be sure to make the `addName` method private. Use the newly created class from the `index.ts` file.

> Use the `this` modifier to reference class instance variables.

The `namesGreeted` instance variable should be declared like this:

```
private namesGreeted;
```

And can be accessed like this:

```
this.namesGreeted['targetName']++;
```
