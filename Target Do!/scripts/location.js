//location javascript.
function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateLocation, displayError);
    } else {
        alert("Oops, no geolocation support");
    }
}

function updateLocation(position) {
    myLocation.latitude = position.coords.latitude;
    myLocation.longitude = position.coords.longitude;
}

function nearbyStores() {
    var distance = document.getElementById("distance");
    var longitude = myLocation.longitude;
    var latitude = myLocation.latitude;
    var url = "http://api.target.com/v2/store?nearby=" + latitude + "," + longitude + "&range=10&limit=10&locale=en-US&key=" + apiKey;
    
    sleep(500);

    stores.Locations.Location.forEach(function(entry) {
        //show the distance in miles...
        console.log(entry.LocationRelationship.DistanceToRelatedLocation.toFixed(3));
    });

}

function displayError(error) {
    var errorTypes = {
        0: "Unknow error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };
    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage += " " + error.message;
    }
    var div = document.getElementById("location");
    div.innerHTML = errorMessage;
}

function computeDistance(startCords, destCords) {
    var startLatRads = degreesToRadians(startCords.latitude);
    var startLongRads = degreesToRadians(startCords.longitude);
    var destLatRads = degreesToRadians(destCords.latitude);
    var destLongRads = degreesToRadians(destCords.longitude);

    var Radius = 6371; //radius of the Earth in km
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) * Math.cos(destLatRads) *
        Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI) / 180;
    return radians;
}

function showMap(coords) {
    var googleLatAndLong =
        new google.maps.LatLng(coords.latitude, coords.longitude);

    var mapOptions = {
        zoom: 16,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);
}

function addMarker(map, latlong, title, content, img_src) {
    var markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };
    var image = img_src;
    var marker = new google.maps.Marker(markerOptions);
    var infoWindowOptions = {
        content: content,
        position: latlong,
        icon: image
    };

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map);
    });
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
