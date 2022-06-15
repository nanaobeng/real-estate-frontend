import react, { useState,FC, useEffect } from 'react'

import { Carousel } from 'antd';
import {getImages} from '../APIs/PropertyAPIs'

interface Props {
    id: any
}

const PropertyCarousel:FC<Props> = ({id}) => {

    const [error, setError] = useState(false)
    const [images,setImages] = useState([])
   


    const loadImages = () => {
        getImages(id)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    
                    setImages(data)
                    console.log(data)
                    
                    
                }
            })
    }

    useEffect( ()=>{

        loadImages()



    },[id])
  

    return(
      <div className='col-12'>
      <Carousel autoplay>

          {images && images.map((image:any,i) => {
              return(

<div>
                    
    <img className='w-100 image-fluid' key={i} src={image.url} style={{height:'60vh'}}/>

</div>

              )

          })}
    
    
  </Carousel>
            </div>
    )
}
export default PropertyCarousel