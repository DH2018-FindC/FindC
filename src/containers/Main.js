import React, { Component } from 'react';
import MapObj from '../components/MapObj';
import './Main.css';
import AddButton from '../components/AddButton';
import AddDialog from '../components/AddDialog';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: this.props.coords,
            addNewModalOpen: false
        }
    }

    componentWillReceiveProps({ coords }) {
        this.setState({ coords })
    }

    setAddNewModalState = (addNewModalOpen) => {
        this.setState({ addNewModalOpen });
    }

    render() {
        return <div className={`classname`} style={{
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <MapObj coords={this.state.coords} style={{ width: '100vw', height: '100vh' }} />
            <AddButton setAddNewModalState={this.setAddNewModalState} />
            <AddDialog open={this.state.addNewModalOpen} coords={this.state.coords} setAddNewModalState={this.setAddNewModalState} />
        </div>
    }
}