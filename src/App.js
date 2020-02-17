import React from "react";
import "./assets/css/App.css";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./model/routes";

const { Header, Content, Footer } = Layout;
function App() {
    return (
        <Router>
            <div className="App">
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["1"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>{" "}
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/shop">Shop</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <div className="app-content">
                            <Switch>
                                {routes.map((route, key) => {
                                    if (route.exact) {
                                        return (
                                            <Route
                                                key={key}
                                                exact
                                                path={route.path}
                                                render={props => (
                                                    <route.component
                                                        {...props}
                                                        routes={route.routes}
                                                    />
                                                )}
                                            />
                                        );
                                    } else {
                                        return (
                                            <Route
                                                key={key}
                                                path={route.path}
                                                render={props => (
                                                  <route.component
                                                      {...props}
                                                      routes={route.routes}
                                                  />
                                              )}
                                            />
                                        );
                                    }
                                })}
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
