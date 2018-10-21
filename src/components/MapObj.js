import React, { Component } from 'react';
import { Map, CircleMarker, Marker, Popup, TileLayer } from 'react-leaflet';
import './MapObj.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LocationPopup from './LocationPopup';

// Reset leaflet defaults
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

/**
 * MapObj is the leaflet map
 * @class
 */
export default class MapObj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: this.props.coords,
            data: this.props.data,
            centered: [],
        }
    }

    /**
     * on receiving props, the map updates coordinates and data
     */
    componentWillReceiveProps({ coords, data }) {
        this.setState({ coords, data });
    }

    /**
     * Set the centered position when clicked on
     */
    setCentered = (lat, lng) => {
        this.setState({ centered: [lat + 0.0025, lng] });
    }


    render() {
        let arr = this.state.centered.length > 0 ? this.state.centered : [this.state.coords && this.state.coords.latitude ? this.state.coords.latitude : 0,
        this.state.coords && this.state.coords.longitude ? this.state.coords.longitude : 0];

        let home = [this.state.coords && this.state.coords.latitude ? this.state.coords.latitude : 0,
        this.state.coords && this.state.coords.longitude ? this.state.coords.longitude : 0]

        let markerList = Object.keys(this.state.data).map((d, i) => {
            let point = this.state.data[d];
            return <CircleMarker key={'c' + i}
                center={L.latLng(point.lat, point.lng)}
                radius={8}
                fill={true}
                color={'#000000'}
                fillColor={'#ff0000'}
                fillOpacity={'0.75'}
                onClick={() => { this.setCentered(point.lat, point.lng) }}
            >
                <Popup>
                    <LocationPopup point={point} pushKey={d} />
                </Popup>
            </CircleMarker>
        });

        return (
            <div>
                <Map center={arr} zoom={16}>
                    <TileLayer
                        attribution="<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {/* <CircleMarker center={arr}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </CircleMarker> */}
                    <Marker position={home} color="red">
                        {/* <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup> */}
                    </Marker>
                    <div>
                        {markerList}
                    </div>
                </Map>
            </div>

        )
    }
}