import react,{useState,useEffect} from 'react'

import { dashboardCounts } from '../APIs'

const Summary = () => {

    const [error, setError] = useState(false)
    const [listingCount, setListingCount] = useState(0)
    const [messageCount, setMessageCount] = useState(0)
    const [listingsRequestCount, setListingRequestCount] = useState(0)
    const [clientsRequestCount, setClientRequestCount] = useState(0)

    const dashboardDetails = () => {

        dashboardCounts()
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    // console.log(data)
                    // console.log(data.client_requests.count)
                    setListingCount(data.listings.count)
                    setListingRequestCount(data.listing_requests.count)
                    setClientRequestCount(data.client_requests.count)
                    setMessageCount(data.messages.count)
                }
            })

    }

    useEffect(()=>{
        dashboardDetails()
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
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh'}}>{listingCount && listingCount < 10 ? `0${listingCount}` : listingCount}</b>
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
                                            <b style={{fontSize:'1.5vh',color:'rgba(0, 0, 0, 0.5)'}}>Client Property Requests</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh'}}>{listingCount && listingCount < 10 ? `0${listingCount}` : listingCount}</b>
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
                                            <b style={{fontSize:'1.5vh',color:'rgba(0, 0, 0, 0.5)'}}>Property Requests</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh'}}>{clientsRequestCount && clientsRequestCount < 10 ? `0${clientsRequestCount}` : clientsRequestCount}</b>
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
                                            <b style={{fontSize:'1.5vh',color:'rgba(0, 0, 0, 0.5)'}}>New Messages</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh'}}>{messageCount && messageCount < 10 ? `0${messageCount}` : messageCount}</b>
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
export default Summary