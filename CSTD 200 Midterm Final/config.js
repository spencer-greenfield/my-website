var config = {
    style: 'mapbox://styles/s-greenfield/cltfbgw5l01ji01p3gbiy4eb1',
    accessToken: 'pk.eyJ1Ijoicy1ncmVlbmZpZWxkIiwiYSI6ImNsdGF4NnAzZDBhNW0yamxtbzhyYmxnY3kifQ.X-wRqpOGszEO8zrTLdEwpg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    // projection: 'albers',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'What is the Yale Bubble?',
    subtitle: 'The implicit and explicit messages Yale University\'s physical infrastructure sends about safety in New Haven',
    byline: 'By Spencer Greenfield',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',



    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            // backgroundColor: 'red',
            hidden: false,
            title: 'Welcome to New Haven',
            
            // style('text-shadow': '0 0 5px #000000'),
            // image: 'blerp.jpeg',
            description: 'Home to Yale University. There is a common idea that Yale is isolated from New Haven.<br><br>This is known as “the bubble.”',
            location: {
                center: [-72.98, 41.305],
                zoom: 11.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'addScale',
            onChapterEnter: [
                {
                    layer: 'bubble',
                    opacity: 0
                }, 
                {
                    layer: 'yaleOwned',
                    opacity: 0
                },    
                {
                    layer: 'campuses',
                    opacity: 0
                },
                {
                    layer: 'blueLightsNoParking',
                    opacity: 0
                },
                {
                    layer: 'newHaven',
                    opacity: 0.33,
                    color: '#faed00'
                },
 
                      
            ],
            onChapterExit: [
                // {
                    
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            title: 'Property Owned By Yale University and Yale-New Haven Hospital',
            // image: './path/to/image/source.png',
            description: 'The concept of the bubble might be surprising given Yale\'s central location.</br></br>Yale University alone owns or leases over 520 buildings spread across three campuses in New Haven and West Haven.',
            location: {
                center: [-73, 41.29407],
                zoom: 12.2,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'yaleOwned',
                    opacity: 1,
                    color: '#0ef7fe'
                    // color: 'pink'
                },
                {
                    layer: 'newHaven',
                    color: 'white',
                    opacity: 0.33
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: true,
            // title: 'Third Title',
            // opacity: 0,
            // textColor: '#dddddd',
            // textShadow: '0 0 5px #000000',
            // image: ['multiFamilyHome.jpg','yaleArchitecture.jpg'],
            location: {
                center: [-73, 41.29407],
                zoom: 12.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newHaven',
                    opacity: 0
                },
                {
                    layer: 'yaleOwned',
                    color: 'white'
                    // color: 'pink'
                },
                // {
                //     layer: 'yaleOwned',
                //     opacity: 0
                // },
                {
                    layer: 'campuses',
                    opacity: 1,
                    color: '#ab8b24'
                }
            ],
            onChapterExit: [
                {
                    layer: 'campuses',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            title: 'With all the buildings Yale owns, I initially thought of the Yale Bubble as a symbol of its structural dominance over the city.',
            location: {
                center: [-72.970, 41.320],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newHaven',
                    opacity: 0
                },
                {
                    layer: 'yaleOwned',
                    opacity: 1
                },
                {
                    layer: 'yaleOwnedNorth',
                    opacity: 0
                },
                // {
                //     layer: 'yaleOwned',
                //     opacity: 0
                // },
            ],
            onChapterExit: [ 
                // {
                //     layer: 'yaleOwned',
                //     opacity: 1
                // },
            ],
        },
        {
            id: 'buildingComplexity',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'yaleOwned',
                    opacity: 0
                },
                {
                    layer: 'yaleOwnedNorth',
                    opacity: 1
                },
                // {
                //     layer: 'road-simple',
                //     opacity: 0
                // },
                {
                    layer: 'road-label-simple',
                    opacity: 0
                },
                // {
                //     layer: 'road-pedestrian',
                //     opacity: 0
                // },
                // {
                //     layer: 'tunnel-simple',
                //     opacity: 0
                // },
                // {
                //     layer: 'bridge-simple',
                //     opacity: 0
                // },
                // {
                //     layer: 'bridge-path',
                //     opacity: 0
                // },
                // {
                //     layer: 'landuse',
                //     opacity: 0
                // },
                // {
                //     layer: 'poi-label',
                //     opacity: 0
                // },
                // {
                //     layer: 'settlement-subdivision-label',
                //     opacity: 0
                // },
                // {
                //     layer: 'settlement-major-label',
                //     opacity: 0
                // },
                // {
                //     layer: 'road-path',
                //     opacity: 0
                // },
                {
                    layer: 'upperBubble',
                    color: 'white',
                    opacity: 0
                },
            ],
        },
        {
            id: 'bubble-appears',
            alignment: 'left',
            title: 'I mapped the Yale bubble by tracing the northern area to see where Yale was most visually distinct from its surroundings.',
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            hidden: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'upperBubble',
                    color: 'white',
                    opacity: 1
                },
                {
                    layer: 'yaleOwnedNorth',
                    opacity: 0.5
                },
            ],
        },
        {
            id: 'owned-disappears',
            alignment: 'left',
            opacity: 0,
            textColor: '#dddddd',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            hidden: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'yaleOwnedNorth',
                    opacity: 0
                },
                {
                    layer: 'upperBubble',
                    color: 'white',
                },
            ]
        },
        {
            id: 'st-ronan',
            alignment: 'left-large',
            hidden: false,
            title: 'Yale\'s presence can be demarcated by as little as a blue sign on a brick building.',
            image: 'stRonan.png',
            description: 'Source: https://www.google.com/maps/',
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ronan',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'ronan',
                    opacity: 0
                },
            ],
        },
        {
            id: 'arch-contrast',
            alignment: 'left-large',
            hidden: false,
            title: 'But most of Yale’s architecture is extravagant, and a stark contrast to the multi-family homes that scatter across most of New Haven.',
            image: ['yaleArchitecture.jpg','multiFamilyHome.png'],
            description: 'Left dot: House in Dwight neighborhood<br>Right dot: Harkness Bell Tower on Yale\'s campus<br><br>Sources:<br>https://yaledailynews.com/blog/2018/03/09/facilities-problems-bedevil-branford/<br>https://www.google.com/maps/',
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'branford',
                    opacity: 1
                },
                {
                    layer: 'dwight',
                    opacity: 1
                },
                {
                    layer: 'upperBubble',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'branford',
                    opacity: 0
                },
                {
                    layer: 'dwight',
                    opacity: 0
                },
            ],
        },
        {
            id: 'blue-light-start',
            alignment: 'center',
            hidden: false,
            title: 'As I walked around campus, there was a common sighting near the structures I saw Yale claiming as its own, and it wasn\'t a building at all.',
            // opacity: 0,
            // textColor: '#dddddd',
            // embed: 'https://your.yale.edu/community/public-safety/campus-safety-services/blue-phones/',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'upperBubble',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'blue-light-pic',
            alignment: 'full',
            hidden: false,
            image: 'yaleWebBlue.png',
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            description: 'Source: https://your.yale.edu/community/public-safety/campus-safety-services/blue-phones',
            // embed: 'https://your.yale.edu/community/public-safety/campus-safety-services/blue-phones/',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blueLights',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ],
        },   
        {
            id: 'blue-lights-appear',
            alignment: 'left',
            hidden: false,
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            title: 'The blue dots represent every single blue phone north of the Yale School of Medicine. These blue phones, which communicate safety, seemed to make up a big part of the Yale bubble too.',
            // embed: 'https://your.yale.edu/community/public-safety/campus-safety-services/blue-phones/',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blueLights',
                    opacity: 1
                },
                {
                    layer: 'blueLightsNoParking',
                    opacity: 0
                },
                {
                    layer: 'blueLightsParking',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'blue-lights-garage-explanation',
            alignment: 'left',
            hidden: false,
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            title: 'Many of the clusters represent parking garages, which, while used by Yale affiliates, aren\'t distinguishably Yale.',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blueLights',
                    opacity: 0.2
                },
                {
                    layer: 'blueLightsNoParking',
                    opacity: 0
                },
                {
                    layer: 'blueLightsParking',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'blue-lights-garage-disappear',
            alignment: 'full',
            hidden: true,
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blueLights',
                    opacity: 0
                },
                {
                    layer: 'blueLightsParking',
                    opacity: 0
                },
                {
                    layer: 'blueLightsNoParking',
                    opacity: 1
                },
                {
                    layer: 'upperBubble',
                    opacity: 0,
                    color: 'white'
                }
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'blue-lights-realization',
            alignment: 'left',
            hidden: false,
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            title: 'The blue lights seem to align exactly with the bubble I had made based on Yale\'s distinguishable property. The northern lights that extend away from the bubble represent Science Park and an apartment complex.',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'upperBubble',
                    opacity: 1,
                    color: 'white'
                }
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'blue-lights-realization-2',
            alignment: 'center',
            hidden: false,
            // opacity: 0,
            // textColor: '#dddddd',
            title: 'After plotting the two together, I realized that blue phones and Yale\'s structural dominance over New Haven work together to communicate implied safety. In turn, students feel unsafe when they leave campus.',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'moar-good',
            alignment: 'left-large',
            hidden: false,
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            title: 'There are far more measures that Yale takes to provide security for its students.',
            description: 'Some are less extreme measures, which are helpful to students in any city environment.<br><br> Yale Security, for example, "provides walking escorts and nighttime safe rides, runs theft deterrent programs, and provides lockout services."<br><br>Source: https://your.yale.edu/community/public-safety/yale-security-department',
            image: 'Security_FBCoverPhoto.webp',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'moar-bad',
            alignment: 'center',
            hidden: false,
            // opacity: 0,
            // textColor: '#dddddd',
            title: 'Other "safety measures," though, are far more insidious.',
            // description: 'Some are less extreme measures, which are helpful to students in any city environment.<br><br> Yale Security, for example, "provides walking escorts and nighttime safe rides, runs theft deterrent programs, and provides lockout services."<br><br>Source: https://your.yale.edu/community/public-safety/yale-security-department',
            description: 'Source: https://www.nytimes.com/2023/08/25/nyregion/yale-police-fliers.html',
            image: ['NYTPolice.png','unionFlyer.webp'],
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'concl',
            alignment: 'center',
            hidden: false,
            // opacity: 0,
            // textColor: '#dddddd',
            title: 'What does New Haven have to say about this? After all, the New Haven outside the Yale bubble is what is most affected by it. ',
            // description: 'Some are less extreme measures, which are helpful to students in any city environment.<br><br> Yale Security, for example, "provides walking escorts and nighttime safe rides, runs theft deterrent programs, and provides lockout services."<br><br>Source: https://your.yale.edu/community/public-safety/yale-security-department',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'concl-nhv',
            alignment: 'left-large',
            hidden: false,
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            title: 'Some effects are economic, and indirectly related to safety.',
            description: 'Article text:<br>"Mayor Justin Elicker said 60% of his city’s total real estate is tax-exempt, at a value of $8.5 billion. Almost half of that, he said, belongs to Yale University."<br><br>Sources:<br>https://yaledailynews.com/blog/2021/09/28/yale-and-local-labor-unions-arrive-at-tentative-contract-agreement/<br>https://www.nbcconnecticut.com/investigations/new-haven-looks-to-recoup-millions-as-tax-exempt-properties-grow/2404243/',
            image: ['yaleRespectNHVStreetPaint.png','nbcTaxArticle.png'],
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'concl-bad',
            alignment: 'left-large',
            hidden: false,
            opacity: 0,
            textColor: '#dddddd',
            textShadow: '0 0 5px #000000',
            title: 'But others are much more directly tied to safety.',
            description: 'For example, Yale\'s private police department has jurisdiction over much more than the Yale bubble.<br><br>"Stephanie Washington was rushed to the hospital last April after Yale and Hamden police fired 16 rounds at her car during a traffic stop, their bullets fracturing her spine and tearing her skin."<br><br>Source:https://yaledailynews.com/blog/2020/08/08/stephanie-washington-sues-involved-officers-new-haven-hamden-yale-over-police-shooting/',
            image: ['ypdHeadline.png'],
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'final',
            alignment: 'center',
            hidden: false,
            // opacity: 0,
            // textColor: '#dddddd',
            // textShadow: '0 0 5px #000000',
            title: 'The Yale bubble and its consequences lead us to ask: Who is kept safe from whom by the structures and systems Yale puts in place to keep its students safe? And is the Yale bubble meant more to keep New Haveners out, or Yalies in?',
            location: {
                center: [-72.93800, 41.31600],
                zoom: 14.02,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ],
        },
    ]
};
