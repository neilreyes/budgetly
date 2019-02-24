import React, { Component } from 'react';
// Components
import SiteHeader from './SiteHeader';
import SiteBody from './SiteBody';
import SiteFooter from './SiteFooter';
// Material
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
 palette:{
   primary: { main: '#2ca4ff' },
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
          <SiteBody />
          <SiteFooter />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
