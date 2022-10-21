import { GET_ALL_DOGS, GET_DOG_BY_ID, GET_DOG_BY_NAME, CLEAN_DETAIL } from '../actions/index.js';

const initialState = {
    dogs: [],
    dogDetail: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
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