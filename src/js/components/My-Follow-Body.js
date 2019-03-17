import React, { Component } from 'react'
import FollowList from './Follow-List'
import { Form, AutoComplete, message } from 'antd'
import * as request from '../constants/Fetch-Request'
import HTTP from '../constants/Http-Code'
import { addFollowUser, getAllFollowedUsers } from '../action/Follows'
import { connect } from 'react-redux'

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
    getUsers(value, (data) => {
      const newFollow = { user_id: 6, followed_id: data[0].id }
      const allCurrentFollowUser = []
      for (let i = 0; i < this.props.follows.length; i++) {
        allCurrentFollowUser.push(this.props.follows[i].logs[0].user_id)
      }
      if (allCurrentFollowUser.indexOf(data[0].id) >= 0) {
        message.warning('请勿重复关注')
      } else {
        this.props.addFollowUser(newFollow)
        message.success('关注成功')
      }

    })
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

const mapStateToProps = state => ({
  follows: state.followed
})
const mapDispatchToProps = dispatch => ({
  addFollowUser: (newFollow) => dispatch(addFollowUser(newFollow))
})

MyFollowBody = Form.create({})(MyFollowBody)
export default connect(mapStateToProps, mapDispatchToProps)(MyFollowBody)
