import react, {FC} from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
interface Props {
    children : any
}

const Layout:FC<Props> = ({children}) => {

    return(
<div>

    

<div className='row'>



 <div className='col-12'>

     <Navbar/>
     </div>
     <div className='col-12' >
     {children}
     </div>
     <div className='col-12'>
         <Footer/>
     </div>
</div>
        
</div>
    )

}

export default Layout
