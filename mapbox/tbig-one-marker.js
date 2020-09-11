$(document).ready(function() {

    var str = `
    <br/>
    <span>Address: No-66, first floor, Parami Road
    Near Parami Seingayhar
    Yangon
    Myanmar (Burma)</span>`;
    //str += `
    // <table itemprop="openingHours">
    //     <tbody>
    //         <tr>
    //             <th class="x2TOCf">Mon:</th>
    //             <td class="o0m3Qb"><span class="WF8WNe">Closed</span></td>
    //         </tr>
    //         <tr>
    //             <th class="x2TOCf">Tue:</th>
    //             <td class="o0m3Qb"><span class="WF8WNe">Closed</span></td>
    //         </tr>
    //         <tr>
    //             <th class="x2TOCf">Wed:</th>
    //             <td class="o0m3Qb"><span class="WF8WNe">9:00 AM – 6:00 PM</span></td>
    //         </tr>
    //         <tr>
    //             <th class="x2TOCf">Thu:</th>
    //             <td class="o0m3Qb"><span class="WF8WNe">9:00 AM – 6:00 PM</span></td>
    //         </tr>
    //         <tr>
    //             <th class="x2TOCf">Fri:</th>
    //             <td class="o0m3Qb"><span class="WF8WNe">9:00 AM – 6:00 PM</span></td>
    //         </tr>
    //         <tr>
    //             <th class="x2TOCf">Sat:</th>
    //             <td class="o0m3Qb"><span class="WF8WNe">9:00 AM – 6:00 PM</span></td>
    //         </tr>
    //         <tr>
    //             <th class="x2TOCf">Sun:</th>
    //             <td class="o0m3Qb"><span class="WF8WNe">9:00 AM – 6:00 PM</span></td>
    //         </tr>
    //     </tbody>
    // </table>`;
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fubmx5bm5odHVuIiwiYSI6ImNrZXQwbnpiMzFodjMyeG9mY3NiaGh0dXAifQ.-VjSSN5E5qSkCy2N0XpHjA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [96.1208935, 16.8565435],
        zoom: 15
    });

    map.on('load', function() {
        // Add an image to use as a custom marker
        map.loadImage(
            '/img/favicon.png',
            function(error, image) {
                if (error) throw error;
                map.addImage('custom-marker', image);

                map.addSource('places', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [{
                            'type': 'Feature',
                            'properties': {
                                'description': '<strong>Techno Bright Innovation Group Co.Ltd</strong>' + str,
                                'icon': 'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [96.1208935, 16.8565435]
                            }
                        }]
                    }
                });
                // Add a layer showing the places.
                map.addLayer({
                    'id': 'places',
                    'type': 'symbol',
                    'source': 'places',
                    'layout': {
                        'icon-image': 'custom-marker',
                        'icon-allow-overlap': true,
                        'icon-size': 0.1
                    }
                });

                // When a click event occurs on a feature in the places layer, open a popup at the
                // location of the feature, with description HTML from its properties.
                map.on('click', 'places', function(e) {
                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var description = e.features[0].properties.description;

                    // Ensure that if the map is zoomed out such that multiple
                    // copies of the feature are visible, the popup appears
                    // over the copy being pointed to.
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(description)
                        .addTo(map);
                });

                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on('mouseenter', 'places', function() {
                    map.getCanvas().style.cursor = 'pointer';
                });

                // Change it back to a pointer when it leaves.
                map.on('mouseleave', 'places', function() {
                    map.getCanvas().style.cursor = '';
                });
            });
    });
})