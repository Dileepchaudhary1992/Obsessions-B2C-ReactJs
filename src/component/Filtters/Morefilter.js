// import { colors } from '@mui/material';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../assets/css/Morestyle.css";

function Morefilter() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <>
    <Button onClick={handleShow} style={{ color: "#F00"}}> + More </Button> 
    <Modal show={show} onHide={handleClose} animation={false} size='xl' className=''>
        <Modal.Header closeButton style={{ padding: "4px 14px" }}>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
            <div className='serachingbox'> 
               <input type='search' placeholder='search' className='form-control input'/>
             </div>

           </Modal.Header>
             <Modal.Body>
             <form>

            <div className='row'> 
                <div className='col-md-3'> 
                <div className="form-group">
                <input type="checkbox" id="Beiges"/>
                <label htmlFor="Beiges">Beiges & Browns</label>
                </div>
                <div className="form-group">
                <input type="checkbox" id="Browns"/>
                <label htmlFor="Browns"> Browns</label>
                </div>
                <div className="form-group">
                <input type="checkbox" id="Orange"/>
                <label htmlFor="Orange">Orange</label>
                </div>
             </div>

             <div className='col-md-3'> 
                <div className="form-group">
                <input type="checkbox" id="Beiges"/>
                <label htmlFor="Beiges">Beiges & Browns</label>
                </div>
                <div className="form-group">
                <input type="checkbox" id="Browns"/>
                <label htmlFor="Browns"> Browns</label>
                </div>
                <div className="form-group">
                <input type="checkbox" id="Orange"/>
                <label htmlFor="Orange">Orange</label>
                </div>
             </div>

             <div className='col-md-3'> 
                <div className="form-group">
                <input type="checkbox" id="Beiges"/>
                <label htmlFor="Beiges">Beiges & Browns</label>
                </div>
                <div className="form-group">
                <input type="checkbox" id="Browns"/>
                <label htmlFor="Browns"> Browns</label>
                </div>
                <div className="form-group">
                <input type="checkbox" id="Orange"/>
                <label htmlFor="Orange">Orange</label>
                </div>
             </div>

             <div className='col-md-3'> 
                <div className="form-group">
                <input type="checkbox" id="Beiges"/>
                <label htmlFor="Beiges">Beiges & Browns</label>
                </div>
                <div className="form-group">
                <input type="checkbox" id="Browns"/>
                <label htmlFor="Browns"> Browns</label>
                </div>
                <div className="form-group">
                <input type="checkbox" id="Orange"/>
                <label htmlFor="Orange">Orange</label>
                </div>
            </div>
            </div>
            </form>	
        </Modal.Body>
    </Modal>

    </>
  );
}

export default Morefilter;