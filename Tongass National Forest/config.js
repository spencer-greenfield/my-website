var config = {
    style: 'mapbox://styles/s-greenfield/clubdbn6p002h01pd1gehf0ey',
    accessToken: 'pk.eyJ1Ijoicy1ncmVlbmZpZWxkIiwiYSI6ImNsdGF4NnAzZDBhNW0yamxtbzhyYmxnY3kifQ.X-wRqpOGszEO8zrTLdEwpg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    // projection: 'albers',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    // title: 'What is the Yale Bubble?',
    // subtitle: 'The implicit and explicit messages Yale University\'s physical infrastructure sends about safety in New Haven',
    // byline: 'By Spencer Greenfield',
    footer: 'Sources: https://geo.libretexts.org/Courses/University_of_California_Davis/GEL_109%3A_Sediments_and_Strata_(Sumner)/Textbook_Construction/Barrier_Islands_and_Lagoons<br>https://gotbooks.miracosta.edu/gonp/nyc/parks/loc74.htm.<br>https://www.google.com/maps<br>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',



    chapters: [
        {
            id: 'stepOne',
            alignment: 'left',
            // backgroundColor: 'red',
            hidden: true,            
            // style('text-shadow': '0 0 5px #000000'),
            // image: 'blerp.jpeg',
            location: {
                center: [-72.9055893288688,40.72103515492584],
                zoom: 15,
                pitch: 80,
                bearing: -114.08
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: ['addScale','setLow','flyToEnd'],
            // callback: ['addScale','setLow'],

            // callback: 'flyToEnd',
            // callback: 'setLow',
            // callback: 'addTitle',
            onChapterEnter: [
                {
                    layer: 'geomorphology',
                    opacity: 0
                }
                      
            ],
            onChapterExit: [
                // {
                    
                // }
            ]
        },
        {
            id: 'stepNext1',
            alignment: 'center',
            opacity: 0,
            // backgroundColor: 'red',
            hidden: false,            
            // style('text-shadow': '0 0 5px #000000'),
            image: 'explanation.png',
            rotateAnimation: false,
            onChapterEnter: [  
            ],
            onChapterExit: [
                // {
                    
                // }
            ]
        },
        {
            id: 'step2',
            alignment: 'center',
            opacity: 0,
            // backgroundColor: 'red',
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            hidden: false,
            image: 'moviePoster.jpg',
            title: 'Welcome to Fire Island National Seashore, a barrier island located on the southern edge of Long Island, New York. Its outer edge faces the open Atlantic Ocean.',            
            // style('text-shadow': '0 0 5px #000000'),
            rotateAnimation: false,
            onChapterEnter: [  
            ],
            onChapterExit: [
                // {
                    
                // }
            ]
        },
        {
            id: 'step20',
            alignment: 'center',
            opacity: 0,
            // backgroundColor: 'red',
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            hidden: false,
            description: 'source: https://geo.libretexts.org/Courses/University_of_California_Davis/GEL_109%3A_Sediments_and_Strata_(Sumner)/Textbook_Construction/Barrier_Islands_and_Lagoons',
            image: 'reqs.png',
            // style('text-shadow': '0 0 5px #000000'),
            rotateAnimation: false,
            onChapterEnter: [  
            ],
            onChapterExit: [
                // {
                    
                // }
            ]
        },
        {
            id: 'step21',
            alignment: 'center',
            opacity: 0,
            // backgroundColor: 'red',
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            hidden: false,
            image: ['googleMaps.png'],
            // style('text-shadow': '0 0 5px #000000'),
            rotateAnimation: false,
            onChapterEnter: [  
            ],
            onChapterExit: [
                // {
                    
                // }
            ]
        },
        {
            id: 'step3',
            alignment: 'center',
            opacity: 0,
            // backgroundColor: 'red',
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            hidden: false,
            image: ['googleMapsLarge.png'],
            // style('text-shadow': '0 0 5px #000000'),
            rotateAnimation: false,
            onChapterEnter: [  
            ],
            onChapterExit: [
                // {
                    
                // }
            ]
        },
        {
            id: 'stepNext',
            alignment: 'center',
            opacity: 0,
            // backgroundColor: 'red',
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            hidden: false,
            title: 'We are following the direction of the longshore current, which runs from east to west along Fire Island, causing it to migrate westward over time.',            
            // style('text-shadow': '0 0 5px #000000'),
            rotateAnimation: false,
            onChapterEnter: [  
            ],
            onChapterExit: [
                // {
                    
                // }
            ]
        },
        {
            id: 'stepTwo',
            alignment: 'left',
            hidden: false,
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            title: 'Click to Learn More',
            // image: './path/to/image/source.png',
            // description: '',
            location: {
                center: [-72.9055893288688,40.72103515492584],
                zoom: 15,
                pitch: 80,
                bearing: -114.08
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'createButton',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
    ]
};

// <script>
//     function onLoad3D() {
//         map.on('style.load', () => {
//         map.addSource('mapbox-dem', {
//             'type': 'raster-dem',
//             'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
//             'tileSize': 512,
//             'maxzoom': 14
//             });
//             // add the DEM source as a terrain layer with exaggerated height
//             map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
//         })};
// </script>