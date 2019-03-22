import React, { Component } from 'react';
import './index.less';
import { Drawer, Button } from 'antd';
class HeaderMain extends Component {
    state = { visible: false };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div className="main_header_slide">
                <span className="icon-menu slide_icon" onClick={this.showDrawer}></span>
                <Drawer
                    title="Basic Drawer"
                    placement="left"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Button type="primary">Button</Button>
                </Drawer>
            </div>
        )
    }
}
export default HeaderMain