import React from 'react';

import {Link} from 'react-router-dom'
import {Icon } from 'antd';

import '../css/top.css'


import Store from "./reds/Store"

import Action from "./reds/Action"


export default class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            str:Store.getState()
        }
        this.change=this.change.bind(this);
       
    }
  
    search(){
        //var _this=this;
        Store.dispatch(Action.searchItem(this.refs.ipt.value))
       
     //this.props.history.push('/search');

        window.location.href='/search'
         //console.log(this.refs.ipt.value)
         console.log("aa")
    }



    change(){
        
        this.setState({str:Store.getState()})
    }
    render() {
        return (
            <div history={this.props.history}>
               <div className="top">
                    <ul>
                        <li><Link to='/'><Icon type="diff" />快站-----{this.state.str.str}</Link></li>
                        <li><Link to='/'>登录</Link></li>
                        <li><Link to='/'>注册</Link></li>
                    </ul>

               </div>
                <div className="sou">
                    <div className="search">
                        <p><Icon type="question-circle" />问题求助</p>

                        <div className="sea">
                            <input type="text" ref="ipt"/>
                            <Icon type="search"  onClick={this.search.bind(this)}/> 
                        </div>
                        {/* <Search
                            placeholder="请输入搜索内容"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                            onClick={this.search.bind(this)}
                            ref="ipt"
                            
                        /> */}
                        
                    </div>
                </div>
                <div className="meau"> 
                    <ul>
                        <li><Link to="/">全部</Link></li>
                        <li><Link to="/">电商</Link></li>
                        <li><Link to="/">公众号</Link></li>
                        <li><Link to="/">社区</Link></li>
                        <li><Link to="/">快文</Link></li>
                        <li><Link to="/">云商店</Link></li>
                        <li><Link to="/">页面</Link></li>
                        <li><Link to="/">审核认证</Link></li>
                        <li><Link to="/">畅言</Link></li>
                        <li><Link to="/">快投票</Link></li>
                        <li><Link to="/">开放程序</Link></li>
                        <li><Link to="/">小程序</Link></li>
                        <li><Link to="/">联系我们</Link></li>
                    </ul>
                </div>

              
            </div>
        )
    }
    componentDidMount(){
        Store.subscribe(this.change)
    }
}