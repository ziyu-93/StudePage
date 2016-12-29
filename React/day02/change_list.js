/**
 * Created by Administrator on 2016/12/27.
 */

//构造基本元素：空的ul-li组件
var Ele = React.createClass({
    getDefaultProps:function () {
        return {
            //props初始化的一个数组，用getDefaultProps设置
            tempList:[]
        }
    },
    render: function () {
        return(
            <div className="list">
                <ul>
                    {
                        this.props.tempList.map(function (ele,index) {
                            return <li key={index}>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
})
//将空的li组件放到，当前元素中
var List = React.createClass({
    getInitialState:function () {
        var types = Object.keys(this.props.dataList);
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
        var arr = this.props.dataList[this.state.selectedType]
        return(
            <div>
                {
                    this.state.types.map(function (ele,index) {
                        //这里的changeType的bind是为了不让事件在加载过程中，就直接执行，而是通过点击不同的按钮执行
                        return <button onClick={this.changeType.bind(this,index)} key={index}>{ele}</button>
                    }.bind(this))
                }
                <Ele tempList={arr}/>
            </div>
        )
    }
})
var dataList = {
    "热销商品":["商品1","商品1","商品1","商品1","商品1","商品1"],
    "新上商品":["新品1","新品1","新品1","新品1","新品1","新品1"]
}
//dataList数组设置成list的属性，将数组内容赋给此属性，从而可以用props调用这个数组
ReactDOM.render(<List dataList={dataList}/>,document.getElementById("main"))