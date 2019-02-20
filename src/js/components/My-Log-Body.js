import React, {Component} from 'react'
import NewLogBox from './New-Log-Box'
import LogList from './Log-List'
import {Pagination} from 'antd'

const MyLogBody = () => (
    <div>
        <NewLogBox/>
        <LogList/>
        <Pagination style={{marginTop: '40px'}} defaultCurrent={1} total={50} />
    </div>
)

export default MyLogBody
