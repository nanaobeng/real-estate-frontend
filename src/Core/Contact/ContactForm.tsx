
import react,{useState} from 'react'
import { Spin ,Result, Button} from 'antd';

import {clientMessage} from './APIs'


const ContactForm = () => {
    const [approved, setApproved] = useState(false)
    const [error, setError] = useState(false)
    const [values, setValues] = useState({
        fullname:'',
        phone: '',
        email: '',
        message: '',
        loading: false,
        requestSent: '',
        formData: ''
    })

    const {
    
        fullname,
        phone,
        email,
        message,
        loading,
        requestSent,
        formData
    } = values

    

    
const loadSpinner = () => {
    return(
        <div className="example">
    <Spin />
  </div>

    )
}

    const formDetails = () => {

        return(

            <div className="col-12 py-2"  >
                   <form onSubmit={submitForm}>
                            <div className="row text-left" >

                            

                                <div className=" col-sm-12">
                                    <div className="form-group">
                                        <label style={{ color: 'black',fontWeight:'bold' }}>Full Name *</label>
                                        <input onChange={(e)=>{setValues({ ...values, 'fullname': e.target.value })}} style={{ border: '2px solid black' ,fontSize:'12px'}} type="text" className="form-control" placeholder="Enter your Full Name..."value={fullname} required/>
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
                                        <label style={{ color: 'black' ,fontWeight:'bold'}}>Email Address *</label>
                                        <input onChange={(e)=>{setValues({ ...values, 'email': e.target.value })}} type="text" className="form-control" style={{ border: '2px solid black' ,fontSize:'12px'}} placeholder="Enter your Email..." value={email} required/>
                                    </div>
                                </div>


                               


                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label style={{ color: 'black' ,fontWeight:'bold'}}>Message *</label>
                                        <textarea  onChange={(e)=>{setValues({ ...values, 'message': e.target.value })}} className="form-control" style={{ border: '2px solid black' ,fontSize:'12px'}} value={message} placeholder="Enter your Message here..."required></textarea>
                                    </div>
                                </div>

                                <div className="col-12 py-2 text-right">
                                    <input type="submit" value="Submit " style={{ width: '100%',  backgroundColor: '#F5B221', color: 'black',  borderRadius:'8px'}} className="btn " />
                                </div>
                            </div>
                            </form>
                        </div>
        )
    }

    const submitForm = (event:any) => {
        event.preventDefault();
        setValues({ ...values, loading: true })
        clientMessage(values)
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setApproved(true)
                    setValues({ ...values, loading: false , fullname :'',phone:'',email:'',message:'' })
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
            title="Message Successfully Sent!"
            
           
          />


            : 
            formDetails()

}

        </div>
    )

}

export default ContactForm