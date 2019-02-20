import React, {Component} from 'react'
import {Button, Card, Icon, Collapse, Row, Col, Popconfirm} from 'antd'
import Comment from './Comment'
import ModifyLog from './Modify-Log'
import '../../css/index.css'

const Panel = Collapse.Panel

const mylogs = [
    {
        id: 1,
        createTime: '2018-9-2',
        content: 'jjj',
        comments: [
            {
                commentUser: 'muqiu',
                commentText: 'hhhhhh'
            },
            {
                commentUser: 'muqiu',
                commentText: 'hhhhhh'
            }
        ],

    },
    {
        id: 2,
        createTime: '2018-9-2',
        content: 'jjj',
        comments: [
        ],

    }
]

class LogList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            isCommentClick: false,
            isModifyClick: false
        }
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

    handlerDisplayModifyLog = (index) => {
        this.setState({
            id: index,
            isModifyClick: true
        })
    }

    handlerHideModifyLog = (index) => {
        this.setState({
            id: index,
            isModifyClick: false
        })
    }

    render() {
        const {id,isCommentClick,isModifyClick} = this.state
        const customPanelStyle = {
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            color: '#F0F0F0',
        }
        return (
            mylogs.map((log, index) =>
                isModifyClick && id === index ? <ModifyLog handlerHideModifyLog={this.handlerHideModifyLog}/>
                    : <Card
                        title={`${log.createTime}日志`}
                        style={{marginTop: '30px'}}
                        extra={
                            <Popconfirm title='确认删除吗？' okText='确认' cancelText='取消'>
                                <a href='#'><Icon type='delete' /></a>
                            </Popconfirm>
                        }
                    >
                        <div style={{background: '#F0F0F0', padding: '8px 8px 8px 8px'}}>
                            <div style={{padding: '10px 0 10px 17px', fontSize: '15px', background: 'white'}}>{log.content}</div>
                        </div>
                        <br/>
                        <Row style={{marginTop: '10px'}}>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type='primary' htmlType='submit' ghost
                                        onClick={this.handlerDisplayModifyLog.bind(this,index)}>修改日志</Button>
                                <Button type='primary' ghost style={{marginLeft: 25}} onClick={this.handlerDisplayCommentLog.bind(this,index)}>
                                    评论日志
                                </Button>
                            </Col>
                        </Row>
                        {
                            isCommentClick && id === index ? <Comment handlerHideCommentLog={this.handlerHideCommentLog}/> : ''
                        }
                        {
                            !!log.comments.length && <Collapse className='panelHeader'
                                                                  bordered={false}
                                                                  expandIcon={({isActive}) => <Icon type='caret-right'
                                                                                                    rotate={isActive ? 90 : 0}/>}
                            >
                                <Panel header={`${log.comments.length}条评论`} style={customPanelStyle}>
                                    {
                                        log.comments.map((comment,index) =>
                                            <p key={index} style={{background: '#F0F0F0'}}>{`${comment.commentUser}:${comment.commentText}`}</p>)
                                    }
                                </Panel>
                            </Collapse>
                        }
                    </Card>
        ))
    }
}

export default LogList