/**
 * Created by Administrator on 2016/12/28.
 */

var List = React.createClass({
    //通过React的propTypes声明listData的构造形式，是数组还是String
    propTypes:{
        listData:React.PropTypes.array.isRequired
    },
    render:function () {
        //listData必须有
        //listData必须是数组
        return(
            <ul>
                {
                    this.props.listData.map(function (ele,index) {
                        return <li key={index}>{ele}</li>
                    })
                }
            </ul>
        )
    }
})

ReactDOM.render(<List listData={"12312312"}/>,document.getElementById("main"))