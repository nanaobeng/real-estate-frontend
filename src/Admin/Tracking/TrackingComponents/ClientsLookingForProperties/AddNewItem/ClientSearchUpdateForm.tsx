import react,{useState,useEffect,FC} from 'react'
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, BuildingSkyscraper , UserCircle , Upload, X, Icon as TablerIcon  } from 'tabler-icons-react';
import { updateInquiryItem } from '../APIs'
import { LoadingOverlay, Button, Group } from '@mantine/core';


interface Props {
    inquiry : any
}
const ClientSearchUpdateForm:FC<Props> = ({inquiry}) => {
    
    const [visible, setVisible] = useState(false);
    const [approved, setApproved] = useState(false)
    const [error, setError] = useState(false)

    const [values,setValues] = useState<any>({
        name : inquiry[0].name,
        location : inquiry[0].location,
        phone : inquiry[0].phone,
        email : inquiry[0].email,
        duration_of_stay : inquiry[0].duration_of_stay,
        lead_agent : inquiry[0].lead_agent,
        priority : inquiry[0].priority,
        status : inquiry[0].status,
        purchase_type : inquiry[0].purchase_type,
        property: inquiry[0].property,
        properties_visited : inquiry[0].properties_visited,
        price: inquiry[0].price || 0,
        rooms : inquiry[0].rooms || 0,
        commencement_date : inquiry[0].commencement_date || '',
        deal_closure_date : inquiry[0].deal_closure_date || '',
        contract_signed  : inquiry[0].contract_signed || '',
        remarks : inquiry[0].remarks || '',
        formData: '',
        loading: false,

    })


    const {
        name ,
        location ,
        phone ,
        email ,
        duration_of_stay ,
        lead_agent ,
        priority ,
        status ,
        purchase_type ,
        property,
        properties_visited ,
        price,
        rooms  ,
        commencement_date ,
        deal_closure_date ,
        contract_signed  ,
        remarks ,
        loading,
        formData

    } = values

    const submitRequest = () => {
       
        setVisible(true)
        setValues({ ...values, loading: true })
        formData.set('name',name)
        formData.set('location',location)
        formData.set('phone',phone)
        formData.set('email',email)
        formData.set('duration_of_stay',duration_of_stay)
        formData.set('lead_agent',lead_agent)
        formData.set('priority',priority)
        formData.set('status',status)
        formData.set('purchase_type',purchase_type)
        formData.set('property',property)
        formData.set('properties_visited',properties_visited)
        formData.set('price',price)
        formData.set('rooms',rooms)
        formData.set('commencement_date',commencement_date)
        formData.set('deal_closure_date',deal_closure_date)
        formData.set('contract_signed',contract_signed)
        formData.set('remarks',remarks)
      
       
        
        updateInquiryItem(inquiry[0].client_id,formData)
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                    setValues({ ...values, loading: false })
                }
                else {
                   
                    
                    setApproved(true)
                    setValues({ ...values, loading: false ,
                      
                        name : '',
                        location : '',
                        phone : '',
                        email : '',
                        duration_of_stay : '',
                        lead_agent : '',
                        priority : '',
                        status : '',
                        purchase_type : '',
                        property: '',
                        properties_visited : 0,
                        price: 0,
                        rooms : 0 ,
                        commencement_date : '',
                        deal_closure_date : '',
                        contract_signed  : '',
                        remarks : '',
                   
                        formData : new FormData()})
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
                    <label className='text-muted'><b>Client Name</b></label>
                    <input className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'name': e.target.value })
                                        formData.set('name',e.target.value)
                                        }} value={name}/>
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
                

                <div className='col-lg-3 col-sm-12 py-4'>
                    <label className='text-muted'><b>Duration of Stay </b></label>
                    <input className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'duration_of_stay': e.target.value })
                                        formData.set('duration_of_stay',e.target.value)
                                        }} value={duration_of_stay} />
                </div>

               
                
                <div className='col-lg-4 col-sm-12 py-4'>
                    <label className='text-muted'><b> Lead Agent </b></label>
                    <input className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'lead_agent': e.target.value })
                                        formData.set('lead_agent',e.target.value)
                                        }} value={lead_agent} />
                </div>

              

                
         

                

                <div className='col-lg-4 col-sm-12 py-4'>
                    <label className='text-muted'><b> Priority </b></label>
                   

                    <select className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'priority': e.target.value })
                                        formData.set('priority',e.target.value)
                                        }} value={priority}>
                        <option value="No Priority">
                            No Priority
                        </option>
                        <option value="Lowest">
                            Lowest
                        </option>
                        <option value="Medium">
                            Medium
                        </option>
                        <option value="Highest">
                            Highest
                        </option>
                    </select>
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
                                <label className='text-muted'><b>Property Type</b></label>
                               
<select className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'property': e.target.value })
                                        formData.set('property',e.target.value)
                                        }} value={property}>
                        <option value="Residential">
                            Residential
                        </option>
                        <option value="Commercial">
                            Commercial
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
                            <label className='text-muted'><b> Properties Visited </b></label>
                            <input type="number" className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'properties_visited': e.target.value })
                                        formData.set('properties_visited',e.target.value)
                                        }} value={properties_visited}/>
                             </div>



                        </div>

                    </Tabs.Tab>
                    <Tabs.Tab label="Contract Details" icon={<UserCircle size={14} />}>
                        <div className='row'>
                        <div className='col-lg-4 col-sm-12 py-4'>
                    <label className='text-muted'><b> Commencement Date </b></label>
                    <input className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'commencement_date': e.target.value })
                                        formData.set('commencement_date',e.target.value)
                                        }} value={commencement_date}/>
                </div>
                <div className='col-lg-4 col-sm-12 py-4'>
                    <label className='text-muted'><b> Date of Deal Closure </b></label>
                    <input className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'deal_closure_date': e.target.value })
                                        formData.set('deal_closure_date',e.target.value)
                                        }} value={deal_closure_date} />
                </div>
                <div className='col-lg-4 col-sm-12 py-4'>
                    <label className='text-muted'><b> Contract Signed </b></label>
                   

                    <select className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'contract_signed': e.target.value })
                                        formData.set('contract_signed',e.target.value)
                                        }} value={contract_signed}>
                        <option value="No">
                            No
                        </option>
                        <option value="Yes">
                            Yes
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

export default ClientSearchUpdateForm