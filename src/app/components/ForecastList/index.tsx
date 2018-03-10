import * as React from 'react';

const uniqueId = require('lodash/uniqueId')

export default class ForecastList extends React.Component<any, any> {
    render() {
        const { isFetch, list, city } = this.props;
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
