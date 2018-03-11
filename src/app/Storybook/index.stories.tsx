import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import SearchForm from '../components/SearchForm';
import CityList from '../components/CityList';
import ForecastList from '../components/ForecastList';
import {forecasts} from './mocks';
import 'src/commonStyles/styles.scss';

storiesOf('App components', module)
    .addDecorator(withKnobs)
    .add('Search Form', () => <SearchForm getCity={action('getCity')} />)
    .add('Cities List', () => (
        <CityList
            cities={['Moscow/Russia', 'Krasnodar/Russia', 'London/England']}
            chosenCity={'Moscow/Russia'}
            chooseCity={action('Choose city')}
            delCity={action('Delete City')}
        />
    ))
    .add('Forecast List', () => (
        <ForecastList
            isFetch={boolean('isFetch', false)}
            list={forecasts}
        />
    ));
