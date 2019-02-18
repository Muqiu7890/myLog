import React, {Component} from 'react'
import {Button, Card, Icon, Collapse} from 'antd'
import Comment from './Comment'
import ModifyLog from './Modify-Log'
import '../../css/index.css'

const Panel = Collapse.Panel;

class MyLogBox extends Component {
    render() {
        return (
            <Card
                title="2019-2-13 日志"
                style={{marginTop: '30px'}}
                extra={<Icon type="delete"/>}
            >
                <div style={{background: '#F0F0F0', padding: '8px 8px 8px 8px'}}>
                    <div style={{padding: '10px 0 10px 17px', fontSize: '15px', background: 'white'}}>哈哈哈</div>
                </div>
                <br/>
                <Row style={{marginTop: '10px'}}>
                    <Col span={24} style={{textAlign: 'right'}}>
                        <Button type="primary" htmlType="submit" ghost
                                onClick={this.handlerModifyLog}>修改日志</Button>
                        <Button type="primary" ghost style={{marginLeft: 25}} onClick={this.handlerCommentLog}>
                            评论日志
                        </Button>
                    </Col>
                </Row>
                {
                    this.state.isCommentClick && <Comment handlerHideComment={this.handlerHideComment}/>
                }
                <Collapse className="panelHeader"
                          bordered={false}
                          defaultActiveKey={['1']}

                          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                >
                    <Panel header="1条评论" key="1" style={customPanelStyle}>
                        <p style={{background: '#F0F0F0'}}>{text}</p>
                    </Panel>
                </Collapse>
            </Card>
        );
    }

}

export default MyLogBox;

