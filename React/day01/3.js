//
//var HelloReact = React.createClass({
//	render:function () {
//		return <h3> Hello </h3>
//	}
//});
//
//var Content = React.createClass({
//	render: function() {
//		return <p>大家好,欢迎学习React</p>
//	}
//})

var All = React.createClass({
	render: function(){
		return <div>
					<h3> Hello </h3>
					<p>大家好,欢迎学习React</p>
				</div>
	}
})

ReactDOM.render(
	<div>
		<All/>
	</div>,
	document.getElementById("main")
);
