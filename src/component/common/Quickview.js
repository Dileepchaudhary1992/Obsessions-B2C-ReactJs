import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import '../../assets/css/productlist.css';
import "../../assets/css/Quickview.css";
import Productcounter from '../common/Productcounter';
import Discription from '../common/Discription';
import Size from './Size';
import Productgallery from './Productgallery';
import { BsBorderAll } from 'react-icons/bs';

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='ShopNow'>  
          <Link onClick={handleShow}>
          <i className="bi bi-cart2"></i> 
          </Link>
      </div> 

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton style={{ padding: "0", borderBottom: "0"}}>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>

        <Modal.Body>
           <div className='quickview-box d-flex'> 
              <div className='zoomproduct'>
                  <Productgallery> </Productgallery>
              </div>
              <div className='contentbox'> 
               <h2> Flow C Maze Shuffle Carpet Yellow  </h2>  
               <h3> ₹ 7395 -  
                <span className='amount'>₹8700 </span> 
                <span className='dicount'> (15% Off) </span> </h3>
                <p> SKU: 8907831129875 </p>
                 <Size/>
                 <Productcounter></Productcounter>
                 <button className='btn btn-dark add-to-cart'> ADD TO CART </button>

                 <Discription title="Description"></Discription>

               </div>
           </div>

        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default Example;