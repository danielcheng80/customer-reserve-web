import React from "react";
import RouteWithSubRoutes from "components/router/RouteWithSubRoutes";
import { Link } from "react-router-dom";

const Main = ({ routes }) => {
  return (
    <div>
      <h1>Main</h1>
      <ul>
        <li>
          <Link to="/main/overview">Overview</Link>
        </li>
        <li>
          <Link to="/main/todo">To-Do</Link>
        </li>
      </ul>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
};

export default Main;
