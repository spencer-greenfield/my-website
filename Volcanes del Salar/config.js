var config = {
    style: 'mapbox://styles/s-greenfield/cluhd7s1602wg01nw5vjee4mr',
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
    footer: 'Sources:<br>Arriagada, C., P. R. Cobbold, and P. Roperch (2006), Salar de Atacama basin: A record of compressional tectonics in the central Andes since the mid-Cretaceous, Tectonics, 25, TC1008, doi:10.1029/2004TC001770.<br>\
    https://theculturetrip.com/south-america/chile/articles/how-the-rainbow-valley-got-its-colors<br>\
    Stern, Bob & Dickinson, William. (2010). The Gulf of Mexico is a Jurassic backarc basin. Geosphere. 6. 739-754. 10.1130/GES00585.1.<br>\
    Reuther, C.D. & Adam, Jürgen. (1996). Forearc dynamics and neotectonic arc deformation, central Andes, northern Chile.<br>\
    Henriquez, Susana & Decelles, Peter & Carrapa, Barbara. (2019). Cretaceous to Middle Cenozoic Exhumation History of the Cordillera de Domeyko and Salar de Atacama Basin, Northern Chile. Tectonics. 38. 10.1029/2018TC005203.<br>\
    Reutter, Klaus-Joachim & Charrier, Reynaldo & Götze, Hans-Jürgen & Schurr, Bernd & Wigger, Peter & Scheuber, Ekkehard & Giese, Peter & Reuther, Claus-Dieter & Schmidt, Sabine & Rietbrock, Andreas & Chong, Guillermo & Belmonte, Arturo. (2006). The Salar de Atacama Basin: a Subsiding Block within the Western Edge of the Altiplano-Puna Plateau. 10.1007/978-3-540-48684-8_14.<br>\
    Arriagada, Cesar. (2003). Rotations tectoniques et déformation de l\'avant-arc des Andes Centrales au cours du Cénozoïque. Mémoires de Géosicences Rennes, Université de Rennes. 1.\
    Muñoz, N., Charrier, R. and Jordan, T. (July 2002). "Interactions between basement and cover during the evolution of the Salar de Atacama Basin, northern Chile". Revista Geológica de Chile. 29 (1): 55–80. doi:10.4067/S0716-02082002000100004.\
    Arriagada, César; Roperch, Pierrick (1999-10-06). Cretaceous to Paleogene geology of the Salar de Atacama basin, northern Chile: A reappraisal of the Purilactis Group stratigraphy. Fourth ISAG, Goettingen. Goettingen, Germany.\
    Sesiano, Jean (1997). «Des phénomènes karstiques dans une des régions les plus arides du Globe: le désert d\'Atacama, au nord du Chili» . Archives des Sciences 50 (2): 87. ISSN 1661-464X . Retrieved October 19, 2021',



    chapters: [
        {
            id: 'stepOne',
            alignment: 'left',
            // backgroundColor: 'red',
            hidden: true,            
            // style('text-shadow': '0 0 5px #000000'),
            // image: 'blerp.jpeg',
            location: {
                // center: [-67.9099820290795,-22.787314616758735],
                center: [-68.23344, -23.50941],
                zoom: 10,
                pitch: 70,
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
                      
            ],
            onChapterExit: [
                // {
                    
                // }
            ]
        },
        {
            id: 'step2',
            alignment: 'center',
            hidden: false,
            // opacity: 0,
            // textColor: '#dddddd',
            // textShadow: '0 0 5px #000000',
            location: {
                // center: [-67.9099820290795,-22.787314616758735],
                center: [-68.23344, -23.50941],
                zoom: 10,
                pitch: 70,
                bearing: -114.08
            },
            title: 'Welcome to the future Salt Flat Volcanoes National Park, in El Loa Province of the Antofagasta region in north Chile. It is located next to the tourist hub San Pedro de Atacama and encompasses the already-popular Salar de Atacama as its main attraction. Sights of spectacular volcanoes and unique geological features abound.',
            // image: './path/to/image/source.png',
            // description: '',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'step4',
            alignment: 'center',
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            description: 'Sitting on the edge of a lagoon nestled within the Western Cordillera.',
            // backgroundColor: 'red',
            hidden: false,            
            // style('text-shadow': '0 0 5px #000000'),
            image: 'me.jpg',
            rotateAnimation: false,
            onChapterEnter: [  
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
                // center: [-72.9055893288688,40.72103515492584],
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