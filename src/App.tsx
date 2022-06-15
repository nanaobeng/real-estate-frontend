import React,{FC} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './Core/Home/HomePage'
import ViewProperties from './Core/Properties/ViewProperties';
import SingleProperty from './Core/Properties/Single Property/SingleProperty';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import About from './Core/About/About';
import Dashboard from './Admin/Dashboard/Dashboard';
import PropertyDashboard from './Admin/Properties/PropertyDashboard';
import UpdateProperty from './Admin/Properties/PropertyComponents/UpdateProperty';
import CreateProperty from './Admin/Properties/PropertyComponents/CreateProperty';
import LocationDashboard from './Admin/Locations/LocationDashboard';
import UpdateLocation from './Admin/Locations/LocationComponents/UpdateLocation';
import CreateLocation from './Admin/Locations/LocationComponents/CreateLocation';
import TrackingSheet from './Admin/Tracking/TrackingSheet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import MainDashboard from './Admin/RequestsAndMessages/MainDashbard';

interface IApp {

}

const App :FC<IApp> = (props) => {

  return(
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/properties" element={<ViewProperties/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/property">
          <Route path=':property_id' element={<SingleProperty/>} />
        </Route>
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/manage/properties" element={<PropertyDashboard/>} />
        <Route path="/admin/manage/property/update/:property_id" element={<UpdateProperty/>} />
        <Route path="/admin/manage/property/create" element={<CreateProperty/>} />
        <Route path="/admin/manage/locations" element={<LocationDashboard/>} />
        <Route path="/admin/manage/location/update/:location_id" element={<UpdateLocation/>} />
        <Route path="/admin/manage/location/create" element={<CreateLocation/>} />
        <Route path="/admin/tracking" element={<TrackingSheet/>} />
        <Route path="/admin/requests/messages" element={<MainDashboard/>} />

        
        
       
      </Routes>
    </BrowserRouter>

  
  )
}
export default App;
