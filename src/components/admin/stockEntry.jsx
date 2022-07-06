import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



export default function StockEntry() {
  const [loading, setLoading] = useState(true);
  const [categorylist, setCategorylist] = useState();
  

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
if(loading)
{
  return <h4> Loading...... </h4>
}

else{
  Viewcategory_HTMLTABLE =[

  categorylist.map((items)=>
  {

      return(
          <tr key={items.orderno}>
              <td>{items.orderno}</td>
              <td>{items.orderdate}</td>
              <td>{items.branchname}</td>
              <td>
                      <Link to={`StockView/${items.id}`} className="btn btn-success btn-sm">View</Link>
                  </td>
             
          </tr>
      )
  })]
}



/////////////////////////////////////////////////////////////////////////

return (
  <>
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb p-2">
      <li className="breadcrumb-item"><Link  to="/admin/dashboard"  >Home</Link></li>
      <li className="breadcrumb-item active" aria-current="page">Stock Entry</li>
      </ol>
  </nav>

 <div className="container px-4">

    
     
  <div className="card mt-4">
      <div className="card-header">
          <h4 className="text-center"> Order By Branch
  
          </h4>
      </div>

      <div className="card-body">
      <table class="table table-striped">
<thead className="table-dark">
<tr>
  <th>ID</th>
  <th>Date</th>
  <th>Branch Name</th>
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
)
}
