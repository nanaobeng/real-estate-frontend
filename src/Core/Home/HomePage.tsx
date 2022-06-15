import react from 'react'

import Layout from '../../Components/CoreLayout/Layout'
import About from './About/About'
import Benefits from './Benefits/Benefits'
import CarouselComp from './Carousel/CarouselComp'
import Header from './Header/Header'
import RecentListings from './RecentLisstings/RecentListing'

const Homepage = () => {

    return(

        <Layout>
           <Header/>
           <Benefits/>
           <About/>
           {/* <CarouselComp/> */}
           <RecentListings/>
        </Layout>

    )

}

export default Homepage