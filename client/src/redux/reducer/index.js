import { GET_ALL_DOGS, GET_DOG_BY_ID, GET_DOG_BY_NAME } from '../actions/index.js';

const initialState = {
    dogs: [],
    dogsDetail: {}
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
                dogsDetail: action.payload,
            };

        case GET_DOG_BY_NAME:
            return {
                ...state,
                dogs: action.payload
            };

        default: 
            return { ...state }
    };
};

export default rootReducer;