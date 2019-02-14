import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
import MyLogBody from './Components/myLogBody';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

import 'antd/dist/antd.css';
import './index.css';


import {
  Layout, Menu, Breadcrumb,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;

ReactDOM.render(
  <Layout>
    <Header className="header">
      <div className="logo" />
        <span style={{ height:'100%',display:'inline-block',verticalAlign:'middle' }}></span>
        <img style={{ height: '90px',verticalAlign: 'middle'}} src={require('./tw-logo-white-new.1a7b1977.png')}/>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
              <Menu.Item key="1">我的日志</Menu.Item>
              <Menu.Item key="2">我的关注</Menu.Item>
              <Menu.Item key="3">优秀日志</Menu.Item>
        
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <MyLogBody />
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>,
  document.getElementById('container')
);

serviceWorker.unregister();
