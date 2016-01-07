import githubhook from 'githubhook'
import { spawn } from 'child_process'

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

    <link rel="shortcut icon" href="images/favicon/favicon-32.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon/favicon-32.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="images/favicon/favicon-32.ico">
    <link rel="apple-touch-icon" sizes="76x76" href="images/favicon/favicon-76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/favicon/favicon-120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/favicon/favicon-152.png">
    <link href="dist/${style}" rel="stylesheet"/>
  </head>
  <body>
    <div id="root">${rootHtml}</div>
    <script async src="dist/${bundle}"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-72133578-2', 'auto');
  ga('send', 'pageview');

</script>
  </body>
</html>

  `)
})

const port = process.env.PORT || 8080

server.listen(port, function () {
  console.log(`> Running on port ${port}`);
})

// GITHUB HOOK

const github = githubhook({
  port: 3421,
  path: '/build',
  secret: process.env.HOOK_SECRET
})

github.on('push', (event, ref) => {
  if (ref === 'refs/heads/master') {
    spawn('sh', ['bin/deploy.sh'], {
      cwd: __dirname
    })
  }
})

github.listen()
