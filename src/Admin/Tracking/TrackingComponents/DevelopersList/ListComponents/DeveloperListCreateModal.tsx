import react,{useState} from 'react'
import {  Modal, Button  } from 'antd';
import ClientsSearchForm from './DevelopersListCreateForm';
import DevelopersListCreateForm from './DevelopersListCreateForm';


const DevelopersCreateModal = () => {
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
                              <b style={{fontSize:'30px'}}>Add Developer</b>
                         </div>
                     </div>

                     <div className="row p-4">

                        <DevelopersListCreateForm/>
                  
                     
                     </div>
     </div > 
          </Modal>
        )
    }

    return(
        <div className='col-12 pt-2 pb-4 text-right'>
            {ModalBody()}
        <span className="btn btn-success" onClick={showModal}>Add Developer</span>
    </div>
    )



}

export default DevelopersCreateModal