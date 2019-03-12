import React, { Component } from 'react'
import FollowList from './Follow-List'
import { Form, AutoComplete } from 'antd'
import * as request from '../constants/Fetch-Request'
import HTTP from '../constants/Http-Code'

function getUsers (name, callback) {
    (async () => {
      const res = await request.get(`/api/users/search?name=${name}`)
      if (res.status !== HTTP.OK) return
      callback(res.body)
    })()
}

class MyFollowBody extends Component {
  state = {
    dataSource: [],
  }

  onSelect = (value) => {
    console.log('onSelect', value)
  }

  handleSearch = (value) => {
    getUsers(value, (data) => {
      this.setState({
        dataSource: this.searchList(data) || []
      })
    })
  }

  searchList = (data) => {
    let searchList = []
    data.map(user => {
      searchList.push(user.name)
    })
    return searchList
  }


  render () {
    const formItemLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 },
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            {...formItemLayout}
            label='搜索并添加：'
          >
            <AutoComplete
              dataSource={this.state.dataSource}
              style={{ width: 300 }}
              onSelect={this.onSelect}
              onSearch={this.handleSearch}
              placeholder="input here"
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
