import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchForm from '../components/SearchForm';
import 'src/commonStyles/styles.scss';

storiesOf('App components', module)
    .add('Search Form', () => (
        <SearchForm
            getCity={action('getCity')}
        />
    ))