const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts'
}));

app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
    res.render('index', {
        title: "Welcome"
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        title: "About"
    });
});

app.get('/services', function (req, res) {
    res.render('services', {
        title: "Services"
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {
        title: "Contact"
    });
});

app.listen(app.get('port'), function () {
    console.log('Server started on port' + app.get('port'))
});
