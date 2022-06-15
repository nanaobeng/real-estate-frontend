import react,{useState,useEffect} from 'react'
import {ListingViewsChart} from '../APIs'
import { Bar } from 'react-chartjs-2';


const LocationViews = () => {
    const [cLabel , setLabel ] = useState ([])
    const [cData , setData ] = useState ([])
    const [error , setError ] = useState (false)
    const [isInitialized , setConfirm ] = useState (false)
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
  

    const data = {
        labels: cLabel,
        datasets: [
          {
            label: 'Most Viewed Properties this Month',
            data: cData,
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

      const getValues = (data:any) => {
        let listing:any = []
      let countt:any = []
      
        data.map((view:any,i:number)=> (
          setConfirm(true),
          listing.push(`${view.title}`),
          countt.push(view.view_count)
        ))
  
        
        console.log(listing)
        setLabel(listing)
        setData(countt)
  
  
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
                            <div id="ch"className='col-12 p-4' style={{height:'50vh',border:'2px solid rgba(0, 0, 0, 0.5)',backgroundColor:'white',borderRadius:'2vh'}}>
                            {/* {isInitialized  ?
     <Bar data={data}  height={210}/>

     :

<b>There are currently no property views this month.</b>

        } */}

        {cData.length}
                            </div>
                </div>


                </div>

            </div>
        </div>
        </div>

    )
}
export default LocationViews