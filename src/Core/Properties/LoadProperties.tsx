import react,{useState,useEffect,FC} from 'react'

import {getLocation} from './APIs/PropertyAPIs'

import {getLocations}  from '../Home/APIs/HomeAPIs'
import PropertyCard from './PropertyCard'

interface Props {
    results : any[]
    
}

const LoadProperties:FC<Props> = (results) => {

    

    const [listings,setListings] = useState([])

    
    const [error, setError] = useState(false)

    
    const [locations,setLocations] = useState()

    const propertyLocations = () => {
        
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
        propertyLocations()
    },[])
    
    



    
    return(
        <div className='col-12 pt-2'>
            <div className='row '>

                { results && 
                
                (results.results).length > 0 ?
                
                results.results.map((listing:any, i:number) => {
                    
                    return(
                        <div className='col-lg-6 col-md-12  py-4' key={i} style={{paddingLeft:'4vh',paddingRight:'4vh'}}>
                       <PropertyCard property={listing}/>
                       </div>

                    )
                }) : <b>No properties available.</b>}
            </div>
        </div>
    )


}

export default LoadProperties