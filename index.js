var express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3001;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.redirect('/gangnam-style/0.0.1/');
})
app.listen(port);
console.log("Server listen on " + port);
