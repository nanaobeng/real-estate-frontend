import react,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AdminLayout from '../../../Components/CoreLayout/AdminLayout'


import { getLocation , updateLocation} from '../APIs'

import { Spin ,Result, Button} from 'antd';



const UpdateLocation = () => {
   

    
      
   
    const [approved, setApproved] = useState(false)
    const [location,setLocation] = useState({})
    const {location_id} = useParams()
    const id:any = location_id
    const regions = ["Greater Accra Region","Eastern Region","Volta Region", "Ahafo Region", "Ashanti Region","Bono East Region","Brong Ahafo Region" , "Central Region" , "North East Region" , "Northern Region" , "Oti Region" , "Savannah Region" , "Upper East Region" , "Upper West Region" , "Western North Region" , "Western Region"]
   



   
    const [errors,setError] = useState(false)
    const [values,setValues] = useState<any>({
        city:'',
        region:'Greater Accra Region',
        country:'Ghana',
        coordinates:'',
        loading : false ,
        error : '',
        createdLocation : '',
        redirectToProfile: false,
        formData: ''
    })

    const {
        city,
        region,
        country,
        coordinates,
        loading ,
        error ,
        createdLocation ,
        formData
    } = values;


    const retrieveLocation = (id:number) => {

        getLocation(id)
        .then((data:any)=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setLocation(data)
                setValues({...values,city:data.city,region:data.region,coordinates:data.coordinates,formData: new FormData()})
            }
        })

    }

 
    const submitRequest = () => {
        formData.set('coordinates','')
        formData.set('country','Ghana')
        console.log(values)
        setValues({ ...values, loading: true })
        
        updateLocation('token',id,formData)
            .then((data:any) => {
                if (data.error) {
                    setError(data.error)
                    setValues({ ...values, loading: false})
                }
                else {
                   
                    
                    setApproved(true)
                    setTimeout(function () {
                        
                        window.location.href="/admin/manage/locations"
                        }, 2000);
                    
                }
                  


                
            })
        
    }

    const locationDetails = () => {

        return(
            <div className='row p-4 form-group'>
             <div className="col-6 p-4">
         <div className="form-group ">
              <label style={{fontWeight: 'bold',color:'grey',fontSize: '12px'}}>
           City
                </label>
              <input type="text" onChange={(e)=>{
                                        setValues({ ...values, 'city': e.target.value })
                                        formData.set('city',e.target.value)
                                        
                                        }} className="form-control"  value={city} required  style={{height:'60px',backgroundColor: '#eeee'}}/>
              </div>
            </div>
   


            <div className="col-6 p-4">
         <div className="form-group ">
              <label style={{fontWeight: 'bold',color:'grey',fontSize: '12px'}}>
           Region
                </label>
                <select  onChange={(e)=>{
                                        setValues({ ...values, 'region': e.target.value })
                                        formData.set('region',e.target.value)
                                        
                                        }} className="form-control" style={{height:'60px',backgroundColor: '#eeee'}} value={region} required>
                {regions.map((region,i) => (
                <option key={i} value={region}>
                    {region}
                </option>
            ))}


                
                </select>
              
              </div>
            </div>

            <div className='col-12 text-right py-2'>
            <span className='btn btn-success' onClick={()=>submitRequest()}>
                Update
            </span>
        </div>
        



        
   
            </div>
        )
    }







    useEffect(()=>{

        retrieveLocation(id)
       
    },id)

    useEffect(()=>{
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

            
            locationDetails()
           
}
                        
                        </div>
                    </div>
              
                </div>
            </div>

        </AdminLayout>

    )
}
export default UpdateLocation