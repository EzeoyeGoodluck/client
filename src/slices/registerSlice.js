import { createSlice } from "@reduxjs/toolkit";


const registerSlice = createSlice ({
    name: "modal",
    initialState:{value:{isOpen: false}},
    reducers: {
        openModal: (state, action) =>{
            // const isOpen = state;
            // state = action.payload;

            // show: (state,action) =>{
            //     return !state.hidden

            state.value.isOpen = !state.value.isOpen;
            // state.value.isOpen = !state.value.isOpen;
            //  return !state.isOpen;
            
        },

        closeModal: (state , action) =>{
            state.value.isOpen = !state.value.isOpen;
        }
    }

})


export default registerSlice.reducer;

export const {openModal, closeModal} = registerSlice.actions;