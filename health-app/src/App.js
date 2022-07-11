import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./Components/DashboardPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Menu /> */}
        <Switch>
          {/* <Route path="/error">
            <Error />
          </Route> */}
          <Route path="/:brand">
            <DashboardPage />
          </Route>
          <Route path="/">
            <DashboardPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
