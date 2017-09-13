import React ,{Component} from "react"
import CarouselFigure from "../CarouselFigure/CarouselFigure"
import "./home.css"
import Countdown from "../Countdown/Countdown"
import {Link } from "react-router-dom"



class Home extends Component{
  state={
    style:["iphone5","iphone6","iphone6+"],
    size:["XXS","XS","S","M","L","XL","XXL"],
    active:0,
    active1:0,
    num:1
  }
  handleStyle=(i)=>{
    this.setState({
      active:i
    })
  }
  handleSize=(ind)=>{
    this.setState({
      active1:ind
    })
  }
  handleAdd=()=>{
    this.setState({
      num:this.state.num+1
    })
  }

  handleMin=()=>{
    if(this.state.num>1){
      this.setState({
          num:this.state.num-1
      })
    }
  }


  render(){
    const{num}=this.state
    const style=this.state.style.map((t,i)=>(
      <a  onClick={()=>this.handleStyle(i)} className={`style-o ${i===this.state.active &&"change"}`} key={i}>{t}</a>
    ))
    const size=this.state.size.map((item,ind)=>(
      <span  onClick={()=>this.handleSize(ind)} className={`size-o ${ind===this.state.active1 &&"change"}`} key={ind}>{item}</span>
    ))


    return(
      <div className="home-home">
        <CarouselFigure />
        <div className="main clearfix">
			  <div className="mainup"></div>
			  <div className="mainmin clearfix">
					<ul className="one clearfix">
						<li className="clearfix"> <img src={require("../images/yu_17.jpg")} alt="" /><p>龙之谷六周年限定礼包大Boos冰龙款男士T恤</p></li>
						<li className="clearfix">
						<span>据预售结束</span>
						<span>相关专区</span>
						</li>
						<li><span className="time">< Countdown /></span><img src={require("../images/mainleft_09.png")} alt="" /></li>
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
                     	{style}
                    </li>
                     	<li className="twof clearfix">
                     	<span className="size-f">尺码</span>
                     	<div className="twofo clearfix">
                     	{size}
                     	</div>
                     	</li>
                     	<li className="twofi clearfix"><span>数量</span><a  className="jian" onClick={this.handleMin}>-</a><span className="xin">{num}</span><a  className="add" onClick={this.handleAdd}>+</a></li>
                     	<li className="twos"><span>注：</span>商品将于<span>2016/10/5</span>统一发货</li>
                     </ul>
				<Link to="/addcar" className="order-now555">立即预定</Link>
			</div>
			<div className="maindown"><img src={require("../images/neirong_07.jpg")} alt="" /></div>
		</div>

        <img className="home-bigimg" src={require("../images/neirong_07.jpg")} alt=""/>
      </div>
    )
  }
}
export default Home
