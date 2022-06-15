import react,{useState,useEffect} from 'react'

import {getRecentListings} from '../APIs/HomeAPIs'
import PropertyCard from './PropertyCard'
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
const LoadRecentListings = () => {

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
          minWidth: 900,
        }),
      );

    const [listings,setListings] = useState([])
    const [error, setError] = useState(false)
    const loadRecentListings = () => {
        getRecentListings()
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setListings(data)
                    
                    
                }
            })
    }

    useEffect(()=>{
        loadRecentListings()
    },[])

    return(
        <div className='col-12 pt-2'>
            <div className='row justify-content-center'>
                {listings && listings.map((listing:any)=> {
                    return(


                        matches ?

                        <div className='col-lg-4 col-md-12 px-4 py-4' style={{cursor:'pointer'}}>


                            <PropertyCard property={listing}/>



                        </div>

                        :

                        iphone_12_landscape === true && ipad_prop !== true ?

<div className='col-4 py-4' style={{cursor:'pointer'}}>


<PropertyCard property={listing}/>



</div>
                        :
ipad_prop ?
<div className='col-12 px-4 py-4' style={{cursor:'pointer'}}>


<PropertyCard property={listing}/>



</div>


:
                        <div className='col-lg-6 col-md-12 px-4 py-4' style={{cursor:'pointer'}}>


                        <PropertyCard property={listing}/>



                    </div>

                    )
                })}
            </div>
        </div>
    )


}

export default LoadRecentListings