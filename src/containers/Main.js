import React, { Component } from 'react';
import MapObj from '../components/MapObj';
import './Main.css';
import AddButton from '../components/AddButton';
import AddDialog from '../components/AddDialog';
import SearchButton from '../components/SearchButton';
import SearchDialog from '../components/SearchDialog';

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
            addNewModalOpen: false,
            searchModalOpen: false,
            services: {}
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

    /**
     * set modal state of search open or closed
     * @param {boolean} searchModalOpen
     */
    setSearchModalState = (searchModalOpen) => {
        this.setState({ searchModalOpen });
    }

    setNewCoords = (latitude, longitude) => {
        this.setState({
            coords: { latitude, longitude }
        })
    }

    setFilter = (services) => {
        this.setState({ services });
    }

    render() {
        return <div className={`classname`} style={{
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <MapObj coords={this.state.coords} style={{ width: '100vw', height: '100vh' }} data={this.state.data} services={this.state.services} />
            <AddButton setAddNewModalState={this.setAddNewModalState} />
            <SearchButton setSearchModalState={this.setSearchModalState} />
            <AddDialog open={this.state.addNewModalOpen} coords={this.state.coords} setAddNewModalState={this.setAddNewModalState} />
            <SearchDialog open={this.state.searchModalOpen} setNewCoords={this.setNewCoords} coords={this.state.coords} setSearchModalState={this.setSearchModalState} setFilter={this.setFilter} />
        </div>
    }
}