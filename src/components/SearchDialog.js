import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import firebase from 'firebase/app';
import 'firebase/database';

// pls dont steal
// const ak = 'AIzaSyA-u4mGseXsGu1mLytcpR3skLsn24vwH3Y';
// const ENDPOINT_LINK = 'https://maps.googleapis.com/maps/api/geocode/json?address=';


/**
 * AddDialog is the dialog window for adding information to firebase
 * @class
 */
export default class SearchDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            address: '',
            loading: false,
            services: {
                F_condoms: false,
                F_bcpills: false,
                F_iud: false,
                D_condoms: false,
                D_bcpills: false,
                D_iud: false,
                D_morningAfter: false
            },
            error: '',
            coords: this.props.coords
        };

        this.servicesList = [
            { id: 'F_condoms', title: 'Free Condoms' },
            { id: 'F_bcpills', title: 'Free Birth Control Pills' },
            { id: 'F_iud', title: 'Free IUDs' },
            { id: 'D_condoms', title: 'Discounted Condoms' },
            { id: 'D_bcpills', title: 'Discounted Birth Control Pills' },
            { id: 'D_iud', title: 'Discounted IUDs' },
            { id: 'D_morningAfter', title: 'Discounted Morning After Pills' }
        ]
    }

    /**
     * Clear state data
     */
    clearData = () => {
        this.setState({
            address: '',
            loading: false,
            services: {}
        })
    }

    submit = () => {
        fetch(`http://localhost:8080/?id=1&address=${this.state.address}`)
            .then(d => {
                return d.json();
            })
            .then(d => {
                let loc = d.results[0].geometry.location;
                this.props.setNewCoords(loc.lat, loc.lng);
                this.props.setFilter(this.state.services);
                this.clearData();
            });
    }


    /**
 * Get the reverse geolocation to get address from current lat/lng
 */
    getReverseGeoLocation = () => {
        this.setState({ loading: true });
        // let link = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.coords.latitude},${this.state.coords.longitude}&location_type=ROOFTOP&result_type=street_address&key=${ak}`
        // fetch(link).then(d => {
        //     return d.json();
        // }).then(d => {
        //     this.setState({
        //         address: d.results[0].formatted_address,
        //         loading: false
        //     });
        // })
        let link = `https://localhost:8080/?id=2&param=latlng%3D${this.state.coords.latitude},${this.state.coords.longitude}%26location_type%3DROOFTOP%26result_type=%3Dstreet_address`;
        fetch( link ).then( d => {
            return d.json();
        } ).then( d => {
            this.setState( {
                address: d.results[ 0 ].formatted_address,
                loading: false
            } );
        } )
    }

    /**
     * Set open or coordinates if changed
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            coords: nextProps.coords
        })
    }

    /**
     * Handle text input change
     */
    handleChange = (variable) => event => {
        this.setState({
            [variable]: event.target.value
        })
    }

    /**
     * Handle checkbox changed
     */
    handleChecked = (variable) => event => {
        let temp = this.state.services;
        temp[variable] = !temp[variable];
        this.setState({
            services: temp
        });
    }

    render() {
        return <div>
            <Dialog
                open={this.state.open}
                onClose={() => { this.props.setSearchModalState(false) }}
                aria-labelledby="form-dialog-title"
                scroll="paper"
            >
                <DialogTitle id="form-dialog-title">Search or filter</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the address you would like to see.
                    </DialogContentText>
                    <TextField
                        error={this.state.error === "address"}
                        margin="dense"
                        id="address"
                        label="Address"
                        fullWidth
                        onChange={this.handleChange('address')}
                        value={this.state.address}
                    />
                    <Button onClick={() => {
                        // this.props.setAddNewModalState(false)
                        this.getReverseGeoLocation();
                    }} color="primary" disabled={this.state.loading}>
                        Use current location
                    </Button>{this.state.loading && <CircularProgress />}
                    <FormLabel component="legend">What kinds of services are you looking for?</FormLabel>
                    <FormGroup>
                        {this.servicesList.map((d, i) => {
                            return <FormControlLabel key={'check' + i} control={
                                <Checkbox checked={this.state.services[d.id]} onChange={this.handleChecked(d.id)} value={d.id} />
                            }
                                label={d.title} />
                        })}
                    </FormGroup>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        this.clearData();
                        this.props.setSearchModalState(false);
                    }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        this.submit();
                        this.props.setSearchModalState(false);
                    }} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    }
}
