
import react,{useEffect, useState} from 'react'


import {getAllDeveloperAvailableProperties ,deleteDevelopersAvailableProperty} from './APIs'
import { Popconfirm  } from 'antd';
import { MultiSelect } from '@mantine/core';

import { LoadingOverlay} from '@mantine/core';
import DevelopersCreateModal from './DeveloperComponents/DeveloperAvailableCreateModal';
import DevelopersUpdateModal from './DeveloperComponents/DeveloperUpdateModal';

const DeveloperAvailableProperties = () => {
    const data:any = [
        { value: 'Unsold', label: 'Unsold' },
        { value: 'Sold', label: 'Sold' },
        { value: 'In Progress', label: 'In Progress' },
        { value: 'Residential', label: 'Residential' },
        { value: 'Commercial', label: 'Commercial' },
        { value: 'Sale', label: 'Sale' },
        { value: 'Rent', label: 'Rent' }
      
      ];

    const options:any = {
        "Unsold" : ["result","Unsold"],
        "Sold" : ["result","Sold"],
        "Rent" : ["purchase_type","Rent"],
        "Sale" : ["purchase_type","Sale"],
        "In Progress" : ["status","In Progress"],
        "Residential" : ["residence_type","Residential"],
        "Commercial" : ["residence_type","Commercial"]
    }
    const [approved, setApproved] = useState(false)
    const [visible,setVisible] = useState(false)

    const deleteAvailableProperty = (id:number) => {
        setVisible(true)
        deleteDevelopersAvailableProperty(id)
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
      const [availableProperties,setAvailableProperties] = useState<any>([])
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
                  setAvailableProperties(data)
            
        })
       
      }

      const getItems = () => {

        getAllDeveloperAvailableProperties()
          .then((data:any)=>{
              if(data.error){
                  setError(data.error)
              }
              else{
                setAvailableProperties(data)
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
              <DevelopersCreateModal/>
       
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
        <th>
            Residence Type
        </th>
        <th>Purchase Type</th>
        
        <th>
            Location
        </th>
        <th>Price</th>
       
        <th>No. of Rooms</th>
        
        <th>
            Status
        </th>
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
        <th>
            {item.residence_type}
        </th>
        <th>{item.purchase_type}</th>
        
        <th>
            {item.location}
        </th>
        <th>{item.price||0}</th>
       
        <th>{item.rooms}</th>
        
        <th>
            {item.status}
        </th>

     

        <th>
           <DevelopersUpdateModal inquiry={single(item.id)}/>
        </th>
        <th>
        <Popconfirm
                            title="Are you sure to delete this item ?"
                            onConfirm={()=> deleteAvailableProperty(item.id)}
                        
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
export default DeveloperAvailableProperties