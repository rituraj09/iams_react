/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';



function Vieworder(props){

    const history =useHistory();
    const [loading, setLoading] = useState(true);
    const [catInput, setCategory] =useState([]);


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
                            <th>Final Quantity</th>
                        </tr>
                        </thead>
                        <tbody>

                             {catInput.map((items,index)=> {
                                 return(

             
                      <tr key={items.id}>
                     <td width="5%">{++index}</td>  
                    <td width="10%"> {items.name}</td>  
                    <td width="15%">{items.description}</td> 
                    <td width="7%">{items.quantity}</td> 
                    <td width="10%">
                        <div className="input-group">
                            <button type = "button" onClick={()=>handleDecrement(items.id)} className="input-group-text"> - </button>
                            <div className="form-control text-center">{items.finalquanity}</div>
                            <button type = "button" onClick={()=>handleIncrement(items.id)}  className="input-group-text"> + </button>
                        </div>

                    </td>
                    </tr>
)
        })}

                            
                        </tbody>
                    </table> 
               </div>
               <div>
               
               </div>
    </div>
    <div className="modal fade" id="#infoModal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true">
        
    </div>


  </div>

    )

}

export default Vieworder;