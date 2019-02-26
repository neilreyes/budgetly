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
    ChevronRight } from '@material-ui/icons';

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
        const listItems = ["Add Income","Add Expense","Credit Expense"];
        const getDrawerIcon = text => {
            switch (text) {
                case "Add Income":
                    return <TrendingUp />
                case "Add Expense":
                    return <TrendingDown />
                case "Credit Expense":
                    return <CreditCard />
                default:
                    break;
            }  
        }
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
                        {listItems.map((text,index)=>(
                            <ListItem
                                button
                                key={index}>
                                <ListItemIcon>
                                    {getDrawerIcon(text)}
                                </ListItemIcon>
                                <ListItemText primary={text} />     
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
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