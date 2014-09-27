// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, false); //false makes that synchonus.
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);

    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Make the actual CORS request.
function makeCorsRequest(url) {
    var xhr = createCORSRequest('GET', url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        var text = xhr.responseText;
        var obj = eval ("(" + text + ")");

        console.log(obj);
        var i = 1;
        obj.Locations.Location.forEach(function(entry) {
            //show the distance in miles...
            document.getElementById("targetname"+i).innerText(entry.Name);
            //console.log(entry.Name + ", "+ entry.Address.City+", "+ entry.Address.Subdivision);
            document.getElementById("targetaddr"+i).innerText = entry.Address.AddressLine1+ " "+entry.Address.City;
            i++;
            console.log(entry.LocationRelationship.DistanceToRelatedLocation.toFixed(3));
        });

        return text;
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    xhr.send();

}
