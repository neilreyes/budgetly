import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Typography,
    withTheme,
    withStyles,
} from '@material-ui/core';
import {
    Edit
} from '@material-ui/icons';

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
                    return(
                        <div key={index}>
                            <ListItem button>
                                <ListItemText
                                    primary={value.title}
                                    secondary={`${value.category} | ${value.account}`}
                                />
                                <div className={classes.amountMeta}>
                                    <Typography className={(value.transactionType===1)?classes.paintGreen:classes.paintRed }> {`P ${value.amount}`} </Typography>
                                    <Typography> {value.status} </Typography>
                                </div>
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <Edit />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })}
            </List>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        transactions: state.transactions,
        classes: ownProps.classes,
    }
}

export default compose(
    connect(mapStateToProps),
    withStyles(styles),
    withTheme(),
)(Transactions);