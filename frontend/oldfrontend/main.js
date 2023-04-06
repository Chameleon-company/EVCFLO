// Google Maps API key. Need to make this hidden.
let KEY = "AIzaSyDtqhSWmPBgoWRASz58IbAuMqQY9lgWoxo";

// API Server address
//LOCAL
// let CHARGERS_URI = "http://localhost:5000/api/get_chargers"
// let BOUND_URI = "http://localhost:5000/api/get_bounds"
// let SUGGESTED_URI = "http://localhost:5000/api/get_suggested"
//LIVE
let CHARGERS_URI = "https://server-e657pcuziq-ts.a.run.app/api/get_chargers"
let BOUND_URI = "https://server-e657pcuziq-ts.a.run.app/api/get_bounds"
let SUGGESTED_URI = "https://server-e657pcuziq-ts.a.run.app/api/get_suggested"

// Initialize and add the map
function initMap() {

    // Declare empty array to store markers returned from the API
    const markers = [];
    const bounds = [];
    const suggested = [];

    // Declare Melbourne location coords (for centring map).
    const melbourne = { lat: -37.8136, lng: 144.9631 }

    // The map, centered at Melbourne
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: melbourne,
    });

    // Create info window
    var infowindow = new google.maps.InfoWindow({
        maxWidth: 350,
        pixelOffset: new google.maps.Size(-10,-25)
    });

    var infoFn = function (location) {
        return function (e) {
            var content = '<div>' +
                '<span> Name: ' + location.name + '</span>' +
                '<span>, Lat: ' + location.latitude + '</span>' +
                '<span>, Long: ' + location.longitude + '</span>' +
                '<span>, Plugs: ' + location.total_plugs + '</span>' +
                '</div>';

            infowindow.setContent(content);
            infowindow.open(map);
            infowindow.setPosition(new google.maps.LatLng(location.latitude, location.longitude));
        }
    };

    var infoFnSug = function (location) {
        return function (e) {
            var content = '<div>' +
                '<span> Lat: ' + location.latitude + '</span>' +
                '<span>, Long: ' + location.longitude + '</span>' +
                '<span>, Plugs: ' + location.total_plugs + '</span>' +
                '<span>, Score: ' + location.suitability_score + '</span>' 
                '</div>';

            infowindow.setContent(content);
            infowindow.open(map);
            infowindow.setPosition(new google.maps.LatLng(location.latitude, location.longitude));
        }
    };

    // Fetch map markers from API.
    fetch(CHARGERS_URI)
        .then((response) => {
            // Convert the API response to a json object.
            return response.json();
        })
        .then((data) => {
            // Use the json object.
            console.log(data);
            // Iterate through data and pull lat/long coords to build markers. Push the markers to our array.
            for (var i = 0; i < data.length; i++) {
                let markerPosition = { lat: data[i].latitude, lng: data[i].longitude };
                markers.push(new google.maps.Marker({ position: markerPosition, 
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                    }
                }));

                let fn = infoFn(data[i]);
                google.maps.event.addListener(markers[i], 'click', fn);
            }
        })
        .catch((error) => {
            // Unable to get response from API query.
            console.log("An error occurred accessing API. Is server running?..");
            console.log(error);
        })

    // Fetch scanned regions from API
    fetch(BOUND_URI)
        .then((response) => {
            //Convert API response to a json object
            return response.json();
        })
        .then((data) => {
            // Use the json object.
            console.log(data);
            // Iterate through data and pull north, south, east, west coords to build rectangles. Push the rectangles to our array.
            for (var i = 0; i < data.length; i++) {
                let boundShape = {north: data[i].north, south: data[i].south, east: data[i].east, west: data[i].west};
                bounds.push(new google.maps.Rectangle({ 
                    strokeColor: "#a4a4a4",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#a4a4a4",
                    fillOpacity: 0.2,
                    map: map, 
                    bounds: boundShape 
                }));
            }
        })    
        .catch((error) => {
            // Unable to get response from API query.
            console.log("An error occurred accessing API. Is server running?..");
            console.log(error);
        })

    // Fetch suggested charger location map markers from API. WIP(Make markers different colour)
    fetch(SUGGESTED_URI)
        .then((response) => {
            // Convert the API response to a json object.
            return response.json();
        })
        .then((data) => {
            // Use the json object.
            console.log(data);
            // Iterate through data and pull lat/long coords to build markers. Push the markers to our array.
            for (var i = 0; i < data.length; i++) {
                let markerPosition = { lat: data[i].latitude, lng: data[i].longitude };
                suggested.push(new google.maps.Marker({ position: markerPosition, 
                    map: map , 
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                    }
                }));

                let fn = infoFnSug(data[i]);
                google.maps.event.addListener(suggested[i], 'click', fn);
            }
        })
        .catch((error) => {
            // Unable to get response from API query.
            console.log("An error occurred accessing API. Is server running?..");
            console.log(error);
        })
}


/*
    // Declare some locations.
    const uluru = { lat: -25.344, lng: 131.036 };

    // Add some markers to the map using the locations declared above.
    // const marker = new google.maps.Marker({ position: uluru, map: map });
*/