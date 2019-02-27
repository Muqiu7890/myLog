import React, { Component } from 'react'
import NewLogBox from './New-Log-Box'
import LogList from './Log-List'
import { Pagination } from 'antd'
import {connect} from 'react-redux'
import {getPages} from '../action'

class MyLogBody extends Component {
  state = {
    current: 1
  }
  onChange = (page,pageSize) => {
    this.setState({
      current: page
    })
    this.props.getPages(page,pageSize)
  }

  render () {
    return (
      <div>
        <NewLogBox/>
        <LogList/>
        <Pagination style={{ marginTop: '40px' }} defaultCurrent={this.state.current} total={20} onChange={this.onChange}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  getPages: (page,pageSize) => dispatch(getPages(page,pageSize))
})

export default connect(mapStateToProps,mapDispatchToProps)(MyLogBody)
