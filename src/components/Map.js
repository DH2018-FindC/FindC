import React, { Component } from 'react';
import { Map as LMap, Marker, Popup, TileLayer } from 'react-leaflet'

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
          coords: this.props.coords
        }


        this.position = [47.6555, -122.315];

    }

    componentWillReceiveProps({coords}) {
      this.setState({coords});
    }


    render() {
      let arr = [this.state.coords && this.state.coords.latitude ? this.state.coords.latitude : 0, 
          this.state.coords && this.state.coords.longitude ? this.state.coords.longitude : 0];
        return (
        <LMap center={arr} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={arr}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
        </LMap>
        )
    }
}