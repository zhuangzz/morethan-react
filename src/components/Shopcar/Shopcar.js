import React ,{Component} from "react"
import "./shopcar.css"
import imagess from "../images/shopcar-goods_11.jpg"
import ShopcarResult from "../Shoppcar-result/Shopcar-result"
import ShopcarUp from "../Shopcar-up/ShopcarUp"
import Bubble from "../Shopcar-Bubble/Bubble"

class Shopcar extends Component {
  state={
    goods:[{
      imgall:imagess
    },
    {
      imgall:imagess
    },
    {
      imgall:imagess
    },
    {
      imgall:imagess
    },
    {
      imgall:imagess
    },
    {
      imgall:imagess
    }],
    num:1
  }
  handleAdd=(i)=>{

    // if(i===this.parentNode.parentNode.key)
    this.setState({
      num:this.state.num+1
    })
  }
  render(){
    const { num }=this.state
    const list=this.state.goods.map((item,i)=>(
      <li className="ll clearfix" key={i}>
        <input className="allche choose" type="checkbox" name="" id="" />
        <a className="goodsimg" href="http"><img  src={item.imgall} alt="" /></a>

        <div className="title">
  				<span>龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
  				<p>款式：iphone3</p>
  				<p>尺码：XL</p>
  			</div>
        <span className="price">¥<span>79</span>.00</span>
				<div className="num">
					<a className="min" href="http" >-</a>
					<span >{num}</span>
					<a className="add" onClick={()=>this.handleAdd(i)} key={i}>+</a>
				</div>
				<span className="subtotal">¥<span>79</span>.00</span>
				<a className="del" href="http"><img src={require("../images/shopcar-dele_14.jpg")} alt="" /></a>
				<Bubble />
      </li>

    ))

    return(
      <div className="shopcar">
        <ShopcarUp />
        <ul className="main">
      		<li>
      			<input className="allche all" type="checkbox" name="" id="" />
      			<span>全选</span>
      			<span>商品</span>
      			<span>单价</span>
      			<span>数量</span>
      			<span>小计</span>
      			<span>操作</span>
      		</li>
          {list }
          <ShopcarResult />
        </ul>
      </div>

    )
  }
}
export default Shopcar
