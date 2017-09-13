import React ,{Component} from "react"
import Addcardown from "../Addcardown/Addcardown"
import "./addcar.css"
import { Link } from "react-router-dom"

class Addcar extends Component {
  render(){
    return(
      <div className="addcar">
        <div className="wrap">
      		<div className="up">
      			<div className="up-u">
      				<h2>|&nbsp;已成功加入购物车!</h2>
      			</div>
      			<img src={require("../images/addcar-up_03.jpg")} alt="" />
      			<div className="goods clearfix">
      				<a className="img" href="http"><img src={require("../images/addcar-thing_03.jpg")} alt="" /></a>
      				<span className="title">
      					<a href="http" >
      					龙之谷六周年限定大礼包大Boss冰龙款男士T恤
      				  </a>
      				</span>
      				<div className="detail">
      					<p>款式：iphone5</p>
      					<p>尺码：XL</p>
      					<p>数量：x1</p>
      				</div>
      				<Link to="/shopcar" className="gocount">去购物车结算</Link>
      				<Link to="/" className="goback">返回</Link>

      			</div>
      		</div>
          <Addcardown />
      	</div>
      </div>
    )
  }
}
export default Addcar
