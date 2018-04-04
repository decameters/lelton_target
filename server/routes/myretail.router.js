var express = require('express');
var router = express.Router();
var MyRetail = require('../models/myretail.schema');
var request = require('request');

router.get('/', function (req, res) {
    
    MyRetail.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with MyRetail find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
            // res.json(data);
        }
    })
});

router.get('/api', function (req, res) {

    // var keyword = req.query.q;

    var fullRequestUrl = 'http://redsky.target.com/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics';
    // fullRequestUrl += '?api_key=' + process.env.GIPHY_API_KEY; // order of these doesn't matter except the first one has to be a question mark
    // // start of the query string
    // fullRequestUrl += '&q=' + keyword;

    request(fullRequestUrl, function (error, response, body) {
        if (error) {
            console.log('error making Redsky API request');
            res.sendStatus(500);
        } else {
            res.send(body);
        }
    });
})

// router.get('/', function (req, res) {
    
//     MyRetail.find({}, function (errorMakingDatabaseQuery, data) {
//         if (errorMakingDatabaseQuery) {
//             console.log('error with MyRetail find', errorMakingDatabaseQuery);
//             res.sendStatus(500);
//         } else {
//             res.send(data);
//             // res.json(data);
//         }
//     })
// });

router.get('/:id', function (req, res) {
    console.log(req.params.id);
    
    MyRetail.find({id : req.params.id}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with MyRetail:id find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
            // res.json(data);
        }
    })
});

// router.post('/', function (req, res) {
//     var addMovie = new Movie(req.body);
//     addMovie.save(function(errorMakingDatabaseQuery, data){
//         if (errorMakingDatabaseQuery) {
//             console.log('error with movie save', errorMakingDatabaseQuery);
//             res.sendStatus(500);
//         } else {
//             res.sendStatus(201);
//         }
//     });
// });

module.exports = router;