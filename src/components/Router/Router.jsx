import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import Default from '../Layout/DefaultLayout';
import SignUp from '../Authentication/SignUp';
import SignIn from '../Authentication/SignIn';
import LandingPage from '../LandingPage/LandingPage';

const theme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: green
      },
    });

const Router = () => (
  <ThemeProvider theme={theme}>
    <Switch>
    <Route exact path="/login" render={() => <Default><SignIn /> </Default>} />
    <Route exact path="/provider" render={() => <Default><SignUp /> </Default>} />
    <Route exact path="/signup" render={() => <Default><SignUp /> </Default>} />
    <Route exact path="/" render={() => <Default><LandingPage /> </Default>}/>
  </Switch>
  </ThemeProvider>
  
);

export default Router;
