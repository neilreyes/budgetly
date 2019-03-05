/*
    trasactionType: 1

    1 = Add Income
    2 = Add Expense
    3 = Credit Card Expense
*/
const initialState = [
    {
        title: "Work",
        category: "Salary",
        amount: 60000,
        transactionType: 1,
        account: "Wallet",
        status: "Receive",
        date: "Feb 1, 2019"
    },{
        title: "Grocery",
        category: "Grocery",
        amount: 490,
        account: "Metrobank Credit Card",
        transactionType: 3,
        status: "Paid",
        date: "Feb 1, 2019"
    },{
        title: "Dental Cleaning Service",
        category: "Personal",
        amount: 600,
        account: "Wallet",
        transactionType: 2,
        status: "Paid",
        date: "Feb 2, 2019"
    },{
        title: "Takoyakiks",
        category: "Meal",
        amount: 76,
        account: "Wallet",
        transactionType: 2,
        status: "Paid",
        date: "Feb 3, 2019"
    },{
        title: "Salted Egg",
        category: "Grocery",
        amount: 30,
        account: "Wallet",
        transactionType: 2,
        status: "Paid",
        date: "Feb 3, 2019"
    },{
        title: "Salmon Fillet (500g)",
        category: "Grocery",
        amount: 350,
        account: "Wallet",
        transactionType: 2,
        status: "Paid",
        date: "Feb 3, 2019"
    },{
        title: "Daing na bangus",
        category: "Grocery",
        amount: 65,
        account: "Wallet",
        transactionType: 2,
        status: "Paid",
        date: "Feb 3, 2019"
    },{
        title: "Vegetables",
        category: "Grocery",
        amount: 155,
        account: "Wallet",
        transactionType: 2,
        status: "Paid",
        date: "Feb 3, 2019"
    },{
        title: "Lansones",
        category: "Grocery",
        amount: 50,
        account: "Wallet",
        transactionType: 2,
        status: "Paid",
        date: "Feb 3, 2019"
    },{
        title: "Apple",
        category: "Grocery",
        amount: 25,
        account: "Wallet",
        transactionType: 2,
        status: "Paid",
        date: "Feb 3, 2019"
    },{
        title: "Banana",
        category: "Grocery",
        amount: 40,
        account: "Wallet",
        transactionType: 2,
        status: "Paid",
        date: "Feb 3, 2019"
    },
];

export default function(state=initialState){
    return state;
}