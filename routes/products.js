var express = require('express');
var url = require('url');
var router = express.Router();

/* load utility file for common utility */
var utility = require('../utility/utility');

/* load products model */
var Products = require('../models/products');

/* GET users listing. */
router.get('/', function(request, response, next) {
    Products.getProducts(function(error, result) {
        response.json(result);
    });
});

/* get product count based on selected product field name */
router.get('/productFilterOptions', function(request, response, next) {
    var query = utility.getQueryString(request);
    Products.productFilterOptions(query, function(error, result) {
        var products = utility.toJson(result);
        var productColors = utility.combinedProductFieldList(products, query.filterType);
        var allColors = utility.removeDuplicate(productColors, 'text');
        response.json(allColors);
    });
});

/* get product count based on selected product field name */
router.get('/productFilter', function(request, response, next) {
    var query = utility.getQueryString(request);
    Products.productFilter(query, function(error, result) {
        var products = JSON.parse(JSON.stringify(result));
        response.json(products);
    });
});

/* get product count based on selected product field name */
router.get('/getProductRange', function(request, response, next) {
    var query = utility.getQueryString(request);
    Products.getProductCount(query, function(error, result) {
        var products = utility.toJson(result);

        var min = Math.min.apply(Math, products.map(function(prod) {
            return parseFloat(prod.price);
        }));
        var max = Math.max.apply(Math, products.map(function(prod) {
            return parseFloat(prod.price);
        }));

        response.json({
            min: min,
            max: max
        });
    });
});

/* get product count based on selected product field name */
router.get('/getProductCount', function(request, response, next) {
    var query = utility.getQueryString(request);

    Products.getProductCount(query, function(error, result) {
        var productFields = {
                totalProductFieldsCombined: 0,
                fieldNameDetails: []
            },
            products = JSON.parse(JSON.stringify(result));

        products.forEach(function(elem, index) {
            if (productFields.fieldNameDetails.map(function(fieldName) {
                    return fieldName[query.fieldName];
                }).indexOf(elem[query.fieldName]) === -1) {
                var object = {};
                object[query.fieldName] = elem[query.fieldName];
                object.count = 0;
                productFields.fieldNameDetails.push(object);
            }
        });

        products.forEach(function(elem, index) {
            index = productFields.fieldNameDetails.map(function(selected) {
                return selected[query.fieldName];
            }).indexOf(elem[query.fieldName]);

            productFields.totalProductFieldsCombined++;

            if (index > -1) {
                productFields.fieldNameDetails[index].count++;
            }
        });

        response.json(productFields);
    });
});

/* to access all the products on category page */
router.get('/:categoryId', function(request, response, next) {
    /* if all products requested */
    if (request.params.categoryId.toLowerCase() === 'all-products') {
        Products.getProducts(function(error, result) {
            response.json(result);
        });
    } else {
        /* if resquest has valid category id */
        Products.getProductsByCategory(request.params.categoryId, function(error, result) {
            response.json(result);
        });
    }
});

router.get('/selected/:categoryId/:productId', function(request, response, next) {
    Products.getSelectedProductBycategoryId(request.params.categoryId, request.params.productId, function(error, result) {
        response.json(result);
    });
});

module.exports = router;