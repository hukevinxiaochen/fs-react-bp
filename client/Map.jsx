import React from 'react';
import { geoAlbers, geoPath } from 'd3-geo';
import chicagoRedliningMap from '../server/ILChicago1940';

const divStyle = {
  maxWidth: 500,
};

const svgStyle = {
  border: '2px solid',
  height: '50vh',
  width: '80vw',
  maxWidth: 500,
};

const Map = () => {
  const w = 500;
  const h = 500;
  const projection = geoAlbers()
    .center([0, 41.83])
    .rotate([87.65, 0])
    .translate([w / 2, h / 2])
    .scale(30000);
  const pathGenerator = geoPath().projection(projection);
  const paths = chicagoRedliningMap.features.map((d, i) => (
    <path key={`path${i}`} d={pathGenerator(d)} strokeWidth={0.5} />
  ));
  return (
    <div className="map" style={divStyle}>
      <svg viewBox="0 0 500 500" style={svgStyle}>
        {paths}
      </svg>
    </div>
  );
};

export default Map;
