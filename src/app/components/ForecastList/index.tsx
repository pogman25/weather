import * as React from 'react';
import ForecastItem from './ForecastItem';

const uniqueId = require('lodash/uniqueId');
const styles = require('./styles.scss');

interface IForecastList {
    isFetch: boolean;
    list: any[]; //TODO: add interface
}

export default class ForecastList extends React.Component<IForecastList, any> {
    render() {
        const { isFetch, list } = this.props;
        return (
            <div className={styles.forecastList}>
                {list.length > 0 ? (
                    <ul className={styles.forecastListUl}>
                        {list.map(f => (
                            <ForecastItem
                                key={uniqueId()}
                                date={f.date}
                                icon={f.icon}
                                icon_url={f.icon_url}
                                conditions={f.conditions}
                                high={f.high}
                                low={f.low}
                            />
                        ))}
                    </ul>
                ) : (
                    <div>
                        {isFetch ? (
                            <p>...Loading</p>
                        ) : (
                            <p>This city doesn't exist in base</p>
                        )}
                    </div>
                )}
            </div>
        );
    }
}
