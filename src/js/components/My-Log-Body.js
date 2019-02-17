import React, {Component} from 'react'
import NewLogBody from './New-Log-Box'
import LogList from './Log-List'

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
