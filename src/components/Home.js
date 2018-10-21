import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'container'}>
                <div class="logo-clear">
                </div>
                <div class="name">FindC</div>
                <Link to="/map">
                <Button variant="extendedFab" className={'button'} style={{backgroundColor: '#ff7777', color: 'white'}} >
                    <NavigationIcon/>
                    Check My Area
                </Button>
                </Link>
            </div>
        )
    }
}