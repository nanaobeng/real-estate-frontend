import react from 'react'


const Footer = () => {


    return(

       
<div className="row py-4" style={{ fontFamily: 'Montserrat, sans-serif' ,backgroundColor:'#ffff'}}>

<div className='col-12'>
    <div className='row justify-content-center'>
        <div className="col-10">
        <hr style={{backgroundColor:'grey',border:'1px solid grey'}}/>
        </div>
        <div className='col-12 text-center py-2'>
            <b>Contact Us</b>
        </div>
    </div>
    
</div>

<div className='col-12'>

<div className='row justify-content-center'>
    <div className='col-4' >
        <div className='card' style={{borderColor:'transparent'}}>
            <div className='row justify-content-center'>
                <div className='col-lg-1 col-sm-2 py-1' >
                    <div className="row " style={{paddingRight:'5px'}}>
                        <div className='col-12 p-0 text-center' style={{border:"2px solid black",borderRadius:'7px'}}>
                        <i className="icofont-twitter"  ></i>
                        </div>
                    </div>
               
                </div>


                <div className='col-lg-1 col-sm-2 py-1' >
                    <div className="row " style={{paddingRight:'5px'}}>
                        <div className='col-12 px-0 text-center' style={{border:"2px solid black",borderRadius:'7px'}}>
                        <i className="icofont-facebook"  ></i>
                        </div>
                    </div>
               
                </div>


                <div className='col-lg-1 col-sm-2 py-1' >
                    <div className="row " style={{paddingRight:'5px'}}>
                        <div className='col-12 px-0 text-center' style={{border:"2px solid black",borderRadius:'7px'}}>
                        <i className="icofont-instagram"  ></i>
                        </div>
                    </div>
               
                </div>

                <div className='col-lg-1 col-sm-2 py-1' >
                    <div className="row " style={{paddingRight:'5px'}}>
                        <div className='col-12 px-0 text-center' style={{border:"2px solid black",borderRadius:'7px'}}>
                        <i className="icofont-instagram"  ></i>
                        </div>
                    </div>
               
                </div>



                
                
            </div>
        
        </div>
    </div>
</div>
</div>






</div>
    )


}

export default Footer