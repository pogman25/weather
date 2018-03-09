import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getCity } from './duck';
import Select from 'react-select';
import { IStore } from 'src/core/reducers/interfaces';
import { countries } from './country';
import 'react-select/dist/react-select.css';

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
    state = {
        city: '',
        country: {
            value: 'Russia',
            label: 'Rus'
        }
    };

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        this.setState({
            city: value
        });
    };

    getCity = () => {
        const { city, country } = this.state;
        this.props.getCity(city, country.value);
    };

    handleSelect = country => {
        this.setState({
            country
        });
    };

    render() {
        const { country, city } = this.state;
        return (
            <div>
                <input type="text" name="name" value={city} onChange={this.handleChange} />
                <Select
                    name="country"
                    value={country.value}
                    options={countries}
                    onChange={this.handleSelect}
                    clearable={false}
                    searchable={false}
                />
                <button onClick={this.getCity}>города</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
