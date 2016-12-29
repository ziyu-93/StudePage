


//React 组件化

var Header = React.createClass({
	render:function(){
		return <header>Header</header>
	} 
});

var Footer = React.createClass({
	render:function(){
		return <footer>footer</footer>
	} 
});

var Content = React.createClass({
	render:function(){
		return <div id="content" >{this.props.children}</div>
	} 
});

var listData = ["商品1","商品2","商品3","商品4","商品5"];

var ProductList = React.createClass({
	render:function(){
		return (
			<ul className="padding10">
				{
					listData.map(function(ele, index){
						return <li className="padding10" key={index}>{ele}</li>
					})
				}
			</ul>
		)
	}
});


var IndexPage = React.createClass({
	render:function(){
		return (
			<div id="page">
				<Header/>
				<Content>
					<ProductList/>
				</Content>
				<Footer/>
			</div>
		)
	} 
});
ReactDOM.render(
	<IndexPage></IndexPage>,
	document.getElementById("main")
);
