import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import '../css/home.css'
import img1 from '../img/home1.png'
import img2 from '../img/home2.png'
import { Tabs ,Icon ,Pagination } from 'antd';

import Store from './reds/Store';
import Action from './reds/Action';
import Reducer from './reds/Reducer'
import { get } from 'http';

const TabPane = Tabs.TabPane;


export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            type:[],
            arr:[],
            list:Store.getState().list,
            username:Store.getState().username,
            count:1,
            
        }     
        this.changes=this.changes.bind(this)
    }
   
    changes(){
        this.setState({list:Store.getState().list})
        this.setState({username:Store.getState().username})
    }

   fabu(){
       var _this=this;
    //    console.log(this.state.username)
       var title=this.refs.ipt.value;
       var con=this.refs.tet.value;
       var date=new Date();
       var dates=date .toLocaleDateString(); //获取当前日期
        var mytime=date .toLocaleTimeString(); //获取当前时间
        var str=""
        for(let i=0;i<this.state.type.length;i++){
            str = str+"#"+this.state.type[i]+"  "
        }
        if(this.state.username !=""){
            if(title=="" || con==""){
                alert("内容不能为空")
            }else{
                    $.ajax({
                        type:'get',
                        url:"http://localhost:8000/fabu",
                        data:{author:_this.state.username,title:title,con:con,date:dates,time:mytime,type:str,num1:0,num2:0},
                        success:function(data){
                            console.log(data)
                            if(data=="1"){
                                alert("发布成功");
                                // _this.refs.ipt.value='';
                                // _this.refs.tet.value='';
                                 window.location.reload();
                                // _this.props.history.push('/home')
                            }else{
                                alert("请重试")
                            }
                        }

                    })
            }
        }else{
            alert("请先登录！")
        }
   }

   show(){
        $("#motaiwrap").css({display:"block"});

   }
   close(){
        $("#motaiwrap").css({display:"none"});
        this.setState({type:[]})
    }
    que(){
        $("#motaiwrap").css({display:"none"});
    }
    choose(t){
        var arr = this.state.type;
        this.setState({count:this.state.count+1});
			if(this.state.count<4){
               if(this.refs[t].className=='active'){
                    this.refs[t].className=''
                    this.setState({count:this.state.count-1});
                    var array = arr.indexOf(this.refs[t].innerHTML);
                    arr.splice(array,1)
                    this.setState({type:arr})

                 }
                    else{
                        this.refs[t].className="active";
                        arr.push(this.refs[t].innerHTML);
                        this.setState({type:arr})
                        console.log(this.state.type)
                    }	
            }else if(this.state.count==4 && this.refs[t].className=='active'){
                    this.refs[t].className=''
                    this.setState({count:this.state.count-1});
                    var array = arr.indexOf(this.refs[t].innerHTML);
                    arr.splice(array,1)
                    this.setState({type:arr})
            }else{
                alert('不能超过三个标签');
                if(this.state.count>4){
                    this.setState({count:this.state.count-1});
                } 
            }           
    }




    render(){
        var _this = this;
        // console.log(Store.getState().list)
        // console.log(Store.getState().username)
       return(
           <div className='bodywrap'>
              <div className="con">
                <div className="left">
                    <a href="#" className="top"><img src={img1} /></a>
                    <div className="conn">
                       <Tabs defaultActiveKey="1">
                            <TabPane tab="最新发布" key="1">
                                <div className="listwrap">
                                {
                                    this.state.arr.map((item,i)=>{
                                        return (   
                                            <div className="list" key={i}>
                                                <img src={img2} />
                                                <dl>
                                                    <dt><Link to={"/detail/"+item._id}>{item.title}</Link></dt>
                                                    <dd>
                                                        <div className="ll"><span>{item.author}</span><span>{item.date}</span><span>{item.type}</span></div>
                                                        <div className="rr"><span><Icon type="eye" />{item.num1}</span><span><Icon type="message" />{item.num2}</span></div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                <Pagination defaultCurrent={1} total={this.state.arr.length} pageSize={3}/>
                             
                            </TabPane>
                            <TabPane tab="最新回复" key="2">
                                <div className="listwrap">
                                {
                                    this.state.arr.map((item,i)=>{
                                        return (   
                                            <div className="list" key={i}>
                                                <img src={img2} />
                                                <dl>
                                                    <dt><Link to={"/detail/"+item._id}>{item.title}</Link></dt>
                                                    <dd>
                                                        <div className="ll"><span>{item.author}</span><span>{item.date}</span><span>{item.type}</span></div>
                                                        <div className="rr"><span><Icon type="eye" />{item.num1}</span><span><Icon type="message" />{item.num2}</span></div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </TabPane>
                            <TabPane tab="最热话题" key="3">
                                <div className="listwrap">
                                    {
                                        this.state.arr.map((item,i)=>{
                                            return (   
                                                <div className="list" key={i}>
                                                    <img src={img2} />
                                                    <dl>
                                                        <dt><Link to={"/detail/"+item._id}>{item.title}</Link></dt>
                                                        <dd>
                                                            <div className="ll"><span>{item.author}</span><span>{item.date}</span><span>{item.type}</span></div>
                                                            <div className="rr"><span><Icon type="eye" />{item.num1}</span><span><Icon type="message" />{item.num2}</span></div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>

                    <div className="fabu">
                            <h4>发布话题</h4>
                            <input type="text" placeholder="问题描述" ref="ipt" /> 
                            <div className="texta">
                                <textarea ref="tet"></textarea>
                                <p onClick={this.show.bind(this)}>添加标签+</p>
                                <div id="motaiwrap">
                                    <div id="motai">
                                        <h4>选择标签<span onClick={this.close.bind(this)}>X</span></h4>
                                        <ul>
                                            <li onClick={this.choose.bind(this,'t1')} ref="t1">电商</li>
                                            <li onClick={this.choose.bind(this,'t2')} ref="t2">公众号</li>
                                            <li onClick={this.choose.bind(this,'t3')} ref="t3">社区</li>
                                            <li onClick={this.choose.bind(this,'t4')} ref="t4">快文</li>
                                            <li onClick={this.choose.bind(this,'t5')} ref="t5">云商店</li>
                                            <li onClick={this.choose.bind(this,'t6')} ref="t6">页面</li>
                                            <li onClick={this.choose.bind(this,'t7')} ref="t7">畅言</li>
                                            <li onClick={this.choose.bind(this,'t8')} ref="t8">快投票</li>
                                            <li onClick={this.choose.bind(this,'t9')} ref="t9">开放平台</li>
                                            <li onClick={this.choose.bind(this,'t0')} ref="t0">小程序</li>
                                            <li onClick={this.choose.bind(this,'tt')} ref="tt">联系我们</li>
                                        </ul>
                                        <button id="que" onClick={this.que.bind(this)}>确认</button>
                                    </div>
                                </div>
                            </div>
                            
                            <button  onClick={this.fabu.bind(this)}><Icon type="cloud-upload" />发表新话题</button>


                    </div>
                </div>

                <div className="right">
                        <div className="gg">
                            <h5>社区公告</h5>
                            <div>为了创造良好的社区氛围，有效率地处理站长反馈，现对发帖规范和版规进行如下规范：简要文字说明发生的问题并截图（录屏）提供站点ID提供站点链接备注：不添加站点ID和站点链接的反馈一律删除！！！望周知！！！快站团队2017.12.12</div>
                        </div>
                        <div className="mm">
                            <h5>热门话题</h5>
                            <ol>
                                <li>九月五丨快站长大成人，自立门户秘笈</li>
                                <li>【功能更新】快投票功能更新&amp;bug修复周报10.21-10.27</li>
                                <li>搜狐快站·由你做主——有奖调研活动</li>
                                <li>【重要】关于公众号IP白名单的说明</li>
                                <li>【iphone越狱之后安装快站APP教程】很多站长发现iphone越狱之后还是无法下载快站APP，以下教程为越狱iphone安装快站APP教程。第一步：添加威锋源（关于添加威锋源，请查看：http://jingyan.baidu.com/article/4ae03de32f9d9c3eff9e6b39.html）</li>
                            </ol>
                        </div>
                </div>
              </div>
           </div>
       )
    }


    componentDidMount(){
        Store.subscribe(this.changes)
        var _this=this;
        $.ajax({
            type:"get",
            url:'http://localhost:8000/getData',
            success:function(data){
                // console.log(data);
                _this.setState({arr:data});
                // console.log(_this.state.arr);
                Store.dispatch(Action.getList(data))
                Store.dispatch(Action.username("杰杰"))
            }
        })
    }
}




//          var oUl = document.getElementById("newsList");
// 			var oPage = document.getElementById("pages");
// 			var aLi = oPage.children;
// 			var oNums = document.getElementsByClassName("pageNum")[0];
// 			//分页接口  pages.php?pagenum=2&numsperpage=20
// 			var curIndex = 0;//当前页
// 			ajax("data.json",showList);
			
// 			function showList(data){
// 				data = JSON.parse(data);
// 				var totalNums = data.length;
// 				var numsPerPage = 5;
				
// 				var pages = Math.ceil(totalNums/numsPerPage);
// 				//显示具体的数字页码
// 				var str = "";
// 				for(let i = 0; i < pages; i++){
// 					str += `<span>${i+1}</span>`;
// 				}
// 				oNums.innerHTML = str;
				
// 				//默认显示第一页内容
// 				show(curIndex);
				
// 				//首页
// 				aLi[0].onclick = function(){
// 					curIndex = 0;
// 					show(curIndex);
// 				}
				
// 				//上一页
// 				aLi[1].onclick = function(){
// 					curIndex--;
// 					if(curIndex <= 0){
// 						curIndex = 0;
// 					}
// 					show(curIndex)
					
// 				}
				
// 				//下一页
// 				aLi[aLi.length-2].onclick = function(){
// 					curIndex++;
// 					if(curIndex >= pages-1){
// 						curIndex = pages-1;
// 					}
// 					show(curIndex)
					
// 				}
				
// 				//尾页
// 				aLi[aLi.length-1].onclick = function(){
// 					curIndex = pages-1;
// 					show(curIndex)
					
// 				}
				
// 				//具体页
				
// 				var aNums = oNums.children;
				
// 				for(let i = 0; i < aNums.length; i++){
// 					aNums[i].onclick = function(){
// 						curIndex = i;
// 						show(curIndex);
// 					}
// 				}
				
				
// 				function show(index){
// 					var str1 = "";
// 					for(let i = index*numsPerPage; i < Math.min(totalNums,(index+1)*numsPerPage); i++){
// 						str1 += `<li>${data[i]}</li>`;
// 					}
// 					oUl.innerHTML = str1;
// 				}
				
// 			}
