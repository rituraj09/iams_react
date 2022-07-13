import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import {BsFillArrowRightCircleFill } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Badge } from 'react-bootstrap';

export default function ApprovedOrderAdmin(props) {

    const [loading, setLoading] = useState(true);
    const [categorylist, setCategorylist] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]); 
    

    useEffect(()=>{
    axios.get(`api/getfinalOrders`).then(res=>{

        if(res.status === 200)
        {
            setCategorylist(res.data.ordermaster)
        }
        
        setLoading(false);

    });
},[]);




let Viewcategory_HTMLTABLE ;

    Viewcategory_HTMLTABLE =[

    categorylist.filter((items)=>
    {
        if(searchTerm==""){
            return items
        }
        else if(items.orderno.toLowerCase().includes(searchTerm.toLowerCase())){
            return items.orderno
        }
        else if(items.orderdate.toLowerCase().includes(searchTerm.toLowerCase())){
            return items.orderdate
        }
        else if(items.branchname.toLowerCase().includes(searchTerm.toLowerCase())){
            return items.branchname
        }
    }).reverse().map((items)=>
    {
        let status;

        if(loading)
        {
            return (
            <tr>
                <td colspan="5">
                    Loading...
                </td>
            </tr>
            )
        }
        else{

            if(items.status == "2"){
                status = <Badge pill bg="warning" text="dark">Order placed</Badge>
            }


        return(
         
            <tr key={items.orderno}>
                <td>{items.orderno}</td>
                <td>{items.orderdate}</td>
                <td>{items.branchname}</td>
                <td>{status}</td>
                <td>
                        <Link to={`Viewfinalorder/${items.id}`} className="btn btn-success btn-sm">View <BsFillArrowRightCircleFill/></Link>
                    </td>
               
            </tr>
         ) 
        }
    })]


/////////////////////////////////////////////////////////////////////////

return (
<>
<nav aria-label="breadcrumb ">
        <ol className="breadcrumb p-2">
        <li className="breadcrumb-item"><Link  to="/admin/dashboard"  >Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">View Approved Orders</li>
        </ol>
    </nav>

   <div className="container px-4">

      
       
    <div className="card mt-4">
        <div className="card-header">
            <h4  className="text-center"> Order By Branch (Approved)
            <nav class="navbar navbar-light bg-light">

            <div class="input-group flex-nowrap mt-4">
  <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faSearch}/></span>
  <input type="search" class="form-control form-control-lg " placeholder="Type your keywords here..."  onChange={event=>{setSearchTerm(event.target.value)}}></input>
</div>



</nav>
            </h4>
        </div>

        <div className="card-body">
        <table class="table table-striped">
<thead className="table-dark">
<tr>
    <th>ID</th>
    <th>Date</th>
    <th>Branch Name</th>
    <th>Status</th>
    <th>View</th>

</tr>
</thead>
<tbody>
{Viewcategory_HTMLTABLE}
</tbody>
</table>

        </div>

    </div>
  

   </div>
   </>
);







}
