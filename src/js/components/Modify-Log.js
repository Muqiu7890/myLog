import React, { Component } from 'react'
import {Button, Card, Col, DatePicker, Input, Radio, Row, Form} from 'antd'
import moment from 'moment'
import {updateLog} from '../action'
import {connect} from 'react-redux'


const {TextArea} = Input

class ModifyLog extends Component {
    state = {
        value: 1,
        create_time: this.props.log.create_time
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (err) {
                return
            }
            values.create_time = moment(this.state.create_time).format('YYYY-MM-DD')
            // console.log('values',values)
            this.props.updateLog(this.props.log.id,values)
            this.props.handlerHideModifyLog(this.props.index)
        })
    }
    timeChange = (data, dateString) => {
        this.setState({
            create_time: dateString
        })
    }
    hideModifyLog = () => {
        this.props.handlerHideModifyLog(this.props.index)
    }

    render() {
        const {log} = this.props;
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 18},
        }
        return (
            <div>
                <Card
                    title='修改成长日志'
                    style={{marginTop: '30px'}}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item
                            {...formItemLayout}
                            label='类型'
                        >
                            {getFieldDecorator('type', { initialValue: log.type })(
                                <Radio.Group onChange={this.onChange}>
                                    <Radio value={1}>日志</Radio>
                                    <Radio value={2}>目标</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label='日期'
                        >
                            {getFieldDecorator('create_time', {initialValue: moment(log.create_time)})(
                                <DatePicker onChange={this.timeChange}/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label='总结内容'
                        >
                            {getFieldDecorator('content', { initialValue: log.content })(
                              <TextArea rows={5}/>
                            )}
                        </Form.Item>
                        <Row>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type='primary' htmlType='submit' ghost>提交</Button>
                                <Button style={{marginLeft: 25}} onClick={this.hideModifyLog}>
                                    取消
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({ logs: state.log })

const mapDispatchToProps = dispatch => ({
    updateLog: (id,log) => dispatch(updateLog(id,log))
})

ModifyLog = Form.create({})(ModifyLog)

export default connect(mapStateToProps,mapDispatchToProps)(ModifyLog)
