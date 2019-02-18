import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import MyLogBody from './My-Log-Body'
import ExcellentLog from './Excellent-Log'
import MyFollowBody from './My-Follow-Body'
import { Route, Switch } from 'react-router-dom'

const { Content } = Layout;


const content = () => (
    <Content style={{padding: '0 24px', minHeight: 280}}>
        <Switch>
            <Route exact path="/" component={MyLogBody}/>
            <Route path="/my-log" component={MyLogBody}/>
            <Route path="/follow" component={MyFollowBody}/>
            <Route path="/excellent-log" component={ExcellentLog}/>
        </Switch>
    </Content>
)

export default content