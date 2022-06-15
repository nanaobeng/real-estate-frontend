import react,{useState,useEffect} from 'react'
import { getListings } from '../APIs'

const PropertySummary = () => {
    const [error, setError] = useState(false)
    const [listings,setListings] = useState([])
    const [propertiesForSale,setSale] = useState<number>(0)
    const [propertiesForRent,setRent] = useState<number>(0)

    const getProperties = () => {

        getListings()
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    // console.log(data)
                    // console.log(data.client_requests.count)
                    setListings(data)
                    countSale(data)
                
                    
                }
            })

    }

    const countSale = (data:any) => {

        let rent = 0 
        let sale = 0 

        data && data.map((item:any,i:number)=> {

            item.purchase_type === 'rent' ? rent += 1

            :

            sale += 1


        })

        setSale(sale)
        setRent(rent)




    }


    useEffect(()=>{

        getProperties()

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
                                            <b style={{fontSize:'1.5vh',color:'rgba(0, 0, 0, 0.5)'}}>Properties</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh'}}>{listings && listings.length < 10 ? `0${listings.length}` : listings.length}</b>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='col-lg-3 col-md-6 col-sm-12 p-4'>
                        <div className='row p-2'>
                            <div className='col-12 p-4' style={{height:'13vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'white',borderRadius:'2vh'}}>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                            <b style={{fontSize:'1.5vh',color:'rgba(0, 0, 0, 0.5)'}}>Properties for Sale</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh'}}>{propertiesForSale && propertiesForSale < 10 ? `0${propertiesForSale}` : propertiesForSale}</b>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12 p-4'>
                        <div className='row p-2'>
                            <div className='col-12 p-4' style={{height:'13vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'white',borderRadius:'2vh'}}>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                            <b style={{fontSize:'1.5vh',color:'rgba(0, 0, 0, 0.5)'}}>Properties for Rent</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh'}}>{propertiesForRent && propertiesForRent < 10 ? `0${propertiesForRent}` : propertiesForRent}</b>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='col-lg-3 col-md-6 col-sm-12 p-4'>
                        <div className='row p-2'>
                            <div className='col-12 p-4' style={{height:'13vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'white',borderRadius:'2vh'}}>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                            <b style={{fontSize:'1.5vh',color:'rgba(0, 0, 0, 0.5)'}}>New Availability Requests</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh'}}>07</b>
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
export default PropertySummary