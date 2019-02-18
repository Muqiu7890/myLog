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
        nickname: '乔晶@(Muqiu)',
        logNumber: 1,
        updateTime: '2019-02-23'
    },
    {
        nickname: '秦麟@(hhh)',
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

class MyFollow extends Component {

    render() {
        return (
            <div>kkk</div>

            // {/*<Row type="flex" justify="space-around" align="middle">*/}
            //     {/*userInfo.map((user) =>*/}
            //     {/*<Card*/}
            //         {/*title={*/}
            //             {/*<div style={{margin: '0 auto', textAlign: 'center', marginTop: '15px'}}>*/}
            //                 {/*<Avatar style={{color: '#f56a00', backgroundColor: '#fde3cf', fontSize: '16px'}}*/}
            //                         {/*size={50}>{user.nickname[0]}</Avatar>*/}
            //                 {/*<p>{user.nickname}</p>*/}
            //             {/*</div>*/}
            //         {/*}*/}
            //         {/*headStyle={{color: '#6C6C6C', fontSize: '20px'}}*/}
            //         {/*style={{width: 500, margin: '10px 20px 10px 0', float: 'left'}}*/}
            //     {/*>*/}
            //         {/*<p>已更新日志：{user.logNumber}</p>*/}
            //         {/*<p>最近一次更新时间：{user.updateTime}<span style={{color: '#46A3FF', float: 'right'}}>取消关注</span></p>*/}
            //     {/*</Card>*/}
            //     {/*)*/}
            //
            //
            //
            //     {/*<Col span={4}><DemoBox >col-4</DemoBox></Col>*/}
            // {/*</Row>*/}


    );
    }
}

export default MyFollow;
