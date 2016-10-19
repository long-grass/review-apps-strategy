var express         = require('express');
var path            = require('path');
var app             = express();
var compression     = require('compression');

app.use(compression());

app.get('/',
  function(req, res){
    app.use(express.static(__dirname))
      res.sendFile(path.join(__dirname + '/www/index.html'),{ user: req.user });
  });

var port = process.env.PORT || 5002;
app.listen(port, function() {
  console.log("Listening on this port: " + port);
});
