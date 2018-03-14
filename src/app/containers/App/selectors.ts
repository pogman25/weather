import { createSelector } from 'reselect';
import { IStore } from 'src/core/reducers/interfaces';
import { IAppReducer } from 'src/app/containers/App/interfaces';

const appReducer = (store: IStore): IAppReducer => store.app;

export const getIsFetch = (store: IStore): boolean => store.app.isFetch;

export const getSavedCity = createSelector(appReducer, i => i.city);

export const getChosenCity = createSelector(appReducer, i => i.chosenCity);

export const getForecast = createSelector(
    appReducer,
    getChosenCity,
    (reducer, city) => reducer.forecasts[city] || []
);
