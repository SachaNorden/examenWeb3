import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import JokesList from '../JokesList';
import About from '../About';
import JokeDetail from '../JokeDetail';

const { Header, Content } = Layout;

const App = () => {
  return (
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
            <Menu.Item key="1">
              <Link to="/jokes">Jokes</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '30px 50px' }}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/jokes" element={<JokesList />} />
            <Route path="/jokes/:id" element={<JokeDetail />} />
          </Routes>
        </Content>
      </Layout>
  );
};

export default App;
