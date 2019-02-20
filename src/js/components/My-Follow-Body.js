import React, {Component} from 'react'
import FollowList from './Follow-List'
import {Form, Input} from 'antd'

const Search = Input.Search

class MyFollowBody extends Component {
    render() {
        const formItemLayout = {
            labelCol: {span: 2},
            wrapperCol: {span: 8},
        }
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        {...formItemLayout}
                        label='搜索并添加：'
                    >
                        <Search
                            placeholder='input search text'
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </Form.Item>
                </Form>
                <FollowList/>
            </div>

        )
    }
}

MyFollowBody = Form.create({})(MyFollowBody)
export default MyFollowBody
