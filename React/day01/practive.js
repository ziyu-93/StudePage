
/**
 * Created by Administrator on 2016/12/27.
 */
//设置组建块
var Header = React.createClass({
    render: function () {
        return(
            <header>Header</header>
        )
    }
});

var Footer = React.createClass({
    render:function () {
        return(
            <footer>Footer</footer>
        )
    }
});
var arr = ["商品1", "商品2", "商品3", "商品4", "商品5"];

var ProductList = React.createClass({
    render: function () {
        return(
            <ul>
                {
                    arr.map(function (ele, index) {
                        return <li key={index}>{ele}</li>
                    })
                }
            </ul>

        )
    }
});
var Content = React.createClass({
    render: function () {
        return(
            <div>{this.props.children}</div>
        )
    }
});

var PageIndex = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <Content>
                    <ProductList/>
                </Content>
                <Footer/>
            </div>
        )
    }
})

class Page extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Content>
                    <ProductList/>
                </Content>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById("main")
)

