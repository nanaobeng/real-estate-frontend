import react,{useState,useEffect} from 'react'
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, BuildingSkyscraper , UserCircle , Upload, X, Icon as TablerIcon  } from 'tabler-icons-react';
import { addDeveloperList} from '../APIs'
import { LoadingOverlay, Button, Group } from '@mantine/core';
const DevelopersListCreateForm = () => {
    const [visible, setVisible] = useState(false);
    const [approved, setApproved] = useState(false)
    const [error, setError] = useState(false)

    const [values,setValues] = useState<any>({

        developer_name : '',
        phone : '' ,
        email : '' ,
        developer_type : 'Company',
        contract_period : '' ,
        location_of_initial_contact : '' ,
        referral : '' ,
        rent_commission : '' ,
        sale_commission : '' ,
        contact_person  : '',
        agreement_status  : 'Not Signed',
        remarks : '',
        status : 'Not Signed' ,

     
        formData: '',
        loading: false,

    })


    const {
    developer_name ,
        phone  ,
        email  ,
        developer_type ,
        contract_period  ,
        location_of_initial_contact  ,
        referral  ,
        rent_commission  ,
        sale_commission  ,
        contact_person  ,
        agreement_status  ,
        remarks ,
        status  ,
        loading,
        formData

    } = values

    const submitRequest = () => {
       
        setVisible(true)
        setValues({ ...values, loading: true })
       
        
        addDeveloperList(formData)
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
                    <label className='text-muted'><b> Developer Type </b></label>
                    <select className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'developer_type': e.target.value })
                                        formData.set('developer_type',e.target.value)
                                        }} value={developer_type}>
                        <option value="Company">
                            Company
                        </option>
                        <option value="Individual">
                            Individual
                        </option>
                       
                    </select>
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
                    <label className='text-muted'><b>Contract Period </b></label>
                    <input className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'contract_period': e.target.value })
                                        formData.set('contract_period',e.target.value)
                                        }} value={contract_period} />
                </div>

                <div className='col-lg-4 col-sm-12 py-4'>
                    <label className='text-muted'><b>Contact Person</b></label>
                    <input className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'contact_person': e.target.value })
                                        formData.set('contact_person',e.target.value)
                                        }} value={contact_person} />
                    </div>

               
                
  

              

                
         

                

              
                        </div>

                    </Tabs.Tab>
                    <Tabs.Tab label="Property Details" icon={<UserCircle size={14} />}>

                        <div className='row'>

                            

                            <div className='col-lg-6 col-sm-12 py-4'>
                            <label className='text-muted'><b> Location of Inital Contact </b></label>
                            <input  className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'location_of_initial_contact': e.target.value })
                                        formData.set('location_of_initial_contact',e.target.value)
                                        }} value={location_of_initial_contact}/>
                             </div>
                             <div className='col-lg-6 col-sm-12 py-4'>
                    <label className='text-muted' ><b> Referral </b></label>
                    <input className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'referral': e.target.value })
                                        formData.set('referral',e.target.value)
                                        }} value={referral} />
                </div>
                <div className='col-lg-4 col-sm-12 py-4'>
                            <label className='text-muted'><b> Rent Commission </b></label>
                            <input className='form-control' type="number" onChange={(e)=>{
                                        setValues({ ...values, 'rent_commission': e.target.value })
                                        formData.set('rent_commission',e.target.value)
                                        }} value={rent_commission}/>
                      
                       

                             </div>

                             <div className='col-lg-4 col-sm-12 py-4'>
                            <label className='text-muted'><b> Sale Commission </b></label>
                            <input className='form-control' type="number" onChange={(e)=>{
                                        setValues({ ...values, 'sale_commission': e.target.value })
                                        formData.set('sale_commission',e.target.value)
                                        }} value={sale_commission}/>
                      
                       

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
                        <option value="Not Signed">
                            Not Signed
                        </option>
                        <option value="Signed">
                            Signed
                        </option>
                       
                        
                       
                    </select>
                             </div>

                             <div className='col-lg-6 col-sm-12 py-4'>
                            <label className='text-muted'><b> Agreement Status</b></label>
                            <select className='form-control' onChange={(e)=>{
                                        setValues({ ...values, 'agreement_status': e.target.value })
                                        formData.set('agreement_status',e.target.value)
                                        }} value={agreement_status}>
                       <option value="Not Signed">
                            Not Signed
                        </option>
                        <option value="Signed">
                            Signed
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
                   <span className='btn btn-success' onClick={()=>submitRequest()}>Add</span>
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

export default DevelopersListCreateForm