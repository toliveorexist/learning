import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton componenet', () => {
	const mockColor = {
		color: 'blue'
	}
	
expect(shallow(<CounterButton color={mockColor.color}/>)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
	const mockColor = {
		color: 'blue'
	}
	const wrapper = shallow(<CounterButton color={mockColor.color} />);

	wrapper.find('[id="counter"]').simulate('click');
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({count: 2 });
	expect(wrapper.props().color).toEqual('blue')
})