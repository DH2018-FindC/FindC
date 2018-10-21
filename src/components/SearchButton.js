import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

/**
 * AddButton is the bottom that appears at the bottom right of the Main page
 * @class
 */
export default class SearchButton extends Component {
    render() {
        return <div style={{
            position: 'absolute',
            bottom: 20,
            right: 80,
            zIndex: 500
        }}><Button variant="fab" style={{ backgroundColor: "#421dac", color: 'white' }} onClick={() => this.props.setSearchModalState(true)}>
                <SearchIcon />
            </Button></div>
    }
}