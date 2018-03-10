import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import { loadState, saveState } from './loadStore';

const thunk = require('redux-thunk').default;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
    collapsed: true
});

export const configureStore = () => {
    const persistedState = loadState();

    const store =
        process.env.NODE_ENV === 'development'
            ? createStore(
                  rootReducer,
                  persistedState,
                  compose(
                      applyMiddleware(thunk, sagaMiddleware, logger),
                      (window as any)['devToolsExtension']
                          ? (window as any)['devToolsExtension']()
                          : (f: Function) => f
                  )
              )
            : createStore(
                  rootReducer,
                  persistedState,
                  compose(applyMiddleware(sagaMiddleware))
              );

    store.subscribe(() => {
        saveState(store.getState());
    });

    return {
        ...store,
        runSaga: sagaMiddleware.run,
        injectedSagas: {},
        close: () => store.dispatch(END)
    };
};
