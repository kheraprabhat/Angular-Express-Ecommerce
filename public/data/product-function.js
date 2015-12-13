var ObjectId = function(){};

var test = {
    "name": $(".product-info-js").text(),
    "productId": $(".product-style-js").text(),
    "oldPrice": $("[data-text]:eq(0)").text().replace(/\S+[A-Z]\s+/g, "").substring(1),
    "newPrice": $("[data-text]:eq(1)").text().replace(/\S+[A-Z]\s+/g, "").substring(1),
    "price": $("[data-text]:eq(1)").text().replace(/\S+[A-Z]\s+/g, "").substring(1),
    "type": $(".page-breadcrumb-list > li:eq(3)").text().trim().toLowerCase(),
    "brand": ["levis", "allen solly", "lee",
        "diesel", "wrangler", "polo ralph lauren", "van heusen", "peter England"
    ][Math.floor(Math.random() * ["levis", "allen solly", "lee", "diesel", "wrangler", "polo ralph lauren", "van heusen", "peter England"].length)],
    "size": function() {
        var array = [];
        $("#attr-size").find("option").each(function() {
            var value = $(this).val();
            var text = $(this).text();
            array.push({
                value: value,
                text: text
            });
        });
        return array;
    }(),
    "color": function() {
        var array = [];
        $(".color-swatches-js").find("label").each(function(index, elem) {
            var text = $(this).attr("data-attribute-value");
            var value = elem;
            array.push({
                text: text,
                value: index
            });
        });
        return array;
    }(),
    "raiting": $(".product-reviews-container img").attr("alt"),
    "discount": "0",
    "images": {
        "style": $(".product-style-js").text(),
        "thumb": function() {
            var array = [];
            $(".color-swatches-js label img").each(function() {
                array.push(this.src);
            });
            return array;
        }(),
        "normal": function() {
            var array = [];
            $(".s7staticimage img").each(function() {
                array.push(this.src);
            });
            return array;
        }()
    }
};

console.log(JSON.stringify(test))



var ObjectId = function(){};

var test = {
    "name": $(".product-info-js").text(),
    "productId": $(".product-style-js").text(),
    "oldPrice": $("[data-text]:eq(0)").text().replace(/\S+[A-Z]\s+/g, "").substring(1),
    "newPrice": $("[data-text]:eq(1)").text().replace(/\S+[A-Z]\s+/g, "").substring(1),
    "price": $("[data-amount]").text().substring(1),
    "type": $(".page-breadcrumb-list > li:eq(3)").text().trim().toLowerCase(),
    "brand": ["levis", "allen solly", "lee",
        "diesel", "wrangler", "polo ralph lauren", "van heusen", "peter England"
    ][Math.floor(Math.random() * ["levis", "allen solly", "lee", "diesel", "wrangler", "polo ralph lauren", "van heusen", "peter England"].length)],
    "size": function() {
        var array = [];
        $("#attr-size").find("option").each(function() {
            var value = $(this).val();
            var text = $(this).text();
            array.push({
                value: value,
                text: text
            });
        });
        return array;
    }(),
    "color": function() {
        var array = [];
        $(".color-swatches-js").find("label").each(function(index, elem) {
            var text = $(this).attr("data-attribute-value");
            var value = elem;
            array.push({
                text: ["Almond","Apricot", "Aquamarine", "Blue", "Brick Red", "Burnt Sienna"][Math.floor(Math.random() * ["Almond","Apricot", "Aquamarine", "Blue", "Brick Red", "Burnt Sienna"].length)],
                value: index
            });
        });
        return array;
    }(),
    "raiting": $(".product-reviews-container img").attr("alt"),
    "discount": "0",
    "images": {
        "style": $(".product-style-js").text(),
        "thumb": function() {
            var array = [];
            $(".color-swatches-js label img").each(function() {
                array.push(this.src);
            });
            return array;
        }(),
        "normal": function() {
            var array = [];
            $(".s7staticimage img").each(function() {
                array.push(this.src);
            });
            return array;
        }()
    }
};

console.log(JSON.stringify(test))