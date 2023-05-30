# Exercise :

- Display a list of cards
- Allow the user to add and remove cards in his cart

# Getting started
To begin to work, execute commands suites:

```
npm i install
npm i -g gulp
```

/!\ Warning if you are using windows OS please launch this commands on a UNIX terminal (ex: git bash) because some command like `cp` is used

# Available Scripts
Project is built upon gulp orchestration. Check gulpfile.js to get all available commands (serve, test, lint)

## `npm run test`

Launches the tests runner for the app.

## `npm run lint`

Launches linter for styles (style-lint) and scripts (eslint) for the hole app

## `gulp serve`

Run the app in development mode.
Use --env={dev|prod} flag to get desired config (default dev)
[http://localhost:3000] to view it in the browser.

## `gulp build`

Everything is built in `dist` ready to deploy on any web server.
