/**
 * Created by Administrator on 2016/12/29.
 */
//安装了webpack。j安装了son文件中的指令。所以在node_modules中已经将react引入进来了。

// import React,{Component} from "react"; =>class Header extends Component
//引入JS
import React from "react";

//头部组件
class Header extends React.Component{
    render(){
        return(
            <ul className="header">
                <li className="header-btn">{"<"}</li>
                <li className="header-tit">注册</li>
                <li className="header-btn">返回</li>
            </ul>
        )
    }
}
//PropsES6

//底部组件
class Footer extends React.Component{
    render(){
        return(
            <ul className="footer">
                {
                    this.props.footerList.map( (ele,index)=>{
                        return <li key={index}>{ele}</li>
                    } )
                }
            </ul>
        )
    }
}
//要写在class Footer的下面。不然获取不到
Footer.defaultProps = {
    footerList:["首页","设置","购物车","我的"]
}
//正文组件
class Content extends React.Component{
    render(){
        return(
            <div className="content">{this.props.children}</div>
        )
    }
}

//提供接口
export { Header,Footer,Content}