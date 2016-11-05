import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { Home } from '../src/routes/Home';

describe('<Home />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Home />);
    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
