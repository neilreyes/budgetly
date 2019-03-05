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
import { Link } from 'react-router-dom';

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
                className={ this.props.siteDrawerIsActive ? classes.drawerOpen : classes.drawerClose }
                classes={{ paper: this.props.siteDrawerIsActive ? classes.drawerOpen : classes.drawerClose }}
                open={this.props.siteDrawerIsActive}
                variant="permanent">
                <div className={classes.toolBar}>
                    <IconButton
                        className={classes.drawerCloseButton}
                        onClick={() => { this.props.toggleSiteDrawer();} }>
                        { this.props.siteDrawerIsActive ? <ChevronLeft/> : <ChevronRight/> }
                    </IconButton>
                    <Divider variant="fullWidth" light={false}/>
                    <List disablePadding={true} component="nav" className={classes.navList}>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon>
                                <ListIcon />
                                <ListItemText primary="Transactions" />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button component={Link} to="/add-income">
                            <ListItemIcon>
                                <TrendingUp />
                            </ListItemIcon>
                            <ListItemText primary="Add Income" />
                        </ListItem>
                        
                        <ListItem button component={Link} to="/add-expense">
                            <ListItemIcon>
                                <TrendingDown />
                            </ListItemIcon>
                            <ListItemText primary="Add Expense" />
                        </ListItem>
                        <ListItem button to="/credit-expense">
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
        siteDrawerIsActive: state.ui.siteDrawer.isActive,
        classes: ownProps.classes,
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        toggleSiteDrawer: () => dispatch({ type: "UI_TOGGLE_DRAWER"}),
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