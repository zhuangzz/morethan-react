import React ,{Component} from "react"
import "./home.css"


class Home extends Component{
  render(){
    return(
      <div className="home">
        <div className="main clearfix">
			  <div className="mainup"></div>
			  <div className="mainmin clearfix">
					<ul className="one clearfix">
						<li className="clearfix"> <img src={require("../images/yu_17.jpg")} alt="" /><p>龙之谷六周年限定礼包大Boos冰龙款男士T恤</p></li>
						<li className="clearfix">
						<span>据预售结束</span>
						<span>相关专区</span>
						</li>
						<li><span className="time">24:3:34:2</span><img src={require("../images/mainleft_09.png")} alt="" /></li>
						<li>
						<span>分享</span>
						<span className="sha"><a href="http"><img className="iconfont share" src={require("../icon/blog.svg")} alt=""/></a></span>
						<span><a href="http"><img className="iconfont share" src={require("../icon/wechatsmall.svg")} alt=""/></a></span></li>
					</ul>

                     <ul className="two clearfix">
                     	<li className="twoo clearfix">
                     	<span>定金</span>
                     	<span>￥500.00</span>
                     	<span>全款金额：￥1500.00</span>
                     	</li>
                     	<li className="twot clearfix">
                     	<span>款式</span>
                     	<a href="http">iphone5</a>
                     	<a href="http">iphone6</a>
                     	<a href="http">iphone6+</a></li>
                     	<li className="twof clearfix">
                     	<span>尺码</span>
                     	<div className="twofo clearfix">
                     	<a href="http">XXS</a>
                     	<a href="http">XS</a>
                     	<a href="http">S</a>
                     	<a href="http">M</a>
                     	<a href="http">L</a>
                     	<a href="http">XL</a>
                     	<a href="http">XXL</a>
                     	</div>
                     	</li>
                     	<li className="twofi clearfix"><span>数量</span><a href="http" className="jian">-</a><span className="xin">1</span><a href="http" className="add">+</a></li>
                     	<li className="twos"><span>注：</span>商品将于<span>2016/10/5</span>统一发货</li>
                     </ul>
				<a href="http">立即预定</a>
			</div>
			<div className="maindown"><img src={require("../images/neirong_07.jpg")} alt="" /></div>
		</div>

        <img className="home-bigimg" src={require("../images/neirong_07.jpg")} alt=""/>
      </div>
    )
  }
}
export default Home
