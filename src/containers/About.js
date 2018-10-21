import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NavigationIcon from '@material-ui/icons/Navigation';
import {Link} from 'react-router-dom';
import './About.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'container-about'}>
                <div className={'intro'}>
                    FindC
                    <br/>
                    What we do
                </div>

                <div className={'section'}>
                    Why use contraceptives?
                </div>
                <div className={'section'}>
                    What the what
                </div>
                <div className={'section'}>
                    Mailing list
                </div>
            </div>
        )
    }
}