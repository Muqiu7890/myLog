import React, {Component} from 'react'
import {DatePicker, Input, Radio, Button, Card, Form, Row, Col, Icon, Collapse } from 'antd'
import moment from 'moment'
import Comment from './Comment'
import ModifyLog from './Modify-Log'

const Panel = Collapse.Panel;

class myLogBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCommentClick: false,
            isModifyClick: false
        };

        this.handlerCommentLog = this.handlerCommentLog.bind(this);
        this.handlerHideComment = this.handlerHideComment.bind(this);
        this.handlerModifyLog = this.handlerModifyLog.bind(this);
        this.handlerHideModifyLog = this.handlerHideModifyLog.bind(this);
    }

    handlerCommentLog() {
        this.setState({
            isCommentClick: true
        })
    }

    handlerHideComment() {
        this.setState({
            isCommentClick: false
        })
    }

    handlerModifyLog() {
        this.setState({
            isModifyClick: true
        })
    }

    handlerHideModifyLog() {
        this.setState({
            isModifyClick: false
        })
    }


    render() {
        const text = (
            <p style={{ paddingLeft: 24 }}>
                hahaha
            </p>
        );
        const customPanelStyle = {
            // background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            color: 'red'
            // overflow: 'hidden',
        };
        return (
                !this.state.isModifyClick ?
                    <Card
                        title="2019-2-13 日志"
                        style={{marginTop: '30px'}}
                        extra={<Icon type="delete"/>}
                    >
                        <div style={{background: '#F0F0F0', padding: '8px 8px 8px 8px'}}>
                            <div style={{padding: '10px 0 10px 17px', fontSize: '15px', background: 'white'}}>哈哈哈</div>
                        </div>
                        <br/>
                        <Row style={{marginTop: '10px'}}>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type="primary" htmlType="submit" ghost
                                        onClick={this.handlerModifyLog}>修改日志</Button>
                                <Button style={{marginLeft: 25}} onClick={this.handlerCommentLog}>
                                    评论日志
                                </Button>
                            </Col>
                        </Row>
                        {
                            this.state.isCommentClick && <Comment handlerHideComment={this.handlerHideComment}/>
                        }
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}

                            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                        >
                            <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                                <p style={{background: 'gray'}}>{text}</p>
                                <p style={{background: 'gray'}}>{text}</p>
                                <p style={{background: 'gray'}}>{text}</p>
                            </Panel>

                        </Collapse>
                    </Card> : <ModifyLog handlerHideModifyLog={this.handlerHideModifyLog}/>
        );
    }
}

export default myLogBody;