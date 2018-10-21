import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './MapObj.css';
import 'leaflet/dist/leaflet.css';

export default class MapObj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: this.props.coords
        }


        this.position = [47.6555, -122.315];

    }

    componentWillReceiveProps({ coords }) {
        this.setState({ coords });
    }


    render() {
        let arr = [51.505, -0.09]
        // [this.state.coords && this.state.coords.latitude ? this.state.coords.latitude : 0,
        // this.state.coords && this.state.coords.longitude ? this.state.coords.longitude : 0];
        return (
            <div>
                <Map center={arr} zoom={13}>
                    <TileLayer
                        attribution="<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {/* <Marker position={arr}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker> */}
                </Map>
            </div>

        )
    }
}