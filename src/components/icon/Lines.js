import React ,{Component} from "react"

class Lines extends Component{
  render(){
    const {fill,size}=this.props
    return(
      <svg class="icon" fill={fill} width={size}  viewBox="0 0 1024 1024" version="1.1" ><path fill="#333333" d="M128 448l768 0 0 128-768 0 0-128ZM128 192l768 0 0 128-768 0 0-128ZM128 708l768 0 0 128-768 0 0-128Z" /></svg>
    )
  }
}
export default Lines
