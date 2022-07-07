import Style from "./BackgroundMap.module.css";
import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';


export default class BackgroundMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isMounted: false, isLoadDelayed: false };
    }

    map = null;
    marker = null;

    loader = new Loader({
        apiKey: "AIzaSyD8Vp_eqij2KVTiHCTi9mQgKaGCAZ5FRDQ",
        version: "weekly",
        libraries: ["places"]
    });

    componentDidMount() {
        this.loader
            .load()
            .then((google) => {
                this.map = new google.maps.Map(document.getElementById("map"), {
                    center: {
                        lat: this.props.location.lat,
                        lng: this.props.location.lon
                    },
                    disableDefaultUI: true,
                    draggable: true,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#c9c9c9"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        }
                    ],
                    zoom: 9
                });
                this.setState({ isMounted: true }, () => { if (this.state.isLoadDelayed) this.componentDidUpdate(null); });
            })
            .catch(e => {
                // do something
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location == prevProps?.location) return;
        if (!this.state.isMounted) {
            this.setState({ isLoadDelayed: true });
            return;
        }
        this.map.setCenter(new google.maps.LatLng(this.props.location.lat, this.props.location.lon));
        this.map.setZoom(9);
        if (this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.props.location.lat, this.props.location.lon),
            title: null,
        });
        this.marker.setMap(this.map);
    //    this.infoWindow = new google.maps.InfoWindow({
    //        content: renderToString(<InfoWindow />).toString(),
    //    });
    //    this.marker.addListener("click", () => {
    //        this.showInfoWindow();
    //    });
    //    this.showInfoWindow();
    //    this.fetchForecast(this.props.location);
    }


    render() {
        return <div id="map" className={Style.backgroundMap}></div>;
    }
}
