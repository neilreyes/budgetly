import React from 'react';
import {
    Divider,
    IconButton,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Typography,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';

export const Transaction = props => {
    return(
        <div>
            <ListItem button>
                <ListItemText
                    primary={props.value.title}
                    secondary={`${props.value.category} | ${props.value.account}`}
                />
                <div className={props.classes.amountMeta}>
                    <Typography className={(props.value.transactionType === 1) ? props.classes.paintGreen : props.classes.paintRed}> {`P ${props.value.amount}`} </Typography>
                    <Typography> {props.value.status} </Typography>
                </div>
                <ListItemSecondaryAction>
                    <IconButton>
                        <Edit />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </div>
    );
}