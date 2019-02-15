import React, { Component } from 'react';
import { DatePicker,Input,Radio,Button,Card,Form,Row,Col,Icon } from 'antd';
import moment from 'moment';
import Comment from './Comment';
import '../../css/index.css'

const { TextArea } = Input;

class myLogBody extends Component {
    constructor(props) {
        super(props);

        this.commentBox = React.createRef;
        this.handlerCommentLog = this.handlerCommentLog.bind(this);
    }

    componentDidMount() {
        console.log(this.commentBox);
    }
    handlerCommentLog() {
        //alert('ffff');
    //    this.commentBox.current.style.dispaly = 'block';
       //console.log(this.commentBox);
    }

    render() {
        return (
            <Card
                title="2019-2-13 日志"
                style={{marginTop: '30px'}}
                extra={<Icon type="delete" />}
            >
                <TextArea placeholder="哈哈哈" autosize disabled/>
                <br/>
                <Row style={{marginTop: '10px'}}>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit" ghost>修改日志</Button>
                        <Button style={{ marginLeft: 25 }} onClick={this.handlerCommentLog}>
                            评论日志
                        </Button>
                    </Col>
                </Row>
                <div className="commentBox" ref={this.commentBox}>
                    <Comment/>
                </div>
            </Card>
        );
    }
}

export default myLogBody;