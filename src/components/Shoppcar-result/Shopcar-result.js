import React,{Component} from "react"
import "./shopcar-result.css"
import imagess from "../images/shopcar-trash_19.jpg"
import {Link} from "react-router-dom"

class Shopcarresult extends Component{
  render(){
    return(
      <div className="shopcarresult">
        <li className="clearfix">
  				<div className="boleft clearfix">
  					<input className="allche all" type="checkbox" name="" id="" />
  					<span className="allc">全选</span>
  				  <a href="http" className="tr"><img className="alldel" src={imagess} alt="" /></a>
  				  <a className="dele alldel" href="http">删除</a>
  				  <span className="state">共<span>0</span>件商品，已选择<span className="did">1</span>件</span>
  				  <span className="coun">¥<span>79</span>.00</span>
  				  <div>
  					  <span>合计:</span>
  					  <p>[不含运费]</p>
  				  </div>
  				</div>
  				<Link className="goto-result" to="/orderdetails">去结算</Link>
  				<div className="paopao clearfix">
  					<a href="http">确定删除</a>
  					<a href="http">不删除</a>
  				</div>
  			</li>
      </div>
    )
  }
}
export default Shopcarresult
