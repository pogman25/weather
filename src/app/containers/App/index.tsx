import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getCity } from './duck';
import SearchForm from '../../components/SearchForm';
import { IStore } from 'src/core/reducers/interfaces';
import 'src/commonStyles/styles.scss';

const mapStateToProps = (store: IStore) => ({
    app: store.app
});

const mapDispatchToProps = (dispatch: Dispatch<IStore>) =>
    bindActionCreators(
        {
            getCity
        },
        dispatch
    );

class App extends React.Component<any, any> {
    render() {
        const { getCity } = this.props;
        return <SearchForm getCity={getCity} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
