
// const updateLocal = (transaction) => {
//     const transactions = window.localStorage.getItem('transactions') ? window.localStorage.getItem('transactions') : ;
// }

const createReducer = (state, action) => {
    let transactions;
   
    switch (action.type) {
        case "DELETE_TRANSACTION":
            // console.log(action.payload);
            transactions = state.filter((t) => t.id !== action.payload);
            // console.log(transactions);
            window.localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
            
            case "ADD_TRANSACTION":
            transactions = [action.payload, ...state];
            window.localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;

        default:
            return state;
    }
}
export default createReducer;