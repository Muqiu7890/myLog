import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Card, Button, Pagination, Icon, Collapse} from 'antd'

import {Row, Col} from 'antd'
import Markdown from 'react-markdown'
import '../../css/index.css'

import Comment from './Comment'

const Panel = Collapse.Panel

const userInfo = [
    {
        key: 1,
        name: 'shanshan(@shanshan)',
        createTime: '2019-01-28',
        content: ' ### 你好啊 position属性的值\n' +
            '##　重要的文档今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键这方面，\n' +
            '以前常用的快捷键也就是，刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，\n' +
            '尤其是vimium对于网页操作的这部分。以前一直有种先入为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做\n' +
            '了一些操作之后，才理解了它们为什么要叫快捷键，因为真的比用鼠标效率高了很多！希望接下来的日子里..今天过得特别充实，\n' +
            '在session中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快捷键也就是，刷新，关闭页面这些，今天听老师讲ch\n' +
            'rome的快捷键操作之后，感觉打开了新世界ession中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快捷键也就是，\n' +
            '刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，尤其是vimium对于网页操作的这部分。\n' +
            '以前一直有种先入为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做了一些操作之后，才理解了它们为什么要叫\n' +
            '快捷键，因为真的比用鼠标效率高了很多！希望接下来的日子里  ',
        comments: [
            {
                commentUser: 'muqiu',
                commentText: 'hhhhhh'
            }
        ],
    },
    {
        key: 2,
        name: 'shanshan(@shanshan)',
        createTime: '2019-01-28',
        content: ' ### 你好啊 position属性的值\n' +
            '##　重要的文档今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键这方面',
        comments: []
    }, {
        key: 2,
        name: 'shanshan(@shanshan)',
        createTime: '2019-01-28',
        content: ' ### 你好啊 position属性的值\n' +
            '##　重要的文档今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键这方面，\n' +
            '以前常用的快捷键也就是，刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，\n' +
            '尤其是vimium对于网页操作的这部分。以前一直有种先入为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做\n' +
            '了一些操作之后，才理解了它们为什么要叫快捷键，因为真的比用鼠标效率高了很多！希望接下来的日子里..今天过得特别充实，\n' +
            '在session中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快捷键也就是，刷新，关闭页面这些，今天听老师讲ch\n' +
            'rome的快捷键操作之后，感觉打开了新世界ession中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快捷键也就是，\n' +
            '刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，尤其是vimium对于网页操作的这部分。\n' +
            '以前一直有种先入为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做了一些操作之后，才理解了它们为什么要叫\n' +
            '快捷键，因为真的比用鼠标效率高了很多！希望接下来的日子里  ',
        comments: [
            {
                commentUser: 'muqiu',
                commentText: 'hhhhhh'
            },
            {
                commentUser: 'mucheng',
                commentText: 'llllll'
            }
        ]
    }
]

class ExcellentLog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            isCommentClick: false,
            logExtended: false,
            allLogExtended: false
        }

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


    render() {
        const customPanelStyle = {
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            color: '#F0F0F0',
        }

        const {id, isCommentClick, allLogExtended, logExtended} = this.state

        return (
            <div style={{backgroundColor: 'white'}}>
                <div style={{margin: '10px'}}>
                    <Row type='flex' justify='end'>
                        <Col span={2}>
                            <Button type='primary' ghost
                                    onClick={this.handlerAllLogExtended}>{allLogExtended ? '收起' : '展开'}日志全文</Button>
                        </Col>
                    </Row>
                </div>
                {
                    userInfo.map((user, index) =>
                        <Card
                            key={index}
                            title={user.name}
                            extra={<span>{user.createTime}</span>}
                            style={{width: '100%', marginBottom: '40px'}}
                        >
                            <div style={{background: '#F0F0F0', padding: '8px'}}>
                                {
                                    (logExtended && id === index) || allLogExtended ? <Markdown
                                        source={user.content}/> : <Markdown
                                        source={user.content.substr(0, 150) + '...'}/>
                                }
                            </div>
                            {
                                user.content.length > 100 &&
                                <div className='toggle-btn'
                                     onClick={this.toggleClickHandler.bind(this, index, logExtended)}
                                     style={{color: '#1890ff'}}>{logExtended || allLogExtended ? '收起' : '点击查看全文'}</div>
                            }
                            <Row style={{marginTop: '10px'}}>
                                <Col span={24} style={{textAlign: 'right'}}>
                                    <Button type='primary' htmlType='submit' ghost
                                            onClick={this.handlerDisplayCommentLog.bind(this, index)}>评论日志</Button>
                                    <Button type='primary' ghost style={{marginLeft: 25}}>
                                        取消优秀日志
                                    </Button>
                                </Col>
                            </Row>
                            {
                                isCommentClick && id === index ?
                                    <Comment index={index} handlerHideCommentLog={this.handlerHideCommentLog}/> : ''
                            }
                            {
                                !!user.comments.length && <Collapse className='panelHeader'
                                                                    bordered={false}
                                                                    expandIcon={({isActive}) => <Icon type='caret-right'
                                                                                                      rotate={isActive ? 90 : 0}/>}
                                >
                                    <Panel header={`${user.comments.length}条评论`} style={customPanelStyle}>
                                        {
                                            user.comments.map((comment) =>
                                                <p style={{background: '#F0F0F0'}}>{`${comment.commentUser}:${comment.commentText}`}</p>)
                                        }
                                    </Panel>
                                </Collapse>
                            }
                        </Card>
                    )}
                <div style={{marginTop: '100px'}}>
                    <Pagination defaultCurrent={1} total={50}></Pagination>
                </div>
            </div>
        )
    }
}

export default ExcellentLog