import reducer, * as duck from '../duck';
import { IAppReducer } from '../interfaces';

describe('>>> Test skills reducers <<<', () => {
    const init: IAppReducer = {
        isFetch: false,
        city: [],
        chosenCity: '',
        forecasts: []
    };

    test('++ test combineReducer', () => {
        expect(reducer(init, duck.getCity('Moscow', 'Russia'))).toEqual({
            ...init,
            isFetch: true
        });
        expect(reducer(init, duck.receiveCity('Moscow/Russia'))).toEqual({
            ...init,
            city: ['Moscow/Russia'],
            chosenCity: 'Moscow/Russia'
        });
    });
});
