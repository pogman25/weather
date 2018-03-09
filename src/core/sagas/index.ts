import { fork, all } from 'redux-saga/effects';
import appSaga from 'src/app/containers/App/saga';

export default function*() {
    yield all([
        fork(appSaga)
    ]);
}
