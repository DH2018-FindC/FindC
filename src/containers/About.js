import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
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
                    Find contraceptives better.
                </div>
                <div className={'section'}>
                    <div style={{fontSize:'60px'}}><ContactSupportIcon fontSize="inherit"/></div>
                    <span>Why use contraceptives?</span>
                    <br/>
                    <br/>
                    According to the Johns Hopkins Bloomberg School of Public Health, contraceptive usage likely prevents over 272,000 maternal deaths a year. Contraceptive usage has been significantly linked to better quality of life for women. Along with that, it advances the economy for everyone.
                </div>
                <div className={'section'}>
                    <div style={{fontSize:'60px'}}><VerifiedUserIcon fontSize="inherit"/></div>
                    <br/>
                    <span>Why use condoms?</span>
                    <br/>
                    <br/>
                    Condoms and female condoms are the only methods of birth control that also help prevent the spread of sexually transmitted infections, including HIV. Even if you’re already using a different kind of birth control to avoid pregnancy, it’s a good idea to also use condoms or female condoms every time you have sex to protect yourself from STDs.
                </div>
                <div className={'section'}>
                    <div style={{fontSize:'60px'}}><MyLocationIcon fontSize="inherit"/></div>
                    <span>How to use?</span>
                    <br/>
                    <br/>
                    To use FindC, navigate to the map tab and our app will automatically find all nearby areas for contraceptives. Our filter allows you to sort the locations by free or discounted contraceptives. Your privacy and security is our priority so we do not store/record any of your data and all of our voting and reporting functions are anonymous.
                </div>
            </div>
        )
    }
}