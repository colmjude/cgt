var markdown = require("markdown").markdown;
var fs = require("fs");
var path = require('path');
var express = require('express');

var auth = express.basicAuth(process.env.BASIC_AUTH_USERNAME, process.env.BASIC_AUTH_PASSWORD);


module.exports = {
  bind: function(app) {

    app.get('/', function(req, res) {
      var prototypes_url = req.headers.host;
      if (req.headers.host.indexOf('www.') !== -1) {
        // we're on www.SUB.DOMAIN.TLD
        prototypes_url = '//prototypes.' + req.headers.host.substring(4);
      } else {
        // we're on the root domain
        prototypes_url = '//prototypes.' + req.headers.host;
      }
      res.render('index', {
        prototypes_url: prototypes_url
      });
    });

    // add your routes here
    app.get('/background-reading', function(req, res) {
      fs.readFile(path.join(__dirname, 'data/resources.md'), {
        encoding: 'utf-8'
      }, function(err, data) {
        if (err) {
          throw err;
        }

        res.render('useful_links', {
          markdown: markdown.toHTML(data)
        });
      });
    });

    app.get('/user-stories', function(req, res) {
      res.render('user_stories_viewer');
    });

    app.get('/screen', function(req, res) {
      res.render('screen');
    });

    app.get('/apps', auth, function(req, res) {
      var data;
      fs.readFile(path.join(__dirname, 'data/apps.json'), {
        encoding: 'utf-8'
      }, function(err, data) {
        if (err) {
          throw err;
        } else {
          data = JSON.parse(data);
        }
        res.render('apps', {
          apps: data
        });
      });
    });
  }
};
