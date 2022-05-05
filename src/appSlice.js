import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        headline: '',
        rows: [],
        date: null
    },
    reducers: {
        changeHeadline(state, action) {
            state.headline = action.payload
        },
        addRows(state, action) {
            state.rows = [...state.rows, ...action.payload]
        },
        addDateToState(state, action) {
            state.date = action.payload
        }
    }
})

export const {changeHeadline, addRows, addDateToState} = appSlice.actions
export default appSlice.reducer