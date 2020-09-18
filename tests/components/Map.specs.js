const test = require('tape'); // use tape JS
import React from 'react';
import { shallow, configure } from 'enzyme'; // enzyme to stub components
import Adapter from 'enzyme-adapter-react-16'; // import Adapter
configure({ adapter: new Adapter() }); // enzyme needs an adapter
import Map from '../../client/Map'; // component

test('D3 map', (expect) => {
  const shallowWrapper = shallow(<Map />);
  const hasPathElements = shallowWrapper.containsAnyMatchingElements([
    <path />,
  ]);
  expect.deepEqual(
    hasPathElements,
    true,
    'renders an svg with path elements inside'
  );
  expect.end();
});
