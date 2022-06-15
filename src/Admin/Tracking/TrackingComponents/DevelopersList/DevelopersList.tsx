
import react,{useEffect, useState} from 'react'


import {getAllListItems ,deleteDevelopersListItem} from './APIs'
import { Popconfirm  } from 'antd';
import { MultiSelect } from '@mantine/core';

import { LoadingOverlay} from '@mantine/core';
import DevelopersListCreateModal from '../DevelopersList/ListComponents/DeveloperListCreateModal';
import DeveloperListUpdateModal from './ListComponents/DeveloperUpdateModal';


const DevelopersList = () => {
    const data:any = [
        { value: 'Individual', label: 'Developer Type : Individual' },
        { value: 'Company', label: 'Developer Type : Company' },
        { value: 'Signed', label: 'Status : Signed' },
        { value: 'Unsigned', label: 'Status : Unsigned' },
      
        
      
      ];

    const options:any = {
        "Individual" : ["developer_type","Individual"],
        "Company" : ["developer_type","Company"],
        "Signed" : ["status","Signed"],
        "Unsigned" : ["status","Unsigned"],
       
    }
    const [approved, setApproved] = useState(false)
    const [visible,setVisible] = useState(false)

    const deleteListItem = (id:number) => {
        setVisible(true)
        deleteDevelopersListItem(id)
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
      const [availableProperties,setList] = useState<any>([])
      const [value, setValue] = useState<any>([]);


      const single = (id:number) =>{

            let data = availableProperties.filter(
            (element:any) => element.id === id )


            return(data)
              
        
      }
    
      const filteravailableProperties = () => {

        value.map((i:any)=>{
                
           
            let data = availableProperties.filter(
                (element:any) => element[(options[i][0])] === options[i][1]);
                  setList(data)
            
        })
       
      }

      const getItems = () => {

        getAllListItems()
          .then((data:any)=>{
              if(data.error){
                  setError(data.error)
              }
              else{
                setList(data)
                console.log('list')
                console.log(data)
               

              
              }
          })
      }

  
      useEffect(()=>{

        getItems()

      },[])

      useEffect(()=>{
         value.length > 0 ? filteravailableProperties()
         :
         getItems()

      },[value])
      
      

    return(

    <div className='row'>
        <div className='col-12'>
            <div className='row'>
              <DevelopersListCreateModal/>
       
               <LoadingOverlay visible={visible} />
               <div className='col-12 pb-4'>
               <MultiSelect
      data={data}
      value={value} onChange={setValue}
      label="Filter.."
      
    />
               </div>
                <div className='col-12'>

                    <table className='table table-striped table-bordered'>
                        <thead >
                            <tr style={{backgroundColor:'rgba(245, 178, 33, 1)',borderRadius:'1vh'}}>
                            <th>
       Developer
        </th>
        <th>Developer Type</th>
        <th>
            Contact Person
        </th>
        <th>
            Sale Commission
        </th>
        <th>
            Rent Commission
        </th>
       
        
        <th>
           Agreement Status
        </th>
        <th>Referral</th>
       
   
        <th>

        </th>
        <th></th>
                            </tr>
                        </thead>
                        <tbody>

        {availableProperties && availableProperties.map((item:any,i:number)=>{

return(

    <tr>
        <th>
        {item.developer_name}
        </th>
        <th>{item.developer_type}</th>
        <th>
            {item.contact_person}
        </th>
        <th>
            {item.sale_commission}
        </th>
        <th>
            {item.rent_commission}
        </th>
      
      
        
        
        <th>{item.agreement_status}</th>
       
        <th>{item.referral}</th>
        
        

     

        <th>
           <DeveloperListUpdateModal inquiry={single(item.id)}/>
        </th>
        <th>
        <Popconfirm
                            title="Are you sure to delete this item ?"
                            onConfirm={()=> deleteListItem(item.id)}
                        
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
export default DevelopersList