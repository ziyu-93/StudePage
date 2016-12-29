


var obj = {
	name:"obj name",
	showName:function(){
		return ()=> console.log(this.name);
	}
}
obj.showName()();


for(let i=0;i<6;i++){
	setTimeout(function(){
		console.log(i);
	},i);
}



var names = ["li","bai","hei","you","hao"]
ReactDOM.render(
	<div id="jsx-div">
		{
			names.map(function(ele,index){
				return <p key={index}>Hello {ele} !</p>
			})
		}
	</div>,
	document.getElementById("main")
	
)