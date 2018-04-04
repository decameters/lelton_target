var express = require('express');
var router = express.Router();
var MyRetail = require('../models/myretail.schema');
var request = require('request');


// GET REQUEST FOR ALL PRODUCTS IN DATABASE
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
}); // END GET REQUEST FOR ALL PRODUCTS IN DATABASE


// GET REQUEST FOR ALL API PRODUCTS
router.get('/api', function (req, res) {

    var fullRequestUrl = 'http://redsky.target.com/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics';

    request(fullRequestUrl, function (error, response, body) {
        if (error) {
            console.log('error making Redsky API request');
            res.sendStatus(500);
        } else {
            res.send(body);
        }
    })
}); // END GET REQUEST FOR ALL API PRODUCTS


// GET REQUEST FOR PRODUCT DETAILS IN DATABASE BY ID
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
}); // END GET REQUEST FOR PRODUCT DETAILS IN DATABASE BY ID


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