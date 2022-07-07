import "./styles.css";
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Loader } from '@googlemaps/js-api-loader';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const apiKey = "f4bcb6a805ca765f7df85383dc7fdbab";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: { lat: -25.344, lon: 131.031 } };
    }

    handleLocationChange = (location) => {
        this.setState({ location: location });
    }

    render() {
        return <div className="App">
            <div id="mapContainer"><Map location={this.state.location} /></div>
            <Search changeHandler={this.handleLocationChange} />
        </div>;
    }
}

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    map = null;
    marker = null;
    infoWindow = null;

    loader = new Loader({
        apiKey: "AIzaSyD8Vp_eqij2KVTiHCTi9mQgKaGCAZ5FRDQ",
        version: "weekly",
        libraries: ["places"]
    });

    mapOptions = {
        center: {
            lat: this.props.location.lat,
            lng: this.props.location.lon
        },
        disableDefaultUI: true,
        draggable: true,
        //mapTypeId: 'terrain',
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
        zoom: 4
    };

    render() {
        return (<div id="map"></div>);
    }

    componentDidMount() {
        this.loader
            .load()
            .then((google) => {
                this.map = new google.maps.Map(document.getElementById("map"), this.mapOptions);
            })
            .catch(e => {
                // do something
            });
    }

    componentDidUpdate(prevProps) {
        this.map.setCenter(new google.maps.LatLng(this.props.location.lat, this.props.location.lon));
        this.map.setZoom(9);
        if (this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.props.location.lat, this.props.location.lon),
            title: "Hello World!",
        });
        this.marker.setMap(this.map);
        this.infoWindow = new google.maps.InfoWindow({
            content: renderToString(<InfoWindow />).toString(),
        });
        this.marker.addListener("click", () => {
            this.showInfoWindow();
        });
        this.showInfoWindow();
        this.fetchForecast(this.props.location);
    }

    showInfoWindow = () => {
        this.infoWindow.open({
            anchor: this.marker,
            map: this.map,
            shouldFocus: false,
        });
    }

    fetchForecast = (data) => {
        Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`).then(res => res.json()),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`).then(res => res.json())
        ])
            .then(([weatherJSON, forecastJSON]) => {
                console.log(weatherJSON);
                console.log(forecastJSON);
                this.infoWindow.setContent(renderToString(<InfoWindow weather={weatherJSON} forecast={forecastJSON} />));
                new Chart(document.getElementById("forecastChart"), {
                    type: 'line',
                    data: {
                        labels: forecastJSON.list.map(d => convertUNIXtoString(d.dt)),
                        datasets: [{
                            data: forecastJSON.list.map(d => d.main.temp - 273.15),
                            fill: true,
                            borderColor: '#fff',
                            tension: 0.1,
                            pointRadius: 0
                        }]
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: false                            }
                        }
                    }
                });

            })
            .catch(e => console.error(e));
    }
}

class InfoWindow extends React.Component {
    render() {
        if (!this.props.weather) return <div>Loading...</div>;
        return <div className="forecastGrid">
            <div className="forecastLocation">{this.props.weather.name}</div>
            <div className="forecastCurrentMain" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}.png)` }}>
                <div className="forecastCurrentMainTemp">{(this.props.weather.main.temp - 273.15).toFixed(1)}&deg;C</div>
                <div className="forecastCurrentMainFeels">Feels Like: {(this.props.weather.main.feels_like - 273.15).toFixed(1)}&deg;C</div>
            </div>
            <div className="forecastCurrentDetails">
                <div>
                    <span className="material-icons-outlined">air</span>
                    <div>{(this.props.weather.wind.speed * 3.6).toFixed(1)} kph <span className="material-icons-outlined" style={{ transform: `rotate(${360 - this.props.weather.wind.deg}deg)`, fontSize: '1em' }}>arrow_upward</span></div>
                </div>
                <div>
                    <span className="material-icons-outlined">speed</span>
                    <div>{(this.props.weather.main.pressure / 10).toFixed(1)} kPa</div>
                </div>
                <div>
                    <span className="material-icons-outlined">wb_sunny</span>
                    <div>{convertUNIXtoString(this.props.weather.sys.sunrise)}</div>
                </div>
                <div>
                    <span className="material-icons-outlined">wb_twilight</span>
                    <div>{convertUNIXtoString(this.props.weather.sys.sunset)}</div>
                </div>
            </div>
            <div className="forecastFuture">
                <ForecastChart forecast={this.props.forecast.list} />
            </div>
        </div>;
    }

//    renderForecast = (data) => {
//        console.log(data);
//        return data.map((d, key) => {
//            return <div key={key}>
//                <div>{this.convertUNIXtoString(d.dt)}</div>
//                <div>{(d.main.temp - 273.15).toFixed(1)}&deg;C</div>
//            </div>;
//        });
//    }
}

class ForecastChart extends React.Component {
    componentDidMount() {
        alert("hgere");
        //console.log("here");
    //    console.log(this.props.forecast.map(d => d.temp));
    //    console.log(this.props.forecast.map(d => convertUNIXtoString(d.dt)));
    //    myChart = new Chart(document.getElementById("forecastChart"), {
    //        type: 'line',
    //        data: {
    //            labels: this.props.forecast.map(d => convertUNIXtoString(d.dt)),
    //            datasets: [{
    //                label: 'My First Dataset',
    //                data: this.props.forecast.map(d => d.temp),
    //                fill: false,
    //                borderColor: 'rgb(75, 192, 192)',
    //                tension: 0.1
    //            }]
    //        }
    //    });
    }

    render() {
        return <canvas id="forecastChart"></canvas>;
    }
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: [], text: '' };
    }

    changeHandler = (data) => {
        this.props.changeHandler(data);
        this.setState({ text: data.name + ((data.state !== undefined) ? ', ' + data.state : '') + ", " + countryCodes[data.country] });
    }

    fetchGeoLocation = (q) => {
        if (q == "") {
            this.setState({ results: [] });
            return;
        }
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ results: data });
            })
            .catch(e => console.error(e));
    }

    render() {
        return <div className="searchContainer">
            <SearchBar onSearch={this.fetchGeoLocation} text={this.state.text} />
            <SearchResultsList results={this.state.results} changeHandler={this.changeHandler} />
        </div>;
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="searchBar">
            <SearchInput onSearch={this.props.onSearch} text={this.props.text} />
        </div>;
    }
}

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.debounceId = 0;
        this.state = { inputValue: props.text };
    }

    keyUpHandler = (e) => {
        if (this.debounceId !== 0) clearTimeout(this.debounceId);
        this.debounceId = setTimeout(() => {this.props.onSearch(this.state.inputValue); }, 500);
    }

    updateValue = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    selectText = (e) => {
        e.target.setSelectionRange(0, e.target.value.length);
    }

    componentDidUpdate(prevProps) {
        if (this.props.text == prevProps.text) return;
        //console.log(this.state.inputValue + ":" + this.props.text);
        this.setState({ inputValue: this.props.text });
    }

    render() {
        return <input className="search" placeholder="Search Location..." onKeyUp={this.keyUpHandler} onChange={this.updateValue} value={this.state.inputValue} onClick={this.selectText} />;
    }

}

class SearchResultsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.results.length == 0) {
            return <div className="searchResults"><span className="material-icons-outlined">autorenew</span></div>;
        }
        return <div className="searchResults">
            {this.props.results.map((result, key) => <SearchResult key={key} result={result} changeHandler={this.props.changeHandler} />)}
        </div>;
    }
}

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    //selectLocation = () => {
    //    //console.log(this.props.result);
    //}

    setLocation = (e) => {
        e.target.blur();
        this.props.changeHandler(this.props.result);
    }

    render() {
        return <button className="resultButton" onClick={this.setLocation}>{this.props.result.name}{(this.props.result.state !== undefined) ? ', ' + this.props.result.state : ''}, {countryCodes[this.props.result.country]}</button>;
    }
}

function convertUNIXtoString(unix) {
    var date = new Date(unix * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return (hours + ':' + minutes.substr(-2));
}

const countryCodes = {
    AF: 'Afghanistan',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua and Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas (the)',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia (Plurinational State of)',
    BQ: 'Bonaire, Sint Eustatius and Saba',
    BA: 'Bosnia and Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory (the)',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    CV: 'Cabo Verde',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    KY: 'Cayman Islands (the)',
    CF: 'Central African Republic (the)',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos (Keeling) Islands (the)',
    CO: 'Colombia',
    KM: 'Comoros (the)',
    CD: 'Congo (the Democratic Republic of the)',
    CG: 'Congo (the)',
    CK: 'Cook Islands (the)',
    CR: 'Costa Rica',
    HR: 'Croatia',
    CU: 'Cuba',
    CW: 'Curaçao',
    CY: 'Cyprus',
    CZ: 'Czechia',
    CI: 'Côte d\'Ivoire',
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic (the)',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    SZ: 'Eswatini',
    ET: 'Ethiopia',
    FK: 'Falkland Islands (the) [Malvinas]',
    FO: 'Faroe Islands (the)',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories (the)',
    GA: 'Gabon',
    GM: 'Gambia (the)',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard Island and McDonald Islands',
    VA: 'Holy See (the)',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran (Islamic Republic of)',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    KP: 'Korea (the Democratic People\'s Republic of) ',
    KR: 'Korea (the Republic of)',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: 'Lao People\'s Democratic Republic(the)',
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macao',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands (the)',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia (Federated States of)',
    MD: 'Moldova (the Republic of)',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands (the)',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger (the)',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    MP: 'Northern Mariana Islands (the)',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestine, State of',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines (the)',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    MK: 'Republic of North Macedonia',
    RO: 'Romania',
    RU: 'Russian Federation (the)',
    RW: 'Rwanda',
    RE: 'Réunion',
    BL: 'Saint Barthélemy',
    SH: 'Saint Helena, Ascension and Tristan da Cunha',
    KN: 'Saint Kitts and Nevis',
    LC: 'Saint Lucia',
    MF: 'Saint Martin (French part)',
    PM: 'Saint Pierre and Miquelon',
    VC: 'Saint Vincent and the Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome and Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SX: 'Sint Maarten (Dutch part)',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia and the South Sandwich Islands',
    SS: 'South Sudan',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan (the)',
    SR: 'Suriname',
    SJ: 'Svalbard and Jan Mayen',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syrian Arab Republic',
    TW: 'Taiwan (Province of China)',
    TJ: 'Tajikistan',
    TZ: 'Tanzania, United Republic of',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad and Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks and Caicos Islands (the)',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates (the)',
    GB: 'United Kingdom of Great Britain and Northern Ireland (the)',
    UM: 'United States Minor Outlying Islands (the)',
    US: 'United States of America (the)',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VE: 'Venezuela (Bolivarian Republic of)',
    VN: 'Viet Nam',
    VG: 'Virgin Islands (British)',
    VI: 'Virgin Islands (U.S.)',
    WF: 'Wallis and Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe',
    AX: 'Åland Islands',
};