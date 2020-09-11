$(document).ready(function() {
    var str = `
    <br/>
    <span>Address: No-66, first floor, Parami Road
    Near Parami Seingayhar
    Yangon
    Myanmar (Burma)</span>`;
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fubmx5bm5odHVuIiwiYSI6ImNrZXQwbnpiMzFodjMyeG9mY3NiaGh0dXAifQ.-VjSSN5E5qSkCy2N0XpHjA';
    var geojson = {
        'type': 'FeatureCollection',
        'features': [{
                'type': 'Feature',
                'properties': {
                    'message': 'Foo',
                    'description': '<strong>Techno Bright Innovation Group Co.Ltd</strong>' + str,
                    'iconSize': [60, 60],
                    'imageUrl': '/img/building.png'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-66.324462890625, -16.024695711685304]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Bar',
                    'description': '<strong>Techno Bright Innovation Group Co.Ltd</strong>' + str,
                    'iconSize': [50, 50],
                    'imageUrl': '/img/building.png'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-61.2158203125, -15.97189158092897]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Baz',
                    'description': '<strong>Techno Bright Innovation Group Co.Ltd</strong>' + str,
                    'iconSize': [40, 40],
                    'imageUrl': '/img/building.png'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-63.29223632812499, -18.28151823530889]
                }
            }
        ]
    };

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-65.017, -16.457],
        zoom: 5
    });

    // map.on('click', 'places', function(e) {
    //     var coordinates = e.features[0].geometry.coordinates.slice();
    //     var description = e.features[0].properties.description;

    //     // Ensure that if the map is zoomed out such that multiple
    //     // copies of the feature are visible, the popup appears
    //     // over the copy being pointed to.
    //     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    //     }

    //     new mapboxgl.Popup()
    //         .setLngLat(coordinates)
    //         .setHTML(description)
    //         .addTo(map);
    // });

    // map.on('click', '.marker', function(e) {
    //     var coordinates = e.features[0].geometry.coordinates.slice();
    //     var description = e.features[0].properties.description;
    //     console.log('clicked');
    //     new mapboxgl.Popup()
    //         .setLngLat(coordinates)
    //         .setHTML(description)
    //         .addTo(map);
    // });

    // add markers to map
    map.on('load', function() {
        geojson.features.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.className = 'marker';
            // el.style.backgroundImage =
            //     'url(https://placekitten.com/g/' +
            //     marker.properties.iconSize.join('/') +
            //     '/)';
            el.style.backgroundImage = 'url(' + window.location.origin + marker.properties.imageUrl + ')';
            el.style.backgroundSize = 'cover';
            console.log(window.location.origin + marker.properties.imageUrl);
            // el.style.width = marker.properties.iconSize[0] + 'px';
            // el.style.height = marker.properties.iconSize[1] + 'px';
            el.style.width = '50px';
            el.style.height = '50px';

            var coordinates = marker.geometry.coordinates.slice();
            var description = marker.properties.description;

            $(el).data('coordinates', coordinates);
            $(el).data('description', encodeURIComponent(description));
            // console.log({ coordinates, description });
            el.addEventListener('click', function() {
                //window.alert(marker.properties.message);
                var l_coordinates = $(this).data('coordinates');
                var l_description = decodeURIComponent($(this).data('description'));
                console.log({ l_coordinates, l_description });
                // new mapboxgl.Popup()
                //     .setLngLat(l_coordinates)
                //     .setHTML(l_description)
                //     .addTo(map);
            });

            // add marker to map
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });
    });
})