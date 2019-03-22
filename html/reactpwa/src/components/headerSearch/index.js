
import React, { Component } from 'react';
import './index.less';
import { Input } from 'antd';
const Search = Input.Search;
class HeaderSearch extends Component {
    render() {
        return (
            <div className="main_header_search">
                <Search
                placeholder="Search..."
                onSearch={value => console.log(value)}
                enterButton
                />
            </div>
        )
    }
}
export default HeaderSearch