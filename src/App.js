import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Headbar from './components/Headbar';
import 'firebase/database';

// Loadable for code splitting
const Loading = () => <div></div>;
const Main = Loadable({
    loader: () => import('./containers/Main'),
    loading: Loading,
})
const Home = Loadable({
    loader: () => import('./components/Home'),
    loading: Loading,
})
const About = Loadable({
    loader: () => import('./containers/About'),
    loading: Loading,
})

/**
 * App is the main class where the app gets loaded
 * @class
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: {},
            data: {}
        }
    }

    /**
     * On component mount, request user location and grab data from firebase
     */
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(d => {
            this.setState({
                coords: d.coords
            });
        });

        this.dataRef = firebase.database().ref('Data').on('value', (snap) => {
            this.setState({ data: snap.val() });
        });
    }

    render() {
        return (
            <div className="App">
                <Router basename={process.env.PUBLIC_URL}>
                    <div>
                        <Headbar />
                        <Switch>
                            <Route exact path="/about" render={() => <About />} />
                            <Route exact path="/map" render={() => <Main coords={this.state.coords} data={this.state.data} />} />
                            <Route render={() => <Home />} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
