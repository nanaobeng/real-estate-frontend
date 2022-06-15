import react,{useState} from 'react'
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
const BenefitLoop = () => {

    const iphone_12_landscape = useMediaQuery(
        json2mq({
          minWidth: 840,
        }),
      );
      const ipad_prop = useMediaQuery(
        json2mq({
          minWidth: 900,
        }),
      );
    const [benefits,setBenefits] = useState([

        {'icon':'icofont-data','title':'Data-Driven'},
        {'icon':'icofont-handshake-deal','title':'Transparent'},
        {'icon':'icofont-badge','title':'Efficient'}

    ])

    return(

        <div className='col-12 py-2'>
            <div className='row px-4 justify-content-center'>
                {benefits && benefits.map((benefit)=> {

                return(

                    iphone_12_landscape === true && ipad_prop !== true ?

                    <div className='col-4 '  >

                        <div className='row p-4'>

                            <div className='col-12  text-center' style={{paddingTop:'7.3vh',height:'30vh',backgroundColor:'rgba(245, 178, 33, 0.4)'}}>
                            

                                <i style={{fontSize:'15vh',color:'white'}} className={`${benefit.icon}`}></i>

                            </div>

                            <div className='col-12 pt-2 text-center'>
                              <span style={{fontWeight:'bold',fontSize:'4vh'}}>{benefit.title}</span> 
                            </div>

                        </div>

                    </div>


:




<div className='col-lg-4 col-sm-12 p-4 '  >

<div className='row p-4'>

    <div className='col-12  text-center' style={{paddingTop:'7.3vh',height:'25vh',backgroundColor:'rgba(245, 178, 33, 0.4)'}}>


        <i style={{fontSize:'10vh',color:'white'}} className={`${benefit.icon}`}></i>

    </div>

    <div className='col-12 pt-2 text-center'>
      <span style={{fontWeight:'bold',fontSize:'2vh'}}>{benefit.title}</span> 
    </div>

</div>

</div>
                
                )



                })}
               
            </div>
        </div>
    )


}

export default BenefitLoop