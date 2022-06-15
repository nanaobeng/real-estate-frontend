import react, { useEffect, useState } from 'react'
import { Tabs } from '@mantine/core';
import { Image } from 'antd';
import { Photo, MessageCircle, BuildingSkyscraper , UserCircle , Upload, X, Icon as TablerIcon  } from 'tabler-icons-react';
import {getClientRequests,ClientRequestStatus,getClientRequest,getClientImages} from './APIs'
import {  Modal, Button  } from 'antd';
import { Popconfirm, message } from 'antd';
import { ExternalLink } from 'react-external-link';
const ClientListingRequest = () => {

    const [requestImages,setImages] =useState<any>([])
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
    const retrieveImages = (id:number) => {
        getClientImages(id)
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setImages(data)
                console.log('images')
                console.log(data)
            }
        })

    }
    const getSingleRequest = (id:number) => {
        showModal()
        getClientRequest(id)
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setRequest(data)
                data && setValues(
                    {
                        
  
        fullname:data.fullname,
        phone: data.phone,
        email: data.email,
        comment: data.client_message,
        price:data.price || 0,
     
        rooms: data.bedrooms || 0,
        location: data.property_location,
        property_type: data.property_type,
        purchase_type: data.purchase_type === 'rent' ? 'Rent' : 'Sale',
                    }
                )

                data &&  retrieveImages(data.cid)
            }
        })
    }
    const [values, setValues] = useState<any>({
        title: '',
        firstname: '',
        lastname: '',
        fullname:'',
        phone: '',
        email: '',
        comment: '',
        price:0,
        images:'',
        rooms: 0,
        location: '',
        property_type: '',
        purchase_type: '',
       
    })


    const {
        title,
        firstname,
        fullname,
        images,
        lastname,
        phone,
        email,
        comment,
        price,
        purchase_type,
        rooms,
        property_type,
        location,
        
    } = values

    const getRequests = () => {
        
        getClientRequests()
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

        ClientRequestStatus(id)
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
                              <b style={{fontSize:'30px'}}>Client Property Request</b>
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
      <Tabs.Tab label="Property Details" icon={<BuildingSkyscraper size={14} />}>
      <div className='row p-4'>
      <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Property Type</label>
                                    <input  style={{ border: '2px solid black' }} type="text" className="form-control" value={property_type} disabled />
                                   

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Number of Rooms</label>
                                    <input min="1" style={{ border: '2px solid black' }} type="number" className="form-control" value={rooms} disabled />

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Purchase Type</label>
                                    <input  style={{ border: '2px solid black' }}  className="form-control" value={purchase_type} disabled />
                                </div>
                            </div>


                            


                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Price</label>
                                    <input  style={{ border: '2px solid black' }} type="number" className="form-control" value={price}  disabled/>

                                </div>
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Property Location</label>
                                    <input style={{ border: '2px solid black' }} type="text" className="form-control" value={location} disabled />

                                </div>
                            </div>

        </div>
      </Tabs.Tab>
      <Tabs.Tab label="Images" icon={<Photo size={14} />}>
      <div className='row p-4'>
 
                           
                            <div className="col-12 py-2">
                            <Image.PreviewGroup>
                               {requestImages && requestImages.map((img:any,i:number)=>{
                                   return(
                                 
                                       <Image
      width={200}
      src={img.url}
    />
                                      
                                   )
                               })}
                               </Image.PreviewGroup>
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
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Property Type :</b> {item.property_type}
                                        </div>
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Location :</b> {item.property_location}
                                        </div>
                                        
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Date : </b> 
                                        {new Date(item.date_created).getMonth()}/ {new Date(item.date_created).getFullYear()}
                                        
                                        </div>
                                      
                                        <div className='col-6 pt-1 '>
                                        <span onClick={()=>{getSingleRequest(item.cid)}}className="btn btn-sm btn-outline-primary" style={{fontWeight:"bold",fontSize:'1.3vh'}}>View Request</span>
                                        </div>
                                        <div className='col-6 pt-1 text-right'>
                                        <Popconfirm
    title="Are you sure you want mark this request as read?"
    onConfirm={()=> changeStatus(item.cid)}

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
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Property Type :</b> {item.property_type}
                                        </div>
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Location :</b> {item.property_location}
                                        </div>
                                        
                                        <div className='col-12'>
                                        <b style={{color:'grey',fontSize:'1.3vh'}}>Date : </b> 
                                        {new Date(item.date_created).getMonth()}/ {new Date(item.date_created).getFullYear()}
                                        
                                        </div>
                                        <div className='col-12 text-right pt-1 '>
                                        <span onClick={()=>{getSingleRequest(item.cid)}}className="btn btn-sm btn-outline-primary" style={{fontWeight:"bold",fontSize:'1.3vh'}}>View Request</span>
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
export default ClientListingRequest