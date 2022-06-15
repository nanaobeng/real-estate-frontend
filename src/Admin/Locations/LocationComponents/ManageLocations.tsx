import react,{useState,useEffect} from 'react'
import { Popconfirm , Spin ,Result, Button } from 'antd';
import {ExternalLink} from 'react-external-link'

import {getLocations, deleteLocation} from '../APIs'
const ManageProperties = () => {

    const [locations,setLocations]  = useState([])
    const [error,setError]  = useState([])
    const [approved, setApproved] = useState(false)
    const [loading,setLoading] = useState(false)


    const deleteLocationItem = (id:number) =>  {
        setLoading(true)
        deleteLocation(id,'test token')
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setLoading(false)
                setApproved(true)
                alert('Location Successfully Deleted')
                setTimeout(function () {

                    window.location.href="/admin/manage/locations"
                    }, 2000);
            }
        })
        
      }

    const loadLocations = () => {
        getLocations()
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setLocations(data)
                console.log(data)
            }
        })
    }

    
    useEffect(()=>{

        loadLocations()

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
            title="Location Successfully Deleted"
            
           
          />


            : 
            <table className='p-4 table table-borderless ' style={{border:'0px'}}>
            <thead>
                <tr style={{borderBottom:'1px solid grey',fontSize:'1.8vh'}}>
                    <th>
                       <b>Title</b> 
                    </th>
                    <th>
                        Region
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

                {locations && locations.map((item:any,i:number)=>{
                    return(
                        <tr style={{paddingTop:'1vh',fontSize:'1.6vh'}}  key={i}>
                            <td>
                                {item.city}
                            </td>
                            <td>
                                {item.region}
                            </td>
                        
                         
                            <td>
                                <ExternalLink href={`/admin/manage/location/update/${item.location_id}`} target="_self" style={{textDecoration:'none'}}>
                                <i className='icofont-edit' style={{color:'green',fontWeight:'bold',cursor:'pointer'}}></i>
                                </ExternalLink>
                            </td>
                             <td>
                             <Popconfirm
                            title="Are you sure to delete this location ?"
                            onConfirm={()=> deleteLocationItem(item.location_id)}
                        
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