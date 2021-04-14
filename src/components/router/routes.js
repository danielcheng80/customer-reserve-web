import Home from "routes/home";
import Login from "routes/login";
import Main from "routes/main";

const routes = [
  {
    path: "/",
    exact: true,
    title: "首頁",
    component: Home,
  },
  {
    path: "/login",
    title: "登入",
    component: Login,
  },
  {
    path: "/main",
    title: "主頁",
    component: Main,
    routes: [
      {
        path: "/main/overview",
        title: "總覽",
        component: () => <div>Overview</div>,
      },
      {
        path: "/main/todo",
        title: "待辦事項",
        component: () => <div>Todo</div>,
      },
    ],
  },
];

export default routes;
