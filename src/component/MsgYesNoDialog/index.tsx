import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaExclamationCircle } from "react-icons/fa";
import './style.css';

const MsgYesNoDialog = (props: {Show: boolean, Title: string, Icon: string, Message: string, 
                  BtnOkName: string, BtnNokName: string, 
                  HandlerClickOk: any, HanlerdClickNok: any, size:string}) => {
                       
 return (
      <div>
        <Modal show={props.Show} centered={true} size={props.size}>
            <Modal.Header  className='h3 bg-success' >
                <Modal.Title className='h3 text-center text-light'>
                    {                        
                        props.Title
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-row gap-4 justify-content-center align-middle'>
                    <div ><FaExclamationCircle className='text-success' style={{fontSize:"5rem"}}/></div>
                    <div className='d-flex align-items-center '><span className=' h6'>{props.Message}</span></div>
                </div>
            </Modal.Body>                
            <Modal.Footer className=''>
                {
                    (props.BtnOkName) 
                        ? 
                        <Button type="button" className="btn btn-success btnColorOk" onClick={props.HandlerClickOk}>
                            {props.BtnOkName}
                        </Button>
                        : <div></div>
                }      
                {
                    (props.BtnNokName) 
                        ? 
                        <Button type="button" className="btn btn-danger btnColorNOk" onClick={props.HanlerdClickNok}>
                            {props.BtnNokName}
                        </Button>
                        : <div></div>
                }                                      
            </Modal.Footer>
        </Modal>
      </div>
  );
}

export default MsgYesNoDialog;