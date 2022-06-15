
import react from 'react'
import Layout from '../../Components/CoreLayout/Layout'
import about from '../../static/images/about.png'
import Team from './AboutComponents/Team'


const About = () => {

    return(

        <Layout>
            <div className='row'>
                <div className='col-12 p-4 text-center' style={{backgroundColor:'rgba(14, 64, 85, 1)',height:'14.5vh'}}>

                    <span style={{color:'white',fontWeight:'bold',fontSize:'6.5vh'}}>
                        ABOUT US
                    </span>

                </div>
                <div className=' col-12 p-4'>
                    <div className='row ' style={{paddingRight:'10%',paddingLeft:'10%'}}>
                        <div className='col-lg-6 col-sm-12 p-4'>
                            <div className='row '>
                                <div className='col-lg-8 col-sm-12 text-center' style={{paddingTop:'1vh',height:'5.8vh',backgroundColor:'rgba(245, 178, 33, 1)'}}>
                                <span style={{color:'rgba(14, 64, 85, 1)',fontWeight:'bold',fontSize:'2.5vh'}}>
                                    About Swift Homes
                                </span>
                                </div>
                                <div className='col-lg-10 col-sm-12 pt-3' style={{fontSize:'1.55vh'}}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam at felis vitae dui dictum
                                luctus ac sit amet quam. Etiam vestibulum
                                tempus nibh at sollicitudin. Nulla in nisi interdum,
                                porttitor odio vel, mattis ligula. Curabitur viverra

                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam at felis vitae dui dictum
                                luctus ac sit amet quam. Etiam vestibulum
                                tempus nibh at sollicitudin. Nulla in nisi interdum,
                                porttitor odio vel, mattis ligula. Curabitur viverra 
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 p-4'>
                           
                        <img className=' img-fluid' src={about} style={{height:'30vh'}}/>
                               

                        </div>
                    </div>
                </div>



                <div className='col-12 p-4 ' >
                    <div className='row justify-content-center' style={{paddingRight:'10%',paddingLeft:'10%'}}>
                    <div className='col-lg-4 col-sm-12 text-center' style={{paddingTop:'1vh',height:'5.8vh',backgroundColor:'rgba(245, 178, 33, 1)'}}>
                                <span style={{color:'rgba(14, 64, 85, 1)',fontWeight:'bold',fontSize:'2.5vh'}}>
                                What makes us Different
                                </span>
                                </div>
                    <div className='col-12 pt-3' style={{fontSize:'1.55vh'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at felis vitae dui dictum luctus ac sit amet quam. 
                    tempus nibh at sollicitudin. Nulla in nisi interdum, porttitor odio vel, mattis ligula. Curabitur viverra

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at felis vitae dui dictum luctus ac sit amet quam. 
                    tempus nibh at sollicitudin. Nulla in nisi interdum, porttitor odio vel, mattis ligula. Curabitur viverra 

                    </div>
                    </div>
                </div>

            <Team/>

                
            </div>
        </Layout>


    )


}

export default About