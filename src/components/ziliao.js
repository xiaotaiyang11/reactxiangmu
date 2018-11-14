import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import '../css/ziliao.css';
import imga from '../img/11.jpg';
import Store from './reds/Store'
//import Action from './reds/Action'
export default class Ziliao extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:Store.getState()
        }
    }
    ti(){
        var _this=this;
        $.ajax({
            type:"get",
            url:'http://localhost:8000/ziliao',
            data:{
                username:this.state.username,
                sex:this.refs.pt1.value,
                age:this.refs.pt2.value,
                zuo:this.refs.pt3.value,
            },
           // async:true,
            success:function (data) {
                console.log(data);
                if(data==1){
                    if(_this.refs.pt1.value==""){
                    alert('资料信息不能为空')
                    }else{
                        alert('修改成功')
                        _this.props.history.push('/home')
                    }
                    
                }
                
        }
    })
    }
   render(){
       var _this=this;
       return(
           <div>
               <div id="wrapq">

               <img src={imga}/>
              
                   <fieldset>
                       <lengend>个人信息</lengend><br/>
                     
                       <span>性别:</span><input type="text" id="xing" ref="pt1"/><br/>
                       <span>年龄:</span><input type="text" id="nian" ref="pt2"/><br/>
                       <span>星座:</span><input type="text" id="zuo"  ref="pt3"/>
                       <input type="text" id="ton" value="提交"  onClick={this.ti.bind(this)}/>
                   </fieldset>
               </div>
           </div>
       )
   }
}