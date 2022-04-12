import React,{ useReducer, createContext } from 'react';

import createReducer from './contextReducer';


// const initialState = [];

const initialState = window.localStorage.getItem('transactions') ? JSON.parse(window.localStorage.getItem('transactions')) : [];


export const ExpenseTrackerContext = createContext(initialState);


export const Provider = ({ children }) =>{
    const [transactions, dispatch] = useReducer(createReducer, initialState ); 
    

    const deleteTransaction = (id) =>{
        dispatch({type:"DELETE_TRANSACTION", payload: id})
    }
    
    const addTransaction = (transaction) =>{
        dispatch({type:"ADD_TRANSACTION", payload: transaction});
    }


    // let total_income = 0, total_expense = 0;
    // transactions.forEach(t => {
    //     if(t.type === 'Income'){
    //         total_income+=t.amount;
    //     }else{
    //         total_expense+=t.amount;
    //     }
    //     console.log('INNNN : ', total_income);
    // });
    // const balance = total_income - total_expense;

//  Same as above function
    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount );
    },0);

    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
            { children }
        </ExpenseTrackerContext.Provider>
    )
}