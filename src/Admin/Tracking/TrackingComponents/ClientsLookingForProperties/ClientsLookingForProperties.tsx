
import react,{useEffect, useState} from 'react'

import ClientsSearchModal from './AddNewItem/ClientsSearchModal';
import {getAllClientSearchItems,deleteInquiryItem} from './APIs'
import { Popconfirm  } from 'antd';
import { MultiSelect } from '@mantine/core';
import ClientSearchUpdatModal from './AddNewItem/ClientSearchUpdateModal';
import { LoadingOverlay} from '@mantine/core';
const ClientsLookingForProperties = () => {
    const data:any = [
        { value: 'Medium Priority', label: 'Medium Priority' },
        { value: 'Highest Priority', label: 'Highest Priority' },
        { value: 'Rent', label: 'Rent' },
        { value: 'Sale', label: 'Sale' },
        { value: 'Active', label: 'Status: Active' },
        { value: 'Inactive', label: 'Status: Inactive ' },
      
      ];

    const options:any = {
        "Medium Priority" : ["priority","Medium"],
        "Highest Priority" : ["priority","Highest"],
        "Rent" : ["purchase_type","Rent"],
        "Sale" : ["purchase_type","Sale"],
        "Active" : ["status","Active"],
        "Inactive" : ["status","Inactive"],
    }
    const [approved, setApproved] = useState(false)
    const [visible,setVisible] = useState(false)

    const deleteInquiry = (id:number) => {
        setVisible(true)
        deleteInquiryItem(id)
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                
               
                setTimeout(function () {

                    window.location.href="/admin/tracking"
                    }, 2000);
            }
        })

    }
    
      const [error,setError] = useState("")
      const [inquiries,setInquiries] = useState<any>([])
      const [value, setValue] = useState<any>([]);


      const single = (id:number) =>{

            let data = inquiries.filter(
            (element:any) => element.client_id === id )


            return(data)
              
        
      }
    
      const filterInquiries = () => {

        value.map((i:any)=>{
                
           
            let data = inquiries.filter(
                (element:any) => element[(options[i][0])] === options[i][1]);
                  setInquiries(data)
            
        })
       
      }

      const getItems = () => {

          getAllClientSearchItems()
          .then((data:any)=>{
              if(data.error){
                  setError(data.error)
              }
              else{
                setInquiries(data)
                console.log(data)
               

              
              }
          })
      }

  
      useEffect(()=>{

        getItems()

      },[])

      useEffect(()=>{
         value.length > 0 ? filterInquiries()
         :
         getItems()

      },[value])
      
      

    return(

    <div className='row'>
        <div className='col-12'>
            <div className='row'>
               <ClientsSearchModal/>
       
               <LoadingOverlay visible={visible} />
               <div className='col-12 pb-4'>
               <MultiSelect
      data={data}
      value={value} onChange={setValue}
      label="Filters.."
  
    />
               </div>
                <div className='col-12'>

                    <table className='table table-striped table-bordered'>
                        <thead >
                            <tr style={{backgroundColor:'rgba(245, 178, 33, 1)',borderRadius:'1vh'}}>
                            <th>Client
        </th>
        <th>
            Property Type
        </th>
        <th>Purchase Type</th>
        
        <th>
            Location
        </th>
        <th>Price</th>
        <th>Duration of Stay</th>
        <th>No. of Rooms</th>
        <th>
        Lead Agent
        </th>
        <th>
            Status
        </th>
        <th>

        </th>
        <th></th>
                            </tr>
                        </thead>
                        <tbody>

        {inquiries && inquiries.map((item:any,i:number)=>{

return(

    <tr>
        <th>
{item.name}
        </th>
        <th>
            {item.property}
        </th>
        <th>{item.purchase_type}</th>
        
        <th>
            {item.location}
        </th>
        <th>{item.price||0}</th>
        <th>{item.duration_of_stay}</th>
        <th>{item.rooms}</th>
        <th>
        {item.lead_agent}
        </th>
        <th>
            {item.status}
        </th>

        <th>
           <ClientSearchUpdatModal inquiry={single(item.client_id)}/>
        </th>
        <th>
        <Popconfirm
                            title="Are you sure to delete this inquiry ?"
                            onConfirm={()=> deleteInquiry(item.client_id)}
                        
                            okText="Yes"
                            cancelText="No"
                        >
                            <i className='icofont-trash' style={{color:'red',fontWeight:'bold',cursor:'pointer'}}></i>
                        </Popconfirm>
         
        </th>
        
    </tr>
           
)
     
 })}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        
        </div>
    </div>
    )

}
export default ClientsLookingForProperties