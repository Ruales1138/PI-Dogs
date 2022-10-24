import axios from 'axios';

export const GET_ALL_TEMPS = 'GET_ALL_TEMPS';
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_DOG_BY_ID = 'GET_DOG_BY_ID';
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const getAllTemps = () => async (dispatch) => {
    let json = await axios.get('http://localhost:3001/temperaments');
    return dispatch({ type: GET_ALL_TEMPS, payload: json.data })
};

export const getAllDogs = () => async (dispatch) => {
    let json = await axios.get('http://localhost:3001/dogs');
    return dispatch({ type: GET_ALL_DOGS, payload: json.data });
};

export const getDogById = (id) => async (dispatch) => {
    let json = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({ type: GET_DOG_BY_ID, payload: json.data });
};

export const getDogByName = (name) => async (dispatch) => {
    let json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({ type: GET_DOG_BY_NAME, payload: json.data });
};

export const createDog = (payload) => async (dispatch) => {
    let json = await axios.post('http://localhost:3001/dogs', payload);
    return json;
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
  };
