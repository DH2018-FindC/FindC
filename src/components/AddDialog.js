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


const API_KEY = 'AIzaSyA-u4mGseXsGu1mLytcpR3skLsn24vwH3Y';
const ENDPOINT_LINK = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

// https://maps.googleapis.com/maps/api/geocode/json?address=University%20of%20Washington&key=AIzaSyA-u4mGseXsGu1mLytcpR3skLsn24vwH3Y
export default class AddDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            name: '',
            address: '',
            reverseLoading: false,
            services: {}
        };

        this.servicesList = [
            { id: 'F_condoms', title: 'Free Condoms' },
            { id: 'F_bcpills', title: 'Free Birth Control Pills' },
            { id: 'F_iud', title: 'Free IUDs' },
            { id: 'D_condoms', title: 'Discounted Condoms' },
            { id: 'D_bcpills', title: 'Discounted Birth Control Pills' },
            { id: 'D_iud', title: 'Discounted IUDs' }
        ]
    }

    clearData = () => {
        this.setState({
            name: '',
            address: '',
            reverseLoading: false,
            services: {}
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            coords: nextProps.coords
        })
    }

    handleChange = (variable) => event => {
        this.setState({
            [variable]: event.target.value
        })
    }

    handleChecked = (variable) => event => {
        let temp = this.state.services;
        temp[variable] = true;
        this.setState({
            services: temp
        });
    }

    getReverseGeoLocation = () => {
        this.setState({ reverseLoading: true });
        let link = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.coords.latitude},${this.state.coords.longitude}&location_type=ROOFTOP&result_type=street_address&key=${API_KEY}`
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
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        onChange={this.handleChange('name')}
                    />
                    <TextField
                        autoFocus
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
                    <FormLabel component="legend">What kinds of services does this place provide?</FormLabel>
                    <FormGroup>
                        {this.servicesList.map((d, i) => {
                            return <FormControlLabel key={'check' + i} control={
                                <Checkbox checked={this.state.services[d.id]} onChange={this.handleChange(d.id)} value={d.id} />
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
                        this.clearData();
                        this.props.setAddNewModalState(false);
                    }} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    }
}