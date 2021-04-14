import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import RouteWithSubRoutes from "components/router/RouteWithSubRoutes";

const { Header, Footer, Sider, Content } = Layout;

const Main = ({ routes }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ textAlign: "center" }}>
        <h1 style={{ color: "#fff" }}>Main</h1>
      </Header>
      <Layout>
        <Sider>
          <Menu mode="inline" theme="dark">
            <Menu.Item>
              <Link to="/main/overview">Overview</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/main/todo">To-Do</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: 24 }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
            }}
          >
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
};

export default Main;
