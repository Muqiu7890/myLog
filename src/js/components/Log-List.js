import React, { Component } from 'react';
import { DatePicker,Input,Radio,Button,Card,Form,Row,Col,Icon } from 'antd';
import moment from 'moment';
import Comment from './Comment';

class myLogBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClick: false
        };

        this.handlerCommentLog = this.handlerCommentLog.bind(this);
        this.handlerHideComment = this.handlerHideComment.bind(this);
    }

    handlerCommentLog() {
        this.setState({
            isClick: true
        })
    }

    handlerHideComment() {
        this.setState({
            isClick: false
        })
    }

    render() {
        return (
            <Card
                title="2019-2-13 日志"
                style={{marginTop: '30px'}}
                extra={<Icon type="delete" />}
            >
                <div style={{background: '#F0F0F0',padding: '8px 8px 8px 8px'}}>
                <div style={{padding: '10px 0 10px 17px',fontSize: '15px',background: 'white'}}>哈哈哈</div>
                </div>
                <br/>
                <Row style={{marginTop: '10px'}}>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit" ghost>修改日志</Button>
                        <Button style={{ marginLeft: 25 }} onClick={this.handlerCommentLog}>
                            评论日志
                        </Button>
                    </Col>
                </Row>
                {
                    this.state.isClick && <Comment handlerHideComment={this.handlerHideComment}/>
                }
            </Card>
        );
    }
}

export default myLogBody;