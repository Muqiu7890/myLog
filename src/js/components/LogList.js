import React, { Component } from 'react';
import { DatePicker,Input,Radio,Button,Card,Form,Row,Col,Icon } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

class myLogBody extends Component {

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
                        <Button style={{ marginLeft: 25 }} onClick={this.handleReset}>
                            评论日志
                        </Button>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default myLogBody;