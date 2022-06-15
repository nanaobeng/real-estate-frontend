import react, {useEffect, useState} from 'react'
import Layout from '../../Components/CoreLayout/Layout'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LoadProperties from './LoadProperties';
import {getLocations,getLocationByCity,getFilteredResults,getFilteredCount} from './APIs/PropertyAPIs'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {  Modal, Button  } from 'antd';
import {useSearchParams} from 'react-router-dom'


const ViewProperties = (props:any) => {
    const queryParams = new URLSearchParams(window.location.search)


    
    


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
const handleFeatures = (event:any) => {


    if (event.target.checked) {
        handleFilters(event.target.id, 1)
    }
    else {
        handleFilters(event.target.id, 0)
    }
    console.log(event.target.checked)

};

const filtersModal = () => {
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
                              <b style={{fontSize:'30px'}}>Filters</b>
                         </div>
                     </div>

                     <div className="row p-4">
                     <div className='col-lg-6 col-sm-12 py-4'>
                                    {PurchaseType()}
                                </div>
                                <div className='col-lg-6 col-sm-12 py-4'>
                                    {PropertyType()}
                                </div>
                                <div className='col-lg-6 col-sm-12 py-4'>
                                    {PriceRange()}
                                </div>
                                <div className="col-12 py-1">
                                        <div className="row">
                                            <div className="col-12 pt-2">
                                                <b style={{ color: 'grey', fontSize: '11px' }}>Property Features</b>
                                                <hr />
                                            </div>
                                            <div className="col-6 py-2">

                                                <div className="ui checkbox"><input type="checkbox"  id="has_gym" onChange={handleFeatures} /><label>Fitness Facilities</label></div>
                                            </div>
                                            <div className="col-6 py-2">

                                                <div className="ui checkbox"><input type="checkbox"  id="has_pool" onChange={handleFeatures} /><label>Swimming Pool</label></div>
                                            </div>
                                            <div className="col-6 py-2">

                                                <div className="ui checkbox"><input type="checkbox"  id="is_furnished" onChange={handleFeatures} /><label>Furnished</label></div>
                                            </div>

                                            <div className="col-6 py-2">

                                                <div className="ui checkbox"><input type="checkbox"  id="has_parking" onChange={handleFeatures} /><label>Parking</label></div>
                                            </div>
                                            <div className="col-6 py-2">

                                                <div className="ui checkbox"><input type="checkbox" id="off_plan"  onChange={handleFeatures} /><label>Off-Plan</label></div>
                                            </div>
                                        </div>

                                    </div>
                     </div>
     </div > 
     
</Modal>
    )
}


    const [load_count, setLoad] = useState(1);
    const [value, setValue] = useState<any>('');
    const [locations,setLocations] =  useState([
        
    ]);
    const [limit, setLimit] = useState(6)
    const [listingCount, setCount] = useState(0)

    const [filteredResults, setfilteredResults] = useState([

    ])
    const [myFilters, setMyFilters] = useState({
        filters: { location: '', purchase_type: 'sale', property_type: '', rooms: 0, price_min: 0, price_max: 50000000, off_plan: 0, has_pool: 0, has_gym: 0, has_parking: 0, is_furnished: 0 }
    })
    const [error, setError] = useState(false)

    const handlePurchaseType = (e:any) => {
     

    handleFilters('purchase_type', e.target.value)
    };

    const handlePropertyType = (e:any) => {

        handleFilters('property_type', e.target.value)
    };

    const handlePrice = (maxValue:number) => {

        

        
   
         handleFilters('price_max',maxValue)

    };

    const LocationBar = () => {
        return(

            <Autocomplete 
                    disablePortal
                    id="combo-box-demo"
                    onChange={setValue}
                    options={locations}
                    sx={{ width: '80%',backgroundColor:'#EDEDED'}}
                    renderInput={(params) => <TextField {...params} label="Location" />
  }
/>

        )
    }

  

    const PurchaseType = () => {
        return(

            

<FormControl variant="filled" className='w-100' style={{borderRadius:'0.3vh',height:'5vh'}}>
<InputLabel id="demo-simple-select-filled-label">Purchase Type</InputLabel>
<Select className='w-100'
  labelId="demo-simple-select-filled-label"
  id="demo-simple-select-filled"
  value={myFilters.filters.purchase_type}
  onChange={handlePurchaseType}
  
>
  
  <MenuItem value="rent">Rent</MenuItem>
  <MenuItem value="sale">Sale</MenuItem>
  
</Select>
</FormControl>
        
        )
    }

    const PropertyType = () => {
        return(

<FormControl variant="filled" className='w-100' style={{borderRadius:'0.3vh',height:'5vh'}}>
<InputLabel id="demo-simple-select-filled-label">Property Type</InputLabel>
<Select className='w-100'
  labelId="demo-simple-select-filled-label"
  id="demo-simple-select-filled"
  value={myFilters.filters.property_type}
  onChange={handlePropertyType}
  
  
>
  
  <MenuItem  value="Apartment">Apartment</MenuItem>
  <MenuItem value="house">House</MenuItem>
  <MenuItem value="Commercial">Commercial</MenuItem>
  <MenuItem value="landplot">Landplot</MenuItem>
  
</Select>
</FormControl>
            
        
        )
    }

    const PriceRange = () => {
        return(

          

<FormControl variant="filled" className='w-100' style={{borderRadius:'0.3vh',height:'5vh'}}>
<InputLabel id="demo-simple-select-filled-label"> Max Price Range </InputLabel>
<Select className='w-100'
  labelId="demo-simple-select-filled-label"
  id="demo-simple-select-filled"
  value={myFilters.filters.price_max}
  
  
>
  
  <MenuItem onClick={() => { handlePrice(5000) }} value="5000">GH¢ 5,000</MenuItem>
  <MenuItem onClick={() => { handlePrice(30000) }} value="30000" >GH¢ 30,000</MenuItem>
  <MenuItem onClick={() => { handlePrice(100000) }} value="100000" >GH¢ 100,000</MenuItem>
  <MenuItem onClick={() => { handlePrice(1500000) }} value ="1500000">GH¢ 1,500,000</MenuItem>
  <MenuItem onClick={() => { handlePrice(50000000) }} value ="50000000">Over GH¢ 1,500,000</MenuItem>
  
</Select>
</FormControl>
            
        
        )
    }

    const MoreFilters = () => {
        return(

            <span onClick={showModal} className=" w-100  ui button" style={{paddingTop:'1.6vh',backgroundColor:'rgba(245, 178, 33, 1)',height:'5vh'}}>
                <b style={{color:'white',fontSize:'1.7vh'}}>More Filters</b>
            </span>

          

        )
    }

    const insertLocation = (data:any) => {
        let temp :any = []
        data.forEach(function(number:any, i:number) {
            let val = number.city
            console.log(val)
            temp.push(val)
        });
        console.log(temp)
        setLocations(temp)
    }

    const loadLocations = () => {
        getLocations()
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    
                    insertLocation(data)
                    
                    
                }
            })
    }

    const handleFilters = (filterBy:any, value:any) => {


        const newFilters:any = { ...myFilters }
        // console.log(newFilters)
        newFilters.filters[filterBy] = value

        console.log(newFilters)
        loadFilteredResults(myFilters.filters)
    }


    const loadFilteredResults = (newFilters:any) => {
        // console.log(newFilters)


        getFilteredResults(limit, newFilters)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    console.log(data)

                    setfilteredResults(data)
                    initialCount(newFilters)


                }
            })
    }

    const initialCount = (newFilters:any) => {
        getFilteredCount(newFilters)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    console.log('data')
                    console.log(data.length)
                    setCount(data.length)



                }
            })
    }


    const loadMore = () => {
        let newLimit = limit + 10
        setLimit(newLimit)

    }

    const filterLocation = (val:any) => {
       

        let check = false
        if (val == "") {
            handleFilters('location', "")

            return
        }
        // for (var i = 0; i < locations.length; i++) {
        //     if (locations[i].city == val) {
        //         check = true
        //     }
        // }

        // if (!check) {
        //     return
        // }

        getLocationByCity(val)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {

                    handleFilters('location', data.location_id)



                }
            })

    }
    const checkParams = () => {

        if (queryParams.get("location") && load_count == 1) {
            handleFilters('location', queryParams.get("location"))
            handleFilters('purchase_type', queryParams.get("purchase"))
            setLoad(2)
        }

    }


    useEffect(()=>{
       
        loadFilteredResults(myFilters.filters)

        loadLocations()

        checkParams()
    },[])

    useEffect(() => {

        if(value != ''){
       
        filterLocation(value.target.outerText)
       
        }

    }, [value])
    

    return(

        <Layout>

        {filtersModal()}

            <div className='row' style={{paddingLeft:'10%',paddingRight:'10%',paddingTop:'3%'}}>
        
                <div className='col-12 px-4'>
                {LocationBar()}
                </div>

             

                <div className='col-12 py-4'>

                    <div className='row'>
                        <div className='col-lg-9 col-sm-12  p-4'>
                            <div className='row'>
                                <div className='col-12 overflow-auto' style={{height:'60vh'}}>
                                    <div className='row'>
                                        <LoadProperties results={filteredResults}/>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-12  p-4'>
                            <div className='row'>
                                <div className='col-12'>

                                <span style={{fontWeight:'bold',fontSize:'2.2vh'}}>Filters</span>

                                </div>
                                
                                <div className='col-12 py-2'>
                                    {PurchaseType()}
                                </div>
                                <div className='col-12 py-2'>
                                    {PropertyType()}
                                </div>
                                <div className='col-12 py-2'>
                                    {PriceRange()}
                                </div>
                                <div className='col-12 py-2'>
                                    {MoreFilters()}
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>

    )


}

export default ViewProperties