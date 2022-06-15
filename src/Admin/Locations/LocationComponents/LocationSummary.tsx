import react,{useState,useEffect} from 'react'
import { getLocations } from '../APIs'

const LocationSummary = () => {
    const [error, setError] = useState(false)
    const [locations,setLocations] = useState([])


    const retrieveLocations = () => {

        getLocations()
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                 
                    setLocations(data)
                 
                    
                
                    
                }
            })

    }



    useEffect(()=>{

       retrieveLocations()

    },[])

    

    return(

        <div className='row p-4'>
            <div className='col-12'>
                <div className='row p-4'>

                    <div className='col-lg-3 col-md-6 col-sm-12 p-4'>
                        <div className='row p-2'>
                            <div className='col-12 p-4' style={{height:'13vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'white',borderRadius:'2vh'}}>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                            <b style={{fontSize:'1.5vh',color:'rgba(0, 0, 0, 0.5)'}}>Locations</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh'}}>{locations && locations.length < 10 ? `0${locations.length}` : locations.length}</b>
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
export default LocationSummary