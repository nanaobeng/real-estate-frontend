import react from 'react'
import BenefitLoop from './BenefitComponents/BenefitLoop'
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';

const Benefits = () => {
    const iphone_12_landscape = useMediaQuery(
        json2mq({
          minWidth: 840,
        }),
      );
      const ipad_prop = useMediaQuery(
        json2mq({
          minWidth: 1050,
        }),
      );

    
    return(
        <div className='row p-4'>
           {  iphone_12_landscape === true && ipad_prop !== true ?
            <div className='col-12 text-center'>

    

<span style={{fontWeight:'bold',fontSize:'5vh'}}>Why Swift Homes</span><br/>
<span style={{fontSize:'3.5vh'}}>The Official Selection of the world’s best stays</span>
                
            
        
        

                

            </div>

            :

            

            

            <div className='col-12 text-center'>

     

            <span style={{fontWeight:'bold',fontSize:'3vh'}}>Why Swift Homes</span><br/>
            <span style={{fontSize:'2vh'}}>The Official Selection of the world’s best stays</span>
                            
                        
                    
                    
            
                            
            
                        </div>

           }
            <BenefitLoop/>

        </div>
    )

}

export default Benefits