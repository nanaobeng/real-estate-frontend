import React,{FC} from 'react'

import Description from './HeaderComponents/Description'
import HeaderImages from './HeaderComponents/HeaderImages'

const Header = () =>{

    return(

    <div className='row p-4'>

        <div className='col-12 p-4'>

            <div className='row p-4'>

               <Description/>
               <HeaderImages/>


                

            </div>
        </div>

    </div>

    )

}

export default Header