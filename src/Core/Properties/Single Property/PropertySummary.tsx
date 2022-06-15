import React , {useState, useEffect,FC} from 'react';
import { Tabs } from 'antd';

import {getListing,getLocation} from '../APIs/PropertyAPIs'
import AvailabilityForm from '../PropertyAvailability/AvailabilityForm';


interface Props {
    id:any
}

const { TabPane } = Tabs;
function callback(key:any) {
    console.log(key);
  }




const PropertySummary:FC<Props> = ({id}) => {

    const [error, setError] = useState(false)
    const [property,setProperty] = useState<any>()
    const [location,setLocation] = useState("")

    const propertyLocation = () => {
        property && 
        getLocation(property.location_id)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setLocation(data.city)
                    // console.log(data.city)
                    // increment(title, data.city)




                }
            })

    }
  
    const loadProperty = () => {
      getListing(id)
          .then(data => {
              if (data.error) {
                  setError(data.error)
              }
              else {
                  
                  setProperty(data)
                 
                  
                  
                  
              }
          })
  }
  
  useEffect( ()=>{
  
      loadProperty()
  
  
  
  },[id])

  useEffect(()=>{
    propertyLocation()

  },[property])
    
 return(

    <div className='row shadow' style={{backgroundColor:'white',borderTopLeftRadius:'1.5vh',borderTopRightRadius:'1.5vh'}}>
    <div className='col-12' style={{height:'11vh',background: 'rgba(245, 178, 33, 1)',borderRadius:'1.5vh'}}>
    <div className="row py-4" >
        {property && 
                <div className="col-12 pt-1 text-center" >
                    <b style={{color:'black',fontSize:'3.8vh'}}>GH¢ {property.price && (property.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</b>
                </div>
}
            </div>

    </div>
    <div className='col-12 p-4' style={{height:'49vh',backgroundColor:'#ffff'}}>
 


     <div>
         <Tabs defaultActiveKey="1" type="card" onChange={callback}>
            <TabPane tab="Overview" key="1">
            <div className='row p-4'>
                <div className='col-12 overflow-auto' style={{fontSize:'1.5vh',height:'49vh'}}>

                    {property && <span style={{fontSize:'2vh',fontWeight:'bold'}}>{property.listing_title} <hr/></span>}
                    {property &&  
                property.description}
                </div>
                
            </div>
            </TabPane>
            <TabPane tab="Request Availability" key="2">
            <div className='row py-4'>
                <div className='col-12 overflow-auto' style={{fontSize:'1.5vh'}}>
                    {property && 
                        <AvailabilityForm id={property.listing_id}/>
                    }
                </div>
                
            </div>
            </TabPane>
          
          
  </Tabs>

     </div>

     
     </div>
     

                    </div>
                    
                
 )

}

export default PropertySummary