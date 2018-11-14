import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Top from './top';
import 'antd/dist/antd.css';

import '../css/person.css'
import Aside from './aside'
import { Input,Tabs, Pagination ,Icon } from 'antd';

const Search = Input.Search;
const TabPane = Tabs.TabPane;
function callback(key) {
   // console.log(key);
}
export default class Person extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //话题数组
            arr:[],
            //总数据
            count:0,
            //每页显示的条数
            pageSize:5,
            //总共的页数
            pageNum:0,
            //当前显示的页数
            current:1,
            //回复数组
            arr1:[]

        }
    }
    pre(){
        if(this.state.current<=1){
            this.setState({current:1})
        }else{
            this.setState({current:this.state.current--})
        }

    }

    back(){
        if(this.state.current>=Math.ceil(this.state.count/this.state.pageSize)){
            this.setState({current:Math.ceil(this.state.count/this.state.pageSize)})
            console.log(this.state.count)
            console.log(this.state.current)
            console.log(Math.ceil(this.state.count/this.state.pageSize))
        }else{
            this.setState({current:this.state.current++})
        }
    }
   
    

    render(){
       return(
           <div>
              
              <Top/>
              <div className="wrapcontent">
                <div className="wrapdiv">
                    <div className="wraphui">
                       
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="话题" key="1">
                               
                                {/* <ul className="topic">
                                    <li>蓝海猖狂，护洋为王</li>
                                    <li>蓝海猖狂，护洋为王</li>
                                    <li>蓝海猖狂，护洋为王</li>
                                    <li>蓝海猖狂，护洋为王</li>
                                    <li>蓝海猖狂，护洋为王</li>
                                    <li>蓝海猖狂，护洋为王</li>
                                    <li>蓝海猖狂，护洋为王</li>
                                    <li>蓝海猖狂，护洋为王</li>  
                                 </ul> 
                                     */}
                                {
                                    this.state.arr.map((item,i)=>{
                                        return(
                                        <ul className="topic" key={i}>
                                            <li>
                                                <p>{item.title}</p>
                                                <span>{item.date}</span>
                                                <span>{item.type}</span>
                                                <span><Icon type="eye" />{item.num1}</span>
                                                <span><Icon type="message" />{item.num2}</span>
                                            </li>
                                        
                                        </ul>)
                                    })
                                }
                               
                            </TabPane>
                            <TabPane tab="回复" key="2">

                                {
                                    this.state.arr1.map((item,i)=>{
                                        return(
                                            <ul className="reply"  key={i}>
                                                <li>
                                                    <em>回复：{item.huicon}</em>
                                                    <p>话题:{item.con}</p>

                                                    <span>{item.dates}{item.mytime}</span>
                                               </li>
                                                

                                                
                                            </ul>
                                        )
                                    })
                                }



                               
                               {/* <ul className="topic" >
                                    <li>杨洋在哪我在哪，羊毛陪你闯天下</li>
                                    <li>杨洋在哪我在哪，羊毛陪你闯天下</li>
                                    <li>杨洋在哪我在哪，羊毛陪你闯天下</li>
                                    <li>杨洋在哪我在哪，羊毛陪你闯天下</li>
                                </ul> */}
                            </TabPane>                           
                        </Tabs>

                       
                          
                           
                        
                     
                    </div>
                    <div className="aside"><Aside/></div>
                </div>
              </div>            
           </div>
       )
    }

    componentWillMount(){
        var _this=this;
        //个人话题
        $.ajax({
           type:"get",
             url:"http://localhost:8000/topic",
            
             data:{aa:99},
             dataType:"json",
             success:function(data){
                 //console.log(data.length);
                 _this.setState({arr:data})
                 _this.setState({count:data.length})
                //  _this.setState({pageNum:Math.ceil(data.length/this.state.pageSize)})
                //  _this.setState({Math.ceil(data.length/pageSize)})

            //console.log(_this.state.count);                                                                                                   
             }
        })
        
        
    }


   componentDidMount(){
       var _this=this;
       //个人回复
       $.ajax({
        type:"get",
        url:"http://localhost:8000/reply",
        dataType:"json",
        data:{aa:99},
        success:function(data){
            _this.setState({arr1:data})
            console.log(_this.state.arr1)
        }

    })
    //     // $.ajax({
    //     //     type:"get",
    //     //     url: "http://localhost:8000/page",
    //     //     data:{current:this.state.current},
                  
    //     //     success:function(data){
    //     //         console.log(data)
    //     //     }
    //     // })
     }
}