import React, {Component} from 'react'
import moment from 'moment'
import {DatePicker, Input, Radio, Button, Card, Form, Row, Col} from 'antd'
import { addLog }  from "../action"
import {connect} from 'react-redux'



const {TextArea} = Input

class NewLogBox extends Component {
    state = {
        value: 1,
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err,values) => {
            console.log(values)
            if (err) {
                return
            }
            this.props.addLog(values)
        })
    }
    getNowTime = () => {
        let date = new Date();
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 18},
        }
        return <div>
                <Card
                    title='新的日志'
                    style={{marginTop: '30px'}}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item
                            {...formItemLayout}
                            label='类型'
                        >
                            {getFieldDecorator('type', { initialValue: 1 })(
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
                            {getFieldDecorator('createTime', { initialValue: moment(this.getNowTime(),'YYYY-MM-DD')})(
                                <DatePicker />
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label='总结内容'
                        >
                            {getFieldDecorator('content',{initialValue: ''})(
                            <TextArea rows={5}/>
                            )}
                        </Form.Item>
                        <Row>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type='primary' htmlType='submit' ghost>提交</Button>
                                <Button style={{marginLeft: 25}} >
                                    取消
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
    }
}

const mapStateToProps = state => ({
    // console.log(state)
})

const mapDispatchToProps = dispatch => ({

})


const NewLogBoxForm = Form.create({})(NewLogBox)

export default connect(mapStateToProps,mapDispatchToProps)(NewLogBoxForm)
