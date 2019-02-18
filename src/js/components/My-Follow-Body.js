import React, { Component } from 'react'
import { Input } from 'antd'

const Search = Input.Search;

class MyFollowBody extends Component {

    // const cardList = <Card
    //   title="Default size card"
    //   extra={<a href="#">More</a>}
    //   style={{ width: 300 }}
    // >
    //   <p>Card content</p>
    //   <p>Card content</p>
    //   <p>Card content</p>
    // </Card>

    render() {
        return (
            <div><div style={{margin: '8px 10px 0 0',fontSize: '16px',color: 'black',display: 'inline'}}>搜索并添加:</div>
            <Search
                placeholder="input here"
                enterButton
                style={{ width: 350 }}
                onSearch={value => console.log(value)}
            />
                {/*{cardList}*/}
            </div>

        );
    }
}

export default MyFollowBody;
