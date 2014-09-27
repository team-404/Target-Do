//objects
function Organization(name, description, category, latitude, longitude) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.position = {
        latitude: latitude,
        longitude: longitude
    }
}

function Store(latitude,longitude){
	var position = {
		latitude: latitude,
		longitude: longitude,
	};
	var name;
	var description;
	//task list
	//products list
}

function Person(name,points,pic_src){
	this.name = name;
	this.points = points;
	this.pic_src = pic_src;
}

function Product(id,name,price,url){
	this.prod_id = id;
	this.prod_name = name;
	this.price = price;
	this.url = url;
}

