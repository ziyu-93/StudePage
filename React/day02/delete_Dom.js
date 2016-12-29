/**
 * Created by Administrator on 2016/12/27.
 */


//创建组件
var Dom = React.createClass({
    getDefaultProps:function () {
        return{
            list:[]
        }
    },
    render:function () {
        return(
            <div>
                <ul>
                    {
                        this.props.list.map(function (ele,index) {
                            return <li key={index}>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
});
//实例化组件
var DeleteDom = React.createClass({
    getInitialState:function () {
        var types = Object.keys(this.props.proList);
        return{
            types:types,
            selectedType:types[0]
        }
    },
    changeType:function (index) {
          this.setState({
              selectedType:this.state.types[index]
          })
    },
    render:function () {
        //渲染(render)的时候，定义数组，传给组件的list渲染组件
        var arr = this.props.proList[this.state.selectedType]
        return (
            <div>
                {
                    this.state.types.map(function (ele,index) {
                        return <button onClick={this.changeType.bind(this,index)} key={index}>{ele}</button>
                    }.bind(this))
                }
                <Dom list={arr}/>
                <button>删除</button>
            </div>
        )
    }
})
var proList = {
    "热销商品":["商品1","商品1","商品1","商品1","商品1","商品1"],
    "新上商品":["新品1","新品1","新品1","新品1","新品1","新品1"]
}
ReactDOM.render(
    //设置属性。将数组设置为属性和属性值，就可以在this指向的时候使用
    <DeleteDom proList={proList}/>,
    document.getElementById("main")
)