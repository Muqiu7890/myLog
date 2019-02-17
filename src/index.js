import React from 'react'
import ReactDOM from 'react-dom'
import '../src/css/index.css'
import 'antd/dist/antd.css'
import {Layout} from 'antd'
import {BrowserRouter} from 'react-router-dom'
import Head from './js/common/Head'
import Foot from './js/common/Foot'
import ContentArea from './js/components/Content'
import TopNav from './js/common/Top-Nav'
import MenuBar from './js/common/Menu-Bar'


const {
    Header, Content, Footer,
} = Layout;

ReactDOM.render(
    <Layout>
        <Header className="header" style={{height: '113.6px', backgroundColor: '#595959'}}>
            <Head/>
        </Header>
        <BrowserRouter>
            <Content style={{padding: '0 50px'}}>
                <TopNav/>
                <Layout style={{padding: '24px 0', background: '#fff'}}>
                    <MenuBar/>
                    <ContentArea/>
                </Layout>
            </Content>
        </BrowserRouter>
        <Footer style={{textAlign: 'center'}}>
            <Foot/>
        </Footer>
    </Layout>
    ,
    document.getElementById('root')
);