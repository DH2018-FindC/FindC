import React, { Component } from 'react';
import MapObj from '../components/MapObj';
import './Main.css';
import AddButton from '../components/AddButton';
import AddDialog from '../components/AddDialog';

/**
 * Main is the component that appears when the route is at '/map'
 * This is the main map file
 * @class
 */
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: this.props.coords,
            data: this.props.data,
            addNewModalOpen: false
        }
    }

    /**
     * On receiving props, update coordinates and data
     * @param {*} props destructured props, which has coords and data  
     */
    componentWillReceiveProps({ coords, data }) {
        this.setState({ coords, data })
    }

    /**
     * Set modal state open or closed
     * @param {boolean} addNewModalOpen true for open, false for closed.
     */
    setAddNewModalState = (addNewModalOpen) => {
        this.setState({ addNewModalOpen });
    }

    render() {
        return <div className={`classname`} style={{
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <MapObj coords={this.state.coords} style={{ width: '100vw', height: '100vh' }} data={this.state.data} />
            <AddButton setAddNewModalState={this.setAddNewModalState} />
            <AddDialog open={this.state.addNewModalOpen} coords={this.state.coords} setAddNewModalState={this.setAddNewModalState} />
        </div>
    }
}