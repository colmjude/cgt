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
      console.log(path.join(__dirname, 'data/resources.md'));
      fs.readFile(path.join(__dirname, 'data/resources.md'), {encoding: 'utf-8'}, function (err, data) {
          if (err) {
              throw err;
          }

          //console.log(md(data.toString()));
          res.send( markdown.toHTML( data ) );
      });
      //res.send( markdown.toHTML( "test" ) );
    });

  }
};
