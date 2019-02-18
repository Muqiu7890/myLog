import React,{Component} from 'react'
import 'antd/dist/antd.css';
import {Layout, Card, Button, Pagination, Icon, Collapse} from 'antd';

import {Row, Col} from 'antd';
import Markdown from 'react-markdown'
import '../../css/index.css'

import Comment from './Comment'
const Panel = Collapse.Panel;





class excellentLog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logExtended: false,
            isCommentClick: false

        };

    }

    toggleClickHandler = () => {
        this.setState ({
            logExtended: !this.state.logExtended
        })
    }
    handlerCommentLog = () => {
        this.setState({
            isCommentClick: true
        })
    }

    handlerHideComment = () => {
        this.setState({
            isCommentClick: false
        })
    }






    render() {
        const text = (
            <p >
                乔静(@Muqiu):hhhhh
            </p>
        );
        const customPanelStyle = {
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            color: '#F0F0F0',
        };
        return (
            <Layout style={{backgroundColor: 'white'}}>
                <div style={{margin: '10px'}}>
                    <Row type="flex" justify="end">
                        <Col span={2}>
                            <Button type="primary" ghost>展开日志全文</Button>
                        </Col>
                    </Row>
                </div>
                <Card
                    title="shanshan(@shanshan)"
                    extra={<span>2019-01-28</span>}
                    style={{width: '100%'}}
                >
                    <div style={{background: '#F0F0F0', padding: '8px'}}>
                        {
                            this.state.logExtended ?
                                <Markdown source=" ### 你好啊 position属性的值
##　重要的文档今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键这方面，
以前常用的快捷键也就是，刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，
尤其是vimium对于网页操作的这部分。以前一直有种先入为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做
了一些操作之后，才理解了它们为什么要叫快捷键，因为真的比用鼠标效率高了很多！希望接下来的日子里..今天过得特别充实，
在session中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快捷键也就是，刷新，关闭页面这些，今天听老师讲ch
rome的快捷键操作之后，感觉打开了新世界的大门，尤其是vimium对于网页操作的这部分。以前一直有种先入为主的观念，觉得快捷键很
麻烦，没有鼠标方便，然而今天尝试了做了一些操作之后，才理解了它们为什么要叫快捷键，因为真的比用鼠标效率高了很多！希望接下来的
日子里..今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快捷键也就是，刷新，关闭页面这
些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，尤其是vimium对于网页操作的这部分。以前一直有种先入为主的观
念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做了一些操作之后，才理解了它们为什么要叫快捷键，因为真的比用鼠标效率高了
很多！希望接下来的日子里..今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快捷键也就是，刷新，关闭页
面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，尤其是vimium对于网页操作的这部分。以前一直有种先入
为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做了一些操作之后，才理解了它们为什么要叫快捷键，因为真的比用鼠
标效率高了很多！希望接下来的日子里..今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快
捷键也就是，刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，尤其是vimium对于网页操作的这部
分。以前一直有种先入为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做了一些操作之后，才理解了它们为什么要叫快
捷键，因为真的比用鼠标效率高了很多！希望接下来的日子里..今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键
这方面，以前常用的快捷键也就是，刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，尤其是v
imium对于网页操作的这部分。以前一直有种先入为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做了一些操作之后，才理解了它们为什么要叫快捷键，因为真的比用鼠标效率高了很多！希望接下来的日子里..今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快捷键也就是，刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，尤其是vimium对于网页操作的这部分。以前一直有种先入为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做了一些操作之后，才理解了它们为什么
要叫快捷键，因为真的比用鼠标效率高了很多！希望接下来的日子里..今天过得特别充实，在session中学到了很多有用的知识。尤其是在快捷键这方面，以前常用的快捷键也就是，刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，尤其是vimium对于网页操作的这部分。以前一直有种先入为主的观念，觉得快捷键很麻烦，没有鼠标方便，然而今天尝试了做了一些操作之后，才理解了它们为什么要叫快捷键，因为真的比用鼠标效率高了很多！希望接下来的日子里   "/>
                                : <Markdown
                                    source="快捷键也就是，刷新，关闭页面这些，今天听老师讲chrome的快捷键操作之后，感觉打开了新世界的大门，尤其是vimium对于网页操作的这部分"/>
                        }
                    </div>
                    <div className="toggle-btn" onClick={this.toggleClickHandler} style={{color: '#1890ff',}}>{!this.state.logExtended ? '查看全文' : '收起'}</div>
                    <Row style={{marginTop: '10px'}}>
                        <Col span={24} style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit" ghost
                                    onClick={this.handlerCommentLog}>评论日志</Button>
                            <Button type="primary" ghost style={{marginLeft: 25}} >
                                取消优秀日志
                            </Button>
                        </Col>
                    </Row>
                    {
                        this.state.isCommentClick && <Comment handlerHideComment={this.handlerHideComment}/>
                    }
                    <Collapse className="panelHeader"
                              bordered={false}
                              defaultActiveKey={['1']}
                              expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                    >
                        <Panel header="1条评论" key="1" style={customPanelStyle}>
                            <p style={{background: '#F0F0F0'}}>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
                <div style={{marginTop: '100px'}}>
                    <Pagination defaultCurrent={1} total={10}></Pagination>
                </div>
            </Layout>
        );
    }
}



export default excellentLog