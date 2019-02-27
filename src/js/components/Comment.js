import React, { Component } from 'react'
import { Input,Button,Form,Row,Col } from 'antd'

const { TextArea } = Input

class Comment extends Component {

    hideComment = () => {
        this.props.handlerHideCommentLog(this.props.index)
    }

    render() {
        //const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 18},
        }
        return (
            <Form onSubmit={this.handleSubmit} style={{marginTop: '20px'}}>
                <Form.Item
                    {...formItemLayout}
                    label='评论'
                >
                    <TextArea rows={5} placeholder='@TA'/>
                    <Row>
                        <Col span={7}>
                            <Button type='primary' htmlType='submit' ghost>提交</Button>
                            <Button style={{marginLeft: 25}} onClick={this.hideComment}>
                                取消
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        )
    }
}

Comment = Form.create({})(Comment)
export default Comment