import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import { Carousel } from 'antd';
import Store from './reds/Store';
import Action from './reds/Action';
import {createStore} from 'redux';

import '../css/register.css';
import img from '../img/1.jpg';
import img1 from '../img/2.jpg';
import img2 from '../img/3.jpg';
import img3 from '../img/4.jpg';
export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:Store.getState(),
            password:""
        }
        this.changes=this.changes.bind(this);
    }
    changes(){
        this.setState({username:Store.getState()})
    }
    deng(){
        var _this=this;
       Store.dispatch(Action.username(this.refs.ipt3.value))
        //console.log(this.refs.ipt3.value)
        $.ajax({
            type:"get",
            url:'http://localhost:8000/register',
            data:{
                username:this.refs.ipt3.value,
                password:this.refs.ipt4.value
            },
            async:true,
            success:function (data) {
                if(data==1){
                    alert('登录成功')
                    _this.props.history.push('/ziliao')
                }else{
                    alert('用户名和密码不能为空')
                }
        }
    })
  }
    
    render(){
       return(
           <div>
               <div id="wrap1">
              <nav>
                <h1><img src={img}/></h1>
                <ul className="oul">
                    <li>首页</li>
                    <li>了解详情</li>
                    <li>合作伙伴</li>
                    <li>站长社区</li>
                    <li>帮助中心</li>
                </ul>
              </nav>
              </div>
              <div id="banner">
                <img src={img1}/>
              </div>
              <div className="kuai">
                 <div className="top">
                    <h2>登录</h2>
                    <NavLink to="/login"><span>注册></span></NavLink>
                  </div>
                  <input type="text" placeholder="手机号" id="put1" ref="ipt3"/><br/>
                  <input type="password" placeholder="密码" id="put2" ref="ipt4"/>
                  <NavLink to="/reset"><p>忘记密码？</p></NavLink>
                  <input type="button" value="立即登录" id="btn" onClick={this.deng.bind(this)}/>
              </div>
             
            <div id="wrap2">
             <footer>
                 <ul>
                     <li>
                         <p>联系我们</p>
                         <img src={img2}/>
                      </li>
                     <li>
                         <p>微信关注我们</p>
                         <img src={img3}/>
                         </li>
                 </ul>    
             </footer>
             </div>
           </div>
       )
    }

    componentDidMount(){
        Store.subscribe(this.changes)
   
    }
}