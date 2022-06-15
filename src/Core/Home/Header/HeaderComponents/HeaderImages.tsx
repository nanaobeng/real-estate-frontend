import react from 'react'
import header_1 from '../../../../static/images/header_image_1.png'
import header_2 from '../../../../static/images/header_image_2.png'
import header_3 from '../../../../static/images/header_image_3.png'
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
const HeaderImages = () => {
    const matches = useMediaQuery(
        json2mq({
          minWidth: 1100,
        }),
      );

    return(

        matches ?
        <div className=' d-none d-lg-block col-5 px-4'>

                    <div className='row pr-4'>

                         <div className='col-12' >

                             <div className='row '>

                                 <div className='col-6 pr-4' >

                                     <div className='row'>
                                         <div className='col-12 px-0' style={{height:'60vh'}}>
                                             <img className='  w-100 img-fluid' src={header_1} style={{height:'100%'}}/>

                                         </div>
                                     </div>

                                 </div>

                                 <div className='col-6 px-4' >

                                     <div className='row'>
                                         <div className='col-12' style={{paddingBottom:'1vh'}} >
                                             <div className='row'>
                                                 <div className='col-12 px-0'style={{height:'29vh'}}>
                                                 <img className=' w-100 img-fluid' src={header_2} style={{height:'100%'}}/>
                                                 </div>
                                             </div>

                                         </div>

                                         <div className='col-12 ' style={{paddingTop:'1vh'}} >
                                             <div className='row'>
                                                 <div className='col-12 px-0'style={{height:'29vh'}}>
                                                 <img className=' w-100 img-fluid' src={header_3} style={{height:'100%'}}/>

                                                 </div>
                                             </div>

                                         </div>

                                         
                                     </div>

                                 </div>

                                 



                             </div>

                         
                         </div>
                    
                    </div>

                </div>


:

<div></div>

    )
}

export default HeaderImages