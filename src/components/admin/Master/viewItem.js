import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';



 function ViewItem() {

    const [loading, setLoading] = useState(true);
    const [itemList, setItemlist] = useState([]);
    

    useEffect(()=>{
        axios.get(`api/itemslistById`).then(res=>{

            if(res.status === 200)
            {
                setItemlist(res.data.categories)
            }
            
            setLoading(false);

        });
    },[]);

    
return(

    <div className="container px-4">
    <div className="card mt-4">
        <div className="card-header">
<h2>View Order</h2>
<Link to ="/admin/viewReq" className=" btn btn-primary btn-sm float-end">Back</Link>
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

                     {itemList.map((items,index)=> {
                         return(

     
              <tr key={items.id}>
             <td  >{++index}</td>  
            <td  > {items.name}</td>  
            <td  > {items.subcatname}</td>  
            <td  > {items.itemname}</td>  
            <td >{items.description}</td> 
            <td width="7%">{items.quantity}</td> 
            <td width="10%">
                <div className="input-group">
                  
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



</div>


)
}
 export default ViewItem;