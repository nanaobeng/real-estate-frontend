import react, {FC} from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';
import admin_side from '../../static/images/admin_side.png'
import rec from '../../static/images/rec.png'

import {ExternalLink} from 'react-external-link'
interface Props {
    children : any
}

const Layout:FC<Props> = ({children}) => {
    const location = useLocation();
    const path = location.pathname;
    return(
<div>

    

<div className='row'>



 <div className='col-12'>

     <Navbar/>
     </div>
     <div className='col-2 ' style={{height:'90vh',backgroundColor:'black',backgroundImage:`url(${admin_side})`,backgroundSize: 'contain'}}>
         <div className='row px-4' style={{paddingTop:'25%',backgroundImage:`url(${rec})`,height:'90vh '}}>

             <div className=' col-12 p-4'>
                 
                 {path === '/admin/dashboard' ? 
                 <ExternalLink href="/admin/dashboard" target="_self">
                 <span style={{fontWeight:'bold',color:'rgba(245, 178, 33, 1)',fontSize:'1.5vh',cursor:'pointer'}}>
                 Dashboard
                 
             </span>
             </ExternalLink>

             :

             <ExternalLink href="/admin/dashboard" target="_self">
             <span style={{fontWeight:'bold',color:'white',fontSize:'1.5vh',cursor:'pointer'}}>
             Dashboard
             
         </span>
         </ExternalLink>
                
                }
                <br/><br/>

                
                 
                {path.substr(0, 21) === '/admin/manage/propert' ? 
                <ExternalLink href="/admin/manage/properties" target="_self">
                <span style={{fontWeight:'bold',color:'rgba(245, 178, 33, 1)',fontSize:'1.5vh',cursor:'pointer'}}>
                Properties
                
            </span>
            </ExternalLink>
                

             :

             <ExternalLink href="/admin/manage/properties" target="_self">
             <span style={{fontWeight:'bold',color:'white',fontSize:'1.5vh',cursor:'pointer'}}>
             Properties
             
         </span>
         </ExternalLink>
                
                }
                <br/><br/>

                {path.substr(0, 22) === '/admin/manage/location' ? 
                <ExternalLink href="/admin/manage/locations" target="_self">
                <span style={{fontWeight:'bold',color:'rgba(245, 178, 33, 1)',fontSize:'1.5vh',cursor:'pointer'}}>
                Locations
                
            </span>
            </ExternalLink>
                

             :

             <ExternalLink href="/admin/manage/locations" target="_self">
             <span style={{fontWeight:'bold',color:'white',fontSize:'1.5vh',cursor:'pointer'}}>
             Locations
             
         </span>
         </ExternalLink>
                
                }
                <br/><br/>

                {path === '/admin/tracking' ? 
                <ExternalLink href="/admin/tracking" target="_self">
                <span style={{fontWeight:'bold',color:'rgba(245, 178, 33, 1)',fontSize:'1.5vh',cursor:'pointer'}}>
                Lead Tracking
                
            </span>
            </ExternalLink>
                

             :

             <ExternalLink href="/admin/tracking" target="_self">
             <span style={{fontWeight:'bold',color:'white',fontSize:'1.5vh',cursor:'pointer'}}>
             Lead Tracking
             
         </span>
         </ExternalLink>
                
                }
                <br/><br/>

                {path === '/admin/requests/messages' ? 
                <ExternalLink href="/admin/requests/messages" target="_self">
                <span style={{fontWeight:'bold',color:'rgba(245, 178, 33, 1)',fontSize:'1.5vh',cursor:'pointer'}}>
                Requests & Messages
                
            </span>
            </ExternalLink>
                

             :

             <ExternalLink href="/admin/requests/messages" target="_self">
             <span style={{fontWeight:'bold',color:'white',fontSize:'1.5vh',cursor:'pointer'}}>
             Requests & Messages
             
         </span>
         </ExternalLink>
                
                }
                <br/><br/>

                <span style={{fontWeight:'bold',color:'white',fontSize:'1.5vh',cursor:'pointer'}}>
           Logout
             
         </span>


              
                 
             </div>
             

         </div>
         
     </div>
     <div className='col-10 overflow-auto' style={{height:'90vh',backgroundColor:'#eeee',paddingRight:'7%',paddingLeft:'7%'}} >
     {children}
     </div>
    
</div>
        
</div>
    )

}

export default Layout
