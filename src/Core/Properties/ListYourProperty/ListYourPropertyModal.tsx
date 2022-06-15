import react,{useState} from 'react'
import {  Modal, Button  } from 'antd';
import ListYourPropertyForm from './ListYourPropertyForm';
// import RequestPropertyForm from './RequestPropertyForm';

const ListYourPropertyModal = () => {
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

    const ModalBody = () =>{
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
                              <b style={{fontSize:'30px'}}>List Property</b>
                         </div>
                     </div>

                     <div className="row p-4">

              <ListYourPropertyForm/>
                  
                     
                     </div>
     </div > 
          </Modal>
        )
    }
    return (

        <div>
            {ModalBody()}
            
            <span onClick={showModal} style={{color:'black',fontWeight:'500'}}>LIST YOUR PROPERTY</span>
          
        </div>

    )
}

export default ListYourPropertyModal