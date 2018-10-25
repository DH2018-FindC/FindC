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

/**
 * AddDialog is the dialog window for adding information to firebase
 * @class
 */
const ENDPOINT = 'http://localhost:8080';
export default class AddDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            name: '',
            address: '',
            reverseLoading: false,
            services: {
                F_condoms: false,
                F_bcpills: false,
                F_iud: false,
                D_condoms: false,
                D_bcpills: false,
                D_iud: false,
                D_morningAfter: false
            },
            error: ''
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
     * Submit data to firebase based on state. 
     * Fetch latitude and longitude of address via Google Cloud Platform and store that into firebase.
     */
    submitToFirebase = () => {
        let services = this.state.services;
        Object.keys(services).forEach(service => {
            services[service] = services[service] ? 1 : 0
        });

        fetch( ENDPOINT + '/?id=geocode&param=' + encodeURIComponent(`?address=${this.state.address}`))
            .then(d => {
                return d.json();
            })
            .then(d => {
                let loc = d.results[0].geometry.location;
                firebase.database().ref('Data').push({
                    name: this.state.name,
                    address: this.state.address,
                    services,
                    lat: loc.lat,
                    lng: loc.lng
                });
                this.clearData();
            });
    }

    /**
     * Client side security checking-- there is server side as well in Firebase rules
     */
    checkError = () => {
        if (this.state.address === "") {
            this.setState({ error: "address" });
            return false;
        }
        if (this.state.name === "") {
            this.setState({ error: "name" });
            return false;
        }
        return true;
    }

    /**
     * Clear state data
     */
    clearData = () => {
        this.setState({
            name: '',
            address: '',
            reverseLoading: false,
            services: {}
        })
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

    /**
     * Get the reverse geolocation to get address from current lat/lng
     */
    getReverseGeoLocation = () => {
        this.setState({ reverseLoading: true });
        let link = ENDPOINT +'/?id=geocode&param=' + encodeURIComponent(`?latlng=${this.state.coords.latitude},${this.state.coords.longitude}&location_type=ROOFTOP&result_type=street_address`);
        fetch(link).then(d => {
            return d.json();
        }).then(d => {
            this.setState({
                address: d.results[0].formatted_address,
                reverseLoading: false
            });
        })
    }

    render() {
        return <div>
            <Dialog
                open={this.state.open}
                onClose={() => { this.props.setAddNewModalState(false) }}
                aria-labelledby="form-dialog-title"
                scroll="paper"
            >
                <DialogTitle id="form-dialog-title">Add new info</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter information about a location!
                    </DialogContentText>
                    <TextField
                        error={this.state.error === "name"}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        onChange={this.handleChange('name')}
                    />
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
                    }} color="primary" disabled={this.state.reverseLoading}>
                        Use current location
                    </Button>{this.state.reverseLoading && <CircularProgress />}
                    <FormLabel component="legend">What kinds of services does this place provide?</FormLabel>
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
                        this.props.setAddNewModalState(false);
                    }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        if (this.checkError()) {
                            this.submitToFirebase();
                            this.props.setAddNewModalState(false);
                        }
                    }} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    }
}
