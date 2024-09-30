import { configureStore } from '@reduxjs/toolkit';
import pageStatesSlice from './slices/pageStatesSlice';

const store = configureStore({
    reducer: {
        pageStatesSlice: pageStatesSlice,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];


export default store;