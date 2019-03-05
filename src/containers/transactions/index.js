import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    List,
    withTheme,
    withStyles } from '@material-ui/core';
import { Transaction } from '../../components/transactions/Transaction';

const styles = themes => (
    {
        amountMeta: {
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
            marginRight: 40,
        },
        paintRed: {
            color: "red"
        },
        paintGreen:{
            color: "green"
        }
    }
)

class Transactions extends Component{
    render(){
        const { classes, transactions } = this.props;
        return(
            <List>
                {transactions.map((value, index)=>{
                    return <Transaction value={value} key={index} classes={classes}/>
                })}
            </List>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        transactions: state.transactions.lists.entries,
        classes: ownProps.classes,
    }
}

export default compose(
    connect(mapStateToProps),
    withStyles(styles),
    withTheme(),
)(Transactions);