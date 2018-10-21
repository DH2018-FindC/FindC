import React, { Component } from 'react';
import MapObj from '../components/MapObj';
import './Main.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: this.props.coords
        }
    }

    componentWillReceiveProps({ coords }) {
        this.setState({ coords })
    }
    render() {
        return <div className={`classname`} style={{
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <MapObj coords={this.state.coords} style={{ width: '100vw', height: '100vh' }} />
        </div>
    }
}