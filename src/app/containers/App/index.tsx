import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getCity } from './duck';
import * as S from './selectors';
import SearchForm from '../../components/SearchForm';
import { IStore } from 'src/core/reducers/interfaces';
import 'src/commonStyles/styles.scss';
import { IAppMapState, IAppMapDispatch } from 'src/app/containers/App/interfaces';

const mapStateToProps = (store: IStore): IAppMapState => ({
    cities: S.getSavedCity(store)
});

const mapDispatchToProps = (dispatch: Dispatch<IStore>): IAppMapDispatch =>
    bindActionCreators(
        {
            getCity
        },
        dispatch
    );

type IApp = IAppMapState & IAppMapDispatch;

class App extends React.Component<IApp, any> {
    render() {
        const { cities, getCity } = this.props;
        return (
            <div>
                <SearchForm getCity={getCity} />
                <ul>
                    {cities.map(i => (
                        <li key={i}>
                            {i}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
