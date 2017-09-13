import React,{Component} from "react"
import "./finish.css"

class Finish extends Component{
  render(){
    return(
      <div className="finsh">
        <div className="up-con">
  				<div className="up-u clearfix">
  					<span className="left"></span>
  					<span className="car">收银台</span>
  				</div>
  				<ul>
  					<li className="shopcar222">购物车</li>
  					<li className="write222">填写订单</li>
  					<li className="pay-success222">付款，购买成功</li>
  				</ul>
  				<img src={require("../images/shopcar-bg_07.jpg")} alt="" />
  			</div>
        <div className="main-con">
    		<div className="main clearfix">
    			<img src={require("../images/shouyintai3_03.jpg")} alt="" />
    			<span className="success1">支付成功！</span>
    			<div className="maino1">
    				<span className="order-num1">订单号：12345678912345</span>
    				<span className="success-pay1">成功支付：￥168.00</span>
    			</div>
    			<span className="goto1">继续逛逛</span>
    			<span className="check-order1">查看订单</span>
    		</div>
    		</div>
      </div>
    )
  }
}
export default Finish
