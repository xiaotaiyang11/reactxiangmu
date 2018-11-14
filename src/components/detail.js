import React from 'react';
import $ from 'jquery';

import Pinglun from './pinglun'
import '../css/detail.css'
import {Button,Icon,DatePicker} from 'antd'

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  //console.log(date, dateString);
}


export default class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'yuyu',
            detail:[],
            zan:'',
            list:[{author:'aa',tit:'畅言为什么不能设置先评后审啊！'}]
        }
    }
    render(){
        // console.log(this.state.detail)
       return(
           <div>
               <div className="contentWrap">
               <section className="content">
                  <div className="secLeft">
                   <div className="xiangLun">
                       <div className="shequtop">
                           <p>社区首页 > 社区</p>
                           <Button type="primary" size="large">发布话题</Button>
                       </div> 
                       { this.state.detail.map((item,i)=>{
                           return(
                                <div className="shequxiangqing" key={i}>
                                        <h4>{item.title}</h4>
                                        <p>{item.date} 凌晨12:00 {item.type}<span><Icon type="eye" theme="filled" />{item.num1+1}</span></p>
                                        <div className="neirongs">
                                            <p>{item.con}</p>
                                        </div>
                                        <div className="someDiffshezhi">
                                            <a href='#'>分享</a>
                                            <p><span onClick={this.zan.bind(this)} ref='ipts'><Icon type="heart"/>赞</span>
                                            <span><Icon type="message" />回复</span>
                                            <span><Icon type="star" />收藏</span>
                                            <span><Icon type="small-dash" /></span>
                                            </p>
                                        </div>
                                </div>
                                   
                                )
                            })
                       }
                        <Pinglun name={this.props.match.params.id}/>
                       
                   </div>
                   <div className="huifupinglun">
                      <h3>回复话题</h3>
                      {/* <DatePicker onChange={onChange} /> */}
                      <textarea></textarea>
                      <Button type="primary" onClick={this.pinlun.bind(this)}>回复</Button>
                    </div>
                    </div>
                   <div className="secRight">右边</div>
               </section>
               </div>
           </div>
       )
    }

    zan(){
        // this.setState({zan:this.refs.ipts.innerText})
        if(this.refs.ipts.innerText=='赞'){
            this.refs.ipts.style.color='red'
        }
    }

    pinlun(){
        var date=new Date();
        var dates=date .toLocaleDateString(); //获取当前日期
        var mytime=date .toLocaleTimeString(); //获取当前时间
        var _this=this;
        $.ajax({
            type:"get",
            url:"http://localhost:8000/pinglun",
            data:{username:_this.state.username,dates:dates,con:$('textarea').val(),mytime:mytime,keys:_this.props.match.params.id},
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
    componentWillMount(){
        var _this=this;
       $.ajax({
           type:"get",
           url:'http://localhost:8000/getDetail',
           data:{id:_this.props.match.params.id},
           success:function(data){
               _this.setState({detail:data})
           }
       })
        
    }
}