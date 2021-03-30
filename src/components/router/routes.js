import Home from "routes/home";
import Login from "routes/login";
import Main from "routes/main";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/main",
    component: Main,
    routes: [
      {
        path: "/main/overview",
        component: () => <div>Overview</div>,
      },
      {
        path: "/main/todo",
        component: () => <div>Todo</div>,
      },
    ],
  },
];

export default routes;
