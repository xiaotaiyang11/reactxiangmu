import React from 'react';

import {Link} from 'react-router-dom'


import '../css/aside.css'

import { Avatar,Button  } from 'antd';

import $ from "jquery";

export default class Aside extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            arr:[],
            username:"",
            sex:"",
            age:"",
            score:"",
            jy:'',
            img:"",
            xing:""


        }
       
    }
  

    render() {
        return (
            <div className="aside"> 
                <div className="asidetop">
                    <Avatar size={64} icon="user" />                                       
                    <p>{this.state.username}</p>
                    <p><em>{this.state.sex}</em><em>{this.state.age}</em><em>{this.state.xing}</em></p>
                </div>
                <div className="asidecontent">
                    <ul className="score">
                        <li>{this.state.score}</li>
                        <li>积分</li>
                    </ul>
                    <ul className="exprence">
                        <li>{this.state.jy}</li>
                        <li>经验值</li>
                    </ul>
                           
                </div>
                        
                      
                <Button type="danger">他的主页</Button>
                <Button type="danger">发消息</Button>

                        
            </div>
        )
    }


    componentWillMount(){
        var _this=this;
    //    console.log("222");
    //个人资料
       $.ajax({
           type:"get",
            url:"http://localhost:8000/aside",
            dataTypr:"json",
            success:function(data){
                //console.log(data);_this
                _this.setState({arr:data})
                
                 _this.setState({
                    username:_this.state.arr[0].username,
                    sex:_this.state.arr[0].sex,
                    age:_this.state.arr[0].age,
                    score:_this.state.arr[0].score,
                    jy:_this.state.arr[0].jy,
                    img:_this.state.arr[0].img,
                    xing:_this.state.arr[0].xing
                })  
                //console.log(_this.state.arr[0].username)
            }
       })
    }
   
}