/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';



function EditCategory(props){

    const history =useHistory();
    const [loading, setLoading] = useState(true);
    const [catInput, setCategory] =useState([]);
    // const [error, setError]=useState([]);

    useEffect(()=>{

    const category_id= props.match.params.id; 
    
        axios.get(`/api/edit-category/${category_id}`).then(res=>{

            if(res.data.status===200){
                setCategory(res.data.category);
            }

            else if(res.data.status===404)
            {
                swal("Error",res.data.massage,"error");
                
                

            }
            setLoading(false);



        });
},[props.match.params.id, history]);

    const handleInput =(event) =>{
        event.persist();
        setCategory({...catInput, [event.target.name]: event.target.value});
    }
    
    const updateCategory = (event)=>{
        event.preventDefault();

        const category_id=props.match.params.id;
        const data =catInput;
        axios.put(`api/update-category/${category_id}`,data).then(res=>{

            if(res.data.status===200){
                swal("Success",res.data.massage,"success");

            }

        });
    }

    console.log("Hellow"+props.match.params.id);

    if(loading)
    {
        return <h4> Loading Category...... </h4>
    }

    return(
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
        <h2>Edit Category</h2>
        <Link to ="/admin/view" className=" btn btn-primary btn-sm float-end">Back</Link>
        </div>
               
            
        
        <form onSubmit={updateCategory} id="CAT_Form">
        <div className="row">
            <div className="col-sm-6 justify-content-center">
                <div className="card p-4">
                <input type ="text" name="name" className="form-control mb-2"  value={catInput.name} onChange={handleInput}
                
                />
                <button type="submit"  className="btn btn-info mt-2"> Save</button>
                
            </div>
            
        </div>
        </div>
       
        </form>
    </div>
  </div>

    )

}

export default EditCategory;