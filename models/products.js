var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var productSchema = mongoose.Schema({});

var Products = module.exports = mongoose.model('Products', productSchema);

module.exports.getProducts = function(defaultCallback){
	Products.find(defaultCallback);
};

module.exports.getProductsByCategory = function(categoryId, defaultCallback){
	Products.find({categoryId: ObjectID(categoryId)}, defaultCallback);
};

module.exports.getSelectedProductBycategoryId = function(categoryId, productId, defaultCallback){
	Products.find({categoryId: ObjectID(categoryId), _id: productId}, defaultCallback);
};

module.exports.getAllTypeProductsLength = function(defaultCallback){
	Products.find({}, defaultCallback);
};