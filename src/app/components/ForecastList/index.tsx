import * as React from 'react';

const uniqueId = require('lodash/uniqueId')

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
                            <li key={uniqueId()}>{f.conditions}</li>
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
