import react,{useState,useEffect} from 'react'

import AdminLayout from '../../../Components/CoreLayout/AdminLayout'
import { Photo, LayoutGridAdd, BuildingSkyscraper , Cash ,Edit,NewSection, Upload, X, Icon as TablerIcon  } from 'tabler-icons-react';
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Tabs } from '@mantine/core';
import { addListing} from '../APIs'
import { getLocations} from '../../Locations/APIs'
import { Spin ,Result, Button} from 'antd';
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

const CreateProperty = () => {
    const theme = useMantineTheme();

    const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />
      
          <div className='text-center'>
              {thumbnail !== '' ? 
              
              <Text size="xl" inline>
              File Uploaded<br/><br/>
              Click Here to update image uploaded
            </Text>
              
              : 
              <Text size="xl" inline>
              Click here to set thumbnail image
            </Text>
           
              
              }
            
          </div>
        </Group>
      );

      const dropzoneChildren2 = (status: DropzoneStatus, theme: MantineTheme) => (
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />
      
          <div className='text-center'>
              {images !== '' ? 
              
              <Text size="xl" inline>
              Files Uploaded<br/><br/>
              Click Here to update images uploaded
            </Text>
              
              : 
              <Text size="xl" inline>
              Click here to add property images
            </Text>
           
              
              }
            
          </div>
        </Group>
      );
      
   
    const [approved, setApproved] = useState(false)
   
    const [property,setProperty] = useState({})
   
  


    


    const [locations,setLocations] = useState([])
    const [errors,setError] = useState(false)
    const [values,setValues] = useState<any>({
        listing_title: '',
        current_thumbnail : '',
        location_id:'',
        thumbnail:'',
        images:'',
        price:'',
        description:'',
        property_type:'',
        purchase_type: '',
        rooms:0,
        bathrooms:0,
        has_pool:0,
        has_parking:0,
        has_gym:0,
        is_furnished:0,
        loading:false,
        off_plan:0,
        status:'',
        load : false ,
        error : '',
        createdLocation : '',
        redirectToProfile: false,
        formData: ''
    })

    const {
        listing_title,
        location_id,
        thumbnail,
        images,
        current_thumbnail,
        description,
        purchase_type,
        property_type,
        rooms,
        price,
        bathrooms,
        has_pool,
        has_parking,
        has_gym,
        is_furnished,
        loading,
        off_plan,
        status,
        load,
        error ,
        createdLocation ,
        formData
    } = values;

    
    const retrieveLocations = () => {

        getLocations()
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setLocations(data)
                
            }
        })

    }
    const submitRequest = () => {
       
        console.log(values)
        setValues({ ...values, loading: true })
        
        let imageCount = 0
        for (var x = 0; x < images.length; x++) {
            formData.append('images',images[x]);
            imageCount = imageCount + 1
        }
        formData.append('imageCount',imageCount);
       
        addListing('test token',formData)
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                    setValues({ ...values, loading: false, requestSent: 1 })
                }
                else {
                   
                    
                    setApproved(true)
                    setValues({ ...values, loading: false ,
                      
                        
                
                   
                        formData : new FormData()})
                    setTimeout(function () {
                        
                        window.location.href="/admin/manage/properties"
                        }, 2000);
                    
                }
                  


                
            })
        
    }

    const propertyDetails = () => {

        return(
            <div className='row p-4 form-group'>
                <div className="col-md-4 col-sm-12">
        <div className="form-group ">
        <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}}  >Listing Title</label>
            <input type="text" style={{height:'50px'}} onChange={(e)=>{
                                        setValues({ ...values, 'listing_title': e.target.value })
                                        formData.set('listing_title',e.target.value)
                                        
                                        }} className="form-control"  value={listing_title} />
            
        </div>
    </div>

    <div className="col-md-2 col-sm-12">
        <div className="form-group ">
        <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Property Location</label>
       
            <select style={{height:'50px'}} onChange={(e)=>{
                                        setValues({ ...values, 'location_id': e.target.value })
                                        formData.set('location_id',e.target.value)
                                        
                                        }} className="form-control"  value={location_id} >
            <option disabled > -- select an option -- </option>
            {locations.map((location:any,i:number) => (
            <option key={i} value={location.location_id}>
                {location.city}
            </option>
        ))}
                </select>
             </div>
    </div>


    <div className="col-md-2 col-sm-12">
        <div className="form-group ">
        <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Property Type</label>
            <select style={{height:'50px'}} onChange={(e)=>{
                                        setValues({ ...values, 'property_type': e.target.value })
                                        formData.set('property_type',e.target.value)
                                        
                                        }} className="form-control"  value={property_type} >
            
            
            <option  value={'apartment'}>
               Apartment
            </option>
            <option  value={'house'}>
               House
            </option>
            <option  value={'commercial'}>
               Commercial
            </option>
       
            <option  value={'landplot'}>
              Landplot
            </option>
       
       
                </select>
            
        </div>
    </div>

    <div className="col-md-2 col-sm-6">
        <div className="form-group ">
        <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Rooms</label>
       
            <input  min="1" style={{height:'50px'}} type="number" onChange={(e)=>{
                                        setValues({ ...values, 'rooms': e.target.value })
                                        formData.set('rooms',e.target.value)
                                        
                                        }} className="form-control"  value={rooms} />
            </div>
    </div>

    <div className="col-md-2 col-sm-6">
        <div className="form-group ">
        <label  style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Bathrooms</label>
      
            <input min="1" style={{height:'50px'}} type="number" onChange={(e)=>{
                                        setValues({ ...values, 'bathrooms': e.target.value })
                                        formData.set('bathrooms',e.target.value)
                                        
                                        }} className="form-control"  value={bathrooms} />
              </div>
    </div>

    

    <div className="col-md-12 col-sm-12">
        <div className="form-group ">
        <label  style={{color:'grey',fontWeight:'bold',fontSize:'9px'}}>Property Description</label>
      
            <textarea style={{height:'200px'}} onChange={(e)=>{
                                        setValues({ ...values, 'description': e.target.value })
                                        formData.set('description',e.target.value)
                                        
                                        }} className="form-control"  value={description} ></textarea>
              </div>
    </div>

            </div>
        )
    }


    const propertyPricing = () => {
        return (
            <div className='row p-4 form-group'>
                <div className="col-md-6 col-sm-12">
            <div className="form-group ">
            <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Purchase Type?</label>
                <select style={{height:'50px'}} onChange={(e)=>{
                                        setValues({ ...values, 'purchase_type': e.target.value })
                                        formData.set('purchase_type',e.target.value)
                                        
                                        }} className="form-control"  value={purchase_type} >
               
                
                <option  value="sale" >
                    Sale
                </option>
                <option  value="rent">
                   Rent
                </option>
           
                    </select>
                
            </div>
        </div>

        <div className="col-md-6 col-sm-12">
            <div className="form-group ">
            <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Price {purchase_type === 'rent' ? <b>(GH¢ / per month)</b>: <b>(GH¢)</b>}</label>

           <input style={{height:'50px'}} type="number" min="1" onChange={(e)=>{
                                        setValues({ ...values, 'price': e.target.value })
                                        formData.set('price',e.target.value)
                                        
                                        }} className="form-control"  value={price} /> 
            
                
                
            </div>
        </div>
            </div>
        )
    }


    const propertyThumbnail = () => {
        return(
            <div className='row p-4 form-group'>
                <div className='col-12'>
                <Dropzone
      onDrop={(files) => {
          
        setValues({ ...values, 'thumbnail': files[0]})
        formData.set('thumbnail',files[0])
        console.log(thumbnail)
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
        )
    }

    const newPropertyImages = () => {
return(
            <div className='row p-4 form-group'>
                <div className='col-12'>
                <Dropzone
      onDrop={(files) => {
          
        setValues({ ...values, 'images': files})
        formData.set('images',files)
        console.log(images)
    } }
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      
   className="w-100"
    >
      {(status) => dropzoneChildren2(status, theme)}
    </Dropzone>

                </div>
            </div>
        )
    }


    const propertyFeatures = () => {
        return(
            <div className='row p-4 form-group'>
                <div className="col-md-4 col-sm-12">
            <div className="form-group ">
            <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Swimming Pool Available?</label>
                <select style={{height:'50px'}} onChange={(e)=>{
                                        setValues({ ...values, 'has_pool': e.target.value })
                                        formData.set('has_pool',e.target.value)
                                        
                                        }} className="form-control"  value={has_pool} >
               
                
                <option  value="1">
                    Yes
                </option>
                <option  value="0">
                    No
                </option>
           
                    </select>
                
            </div>
        </div>


        <div className="col-md-4 col-sm-12">
            <div className="form-group ">
            <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Parking Available?</label>
                <select style={{height:'50px'}} onChange={(e)=>{
                                        setValues({ ...values, 'has_parking': e.target.value })
                                        formData.set('has_parking',e.target.value)
                                        
                                        }} className="form-control"  value={has_parking} >
               
                
                <option  value="1">
                    Yes
                </option>
                <option  value="0">
                    No
                </option>
           
                    </select>
                
            </div>
        </div>


        <div className="col-md-4 col-sm-12">
            <div className="form-group ">
            <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Gym Available?</label>
                <select style={{height:'50px'}} onChange={(e)=>{
                                        setValues({ ...values, 'has_gym': e.target.value })
                                        formData.set('has_gym',e.target.value)
                                        
                                        }} className="form-control"  value={has_gym} >
               
                
                <option  value="1">
                    Yes
                </option>
                <option  value="0">
                    No
                </option>
           
                    </select>
                
            </div>
        </div>


        <div className="col-md-6 col-sm-12">
            <div className="form-group ">
            <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Furnished Property?</label>
                <select style={{height:'50px'}} onChange={(e)=>{
                                        setValues({ ...values, 'is_furnished': e.target.value })
                                        formData.set('is_furnished',e.target.value)
                                        
                                        }} className="form-control"  value={is_furnished} >
               
                
                <option  value="1">
                    Yes
                </option>
                <option  value="0">
                    No
                </option>
           
                    </select>
                
            </div>
        </div>

        <div className="col-md-6 col-sm-12">
            <div className="form-group ">
            <label style={{color:'grey',fontWeight:'bold',fontSize:'9px'}} >Off Plan?</label>
                <select style={{height:'50px'}} onChange={(e)=>{
                                        setValues({ ...values, 'off_plan': e.target.value })
                                        formData.set('off_plan',e.target.value)
                                        
                                        }} className="form-control"  value={off_plan} >
               
                
                <option  value="1">
                    Yes
                </option>
                <option  value="0">
                    No
                </option>
           
                    </select>
                
            </div>
        </div>

        <div className='col-12 text-right py-2'>
            <span className='btn btn-success' onClick={()=>submitRequest()}>
                Create
            </span>
        </div>
            </div>
        )
    }


 



   

    useEffect(()=>{
        retrieveLocations()
        setValues({...values, formData: new FormData()})
    },[])
    return(

        <AdminLayout>

            <div className='row'>
                <div className='col-12 p-4'>
                    

                    <div className='row p-4'>
                        <div className='col-12 p-4 shadow-lg' style={{backgroundColor:'white',border:'2px solid rgba(0, 0, 0, 0.5)',borderRadius:'1vh'}}>
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

            <Tabs className='p-4'>
            <Tabs.Tab label="Property Details" icon={<BuildingSkyscraper size={14} />}>
                {propertyDetails()}
            </Tabs.Tab>
            <Tabs.Tab label="Pricing" icon={<Cash size={14} />}>
                {propertyPricing()}
            </Tabs.Tab>
            <Tabs.Tab label="Thumbnail" icon={<Photo size={14} />}>
                {propertyThumbnail()}
            </Tabs.Tab>
            <Tabs.Tab label="Add New Images" icon={<NewSection size={14} />}>
            {newPropertyImages()}
            </Tabs.Tab>
            <Tabs.Tab label="Features" icon={<LayoutGridAdd size={14} />}>
            {propertyFeatures()}
            </Tabs.Tab>
        </Tabs>
}
                        
                        </div>
                    </div>
              
                </div>
            </div>

        </AdminLayout>

    )
}
export default CreateProperty