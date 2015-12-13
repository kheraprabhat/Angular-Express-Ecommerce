(function(app) {
    'use strict';
    app.filter('encodeURIComponent', [function() {
        return window.encodeURIComponent;
    }]);

    app.filter('getColorCode', ['CONSTANT_COLORS', 'utility', function(CONSTANT_COLORS, utility) {
    	return function(colorName){
    		return utility.getColorCode(colorName).hex;
    	};
    }]);
})(angular.module("Meanapp"));

/*

db.products.update({
    "size.text": "SELECT Size"
}, {
 $set: {
   "size.$.text": ""
 }
}, {multi:true});

db.products.find({
    "size.text": "SELECT Size"
})

*/