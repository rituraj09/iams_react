/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { Modal, Button } from 'react-bootstrap'; 




function Vieworder(props){

    const[items, setitems] = useState([]);
    const[modalInfo, setModalInfo] = useState([]);
    const[showModal, setShowModal] = useState(false);
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

    let Viewcategory_HTMLTABLE; 

    Viewcategory_HTMLTABLE =[
      
        items.map((i,index)=>
    {
        return(

         
            <tr key={i.id}>
                 <td>{++index}</td>  
                <td> {i.name}</td>  
                <td>{i.description}</td> 
                <td>{i.finalquanity}</td>

                {
                /* <td>
                    <Link to={`edit-category/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                </td>*/}

                <td>
                <Button variant="primary" onClick={handleShow}>
    update Quantity
  </Button>

                </td> 
            </tr>
)
    })]



    const rowEvents = {
        onClick:(e, row)=>{
            setItemInput(row);
            console.log(row);
           // setModalInfo(row);
            toggleTrueFalse()
        }
    }


    const toggleTrueFalse=()=>{
        setShowModal(handleShow);
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
   <table className="table">
                        <thead className="table-dark">
                        <tr>
                        <th>SL No</th>  
                            <th>Name</th>  
                            <th>Description</th> 
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Viewcategory_HTMLTABLE}
                        </tbody>
                    </table> 
    </>
)


}

export default Vieworder