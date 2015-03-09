# cross-gov-tools-prototypes

Info and useful links for cross government tools initiative. Currently hosting on heroku at [http://cross-gov-tools.herokuapp.com/](http://cross-gov-tools.herokuapp.com/)

## Express prototyping tool

Uses the [express prototyping tool](https://github.com/tombye/express_prototype) created by Tom Bye

It gives you a basic [Express](http://expressjs.com/) app, with templates, css and images from the [GOV.UK front-end toolkit](https://github.com/alphagov/govuk_frontend_toolkit).

Documentation for the tool can be found on the associated [wiki page](https://github.com/tombye/express_prototype/wiki/)

## Requirements

#### [Node](http://nodejs.org/)

You may already have it, try:

```
node --version
```

Your version needs to be at least v0.10.0.

If you don't have Node, download it here: [http://nodejs.org/](http://nodejs.org/).

## Getting started

Install Node.js (see requirements)

#### Clone this repo

#### Install dependencies

```
npm install
```

This will install folders containing programs described by the package.json file to a folder called `node_modules`.

#### Run the app locally

```
node start.js
```

Go to [localhost:3000](http://localhost:3000) in your browser.

#### Hot reload

Any code changes should update in the browser without you restarting the app.

The app recompiles app/assets/stylesheets/application.scss everytime changes are observed.

