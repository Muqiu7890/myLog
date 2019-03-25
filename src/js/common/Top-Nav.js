import React, { Component } from 'react'
import { Breadcrumb } from 'antd'


class TopNav extends Component {
  getCurrentPageName = () => {
    switch(window.location.hash.slice(2)) {
      case 'my-log': return '我的日志'
      case 'follow': return '我的关注'
      case 'excellent-log': return '优秀日志'
      default: '我的日志'
    }
  }
  render () {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>思特沃科学习平台</Breadcrumb.Item>
        <Breadcrumb.Item>成长日志</Breadcrumb.Item>
        <Breadcrumb.Item>{this.getCurrentPageName()}</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default TopNav