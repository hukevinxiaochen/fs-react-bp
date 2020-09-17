// import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import React from 'react';
// 
// // import Adapter
// import Adapter from 'enzyme-adapter-react-16';
// 
// // import component
// import ToggleColorMode from '../../client/ToggleColorMode';

// configure({ adapter: new Adapter() });


describe('ToggleColorMode component', () => {
  it('dispatches a COLOR_TOGGLED action when clicked', () => {
    const wrapper = shallow(<ToggleColorMode />);
  });
});
