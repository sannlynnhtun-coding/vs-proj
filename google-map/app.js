let map;
initMap1();

function initMap1() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

// Initialize and add the map
function initMap2() {
    // The location of Uluru
    var uluru = { lat: 16.8496, lng: 96.1292 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 16, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}