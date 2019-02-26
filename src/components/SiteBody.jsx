import React, { Component } from 'react';
import {
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
        padding: '0 20px',
        [theme.breakpoints.up("lg")]: {
            width: 1170
        }
    },
    amountMeta: {
        textAlign: 'right',
    }
});

const SiteBody = (props) => {
    const { classes } = props;
    return(
        <div className={classes.root}>
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
                        <List>
                            <ListItem
                                button
                            >
                                <ListItemText
                                    primary="Title"
                                    secondary="Category | Account (e.g Wallet,Paypal)"
                                />
                                <ListItemText
                                    className={classes.amountMeta}
                                    primary="Amount"
                                    secondary="Paid or Received"
                                />
                         
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(SiteBody);