import React ,{Component} from "react"
import Lines from "../icon/lines.svg"
import Shopbag from "../icon/shopbag.svg"
import "./header.css"



class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="header-con">
          <a href="http"><img className="line" src={Lines} alt=""/></a>
          <a href="http" className="logo"><img  src={require('../images/zhong_04.jpg')} alt=""/></a>
          <div>
            <a href="http"><img className="search" src={require('../icon/search.svg')} alt="" /></a>
            <a href="http" ><img className="bag" src={Shopbag} alt="" /></a>
          </div>

          <span>登录/注册</span>
        </div>
      </div>


    )
  }
}
export default Header
