import React ,{Component} from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./layout.css"


class Layout extends Component{
  render(){
    return(
      <div className="layout">
          <Header />
          {this.props.children}
          <Footer />
      </div>
    )
  }
}
export default Layout
