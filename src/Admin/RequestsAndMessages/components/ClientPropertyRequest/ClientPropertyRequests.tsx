import react, { useEffect, useState } from 'react'
import { Tabs } from '@mantine/core';
import {getClientPropertyRequests, listingStatus} from './APIs'
import { Popconfirm, message } from 'antd';
import { ExternalLink } from 'react-external-link';
const ClientPropertyRequests = () => {

    const [error,setError] = useState()
    const [requests,setRequests] = useState<any>()

    const getRequests = () => {
        
        getClientPropertyRequests()
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setRequests(data)
                console.log(data)
            }
        })
    }

    useEffect(()=>{

        getRequests()

    },[])

    const changeStatus = (id:number) => {

        listingStatus(id)
        .then(data => {
            if(data.error){
                setError(data.error)
            }
            else{
             
                
                alert('Marked as read')
                getRequests()
               
               
               
            }
        })

    }

return(
        <div className='row p-4'>
        <div className='col-12'>
        <Tabs grow>
            <Tabs.Tab label="Unread">
                <div className='row p-4'>
                    {requests && requests.map((item:any,i:number)=>{
                        return(
                            item.status !== 'read' &&

                            <div className='col-lg-6 col-md-12' key={i}>
                                    <div className='row'>
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Name :</b> {item.fullname}
                                        </div>
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Email :</b> {item.email}
                                        </div>
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Date : </b> 
                                        {new Date(item.date_created).getMonth()}/ {new Date(item.date_created).getFullYear()}
                                        
                                        </div>
                                      
                                        <div className='col-6 pt-1 '>
                                        <ExternalLink href={`/property/${item.listing_id}`}>
                                           
                                            <span className="btn btn-sm btn-outline-primary" style={{fontWeight:"bold",fontSize:'1.3vh'}}>View Property</span>
                                        </ExternalLink>
                                        </div>
                                        <div className='col-6 pt-1 text-right'>
                                        <Popconfirm
    title="Are you sure you want mark this request as read?"
    onConfirm={()=> changeStatus(item.r_id)}

    okText="Yes"
    cancelText="No"
  >
 <span className="btn btn-sm btn-outline-success" style={{fontWeight:"bold",fontSize:'1.3vh'}}>Mark as read</span>
  </Popconfirm>
                                       
                                        </div>
                                        <div className='col-12'>
                                            <hr/>
                                        </div>
                                    
                                    </div>

                            </div>
                        )
                    })}
                </div>
            </Tabs.Tab>
            <Tabs.Tab label="Read">
            <div className='row p-4'>
                    {requests && requests.map((item:any,i:number)=>{
                        return(
                            item.status === 'read' &&
                            <div className='col-lg-6 col-md-12' key={i}>
                                    <div className='row'>
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Name :</b> {item.fullname}
                                        </div>
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Email :</b> {item.email}
                                        </div>
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Date : </b> 
                                        {new Date(item.date_created).getMonth()}/ {new Date(item.date_created).getFullYear()}
                                        </div>
                                        <div className='col-12 text-right'>
                                        <ExternalLink href={`/property/${item.listing_id}`}>
                                        <span className="btn btn-sm btn-outline-primary" style={{fontWeight:"bold",fontSize:'1.3vh'}}>View Property</span>
                                        </ExternalLink>
                                        </div>
                                        <div className='col-12'>
                                            <hr/>
                                        </div>
                                    
                                    </div>

                            </div>
                        )
                    })}
                </div>
            </Tabs.Tab>
          
        </Tabs>
        </div>
    </div>

)

}
export default ClientPropertyRequests