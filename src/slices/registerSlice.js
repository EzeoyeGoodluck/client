import { createSlice } from "@reduxjs/toolkit";


const registerSlice = createSlice ({
    name: "modal",
    initialState:{value:{isOpen: false}},
    reducers: {
        openModal: (state, action) =>{
            state.value.isOpen = !state.value.isOpen;
        },

        closeModal: (state , action) =>{
            state.value.isOpen = !state.value.isOpen;
        }
    }

})


export default registerSlice.reducer;

export const {openModal, closeModal} = registerSlice.actions;