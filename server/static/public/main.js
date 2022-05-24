// Google Maps API key. Need to make this hidden.
let KEY = "AIzaSyDGTQ9MBm6Bmf88rfrMQH1o1Pw-3ols86A";

// API Server address
let CHARGERS_URI = "http://localhost:5000/api/get_chargers"


// Initialize and add the map
function initMap() {

    // Declare empty array to store markers returned from the API
    const markers = [];

    // Declare Melbourne location coords (for centring map).
    const melbourne = { lat: -37.8136, lng: 144.9631 }

    // The map, centered at Melbourne
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: melbourne,
    });


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
                markers.push(new google.maps.Marker({ position: markerPosition, map: map }));
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