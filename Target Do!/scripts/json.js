$(document).ready(function() {
	var ids = [14693365, 14983898, 15673165];

    

    
	$.getJSON('http://api.target.com/v2/products/' + ids[0] + '?idType=TCIN&key=J5PsS2XGuqCnkdQq0Let6RSfvU7oyPwF&callback=?', function(data) {
    	var name = data.CatalogEntryView[0].title;
    	var price = data.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue;
    	var imgurl = data.CatalogEntryView[0].Images[0].PrimaryImage[0].image;
        var itemurl = data.CatalogEntryView[0].dynamicKitURL;
    	$('#item1name').text(name);
    	$('#item1price').text(price);
    	$('#item1img').attr('src', imgurl);
        $('#item1link').attr("href", itemurl);
	});

	$.getJSON('http://api.target.com/v2/products/' + ids[1] + '?idType=TCIN&key=J5PsS2XGuqCnkdQq0Let6RSfvU7oyPwF&callback=?', function(data) {
    	var name = data.CatalogEntryView[0].title;
    	var price = data.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue;
    	var imgurl = data.CatalogEntryView[0].Images[0].PrimaryImage[0].image;
        var itemurl = data.CatalogEntryView[0].dynamicKitURL;
    	$('#item2name').text(name);
    	$('#item2price').text(price);
    	$('#item2img').attr('src', imgurl);
        $('#item2link').attr("href", itemurl);
	});

	$.getJSON('http://api.target.com/v2/products/' + ids[2] + '?idType=TCIN&key=J5PsS2XGuqCnkdQq0Let6RSfvU7oyPwF&callback=?', function(data) {
    	var name = data.CatalogEntryView[0].title;
    	var price = data.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue;
    	var imgurl = data.CatalogEntryView[0].Images[0].PrimaryImage[0].image;
        var itemurl = data.CatalogEntryView[0].dynamicKitURL;
    	$('#item3name').text(name);
    	$('#item3price').text(price);
    	$('#item3img').attr('src', imgurl);
        $('#item3link').attr("href", itemurl);
	});
});