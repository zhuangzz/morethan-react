import React ,{Component} from "react"
import "./bubble.css"

class Bubble extends Component{
  render(){
    return(
      <div className="bubble">
        <div className="qipao clearfix">
					<a href="http">确定删除</a>
					<a href="http">不删除</a>
				</div>
      </div>
    )
  }
}
export default Bubble
