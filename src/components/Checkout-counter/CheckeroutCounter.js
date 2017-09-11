import React ,{Component} from "react"
import "./checkoutcounter.css"

class CheckoutCounter extends Component{
  render(){
    return(
      <div className="sheckoutcounter">
        <div className="up">
    		<div className="header clearfix">
        <div className="headero">
          <div className="nav"></div>
          <div className="navon"></div>
          <div className="navright clearfix">
            <a href="#"><img src={require("../images/serne.jpg" )} alt="" /></a><a href="#"><img src={require("../images/bgne1_05.jpg" )} alt="" /></a>
            <span><a href="#">登录</a><a href="#">注册/</a></span>
          </div>
          </div>
        </div>
    			<div className="up-con">
    				<div className="up-u clearfix">
    					<span className="left"></span>
    					<span className="car">收银台</span>
    				</div>
    				<ul>
    					<li>购物车</li>
    					<li>填写订单</li>
    					<li>付款，购买成功</li>
    				</ul>
    				<img src={require("../images/shopcar-bg_07.jpg")} alt="" />
    			</div>

    		</div>
        <div className="main-con">
    		<div className="main clearfix">
    			<ul className="maino clearfix">
    				<li>订单提交成功，请您尽快付款！</li>
    				<li>请您在提交订单后<span>24小时</span>内完成支付，否则订单会自动取消</li>
    				<li>应付金额：<span>￥168.00</span></li>
    			</ul>
    			<ul className="maint clearfix">
    				<li>订单号：12345678912345</li>
    				<li>迪力木拉提   186 **** 0734</li>
    				<li>新疆维吾尔自治区伊犁哈萨克自治州奎屯市乌鲁木齐西路56园72栋1单元1103号</li>
    			</ul>
    			<div className="mainf clearfix">
    				<span>选择支付方式</span>
    				<span>
    				<img className="ll mainfs" src={require("../images/zhifu2_03.jpg")} alt="" />
    				<img className="mainfo" src={require("../images/zhifu4_03.jpg")} alt="" />
    				</span>
    				<span>
    				<img className="mainfs rr" src={require("../images/zhifu1_03.jpg")} alt="" />
    				<img className="mainfo" src={require("../images/zhifu_03.jpg")} alt="" />
    				</span>
    			</div>
    			<a href="#" className="fukuan">付款</a>
    		</div>
    		</div>
      </div>
    )
  }
}
export default CheckoutCounter
