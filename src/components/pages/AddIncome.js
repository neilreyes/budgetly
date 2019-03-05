import React, { Component } from 'react';
import AddIncomeForm from '../../containers/transactions/AddIncomeForm';

class AddIncome extends Component{
    render(){
        console.log(this.props);

        return(
            <div>
                <AddIncomeForm />
            </div>
        );
    }
}

export default AddIncome;