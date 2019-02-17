import React, {Component} from 'react'
import NewLogBody from './NewLogBox'
import LogList from './LogList'

class myLogBody extends Component {

    render() {
        return (
            <div>
                <NewLogBody/>
                <LogList/>
            </div>
        );
    }
}

export default myLogBody;
