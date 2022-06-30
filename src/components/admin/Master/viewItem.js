import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';



 function ViewItem() {

    const [loading, setLoading] = useState(true);
    const [itemList, setItemlist] = useState([]);
    

    useEffect(()=>{
        axios.get(`api/viewitems`).then(res=>{

            if(res.status === 200)
            {
                setItemlist(res.data.items)
            }
            
            setLoading(false);

        });
    },[]);




    const DeleteCat=(id)=>{

        itemList.map((item)=>{
            id=item.id;
        })

        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              
            axios.put(`api/delete-item/${id}`).then(res=>{
                
                if(res.data.status===200){

                    axios.get(`api/viewitems/`).then(res=>{ 
                        if(res.data.status ===200){
                            setItemlist(res.data.items);
                        }   
                        setLoading(false);
                    });


                    swal("Success", res.data.message, "success");

                }
            });
            } 
          });



        

    }

    
return(
    <>
    <nav aria-label="breadcrumb ">
          <ol className="breadcrumb p-2">
          <li className="breadcrumb-item"><Link  to="/admin/dashboard"  >Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Items</li>
          </ol>
      </nav>
      <div className="container-fluid ">
          <div className="row">
              <div className="col-md-6 mb-4">
                  <div className="card shadow mb-4">                                                     
                      <div className="card-body"> 
                          <ul className="nav nav-tabs" role="tablist">
                              <li className="nav-item">
                              <Link to ="/admin/item" className="nav-link"  data-toggle="tab"   role="tab" aria-controls="home">Add</Link>
                              </li>
                              <li className="nav-item">
                              <a  href="#" data-toggle="tab" className="nav-link active" role="tab" aria-controls="profile">View</a>
                          
                              </li>
                          
                          </ul>
                          <div className="tab-content">
                              <div className="tab-pane active" id="home" role="tabpanel">
                                  <div className="row">
                                      <div className="col-md-12 mt-3">  
                                          <table className="table">
                                              <thead className="table-dark">
                                                  <tr>
                                                      <th>ID</th>
                                                      <th>Item-Name</th> 
                                                      <th>Item-code</th> 
                                                      <th>Sub-Category</th>
                                                      <th>Category</th> 
                                                      <th>Remarks</th>
                                                      <th>Approve-Rate</th> 
                                                      
                                                      <th>Action</th> 
                                                      <th></th> 
                                                  </tr>
                                              </thead>
                                              <tbody>
                                              {itemList.map((item, index)=>{
                                return(
                                    <tr>
                                    <td>{++index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.itemcode}</td>
                                    <td>{item.subcatname}</td>
                                    <td>{item.catname}</td>
                                    <td>{item.remarks}</td>
                                    <td>{item.approverate}</td>
                                    
                                    <td>
                                    <Link to={`edit-item/${item.id}`} className="btn btn-success btn-sm">Edit</Link> 
                                 
                                    </td>

                                    <td>   <button type = "button" onClick={()=>DeleteCat()} className="btn btn-danger btn-sm ml-2"> Delete </button></td>
                                 
                                   
                                  
                                    </tr>
                                )
                            })}
                                                  
                                              </tbody>
                                          </table>    
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div> 
 </>
);


}
 export default ViewItem;