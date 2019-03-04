import React, {Component} from 'react'
import {Card, Avatar, Col, Row, } from 'antd'
import {NavLink} from 'react-router-dom'
import {connect} from  'react-redux'
import {getAllFollowedUsers} from '../action/Follows'

class FollowList extends Component {
  componentWillMount () {
    this.props.getAllFollowedUsers()
  }

  render() {
        console.log(this.props.follows)
        return (
            <Row gutter={16}>
                {
                this.props.follows.map((user,index) =>
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
                                          <p>{user.name}@{user.nickname}</p>
                                      </div>
                                  </NavLink>
                              }
                        >
                            <p>已更新日志：0</p>
                            <p>最近一次更新时间：2019<span style={{
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

const mapStateToProps = state => ({ follows: state.followed })

 const mapDispatchToProps = dispatch => ({
     getAllFollowedUsers:() => dispatch(getAllFollowedUsers())
 })

export default connect(mapStateToProps,mapDispatchToProps)(FollowList)

