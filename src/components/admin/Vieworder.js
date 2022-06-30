/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


function Vieworder(props){

    const history =useHistory();
    const [loading, setLoading] = useState(true);
    const [catInput, setCategory] =useState([]);
    const [orderDetails, setOrderDetails] =useState([]);
    const [qty, setqty] = useState([]);
    const [billInput,setBillInput]=useState({
        orderNo:'',
        orderDate:'',
        Supplier:'',
        signed:'',

    });



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleInput=(event)=>{
        event.persist();
        setBillInput({...billInput,[event.target.name]:event.target.value});
    }
    


    useEffect(()=>{

    const ids= props.match.params.id; 
 
        axios.get(`/api/getOrderItems/${ids}`).then(res=>{

            if(res.data.status===200){
                setCategory(res.data.orderitems);
            }

            else if(res.data.status===404)
            {
                swal("Error",res.data.message,"error");     
            }
            setLoading(false);
        });

},[props.match.params.id, history]);




useEffect(()=>{

    const ids= props.match.params.id; 
 
        axios.get(`/api/getOrderItems/${ids}`).then(res=>{

            if(res.data.status===200){
                setqty(res.data.orderitems);
            }

            else if(res.data.status===404)
            {
                swal("Error",res.data.message,"error");     
            }
            setLoading(false);
        });

},[props.match.params.id, history]);


///////////////////////////////////////////////////////////////////////////


    useEffect(()=>{

        const ids= props.match.params.id; 
     
            axios.get(`api/orderById/${ids}`).then(res=>{
    
                if(res.data.status===200){
                    setOrderDetails(res.data.ordermaster);
                }
    
                else if(res.data.status===404)
                {
                    swal("Error",res.data.message,"error");     
                }
                setLoading(false);
            });
    
    },[props.match.params.id, history]);
    
    
    ///////////////////////////////////////////////////////////////////////////



    
       const handleDecrement = (item_id)=> {

        setCategory(catInput=>
            catInput.map((item)=>
            item_id===item.id ? {...item, finalquanity: item.finalquanity - (item.finalquanity > 1 ? 1:0) }:item
            )
        );
        updateFinalQty(item_id,"dec");
       }

       const handleIncrement = (item_id)=> {

        setCategory(catInput=>
            catInput.map((item)=>
            item_id===item.id ? {...item, finalquanity: item.finalquanity + 1 }:item
            )
       
            );
            updateFinalQty(item_id,"inc");
       }

        
       function updateFinalQty(item_id,scope){
        axios.put(`api/updateOrderItem/${item_id}/${scope}`).then(res=>{

            if(res.data.status===200){
                swal("Success", res.data.message, "success");
            }

        });
       }
       const id= props.match.params.id; 


// ////////////////////////////////////////////////

   

       const submitOrder =()=> {
        axios.put(`api/updateOrderMaster/${id}`).then(res=>{
            
            if(res.data.status===200){
                swal("Success", res.data.message, "success");
                history.push('/admin/viewReq');
            }
        });
       }
    


       const placeOrder=(event)=>{
        event.preventDefault();
        const data = {
            actual_orderno:billInput.orderNo,
            actual_orderdate:billInput.orderDate,
            supplier:billInput.Supplier,
            signed_by:billInput.signed,
        }

        axios.put(`api/OrderMaster-edit-final/${id}`,data).then(res=>{

            if(res.data.status===200){
                swal('Success',res.data.message,"Success");
            }
            else if(res.data.status ===409){
                swal('Error', res.data.message,"warning");
            }
        })
       }


    return(
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
        <h2>View Order</h2>
        <Link to ="/admin/viewReq" className=" btn btn-primary btn-sm float-end">Back</Link>

        <div className="card-body">

            </div>
            <table className="table">

            <thead className="table-green">
                        <tr>
            
                            <th>Order Id</th> 
                            <th>Date</th> 
                            <th>Branch Name</th>  
                            <th>Remarks</th> 
                        </tr>
                        </thead>

                        <tbody>
                            {orderDetails.map((item)=>{
                                return(
                                    <tr>
                                    <td>{item.orderno}</td>
                                    <td>{item.orderdate}</td>
                                    <td>{item.branchname}</td>
                                    <td>{item.remarks}</td>
                                    </tr>
                                )
                            })}
                           
                           
                        </tbody>

                </table>

    
        </div>
               
            
       

        <div className="card-body">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                        <th>SL No</th>  
                            <th>Category</th> 
                            <th>Sub-Category</th> 
                            <th>Item</th>  
                            <th>Description</th> 
                            <th>Quantity</th>
                            <th>Final Quantity</th>
                        </tr>
                        </thead>
                        <tbody>

                             {catInput.map((items,index)=> {
                                 return(

             
                      <tr key={items.id}>
                     <td  >{++index}</td>  
                    <td > {items.subcatname}</td>  
                    <td > {items.catname}</td>  
                    <td > {items.itemname}</td>  
                    <td >{items.description}</td> 
                    <td >{items.quantity}</td> 
                    <td >
                        <div className="input-group">
                            <button type = "button" onClick={()=>handleDecrement(items.id)} className="input-group-text"> - </button>
                            <div className="form-control text-center">{items.finalquanity}</div>
                            <button type = "button" onClick={()=>handleIncrement(items.id)}  className="input-group-text"> + </button>
                        </div>

                    </td>

                    {/* <td>
                        <textarea name="finalquanity" value={items.finalquanity} onChange={handleInput}></textarea>
                        
                    </td> */}
                    </tr>
)
        })}

                            
                        </tbody>
                    </table> 
               </div>
               <div>
               
               </div>
    </div>
    <button type = "button" onClick={()=>submitOrder()} className="btn btn-primary btn-sm float-end"> Place Order </button>


    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={placeOrder}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Order No</Form.Label>
              <Form.Control  name="orderNo" onChange={handleInput} value={billInput.orderNo}
                type="Text"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Supplier</Form.Label>
              <Form.Control type="text" name="Supplier" onChange={handleInput} value={billInput.Supplier} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Group className="input-group"  >
                <Form.Control name="orderDate" onChange={handleInput} value={billInput.orderDate}
                    type="date"   min="1997-01-01" max="2030-12-31" placeholder="dd-mm-yyyy"
                />
                <span className="input-group-text">
                <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                </span>
              </Form.Group>
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Signed By</Form.Label>
              <Form.Select aria-label="Default select example" name="signed" onChange={handleInput} value={billInput.signed}>
              <option value="DC">DC</option>
              <option value="ADC">ADC</option>

    </Form.Select>

            </Form.Group>

            
           
          <Button type="submit" variant="primary" onClick={handleClose}>
            Place Order
          </Button>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        
      </Modal>


  </div>

    )

}

export default Vieworder;