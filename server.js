var express = require('express');
var compression = require('compression');
var React = require('react');

var Stats = require('./dist/stats.json');
var App = require('./components/App');
var server = express();

server.use(compression())
server.use('/dist', express.static('./dist'))
server.use('/images', express.static('./images'))
server.use('/robots.txt', function (req, res) { res.sendfile('./robots.txt'); })
server.use('/sitemap.xml', function (req, res) { res.sendfile('./sitemap.xml'); })

server.use(function (req, res) {

  const rootHtml = React.renderToString(<App />)
  const style = Stats.style
  const bundle = Stats.main

  res.send(`<!doctype html>
<html xmlns:og="http://ogp.me/ns#">
  <head>
    <base href="/">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Jasmine Anteunis</title>
    <meta property="og:title" content="Jasmine Anteunis" />
    <meta property="og:type" content="I’m a 23 years old french Art student, Fullstack Developer, based in Paris." />
    <meta property="og:url" content="http://jasmine.anteunis.name" />
    <meta property="og:image" content="http://jasmine.anteunis.name/images/jasmine-anteunis.png" />
    <meta name="description" content="Jasmine Anteunis - IT Student @42 - IT Development, UX Design, Graphic Design, Illustration">
    <meta name="google-site-verification" content="BbzNckXFr2J26I9oTwvIpKcz4KhC2JI9RtmrP8QXEXI" />
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="http://jasmine.anteunis.name"/>
    <link href="dist/${style}" rel="stylesheet"/>
  </head>
  <body>
    <div id="root">${rootHtml}</div>
    <script async src="dist/${bundle}"></script>
  </body>
</html>

  `)
})

const port = process.env.PORT || 8080

server.listen(port, function () {
  console.log(`> Running on port ${port}`);
})
