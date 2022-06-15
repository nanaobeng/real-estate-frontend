import react from 'react'
import LoadRecentListings from './LoadRecentListings'


const RecentListings = () => {

    return(
        <div className='row justify-content-center py-4'>
            <div className='col-10 '>
                <div className='row '>
                <div className='col-12 ' style={{fontWeight:'bold',paddingTop:'3vh'}}>
            <span style={{fontWeight:'bold',fontSize:'2.5vh'}}>Recent Listings</span><br/>
            </div>
            <LoadRecentListings/>

                </div>

            </div>
            
           
        </div>
    )

}

export default RecentListings