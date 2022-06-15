import react,{useState,useEffect} from 'react'

import { trackingCounts } from '../APIs'

const LeadSummary = () => {

    const [error, setError] = useState(false)
    const [availableProperties, setAvailableProperties] = useState(0)
    const [clientsSearch, setClientSearch] = useState(0)
    const [contractSigned, setContractsSigned] = useState(0)
    const [developerList, setDeveloperList] = useState(0)
 

    const dashboardDetails = () => {

        trackingCounts()
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    // console.log(data)
                  
                    setAvailableProperties(data.availableProperties.count)
                    setContractsSigned(data.developerContractsSigned.count)
                    setDeveloperList(data.developerList.count)
                    setClientSearch(data.clientsSearching.count)
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

                    <div className=' col-md-6 col-sm-12 p-4'>
                        <div className='row p-2'>
                            <div className='col-12 p-4' style={{height:'13vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'rgba(245, 178, 33, 1)',borderRadius:'2vh'}}>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                            <b style={{fontSize:'1.5vh',color:'white'}}>Client Property Search</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh',color:'white'}}>{clientsSearch && clientsSearch < 10 ? `0${clientsSearch}` : clientsSearch}</b>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className=' col-md-6 col-sm-12 p-4'>
                        <div className='row p-2'>
                            <div className='col-12 p-4' style={{height:'13vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'rgba(245, 178, 33, 1)',borderRadius:'2vh'}}>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                            <b style={{fontSize:'1.5vh',color:'white'}}>Available Properties</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh',color:'white'}}>{availableProperties && availableProperties < 10 ? `0${availableProperties}` : availableProperties}</b>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className=' col-md-6 col-sm-12 p-4'>
                        <div className='row p-2'>
                            <div className='col-12 p-4' style={{height:'13vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'rgba(245, 178, 33, 1)',borderRadius:'2vh'}}>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                            <b style={{fontSize:'1.3vh',color:'white'}}>Developer Contracts Agreed</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh',color:'white'}}>{contractSigned && contractSigned}</b><span style={{color:'grey',fontSize:'1.5',fontWeight:'bold'}}>/{developerList}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='col-md-6 col-sm-12 p-4'>
                        <div className='row p-2'>
                            <div className='col-12 py-4 px-2' style={{height:'13vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'rgba(245, 178, 33, 1)',borderRadius:'2vh'}}>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                            <b style={{fontSize:'1.3vh',color:'white'}}>Properties Matching Client Needs</b>
                                    </div>
                                    <div className='col-12 text-center'>
                                                <b style={{fontFamily: "'Poppins', sans-serif",fontSize:'4vh',color:'white'}}></b>
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
export default LeadSummary