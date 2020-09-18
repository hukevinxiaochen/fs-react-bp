const test = require('tape');
// import createStore for testing stateful components
import { createStore } from 'redux';
// import store from '../../client/state/store';
// import reducer from '../../client/state/reducer';

/* Uncomment when ready to proceed */
// test('is initialized with a colorMode slice', (expect) => {
//   expect(store.getState().colorMode).to.be.a('string');
// });
// 
// test('is initialized with values of either light or dark', (expect) => {
//   const isEitherLightOrDark =
//     store.getState().colorMode === 'light' ||
//     store.getState().colorMode === 'dark';
//   expect(isEitherLightOrDark).to.be.true;
// });
// 
// test('toggles colorMode between light and dark with COLOR_TOGGLED action', (expect) => {
//   const prevState = store.getState().colorMode;
//   const nextState = prevState === 'light' ? 'dark' : 'light';
//   const action = { type: 'COLOR_TOGGLED' };
//   store.dispatch(action);
//   expect(store.getState().colorMode).to.equal(nextState);
// });
