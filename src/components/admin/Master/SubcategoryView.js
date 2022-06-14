import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; 
import swal from 'sweetalert';

function Viewsub () { 
    const [loading, setLoading] = useState(true);
    const [categorylist, setCategorylist] = useState([]);
    const [subcategorylist, setsubCategorylist] = useState([]);
    const [itemInput, setItem ] = useState([]); 
   
         
    const handleInput =(event)=>{
        event.persist();
        setItem({...itemInput,[event.target.name]:event.target.value});
    } 
    useEffect(()=>{
        axios.get(`api/viewsubcategories/`).then(res=>{ 
            if(res.data.status ===200){
                setsubCategorylist(res.data.subcategories);
            }   
            setLoading(false);
        });
    },[]);  
   
    
            
 
   /* useEffect(()=>{ 
        let cat=itemInput.category_id;
        axios.get(`api/subcatlist/${itemInput.category_id}`).then(res=>{ 
            if(res.status === 200)
            {
                setsubCategorylist(res.data.subcategories)
            } 
            setLoading(false);

        });
    },[itemInput.category_id]); */


    const DeleteCat=(id)=>{
        subcategorylist.map((item)=>{
            id=item.id;
        })

            axios.post(`api/delete-subcategory/${id}`).then(res=>{
                
                if(res.data.status===200){

                    axios.get(`api/viewsubcategories/`).then(res=>{ 
                        if(res.data.status ===200){
                            setsubCategorylist(res.data.subcategories);
                        }   
                        setLoading(false);
                    });


                    swal("Success", res.data.message, "success");

                }
            });
    }



    let sl=0;
        let Viewcategory_HTMLTABLE ; 
        Viewcategory_HTMLTABLE =[ 
        subcategorylist.map((item)=>
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
                        <td>{sl=sl+1}</td>
                        <td> {item.name}</td>  
                        <td>{item.catname}</td> 
                        <td>
                            <Link to={`edit-subcategory/${item.id}`} className="btn btn-success btn-sm">Edit</Link> 
                            <button type = "button" onClick={()=>DeleteCat()} className="btn btn-danger btn-sm ml-2"> Delete </button>
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
                <li className="breadcrumb-item active" aria-current="page">Sub-Categories</li>
                </ol>
            </nav>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card shadow mb-4">                                                     
                            <div className="card-body"> 
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                    <Link to ="/admin/subcategory" className="nav-link"  data-toggle="tab"   role="tab" aria-controls="home">Add</Link>
                                    </li>
                                    <li className="nav-item">
                                    <a  href="#" data-toggle="tab" className="nav-link active" role="tab" aria-controls="profile">View</a>
                                
                                    </li>
                                
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="home" role="tabpanel">
                                        <div className="row">
                                            <div className="col-md-12 mt-2">  
                                                <table className="table">
                                                    <thead className="table-dark">
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Sub-Category</th>
                                                            <th>Category</th> 
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
export default Viewsub;