import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Top from './top';
import 'antd/dist/antd.css';
import { Input, Button,Icon } from 'antd';
import '../css/search.css';

import Store from './reds/Store'

const Searches = Input.Search;

export default class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            str:Store.getState(),
            arr:[]

        }
    }
    render(){
       return(
           <div>
               <Top history={this.props.history}/>
               <div className="wrapsearch">
                    <div className="searches">
                        <input type="text" id="ipt" ref="ipt"/>
                        <Button type="primary" id="btn" onClick={this.search.bind(this)}>搜索</Button>




                        {
                            this.state.arr.map((item,i)=>{
                                return(
                                    <ul className="searchList" key={i}>
                                        <li>
                                          
                                            <p>{item.title}</p>
                                                <span>{item.date}</span>
                                                <span>{item.type}</span>
                                                <span><Icon type="eye" />{item.num1}</span>
                                                <span><Icon type="message" />{item.num2}</span>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                         {/*<ul className="searchList">
                            <li>
                            杨洋在哪我在哪，羊毛陪你闯天下
                            </li>
                            <li>
                            杨洋在哪我在哪，羊毛陪你闯天下
                            </li>
                            <li>
                            杨洋在哪我在哪，羊毛陪你闯天下
                            </li>
                            <li>
                            杨洋在哪我在哪，羊毛陪你闯天下
                            </li> 
                        </ul>*/}
                    </div>
                   
               </div>
           </div>
        )     
    }
    search(){  
    var cont=this.refs.ipt.value;
    var _this=this;
     $.ajax({
         type:"get",
         url:"http://localhost:8000/search",       
         data:{cont:cont},
         success:function(data){
             if(data.length==0){
                 alert('查询暂无数据')
             }
             _this.setState({arr:data})
             console.log(_this.state.arr)
         }
     })
  
}
}