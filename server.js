const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');


app.use((res, req, next) => {

    req.render('maintainance.hbs', {
        currentYear: new Date().getFullYear()
    });
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website',
        currentYear: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle the request'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});