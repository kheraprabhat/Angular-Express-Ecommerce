var url = require('url');
function arrayObjectIndexOf(myArray, searchTerm, property) {
    for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property].trim().toLowerCase() === searchTerm.trim().toLowerCase()) return i;
    }
    return -1;
}
module.exports = {
	removeDuplicate: function(list, fieldName){
		var finalArr = [];

		list.forEach(function(item){
			if(arrayObjectIndexOf(finalArr, item.text, 'text') === -1){
				finalArr.push(item);
			}
		});
		
		return finalArr;
	},
    arrayObjectIndexOf: arrayObjectIndexOf,

    toJson: function(result){
    	return JSON.parse(JSON.stringify(result));
    },

    getQueryString: function(request){
    	var urlParts = url.parse(request.url, true);
    	var query = urlParts.query;
    	return query;
    },

    combinedProductFieldList: function(products, fieldName){
    	var finalArr = [];
    	products.forEach(function(item, index){
            finalArr.push.apply(finalArr, item[fieldName]);
        });

        return finalArr;
    }
};