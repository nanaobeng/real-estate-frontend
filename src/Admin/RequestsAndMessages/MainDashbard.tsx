import { Spin ,Result, Button} from 'antd';
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, BuildingSkyscraper , UserCircle , Upload, X, Icon as TablerIcon  } from 'tabler-icons-react';
import AdminLayout from '../../Components/CoreLayout/AdminLayout'
import ClientPropertyRequests from './components/ClientPropertyRequest/ClientPropertyRequests';
import ClientListingRequest from './components/ClientListingRequests/ClientListingRequests';
import ClientInquiries from './components/ClientInquiries/ClientInquiries';
import Messages from './components/Messages/Messages';




const MainDashboard = () => {


    const requestTabs = () => {
        return(
            <Tabs>
                 <Tabs.Tab label=" Property Availability" icon={<MessageCircle size={14} />}>

                     <div className='row'>

                         <div className='col-12 p-4 '>
                              <ClientPropertyRequests/>
                         </div>

                     </div>


                </Tabs.Tab>
                <Tabs.Tab label="Client Property Requests" icon={<MessageCircle size={14} />}>

                     <div className='row'>

                         <div className='col-12 p-4 '>
                              <ClientListingRequest/>
                         </div>

                     </div>


                </Tabs.Tab>
                <Tabs.Tab label="Client Inquries" icon={<MessageCircle size={14} />}>

<div className='row'>

    <div className='col-12 p-4 '>
  <ClientInquiries/>
    </div>

</div>


</Tabs.Tab>
<Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>

<div className='row'>

    <div className='col-12 p-4 '>
            <Messages/>
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

                    

                {requestTabs()}

                
                </div>
            </div>

            </AdminLayout>
        </div>
    )
}



export default MainDashboard