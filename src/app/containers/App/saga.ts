import { takeEvery, call, put } from 'redux-saga/effects';
import * as duck from './duck';
import fetchData, {capitalize} from 'src/utils';

const get = require('lodash/get');

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

export function* getCity(action) {
    const { name, country } = action;
    const url = `${country}/${name.replace(/ /g, '_')}.json`;
    try {
        const { status, data } = yield call(callAPI, url);
        if (status === 200) {
            if (data.hasOwnProperty('forecast')) {
                const cityKey = `${name}/${country}`
                yield put(duck.getForecast({
                    [cityKey]:get(data, 'forecast.simpleforecast.forecastday', [])
                }))
                yield put(duck.receiveCity(`${capitalize(name)}/${country}`));
            }
        } else {
            yield put(duck.failRequest())
        }
    } catch (e) {
        yield put(duck.failRequest())
        console.log(e);
    }
}

export default function* rootSaga() {
    yield takeEvery(duck.GET_CITY, getCity);
}
