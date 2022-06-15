import react from 'react'

import AdminLayout from '../../Components/CoreLayout/AdminLayout'
import ManageLocations from './LocationComponents/ManageLocations'
import LocationSummary from './LocationComponents/LocationSummary'
const LocationDashboard = () => {

    return(

        <AdminLayout>
            <div className='row'>
                <div className='col-12'>
                    <LocationSummary/>
                </div>
                <div className='col-12'>
                    <ManageLocations/>
                </div>
            </div>
        </AdminLayout>


    )
}
export default LocationDashboard