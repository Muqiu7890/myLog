import React from 'react'
import 'antd/dist/antd.css'
import MyLogBody from './My-Log-Body'
import ExcellentLog from './Excellent-Log'
import MyFollowBody from './My-Follow-Body'
import { Route, Switch } from 'react-router-dom'
import FolloweeLog from './Followee-Log'

const Router = () => (
  <Switch>
    <Route exact path='/' component={MyLogBody}/>
    <Route path='/my-log' component={MyLogBody}/>
    <Route exact path='/follow' component={MyFollowBody}/>
    <Route exact path='/follow/:id' component={FolloweeLog}/>
    <Route path='/excellent-log' component={ExcellentLog}/>
  </Switch>
)

export default Router