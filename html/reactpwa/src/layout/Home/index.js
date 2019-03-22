import React, { Component } from 'react';
import './index.css';
import { Button } from 'antd';
class Home extends Component {
    render() {
        return (
            <div className="main">
                <div className="main_header">
                    <div className="main_header_slide">
                        <span className="icon-menu slide_icon"></span>
                        <div className="header_slide_content">
                            <Button type="primary">Button</Button>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
export default Home