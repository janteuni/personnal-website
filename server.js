var express = require('express');
var compression = require('compression');
var React = require('react');

var Stats = require('./dist/stats.json');
var App = require('./components/App');
var server = express();

server.use(compression())
server.use('/dist', express.static('./dist'))
server.use('/images', express.static('./images'))

server.use(function (req, res) {

  const rootHtml = React.renderToString(<App />)
  const style = Stats.style
  const bundle = Stats.main

  res.send(`<!doctype html>
<html>
  <head>
    <base href="/">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>App</title>
    <link href="dist/${style}" rel="stylesheet"/>
  </head>
  <body>
    <div id="root">${rootHtml}</div>
    <script async src="dist/${bundle}"></script>
  </body>
</html>
<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

  `)
})

const port = process.env.PORT || 8080

server.listen(port, function () {
  console.log(`> Running on port ${port}`);
})
