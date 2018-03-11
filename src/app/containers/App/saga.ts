import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import * as duck from './duck';
import fetchData, { capitalize } from 'src/utils';
import { getChosenCity, getSavedCity } from 'src/app/containers/App/selectors';

const get = require('lodash/get');

// saga запросов к серверу
export function* callAPI(url, params?) {
    try {
        return yield call(fetchData, url, params);
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            yield put(duck.showError('Похоже сервер упал, попробуйте позже.'));
        }
        if (error.code === 'ECONNREFUSED') {
            yield put(duck.showError('Нет связи с сервером.'));
        }
        return yield error.response;
    }
}

// получение искомого города
//TODO: обратока ошибок, неправильного поиска города
export function* getCity(action) {
    const { name, country } = action;
    const url = `${country}/${name.replace(/ /g, '_')}.json`;
    try {
        const { status, data } = yield call(callAPI, url);
        if (status === 200) {
            if (data.hasOwnProperty('forecast')) {
                const cityKey = `${name}/${country}`;
                yield put(
                    duck.getForecast({
                        [cityKey]: get(data, 'forecast.simpleforecast.forecastday', [])
                    })
                );
                yield put(duck.receiveCity(`${capitalize(name)}/${country}`));
            }
        } else {
            yield put(duck.failRequest());
        }
    } catch (e) {
        yield put(duck.failRequest());
        console.log(e);
    }
}

export function* delCity(action) {
    const { payload } = action;
    const chosenCity = yield select(getChosenCity);
    const cities = yield select(getSavedCity);
    if (payload === chosenCity) {
        yield put(duck.chooseCity(cities[0] || ''));
    }
}

export function* requestForecast(action) {
    const { payload } = action;
    const city = payload.split('/');
    yield call(getCity, { name: city[0], country: city[1] });
}

export default function* rootSaga() {
    yield takeEvery(duck.GET_CITY, getCity);
    yield takeEvery(duck.DEL_CITY, delCity);
    yield takeLatest(duck.CHOOSE_CITY, requestForecast);
}
