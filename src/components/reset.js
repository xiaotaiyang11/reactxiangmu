import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import { Carousel } from 'antd';
import '../css/reset.css';
import img from '../img/1.jpg';
import img1 from '../img/2.jpg';
import img2 from '../img/3.jpg';
import img3 from '../img/4.jpg';
export default class Reset extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
    }

    chong(){
        console.log(this.refs.ipt1.value)
        $.ajax({
            type:"get",
            url:'http://localhost:8000/reset',
            data:{
                username:this.refs.ipt1.value,
                password:this.refs.ipt2.value
            },
            async:true,
            success:function (data) {
                console.log(data);
               if(data==1){
                   alert("重置成功")
                   window.location.href="/register"
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
                    <h2>注册</h2>
                    <NavLink to="/register"><span>登录></span></NavLink>
                  </div>
                  <input type="text" placeholder="手机号" id="put5" ref="ipt1"/><br/>
                  <input type="password" placeholder="新密码" id="put6" ref="ipt2"/>
                  
                  <input type="button" value="重置密码" id="btn2"  onClick={this.chong.bind(this)}/>
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
}