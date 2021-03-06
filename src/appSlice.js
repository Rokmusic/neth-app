import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        headline: '',
        rows: [],
        date: null,
        id: 0,
        counter: 0,
        status: {},
        zoneType: {}
    },
    reducers: {
        changeCounter(state, action) {
            console.log(action.payload)
            state.counter = action.payload
        },
        upCounter(state, action) {
            console.log(action.payload)
            state.counter = state.counter + action.payload

        },
        changeHeadline(state, action) {
            console.log(action.payload)
            state.headline = action.payload
        },
        addRows(state, action) {
            console.log(action.payload)
            state.rows = [...state.rows, ...action.payload]
        },
        addDateToState(state, action) {
            console.log(action.payload)
            state.date = action.payload
        },
        addRowUp(state, action) {
            console.log(action.payload)
            const index = action.payload[1]
            const startArr = state.rows.slice(0, index)
            const endArr = state.rows.slice(index)
            state.rows = [...startArr, action.payload[0], ...endArr]
        },
        addRowLow(state, action) {
            console.log(action.payload)
            const index = action.payload[1]
            const startArr = state.rows.slice(0, index + 1)
            const endArr = state.rows.slice(index + 1)
            state.rows = [...startArr, action.payload[0], ...endArr]
        },
        deleteRow(state, action) {
            console.log(action.payload)
            const index = action.payload
            state.rows.splice(index, 1)
        },
        editRow(state, action) {
            console.log(action.payload)
            const index = action.payload
            state.rows[index] = Object.fromEntries(
                Object.entries(state.rows[index]).map(([key, value]) => [key, value = 'userSelect'])
            )
        },
        addId(state, action) {
            console.log(action.payload)
            state.id = action.payload
        },
        changeStat(state, action) {
            console.log(action.payload)
            state.status = action.payload
        },
        changeZone(state, action) {
            console.log(action.payload)
            state.zoneType = action.payload
        },
    }
})

export const {
    upCounter,
    changeCounter,
    changeHeadline,
    addRows,
    addDateToState,
    addRowUp,
    addRowLow,
    deleteRow,
    editRow,
    addId,
    changeStat,
    changeZone
} = appSlice.actions

export default appSlice.reducer