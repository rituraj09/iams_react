/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { Modal, Button } from 'react-bootstrap';


function Vieworder(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history =useHistory();
    const [loading, setLoading] = useState(true);
    const [catInput, setCategory] =useState({});
    const [itemlist, setitemlist] =useState([]);
    const[catInputs,setCat] = useState({
        catName:'',
        error_list:[],
    });
    // const [error, setError]=useState([]);


    useEffect(()=>{

    const id= props.match.params.id; 
    
        axios.get(`/api/getOrderItems/${id}`).then(res=>{

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
///////////////////////////////////////////////////////////////////////////

const handleInput = (event)=>{
    event.persist();
    setCat({...catInputs,[event.target.name]:event.target.value})
  }

  const submitCat = (event) =>{
    event.preventDefault();
        
    const data ={
        finalquanity:catInputs.finalquanity,
    }
    const id= props.match.params.id; 

    axios.post(`api/updateOrderItem/${id}`, data).then(res =>{
        if(res.data.status === 200)
        {
            swal('Success',res.data.message,"Success");

            
          
        }

        else if(res.data.status === 400)
        {
            setCat({...catInputs, error_list:res.data.errors})
        }

       
    });
        
 
}

///////////////////////////////////////////////////////////////////////////
    
    //     const updateCategory = (event)=>{

    //     event.preventDefault();

    //     const orderno=props.match.params.id;
    //     const data =catInput;

    //     axios.put(`api/getOrderItems/${orderno}`,data).then(res=>{

    //         if(res.data.status===200){
    //             swal("Success",res.data.massage,"success");

    //         }

    //     });
    // }


    if(loading)
    {
        return <h4> Loading...... </h4>
    }

    let Viewcategory_HTMLTABLE; 

        Viewcategory_HTMLTABLE =[
          
            catInput.map((items,index)=>
        {
            return(

             
                <tr key={items.id}>
                     <td>{++index}</td>  
                    <td> {items.name}</td>  
                    <td>{items.description}</td> 
                    <td>{items.finalquanity}</td>
  
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
 



    return(
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
        <h2>View Order</h2>
        <Link to ="/admin/nazarat" className=" btn btn-primary btn-sm float-end">Back</Link>
        </div>
               
            
        
        <form  id="CAT_Form">
            
       
        </form>

        <div className="card-body">
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
               </div>
               <div>
               
               </div>
    </div>
    <div className="modal fade" id="#infoModal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true">
        
    </div>
   <>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  id="CAT_Form" onSubmit={{submitCat}}>
        <div className="row">
            <div className="col-sm-6 justify-content-center">
                <div className="card p-4">
                <input type ="text" name="finalquanity" className="form-control mb-2"  value={catInputs.finalquanity} onChange={handleInput}/>
                <button type="submit"  className="btn btn-info mt-2"> Save</button>
                
            </div>
            
        </div>
        </div>
       
        </form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
   </>


  </div>

    )

}

export default Vieworder;