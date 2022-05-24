import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Viewsub () {

    const [loading, setLoading] = useState(true);
    const [categorylist, setCategorylist] = useState([]);
    const [subcategorylist, setsubCategorylist] = useState([]);
    const [itemInput, setItem ] = useState({

    });

    const handleInput =(event)=>{
        event.persist();
        setItem({...itemInput,[event.target.name]:event.target.value});
    }
    
    useEffect(()=>{
        axios.get(`api/categories/`).then(res=>{
            if(res.data.status ===200){
                setCategorylist(res.data.categories);
            }

        });
    },[]);

    
    useEffect(()=>{
        let cat=itemInput.category_id;
        axios.get(`api/subcatlist/${itemInput.category_id}`).then(res=>{

            if(res.status === 200)
            {
                setsubCategorylist(res.data.subcategories)
            }
            
            setLoading(false);

        });
    },[itemInput.category_id]);

   
    let Viewcategory_HTMLTABLE ;
    if(loading)
    {
        return <h4> Loading Category...... </h4>
    }

    else{
        Viewcategory_HTMLTABLE =[

            subcategorylist.map((item)=>
        {
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td> {item.name}</td>  
                    <td>{item.remarks}</td>
                    <td>
                        <Link to={`edit-subcategory/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>

                    <td>
                        <Link to={`delete-category/${item.id}`} className="btn btn-danger btn-sm">Delete</Link>
                    </td>
                </tr>
            )
        })]
    }

    
     



    return (
       <div className="container px-4">
       <div className="card mt-4">
       <div className="=card-header">
                <h4> Subcategory List
                <Link to ="/admin/subcategory" className="btn btn-primary btn-sm float-end">Add Subcategory</Link>
                <nav class="navbar navbar-light bg-light">
        <input class="form-control form-inline mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        </nav>
                </h4>
            </div>
            <div className="form-group mb-3">
                      <label>Select Category</label>
   
                      <select name="category_id" onChange={handleInput} value={itemInput.category_id}   className="form-control">
                      <option>select Category</option>
                          {
                              categorylist.map((item)=>{
                                  return(
                                  <option value={item.id} key={item.id}>{item.name}</option>
                                  )
                              })
                          }
                            
                      </select>     
                  </div>
            <div className="card-body">
            <table class="table">
  <thead className="table-dark">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Remarks</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {Viewcategory_HTMLTABLE}
  </tbody>
</table>
</div>
</div>
</div>
    );
}
export default Viewsub;