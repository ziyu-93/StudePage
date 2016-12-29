/**
 * Created by Administrator on 2016/12/28.
 */

class Select extends React.Component{
    //ES6初始化结构。ES5用getInitialState表示returnstate
    constructor(props){
        super(props);
        this.state = {
            show:false,
            selectedIndex:0
        }
    }
    titClick(){
        console.log(tihs);
        this.setState({
            show:!this.state.show
        })
    }
    selectChange(index){
        this.setState({
            selectedIndex:index,
            show:false
        })
    }
    render(){
        return(
            <div className="select-wrap">
                <h3 onClick=={()=>this.titClick()}>
                    {this.props.selectData[this.state.selectedIndex]}
                </h3>
                <ul style={{"display":this.state.show?"block":"none"}} className="select-list">
                    {
                        this.props.selectData.map( (ele,index)=> {
                            return <li onClick={()=>this.selectChange(index)} key={index}>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}