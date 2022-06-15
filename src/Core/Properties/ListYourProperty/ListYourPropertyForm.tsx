
import react,{useEffect, useState} from 'react'
import { Spin ,Result, Button} from 'antd';

import {clientRequest} from '../APIs/PropertyAPIs'
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, BuildingSkyscraper , UserCircle , Upload, X, Icon as TablerIcon  } from 'tabler-icons-react';
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
    return status.accepted
      ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
      : status.rejected
      ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[0]
      : theme.colors.gray[7];
  }
  
  function ImageUploadIcon({
    status,
    ...props
  }: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
    if (status.accepted) {
      return <Upload {...props} />;
    }
  
    if (status.rejected) {
      return <X {...props} />;
    }
  
    return <Photo {...props} />;
  }

 


const ListYourPropertyForm = () => {
    const theme = useMantineTheme();

    const [approved, setApproved] = useState(false)
    const [error, setError] = useState(false)
    const [values, setValues] = useState<any>({
        title: 'Mr.',
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
        property_type: 'apartment',
        purchase_type: 'sale',
        loading: false,
        requestSent: '',
        formData: ''
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
        loading,
        requestSent,
        formData
    } = values

    
    const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />
      
          <div>
              {images !== '' ? 
              
              <Text size="xl" inline>
              Files Uploaded<br/><br/>
              Click here to add more files
            </Text>
              
              : 
              <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
           
              
              }
            
          </div>
        </Group>
      );
      




    const submitRequest = () => {
       
        console.log(values)
        setValues({ ...values, loading: true })
        let imageCount = 0
        for (var x = 0; x < images.length; x++) {
            formData.append('images',images[x]);
            imageCount = imageCount + 1
        }
        formData.append('imageCount',imageCount);
        formData.append('property_type',property_type);
        clientRequest(formData)
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                    setValues({ ...values, loading: false, requestSent: 1 })
                }
                else {
                   
                    
                    setApproved(true)
                    setValues({ ...values, loading: false ,
                      
                        fullname : '',
                        images : '',
                     
                        phone : '',
                        email : '',
                        comment : '',
                        price : '',
                        purchase_type : 'sale',
                        rooms : 0,
                        property_type : 'apartment',
                        location : '',
                
                   
                        formData : new FormData()})
                    setTimeout(function () {
                        
                        setApproved(false)
                        }, 2000);
                    
                }
                  


                
            })
        
    }

    const propertyForm = () => {
        return(

            <div className='row'>
                <div className="col-md-12 col-sm-12">
                <Tabs>
      <Tabs.Tab label="Personal Details" icon={<UserCircle size={14} />}>
          <div className='row p-4'>
               <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Full Name</label>
                                    <input onChange={(e)=>{
                                        setValues({ ...values, 'fullname': e.target.value })
                                        formData.set('fullname',e.target.value)
                                        
                                        }}  style={{ border: '2px solid black' }} type="text" className="form-control" value={fullname} />

                                </div>
                            </div>

                            <div className="col-md-7 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Email  Address</label>
                                    <input onChange={(e)=>{
                                        setValues({ ...values, 'email': e.target.value })
                                        formData.set('email',e.target.value)
                                        }}  style={{ border: '2px solid black' }} type="text" className="form-control" value={email} />

                                </div>
                            </div>

                            <div className="col-md-5 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Phone Number</label>
                                    <input onChange={(e)=>{
                                        setValues({ ...values, 'phone': e.target.value })
                                        formData.set('phone',e.target.value)
                                        }}  style={{ border: '2px solid black' }} type="text" className="form-control" value={phone} required />

                                </div>
                            </div>
          </div>
      </Tabs.Tab>
      <Tabs.Tab label="Property Details" icon={<BuildingSkyscraper size={14} />}>
      <div className='row p-4'>
      <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Property Type</label>
                                    <select onChange={(e)=>{
                                        setValues({ ...values, 'property_type': e.target.value })
                                        formData.set('property_type',e.target.value)
                                        }} style={{ border: '2px solid black' }} className="form-control" value={property_type} >
                                        <option value="apartment" selected>Apartment</option>
                                        <option value="house" >House</option>
                                        <option value="commercial" >Commercial</option>
                                        <option value="Landplot" >Landplot</option>



                                    </select>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Number of Rooms</label>
                                    <input min="1" onChange={(e)=>{
                                        setValues({ ...values, 'rooms': e.target.value })
                                        formData.set('rooms',e.target.value)
                                        }} style={{ border: '2px solid black' }} type="number" className="form-control" value={rooms} required />

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Purchase Type</label>
                                    <select onChange={(e)=>{
                                        setValues({ ...values, 'purchase_type': e.target.value })
                                        formData.set('purchase_type',e.target.value)
                                        }} style={{ border: '2px solid black' }} className="form-control" value={purchase_type}>
                                        <option value="rent" >Rent</option>
                                        <option value="sale" selected>Sale</option>



                                    </select>

                                </div>
                            </div>


                            


                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Price</label>
                                    <input onChange={(e)=>{
                                        setValues({ ...values, 'price': e.target.value })
                                        formData.set('price',e.target.value)
                                        }} style={{ border: '2px solid black' }} type="number" className="form-control" value={price}  />

                                </div>
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Property Location</label>
                                    <input onChange={(e)=>{
                                        setValues({ ...values, 'location': e.target.value })
                                        formData.set('location',e.target.value)
                                        }} style={{ border: '2px solid black' }} type="text" className="form-control" value={location} required />

                                </div>
                            </div>

        </div>
      </Tabs.Tab>
      <Tabs.Tab label="Images" icon={<Photo size={14} />}>
      <div className='row p-4'>
 
                           
                            <div className="col-12 py-2">
                            <Dropzone
      onDrop={(files) => {
          
        setValues({ ...values, 'images': files})
        formData.set('images',files)
    } }
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      
   className="w-100"
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
        
        </div>

     </div>
      </Tabs.Tab>
      <Tabs.Tab label="Comments" icon={<MessageCircle size={14} />}>
      <div className='row p-4'>
 
                           
      <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-muted">Additional Comments</label>
                                    <textarea  onChange={(e)=>{
                                        
                                        setValues({ ...values, 'comment': e.target.value })
                                        formData.set('comment',e.target.value)
                                        }} style={{ border: '2px solid black' }} className="form-control" value={comment} ></textarea>
                                </div>
                            </div>

                            <div className='col-12'>
                                <span className="btn btn-success" onClick={()=>submitRequest()}>
                                click
                                </span>
                            </div>

     </div>
      </Tabs.Tab>
    </Tabs>

</div>
            </div>

        )
    }
    





    useEffect(()=>{
    setValues({...values, formData: new FormData()})


}, [])

    return(
        <div>
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
            title="Request Successfully Sent!"
            
           
          />


            : 
            propertyForm()

}

        </div>
    )

}

export default ListYourPropertyForm