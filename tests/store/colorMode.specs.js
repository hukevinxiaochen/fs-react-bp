import { expect } from 'chai';
// import store from '../../client/state/store';
// import reducer from '../../client/state/reducer';
import { createStore } from 'redux';

describe('Store', () => {
  it('is initialized with a colorMode slice', () => {
    expect(store.getState().colorMode).to.be.a('string');
  });

  it('is initialized with values of either light or dark', () => {
    const isEitherLightOrDark =
      store.getState().colorMode === 'light' ||
      store.getState().colorMode === 'dark';
    expect(isEitherLightOrDark).to.be.true;
  });
});

describe('Reducer', () => {
  it('toggles colorMode between light and dark with COLOR_TOGGLED action', () => {
    const prevState = store.getState().colorMode;
    const nextState = prevState === 'light' ? 'dark' : 'light';
    const action = {type: "COLOR_TOGGLED"}
    store.dispatch(action);
    expect(store.getState().colorMode).to.equal(nextState);
  });
});
