import React from 'react'
import 'antd/dist/antd.css';
import {Layout ,Card,Button,Pagination} from 'antd';
import { Row, Col } from 'antd';

import { Input } from 'antd';

const { TextArea } = Input;


const excellentLog = () => (
    <Layout style={{backgroundColor: 'white'}}>
        <div style={{margin: '10px'}}>
            <Row type="flex" justify="end">
                <Col span={2}>
                    <Button>Default</Button>
                </Col>
            </Row>
        </div>

        <Card
            title="shanshan(@shanshan)"
            extra={<span>2019-01-28</span>}
            style={{width: '100%'}}
        >
            <p>Card content</p>
            <TextArea placeholder="呵呵哈哈哈或" autosize={{minRows: 2, maxRows: 6}} disabled/>

        </Card>
        <div style={{marginTop: '100px'}}>
            <Pagination defaultCurrent={1} total={50}></Pagination>
        </div>
    </Layout>

);

export default excellentLog