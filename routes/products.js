var express = require('express');
var url = require('url');
var router = express.Router();

var utility = require('../utility/utility');

var Products = require('../models/products');


function test(elem){
	//console.log(elem.name);
}

/* GET users listing. */
router.get('/', function(request, response, next) {
  Products.getProducts(function(error, result){
  	response.json(result);
  });
});

router.get('/getAllTypeProductsLength', function(request, response, next) {
	var urlParts = url.parse(request.url, true);
	var query = urlParts.query;


  Products.getAllTypeProductsLength(function(error, result){
  	var allBrands = {
  		totalBrandsCombined: 0,
  		brandDetails: []
  	};
  	
  	var products = JSON.parse(JSON.stringify(result));
  	console.log(utility);
	products.forEach(function(elem, index){
		if(allBrands.brandDetails.map(function(x) {return x.brand; }).indexOf(elem.brand) === -1){
			allBrands.brandDetails.push({brand: elem.brand, count: 0});
		}
	});

	products.forEach(function(elem, index){
		var index = allBrands.brandDetails.map(function(x) {return x.brand; }).indexOf(elem.brand);

		console.log(index);

		allBrands.totalBrandsCombined++;
		if(index > -1){
			allBrands.brandDetails[index].count++;
		}
	});
	
  	response.json(allBrands);
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
