function getProductByCategory(category) {
    var url = "https://api.target.com/v2/products/search?categoryId=" + category + "&key=" + apiKey;
    var products = makeCorsRequest(url);

    //do something with thi product.
}

function getProductById(id) {
    var url = "http://api.target.com/v2/products/" + id + "?idType=TCIN&key=" + apiKey;
    var product = makeCorsRequest(url);
    var prod = buildSimpleProduct(product);
}

function buildSimpleProduct(product) {
    var id = product.CatalogEntryView[0].UPC;
    var name = product.CatalogEntryView[0].title;
    var price = product.CatalogEntryView[0].Offers[0].OfferPrice.formattedPriceValue;
    var url = product.CatalogEntryView[0].dynamicKitURL;

    return new Product(id, name, price, url);
}
