/**
 * Created by Administrator on 2016/12/27.
 */

//定义组件
var Menu = React.createClass({
    getInitialState:function () {
        return{
            tempShow:0,
            init:true
        }
    },
    changeMain:function () {
        console.log(this);
        this.setState({
            init:!this.state.init
        })
    },
    changeItemIndex:function (index) {
        this.setState({
            tempShow:index,
            init:false
        })
    },
    render:function () {
        return(
            <div className="item-wrap">
                <h3 onClick={this.changeMain} className="select">
                    {this.props.list[this.state.tempShow]}
                </h3>
                <ul style={{"display":this.state.init?"block":"none"}} className="select-show">
                    {
                        this.props.list.map(function (ele,index) {
                            return <li onClick={this.changeItemIndex.bind(this,index)} key={index}>{ele}</li>
                        }.bind(this))
                    }
                </ul>
            </div>
        )
    }
})
//定义数组
var arr = ["苏州","上海","北京","呼和浩特","海南"];
//将数组转化为组件的属性，从而可以使用this.props.list
ReactDOM.render(<Menu list={arr}/>,document.body);