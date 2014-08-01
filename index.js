var express = require('express'),
    path = require('path'),
    app = express(),
    meta = require('./package.json'),
    port = process.env.PORT || 3001;

app.use(meta.scrat.urlPrefix, express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.redirect(meta.scrat.urlPrefix + '/' + meta.name + '/' + meta.version + '/');
})
app.listen(port);
console.log("Server listen on " + port);
