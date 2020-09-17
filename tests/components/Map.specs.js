import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import React from 'react';

// import Adapter
import Adapter from 'enzyme-adapter-react-16';

// import component
import Map from '../../client/Map';

configure({ adapter: new Adapter() });

describe('D3 map tests', () => {
  it('should render a redlining map of Chicago with <path> elements in our svg', function () {
    const shallowWrapper = shallow(<Map />);
    const hasPathElements = shallowWrapper.containsAnyMatchingElements([
      <path />,
    ]);

    expect(hasPathElements).to.equal(true);
  });
});
