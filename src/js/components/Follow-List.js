import React, {Component} from 'react'
import {Card, Avatar, Col, Row, } from 'antd'
import {NavLink} from 'react-router-dom'
import {connect} from  'react-redux'
import {getAllFollowedUsers} from '../action/Follows'

class FollowList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: ''
    }
  }
  componentWillMount () {
    this.props.getAllFollowedUsers()
  }
  handlerFollowUser = (userId) =>{
    this.setState({
      userId
    })
  }

  render() {
        return (
            <Row gutter={16}>
                {
                this.props.follows.map((follow,index) =>
                    <Col span={8} key={index}>
                        <Card style={{width: 350, margin: '10px 20px 10px 0'}}
                              title={
                                  <NavLink to='/follow/:UserId'>
                                      <div style={{margin: '0 auto', textAlign: 'center', marginTop: '15px'}}>
                                          <Avatar
                                              style={{
                                                  color: '#f56a00',
                                                  backgroundColor: '#fde3cf',
                                                  fontSize: '16px',
                                              }}
                                              size={50}>{follow.user.nickname.toString().slice(0,1)}</Avatar>
                                          <p>{follow.user.name}@({follow.user.nickname})</p>
                                      </div>
                                  </NavLink>
                              }
                              onClick={this.handlerFollowUser.bind(this, follow.user.id)}
                        >
                            <p>已更新日志：{follow.logs.length}</p>
                            <p>最近一次更新时间：{follow.logs[0].create_time.toString().slice(0,10)}<span style={{
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

