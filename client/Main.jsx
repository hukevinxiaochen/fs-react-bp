import React from 'react';
import { useSelector } from 'react-redux';
import Svg from './Svg';
import ToggleTheme from './ToggleTheme';

const Main = () => {
  const selectedTheme = useSelector((state) => state.theme);
  return (
    <>
      <h1>Hello friend!</h1>
      <Svg />
      <ToggleTheme theme={selectedTheme} />
    </>
  );
};
export default Main;
