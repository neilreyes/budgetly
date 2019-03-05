import React, { Component } from 'react';
// Components
import SiteDrawer from '../containers/SiteDrawer';
import SiteHeader from '../containers/SiteHeader';
import SiteBody from '../containers/SiteBody';
// Material
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette:{
    primary: { main: '#2ca4ff' },
  },
  typography: {
    useNextVariants: true,
  }
});

class App extends Component {
  render() {
    return (
        <div>
          <MuiThemeProvider theme={theme}>
            <div className="App">
              <SiteHeader />
              <SiteDrawer />
              <SiteBody />
            </div>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
