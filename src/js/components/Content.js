import React from 'react'
import 'antd/dist/antd.css'
import {Layout, Menu, Breadcrumb,Icon } from 'antd'
import ExcellentLog from './ExcellentLog'
import MyLogBody from './MyLogBody'

const { Content,  Sider, } = Layout


const content = () => (
    <Layout>
     <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>思特沃科学习平台</Breadcrumb.Item>
        <Breadcrumb.Item>成长日志</Breadcrumb.Item>
        <Breadcrumb.Item>优秀日志</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['3']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
              <Menu.Item key="1">
              <span>我的日志  &nbsp;  </span>
              <Icon type="edit" />
              </Menu.Item>
              <Menu.Item key="2">我的关注 &nbsp;&nbsp;
              <Icon type="file" />
              </Menu.Item>
              <Menu.Item key="3">优秀日志 &nbsp;&nbsp;
              <Icon type="star" />
              </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {/*<ExcellentLog/>*/}
          <MyLogBody/>
        </Content>
      </Layout>
    </Content>
    </Layout>

)

export default content