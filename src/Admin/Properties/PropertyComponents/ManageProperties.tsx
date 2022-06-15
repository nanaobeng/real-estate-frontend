import react,{useState,useEffect} from 'react'
import { Popconfirm , Spin ,Result, Button } from 'antd';
import {ExternalLink} from 'react-external-link'

import {getListings, deleteListing} from '../APIs'
const ManageProperties = () => {

    const [properties,setProperties]  = useState([])
    const [error,setError]  = useState([])
    const [approved, setApproved] = useState(false)
    const [loading,setLoading] = useState(false)


    const deleteProperty = (id:number) =>  {
        setLoading(true)
        deleteListing(id,'test token')
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setLoading(false)
                setApproved(true)
                alert('Property Successfully Deleted')
                setTimeout(function () {

                    window.location.href="/admin/manage/properties"
                    }, 2000);
            }
        })
        
      }

    const loadProperties = () => {
        getListings()
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setProperties(data)
            }
        })
    }

    
    useEffect(()=>{

        loadProperties()

    },[])
    return (

        <div className='row px-4'>
        <div className='col-12'>
            <div className='row px-4'>

                <div className=' col-lg-12 px-4'>
                <div className='row '>
                            <div className='col-12 p-4' style={{height:'50vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'white',borderRadius:'2vh'}}>

                            {loading ?  
            <div className='row'>
                <div className='col-12 pt-4 text-center'>
                <div >
            <Spin size="large" />
          </div>

                </div>
            </div>
           
        

            :
            approved ? 

            <Result
            status="success"
            title="Property Successfully Deleted"
            
           
          />


            : 
            <table className='p-4 table table-borderless ' style={{border:'0px'}}>
            <thead>
                <tr style={{borderBottom:'1px solid grey',fontSize:'1.8vh'}}>
                    <th>
                       <b>Title</b> 
                    </th>
                    <th>
                       <b>Property Type</b> 
                    </th>
                    <th>
                       <b>Purchase Type</b> 
                    </th>
                    
                    <th>
                       <b>Update</b> 
                    </th>
                    <th>
                       <b>Delete</b> 
                    </th>
                </tr>
               
            </thead>
            <tbody >

                {properties && properties.map((item:any,i:number)=>{
                    return(
                        <tr style={{paddingTop:'1vh',fontSize:'1.6vh'}}  key={i}>
                            <td>
                                {item.listing_title}
                            </td>
                            <td>
                                {item.property_type  === 'apartment' ? 'Apartment' :
                                item.property_type  === 'house' ? 'House'  :
                                item.property_type  === 'landplot' ? 'Landplot' :

                                'Commercial'
                                 }
                            </td>
                            <td>
                                {item.purchase_type === 'rent' ? 'Rent' : 'Sale'}
                            </td>
                         
                            <td>
                                <ExternalLink href={`/admin/manage/property/update/${item.listing_id}`} target="_self" style={{textDecoration:'none'}}>
                                <i className='icofont-edit' style={{color:'green',fontWeight:'bold',cursor:'pointer'}}></i>
                                </ExternalLink>
                            </td>
                             <td>
                             <Popconfirm
                            title="Are you sure to delete this property ?"
                            onConfirm={()=> deleteProperty(item.listing_id)}
                        
                            okText="Yes"
                            cancelText="No"
                        >
                            <i className='icofont-trash' style={{color:'red',fontWeight:'bold',cursor:'pointer'}}></i>
                        </Popconfirm>
                           
                             </td>
                        </tr>
                    )
                })}
              
            </tbody>
        </table>

}
                              
                            </div>
                </div>


                </div>

            </div>
        </div>
        </div>

    )
}
export default ManageProperties