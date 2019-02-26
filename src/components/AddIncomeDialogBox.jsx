import React, { Component } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
    FormControl,
    Input,
    InputLabel,
    InputAdornment,
    TextField,
    withStyles,
    withTheme,
} from '@material-ui/core';

const styles = themes => (
    {

    }
)

class AddDialogBox extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            amount: 0,
            title: '',
            particulars: '',
            category: '',
            date: new Date()
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearInputValue = this.clearInputValue.bind(this);
    }

    handleSubmit = (e) => {
        console.log(this.state);
        this.clearInputValue();
        this.props.handleClose();
        
        e.preventDefault();
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        })
    }

    clearInputValue(){
        this.setState({
            amount: 0,
            title: '',
            particulars: '',
            category: '',
            date: new Date()
        })
    }
    
    render(){
        const { theme } = this.props;
        const primaryColor = theme.palette.primary.light;

        return(
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                    <DialogTitle color={primaryColor}>
                        Add Income
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <form
                                onSubmit={this.handleSubmit}
                            >
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="input-adornment">Title</InputLabel>
                                    <Input
                                        name="title"
                                        id=""
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel htmlFor="input-adornment">Particulars</InputLabel>
                                    <TextField
                                        name="particulars"
                                        rowsMax="4"
                                        value={this.state.particulars}
                                        margin="normal"
                                        multiline
                                        onChange={this.handleChange}
                                    />
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel htmlFor="input-adornment">Amount</InputLabel>
                                    <Input
                                        name="amount"
                                        id=""
                                        value={this.state.amount}
                                        onChange={this.handleChange}
                                        startAdornment={<InputAdornment position="start">P</InputAdornment>}
                                    />
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel htmlFor="input-adornment">Category</InputLabel>
                                    <Input
                                        id=""
                                        name="category"
                                        value={this.state.category}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel htmlFor="input-adornment">Date</InputLabel>
                                    <Input
                                        id=""
                                        value={this.state.category}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>
                                
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            color="inherit"
                            onClick={this.props.handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            onClick={this.handleSubmit}
                        >
                            Submit
                        </Button>
                    </DialogActions>

                </Dialog>
            </div>
        )
    }
}

export default withTheme()(AddDialogBox);
