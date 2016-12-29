/**
 * Created by Administrator on 2016/12/27.
 */

var arr = ["ning", "li", "hei"];
var MyEvent = React.createClass({


    hasClick: function () {
        alert(1)
    },

    render: function () {
        return (
            <div>
                <span>Event</span>
                <button onClick={this.hasClick}>点击</button>
            </div>
        )
    }
})

var MyEventList = React.createClass({
    hasClick: function (index) {
        console.log(index);
    },

    //bind用法：改变this指向，
    render: function () {
        return (
            <ul>
                {
                    arr.map(function(ele, index){
                        return <li onClick={this.hasClick.bind(this,index)} key={index}>{ele}</li>
                    }.bind(this))
                }
            </ul>
        )
    }
})

ReactDOM.render(
    <MyEventList/>,
    document.getElementById("main")
)