import React from 'react'
import 'antd/dist/antd.css';
import {
  Menu, Dropdown, Button, Icon, message,
} from 'antd';
import '../../css/index.css'
import { Row, Col } from 'antd';

// function handleButtonClick(e) {
//   message.info('Click on left button.');
//   console.log('click left button', e);
// }

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="user" />个人中心</Menu.Item>
    <Menu.Item key="2"><Icon type="close" />退出</Menu.Item>
  </Menu>
);

const Head = () => (
        <div>
            <Row type="flex" justify="space-between">
                <Col span={12}>
                    <img style={{height: '90px', marginTop: '5px'}}
                         src={require("../../images/tw-logo-white-new.1a7b1977.png")}/>
                </Col>
                <Col span={6} style={{marginTop: '10px'}}>
                    <Dropdown overlay={menu}>
                        <Button>
                            秦麟 <Icon type="down"/>
                        </Button>
                    </Dropdown>
                </Col>
            </Row>
        </div>
);

export default Head


