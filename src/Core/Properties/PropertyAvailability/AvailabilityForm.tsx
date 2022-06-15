import react,{useState,FC} from 'react'
import { Spin ,Result, Button} from 'antd';
import { checkAvailabililty} from '../APIs/PropertyAPIs'
interface Props {
    id : number
}
const AvailabilityForm:FC<Props> = ({id}) => {
    const [approved, setApproved] = useState(false)
    const [error, setError] = useState(false)
    const [values, setValues] = useState({
        title : 'Mr.',
        firstname : '',
     lastname: '',
        fullname:'',
        phone: '',
        email: '',
        message: '',
        loading: false,
        listing_id : id,
        requestSent: '',
        formData: ''
    })

    const {
        title,
        fullname,
        firstname,
     lastname,
        phone,
        email,
        message,
        listing_id,
        loading,
        requestSent,
        formData
    } = values

    

    


    const formDetails = () => {

        return(

            <div className="col-12 py-2"  >
                   <form onSubmit={submitForm}>
                   <div className="row text-left p-4">
       


       <div className="col-sm-12">
       <div className="form-group">
       <label ><b>Full Name *</b></label>
       <input  onChange={(e)=>{setValues({ ...values, 'fullname': e.target.value })}} style={{border:'2px solid black',fontSize:'11px'}} type="text" className="form-control" placeholder="Enter your Full Name..." value={fullname} required/>
       
       </div>
       </div>
       
       
       
       
       <div className=" col-sm-12">
       <div className="form-group">
       <label ><b>Email Address *</b></label>
       <input  onChange={(e)=>{setValues({ ...values, 'email': e.target.value })}} style={{border:'2px solid black',fontSize:'11px'}} type="text" className="form-control" value={email} placeholder="Enter your Email Address..." required/>
       
       </div>
       </div>
       
       <div className=" col-sm-12">
       <div className="form-group">
       <label ><b>Phone Number *</b></label>
       <input  onChange={(e)=>{setValues({ ...values, 'phone': e.target.value })}} style={{border:'2px solid black',fontSize:'11px'}} type="text" className="form-control" value={phone} placeholder="Enter your Phone Number..."  required/>
       
       </div>
       </div>
       <div className="col-12 py-2 text-right">
                         <input type="Submit" value="Submit "className="btn btn-success" style={{border:'2px solid #eee',backgroundColor:'#F5B221',color:'white',width:'100%'}} />
                       </div>
       
       
           </div>
                            </form>
                        </div>
        )
    }

    const submitForm = (event:any) => {
        event.preventDefault();
        setValues({ ...values, loading: true })
        console.log(values)
        checkAvailabililty(values)
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setApproved(true)
                    setValues({ ...values, loading: false , fullname :'',phone:'',email:'' })
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
export default AvailabilityForm