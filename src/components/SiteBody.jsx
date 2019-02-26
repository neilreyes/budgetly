import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Transactions from './Transactions';
import {
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    withTheme,
    withStyles,
} from '@material-ui/core';

const styles = theme =>({
    root: {
        flexGrow: 1,
        margin: '30px auto',
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up("lg")]: {
            width: 1170
        }
    },
    amountMeta: {
        textAlign: 'right',
    },
    toolbar: {
        ...theme.mixins.toolbar,
    }
});

class SiteBody extends Component{
    
    render(){
        const { classes } = this.props;

        return (
            <main className={classes.root}>
                <div className={classes.toolbar}/>
                <Grid
                    justify="center"
                    container
                    spacing={8}
                >
                    <Grid
                        alignItems="center"
                        container
                        className={classes.container}
                        justify="center"
                    >
                        <Grid item xs={12}>
                            <Transactions />
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        isDrawerOpen: state.siteDrawer.open,
        classes: ownProps.classes
    }
}

export default compose(
    withTheme(),
    withStyles(styles, { withTheme: true }),
    connect(
        mapStateToProps
    )
)(SiteBody);