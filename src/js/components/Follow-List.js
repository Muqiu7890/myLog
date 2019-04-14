import React, { Component } from 'react'
import { Card, Avatar, Col, Row, message } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllFollowedUsers, cancelFollowedUser } from '../action/Follows'

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

  unfollow = (followed_id) => {
    this.props.cancelFollowedUser(followed_id)
    message.success('取消关注成功')
  }

  render () {
    return (
      <Row gutter={16}>
        {
          this.props.follows.map((follow, index) =>
            <Col span={8} key={index}>
              <Card style={{ width: '100%', margin: '10px 20px 10px 0' }}
                    title={
                      <Link to={`/follow/${follow.user.id}`}>
                        <div style={{ margin: '0 auto', textAlign: 'center', marginTop: '15px' }}>
                          <Avatar
                            style={{
                              color: '#f56a00',
                              backgroundColor: '#fde3cf',
                              fontSize: '16px',
                            }}
                            size={50}>{follow.user.nickname[0]}</Avatar>
                          <p>{follow.user.name}@{follow.user.nickname}</p>
                        </div>
                      </Link>
                    }
              >
                <p>已更新日志：{follow.logs.length}</p>
                <p>最近一次更新时间：{follow.logs[follow.logs.length - 1].create_time.substring(0, 10)}<span style={{
                  float: 'right',color: '#1973ba'
                }} onClick={this.unfollow.bind(this, follow.user.id)}>取消关注</span>
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
  getAllFollowedUsers: () => dispatch(getAllFollowedUsers()),
  cancelFollowedUser: (followed_id) => dispatch(cancelFollowedUser(followed_id))

})

export default connect(mapStateToProps, mapDispatchToProps)(FollowList)