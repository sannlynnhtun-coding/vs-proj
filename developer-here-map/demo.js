$(function() {

    var platform = new H.service.Platform({
        'apikey': 'BWe4dVIgrSigNKiLuRKqa3zy7i-TTQMQKny-Mf6Ce44'
    });

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('map'),
        defaultLayers.vector.normal.map, {
            zoom: 10,
            center: { lat: 52.5, lng: 13.4 }
        });
})