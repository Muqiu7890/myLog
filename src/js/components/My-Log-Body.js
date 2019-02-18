import React, {Component} from 'react'
import NewLogBody from './New-Log-Box'
import LogList from './Log-List'
import {Pagination} from 'antd'

class myLogBody extends Component {

    render() {
        return (
            <div>
                <NewLogBody/>
                <LogList/>
                <Pagination style={{marginTop: '40px'}}defaultCurrent={1} total={50} />
            </div>
        );
    }
}

export default myLogBody;
