import { configureStore } from '@reduxjs/toolkit';
import registerSliceReducer from '../slices/registerSlice';


const store = configureStore({
    reducer: {
        modal: registerSliceReducer,


    },

});

export default store;  