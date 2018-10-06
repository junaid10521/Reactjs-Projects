import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {BurgerBuilder} from './BurgerBuilder';
import BuiltControls from '../../components/Burger/BuiltControls/BuiltControls';
configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<BurgerBuilder onInitIngredients = {() => {}}/>);
	});

	it('should render <BuiltControls /> when recieving ingredients', () => {
		wrapper.setProps({ings: {salad:0}});
		expect(wrapper.find(BuiltControls)).toHaveLength(1);
	});
});