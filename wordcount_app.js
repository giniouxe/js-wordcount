var express = require('express')
var wordcount = require("./lib/wordcount.js")
var app = express()
var bodyParser = require('body-parser');
app.set('views', './views')
app.set('view engine', 'jade')

app.use(bodyParser());

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res, next) {
  console.log(req.body);
  res.render('index', {
    result: JSON.stringify(wordcount(req.body.sentence))
  });
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
