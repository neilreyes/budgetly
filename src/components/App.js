import React, { Component } from 'react';
// Components
import SiteDrawer from './SiteDrawer';
import SiteHeader from './SiteHeader';
import SiteBody from './SiteBody';
import SiteFooter from './SiteFooter';
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
  state = {
    isDialogBoxOpen: false,
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
         
          <SiteHeader />
          <SiteDrawer />
          <SiteBody />
          <SiteFooter />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
