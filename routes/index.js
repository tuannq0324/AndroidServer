var express = require('express');
var fs = require('fs')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
})

router.get('/getUsers', function (req, res, next) {
    fs.readFile('data/data.txt', function (err, data) {
        if (err != null) {
            res.send(err.message)
        } else {
            res.send(data.toString())
        }
    })
});

module.exports = router;
