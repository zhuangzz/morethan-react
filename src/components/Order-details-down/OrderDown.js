import React ,{Component} from "react"
import "./orderdown.css"
import {Link} from "react-router-dom"

class OrderDown extends Component {
  render(){
    return(
      <div className="orderdown">
        <div className="mainminl clearfix">

    		    	<h3>备注</h3>
    		    	<ul>
    		    		<li><form action=""><textarea name="" id="" cols="" rows=""></textarea></form></li>
    		    		<li>
    		    		<span>数量</span>
    				    <span>单价</span>
    				    <span>小计</span>
    				    <span>优惠</span>
    				    <span>运费</span>
    				    <span className="last">实际应付</span>
    				    </li>
    		    		<li className="lastt">
    		    		<span>2</span>
    			    	<span>x</span>
    			    	<span>79.00</span>
    			    	<span>=</span>
    			    	<span>158.00</span>
    			    	<span>-</span>
    			    	<span>0.00</span>
    			    	<span>+</span>
    			    	<span>10</span>
    			    	<span>=</span>
    			    	<span>168.00</span>
    			    	</li>
    		    	</ul>
    		    	<Link to="/checkout" className="tijiao">提交订单</Link>
    		    </div>
      </div>
    )
  }
}
export default OrderDown
