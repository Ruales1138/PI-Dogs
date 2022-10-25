import {
    GET_ALL_TEMPS, 
    GET_ALL_DOGS, 
    GET_DOG_BY_ID, 
    GET_DOG_BY_NAME, 
    ALPHABETICAL_ORDER,
    WEIGHT_ORDER,
    CLEAN_DETAIL 
} from '../actions/index.js';

const initialState = {
    temps: [],
    dogs: [],
    dogDetail: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_TEMPS:
            return {
                ...state,
                temps: action.payload,
            };

        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
            };

        case GET_DOG_BY_ID:
            return {
                ...state,
                dogDetail: action.payload,
            };

        case GET_DOG_BY_NAME:
            return {
                ...state,
                dogs: action.payload
            };

        case ALPHABETICAL_ORDER:
            const alphaOrder = 
                action.payload === 'A-Z'
                ? state.dogs.sort((a, b) => {
                    if(a.name > b.name) {
                        return 1;
                    }
                    if(a.name < b.name) {
                        return -1;
                    }
                    return 0
                })
                : state.dogs.sort((a, b) => {
                    if(a.name > b.name) {
                        return -1;
                    }
                    if(a.name < b.name) {
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                dogs: alphaOrder,
            };

        case WEIGHT_ORDER:
            const weightOrder = 
                action.payload === 'MinToMax'
                ? state.dogs.sort((a, b) => {
                    if (parseInt(a.weight.substring(a.weight.length - 2)) > 
                        parseInt(b.weight.substring(b.weight.length - 2))) {
                        return 1;
                    }
                    if (parseInt(a.weight.substring(a.weight.length - 2)) < 
                        parseInt(b.weight.substring(b.weight.length - 2))) {
                        return -1;
                    }
                    return 0;
                    })
                : state.dogs.sort((a, b) => {
                    if (parseInt(a.weight.substring(a.weight.length - 2)) > 
                        parseInt(b.weight.substring(b.weight.length - 2))) {
                        return -1;
                    }
                    if (parseInt(a.weight.substring(a.weight.length - 2)) < 
                        parseInt(b.weight.substring(b.weight.length - 2))) {
                        return 1;
                    }
                    return 0;
                    })
            return {
                ...state,
                dogs: weightOrder
            };

        case CLEAN_DETAIL:
            return {
                ...state,
                dogDetail: {}
            };

        default: 
            return { ...state }
    };
};

export default rootReducer;