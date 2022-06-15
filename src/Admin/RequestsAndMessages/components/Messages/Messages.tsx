import react, { useEffect, useState } from 'react'
import { Tabs } from '@mantine/core';
import { Image } from 'antd';
import { Photo, MessageCircle, BuildingSkyscraper , UserCircle , Upload, X, Icon as TablerIcon  } from 'tabler-icons-react';
import {getMessage , getMessages , MessageStatus} from './APIs'
import {  Modal, Button  } from 'antd';
import { Popconfirm, message } from 'antd';
import { ExternalLink } from 'react-external-link';
const Messages  = () => {

   
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
       
      setIsModalVisible(true);
    };
    
    const handleOk = () => {
      setIsModalVisible(false);
    };
    
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    const [error,setError] = useState()
    const [requests,setRequests] = useState<any>()
    const [singleRequest,setRequest] = useState<any>({})
   
    const getSingleRequest = (id:number) => {
        showModal()
        getMessage(id)
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                console.log(data)
                setRequest(data)
                data && setValues(
                    {
                        
  
        fullname:data.fullname,
        phone: data.phone,
        email: data.email,
        comment: data.client_message,
     
                    }
                )

                
            }
        })
    }
    const [values, setValues] = useState<any>({
       
        fullname:'',
        phone: '',
        email: '',
        comment: '',
     
       
    })


    const {
      
        fullname,
        
        phone,
        email,
        comment,
       
        
    } = values

    const getRequests = () => {
        
        getMessages()
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

        MessageStatus(id)
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

    const ModalBody = () =>{
        return(
            <Modal
  
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            className="newStyle"
            wrapClassName = {'web'}
            width={650}
            footer={null}
          >
          
          < div  className = "outer-iframe px-0"  > 
 <div className="row px-0">
                         <div className="col-12 px-0 text-center" style={{backgroundColor:'#F5B221',height:'75px',borderRadius:'20px',paddingTop:'15px'}}>
                              <b style={{fontSize:'30px'}}>Client Message</b>
                         </div>
                     </div>

                     <div className="row p-4">
                     <Tabs>
      <Tabs.Tab label="Personal Details" icon={<UserCircle size={14} />}>
          <div className='row p-4'>
               <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Full Name</label>
                                    <input style={{ border: '2px solid black' }} type="text" className="form-control" value={fullname} disabled />

                                </div>
                            </div>

                            <div className="col-md-7 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Email  Address</label>
                                    <input  style={{ border: '2px solid black' }} type="text" className="form-control" value={email} disabled/>

                                </div>
                            </div>

                            <div className="col-md-5 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Phone Number</label>
                                    <input  style={{ border: '2px solid black' }} type="text" className="form-control" value={phone} disabled />

                                </div>
                            </div>
          </div>
      </Tabs.Tab>
  
   
      <Tabs.Tab label="Comments" icon={<MessageCircle size={14} />}>
      <div className='row p-4'>
 
                           
      <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Additional Comments</label>
                                    <hr/>
                                    {comment}
                                </div>
                            </div>

                           

     </div>
      </Tabs.Tab>
    </Tabs>
                        
                  
                     
                     </div>
     </div > 
          </Modal>
        )
    }

return(
        <div className='row p-4'>
        <div className='col-12'>
            {ModalBody()}
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
                                        <span onClick={()=>{getSingleRequest(item.message_id)}}className="btn btn-sm btn-outline-primary" style={{fontWeight:"bold",fontSize:'1.3vh'}}>View Message</span>
                                        </div>
                                        <div className='col-6 pt-1 text-right'>
                                        <Popconfirm
    title="Are you sure you want mark this request as read?"
    onConfirm={()=> changeStatus(item.message_id)}

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
                                        <div className='col-12 text-right pt-1 '>
                                        <span onClick={()=>{getSingleRequest(item.message_id)}}className="btn btn-sm btn-outline-primary" style={{fontWeight:"bold",fontSize:'1.3vh'}}>View Message</span>
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
export default Messages
