import React,{Component} from "react"
import "~slick-carousel/slick/slick.css"
import "~slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

class CarouselFigure extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }
    const slides=[
      <div className="slides-continer">
        <div className="slides-item">
          <img src={require("../images/banner1_18.jpg")} alt=""/>
        </div>
      </div>,
      <div className="slides-continer">
        <div className="slides-item">
          <img src={require("../images/banner2_20.jpg")} alt=""/>
        </div>
      </div>,
      <div className="slides-continer">
        <div className="slides-item">
          <img src={require("../images/banner3_22.jpg")} alt=""/>
        </div>
      </div>
    ]
    const slider=(<Slider {...settings}>{slides}</Slider>)
    return(<div className="carouselfigure">
      {slider}
    </div>)
  }
}
export default CarouselFigure
