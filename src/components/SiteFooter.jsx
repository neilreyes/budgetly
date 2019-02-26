import
    React,
    { Component }
from 'react';
import {
    Fab,
    withStyles,
    Tooltip
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { TrendingDown, TrendingUp } from '@material-ui/icons';
import AddIncomeDialogBox from './AddIncomeDialogBox';

const styles = themes => (
    {
        addIncomButton: {
            backgroundColor: green[700],
            position: 'absolute',
            margin: '0 auto',
            zIndex: 2,
            right: 120,
            bottom: 50
        },
        addExpenseButton: {
            backgroundColor: 'red',
            position: 'absolute',
            margin: '0 auto',
            zIndex: 22,
            right: 50,
            bottom: 50,
        }
    }
)

class SiteFooter extends Component {
    state = {
        open: false,
    }

    handleOpen = () =>{
        this.setState({
            open: true,
        })
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    }

    render(){
        const { classes } = this.props;
        
        return (
            <footer>
                <AddIncomeDialogBox
                    open={this.state.open}
                    handleClose={this.handleClose.bind(this)}   
                />
                <Tooltip
                    title="Add Income"
                    disableFocusListener
                    disableTouchListener
                >
                    <Fab
                        className={classes.addIncomButton}
                        onClick={this.handleOpen}
                    >
                        <TrendingUp color="inherit"/>
                    </Fab>
                </Tooltip>

                <Tooltip
                    title="Add Expense"
                    disableFocusListener
                    disableTouchListener
                >
                    <Fab
                        className={classes.addExpenseButton}
                        onClick={this.handleOpen}
                    >
                        <TrendingDown color="inherit"/>
                    </Fab>
                </Tooltip>

            </footer>
        )
    }
}

export default withStyles(styles)(SiteFooter);
