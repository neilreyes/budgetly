import React from 'react';
import {
    Button,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
} from '@material-ui/core';

const AddIncomeForm = (props) => {
    return(
        <form >
            <FormControl fullWidth>
                <InputLabel htmlFor="input-adornment">Title</InputLabel>
                <Input
                    name="title"
                    id=""
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="input-adornment">Particulars</InputLabel>
                <TextField
                    name="particulars"
                    margin="normal"
                    multiline
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="input-adornment">Amount</InputLabel>
                <Input
                    name="amount"
                    id=""
                    startAdornment={<InputAdornment position="start">P</InputAdornment>}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="input-adornment">Category</InputLabel>
                <Input
                    id=""
                    name="category"
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="input-adornment">Date</InputLabel>
                <Input
                    id=""
                />
            </FormControl>
            
            <Button>Submit</Button>

        </form>
    );
}

export default AddIncomeForm;