import { configureStore } from '@reduxjs/toolkit';
import registerSliceReducer from '../slices/registerSlice';
import authSliceReducer from '../slices/authSlice';


const store = configureStore({
    reducer: {
        modal: registerSliceReducer,
        auth: authSliceReducer,


    },

});

export default store;  