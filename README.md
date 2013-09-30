# Grunt demo

This is a sample project that uses [Grunt](http://www.gruntjs.com) for automating common tasks.

This code has been extracted from my quickstart guide to Grunt: [*Power-Up Your Front-End Development With Grunt*](https://leanpub.com/grunt).

## Requirements

- Node and `npm` (see [NodeJS](http://nodejs.org/download/)
- Install `grunt-cli` globally: `npm install -g grunt-cli`

Once you have installed the requirements, checkout this repository and run `npm install`:

```
git clone git@github.com:belen-albeza/grunt-demo.git
cd grunt-demo
npm install
```

## Included tasks

### Workflows

These are high level tasks that build up common work flows in development. 

**Run a server** and re-compile asssets:

```
grunt server
```

The task above will lint your code, compile Sass stylesheets, run a local server, open a browser pointing to the app, and watch for changes to Sass file so they are automatically recompiled.

We can also **run tests** in the console, or run them in a browser:

```
grunt test
grunt test:browser
```

The tasks above will lint your code, and run your Jasmine specs. When using `test:browser` it will automatically run a local server and open the browser for you.

There's a task to **generate a release** (ie: code for production) of your app:

```
grunt release
```

That will compile your Sass stylesheets optimized for production, run your Jasmine tests and generate a zip you can use for deployment in a server.

### Other tasks

Lint your code (see custom JSHint rules in `.jshintrc`):

```
grunt jshint
```

Clean all temporary and release files:

```
grunt clean
```

Compile your Sass stylesheets for development or production:

```
grunt sass:dev
grunt sass:prod
```
