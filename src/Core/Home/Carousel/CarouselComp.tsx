import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
const images = ['https://harbourhomes.com/revslider/media/12d6b-cypress-copper-rim_0018_DSC_3498.jpg', 'https://www.dubuquehomebuilders.com/wp-content/uploads/2020/10/house.FINAL-1.jpg', 'https://mhiresources.com/read/mhiimages/websitehomepageslider/513132_viridianislanddh9001pineland.jpg'];
const CarouselComp = () => {
  
  const NextArrow = ({onClick}:any) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}:any) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

const [imgIndex,setImgIndex] = useState<any>(0)

const settings:any = {
  infinite:true,
  lazyLoad: true,
  speed: 300,
  slidesToShow:3,
  centerMode: true,
  centerPadding: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  beforeChange: (current:any, next:any) => setImgIndex(next), 
};


  return (
    <div className="App">
      <h1>React 3D Slider</h1>
      <Slider {...settings}>
        {images.map((img, idx) => (
     
          <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
                 
            <img src={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselComp