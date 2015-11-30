var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
	title: {
		type: String,
		index: true,
		required: true
	},

	body: {
		type: String,
		required: true
	},

	category: {
		type: String,
		index: true,
		required: true
	},

	date: {
		type: Date,
		default: Date.now
	}
});

var Products = module.exports = mongoose.model('Products', productSchema);

module.exports.getProducts = function(defaultCallback){
	Products.find(defaultCallback);
};

module.exports.getProductById = function(articleId, defaultCallback){
	Products.findById(articleId, defaultCallback);
};

module.exports.getProductsByCategory = function(categoryId, defaultCallback){
	Products.find({categoryId: ObjectID(categoryId)}, defaultCallback);
};

module.exports.getSelectedProductBycategoryId = function(categoryId, productId, defaultCallback){
	console.log('--------------------');
	console.log(categoryId, productId);
	console.log('--------------------');
	Products.find({categoryId: ObjectID(categoryId), _id: productId}, defaultCallback);
};


module.exports.createProduct = function(newArticle, defaultCallback){
	newArticle.save(defaultCallback);
};

module.exports.updateProduct = function(articleId, articleChanges, defaultCallback){
	var title = articleChanges.title,
		body = articleChanges.body,
		category = articleChanges.category;

	var query = {_id: articleId};

	Products.findById(articleId, function(err, article){
		if(!article){
			return next(new Error('no article'));
		}

		article.title = title;
		article.body = body;
		article.category = category;

		article.save(defaultCallback);
	});
};


module.exports.removeProduct = function(articleId, defaultCallback){
	Products.find({_id: articleId}).remove(defaultCallback);
};