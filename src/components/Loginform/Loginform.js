import React ,{Component} from "react"
import "./loginform.css"

class Loginform extends Component{
  state={
    username:"",
    password:""
  }
  showName=(e)=>{
    this.setState({
      username:e.target.value
    })
  }
  showPassword=(e)=>{
    this.setState({
      password:e.target.value
    })
  }
  submitName=(username)=>{
    if(username!==""){
      this.props.login(this.state.username)
    }
  }
  render(){
    const { username,password }=this.state
    return(
      <div className="loginform">
      	<div className="wraps">
      		<div className="box">
      			<div className="box-up">
      				<img onClick={this.props.hideLogin} className="close" src={require("../images/shoopcar-del2_03.jpg")} alt="" />
      				<img className="logos" src={require("../images/logo2_03.jpg")} alt="" />
      				<form className="clearfix" action="">
      					<label htmlFor="numb"><img className="num" src={require("../images/shopcar-num_11.jpg")} alt="" /></label>
      					<input className="number" type="text" id="numb" value={username} placeholder="请输入手机号" onChange={this.showName} /><br/>
      				  <label htmlFor="pass"><img className="" src={require("../images/shopcar-password_15.jpg")} alt="" /></label>
      				  <input className="scrite" type="password" name="" value={password} id="pass" placeholder="请输入密码" onChange={this.showPassword}/>
      				  <div className="clearfix">
      				    <input className="yan" type="text" placeholder="请输入验证码" />
      				    <a href="http"><img src={require("../images/shopcar-yanzheng_19.jpg")} alt="" /></a>
      				  </div>
      				  <label onClick={this.submitName }  className="lo" htmlFor="">登录</label>
      				</form>
      				<div>
      					<a className="forget" href="http">忘记密码?</a>
      					<a className="login" href="http">注册</a>
      				</div>
      			</div>

      			<div className="box-down clearfix">
      				<a href="http"><img src={require("../images/shopcar-qq_11.jpg")} alt="" /></a>
      				<a href="http"><img src={require("../images/shopcar-xin_13.jpg")} alt="" /></a>
      				<a href="http"><img src={require("../images/shopcar-bo_11.jpg")} alt="" /></a>
      			</div>
      		</div>
      	</div>
      </div>
    )
  }
}
export default Loginform
