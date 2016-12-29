/**
 * Created by Administrator on 2016/12/28.
 */



var TextList = React.createClass({
    render:function () {
        return(
            <p>{this.props.textList}</p>
        )
    }
});

var PullDownList = React.createClass({
    //propTypes是定义key值Array or String
    propTypes:{
        list:React.PropTypes.array.isRequired,
        mainList:React.PropTypes.array.isRequired
    },
    getInitialState:function () {
        return{
            flag:false,
            selectedIndex:0
        }
    },
    changeIndex:function () {
        this.setState({
            flag:!this.state.flag
        })
    },
    changeFocus:function (index) {
        this.setState({
            selectedIndex:index,
            flag:false
        })
        console.log(index);
    },
    render:function () {
        return(
            <div>
                <h3 onClick={this.changeIndex}>
                    {this.props.list[this.state.selectedIndex]}
                </h3>
                <ul style={{"display":this.state.flag?"block":"none"}}>
                    {
                        this.props.list.map(function (ele,index) {
                            return <li key={index} onClick={this.changeFocus.bind(this,index)}>{ele}</li>
                        }.bind(this))
                    }
                </ul>
                <TextList textList={this.props.mainList[this.state.selectedIndex]}/>
            </div>
        )
    }
});
var list = ["angular","react","html5","zepto","swiper","scroll"]
var mainList = ["我发现，你变帅了","你知道我说的是谁吗？","其实说的不是你","是他","他叫","哈哈，我不告诉你"]
ReactDOM.render(<PullDownList list={list} mainList={mainList}/>,document.getElementById("main"))