import React, {Component} from 'react'
import MyFollow from './My-Follow'
import {Input} from 'antd'

const Search = Input.Search;

class MyFollowBody extends Component {

    render() {
        return (
            <div>
                <div style={{margin: '8px 10px 10px 0', fontSize: '16px', color: 'black', display: 'inline'}}>搜索并添加:</div>
                <Search
                    placeholder="input here"
                    enterButton
                    style={{width: 350}}
                    onSearch={value => console.log(value)}
                />
                <div style={{marginTop: '10px'}}>
                    <MyFollow/>
                </div>
            </div>

        );
    }
}

export default MyFollowBody;
