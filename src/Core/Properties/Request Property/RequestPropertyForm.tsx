
import react,{useState} from 'react'
import { Spin ,Result, Button} from 'antd';

import {propertyRequest} from '../APIs/PropertyAPIs'




const RequestPropertyForm = () => {
    const [approved, setApproved] = useState(false)
    const [error, setError] = useState(false)
    const [values, setValues] = useState<any>({
        fullname:'',
        phone: '',
        email: '',
        comment: '',
        purchase_type : 'sale',
        property_type : 'apartment',
        budget : '',
        rooms : 0,
        location : '',
        loading: false,
        requestSent: '',
        formData: ''
    })

    const {
    
        fullname,
        phone,
        email,
        comment,
        loading,
        purchase_type ,
        property_type ,
        budget ,
        rooms ,
        location ,
        requestSent,
        formData
    } = values
    

    



    const formDetails = () => {

        return(

            <div className="col-12 py-2"  >
                   <form onSubmit={submitRequest}>
                   <div className="row text-left" >

                                


<div className="col-md-12 col-sm-12">
    <div className="form-group">
        <label style={{ color: 'black',fontWeight:'bold' }}>Full Name *</label>
        <input onChange={(e)=>{setValues({ ...values, 'fullname': e.target.value })}} style={{ border: '2px solid black' ,fontSize:'12px'}} type="text" className="form-control" placeholder="Enter your Full Name..."value={fullname} required/>
    </div>
</div>

<div className="col-md-6 col-sm-12">
    <div className="form-group">
        <label style={{ color: 'black' ,fontWeight:'bold'}}>Email Address *</label>
        <input onChange={(e)=>{setValues({ ...values, 'email': e.target.value })}} type="text" className="form-control" style={{ border: '2px solid black' ,fontSize:'12px'}} placeholder="Enter your Email..." value={email} required/>
    </div>
</div>

<div className="col-md-6 col-sm-12">
    <div className="form-group">
        <label style={{ color: 'black' ,fontWeight:'bold'}}>Phone Number *</label>
        <input onChange={(e)=>{setValues({ ...values, 'phone': e.target.value })}} type="text" className="form-control"  style={{ border: '2px solid black' ,fontSize:'12px' }} placeholder="Enter your Phone number..." value={phone} required/>
    </div>
</div>



<div className="col-md-6 col-sm-12">
<div className="form-group">
    <label >Property Type</label>
    <select onChange={(e)=>{setValues({ ...values, 'property_type': e.target.value })}} style={{ border: '2px solid black' }} className="form-control" value={property_type} >
        <option value="apartment" >Apartment</option>
        <option value="house" >House</option>
        <option value="commercial" >Commercial</option>
        <option value="Landplot" >Landplot</option>



    </select>

</div>
</div>
<div className="col-md-3 col-sm-12">
    <div className="form-group">
        <label style={{ color: 'black' ,fontWeight:'bold'}}>Rooms *</label>
        <input onChange={(e)=>{setValues({ ...values, 'rooms': e.target.value})}} type="number" className="form-control" style={{ border: '2px solid black' ,fontSize:'12px'}}  value={rooms} required/>
    </div>
</div>


<div className="col-md-3 col-sm-12">
<div className="form-group">
    <label className="text-muted">Purchase Type</label>
    <select onChange={(e)=>{setValues({ ...values, 'purchase_type': e.target.value })}} style={{ border: '2px solid black' }} className="form-control" value={purchase_type}>
    <option value="sale" >Sale</option>
        <option value="rent" >Rent</option>
       



    </select>

</div>
</div>

<div className="col-md-6 col-sm-12">
    <div className="form-group">
        <label style={{ color: 'black' }}>Budget {purchase_type == 'rent' && '/month'} (GH¢) *</label>
        <input onChange={(e)=>{setValues({ ...values, 'budget': e.target.value })}} type="number" className="form-control" style={{ border: '2px solid black' ,fontSize:'12px'}}  value={budget} required/>
    </div>
</div>

<div className="col-md-6 col-sm-12">
    <div className="form-group">
        <label style={{ color: 'black' ,fontWeight:'bold'}}>Location *</label>
        <input onChange={(e)=>{setValues({ ...values, 'location': e.target.value })}} type="text" className="form-control" style={{ border: '2px solid black' ,fontSize:'12px'}}  value={location} required/>
    </div>
</div>





<div className="col-md-12 col-sm-12">
    <div className="form-group">
        <label style={{ color: 'black' ,fontWeight:'bold'}}>Message *</label>
        <textarea  onChange={(e)=>{setValues({ ...values, 'comment': e.target.value })}} className="form-control" style={{ border: '2px solid black' ,fontSize:'12px'}} value={comment} placeholder="Enter your Message here..."required></textarea>
    </div>
</div>

<div className="col-12 py-2 text-right">
                                    <input type="submit" onClick={submitRequest} style={{ width: '100%',  backgroundColor: '#F5B221', color: 'black',  borderRadius:'8px'}} className="btn " />
                                </div>
</div>
                            </form>
                        </div>
        )
    }

    const submitRequest = () => {
       
        console.log(values)
        setValues({ ...values, loading: true })
        propertyRequest(values)
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setApproved(true)
                    setValues({ ...values, loading: false , fullname:'',
                    phone: '',
                    email: '',
                    comment: '',
                    purchase_type : 'sale',
                    property_type : 'apartment',
                    budget : '',
                    rooms : 0,
                    location : '', })
                    setTimeout(function () {
                        
                        setApproved(false)
                        }, 2000);
                    
                }
            })
    }




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
            formDetails()

}

        </div>
    )

}

export default RequestPropertyForm