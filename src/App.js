import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "components/router/routes";
import RouteWithSubRoutes from "components/router/RouteWithSubRoutes";
import "antd/dist/antd.css";

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
