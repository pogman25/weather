import * as React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import CityList from '../index';

describe('>>> Test SkillNavigation Component <<<', () => {
    test('+++ render component with status pending', () => {
        const mockChoose = jest.fn();
        const mockDelCity = jest.fn();
        const wrapper = shallow(
            <CityList
                cities={['Moscow/Russia']}
                chosenCity={''}
                chooseCity={mockChoose}
                delCity={mockDelCity}
            />
        );
        expect(wrapper.length).toEqual(1);
        wrapper.find('li').simulate('click');
        expect(mockChoose).toHaveBeenCalled();
    });
});
