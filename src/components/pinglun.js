import React from 'react';
import $ from 'jquery';

import {Button,Icon} from 'antd'
import '../css/pinlun.css'
import img1 from '../img/a.png'
import Store from './reds/Store'
import Action from './reds/Action'
import Reducer from './reds/Reducer'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Pinglun extends React.Component{
    constructor(props){
        super(props)
        this.state={
            flags:'倒序查看',
            username:'yuyu',
            pinglun:Store.getState()
        }
        this.changes=this.changes.bind(this)
    }
    changes(){
        this.setState({pinglun:Store.getState()})
    }
    componentWillMount(){
        var _this=this;
        $.ajax({
            type:"get",
            url:"http://localhost:8000/getpinglun",
            data:{keys:this.props.name},
            success:function(data){
                Store.dispatch(Action.pinglun(data))
            }
        })
    }
    render(){
       return(
           <div>
               <div className="Pingluntop">
                 <span><b>{this.state.pinglun.pinglun.length}</b>条评论</span>
                 <b onClick={this.daoxu.bind(this)}>{this.state.flags}</b>
               </div>
                {
                    this.state.pinglun.pinglun.map((item,i)=>{
                        return (
                            <div className="pinglunlist" key={i}>
                              <dl>
                                  <dt><h1><img src={img1}/></h1></dt>
                                  <dd>
                                      <div>
                                        <h5>{item.username}</h5><span>v7</span><b>{item.dates}</b>
                                      </div>
                                      <p>{item.con}</p>
                                      <div className="currenthui">
                                          <p>{item.huiuser}</p>
                                          <p>{item.huicon}</p>
                                      </div>
                                      <div className="pingx">
                                        <Icon type="heart" />
                                        <Icon type="message" onClick={this.massage.bind(this,i)} className="huifu"/>
                                        <Icon type="small-dash" />                                      
                                      </div>
                                      <div className="wenbenss">
                                        <textarea className="went" >
                                            
                                        </textarea>
                                        <Button type="primary" value={i} className='hhuipick' onClick={this.massagehuifu.bind(this,i)} data-user={item.username} data-con={item.con}>回复话题</Button>
                                      </div>
                                  </dd>
                              </dl>  
                            </div>
                        )
                    })
                }
            
           </div>
       )
    }
    daoxu(){
        var _this=this;
        if(this.state.flags=='倒序查看'){
            this.setState({flags:'正序查看'})
        }else{
            this.setState({flags:'倒序查看'})
        }
        $.ajax({
            type:'get',
            url:"http://localhost:8000/daoxu",
            async:false,
            data:{flag:_this.state.flags,keys:_this.props.name},
            success:function(data){
                Store.dispatch(Action.pinglun(data))
            }
        })
    }

    massage(i){
        var _this=this;
        if($(".huifu").parent()[i].nextSibling.style.display=='block'){
            $(".huifu").parent()[i].nextSibling.style.display='none'
        }else{
            $(".huifu").parent()[i].nextSibling.style.display='block'
        }
       
        
    }
    massagehuifu(i){
        console.log($('.hhuipick').attr('data-user'))
        console.log($(".hhuipick").parent().get(i).firstChild.value)
        $(".huifu").parent()[i].nextSibling.style.display='none'
        var date=new Date();
        var dates=date .toLocaleDateString(); //获取当前日期
        var mytime=date .toLocaleTimeString(); //获取当前时间
        var _this=this;
       $.ajax({
            type:'get',
            url:"http://localhost:8000/huipick",
            data:{username:this.state.username,dates:dates,mytime:mytime,con:$(".hhuipick").parent().get(i).firstChild.value,huiuser:$('.hhuipick').attr('data-user'),huicon:$('.hhuipick').attr('data-con'),keys:_this.props.name},
            async:false,
            success:function(data){
                if(data=='1'){
                    alert('评论成功');
                    window.location.reload()
                }
                if(data=='0'){
                    alert('内容不能为空');
                }
            }
        })
    }

    componentDidMount(){
        Store.subscribe(this.changes);
    }
}