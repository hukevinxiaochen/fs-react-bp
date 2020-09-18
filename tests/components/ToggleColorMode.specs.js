const test = require('tape');
import { mount, configure } from 'enzyme';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { spy } from 'sinon';

// import Adapter
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// import component
// import ToggleColorMode from '../../client/ToggleColorMode';
// import store from '../../client/state/store';
// import reducer from '../../client/state/reducer';

/* Uncomment when ready to actually import stuff */
// test('ToggleColorMode component', (expect) => {
//   const mockStore = createStore(reducer);
//   const dispatchSpiedUpon = spy(mockStore.dispatch);
//   const wrapper = mount(
//     <Provider store={mockStore}>
//       <ToggleColorMode />
//     </Provider>
//   );
//   wrapper.simulate('click');
//   const clickDidDispatchCOLOR_TOGGLEDAction = dispatchSpiedUpon.withArgs(
//     COLOR_TOGGLED
//   ).calledOnce;
//   expect.deepEqual(
//     clickDidDispatchCOLOR_TOGGLEDAction,
//     true,
//     'clicks do dispatch actions on the store appropriately'
//   );
//   expect.end();
// });
