/**
 * Created by Administrator on 2016/12/27.*/


//创建列表的基本结构
 var ListData = React.createClass({
     getDefaultProps:function () {
         return {
             listData:[]
         }
     },
     render: function () {
         return(
             <ul className="product-list">
                 {
                     this.props.listData.map(function (ele, index) {
                         return <li key={index}>{ele}</li>
                     })
                 }
             </ul>
         )
     }
 });
//将创建的基本结构，放到div框内
var ListWrap = React.createClass({
    getInitialState:function () {
        var types = Object.keys(this.props.productData);
        return {
            types:types,
            selectedType:types[0]
        }
    },
    changeSelectedType:function (index) {
        //改变selectedType的值
        this.setState({
            selectedType:this.state.types[index]
        })
    },
    render:function () {
        //要显示的数据
        var arr = this.props.productData[this.state.selectedType];
        return (
            <div>
                {
                    this.state.types.map(function (ele, index) {
                        return <button onClick={this.changeSelectedType.bind(this,index)}>{ele}</button>
                    }.bind(this))
                }
                <ListData listData={arr}/>
            </div>
        )
    }


})
//获取数据
var productData = {
    "newData":["商品1","商品1","商品1","商品1","商品1"],
    "hotData":["新品1","新品1","新品1","新品1","新品1"]
};
ReactDOM.render(<ListWrap productData={productData}/>,document.getElementById("main"));