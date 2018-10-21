import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


export default class AddButton extends Component {
    render() {
        return <div style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            zIndex: 500
        }}><Button variant="fab" style={{ backgroundColor: "#421dac", color: 'white' }} onClick={() => this.props.setAddNewModalState(true)}>
                <AddIcon />
            </Button></div>
    }
}