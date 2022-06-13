import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


function EditSubCategory()
{
    const [categorylist, setCategorylist] = useState([]);
    const [subcategoryInput, setSubcategory ] = useState({

        category_id:'',
        name:'',
        remarks:'',
        error_list:[],
    });

    const handleInput =(event)=>{
        event.persist();
        setSubcategory({...subcategoryInput,[event.target.name]:event.target.value});
    }

    useEffect(()=>{
        axios.get(`api/categories`).then(res=>{
            if(res.data.status ===200){
                setCategorylist(res.data.categories);
            }

        });
    },[]);

    

    const submitSubcategory=(event)=>{
        event.preventDefault();

   
const data ={
    catid:subcategoryInput.category_id,
    name:subcategoryInput.name,
    remarks:subcategoryInput.remarks,
}
           
        
        
        axios.post(`api/savesub`,data).then(res=>{

        })
    }

    return (
        <>
        <div>
            <h2>Edit Subcategories</h2>

            <form onSubmit={submitSubcategory} encType="multipart/form-data">

            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
        

           

                    <label> Name</label>
                    <input type ="text" name="name"  value={subcategoryInput.name} onChange={handleInput} className="form-control mb-2" required/>
                    <label> remarks</label>
                    <input type ="text" name="remarks" value={subcategoryInput.remarks} onChange={handleInput} className="form-control mb-2"/> 

                    <button type="submit" className="btn btn-info mt-2"> Save</button>
                </div>
            </div>
            </div>
            </form>
        </div>
        </>
    );
}

export default EditSubCategory;