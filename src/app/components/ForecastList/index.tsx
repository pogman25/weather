import * as React from 'react';
import ForecastItem from "./ForecastItem";

const uniqueId = require('lodash/uniqueId');

interface IForecastList {
    isFetch: boolean;
    list: any[];
}

export default class ForecastList extends React.Component<IForecastList, any> {
    render() {
        const { isFetch, list } = this.props;
        return (
            <div>
                {list.length > 0 ? (
                    <ul>
                        {list.map(f =>
                            <ForecastItem
                                key={uniqueId()}
                                date={f.date}
                                icon={f.icon}
                                icon_url={f.icon_url}
                                conditions={f.conditions}
                                high={f.high}
                                low={f.low}
                            />
                        )}
                    </ul>
                ) : (
                    <div>
                        {isFetch ? (
                            <p>...Loading</p>
                        ) : (
                            <p>This coty doesn't exist in base</p>
                        )}
                    </div>
                )}
            </div>
        );
    }
}
