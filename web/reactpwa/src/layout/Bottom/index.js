import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as Actions from './redux/action';
import { connect } from 'react-redux';
import './index.css';
class Bottom extends Component {
    componentWillMount() {

    }
    componentDidMount() {

    }
    ChangePage = (data) => {
        this.props.changePage(data);
    }
    ChangeBgColor = (data) => {
        return (this.props.page.Bottom.pageIndex === data) ? "#a7e7fd" : ""
    }
    render() {
        return (
            <div className="bottom_nav">
                <ul className="bottom_nav_ul">
                    <li className="bottom_nav_ul_li"><Link to='/' style={{backgroundColor: this.ChangeBgColor('home')}} onClick={()=> this.ChangePage('home')}><span className="icon-home bottom_icon"></span><p>Home</p></Link></li>
                    <li className="bottom_nav_ul_li"><Link to='/news' style={{backgroundColor: this.ChangeBgColor('news')}} onClick={()=> this.ChangePage('news')}><span className="icon-newspaper bottom_icon"></span><p>News</p></Link></li>
                    <li className="bottom_nav_ul_li"><Link to='/state' style={{backgroundColor: this.ChangeBgColor('state')}} onClick={()=> this.ChangePage('state')}><span className="icon-bubbles bottom_icon"></span><p>State</p></Link></li>
                    <li className="bottom_nav_ul_li"><Link to='/user' style={{backgroundColor: this.ChangeBgColor('user')}} onClick={()=> this.ChangePage('user')}><span className="icon-user bottom_icon"></span><p>User</p></Link></li>
                    <li className="bottom_nav_ul_li"><Link to='/setting' style={{backgroundColor: this.ChangeBgColor('setting')}} onClick={()=> this.ChangePage('setting')}><span className="icon-cog bottom_icon"></span><p>Setting</p></Link></li>
                </ul>
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
        changePage: (data) => { dispatch(Actions.pager(data)) },
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Bottom);