import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon'; //spies and stubs

// import Adapter
import Adapter from 'enzyme-adapter-react-16';
// import configure from Enzyme
import { configure, shallow } from 'enzyme';
// import the component to be tested
import Map from '../../client/Map';

/* Enzyme expects an adapter to be configured
To configure an adapter, you should call `Enzyme.configure({  adapter: new Adapter() })`
before using any of Enzyme's top level APIs, where `Adapter` is the adapter corresponding
to the library currently being tested. For example:
import Adapter from 'enzyme-adapter-react-16';
To find out more about this, see http://airbnb.io/enzyme/docs/installation/index.html
*/
configure({ adapter: new Adapter() });

describe('D3 map tests', () => {
  it('should render a redlining map of Chicago', function () {
    const shallowWrapper = shallow(<Map />);
    const hasPathElements = shallowWrapper.containsAnyMatchingElements([
      <path />,
    ]);

    expect(hasPathElements).to.equal(true);
  });
});
