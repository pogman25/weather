import { createSelector } from 'reselect';
import { IStore } from 'src/core/reducers/interfaces';

const appReducer = (store: IStore) => store.app;

export const getSavedCity = createSelector(appReducer, i => i.city);

export const getChosenCity = createSelector(appReducer, i => i.chosenCity);
