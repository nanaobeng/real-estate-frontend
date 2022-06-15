import react from 'react'
import logo from '../../static/images/logo.png'
import { Navbar , Nav , NavDropdown } from 'react-bootstrap';
import ContactModal from '../../Core/Contact/ContactModal';
import RequestPropertyModal from '../../Core/Properties/Request Property/RequestPropertyModal';
import ListYourPropertyModal from '../../Core/Properties/ListYourProperty/ListYourPropertyModal';



const NavbarLayout = () => {
    return(
        <div className='row'>
            <div className='col-12 ' >
            <Navbar collapseOnSelect className="p-4" expand="lg" bg="light" variant="light">
 
  <Navbar.Brand href="/" style={{color:'black'}}><img className="img-fluid" src={logo} style={{ height: '6vh' }} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto" >
    <Nav.Link href="/properties" style={{color:'black',fontWeight:'500'}}>PROPERTIES</Nav.Link>
    <Nav.Link href="/about" style={{color:'black',fontWeight:'500'}}>ABOUT</Nav.Link>
      
      <NavDropdown  className='px-2'  title={<span style={{color:'black',fontWeight:'500'}}>REQUESTS</span>} id="basic-nav-dropdown">
          <NavDropdown.Item style={{color:'black',fontWeight:'500'}}><ListYourPropertyModal/></NavDropdown.Item>
          <NavDropdown.Item   style={{color:'black',fontWeight:'500'}} ><RequestPropertyModal/></NavDropdown.Item>
        
          
         
        </NavDropdown>
      <Nav.Link href="#features" style={{color:'black',fontWeight:'500'}}><ContactModal/></Nav.Link>
     
     
    </Nav>
   
  
  </Navbar.Collapse>
 
</Navbar>
            </div>
        </div>
    )
}
export default NavbarLayout