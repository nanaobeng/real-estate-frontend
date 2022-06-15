import react,{useState,useEffect} from 'react'
import {getLocations} from '../../APIs/HomeAPIs'
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';

const Description = () => {
    const matches = useMediaQuery(
        json2mq({
          minWidth: 1100,
        }),
      );

      const to_you = useMediaQuery(
        json2mq({
          minWidth: 1370,
        }),
      );

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


      

    const [locations, setLocations] = useState([])
    const [error, setError] = useState(false)


    const [purchaseFilter, setPurchaseFilter] = useState('sale')
    const [locationFilter, setLocationFilter] = useState('')

    const searchFilter = () => {

        let query = '/properties?location=' + locationFilter + '&purchase=' + purchaseFilter
        window.location.href = query

        

    }
    
    



    // Function retrieves list of locations from database for filtering
     const loadLocations = () => {
        getLocations()
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setLocations(data)
                    console.log(data)
                }
            })
    }

    


    useEffect(()=>{
        loadLocations()
    },[])

    return(

        matches ?  
        <div className='col-lg-7 col-md-12 px-4'>

        <div className='row px-4'>

            

            <div className='col-12' style={{minHeight:'60vh'}}>
      
                <div className='row'>
                    <div className='col-lg-12 d-none d-lg-block d-xl-block'>
                    <span style={{fontStyle:'normal',fontWeight: '700',fontSize: '6.5vh'}}>Find Properties Tailored {to_you && <br/>}<span style={{color:'rgba(245, 178, 33, 1)'}}>To You</span></span>
                    </div>
                    <div className='col-md-12 d-xl-none  d-lg-none text-center'>
                    <span style={{fontStyle:'normal',fontWeight: '700',fontSize: '6.5vh'}}>Find Properties Tailored <span style={{color:'rgba(245, 178, 33, 1)'}}>To You</span></span>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-10 col-md-12 pt-4' style={{fontSize:'2.5vh'}}>
                    Swift Homes is a brokerage firm situated in Ghana that is focused on finding clients the best  “value for money” when it comes to properties and land in Ghana. <br/> 
                    We make it a point to understand every one of our client's needs in order to best guide them through the process of either selling or acquiring a new property. <br/> <br/>
                  

                    </div>
                </div>

                <div className='row py-4 '>

                    <div className='col-lg-10 col-md-12'>
                        <div className='row'>
                            <div className='col-lg-2 col-md-3 px-4 pb-2'>
                                <div className='row'>
                                    <div className='col-12 text-center' style={{paddingTop:'1.25vh',border:'2px solid black',height:'5vh',borderRadius:'0.7vh'}}>
                                        <i style={{fontSize:'2vh'}} className='icofont-google-map'></i>
                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-4 col-md-9 px-4 pb-2'>
                                <div className='row'>
                                <div className='col-12 px-0'>
                                    
                                        <select onChange={(e)=> {setLocationFilter(e.target.value)}}  value={locationFilter}  className='form-control' style={{fontSize:'1.8vh',border:'2px solid rgba(196, 196, 196, 1)',backgroundColor:'rgba(196, 196, 196, 1)',height:'5vh',borderRadius:'0.7vh'}}>
                                          
                                        {locations && locations.map((location:any,i) => {
                                            return(
                                                i === 0 ? 
                                             <option  value={location.city} selected>{location.city}</option>

                                             :
                                             <option  value={location.city} >{location.city}</option>
                                            )
                                            })}

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-3 col-md-12 px-4 pb-2'>
                                <div className='row'>
                                <div className='col-12 px-0'>
                                        <select   value={purchaseFilter} onChange={(e)=> {setPurchaseFilter(e.target.value)}} className='form-control' style={{border:'2px solid rgba(196, 196, 196, 1)',backgroundColor:'rgba(196, 196, 196, 1)',height:'5vh',borderRadius:'0.7vh',fontSize:'1.8vh'}}>
                                        
                                        <option value="sale">
                                                Sale
                                            </option>
                                            <option value="rent">
                                                Rent
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-3 col-md-12 px-4'>
                                <div className='row'>
                                    <div className='col-12 px-0' onClick={()=> searchFilter()}>
                                        <span className="btn w-100 pt-2" style={{border:'2px solid rgba(245, 178, 33, 1)',backgroundColor:'rgba(245, 178, 33, 1)',height:'5vh',borderRadius:'0.7vh'}}>
                                            <b style={{color:'white',fontSize:'2vh'}}>Search</b>
                                        </span>
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
    <div className='col-12 px-4'>
        <div className='row px-4'>

            

<div className='col-12' >

    <div className='row'>
   
    {iphone_12_landscape ?

<div className='col-md-12  text-center'>
<span style={{fontStyle:'normal',fontWeight: '700',fontSize: '8vh'}}>Find Properties Tailored <span style={{color:'rgba(245, 178, 33, 1)'}}>To You</span></span>
</div>
:

        <div className='col-md-12  text-center'>
        <span style={{fontStyle:'normal',fontWeight: '700',fontSize: '6.5vh'}}>Find Properties Tailored <span style={{color:'rgba(245, 178, 33, 1)'}}>To You</span></span>
        </div>

    }
    </div>

    <div className='row'>

    {iphone_12_landscape ?
        <div className=' col-12 pt-4' style={{fontSize:'3.5vh'}}>
        Swift Homes is a brokerage firm situated in Ghana that is focused on finding clients the best  “value for money” when it comes to properties and land in Ghana. <br/> 
        We make it a point to understand every one of our client's needs in order to best guide them through the process of either selling or acquiring a new property. <br/> <br/>
      

        </div>

        :
<div className=' col-12 pt-4' style={{fontSize:'2.2vh'}}>
        Swift Homes is a brokerage firm situated in Ghana that is focused on finding clients the best  “value for money” when it comes to properties and land in Ghana. <br/> 
        We make it a point to understand every one of our client's needs in order to best guide them through the process of either selling or acquiring a new property. <br/> <br/>
      

        </div>

    }
    </div>

    <div className='row py-4 '>

        <div className='col-12'>

        {ipad_prop?

<div className='row py-4 '>

<div className='col-12'>
    <div className='row'>
        <div className='col-4 px-4 pb-2'>
            <div className='row'>
                <div className='col-12 text-center' style={{paddingTop:'1.25vh',border:'2px solid black',height:'5vh',borderRadius:'0.7vh'}}>
                    <i style={{fontSize:'2vh'}} className='icofont-google-map'></i>
                </div>
            </div>
        </div>


        <div className='col-8 px-4 pb-2'>
            <div className='row'>
            <div className='col-12 px-0'>
                
                    <select onChange={(e)=> {setLocationFilter(e.target.value)}}  value={locationFilter}  className='form-control' style={{fontSize:'1.8vh',border:'2px solid rgba(196, 196, 196, 1)',backgroundColor:'rgba(196, 196, 196, 1)',height:'5vh',borderRadius:'0.7vh'}}>
                      
                    {locations && locations.map((location:any,i) => {
                        return(
                            i === 0 ? 
                         <option  value={location.city} selected>{location.city}</option>

                         :
                         <option  value={location.city} >{location.city}</option>
                        )
                        })}

                    </select>
                </div>
            </div>
        </div>

        <div className='col-12 px-4 pb-2'>
            <div className='row'>
            <div className='col-12 px-0'>
                    <select   value={purchaseFilter} onChange={(e)=> {setPurchaseFilter(e.target.value)}} className='form-control' style={{border:'2px solid rgba(196, 196, 196, 1)',backgroundColor:'rgba(196, 196, 196, 1)',height:'5vh',borderRadius:'0.7vh',fontSize:'1.8vh'}}>
                    
                    <option value="sale">
                            Sale
                        </option>
                        <option value="rent">
                            Rent
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div className='col-12 px-4'>
            <div className='row'>
                <div className='col-12 px-0' onClick={()=> searchFilter()}>
                    <span className="btn w-100 pt-2" style={{border:'2px solid rgba(245, 178, 33, 1)',backgroundColor:'rgba(245, 178, 33, 1)',height:'5vh',borderRadius:'0.7vh'}}>
                        <b style={{color:'white',fontSize:'2vh'}}>Search</b>
                    </span>
                </div>
            </div>
        </div>


    </div>
</div>



</div>

:


            <div className='row'>


        


                <div className='col-lg-2 col-md-3 px-4 pb-2'>
                    { iphone_12_landscape ?




<div className='row'>
    
<div className='col-12 text-center' style={{paddingTop:'2vh',border:'2px solid black',height:'10vh',borderRadius:'0.7vh'}}>
    <i style={{fontSize:'4vh'}} className='icofont-google-map'></i>
</div>
</div>
                    
                :
            
                <div className='row'>
                    
                        <div className='col-12 text-center' style={{paddingTop:'1.25vh',border:'2px solid black',height:'5vh',borderRadius:'0.7vh'}}>
                            <i style={{fontSize:'2vh'}} className='icofont-google-map'></i>
                        </div>
                    </div>
                
                }
                    
                </div>


                <div className='col-lg-4 col-md-9 px-4 pb-2'>
                    <div className='row'>

                    { iphone_12_landscape ?
 <div className='col-12 px-0'>
                        
 <select onChange={(e)=> {setLocationFilter(e.target.value)}}  value={locationFilter}  className='form-control' style={{fontSize:'3vh',border:'2px solid rgba(196, 196, 196, 1)',backgroundColor:'rgba(196, 196, 196, 1)',height:'10vh',borderRadius:'0.7vh'}}>
   
 {locations && locations.map((location:any,i) => {
     return(
         i === 0 ? 
      <option   value={location.city} selected>{location.city}</option>

      :
      <option  value={location.city} >{location.city}</option>
     )
     })}

 </select>
</div>


:

<div className='col-12 px-0'>
                        
<select onChange={(e)=> {setLocationFilter(e.target.value)}}  value={locationFilter}  className='form-control' style={{fontSize:'1.8vh',border:'2px solid rgba(196, 196, 196, 1)',backgroundColor:'rgba(196, 196, 196, 1)',height:'5vh',borderRadius:'0.7vh'}}>
  
{locations && locations.map((location:any,i) => {
    return(
        i === 0 ? 
     <option  value={location.city} selected>{location.city}</option>

     :
     <option  value={location.city} >{location.city}</option>
    )
    })}

</select>
</div>

                    }
                   
                    </div>
                </div>

                <div className='col-lg-3 col-md-12 px-4 pb-2'>
                    <div className='row'>

                    { iphone_12_landscape ?
                        <div className='col-12 px-0'>
                            <select   value={purchaseFilter} onChange={(e)=> {setPurchaseFilter(e.target.value)}} className='form-control' style={{border:'2px solid rgba(196, 196, 196, 1)',backgroundColor:'rgba(196, 196, 196, 1)',height:'10vh',borderRadius:'0.7vh',fontSize:'3vh'}}>
                            
                            <option value="sale">
                                    Sale
                                </option>
                                <option value="rent">
                                    Rent
                                </option>
                            </select>
                        </div>


:

<div className='col-12 px-0'>
                            <select   value={purchaseFilter} onChange={(e)=> {setPurchaseFilter(e.target.value)}} className='form-control' style={{border:'2px solid rgba(196, 196, 196, 1)',backgroundColor:'rgba(196, 196, 196, 1)',height:'5vh',borderRadius:'0.7vh',fontSize:'1.8vh'}}>
                            
                            <option value="sale">
                                    Sale
                                </option>
                                <option value="rent">
                                    Rent
                                </option>
                            </select>
                        </div>

                    }
                    
                    </div>
                </div>

                <div className='col-lg-3 col-md-12 px-4'>
                    <div className='row'>

                        { iphone_12_landscape ? 
                        <div className='col-12 px-0' onClick={()=> searchFilter()}>
                            <span className="btn w-100 pt-2" style={{border:'2px solid rgba(245, 178, 33, 1)',backgroundColor:'rgba(245, 178, 33, 1)',height:'10vh',borderRadius:'0.7vh'}}>
                                <b style={{color:'white',fontSize:'3vh'}}>Search</b>
                            </span>
                        </div>

                        :

                        <div className='col-12 px-0' onClick={()=> searchFilter()}>
                        <span className="btn w-100 pt-2" style={{border:'2px solid rgba(245, 178, 33, 1)',backgroundColor:'rgba(245, 178, 33, 1)',height:'5vh',borderRadius:'0.7vh'}}>
                            <b style={{color:'white',fontSize:'2vh'}}>Search</b>
                        </span>
                    </div>

}
                    </div>
                </div>


            </div>


}
        </div>
        

        
    </div>

</div>
</div>
    </div>


    )

}

export default Description