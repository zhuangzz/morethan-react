import React ,{Component} from "react"
// import Home from "../Home/Home"
// import Addcar from "../Addcar/Addcar"
import Shopcar from "../Shopcar/Shopcar"
import "./main.css"

class Main extends Component{
  render(){
    return(
      <div className="Main">
        <Shopcar />
      </div>
    )
  }
}
export default Main
