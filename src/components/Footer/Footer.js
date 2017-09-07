import React ,{Component} from "react"
import "./footer.css"
import newitem from "../icon/newatom.svg"
import item from "../icon/question.svg"



class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="footer-top">
        <div className="footer-top-con">
          <div className="footer-top-l">
            <div className="color-color footer-title">帮助信息</div>
            <div className="help">
              <div className="mes">
                <a href="http"><img src={newitem} className="item" alt=""/></a>
                <a href="http" className="color-color footer-l-s">购物指南</a>
              </div>
              <div className="mes">
                <a href="http"><img src={require("../icon/phone.svg")} className="item" alt=""/></a>
                <a href="http" className="color-color footer-l-s">服务中心</a>
              </div>
              <div className="mes">
                <a href="http"><img src={require("../icon/pay.svg")} className="item" alt=""/></a>
                <a href="http" className="color-color footer-l-s">支付方式</a>
              </div>
              <div className="mes">
                <a href="http"><img src={require("../icon/aboutus.svg")} className="item" alt=""/></a>
                <a href="http" className="color-color footer-l-s">关于我们</a>
              </div>
              <div className="mes">
                <a href="http"><img src={require("../icon/carbig.svg")} className="item" alt=""/></a>
                <a href="http" className="color-color footer-l-s">配送方式</a>
              </div>
              <div className="mes">
                <a href="http"><img src={require("../icon/item.svg")} className="item" alt=""/></a>
                <a href="http" className="color-color footer-l-s">免责条款</a>
              </div>
              <div className="mes">
                <a href="http"><img src={item} className="item" alt=""/></a>
                <a href="http" className="color-color footer-l-s">售后服务</a>
              </div>
              <div className="mes">
                <a href="http"><img src={require("../icon/friendshipa.svg")} className="item" alt=""/></a>
                <a href="http" className="color-color footer-l-s">友情链接</a>
              </div>
            </div>

          </div>
          <div className="footer-top-m">
            <div className="color-color footer-title">关注我们</div>
            <div className="about-us"><img className="erweima" src={require("../images/fot1_03.jpg")} alt=""/><img className="erweima" src={require("../images/fot2_05.jpg")} alt=""/></div>
            <div className="about-us">
              <img className="tao-we" src={require("../icon/taobao.svg")} alt=""/><img className="tao-we" src={require("../icon/wechat-oc.svg")} alt=""/>
            </div>
          </div>
          <div className="footer-top-r">
            <div className="color-color footer-title">客服热线</div>
            <div className="phone-number">
              <img src={require("../icon/phone.svg")} alt=""/>
              <div className="some-special">
                <div className="color-color footer-t-r-n">400 113 5353</div>
                <div className="color-color footer-t-r-d">[周一至周五 9:00-18:00]</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="footer-bot">
          <div className="foterws">
				    <img src={require("../images/zhong_04.jpg")} alt="" />
            <div className="foterwo">
			        <span>北京开普乐科技有限公司@版权所有 Copyright 2015-2025 Morethan.cc All rights reserved</span>
			        <span>地址：北京市朝阳区建国路93号院4号楼4层505</span>
			      </div>
			    </div>
        </div>
      </div>
    )
  }
}
export default Footer
