import {configureStore} from "@reduxjs/toolkit";
import counterslice from "./slices/counterslice.js";

export const store= configureStore({
    reducer: {
        events: (state = [], action) => {
            switch (action.type) {
                case 'ADD_EVENT':
                    return [...state, action.payload];
                case 'DELETE_EVENT':
                    return state.filter(event => event.id!== action.payload);
                default:
                    return state;
            }
        },
        counters: counterslice,
    }
})