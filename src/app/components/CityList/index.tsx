import * as React from 'react';
import * as cx from 'classnames';

const styles = require('./styles.scss');

interface ICityList {
    cities: string[];
    chosenCity: string;
    chooseCity: (city: string) => void;
    delCity: (city: string) => void;
}

export default class CityList extends React.Component<ICityList, any> {
    handleDelCity = (e, city: string) => {
        e.stopPropagation();
        this.props.delCity(city);
    };

    render() {
        const { cities, chosenCity, chooseCity } = this.props;
        return (
            <ul className={styles.citiesList}>
                {cities.map(i => {
                    const city = i.split('/');
                    return (
                        <li
                            key={i}
                            className={cx(
                                styles.cityItem,
                                chosenCity === i && styles.active
                            )}
                            onClick={() => chooseCity(i)}
                        >
                            <p>{city[0]}</p>
                            <p>{city[1]}</p>
                            <p
                                className={styles.close}
                                onClick={e => this.handleDelCity(e, i)}
                            >
                                X
                            </p>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
