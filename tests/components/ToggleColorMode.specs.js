import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { spy } from 'sinon';

// // import Adapter
// import Adapter from 'enzyme-adapter-react-16';
//
// // import component
// import ToggleColorMode from '../../client/ToggleColorMode';
// import store from '../../client/store';
// import reducer from '../../client/reducer';
// configure({ adapter: new Adapter() });

describe('ToggleColorMode component', () => {
  it('dispatches a COLOR_TOGGLED action when clicked', () => {
    const mockStore = createStore(reducer);
    const dispatchSpiedUpon = spy(mockStore.dispatch)
    const wrapper = mount(
      <Provider store={mockStore}>
        <ToggleColorMode />
      </Provider>
    );
    wrapper.simulate('click');
    const clickDidDispatchCOLOR_TOGGLEDAction = dispatchSpiedUpon.withArgs(COLOR_TOGGLED).calledOnce;
    expect(clickDidDispatchCOLOR_TOGGLEDAction).to.be.true;
  });
});
