import * as React from 'react';

const styles = require('./styles.scss');

interface IForecastItem {
    date: {
        day: number;
        monthname: string;
        year: number;
        [key: string]: number | string;
    };
    icon: string;
    icon_url: string;
    conditions: string;
    high: {
        celsius: string;
        fahrenheit: string;
    };
    low: {
        celsius: string;
        fahrenheit: string;
    };
}

export default class ForecastItem extends React.Component<IForecastItem, any> {
    render() {
        const {
            date: { day, monthname, year },
            icon,
            icon_url,
            conditions,
            high,
            low
        } = this.props;
        return (
            <li className={styles.forecastItem}>
                <p>{`${day} ${monthname} ${year}`}</p>
                <img src={icon_url} alt={icon} />
                <p>{conditions}</p>
                <p>{`${low.celsius} : ${high.celsius}`}</p>
            </li>
        );
    }
}
