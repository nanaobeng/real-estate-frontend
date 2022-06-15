import react from 'react'

import image from '../../../static/images/about_image.png'
import {ExternalLink} from 'react-external-link'
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
const About = () => {
    const matches = useMediaQuery(
        json2mq({
          minWidth: 1100,
        }),
      );

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

        <div className='row justify-content-center px-4 pb-4' style={{background: 'rgba(14, 64, 85, 1)'}}>


    {matches ?

            <div className='col-10 p-4'>

                <div className='row ' style={{paddingTop:'3vh'}}>

                    <div className='col-lg-6 col-sm-12 p-4'>
                        <div className='row'>
                            <div className='col-12 px-0' style={{height:'43vh'}}>
                                
                                    <img className='w-100 img-fluid' src={image} style={{height:'100%',borderRadius:'0.8vh'}}/>
                            </div>
                        </div>
                    </div>



                    <div className='col-lg-6 col-sm-12 p-4'>
                        <div className='row'>

                            <div className='col-12 pb-4' style={{color:'#ffff',fontWeight:'700',fontSize:'4vh'}}>
                            A Question or Statement Directed at Your Clients?
                            </div>
                            <div className='col-12' style={{color:'#ffff',fontSize:'2vh'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. sed do eiusmod tempor incididunt ut
                            magna aliqua. sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. labore et dolore magna aliqua.
                            </div>
                            <div className='col-12 py-4'>
                                <ExternalLink href="/about" target="_self">
                                <span style={{backgroundColor:'rgba(245, 178, 33, 1)'}} className="btn">
                                        <b style={{color:'white'}}>Learn More</b>
                                </span>
                                </ExternalLink>
                            </div>
                        
                        </div>

                    </div>
                </div>


            </div>


:

<div className='col-11 p-4'>

<div className='row ' style={{paddingTop:'4vh'}}>

    <div className='col-12 p-4'>
        <div className='row'>

            { iphone_12_landscape === true && ipad_prop !== true ?
  <div className='col-12' style={{height:'60vh',paddingLeft:'9%',paddingRight:'9%'}}>
                
  <img className='w-100 img-fluid' src={image} style={{height:'100%',borderRadius:'0.8vh'}}/>
</div>


:

<div className='col-12 px-0' style={{height:'43vh'}}>
                
<img className='w-100 img-fluid' src={image} style={{height:'100%',borderRadius:'0.8vh'}}/>
</div>
            }
          
        </div>
    </div>



    <div className='col-12 p-4'>


    {iphone_12_landscape ?

<div className='row' style={{paddingLeft:'9%',paddingRight:'9%'}}>
     


<div className='col-12 pb-4' style={{color:'#ffff',fontWeight:'700',fontSize:'7vh'}}>
A Question or Statement Directed at Your Clients?
</div>
<div className='col-12' style={{color:'#ffff',fontSize:'4vh'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. sed do eiusmod tempor incididunt ut
magna aliqua. sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. labore et dolore magna aliqua.
</div>
<div className='col-12 py-4'>
    <ExternalLink href="/about" target="_self">
    <span style={{backgroundColor:'rgba(245, 178, 33, 1)'}} className="btn">
            <b style={{color:'white',fontSize:'2vh'}}>Learn More</b>
    </span>
    </ExternalLink>
</div>

</div>

:
<div className='row'>
     


<div className='col-12 pb-4' style={{color:'#ffff',fontWeight:'700',fontSize:'4vh'}}>
A Question or Statement Directed at Your Clients?
</div>
<div className='col-12' style={{color:'#ffff',fontSize:'2vh'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. sed do eiusmod tempor incididunt ut
magna aliqua. sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. labore et dolore magna aliqua.
</div>
<div className='col-12 py-4'>
    <ExternalLink href="/about" target="_self">
    <span style={{backgroundColor:'rgba(245, 178, 33, 1)'}} className="btn">
            <b style={{color:'white'}}>Learn More</b>
    </span>
    </ExternalLink>
</div>

</div>


    }
    

    </div>
</div>


</div>

    }


        </div>

    )
}

export default About