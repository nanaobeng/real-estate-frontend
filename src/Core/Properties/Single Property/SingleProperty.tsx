import react,{useEffect,useState} from 'react'
import Layout from '../../../Components/CoreLayout/Layout'
import { Carousel } from 'antd';
import PropertyCarousel from './PropertyCarousel';
import PropertySummary from './PropertySummary';
import { useParams } from 'react-router-dom';
import { getListing ,getLocation ,listingIncrement} from '../APIs/PropertyAPIs';


const SingleProperty = () => {

    const {property_id} = useParams()
    const p_id:any = property_id 
    const [location, setLocation] = useState('');
    const [error, setError] = useState(false)
    const [property,setProperty] = useState<any>()

    const propertyLocation = () => {
        property && 
        getLocation(property.location_id)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setLocation(data.city)
                    console.log(data.city)
                    increment(property.listing_title, data.city)




                }
            })

    }

    const propertyDetails = (id:number) => {

        getListing(id)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    console.log(data)
                    setProperty(data)
                  
                    




                }
            })

    }

    const increment = (title:string, property_location:any) => {

        listingIncrement(p_id, title, property_location)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    console.log('incremented')




                }
            })

    }

    useEffect(()=>{
        propertyDetails(p_id)
    },[property_id])

    useEffect(()=>{
        propertyLocation()
    },[property])
    

    return(
        <Layout>
            <div className='row ' style={{backgroundColor:'#eeee',paddingLeft:'5%',paddingRight:'5%',paddingTop:'3%'}}>
                <div className='col-12'>

                    {property && 
                    <div className='row'>
                    <div className="col-12 py-2">
                                <h1><b>{property.listing_title}</b></h1>
                            </div>
                            <div className="col-12 ">
                                <div className="ui blue label">
                                    <i className="map marker alternate icon"></i> {location}
                                </div>
                                <div className='ui green label'>
                                {property.property_type === 'apartment' ? 
                'Apartment' 
                : property.property_type === 'house' ? 
                'House'
                : property.property_type === 'commercial' ? 
                'Commercial'
                :
                'Landplot'
            }
                                </div>

                                <div className="ui label">
                                    <i className="tags icon"></i> {property.purchase_type === "rent" ? 'Rent' : 'Sale'}
                                </div>

                               

                                {property.offplan && <div className="ui  label">
                                    Off-Plan
</div>}

                                {property.is_furnished && <div className="ui label">
                                    <i className="home icon"></i> Furnished
</div>}

                                {property.has_parking && <div className="ui label">
                                    <i className="car icon"></i> Parking Available
</div>}


                                {property.has_pool && <div className="ui label">
                                    <i className="tint icon"></i> Pool Available
</div>}


                                {property.has_gym && <div className="ui label">
                                    Gym Available
</div>}

                            </div>
                    </div>
}
                </div>
                <div className='col-lg-8 col-sm-12 p-4'>
                    <div className='row'>

                    <div className='col-12 px-0 shadow' style={{height:'60vh',backgroundColor:'#ffff'}}>
                    <div className='row'>
                    <PropertyCarousel id={property_id} />

                    </div>
                   
                   
                         
                      

                    </div>

                    </div>

                </div>
                <div className='col-lg-4 col-sm-12 p-4'>

                   
                            <PropertySummary id={property_id}/>

                            
                            


                   </div>  
            </div>
        </Layout>
    )

}

export default SingleProperty