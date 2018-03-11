import { combineReducers } from 'redux';
import { IAppReducer } from 'src/app/containers/App/interfaces';

const uniq = require('lodash/uniq');

// Actions

const SHOW_ERROR = 'SHOW_ERROR';

export const GET_CITY = 'app/GET_CITY';
const RECEIVE_CITY_SUCCESS = 'app/RECEIVE_CITY_SUCCESS';
const RECEIVE_FAILURE = 'app/RECEIVE_FAILURE';

const GET_FORECAST_SUCCESS = 'app/GET_FORECAST_SUCCESS';

const CHOOSE_CITY = 'app/CHOOSE_CITY';
export const DEL_CITY = 'app/DEL_CITY';

// Reducers

const isFetch = (state = false, action) => {
    switch (action.type) {
        case GET_CITY:
            return true;
        case RECEIVE_CITY_SUCCESS:
        case RECEIVE_FAILURE:
        case GET_FORECAST_SUCCESS:
            return false;
        default:
            return state;
    }
};

const city = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_CITY_SUCCESS:
            return uniq([...state, action.payload]);
        case DEL_CITY:
            return state.filter(i => i !== action.payload);
        case RECEIVE_FAILURE:
        default:
            return state;
    }
};

const chosenCity = (state = '', action) => {
    switch (action.type) {
        case CHOOSE_CITY:
        case RECEIVE_CITY_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const forecasts = (state = {}, action) => {
    switch (action.type) {
        case GET_FORECAST_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

const reducer = combineReducers<IAppReducer>({
    isFetch,
    city,
    chosenCity,
    forecasts
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

export const failRequest = () => ({
    type: RECEIVE_FAILURE
});

export const getForecast = payload => ({
    type: GET_FORECAST_SUCCESS,
    payload
});

export const chooseCity = (payload: string) => ({
    type: CHOOSE_CITY,
    payload
});

export const delCity = (payload: string) => ({
    type: DEL_CITY,
    payload
});
