import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
function Viewcategory () {  
        const [loading, setLoading] = useState(true);
        const [categorylist, setCategorylist] = useState([]); 

        useEffect(()=>{
        axios.get(`api/categories`).then(res=>{ 
            if(res.status === 200)
            {
                setCategorylist(res.data.categories)
            } 
            setLoading(false);

        });
    },[]); 
    let Viewcategory_HTMLTABLE ;
    Viewcategory_HTMLTABLE =[ 
    categorylist.map((item)=>
    {
        if(loading)
        {
            return 
            <tr>
                <td colspan="5">
                    Loading...
                </td>
            </tr>
        } 
        else{ 
        return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td> {item.name}</td>   
                    <td>
                        <Link to={`edit-category/${item.id}`} className="btn btn-success btn-sm">Edit</Link> 
                        <Link to={`delete-category/${item.id}`} className="btn btn-danger btn-sm ml-2">Delete</Link>
                    </td>
                </tr>
            ) 
        }  
    })]

   return (
       <>
    <nav aria-label="breadcrumb ">
        <ol className="breadcrumb p-2">
        <li className="breadcrumb-item"><Link  to="/admin/dashboard"  >Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Categories</li>
        </ol>
    </nav>
    <div className="container-fluid ">
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="card shadow mb-4">                                                     
                    <div className="card-body"> 
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                            <Link to ="/admin/category" className="nav-link"  data-toggle="tab"   role="tab" aria-controls="home">Add</Link>
                            </li>
                            <li className="nav-item">
                            <Link  to="/admin/view" data-toggle="tab" className="nav-link active" role="tab" aria-controls="profile">View</Link>
                        
                            </li>
                        
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="home" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-12 mt-2">  
                                        <table className="table">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>Sl. No.</th>
                                                    <th>Name</th> 
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Viewcategory_HTMLTABLE}
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
export default Viewcategory;