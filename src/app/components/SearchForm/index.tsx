import * as React from 'react';
import * as cx from 'classnames';
import Select from 'react-select';
import { countries } from '../../containers/App/country';
import 'react-select/dist/react-select.css';

const styles = require('./styles.scss');

interface ISearchForm {
    getCity: (city: string, country: string) => void;
}

interface ISearchFormState {
    city: string;
    country: {
        value: string;
        label: string;
    };
}

export default class SearchForm extends React.Component<ISearchForm, ISearchFormState> {
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

    handleSelect = country => {
        this.setState({
            country
        });
    };

    getCity = e => {
        e.preventDefault();
        const { city, country } = this.state;
        this.props.getCity(city, country.value);
    };

    render() {
        const { city, country } = this.state;
        return (
            <form className={styles.searchForm} onSubmit={this.getCity}>
                <input
                    className={cx('input')}
                    type="text"
                    name="name"
                    value={city}
                    onChange={this.handleChange}
                    autoComplete="off"
                />
                <Select
                    className={styles.selectCountry}
                    name="country"
                    value={country.value}
                    options={countries}
                    onChange={this.handleSelect}
                    clearable={false}
                    searchable={false}
                />
                <button type="submit" className={styles.searchBtn} onClick={this.getCity}>
                    Search
                </button>
            </form>
        );
    }
}
