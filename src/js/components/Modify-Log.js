import React, { Component } from 'react'
import {Button, Card, Col, DatePicker, Input, Radio, Row, Form} from 'antd'

const {TextArea} = Input;

class ModifyLog extends Component {
    state = {
        value: 1,
    };
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 18},
        };
        const config = {
            rules: [{type: 'object', message: 'Please select time!'}],
        };
        return (
            <div>
                <Card
                    title="修改成长日志"
                    style={{marginTop: '30px'}}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item
                            {...formItemLayout}
                            label="类型"
                        >
                            {getFieldDecorator('radio-group', { initialValue: 1 })(
                                <Radio.Group onChange={this.onChange}>
                                    <Radio value={1}>日志</Radio>
                                    <Radio value={2}>目标</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="日期"
                        >
                            {getFieldDecorator('date-picker', config)(
                                <DatePicker/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="总结内容"
                        >
                            <TextArea rows={5}/>
                        </Form.Item>
                        <Row>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type="primary" htmlType="submit" ghost>提交</Button>
                                <Button style={{marginLeft: 25}} onClick={this.props.handlerHideModifyLog}>
                                    取消
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        );
    }
}

ModifyLog = Form.create({})(ModifyLog);

export default ModifyLog;
