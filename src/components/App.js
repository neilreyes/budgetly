import React, { Component } from 'react';
<<<<<<< HEAD
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        test
      </div>
=======
// Components
import SiteDrawer from './SiteDrawer';
import SiteHeader from './SiteHeader';
import SiteBody from './SiteBody';
//import SiteFooter from './SiteFooter';
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
          {/* <SiteFooter /> */}
        </div>
      </MuiThemeProvider>
>>>>>>> 834aac4b87ef649fd56927d4f8c3109bd8fa9eab
    );
  }
}

export default App;
