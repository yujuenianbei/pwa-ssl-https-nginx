import React, { Component } from 'react';
import * as Actions from './redux/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './index.less';
import HeaderMain from '../../components/headerSlide';
import HeaderSearch from '../../components/headerSearch';
import HeaderScan from '../../components/headerScan';


import { Carousel } from 'antd';

class Home extends Component {
    constructor(props) { //构造函数
        super(props);
        this.state = { visible: false };
    }

    componentWillMount = () => {
        this.props.getListData();
    }
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
        console.log(this.props.page.Home.videoListData)
        var bannerSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            effect: "fade",
            autoplay: true,
            autoplaySpeed: 5000
        };
        const navigationSetting = {
            dots: false,
            infinite: false,
            speed: 500,
            effect: "scrollx",
            autoplay: false
        }
        return (
            <div className="main">
                <div className="main_header">
                    <HeaderMain />
                    <HeaderSearch />
                    <HeaderScan />
                </div>
                <div className="main_banner">
                    <Carousel {...bannerSettings}>
                        <div><img src="http://192.168.1.128:3000/api/img/1553231810874.jpg" alt='' /></div>
                        <div><img src="http://192.168.1.128:3000/api/img/1553231826119.jpg" alt='' /></div>
                        <div><img src="http://192.168.1.128:3000/api/img/1553231834318.jpg" alt='' /></div>
                    </Carousel>
                </div>
                <div className="main_navigation">
                    <Carousel {...navigationSetting}>
                        <div className="main_navigation_content">
                            <ul>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-computer"></span>
                                        <span className="navigation_name">电脑</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-note_book"></span>
                                        <span className="navigation_name">笔记本</span>
                                    </div>

                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-printer1"></span>
                                        <span className="navigation_name">打印机</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-keyboard1"></span>
                                        <span className="navigation_name">键鼠</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-phone1"></span>
                                        <span className="navigation_name">电话</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-discount"></span>
                                        <span className="navigation_name">打折</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-discount_coupon"></span>
                                        <span className="navigation_name">优惠券</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-goods_analysis"></span>
                                        <span className="navigation_name">产品分析</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-pay_date"></span>
                                        <span className="navigation_name">订单</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-time_shop"></span>
                                        <span className="navigation_name">限时销售</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="main_navigation_content">
                            <ul>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-discount_coupon"></span>
                                        <span className="navigation_name">优惠券</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-goods_analysis"></span>
                                        <span className="navigation_name">产品分析</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-pay_date"></span>
                                        <span className="navigation_name">订单</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="navigation_icon icon-time_shop"></span>
                                        <span className="navigation_name">限时销售</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Carousel>
                </div>
                <div className="main_videoList">
                    <ul>
                        <li>
                            <div className="main_video">
                                <div className="main_videoImg">
                                    <img src="http://192.168.1.128:3000/api/img/1553246355983.jpg" alt='' />
                                </div>
                                <div className="main_videoUser">
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-play"></span>
                                        <span className="main_num">1234.5万</span>
                                    </div>
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-keyboard"></span>
                                        <span className="main_num">12312</span>
                                    </div>
                                </div>
                                <div className="main_videoName">
                                    1231231231
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="main_video">
                                <div className="main_videoImg">
                                    <img src="http://192.168.1.128:3000/api/img/1553246355983.jpg" alt='' />
                                </div>
                                <div className="main_videoUser">
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-play"></span>
                                        <span className="main_num">1234.5万</span>
                                    </div>
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-keyboard"></span>
                                        <span className="main_num">12312</span>
                                    </div>
                                </div>
                                <div className="main_videoName">
                                    1231231231
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="main_video">
                                <div className="main_videoImg">
                                    <img src="http://192.168.1.128:3000/api/img/1553246355983.jpg" alt='' />
                                </div>
                                <div className="main_videoUser">
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-play"></span>
                                        <span className="main_num">1234.5万</span>
                                    </div>
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-keyboard"></span>
                                        <span className="main_num">12312</span>
                                    </div>
                                </div>
                                <div className="main_videoName">
                                    1231231231
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="main_video">
                                <div className="main_videoImg">
                                    <img src="http://192.168.1.128:3000/api/img/1553246355983.jpg" alt='' />
                                </div>
                                <div className="main_videoUser">
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-play"></span>
                                        <span className="main_num">1234.5万</span>
                                    </div>
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-keyboard"></span>
                                        <span className="main_num">12312</span>
                                    </div>
                                </div>
                                <div className="main_videoName">
                                    1231231231
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="main_video">
                                <div className="main_videoImg">
                                    <img src="http://192.168.1.128:3000/api/img/1553246355983.jpg" alt='' />
                                </div>
                                <div className="main_videoUser">
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-play"></span>
                                        <span className="main_num">1234.5万</span>
                                    </div>
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-keyboard"></span>
                                        <span className="main_num">12312</span>
                                    </div>
                                </div>
                                <div className="main_videoName">
                                    1231231231
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="main_video">
                                <div className="main_videoImg">
                                    <img src="http://192.168.1.128:3000/api/img/1553246355983.jpg" alt='' />
                                </div>
                                <div className="main_videoUser">
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-play"></span>
                                        <span className="main_num">1234.5万</span>
                                    </div>
                                    <div className="main_video_usernum">
                                        <span className="main_videoIcon icon-keyboard"></span>
                                        <span className="main_num">12312</span>
                                    </div>
                                </div>
                                <div className="main_videoName">
                                    1231231231
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>ICP经营许可证：沪ICP备15039448号</p>
                    <p>Copyright © 2018 HP Development Company, L.P.</p>
                </div>

                <div className="main_end">

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        page: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListData: () => { dispatch(Actions.getList()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);