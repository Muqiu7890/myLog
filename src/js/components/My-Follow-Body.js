import React, { Component } from 'react'
import { Input } from 'antd'

const Search = Input.Search;

class MyFollowBody extends Component {

    // const cardList = ``

    render() {
        return (
            <div><div style={{margin: '8px 10px 0 0',fontSize: '16px',color: 'black',display: 'inline'}}>搜索并添加:</div>
            <Search
                placeholder="input here"
                enterButton
                style={{ width: 350 }}
                onSearch={value => console.log(value)}
            />
            </div>

        );
    }
}

export default MyFollowBody;
