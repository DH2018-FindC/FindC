import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Headbar from './components/Headbar';


const Loading = () => <div></div>;
const Main = Loadable({
    loader: () => import('./containers/Main'),
    loading: Loading,
})


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">

                <Router>
                    <div>
                        <Headbar />
                        <Switch>
                            <Route exact path="/about" render={() => <div>About page</div>} />
                            <Route render={() => <Main />} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
