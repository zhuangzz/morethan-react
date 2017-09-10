import React ,{Component} from "react"
import "./addcardown.css"

class Addcardown extends Component{
  render(){
    return(
      <div className="addcardown">
        <div className="down">
          <div className="other-need clearfix">
            <h4> 您可能还需要</h4>
            <span className="line-yellow"></span>
          </div>
          <ul className="other clearfix">
            <li className="clearfix">
              <a className="othimg" href="http"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
              <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a>

              <span className="price">¥88.00</span>
              <a className="addbag" href="http">
                <img src={require("../images/addcar-bag_19.jpg")} alt="" />
              </a>
            </li>
            <li className="clearfix">
              <a className="othimg" href="http"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
              <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a>

              <span className="price">¥88.00</span>
              <a className="addbag" href="http">
                <img src={require("../images/addcar-bag_19.jpg")} alt="" />
              </a>
            </li>
            <li className="clearfix">
              <a className="othimg" href="http"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
              <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a>

              <span className="price">¥88.00</span>
              <a className="addbag" href="http">
                <img src={require("../images/addcar-bag_19.jpg")} alt="" />
              </a>
            </li>
            <li className="clearfix">
              <a className="othimg" href="http"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
              <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a>

              <span className="price">¥88.00</span>
              <a className="addbag" href="http">
                <img src={require("../images/addcar-bag_19.jpg")} alt="" />
              </a>
            </li>
            <li className="clearfix">
              <a className="othimg" href="http"><img src={require("../images/addcar-other_11.jpg")} alt="" /></a>
              <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a>

              <span className="price">¥88.00</span>
              <a className="addbag" href="http">
                <img src={require("../images/addcar-bag_19.jpg")} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Addcardown
