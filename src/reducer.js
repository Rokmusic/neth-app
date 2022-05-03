import {headline} from "./data";

const reducer = (state = headline, action) => {
    switch (action.type) {
        case 'CHANGE':
            return state = action.value
        default:
            return state;
    }
}

export default reducer;