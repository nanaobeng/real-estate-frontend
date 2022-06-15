import react from 'react'
import { Spin ,Result, Button} from 'antd';
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, BuildingSkyscraper , UserCircle , Upload, X, Icon as TablerIcon  } from 'tabler-icons-react';
import AdminLayout from '../../Components/CoreLayout/AdminLayout'
import ClientsLookingForProperties from './TrackingComponents/ClientsLookingForProperties/ClientsLookingForProperties';
import DeveloperAvailableProperties from './TrackingComponents/DeveloperAvailableProperties/DeveloperAvailableProperties';
import DevelopersList from './TrackingComponents/DevelopersList/DevelopersList';


const TrackingSheet = () => {


    const trackingTabs = () => {
        return(
            <Tabs>
                 <Tabs.Tab label="Clients Looking for Properties" icon={<MessageCircle size={14} />}>

                     <div className='row'>

                         <div className='col-12 p-4 '>
                                <ClientsLookingForProperties/>
                         </div>

                     </div>


                </Tabs.Tab>
                <Tabs.Tab label="Developers Available Properties" icon={<MessageCircle size={14} />}>

                    <div className='row'>

                        <div className='col-12 p-4 '>
                            <DeveloperAvailableProperties/>
                        </div>

                    </div>


                </Tabs.Tab>

                <Tabs.Tab label="Developers List" icon={<MessageCircle size={14} />}>

<div className='row'>

    <div className='col-12 p-4 '>
            <DevelopersList/>
    </div>

</div>


</Tabs.Tab>
          </Tabs>
        )
    }
    return(
        <div>
            <AdminLayout>

            <div className='row p-4'>
                <div className='col-12 p-4 shadow-lg' style={{backgroundColor:'white',border:'2px solid rgba(0, 0, 0, 0.37)' ,borderRadius:'1vh'}}>

                    

                {trackingTabs()}

                
                </div>
            </div>

            </AdminLayout>
        </div>
    )
}

export default TrackingSheet