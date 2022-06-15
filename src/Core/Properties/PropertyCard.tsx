import react,{useEffect , useState,FC} from 'react'
import {getLocation} from './APIs/PropertyAPIs'
import { ExternalLink } from 'react-external-link';

interface Props {
    property : any
}

const PropertyCard:FC<Props> = ({property}) => {


    const [error, setError] = useState(false)

    
    const [location,setLocation] = useState()

    const loadLocation = (id:number) => {

        getLocation(id)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {

                    setLocation(data.city)

                }
            })

    }


    useEffect(() => {
        loadLocation(property.location_id)

    }, [])


    return(


        
        <ExternalLink target="_self" href={`/property/${property.listing_id}`}  style={{cursor:'pointer'}}>

        <div className='row'>


            <div className='col-12 px-0' style={{height:'26vh'}}>
                <img className='img-fluid w-100' style={{height:'100%'}} src={property.thumbnail}/>

            </div>
            <div className='col-12 p-4' style={{background:'rgba(14, 64, 85, 1)',height:'12vh',borderBottomLeftRadius:'1vh',borderBottomRightRadius:'1vh'}}>
                <div className='row'>
                <div className='col-7'>

                    <span style={{fontWeight:'bold',color:'white',fontSize:'1.5vh'}}>{property.listing_title}</span><br/>
                   <span style={{color:'#eeee',fontSize:'1.2vh'}} > <i  className='icofont-google-map'></i> {location}</span>

                </div>
                <div className='col-5'>
                    <div className='row px-2'>
                        <div className='col-12  text-center' style={{paddingTop:'1.2vh',height:'6vh',backgroundColor:'#ffff',borderRadius:'0.4vh'}}>

                        <p style={{color:'black',fontSize:'1.1vh',marginBottom:'0'}}>GH¢</p>
                        <p style={{fontWeight:'bold',color:'black',fontSize:'1.3vh',margin : '0', paddingTop:'0'}}>{property.price}</p>

                        </div>

                    </div>


                </div>
                </div>

            </div>

        </div>
        </ExternalLink>



   
    )


}

export default PropertyCard