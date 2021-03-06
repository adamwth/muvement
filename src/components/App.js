import React, { Component } from 'react';
import FormationScreen from "./Formation/FormationScreen";
import { Route, Switch, Redirect } from "react-router-dom";
import HomeScreen from "./Home/HomeScreen";
import ChoreoHomeScreen from "./Choreo/ChoreoHomeScreen";
import LandingPageScreen from "./LandingPage/LandingPage";
import SignUpScreen from "./Auth/SignUp";
import LogInScreen from "./Auth/LogIn";
import ResetPwScreen from "./Auth/ResetPassword";
import ForgotPwScreen from "./Auth/ForgotPassword";
import Settings from "./Settings/Settings";
import ReactGA from 'react-ga';
import Privacy from "./Static/Privacy";
import Terms from "./Static/Terms";
import DancerFormationView from "./Formation/DancerFormationView";
import TrialFormationScreen from "./Trial/TrialFormationScreen";

ReactGA.initialize('UA-125447140-3', {
  debug: false
});

class App extends Component {
  render() {
    return (
      <div className="App" style={{overflow:"hidden"}}>
        <Switch>
          {/* Authenticated routes */}
          <Route exact path="/dashboard" component={HomeScreen} />
          <Route exact path={`/choreo/:choreoId`} component={ChoreoHomeScreen} />
          <Route exact path={`/choreo/:choreoId/formation`} component={FormationScreen} />
          <Route exact path={`/choreoview/:choreoId/`} component={DancerFormationView} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/resetpassword" component={ResetPwScreen} />

          {/* Non-authenticated routes */}
          <Route exact path="/signup" component={SignUpScreen} />
          <Route exact path="/login" component={LogInScreen} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/forgotpassword" component={ForgotPwScreen} />
          <Route exact path="/trial/formation" component={TrialFormationScreen} />
          <Route exact path="/" render={(props) => <LandingPageScreen {...props} choreoId={'demo'} />} />
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
