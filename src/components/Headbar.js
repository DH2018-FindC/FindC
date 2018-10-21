import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

export default class Headbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggleDrawer = (drawerState) => {
        this.setState({ open: drawerState });
    }

    render() {
        return <div>
            <AppBar position="static" style={{
                backgroundColor: '#421dac',
                position: 'absolute', top: 0, left: 0
            }}>
                <Toolbar>
                    <div style={{
                        width: '100%'
                    }}>
                        <Typography variant="h6" color="inherit">
                            <Link to="" style={{ textDecoration: 'none', color: 'white' }}>
                                FindC
                            </Link>
                        </Typography>
                    </div>
                    <IconButton color="inherit" aria-label="Menu" onClick={() => {
                        this.toggleDrawer(true)
                    }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor="right"
                open={this.state.open}
                onClose={() => this.toggleDrawer(false)}
                onOpen={() => this.toggleDrawer(true)}

            >
                <div
                    style={{
                        width: 250
                    }}
                    tabIndex={0}
                    role="button"
                    onClick={() => this.toggleDrawer(false)}
                    onKeyDown={() => this.toggleDrawer(false)}
                >
                    <div>
                        <List >
                            <ListItem>
                                <ListItemText>
                                    <Link to="" style={{ textDecoration: 'none', color: 'black' }} >Main</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                        {/* <Divider /> */}
                    </div>
                </div>
            </SwipeableDrawer>
        </div>;
    }
}