import {combineReducers} from 'redux';
import app from 'src/app/containers/App/duck';
import { IStore } from './interfaces';

const reducer = combineReducers<IStore>({
    app
});

export default reducer;