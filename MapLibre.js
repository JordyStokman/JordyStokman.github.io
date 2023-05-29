﻿// JavaScript source code
var map = new maplibregl.Map({
    container: 'map2',
    style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
    center: [5.21835, 52.36645], // starting position [lng, lat]
    zoom: 5 // starting zoom

});

map.on('load', () => {
    map.addSource('Almere', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [5.12644737, 52.38153549],
                                [5.15641582, 52.39291618],
                                [5.16240951, 52.39982446],
                                [5.20802817, 52.41587187],
                                [5.21868361, 52.41648114],
                                [5.2266752, 52.4187151],
                                [5.23466679, 52.42602543],
                                [5.25997348, 52.43495864],
                                [5.26962999, 52.42683762],
                                [5.29793353, 52.41688733],
                                [5.30159633, 52.41404397],
                                [5.3228172, 52.40946533],
                                [5.33918683, 52.40382788],
                                [5.34248716, 52.40149215],
                                [5.34895579, 52.40133106],
                                [5.35067196, 52.40028397],
                                [5.34789969, 52.39665922],
                                [5.33984689, 52.39585368],
                                [5.30132292, 52.3818933],
                                [5.34313974, 52.34459178],
                                [5.34748386, 52.33629765],
                                [5.34612632, 52.32634265],
                                [5.31626049, 52.30327161],
                                [5.27933547, 52.31870896],
                                [5.25055567, 52.32700638],
                                [5.22286191, 52.33165226],
                                [5.21716024, 52.32966123],
                                [5.20711447, 52.33198409],
                                [5.2046709, 52.33513634],
                                [5.19435361, 52.33629765],
                                [5.16421628, 52.33132043],
                                [5.14765432, 52.32783604],
                                [5.14466774, 52.32468326],
                                [5.13815156, 52.32899753],
                                [5.14385322, 52.33049084],
                                [5.14059513, 52.33414093],
                                [5.13435046, 52.33812249],
                                [5.13407895, 52.34343069],
                                [5.13136387, 52.36565186],
                                [5.12267563, 52.376924],
                                [5.12644737, 52.38153549],


                            ]
                        ]
                    }
                },
            ]
        }
    });

    map.addLayer({
        'id': 'Almere',
        'type': 'fill',
        'source': 'Almere',
        'paint': {
            'fill-color': '#FFAA01',
            'fill-opacity': 0.6
        },
        'filter': ['==', '$type', 'Polygon']
    });
    //MapLibre refuses to show any geoJSON, so I'll try to fix it'
});