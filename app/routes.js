var markdown = require( "markdown" ).markdown;
var fs = require("fs");
var path = require('path');

module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    // add your routes here
    app.get('/background-reading', function (req, res) {
      fs.readFile(path.join(__dirname, 'data/resources.md'), {encoding: 'utf-8'}, function (err, data) {
          if (err) {
              throw err;
          }

          res.render( 'useful_links', {markdown: markdown.toHTML( data )} );
      });
    });

    app.get('/user-stories', function (req, res) {
      res.render('user_stories_viewer');
    });

    app.get('/screen', function (req, res) {
      res.render('screen');
    });

  }
};
