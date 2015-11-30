var express = require('express');
var router = express.Router();

var Products = require('../models/products');

/* GET users listing. */
router.get('/', function(request, response, next) {
  Products.getProducts(function(error, result){
  	response.json(result);
  });
});

router.get('/:categoryId', function(request, response, next) {
  Products.getProductsByCategory(request.params.categoryId, function(error, result){
  	response.json(result);
  });
});

router.get('/selected/:categoryId/:productId', function(request, response, next) {
	Products.getSelectedProductBycategoryId(request.params.categoryId, request.params.productId, function(error, result){
		response.json(result);
	});
});

module.exports = router;
