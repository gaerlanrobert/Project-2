// Requiring path to so we can use relative routes to our HTML files
const path = require('path');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

const news = require('./news');

module.exports = (app) => {
    app.get('/', (req, res) => {
    // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect('/members');
        }
        res.sendFile(path.join(__dirname, '../public/signup.html'));
    });

    app.get('/login', (req, res) => {
    // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect('/members');
        }
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route
    // they will be redirected to the signup page
    app.get('/members', isAuthenticated, (req, res) => {
        news.topic('coronavirus')
            .then((data) => {
                const { articles } = data; //  status, totalResults, articles
                const array = [];
                // eslint-disable-next-line no-restricted-syntax
                for (const article of articles.splice(0, 5)) {
                    array.push({
                        title: article.title.split('-')[0],
                        source: article.source.name,
                        url: article.url,
                        urlToImage: article.urlToImage,
                    });
                }
                const hbsObject = {
                    articles: array,
                };
                res.render('index', hbsObject);
            });
    });
};
