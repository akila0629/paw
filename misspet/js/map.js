
        var map;
        function initMap() {
            navigator.geolocation.watchPosition((position) =>{
                 console.log(position.coords);
                lat = position.coords.latitude;
                lng = position.coords.longitude;
            })
            
            map = new google.maps.Map(document.getElementById('map'), {
                disableDefaultUI: true,
                draggable: true,
                center: { lat: 25.0062587, lng: 121.4483994 },
                zoom: 16,
                styles: [
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "saturation": 10
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "stylers": [
                            {
                                "color": "#f4f4f4"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural.terrain",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "color": "#558bad"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#375970"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.attraction",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "color": "#558bad"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4c6878"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.government",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "color": "#558bad"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.school",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#aa7942"
                            },
                            {
                                "lightness": 90
                            }
                        ]
                    },
                    {
                        "featureType": "poi.school",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "color": "#d1a27a"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "stylers": [
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#d9dcdf"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#d3d3d3"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#aaaaaa"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "stylers": [
                            {
                                "color": "#dcecfb"
                            }
                        ]
                    }
                ]
            });
        }