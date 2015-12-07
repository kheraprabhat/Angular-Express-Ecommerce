var express = require('express');
var router = express.Router();

var Category = require('../models/categories');

/* GET users listing. */
router.get('/', function(request, response, next) {
    Category.getCategories(function(error, result) {
        response.json(result);
    });
});

router.get('/:categoryId', function(request, response, next) {
    Category.getCategoryById(request.params.categoryId, function(error, result) {
        response.json(result);
    });
});

module.exports = router;