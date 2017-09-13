import React ,{Component} from "react"
import"./ordermain.css"

class OrderMain extends Component{
  render(){
    return(
      <div className="ordermain">
        <div className="mainmin clearfix">
    		    <div className="mainmino clearfix">
    		    	<h3>商品信息</h3>
    		    	<a href="shoppingcart.html">返回购物车修改</a>
    		    </div>
    		    <ul className="mainmint clearfix">
    		    	<li> <img src={require("../images/dingdan_06.jpg")} alt="" /><img src={require("../images/yushou_19.jpg")} alt="" /> </li>
    		    	<li>龙之谷六周年限定礼包大Boos冰龙款男士T恤</li>
    		    	<li>款式：iphone5</li>
    		    	<li>尺码：XL</li>
    		    	<li>￥79.00</li>
    		    	<li>x1</li>
    		    </ul>
    		    <ul className="mainmins clearfix">
    		    	<li><img src={require("../images/dingdan_06.jpg")} alt="" /></li>
    		    	<li>龙之谷六周年限定礼包大Boos冰龙款男士T恤</li>
    		    	<li>款式：iphone5</li>
    		    	<li>尺码：XL</li>
    		    	<li>￥79.00</li>
    		    	<li>x1</li>
    		    </ul>
    		    <ul className="mainminf clearfix">
    		    	<li><h3>支付方式</h3>
    		    	<span className="one">在线支付</span>
    		    	<span className="three"></span>
    		    	</li>
    		    	<li><h3>物流方式</h3>
    		    	<span className="one">普通快递</span>
    		    	<span className="three"></span>
    		    	</li>
    		    	<li><h3>发票信息</h3>
    		    	<span className="twoo">开发票</span>
    		    	<span className="twoo">不开发票</span>
    		    	</li>
    		    	<li><input type="text" defaultValue="输入个人/单位名称" /></li>
    		    	<li><a href="http" className="four">保存</a></li>
    		    	<li></li>
    		    </ul>
    		</div>
      </div>
    )
  }
}
export default OrderMain
