import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Transactions from './transactions/';
import AddIncome from '../components/pages/AddIncome';
import AddExpense from '../components/pages/AddExpense';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
    Grid,
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
                            <Switch>
                                <Route path="/" component={Transactions} exact/>
                                <Route path="/add-income" component={AddIncome} />
                                <Route path="/add-expense" component={AddExpense} />
                            </Switch>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        siteDrawerIsActive: state.ui.siteDrawer.isActive,
        classes: ownProps.classes
    }
}

export default compose(
    withRouter,
    withTheme(),
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(SiteBody);


