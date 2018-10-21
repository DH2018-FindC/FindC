import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Headbar from './components/Headbar';
import Home from './components/Home';
import 'firebase/database';


const Loading = () => <div></div>;
const Main = Loadable({
    loader: () => import('./containers/Main'),
    loading: Loading,
})


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: {},
            data: {}
        }
    }

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
                <Router>
                    <div>
                        <Headbar />
                        <Switch>
                            <Route exact path="/about" render={() => <div>About page</div>} />
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
