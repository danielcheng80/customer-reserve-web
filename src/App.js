import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "components/router/routes";
import RouteWithSubRoutes from "components/router/RouteWithSubRoutes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
