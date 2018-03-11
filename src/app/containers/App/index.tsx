import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getCity, chooseCity, delCity } from './duck';
import * as S from './selectors';
import SearchForm from '../../components/SearchForm';
import CityList from '../../components/CityList';
import ForecastList from '../../components/ForecastList';
import { IStore } from 'src/core/reducers/interfaces';
import 'src/commonStyles/styles.scss';
import { IAppMapState, IAppMapDispatch } from 'src/app/containers/App/interfaces';

const styles = require('./styles.scss');

const mapStateToProps = (store: IStore): IAppMapState => ({
    isFetch: S.getIsFetch(store),
    cities: S.getSavedCity(store),
    chosenCity: S.getChosenCity(store),
    forecast: S.getForecast(store)
});

const mapDispatchToProps = (dispatch: Dispatch<IStore>): IAppMapDispatch =>
    bindActionCreators(
        {
            getCity,
            chooseCity,
            delCity
        },
        dispatch
    );

type IApp = IAppMapState & IAppMapDispatch;

class App extends React.Component<IApp, any> {
    render() {
        const {
            isFetch,
            cities,
            chosenCity,
            forecast,
            getCity,
            chooseCity,
            delCity
        } = this.props;

        return (
            <div className={styles.mainContent}>
                <SearchForm getCity={getCity} />
                {cities.length > 0 ? (
                    <CityList
                        cities={cities}
                        chosenCity={chosenCity}
                        chooseCity={chooseCity}
                        delCity={delCity}
                    />
                ) : (
                    <div>
                        <p>Input City and Choose Country</p>
                    </div>
                )}
                {forecast.length > 0 && (
                    <ForecastList isFetch={isFetch} list={forecast} />
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
