import { createSlice } from "@reduxjs/toolkit";
import initialState from "redux/metamask/initial-state";

export const coinCreationSlice = createSlice({
    name: 'metamask',
    initialState, 
    reducers: {
        connect: (state, action) => {
            state.isConnected = true;
            state.address = action.payload.address;
            state.balance = action.payload.balance;
        },
        disconnect: (state) => {
            state.isConnected = false;
            state.address = '';
            state.balance = 0;
        },
    }
});

export const { connect, disconnect } = coinCreationSlice.actions;
export default coinCreationSlice.reducer;