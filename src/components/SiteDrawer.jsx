import React from 'react';
import { compose } from 'redux';
import {
    Drawer,
    IconButton,
    withTheme } from '@material-ui/core';
import { connect } from 'react-redux';
import {
    CreditCard,
    TrendingDown,
    TrendingUp,
    ChevronLeft,
    ChevronRight } from '@material-ui/icons';

class SiteDrawer extends React.Component{
    render(){
        return(
            <Drawer
                anchor="left"
                open={this.props.open}
                variant="permanent">
                <IconButton
                    onClick={ ()=>{this.props.toggleDrawer();} }>
                     { this.props.open ? <ChevronLeft/> : <ChevronRight/> }
                </IconButton>
            </Drawer>
        )
    };
}

const mapStateToProps = state => {
    return {
        open: state.siteDrawer.open
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        toggleDrawer: () => dispatch({type: "TOGGLE_DRAWER"})
    }
}

export default compose(
    connect(
        mapStateToProps, 
        mapDispatchToProps,
    ),
    withTheme()
)(SiteDrawer);