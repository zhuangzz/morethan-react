import React ,{Component} from "react"
import "./shopcarup.css"

class ShopcarUp extends Component {
  render(){
    return(
      <div className="shopcarup">
        <div className="up">
    			<div className="up-con">
    				<div className="up-u clearfix">
    					<span className="left"></span>
    					<span className="car">购物车<span>[<span>99</span>件]</span></span>
    				</div>
    				<ul>
    					<li>购物车</li>
    					<li>填写订单</li>
    					<li>付款，购买成功</li>
    				</ul>
    			</div>
    			<img src={require("../images/shopcar-bg_07.jpg")} alt="" />
    		</div>
      </div>
    )
  }
}
export default ShopcarUp
