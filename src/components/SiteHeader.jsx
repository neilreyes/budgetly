import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    withStyles,
    Button
} from '@material-ui/core';

const styles = {
    root: {
        justifyContent: 'space-between',
    }
}
const SiteHeader = (props) => {
    const {classes} = props;

    return (
        <AppBar position="static" >
            <Toolbar className={classes.root}>
                <Typography variant="h6" color="inherit">
                    Budgetly
                </Typography>
                <Button color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(SiteHeader);
