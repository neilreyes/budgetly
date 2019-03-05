import React, { Component } from 'react';
import {
    Button,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { addNewTransaction } from '../../actions/transaction_action';

class AddExpenseForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            amount: "",
            category: "",
            date: new Date(),
            description: "",
            title: "",
            expense: true,
            source: "wallet",
            status: "paid"
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(event){
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    handleOnSubmit(event){
        this.props.addNewTransaction(this.state);
        event.preventDefault();
    }

    render(){
        console.log(this.props)
        const { amount, title, category, description } = this.state;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h2>Expense</h2>
                <FormControl fullWidth required>
                    <InputLabel> Amount </InputLabel>
                    <Input
                        name="amount"
                        value={amount}
                        id=""
                        startAdornment={
                            <InputAdornment position="start">P</InputAdornment>
                        }
                        onChange={this.handleOnChange}
                    />
                </FormControl> 
                <FormControl fullWidth required>
                    <InputLabel>Title</InputLabel> 
                    <Input
                        name="title"
                        value={title}
                        onChange={this.handleOnChange}
                    />
                </FormControl>

                <FormControl fullWidth required>
                    <InputLabel htmlFor="input-adornment">Category</InputLabel>
                    <Input
                        name={category}
                        value={category}
                        onChange={this.handleOnChange}
                    />
                </FormControl>
                
                <FormControl fullWidth>
                    <InputLabel htmlFor="input-adornment">Description</InputLabel>
                    <TextField
                        multiline
                        rows = "4"
                        name="description"
                        value={description}
                        margin="normal"
                        onChange={this.handleOnChange}
                    />
                </FormControl>                

                <Button onClick={this.handleOnSubmit}>Submit</Button>
            </form>
        )
    }
}

export default connect(null, {addNewTransaction})(AddExpenseForm);