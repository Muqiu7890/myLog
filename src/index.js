import React from 'react'
import ReactDOM from 'react-dom'
import '../src/css/index.css'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { HashRouter } from 'react-router-dom'
import Head from './js/common/Head'
import Foot from './js/common/Foot'
import Router from './js/components/Router'
import TopNav from './js/common/Top-Nav'
import MenuBar from './js/common/Menu-Bar'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './js/reducers'

const { Header, Content, Footer } = Layout

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
)
const store = createStore(reducer, enhancer)
ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <Header className="header" style={{ height: '113.6px', backgroundColor: '#595959' }}>
        <Head/>
      </Header>
      <HashRouter>
        <Content style={{ padding: '0 50px' }}>
          <TopNav/>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <MenuBar/>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Router/>
            </Content>
          </Layout>
        </Content>
      </HashRouter>
      <Footer style={{ textAlign: 'center' }}>
        <Foot/>
      </Footer>
    </Layout>
  </Provider>
  ,
  document.getElementById('root')
)