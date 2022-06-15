import react from 'react'

import AdminLayout from '../../Components/CoreLayout/AdminLayout'
import ManageProperties from './PropertyComponents/ManageProperties'
import PropertySummary from './PropertyComponents/PropertySummary'
const PropertyDashboard = () => {

    return(

        <AdminLayout>
            <div className='row'>
                <div className='col-12'>
                    <PropertySummary/>
                </div>
                <div className='col-12'>
                    <ManageProperties/>
                </div>
            </div>
        </AdminLayout>


    )
}
export default PropertyDashboard