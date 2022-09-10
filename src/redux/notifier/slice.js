import { createSlice } from "@reduxjs/toolkit";
import initialState from "redux/notifier/initial-state";

export const notifierSlice = createSlice({
    name:  'notifier',
    initialState, 
    reducers: {
        show: (state, action) => {
             state.isVisible = true;
             state.heading = action.payload.heading;
             state.text = action.payload.text;
        },
        hide: (state)  => {
            state.isVisible = false;
        }
    }
});

export const { show, hide } = notifierSlice.actions;
export default notifierSlice.reducer;