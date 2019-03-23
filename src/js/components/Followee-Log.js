import React, { Component } from 'react'
import { Button, Card, Row, Col, Icon, Popconfirm, Pagination, message } from 'antd'
import Comment from './Comment'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import { getPageLogs, updateLog } from '../action/index'
import { getUser } from '../action/User'

class FolloweeLog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logId: '',
      isCommentClick: false,
      current: 1
    }
  }

  componentWillMount () {
    this.props.getPageLogs(0, window.location.hash.slice(9, 11))
    this.props.getUser(window.location.hash.slice(9, 11))
  }

  onChange = (page) => {
    this.setState({
      current: page
    })
    this.props.getPageLogs(page - 1, window.location.hash.slice(9, 11))
  }

  handlerHideCommentLog = () => {
    this.setState({
      isCommentClick: false
    })
  }

  handlerDisplayCommentLog = (logId) => {
    this.setState({
      logId,
      isCommentClick: true
    })
  }

  cancelExcellentLog = (logId, index, userId) => {
    this.setState({
      arrId: index,
      logId: logId,
      userId: userId
    })

    const log = {
      'type': this.props.followLogs.content[index].type,
      'create_time': this.props.followLogs.content[index].create_time,
      'content': this.props.followLogs.content[index].content,
      'exc': 1,
      'user_id': this.props.followLogs.content[index].user_id
    }

    this.props.updateLog(logId, log, userId)

    if (this.props.followLogs.content[index].exc === 1) {
      message.warning('已经被推荐')
    } else {
      message.success('推荐成功')
    }

  }

  render () {
    const { logId, isCommentClick } = this.state
    const { content, total } = this.props.followLogs
    const customPanelStyle = {
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      color: '#F0F0F0',
    }
    return (
      <div>
        {content.map((log, index) =>
          <Card key={log.id}
                title={`${this.props.user.nickname} ${log.type === 1 ? '日志' : '目标'}`}
                style={{ marginTop: '30px' }}
                extra={`${log.create_time.toString().substr(0, 10)}`}
          >
            <div style={{ padding: '8px', background: '#f0f0f0' }}>
              <div style={{ padding: '8px', background: '#fff', wordBreak: 'break-all' }}>
                <Markdown source={log.content}/>
              </div>
            </div>
            <br/>
            <Row style={{ marginTop: '10px' }}>
              <Col span={24} style={{ textAlign: 'right' }}>
                {/*<Button type='primary' htmlType='submit' ghost*/}
                        {/*onClick={this.handlerDisplayCommentLog.bind(this, log.id)}>评论日志</Button>*/}
                <Button type='primary' ghost style={{ marginLeft: 25 }}
                        onClick={this.cancelExcellentLog.bind(this, log.id, index, log.user_id)}>
                  推荐优秀日志
                </Button>
              </Col>
            </Row>
            {
              isCommentClick && logId === log.id ? <Comment handlerHideCommentLog={this.handlerHideCommentLog}/> : ''
            }
            {/*{*/}
            {/*!!log.comments.length && <Collapse className='panelHeader'*/}
            {/*bordered={false}*/}
            {/*expandIcon={({isActive}) => <Icon type='caret-right'*/}
            {/*rotate={isActive ? 90 : 0}/>}*/}
            {/*>*/}
            {/*<Panel header={`${log.comments.length}条评论`} style={customPanelStyle}>*/}
            {/*{*/}
            {/*log.comments.map((comment,index) =>*/}
            {/*<p key={index} style={{background: '#F0F0F0'}}>{`${comment.commentUser}:${comment.commentText}`}</p>)*/}
            {/*}*/}
            {/*</Panel>*/}
            {/*</Collapse>*/}
            {/*}*/}
          </Card>
        )}
        <Pagination style={{ marginTop: '40px' }} defaultCurrent={this.state.current} total={total} pageSize={5}
                    onChange={this.onChange}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  followLogs: state.log,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getPageLogs: (page, userId) => dispatch(getPageLogs(page, userId)),
  getUser: (userId) => dispatch(getUser(userId)),
  updateLog: (id, log, userId) => dispatch(updateLog(id, log, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FolloweeLog)
