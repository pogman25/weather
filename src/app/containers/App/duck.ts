import { combineReducers } from 'redux';

// Actions

const SHOW_ERROR = 'SHOW_ERROR';
export const GET_CITY = 'app/GET_CITY';
const RECEIVE_CITY_SUCCESS = 'app/RECEIVE_CITY_SUCCESS';

// Reducers

const app = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_CITY_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const reducer = combineReducers({
    app
});

export default reducer;

// Action Creators

export const showError = payload => ({
    type: SHOW_ERROR,
    payload
});

export const getCity = (name: string, country: string) => ({
    type: GET_CITY,
    name,
    country
});

export const receiveCity = payload => ({
    type: RECEIVE_CITY_SUCCESS,
    payload
});
