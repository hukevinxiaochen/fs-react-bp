import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const ToggleTheme = ({ theme }) => {
  return (
    <IconButton color="primary" component="span">
      {theme === 'dark' ? <Brightness1Icon /> : <WbSunnyIcon />}
    </IconButton>
  );
};

ToggleTheme.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default ToggleTheme;
