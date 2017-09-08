import React ,{Component} from "react"
import "./addcar.css"

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
      				<a className="img" href="#"><img src={require("../images/addcar-thing_03.jpg")} alt="" /></a>
      				<span className="title">
      					<a href="#" >
      					龙之谷六周年限定大礼包大Boss冰龙款男士T恤
      				  </a>
      				</span>
      				<div className="detail">
      					<p>款式：iphone5</p>
      					<p>尺码：XL</p>
      					<p>数量：x1</p>
      				</div>
      				<a href="#" className="gocount">去购物车结算</a>
      				<a href="#" className="goback">返回</a>

      			</div>
      		</div>
      		<div className="down">
      			<div className="other-need clearfix">
      				<h4> 您可能还需要</h4>
      				<span className="line"></span>
      			</div>
      			<ul className="other clearfix">
      				<li className="clearfix">
      					<a className="othimg" href="#"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
      					<a className="title2" href="#">龙之谷六周年限定礼包大boss冰龙款...</a>

      					<span className="price">¥88.00</span>
      					<a className="addbag" href="#">
      					  <img src={require("../images/addcar-bag_19.jpg")} alt="" />
      					</a>
      				</li>
      				<li className="clearfix">
      					<a className="othimg" href="#"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
      					<a className="title2" href="#">龙之谷六周年限定礼包大boss冰龙款...</a>

      					<span className="price">¥88.00</span>
      					<a className="addbag" href="#">
      					  <img src={require("../images/addcar-bag_19.jpg")} alt="" />
      					</a>
      				</li>
      				<li className="clearfix">
      					<a className="othimg" href="#"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
      					<a className="title2" href="#">龙之谷六周年限定礼包大boss冰龙款...</a>

      					<span className="price">¥88.00</span>
      					<a className="addbag" href="#">
      					  <img src={require("../images/addcar-bag_19.jpg")} alt="" />
      					</a>
      				</li>
      				<li className="clearfix">
      					<a className="othimg" href="#"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
      					<a className="title2" href="#">龙之谷六周年限定礼包大boss冰龙款...</a>

      					<span className="price">¥88.00</span>
      					<a className="addbag" href="#">
      					  <img src={require("../images/addcar-bag_19.jpg")} alt="" />
      					</a>
      				</li>
      				<li className="clearfix">
      					<a className="othimg" href="#"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
      					<a className="title2" href="#">龙之谷六周年限定礼包大boss冰龙款...</a>

      					<span className="price">¥88.00</span>
      					<a className="addbag" href="#">
      					  <img src={require("../images/addcar-bag_19.jpg")} alt="" />
      					</a>
      				</li>
      			</ul>
      		</div>
      	</div>
      </div>
    )
  }
}
export default Addcar
