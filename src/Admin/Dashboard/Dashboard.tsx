import react from 'react'
import AdminLayout from '../../Components/CoreLayout/AdminLayout'
import LeadSummary from './DashboardComponents/LeadSummary'

import PropertyViews from './DashboardComponents/PropertyViews'
import Summary from './DashboardComponents/Summary'

const Dashboard = () => {

    return(

        <AdminLayout>
            <div className='row'>
                <div className='col-12'>
                    <Summary/>
                </div>
                <div className='col-6'>
                    <PropertyViews/>
                </div>
                <div className='col-6'>
                    <LeadSummary/>
                </div>
            </div>

        </AdminLayout>

    )
}

export default Dashboard