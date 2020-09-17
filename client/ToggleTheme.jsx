import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { useDispatch } from 'react-redux';
import { THEME_CHANGED } from './state/actions';

const ToggleTheme = ({ colorMode }) => {
  const dispatch = useDispatch();
  const changeTheme = useCallback(() => dispatch({ type: THEME_CHANGED }), [
    dispatch,
  ]);

  return (
    <>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <IconButton color="primary" component="span" onClick={changeTheme}>
            {colorMode === 'dark' ? <WbSunnyIcon /> : <Brightness1Icon />}
          </IconButton>
        </Grid>
        <Grid item>
          <Typography component="span">{colorMode.toUpperCase()}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

ToggleTheme.propTypes = {
  colorMode: PropTypes.string.isRequired,
};

export default ToggleTheme;
