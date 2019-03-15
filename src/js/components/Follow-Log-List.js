import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Card, Button, Pagination, Icon, Collapse } from 'antd'

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
      allLogExtended: false
    }
  }

  componentWillMount () {
    this.props.getExcellentLog()
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
    console.log('id', excLogID)
    this.props.getExcellentLog()
    const excLog = {
      'type': this.props.excLogs[index].type,
      'create_time': this.props.excLogs[index].createTime,
      'content': this.props.excLogs[index].content,
      'exc': 1,
      'user_id': this.props.excLogs[index].userId
    }
    this.props.updateLog(excLogID, excLog)
    this.props.getExcellentLog()
  }

  render () {
    console.log('this.props.excLogs', this.props.excLogs)
    const customPanelStyle = {
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      color: '#F0F0F0',
    }

    const { id, isCommentClick, allLogExtended, logExtended } = this.state

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
          this.props.excLogs.map((excLog, index) =>
            <Card
              key={index}
              title={excLog.nickname + excLog.type === 1 ? '日志' : '目标'}
              extra={<span>{excLog.createTime.toString().slice(0, 10)}</span>}
              style={{ width: '100%', marginBottom: '40px' }}
            >
              <div style={{ background: '#F0F0F0', padding: '8px' }}>
                {
                  (logExtended && id === index) || allLogExtended ? <Markdown
                    source={excLog.content}/> : <Markdown
                    source={excLog.content.substr(0, 150) + '...'}/>
                }
              </div>
              {
                excLog.content.length > 100 &&
                <div className='toggle-btn'
                     onClick={this.toggleClickHandler.bind(this, index, logExtended)}
                     style={{ color: '#1890ff' }}>{logExtended || allLogExtended ? '收起' : '点击查看全文'}</div>
              }
              <Row style={{ marginTop: '10px' }}>
                <Col span={24} style={{ textAlign: 'right' }}>
                  <Button type='primary' htmlType='submit' ghost
                          onClick={this.handlerDisplayCommentLog.bind(this, index)}>评论日志</Button>
                  <Button type='primary' ghost style={{ marginLeft: 25 }}
                          onClick={this.cancelExcellentLog.bind(this, excLog.id, index)}
                  >
                    推荐优秀日志
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
          <Pagination defaultCurrent={1} total={50}></Pagination>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  excLogs: state.excLog
})

const mapDispatchToProps = dispatch => ({
  getExcellentLog: () => dispatch(getExcellentLog()),
  updateLog: (id, log) => dispatch(updateLog(id, log))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExcellentLog)