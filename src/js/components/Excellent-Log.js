import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Card, Button, Pagination, Icon, Collapse, message } from 'antd'

import { Row, Col } from 'antd'
import Markdown from 'react-markdown'
import '../../css/index.css'

import Comment from './Comment'
import { connect } from 'react-redux'
import { getExcellentLog } from '../action/Excellent'
import { updateLog } from '../action/index'

const Panel = Collapse.Panel

class ExcellentLog extends Component {

  constructor (props) {
    super(props)
    this.state = {
      id: '',
      isCommentClick: false,
      logExtended: false,
      allLogExtended: false,
      current: 1
    }
  }

  onChange = (page) => {
    this.setState({
      current: page
    })
    this.props.getExcellentLog(page - 1, 1)
  }

  componentWillMount () {
    this.props.getExcellentLog(0, 1)
  }

  handlerAllLogExtended = () => {
    this.setState({
      allLogExtended: !this.state.allLogExtended
    })
  }

  handlerDisplayCommentLog = (index) => {
    this.setState({
      id: index,
      isCommentClick: true
    })
  }

  handlerHideCommentLog = (index) => {
    this.setState({
      id: index,
      isCommentClick: false
    })
  }

  toggleClickHandler = (index, state) => {
    this.setState({
      id: index,
      logExtended: !state
    })
  }
  cancelExcellentLog = (excLogID, index) => {
    this.setState({
      arrID: index,
      excId: excLogID
    })

    this.props.getExcellentLog(0, 1)
    const excLog = {
      'type': this.props.excLogs.content[index].type,
      'create_time': this.props.excLogs.content[index].createTime,
      'content': this.props.excLogs.content[index].content,
      'exc': 0,
      'user_id': this.props.excLogs.content[index].userId
    }
    this.props.updateLog(excLogID, excLog)
    this.props.getExcellentLog(0, 1)
    message.success('已成功取消优秀日志')
  }

  render () {
    const customPanelStyle = {
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      color: '#F0F0F0',
    }

    const { id, isCommentClick, allLogExtended, logExtended } = this.state
    const { content, total } = this.props.excLogs

    return (
      <div style={{ backgroundColor: 'white' }}>
        <div style={{ margin: '10px' }}>
          <Row type='flex' justify='end'>
            <Col span={2}>
              <Button type='primary' ghost
                      onClick={this.handlerAllLogExtended}>{allLogExtended ? '收起' : '展开'}日志全文</Button>
            </Col>
          </Row>
        </div>
        {
          content.map((excLog, index) =>
            <Card
              key={index}
              title={excLog.name + `@(` + excLog.nickname + `)`}
              extra={<span>{excLog.createTime.toString().slice(0, 10)}</span>}
              style={{ width: '100%', marginBottom: '40px' }}
            >
              <div style={{ padding: '8px', background: '#f0f0f0' }}>
                <div style={{ padding: '8px', background: '#fff', wordBreak: 'break-all' }}>
                  {
                    (logExtended && id === index ) || allLogExtended || excLog.content.length < 300 ? <Markdown
                      source={excLog.content} /> : <Markdown
                      source={excLog.content.substr(0, 300) + '...'}/>
                  }
                </div>
              </div>
              {
                excLog.content.length > 300 &&
                <div className='toggle-btn'
                     onClick={this.toggleClickHandler.bind(this, index, logExtended)}
                     style={{ color: '#1890ff' }}>{(logExtended && id === index) || allLogExtended ? '收起' : '点击查看全文'}</div>
              }
              <Row style={{ marginTop: '10px' }}>
                <Col span={24} style={{ textAlign: 'right' }}>
                  {/*<Button type='primary' htmlType='submit' ghost*/}
                  {/*onClick={this.handlerDisplayCommentLog.bind(this, index)}>评论日志</Button>*/}
                  <Button type='primary' ghost style={{ marginLeft: 25 }}
                          onClick={this.cancelExcellentLog.bind(this, excLog.id, index)}
                  >
                    取消优秀日志
                  </Button>
                </Col>
              </Row>
              {/*{*/}
              {/*isCommentClick && id === index ?*/}
              {/*<Comment index={index} handlerHideCommentLog={this.handlerHideCommentLog}/> : ''*/}
              {/*}*/}
              {/*{*/}
              {/*!!user.comments.length && <Collapse className='panelHeader'*/}
              {/*bordered={false}*/}
              {/*expandIcon={({ isActive }) => <Icon type='caret-right'*/}
              {/*rotate={isActive ? 90 : 0}/>}*/}
              {/*>*/}
              {/*<Panel header={`${user.comments.length}条评论`} style={customPanelStyle}>*/}
              {/*{*/}
              {/*user.comments.map((comment) =>*/}
              {/*<p style={{ background: '#F0F0F0' }}>{`${comment.commentUser}:${comment.commentText}`}</p>)*/}
              {/*}*/}
              {/*</Panel>*/}
              {/*</Collapse>*/}
              {/*}*/}
            </Card>
          )}
        <div style={{ marginTop: '100px' }}>
          <Pagination style={{ marginTop: '40px' }}
                      defaultCurrent={this.state.current}
                      total={total}
                      pageSize={5}
                      onChange={this.onChange}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  excLogs: state.excLog
})

const mapDispatchToProps = dispatch => ({
  getExcellentLog: (page, exc) => dispatch(getExcellentLog(page, exc)),
  updateLog: (id, log) => dispatch(updateLog(id, log))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExcellentLog)