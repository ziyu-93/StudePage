/**
 * Created by Administrator on 2016/12/27.
 */


var arr = [1,2,3,4,5]
var List = React.createClass({
    //React默认情况
    getDefaultProps: function () {
        //组件创建的时候就会执行
        console.log("getDefaultProps");
        return {
            arr: []
        }
    },
    getInitialState:function () {
        return {
            show:true
        }
    },
    changeListState:function () {
        this.setState({
            show:!this.state.show
        })
    },
    componentWillMount:function () {
        //用于修改初始状态，不是必要的方法。
        console.log("组建即将渲染 componentWillMount");
        // this.setState({
        //     show:false
        // })
    },
    componentDidMount:function () {
        //可获取到真是的Dom节点
        console.log(document.getElementById("wrap"));
        console.log("组建渲染完成 componentDidMount");
        //refs是当前组建所有设置了ref属性的元素集合
    },
    render: function () {
        var listStyle = {display:this.state.show?"block":"none"};
        var btnHtml = this.state.show?"隐藏":"显示";
        return (
            <div ref="wrap" id="wrap">
                <button onClick={this.changeListState}>{btnHtml}</button>
                <ul style={listStyle} ref="list">
                    {
                        this.props.arr.map(function (ele, index) {
                            return <li key={index}>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
    },
    componentWillReceiveProps:function () {
        console.log("组建即将收到新的数据 componentWillReceiveProps");
    },
    shouldComponentUpdate:function () {
        //shouldComponentUpdate一般情况下，不用设置，默认是true。
        console.log("允许组建更新吗（一般不用自己设置）？shouldComponentUpdate");
        return true
    },
    componentWillUpdate:function () {
        console.log("组建即将更新 componentWillUpdate");
    },
    componentDidUpdate:function () {
        console.log("组建更新完成 componentDidUpdate");
    }
});
ReactDOM.render(
    <List arr={arr}/>,
    document.getElementById("main")
)