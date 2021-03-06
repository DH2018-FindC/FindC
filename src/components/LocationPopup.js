import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';
import 'firebase/database';

/**
 * LocationPopup is the popup for a single circle when clicked on
 * @class
 */
export default class LocationPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            point: this.props.point,
            pushKey: this.props.pushKey
        }

        this.kv = {
            F_condoms: 'Free condoms',
            F_bcpills: 'Free Birth Control Pills',
            F_iud: 'Free IUDs',
            D_condoms: 'Discounted condoms',
            D_bcpills: 'Discounted Birth Control Pills',
            D_iud: 'Discounted IUDs',
            D_morningAfter: 'Discounted Morning After Pills'
        }
    }

    /**
     * on component receiving props, set states
     * @param {*} param destructured parameter for point and pushKey
     */
    componentWillReceiveProps({ point, pushKey }) {
        this.setState({ point, pushKey });
    }

    // if addOrSub true, it adds, otherwise subs
    /**
     * addCount will add a count to the specific discounted/free item
     * @param {string} key key of item to add or subtract
     * @param {boolean} addOrSub if true, it'll add 1, if false it'll subtract 1
     */
    addCount = (key, addOrSub) => {
        firebase.database().ref(`Data/${this.state.pushKey}/services/${key}`).set(this.state.point.services[key] + (addOrSub ? 1 : -1));
    }

    render() {
        let { point } = this.state;
        return <div style={{ width: 330, height: 360, fontSize: 14, overflowY: 'auto' }}>
            <p><strong>{point.name}</strong></p>
            <p><a href={`https://www.google.com/maps/?q=${point.lat},${point.lng}`} target="_blank">Open in Google Maps</a></p>
            <p>What did you visit for? Give it a thumbs up!</p>
            {Object.keys(point.services).map((d, i) => {
                return <div key={this.state.pushKey + "" + i} style={{ verticalAlign: 'baseline', borderBottom: '1px solid black', width: '90%', padding: 3 }}>
                    {this.kv[d]}: {point.services[d]}<span style={{ margin: 3 }}></span>
                    <Button style={{ padding: 0, minHeight: 0, minWidth: 40 }} onClick={() => { this.addCount(d, true) }}><span role="img" aria-label="thumbs up">👍</span></Button>
                    <Button style={{ padding: 0, minHeight: 0, minWidth: 40 }} onClick={() => { this.addCount(d, false) }}><span role="img" aria-label="thumbs down">👎</span></Button>
                </div>
            })}
            <div style={{ marginTop: 10 }}></div>
            <Button color="primary">Petition</Button> <Button color="primary">Suggest</Button> <Button color="secondary">Report</Button>
        </div>
    }
}
