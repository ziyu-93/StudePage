/**
 * Created by Administrator on 2016/12/28.
 */

//创建头部组件
var Header = React.createClass({
    render:function () {
        return (
            <ul className="header">
                <li className="header-btn">{"<"}</li>
                <li className="header-tit">登陆</li>
                <li className="header-btn">返回</li>
            </ul>
        )
    }
})

//创建尾部组件
var Footer = React.createClass({
    getDefaultProps:function () {
        return{
            footerList:["首页","购物车","钱包","我的"]
        }
    },
    render:function () {
        return(
            <ul className="footer" style={{"display":this.props.hasfooter?"block":"none"}}>
                {
                    this.props.footerList.map(function (ele,index) {
                        return <li key={index}>{ele}</li>
                    })
                }
            </ul>
        )
    }
})

//创建登陆组件：账号，密码，登陆等按钮
var List = React.createClass({
    getInitialState:function () {
        return{
            flag:true,
            username:"",
            password:""
        }
    },
    //通过改变flag的boolen值，改变密码框的type类型
    showPassword:function () {
        this.setState({
            flag:!this.state.flag
        })
    },
    forget:function () {
        alert("忘记密码：即将更新");
    },
    //input text and password M-V-V-M use onChange()
    changeUsername:function (ev) {
          this.setState({
              username:ev.target.value.replace(/abc/g,"")
          })
    },
    changePassword:function (ev) {
        this.setState({
            password:ev.target.value.replace(/123/g,"")
        })
    },
    //record：记录 点击登陆按钮是，记录账号和密码使用
    record:function () {
        //localStorage 需要记住密码时，用localStorage
        //sessionStorage  不需要记住密码时
        console.log("账号")
         console.log("密码")
    },
    render:function () {
        return(
            <ul className="login-page">
                <li>
                    <input type="text" className="input-bar" onChange={this.changeUsername} value={this.state.username}/>
                </li>
                <li>
                    <input type={this.state.flag?"password":"text"} className="input-bar" onChange={this.changePassword} value={this.state.password}/>
                </li>
                <li>
                    <label>
                        <input type="checkbox" className="check" />
                        <span>记住密码</span>
                    </label>
                    <span className="go-forget" onClick={this.forget}>忘记密码？</span>
                </li>
                <li>
                    <label>
                        <input type="checkbox" className="check" onClick={this.showPassword}/>
                        <span>显示密码</span>
                    </label>
                </li>
                <li>
                    <a className="login-in" onClick={this.record}>登陆</a>
                </li>
                <li>
                    <a className="go-reg">注册</a>
                </li>
            </ul>
        )
    }
})

//创建正文组件
var Content = React.createClass({
    render:function () {
        return(
            <div className="content" style={{"bottom":this.props.hasfooter?"50px":"0"}}>{this.props.children}</div>
        )
    }
})

//创建登陆页面整体组件
var LoginPage = React.createClass({
    render:function () {
        return(
            <div className="page">
                <Header/>
                <Content>
                    <List/>
                </Content>
                <Footer/>
            </div>
        )
    }
})

ReactDOM.render(<LoginPage hasfooter={false}/>,document.getElementById("main"))