$(document).ready(function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fubmx5bm5odHVuIiwiYSI6ImNrZXQwbnpiMzFodjMyeG9mY3NiaGh0dXAifQ.-VjSSN5E5qSkCy2N0XpHjA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [96.1208935, 16.8565435],
        zoom: 15
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([96.1208935, 16.8565435])
        .addTo(map);
})