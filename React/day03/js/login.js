/**
 * Created by Administrator on 2016/12/28.
 */
//头部
var Header = React.createClass({

    render:function () {
        return(
            <div>
                <ul className="header">
                    <li className="header-btn">{"<"}</li>
                    <li className="header-tit">首页</li>
                    <li className="header-btn">返回</li>
                </ul>
            </div>
        )
    }
})

var Content = React.createClass({
    render:function () {
        var contentStyle = {bottom:this.props.hasFooter?"50px":"0"}
        return(
            <div className="content" style={contentStyle}>{this.props.children}</div>
        )
    }
})

//底部
var Footer = React.createClass({
    getDefaultProps:function () {
        return{
            footerList:["首页","购物车","支付","我的"]
        }
    },
    render:function () {
        return(
            <div>
                <ul className="footer">
                    {
                        this.props.footerList.map(function (ele,index) {
                            return <li key={index}>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
})

var Loginlist = React.createClass({
    //是否需要显示密码
    getInitialState:function () {
        return{
            showPassword:false,
            username:"",
            password:""
        }
    },
    changeTextType:function () {
        this.setState({
            showPassword:!this.state.showPassword
        })
    },
    //改变账号
    changeUsername:function (ev) {
        //setState不是同步的会有延迟
        this.setState({
            username:ev.target.value.replace(/m/g,"")
        })
        //console.log(this.state.username);
    },
    //React也可实现M-V-V-M 通过用setState改变state的值，然后重新渲染页面，render
    //改变密码。
    changePassword:function (ev) {
        this.setState({
            password:ev.target.value.replace(/123/g,"")
        })
    },
    loginIn:function () {
        console.log(this.state.username);
        console.log(this.state.password);
        //正则验证
        //数据请求
            //提示失败，成功登陆（保存用户ID，记住密码保存在local中，否则保存在session中)，跳转到其他页面
    },
    render:function () {
        return(
            <div>
                <ul className="login-list">
                    <li>
                        <input type="text" className="text-bar" onChange={this.changeUsername} value={this.state.username}/>
                    </li>
                    <li>
                        <input type={this.state.showPassword?"text":"password"} className="text-bar" onChange={this.changePassword} value={this.state.password}/>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>记住密码</span>
                        </label>
                        <a className="go-forget">忘记密码？</a>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"onClick={this.changeTextType}/>
                            <span>显示密码</span>
                        </label>
                    </li>
                    <li>
                        <a className="login-in" onClick={this.loginIn}>登录</a>
                    </li>
                    <li>
                        <a className="go-reg">注册</a>
                    </li>
                </ul>
            </div>
        )
    }
})

var LoginPage = React.createClass({
    render:function () {
        return(
            <div>
                <Header/>
                <Content >
                    <Loginlist/>
                </Content>
            </div>
        )
    }
})

ReactDOM.render(<LoginPage hasFooter={false}/>,document.getElementById("main"))