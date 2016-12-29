/**
 * Created by Administrator on 2016/12/29.
 */
import "./commonCss/common.css"
import React from "react"
import ReactDOM from "react-dom"
import { Header,Footer,Content} from "./commonJs/common.js"

//正文详细组件
class Sign extends React.Component{
    constructor(...arg){
        super(...arg);
        this.state = {
            flag:true
        }
    }
    render(){
        return(
            <ul className="signComponent">
                <li>
                    <span className="label">请输入账号：</span><input type="text" className="text-bar"/>
                </li>
                <li>
                    <span className="label">请输入密码：</span><input type="password" className="text-bar"/>
                </li>
                <li>
                    <span className="label">请再次输入密码：</span><input type="password" className="text-bar"/>
                </li>
                <li>
                    <span className="label">请输入验证码：</span><input type="text" className="textNum"/><span className="getNum">获取验证码</span>
                </li>
                <li className="sign-li">
                    <a className="sign submit">注册</a>
                </li>
                <li className="sign-li">
                    <a className="login submit">登陆</a>
                </li>
            </ul>
        )
    }
}
//构建全部页面内容
class PageSign extends React.Component{
    render(){
        return(
            <div className="page" id="page-sign">
                <Header/>
                <Content>
                    <Sign/>
                </Content>
            </div>
        )
    }
}
ReactDOM.render(<PageSign/>,document.getElementById("root"))