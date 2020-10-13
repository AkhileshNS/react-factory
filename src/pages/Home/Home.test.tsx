import React from 'react';
import { Home } from './Home';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('should render a div', () => {
    const wrapper = shallow(
      <Home counter={0} increment={() => {}} decrement={() => {}} />
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
