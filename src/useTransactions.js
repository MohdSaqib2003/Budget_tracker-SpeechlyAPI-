import { ExpenseTrackerContext } from './Context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/category';
import { useContext } from 'react';

const useTransactions = (title) => {
    // title = "Income";
    resetCategories(); 
    const { transactions } = useContext(ExpenseTrackerContext);
    // console.log("title : ",title);
    
    // const transactionPerType = transactions.filter((t) => {
    //     console.log("t.type : ",t.type);
    //     return t.type === title
    // });
    
    const transactionPerType = transactions.filter((t) => t.type === title);

    const total = transactionPerType.reduce((acc, cur) => acc+=cur.amount, 0);
    

    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    // console.log("transactions : ", transactions);
    // console.log("transactionPerType : ", transactionPerType);
    // console.log("total : ", total);

    transactionPerType.forEach(t => {
        const category = categories.find(c => c.type === t.category);
        if(category) 
            category.amount += t.amount;        
        });
    const filteredCategories = categories.filter((c) => c.amount > 0);
        
    const chartData = { 
                datasets : [{
                    data : filteredCategories.map((c) => c.amount),
                    backgroundColor : filteredCategories.map(c=> c.color)
                }],
                labels: filteredCategories.map(c => c.type)
        }

    return { total, chartData };
}
export default useTransactions;
