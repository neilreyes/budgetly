import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { classNames } from 'classnames';
import {
    Drawer,
    IconButton,
    Toolbar,
    withStyles,
    withTheme } from '@material-ui/core';
import {
    CreditCard,
    TrendingDown,
    TrendingUp,
    ChevronLeft,
    ChevronRight } from '@material-ui/icons';

const drawerWidth = 240;

const styles = theme => (
    {
        drawer: {
            width: drawerWidth,
        },
        drawerOpen: {
            width: drawerWidth,
        },
        drawerClose: {
            width: 66,
        },
        toolBar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 8px",
            ...theme.mixins.toolbar,
        }
    }
)

class SiteDrawer extends React.Component{
    
    render(){
        const { classes } = this.props;
        console.log(this.props);
        return(
            <Drawer
                anchor="left"
                className={ this.props.open ? classes.drawerOpen : classes.drawerClose }
                classes={{
                    paper: this.props.open ? classes.drawerOpen : classes.drawerClose
                }}
                open={this.props.open}
                variant="permanent">
                <div
                    className={classes.toolBar}>
                    <IconButton
                        onClick={ ()=>{this.props.toggleDrawer();} }>
                        { this.props.open ? <ChevronLeft/> : <ChevronRight/> }
                    </IconButton>
                </div>
            </Drawer>
        )
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        open: state.siteDrawer.open,
        classes: ownProps.classes,
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
    withTheme(),
    withStyles(styles),
)(SiteDrawer);