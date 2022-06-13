/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { Modal, Button } from 'react-bootstrap';
import BootstrapTable from "react-bootstrap-table-next";




function Vieworder(props){

    const[items, setitems] = useState([]);
    const[modalInfo, setModalInfo] = useState([]);
    const[showEdit, setShowEdit] = useState(false);
    const[itemInput, setItemInput] = useState([]);
    const[show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

    const id= props.match.params.id; 
    const getItems = async() => {
        try{ 


            const data =  axios.get(`/api/getOrderItems/${id}`).then(res=>{

                if(res.data.status===200){
                    setitems(res.data.orderitems);
                }
    
                else if(res.data.status===404)
                {
                    swal("Error",res.data.message,"error");     
                } 
            });
        }
        catch(e){
                console.log(e);
        }
    };

    useEffect(()=>{
    getItems()},[]);

    


    const clickEvent = {
        onClick:(e, row)=>{
            setItemInput(row); 
            toggleTrueFalse()
        }
    }


    const toggleTrueFalse=()=>{
        setShowEdit(handleShow);
    };
    const handleInput = (event)=>{
        event.persist();
        setItemInput({...itemInput, [event.target.name]: event.target.value});
     
      }
    const ModalContent = ()=>{
        return(
           <>
           <Modal show = {show} onHide = {handleClose}>
           <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>

                <h1>{modalInfo.name}</h1>
                <input type ="text" name="finalquanity" className="form-control mb-2"  value={itemInput.finalquanity} onChange={handleInput}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>

           </Modal>
           </>
        )
    }

return(
    <>
    <BootstrapTable
    keyField="name"
    data={items}
    columns={columns}
    rowEvents={rowEvents}

    />
     <table className="table">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>Sl. No.</th>
                                                    <th>Name</th> 
                                                    <th>Description</th>
                                                    <th>Qty</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Viewcategory_HTMLTABLE}
                                            </tbody>
                                        </table>     
    {show ? <ModalContent/> : null}
    </>
)


}

export default Vieworder