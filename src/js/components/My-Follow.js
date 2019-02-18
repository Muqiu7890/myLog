import React, {Component} from 'react'
import {Input, Card, Avatar,} from 'antd'

const {Meta} = Card;

const Search = Input.Search;

const userInfo = [
    {
        nickname: '秦麟@(秦小麟)',
        logNumber: 1,
        updateTime: '2019-02-15'
    },
    {
        nickname: '秦麟@(秦小麟)',
        logNumber: 1,
        updateTime: '2019-02-15'
    },
    {
        nickname: '秦麟@(秦小麟)',
        logNumber: 1,
        updateTime: '2019-02-15'
    },
    {
        nickname: '秦麟@(秦小麟)',
        logNumber: 1,
        updateTime: '2019-02-15'
    },
    {
        nickname: '秦麟@(秦小麟)',
        logNumber: 1,
        updateTime: '2019-02-15'
    }
];

class MyFollowBody extends Component {

    render() {
        return (
            userInfo.map((item,index) =>
                <Card
                    title={
                        <div style={{margin: '0 auto', textAlign: 'center', marginTop: '15px'}}>
                            <Avatar style={{color: '#f56a00', backgroundColor: '#fde3cf', fontSize: '16px'}}
                                    size={50}>{item.nickname[0]}</Avatar>
                            <p>{item.nickname}</p>
                        </div>
                    }
                    headStyle={{color: '#6C6C6C', fontSize: '20px'}}
                    style={{width: 500, margin: '10px 20px 10px 0',float: 'left'}}
                >
                    <p>已更新日志：{item.logNumber}</p>
                    <p>最近一次更新时间：{item.updateTime}<span style={{color: '#46A3FF', float: 'right'}}>取消关注</span></p>
                </Card>
            )
        );
    }
}

export default MyFollowBody;
