/**
 * Created by Administrator on 2016/12/28.
 */
var Action = {
    //订阅
    subscriber:function (name,fn) {
        if(this[name]){
            console.log(name+"is defined");
        }//融挫
        this[name] = fn;
        console.log(fn)
    },
    //发布
    publish:function (name,data) {
        if(!this[name]){
            console.log(name+"Undefined");
        }
        this[name](data);
    }
}
//子组件
var Child = React.createClass({
    hasClick:function () {
        Action.publish("changeValue",100)
    },
    render:function () {
        return(
            <button onClick={this.hasClick}>子组件的按钮</button>
        )
    }
    //可以直接这样写
    // render:function () {
    //     return(
    //         <button onClick={this.props.ChildchangeVal.bind(this,30)}>子组件的按钮</button>
    //     )
    // },
})




//父组件
var List = React.createClass({
    getInitialState:function () {
        return{
            value:1
        }
    },
    componentWillMount:function (value) {
        // this.setState({
        //     value:value
        // })
        //<button onClick={this.changeValue.bind(this,20)}>父组件的按钮</button>
        Action.subscriber("changeValue",function (val) {
            this.setState({
                value:val
            })
        }.bind(this))
    },
    render:function () {
        return(
            <div>
                <p>{this.state.value}</p>

                <Child />
            </div>
        )
    }
})

ReactDOM.render(<List/>,document.getElementById("main"))