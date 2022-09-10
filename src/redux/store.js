import { configureStore } from '@reduxjs/toolkit';
import metamaskSlice from 'redux/metamask/slice';
import notifierSlice from './notifier/slice';

export const store = configureStore({
    reducer: {
        metamask: metamaskSlice,
        notifier: notifierSlice
    }
});