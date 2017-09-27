import { createStore, combineReducers } from 'redux';

const demo = {
    expenses: [{
        id: 'generate random id later',
        description: 'Rent',
        note: 'I do not like payments',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
