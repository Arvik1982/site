
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    scrollToUp: false,
};

const pageStatesSlice = createSlice({
    name: 'pageStatesSlice',
    initialState,
    reducers: {
        setScrollToUp: (state, action) => {
            state.scrollToUp=action.payload;
        },
       
    },
});

export const { setScrollToUp } = pageStatesSlice.actions;
export default pageStatesSlice.reducer;