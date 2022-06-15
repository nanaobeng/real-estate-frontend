import react,{useState,useEffect,FC} from 'react'
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, BuildingSkyscraper , UserCircle , Upload, X, Icon as TablerIcon  } from 'tabler-icons-react';
import { updateAvailableProperty } from '../APIs'
import { LoadingOverlay, Button, Group } from '@mantine/core';


interface Props {
    inquiry : any
}
const DevelopersAvailablePropertiesUpdateForm:FC<Props> = ({inquiry}) => {
    
    const [visible, setVisible] = useState(false);
    const [approved, setApproved] = useState(false)
    const [error, setError] = useState(false)

    const [values,setValues] = useState<any>({
        developer_name : inquiry[0].developer_name ,
        phone: inquiry[0].phone ,
        email : inquiry[0].email ,
        residence_type : inquiry[0].residence_type,
        purchase_type  : inquiry[0].purchase_type,
        location : inquiry[0].location ,
        property_type : inquiry[0].property_type ,
        viewed : inquiry[0].viewed ,
        rooms : inquiry[0].rooms,
        price : inquiry[0].price,
        result : inquiry[0].result,
        remarks : inquiry[0].remarks,
        status : inquiry[0].status ,
        formData: '',
        loading: false,

    })


    const {
        developer_name  ,
        phone,
        email  ,
        residence_type ,
        purchase_type ,
        location  ,
        property_type ,
        viewed ,
        rooms ,
        price ,
        result ,
        status ,
        remarks ,
        loading,
        formData

    } = values

    const submitRequest = () => {
       
        setVisible(true)
        setValues({ ...values, loading: true })
        formData.set('developer_name',developer_name)
        formData.set('phone',phone)
        formData.set('email',email)
        formData.set('residence_type',residence_type)
        formData.set('viewed',parseFloat(viewed))
 
        formData.set('status',status)
        formData.set('purchase_type',purchase_type)
        formData.set('property_type',property_type)
 
        formData.set('price',parseFloat(price))
        formData.set('rooms',parseFloat(rooms))
        formData.set('result',result)

        formData.set('remarks',remarks)
      
       
        
        updateAvailableProperty(inquiry[0].id,formData)
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                    setValues({ ...values, loading: false })
                }
                else {
                   
                    
                    setApproved(true)
                    setValues({ ...values, loading: false })
                    setTimeout(function () {
                        window.location.href="/admin/tracking"
                        
                        }, 2000);
                    
                }
                  


                
            })
        
    }

    const newForm = () => {

        return(
            <div className='row p-4'>
                <div className='col-12 '>
                <LoadingOverlay visible={visible} />
                <Tabs>

<Tabs.Tab label="Summary" icon={<UserCircle size={14} />}>

    <div className='row'>
    <div className='col-lg-8 col-sm-12 py-4'>
<label className='text-muted'><b>Developer's Name</b></label>
<input className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'developer_name': e.target.value })
                    formData.set('developer_name',e.target.value)
                    }} value={developer_name}/>
</div>

<div className='col-lg-4 col-sm-12 py-4'>
<label className='text-muted'><b> Location </b></label>
<input className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'location': e.target.value })
                    formData.set('location',e.target.value)
                    }} value={location} />
</div>




<div className='col-lg-4 col-sm-12 py-4'>
<label className='text-muted'><b>Phone </b></label>
<input className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'phone': e.target.value })
                    formData.set('phone',e.target.value)
                    }} value={phone} />
</div>


<div className='col-lg-5 col-sm-12 py-4'>
<label className='text-muted'><b>Email </b></label>
<input className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'email': e.target.value })
                    formData.set('email',e.target.value)
                    }} value={email} />
</div>














<div className='col-lg-4 col-sm-12 py-4'>
<label className='text-muted'><b> Status </b></label>

                    <select className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'status': e.target.value })
                    formData.set('status',e.target.value)
                    }} value={status}>
    <option value="Active">
        Active
    </option>
    <option value="Inactive">
        Inactive
    </option>
   
</select>
</div>


    </div>

</Tabs.Tab>
<Tabs.Tab label="Property Details" icon={<UserCircle size={14} />}>

    <div className='row'>

        <div className='col-lg-6 col-sm-12 py-4 '>
            <label className='text-muted'><b>Purchase Type</b></label>
            

<select className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'purchase_type': e.target.value })
                    formData.set('purchase_type',e.target.value)
                    }} value={purchase_type}>
    <option value="Sale">
        Sale
    </option>
    <option value="Rent">
        Rent
    </option>
    <option value="Rent/Sale">
        Rent/Sale
    </option>
   
</select>

                    
        </div>

        <div className='col-lg-6 col-sm-12 py-4'>
            <label className='text-muted'><b>Residence Type</b></label>
           
<select className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'residence_type': e.target.value })
                    formData.set('residence_type',e.target.value)
                    }} value={residence_type}>
    <option value="Residential">
        Residential
    </option>
    <option value="Commercial">
        Commercial
    </option>
    <option value="Landplot">
        Landplot
    </option>
   
</select>
        </div>

        <div className='col-lg-4 col-sm-12 py-4'>
        <label className='text-muted'><b> Rooms </b></label>
        <input type="number" className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'rooms': e.target.value })
                    formData.set('rooms',e.target.value)
                    }} value={rooms}/>
         </div>
         <div className='col-lg-4 col-sm-12 py-4'>
<label className='text-muted' ><b> Price </b></label>
<input className='form-control' type="number" onChange={(e)=>{
                    setValues({ ...values, 'price': e.target.value })
                    formData.set('price',e.target.value)
                    }} value={price} />
</div>
<div className='col-lg-4 col-sm-12 py-4'>
        <label className='text-muted'><b> Viewed Property </b></label>
        <select className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'viewed': e.target.value })
                    formData.set('viewed',e.target.value)
                    }} value={viewed}>
    <option value={0}>
        No
    </option>
    <option value={1}>
        Yes
    </option>
    
   
</select>
         </div>



    </div>

</Tabs.Tab>
<Tabs.Tab label="Property Status" icon={<UserCircle size={14} />}>
    <div className='row'>

    <div className='col-lg-6 col-sm-12 py-4'>
        <label className='text-muted'><b> Status </b></label>
        <select className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'status': e.target.value })
                    formData.set('status',e.target.value)
                    }} value={status}>
    <option value="In Progress">
        In Progress
    </option>
    <option value="Completed">
        Completed
    </option>
    <option value="Inactive">
        Inactive
    </option>
    
   
</select>
         </div>

         <div className='col-lg-6 col-sm-12 py-4'>
        <label className='text-muted'><b> Result</b></label>
        <select className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'result': e.target.value })
                    formData.set('result',e.target.value)
                    }} value={result}>
   <option value="Unsold">
        Unsold
    </option>
    <option value="Sold">
        Sold
    </option>
    
   
</select>
         </div>


<div className='col-lg-12 col-sm-12 py-4'>
<label className='text-muted'><b> Remarks </b></label>
<textarea className='form-control' onChange={(e)=>{
                    setValues({ ...values, 'remarks': e.target.value })
                    formData.set('remarks',e.target.value)
                    }} value={remarks}></textarea>
</div>

<div className='col-12 py-4 text-right' >
<span className='btn btn-success' onClick={()=>submitRequest()}>Update</span>
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
            {newForm()}
        </div>
    )


}

export default DevelopersAvailablePropertiesUpdateForm