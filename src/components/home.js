import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],
            count:0,
        }
    }
    tap(){
        var _this=this;
    }
    render(){
       return(
           <div>
              {
                  this.state.arr.map((item,i)=>{
                      return(<div key={i}><Link to={'/detail/'+item._id} onClick={this.tap.bind(this)}>{item.title}</Link></div>)
                  })
              }
           </div>
       )
    }
    componentDidMount(){
        var _this=this;
        $.ajax({
            type:'get',
            url:'http://localhost:8000/getlist',
            success:function(data){
                _this.setState({arr:data})
            }
        })
    }
}