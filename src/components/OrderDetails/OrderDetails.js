import React ,{Component} from "react"
import "./orderdetails.css"
import OrderUp from "../Order-details-up/OrderUp"
import OrderMain from "../Order-details-main/OrderMain"
import OrderDown from "../Order-details-down/OrderDown"

class OrderDetails extends Component{
  state={
    address:[
      {
        name:"阿不来提·阿不都热西提",
        id:"新疆维吾尔族自治区博尔博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        num:1865149
      },
      {
        name:"买买提·艾力",
        id:"新疆维吾尔自治区伊犁州新源县那拉提镇农场科勒布拉克村2组",
        num:1591136
      },
      {
        name:"迪力木拉提",
        id:"新疆维吾尔族自治区伊犁哈萨克自治州奎屯市乌鲁木齐西路59园72栋1单元1103号",
        num:1860734
      }

    ]
  }
  render(){
    const listid=this.state.address.map((item,i)=>(


    <ul key={i} className="goods-id">
      <li>{item.name}</li>
      <li>{item.id}
       <a href="http">删除</a>
       <a href="http">编辑</a>
       <a href="http">设为默认</a>
       <div className="qipao clearfix">
        <a href="http">确定删除</a>
        <a href="http">不删除</a>
       </div>
      </li>
      <li>{item.num}</li>
    </ul>

))
    return(
      <div className="orderdetails">
        <OrderUp />


        <div className="main clearfix">
          <div className="maino">
              <h3>收货地址</h3>
              <h4><a href="http">+</a>新增地址</h4>
          </div>
          {listid}
          <a className="more-more" href="http">显示更多</a>
         </div>
         <OrderMain />
         <OrderDown />


      </div>
    )
  }
}
export default OrderDetails
