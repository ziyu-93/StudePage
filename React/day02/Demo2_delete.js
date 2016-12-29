/**
 * Created by Administrator on 2016/12/27.
 */

//创建元素 
var Ele = React.createClass({
    componentWillMount:function () {
        alert(1);
      this.timer = setInterval(function () {
          console.log(1);
      },1000)  
    },
    componentWillUnmount:function () {
        console.log("组件即将被移除");
        clearInterval(this.timer);
    },
    render:function () {
        return(
            <div>List</div>
        )
    }
})
var SelectEle = React.createClass({
    getInitialState:function () {
        return{
            flag:true
        }
    },
    removeEle:function () {
        this.setState({
            flag:false
        })
    },
    render:function () {
      return (
          <div>
              <button onClick={this.removeEle}>移除Ele</button>
              {this.state.flag?<Ele/>:""}
          </div>
      )  
    },
})
//React的操作中，以为有虚拟元素的原因，不要直接去删除真实的Dom元素
ReactDOM.render(<SelectEle/>,document.getElementById("main"))
/*
 document.onclick=function () {
 document.getElementById("main").innerHTML="";
 }*/