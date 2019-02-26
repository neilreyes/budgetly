import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { 
    AppBar,
    Button,
    IconButton,
    Toolbar,    
    Typography,
    withStyles, 
    withTheme } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        justifyContent: 'space-between',
    },
    appBar: {
        marginLeft: 66,
        zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
        marginLeft: 240,
        width: `calc(100% - ${drawerWidth}px)`,
    }
});

class SiteHeader extends Component {


    render(){
        const { classes, isDrawerOpen, toggleDrawer } = this.props;

        return (
            <AppBar
                className={ isDrawerOpen ? classes.appBarShift : classes.appBar }
                position="static">
                <Toolbar>
                    <IconButton onClick={()=>toggleDrawer()}>
                        { isDrawerOpen ? <Close /> : <Menu /> }
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Budgetly
                    </Typography>
                    <Button color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        isDrawerOpen : state.siteDrawer.open,
        classes: ownProps.classes,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        toggleDrawer : () => dispatch({type: "TOGGLE_DRAWER"}),
    }
}

export default compose(
    withTheme(),
    withStyles(styles, { withTheme: true }),
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )
)(SiteHeader);
