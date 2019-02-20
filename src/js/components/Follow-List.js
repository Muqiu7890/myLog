import React, {Component} from 'react'
import {Card, Avatar, Col, Row, } from 'antd'
import {NavLink} from 'react-router-dom'

const userInfo = [
    {
        nickname: '秦麟@(秦小麟)',
        logNumber: 1,
        updateTime: '2019-02-15'
    },
    {
        nickname: '乔晶@(Muqiu)',
        logNumber: 1,
        updateTime: '2019-02-23'
    },
    {
        nickname: '秦麟@(hhh)',
        logNumber: 1,
        updateTime: '2019-02-15'
    },
    {
        nickname: '秦麟@(秦小麟)',
        logNumber: 1,
        updateTime: '2019-02-15'
    },
    {
        nickname: '秦麟@(秦小麟)',
        logNumber: 1,
        updateTime: '2019-02-15'
    },
]

class FollowList extends Component {
    render() {
        return (
            <Row gutter={16}>
                {
                userInfo.map((user,index) =>
                    <Col span={8} key={index}>
                        <Card style={{width: 350, margin: '10px 20px 10px 0'}}
                              title={
                                  <NavLink to='/follow/1'>
                                      <div style={{margin: '0 auto', textAlign: 'center', marginTop: '15px'}}>
                                          <Avatar
                                              style={{
                                                  color: '#f56a00',
                                                  backgroundColor: '#fde3cf',
                                                  fontSize: '16px',
                                              }}
                                              size={50}>{user.nickname[0]}</Avatar>
                                          <p>{user.nickname}</p>
                                      </div>
                                  </NavLink>
                              }
                        >
                            <p>已更新日志：{user.logNumber}</p>
                            <p>最近一次更新时间：{user.updateTime}<span style={{
                                color: '#46A3FF',
                                float: 'right'
                            }}>取消关注</span>
                            </p>
                        </Card>
                    </Col>
                )}
            </Row>
        )
    }
}

export default FollowList

