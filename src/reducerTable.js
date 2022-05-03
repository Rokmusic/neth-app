import {rows} from "./data";


const reducerTable = (state = rows, action) => {
    switch (action.type) {
        case 'ROWS':
            return state = [...state, ...action.value]
        case 'NEWROWS':
            return state = [...state, ...action.value]
        default:
            return state;
    }
}

export default reducerTable;