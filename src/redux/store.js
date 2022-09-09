import { configureStore } from '@reduxjs/toolkit';
import metamaskSlice from 'redux/metamask/slice';

export const store = configureStore({
    reducer: {
        metamask: metamaskSlice
    }
});