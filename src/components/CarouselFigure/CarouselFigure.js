import React,{Component} from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./carouselfigure.css"

class CarouselFigure extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true
    }
    const slides=[
      <div className="slides-continer" key="1">
        <div className="slides-item">
          <img src={require("../images/banner1_18.jpg")} alt=""/>
        </div>
      </div>,
      <div className="slides-continer" key="2">
        <div className="slides-item">
          <img src={require("../images/banner2_20.jpg")} alt=""/>
        </div>
      </div>,
      <div className="slides-continer" key="3">
        <div className="slides-item">
          <img src={require("../images/banner3_22.jpg")} alt=""/>
        </div>
      </div>
    ]
    const slider=(<Slider {...settings}>{slides}</Slider>)


    return(<div className="carouselfigure">
      <div className="slider-con">
        {slider}
      </div>

    </div>)
  }
}
export default CarouselFigure
