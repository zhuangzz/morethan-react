import React ,{Component} from "react"
import Home from "../Home/Home"
import Addcar from "../Addcar/Addcar"
import Shopcar from "../Shopcar/Shopcar"
import CheckoutCounter from "../Checkout-counter/CheckeroutCounter"
import OrderDetails from "../OrderDetails/OrderDetails"
import Finish from "../Finish/Finish"
import { Route} from "react-router-dom"
import "./main.css"


class Main extends Component{
  render(){
    return(
      <div className="Main">
        <Route path="/" exact component={Home}></Route>
        <Route path="/addcar" component={Addcar}></Route>
        <Route path="/shopcar" component={Shopcar}></Route>
        <Route path="/orderdetails" component={OrderDetails}></Route>
        <Route path="/checkout" component={CheckoutCounter}></Route>
        <Route path="/finish" component={Finish}></Route>
      </div>
    )
  }
}
export default Main
