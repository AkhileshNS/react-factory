import React from 'react';
import App from './App';
import { render } from 'enzyme';

describe('<App />', () => {
  it('should render a div', () => {
    const wrapper = render(<App />);
    expect(wrapper.find('div').length > 0).toBe(true);
  });
});
