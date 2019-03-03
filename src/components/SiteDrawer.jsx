import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    withStyles,
    withTheme, 
    ListItemText} from '@material-ui/core';
import {
    CreditCard,
    TrendingDown,
    TrendingUp,
    ChevronLeft,
    ChevronRight,
    List as ListIcon } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => (
    {
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
        },
        drawerCloseButton: {
            alignSelf: "flex-end",
            margin: 9,
        },
        drawerOpen: {
            width: drawerWidth,
        },
        drawerClose: {
            width: theme.spacing.unit * 7 + 1,
            overflowX: "hidden",
        },
        navList: {
            width : "100%",
        },
        toolBar: {
            display: "flex",
            alignItems: "inherit",
            justifyContent: "flex-end",
            padding: "0px",
            flexDirection: "column",
            ...theme.mixins.toolbar,
        }
    }
)

class SiteDrawer extends Component{

    render(){
        const { classes } = this.props;

        return(
            <Drawer
                className={ this.props.open ? classes.drawerOpen : classes.drawerClose }
                classes={{ paper: this.props.open ? classes.drawerOpen : classes.drawerClose }}
                open={this.props.open}
                variant="permanent">
                <div className={classes.toolBar}>
                    <IconButton
                        className={classes.drawerCloseButton}
                        onClick={ ()=>{this.props.toggleDrawer();} }>
                        { this.props.open ? <ChevronLeft/> : <ChevronRight/> }
                    </IconButton>
                    <Divider variant="fullWidth" light={false}/>
                    <List disablePadding={true} component="nav" className={classes.navList}>
                        <ListItem>
                            <ListItemIcon>
                                <NavLink to="/">
                                    <ListIcon />
                                </NavLink>
                                <ListItemText primary="Transactions" />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem>
                            <NavLink to="/add-income">
                                <ListItemIcon>
                                    <TrendingUp />
                                </ListItemIcon>
                            </NavLink>
                            <ListItemText primary="Add Income" />
                        </ListItem>
                        
                        <ListItem>
                            <ListItemIcon>
                                <TrendingDown />
                            </ListItemIcon>
                            <ListItemText primary="Add Expense" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CreditCard />
                            </ListItemIcon>
                            <ListItemText primary="Credit Expense" />
                        </ListItem>
                    </List>
                    <Divider variant="fullWidth" light={false}/>
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