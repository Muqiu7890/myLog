import React from 'react'
import { Icon,Layout } from "antd"
import { Menu } from "antd"
import { NavLink } from "react-router-dom"

const { Sider } = Layout;

const MenuBar = () => (
    <Sider width={200} style={{ background: '#fff' }}>
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
        >
            <Menu.Item key="1">
                <NavLink to="/my-log" exact={true}>我的日志  &nbsp; <Icon type="edit" /></NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <NavLink to="/follow">我的关注  &nbsp; <Icon type="file" /></NavLink>
            </Menu.Item>
            <Menu.Item key="3">
                <NavLink to="/excellent-log">优秀日志  &nbsp; <Icon type="star" /></NavLink>
            </Menu.Item>
        </Menu>
    </Sider>
);

export default MenuBar;