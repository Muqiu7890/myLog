import React, { Component } from 'react'
import moment from 'moment'
import { DatePicker, Input, Radio, Button, Card, Form, Row, Col } from 'antd'
import { addLog } from '../action'
import { connect } from 'react-redux'

const { TextArea } = Input
const format = 'YYYY-MM-DD'

class NewLogBox extends Component {
  state = {
    value: 1,
    create_time: this.getNowTime
  }
  typeChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  timeChange = (data, dateString) => {
    this.setState({
      create_time: dateString
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      values.create_time = moment(this.state.create_time).format(format)
      values.user_id=6
      console.log("6666",values)
      this.props.addLog(values)
      this.props.form.setFieldsValue({
        content: ''
      })

    })
  }
  getNowTime = () => {
    let date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
  handleReset = () => {
    this.props.form.resetFields();
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    }
    return <div>
      <Card
        title='新的日志'
        style={{ marginTop: '30px' }}
      >
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            {...formItemLayout}
            label='类型'
          >
            {getFieldDecorator('type', { initialValue: 1 })(
              <Radio.Group onChange={this.typeChange}>
                <Radio value={1}>日志</Radio>
                <Radio value={2}>目标</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label='日期'
          >
            {getFieldDecorator('create_time', { initialValue: moment(this.getNowTime(), format) })(
              <DatePicker onChange={this.timeChange}/>
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label='总结内容'
          >
            {getFieldDecorator('content', { initialValue: '' })(
              <TextArea rows={5}/>
            )}
          </Form.Item>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type='primary' htmlType='submit' ghost>提交</Button>
              <Button style={{ marginLeft: 25 }} onClick={this.handleReset}>
                取消
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  }
}

const mapStateToProps = state => ({ logs: state.log })

const mapDispatchToProps = dispatch => ({
  addLog: (log) => dispatch(addLog(log))
})

const NewLogBoxForm = Form.create({})(NewLogBox)

export default connect(mapStateToProps, mapDispatchToProps)(NewLogBoxForm)
