import React, { Component } from 'react'
import NewLogBox from './New-Log-Box'
import LogList from './Log-List'
import { Pagination } from 'antd'
import {connect} from 'react-redux'
import {getPageLogs} from '../action'

class MyLogBody extends Component {
  state = {
    current: 1
  }
  onChange = (page) => {
    this.setState({
      current: page
    })
    this.props.getPageLogs(page-1)
  }

  render () {
    return (
      <div>
        <NewLogBox/>
        <LogList/>
        <Pagination style={{ marginTop: '40px' }} defaultCurrent={this.state.current} total={50} onChange={this.onChange}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  getPageLogs: (page) => dispatch(getPageLogs(page))
})

export default connect(mapStateToProps,mapDispatchToProps)(MyLogBody)
