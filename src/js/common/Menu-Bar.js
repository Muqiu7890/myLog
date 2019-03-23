import React, { Component } from 'react'
import { Icon, Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'

const { Sider } = Layout

class MenuBar extends Component {
  render () {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode='inline'
          defaultSelectedKeys={[window.location.hash.slice(1)]}
          style={{ height: '100%' }}
        >
          <Menu.Item key='/my-log'>
            <NavLink to='/my-log'>我的日志 &nbsp; <Icon type='edit'/></NavLink>
          </Menu.Item>
          <Menu.Item key='/follow'>
            <NavLink to='/follow'>我的关注 &nbsp; <Icon type='file'/></NavLink>
          </Menu.Item>
          <Menu.Item key='/excellent-log'>
            <NavLink to='/excellent-log'>优秀日志 &nbsp; <Icon type='star'/></NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default MenuBar