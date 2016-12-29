/**
 * Created by Administrator on 2016/12/27.
 */

var Select = React.createClass({
    // constructor:function (props) {
    //     super(props);
    // }
    getInitialState:function () {
        return{
            show:false,
            selectedIndex:4
        }
    },
    titClick:function () {
        console.log(this);
        this.setState({
            show:!this.state.show
        })
    },
    selectChange:function (index) {
        this.setState({
            selectedIndex:index,
            show:false
        })
    },
    render:function () {
        return(
            <div className="select-wrap">
                <h3 onClick={this.titClick}>
                    {this.props.selectData[this.state.selectedIndex]}
                </h3>
                <ul style={{"display":this.state.show?"block":"none"}} className="select-list">
                    {
                        this.props.selectData.map(function (ele,index) {
                            return <li onClick={this.selectChange.bind(this,index)} key={index}>{ele}</li>
                        }.bind(this))
                    }
                </ul>
            </div>
        )
    }
})
var arr = ["react","react Native","angular","react canvas","vue"];
ReactDOM.render(<Select selectData={arr}/>,document.body);
