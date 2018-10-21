import React, { Component } from 'react';
import Map from '../components/Map';
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

        }}>
            <Map coords={this.state.coords} />
        </div>
    }
}