import React ,{Component} from "react"
import "./app.css"
// import Layout from "../Layout/Layout"
import Main from "../Main/Main"
import Loginform from "../Loginform/Loginform"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


class App extends Component{
  state={
    login:false,
    currentName:""
  }

  showLoginForm=()=>{
    console.log("showLoginForm...")
    this.setState({
      login:true
    })
  }

  hideLoginForm=()=>{
    this.setState({
      login:false
    })
  }

  login=(username)=>{
    this.setState({
      currentName:username
    })
  }
  logout=()=>{
    this.setState({
      login:false,
      currentName:""
    })
  }
  render(){
    const { login , currentName} =this.state

    return(
      <div className="app">
        <Header
          showLoginName ={currentName}
          showLogin={this.showLoginForm}
          logout={this.logout}/>

          <Main />

          { login && <Loginform hideLogin={this.hideLoginForm} login={this.login} />}
        <Footer />
      </div>)
  }
}

export default App
