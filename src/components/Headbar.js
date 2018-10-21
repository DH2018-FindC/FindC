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
            <AppBar position="static">
                <Toolbar>
                    <div style={{
                        width: '100%'
                    }}>
                        <Typography variant="h6" color="inherit">
                            Photos
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
                style={{
                    width: 250
                }}
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => this.toggleDrawer(false)}
                    onKeyDown={() => this.toggleDrawer(false)}
                >
                    <div>
                        <List>
                            <ListItem>test</ListItem>
                        </List>
                        <Divider />
                    </div>
                </div>
            </SwipeableDrawer>
        </div>;
    }
}