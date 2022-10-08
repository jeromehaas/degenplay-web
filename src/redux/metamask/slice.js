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
            state.chainId = action.payload.chainId;
        },
        disconnect: (state) => {
            state.isConnected = false;
            state.address = '';
            state.balance = 0;
            state.chainId = '';
        },
    }
});

export const { connect, disconnect } = coinCreationSlice.actions;
export default coinCreationSlice.reducer;