import { expect } from 'chai';
import React from 'react';

import { shallow, configure } from 'enzyme';
// import Adapter
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


// import component
import Map from '../../client/Map';


describe('D3 map tests', () => {
  it('should render a redlining map of Chicago with <path> elements in our svg', function () {
    const shallowWrapper = shallow(<Map />);
    const hasPathElements = shallowWrapper.containsAnyMatchingElements([
      <path />,
    ]);

    expect(hasPathElements).to.equal(true);
  });
});
