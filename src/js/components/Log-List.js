import React, { Component } from 'react'
import { Button, Card, Row, Col, Icon, Popconfirm } from 'antd'
import Comment from './Comment'
import ModifyLog from './Modify-Log'
import { connect } from 'react-redux'
import { getPageLogs, deleteLog } from '../action/index'

class LogList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      logId: '',
      isCommentClick: false,
      isModifyClick: false
    }
  }

  componentWillMount () {
    this.props.getPageLogs()
  }

  handlerDisplayCommentLog = (logId) => {
    this.setState({
      logId,
      isCommentClick: true
    })
  }

  handlerHideCommentLog = () => {
    this.setState({
      isCommentClick: false
    })
  }

  handlerDisplayModifyLog = (logId) => {
    this.setState({
      logId,
      isModifyClick: !this.state.isModifyClick
    })
  }

  handlerHideModifyLog = () => {
    this.setState({
      isModifyClick: false
    })
  }

  render () {

    const { logId, isCommentClick, isModifyClick } = this.state
    const { content } = this.props.logs
    const customPanelStyle = {
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      color: '#F0F0F0',
    }
    return (
      <div>
        {content.map((log, index) =>
          isModifyClick && logId === log.id ? <ModifyLog log={log} handlerHideModifyLog={this.handlerHideModifyLog}
                                                         key={log.id}/>
            : <Card key={log.id}
                    title={`${log.create_time.toString().substr(0, 10)} ${log.type === 1 ? '日志' : '目标'}`}
                    style={{ marginTop: '30px' }}
                    extra={
                      <Popconfirm title='确认删除吗？' okText='确认' cancelText='取消'
                                  onConfirm={() => {this.props.deleteLog(log.id)}}>
                        <a href='#'><Icon type='delete'/></a>
                      </Popconfirm>
                    }
            >
              <div style={{ background: '#F0F0F0', padding: '8px' }}>
                <div style={{ padding: '10px 0 10px 17px', fontSize: '15px', background: 'white' }}>{log.content}</div>
              </div>
              <br/>
              <Row style={{ marginTop: '10px' }}>
                <Col span={24} style={{ textAlign: 'right' }}>
                  <Button type='primary' htmlType='submit' ghost
                          onClick={this.handlerDisplayModifyLog.bind(this, log.id)}>修改日志</Button>
                  <Button type='primary' ghost style={{ marginLeft: 25 }}
                          onClick={this.handlerDisplayCommentLog.bind(this, log.id)}>
                    评论日志
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  logs: state.log,
})

const mapDispatchToProps = dispatch => ({
  getPageLogs: () => dispatch(getPageLogs()),
  deleteLog: (id) => dispatch(deleteLog(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogList)