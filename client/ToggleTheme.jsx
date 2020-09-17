import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { useDispatch } from 'react-redux';
import { THEME_CHANGED } from './state/actions';

const ToggleTheme = ({ theme }) => {
  const dispatch = useDispatch();
  const changeTheme = useCallback(() => dispatch({ type: THEME_CHANGED }), [
    dispatch,
  ]);

  return (
    <IconButton color="primary" component="span" onClick={changeTheme}>
      {theme === 'dark' ? <WbSunnyIcon /> : <Brightness1Icon />}
    </IconButton>
  );
};

ToggleTheme.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default ToggleTheme;
