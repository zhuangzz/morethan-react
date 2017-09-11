import React ,{Component}from "react"
import "./orderup.css"

class OrderUp extends Component{
  render(){
    return(
      <div className="orderup">
        <div className="up">
				<div className="header clearfix">
          <div className="headero">
      		<div className="nav"></div>
      		<div className="navon"></div>
      		<div className="navright clearfix">
        	<a href="#"><img src={require("../images/serne.jpg")} alt="" /></a><a href="#"><img src={require("../images/bgne1_05.jpg")} alt="" /></a>
        	<span><a href="#">登录</a><a href="#">注册/</a></span>
      </div>
      </div>
    </div>
					<div className="up-con">
						<div className="up-u clearfix">
							<span className="left"></span>
							<span className="car">填写订单</span>
						</div>
						<ul>
							<li>购物车</li>
							<li>填写订单</li>
							<li>付款，购买成功</li>
						</ul>
						<img src={require("../images/shopcar-bg_07.jpg")} alt="" />
					</div>

				</div>
      </div>
    )
  }
}
export default OrderUp
