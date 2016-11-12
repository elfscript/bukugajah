import React              from 'react';
import { expect }         from 'chai';
import { mount, shallow } from 'enzyme';
import jsdom              from 'jsdom';

import { Notes } from '../src/routes/Notes';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('<Notes />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Notes />);
    expect(Notes.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
