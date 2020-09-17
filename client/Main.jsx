import React from 'react';
import { useSelector } from 'react-redux';
import Map from './Map';
import ToggleTheme from './ToggleTheme';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Main = () => {
  const selectedColorMode = useSelector((state) => state.theme);
  const customMuiTheme = createMuiTheme({
    palette: {
      type: selectedColorMode,
      primary: {
        main: '#8ec07c',
      },
    },
  });

  return (
    <ThemeProvider theme={customMuiTheme}>
      <div id="main" className={`${selectedColorMode}-theme`}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <h1>Hello friend!</h1>
          </Grid>
          <Grid item>
            <Container>
              <Map />
            </Container>
          </Grid>
          <Grid item>
            <ToggleTheme colorMode={selectedColorMode} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Main;
