import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {BrowserRouter} from 'react-router-dom'
import Head from './js/common/Head'
import Foot from './js/common/Foot';
import Content from './js/components/Content';


// const {
//    Content,  Sider,
// } = Layout;

ReactDOM.render(
    <Layout >
        <Head/>
        <BrowserRouter>
        <Content/>
        </BrowserRouter>
        
        <Foot/>
    </Layout>,
    document.getElementById('root')
);