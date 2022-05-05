import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        headline: '',
        rows: []
    },
    reducers: {
        changeHeadline(state, action) {
            state.headline = action.payload
        },
        addRows(state, action) {
            state.rows = [...state.rows, ...action.payload]
        }
    }
})

export const {changeHeadline, addRows} = appSlice.actions
export default appSlice.reducer