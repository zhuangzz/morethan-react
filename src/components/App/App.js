import React ,{Component} from "react"
import "./app.css"
import Layout from "../Layout/Layout"
import Home from "../Home/Home"


class App extends Component{
  render(){
    return(
      <div className="app">
        <Layout>
          <Home />
        </Layout>
      </div>)
  }
}

export default App
