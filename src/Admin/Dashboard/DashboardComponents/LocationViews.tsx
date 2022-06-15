import React , {useState, useEffect} from 'react';
import {ListingViewsChart} from '../APIs'
import { Bar } from 'react-chartjs-2';
const options:any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
const LocationViews = () => {
    const [locLabel , setLocLabel ] = useState ([])
  const [locData , setLocData ] = useState ([])
  const [error , setError ] = useState (false)

  const data = {
    labels: locLabel,
    datasets: [
      {
        label: 'Monthly Location Views',
        data: locData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  let loc:any = {}

    let locD:any = []
    let  locL:any = []
  
    const getValues = (data:any) => {
      
     

      data.map((view:any,i:number)=> (
        loc.hasOwnProperty(`${view.city}`) ?
        
        loc[`${view.city}`] = parseInt(loc[`${view.city}`]) +  view.view_count

        :

        loc[`${view.city}`] = view.view_count
          
        
        
      ))
      
      for(var key in loc) {

        locL.push(key)
        locD.push(loc[key])
          
        
      }
      
      setLocLabel(locL)
      setLocData(locD)
      
    }

    const listingsCount = () => {

        ListingViewsChart()
        .then(data => {
            if(data.error){
                setError(data.error)
            }
            else{
          
                console.log(data)
             
                getValues(data)
                
            }
        })
    }


 
   



    useEffect(() => {
        
       
       
         listingsCount()
        
      
        
    }, [])
    return (

        <div className='row px-4'>
        <div className='col-12'>
            <div className='row px-4'>

                <div className=' col-lg-12 px-4'>
                <div className='row '>
                            <div className='col-12 p-4' style={{height:'50vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'white',borderRadius:'2vh'}}>
                            {locLabel && locLabel.length > 0 ?
     <Bar data={data} options={options} height={210}/>

     :

<b>There are currently no property views this moonth.</b>

        }
                            </div>
                </div>


                </div>

            </div>
        </div>
        </div>

    )
}
export default LocationViews