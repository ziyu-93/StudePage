/**
 * Created by Administrator on 2016/12/28.
 */

"use strict"
//页面头部
class Header extends React.Component{
    render(){
        return (
            <div>
                <ul className="header">
                    <li className="header-btn">{"<"}</li>
                    <li className="header-tit">首页</li>
                    <li className="header-btn">返回</li>
                </ul>
            </div>
        )
    }
}
//页面底部
class Footer extends React.Component{
    //用不了。但是网站上面说是可以这么写
    // static defaultProps={
    //     footerList:["首页","购物车","支付","我的"]
    // };
    render(){
        return(
            <div>
                <ul className="footer">
                    {
                        this.props.footerList.map((ele,index)=>{
                            return <li key={index}>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
Footer.defaultProps={
    footerList:["首页","购物车","支付","我的"]
}
//页面内容
class Content extends React.Component{
    render(){
        return(
            <div className="content">{this.props.children}</div>
        )
    }
}
//
//登陆页面
class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Content>

                </Content>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<LoginPage/>,document.getElementById("main"))