import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import swal from "sweetalert";

// api/savesub
function Subcategory()
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
        // const re = /^[A-z\b]+$/;
        // if (event.target.value === '' || re.test(event.target.value)){
            setSubcategory({...subcategoryInput,[event.target.name]:event.target.value});
        // }
        
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
            if(res.data.status === 200)
            {
                swal('Success',res.data.message,"Success");
              setSubcategory({
                category_id:'',
                name:'',
                remarks:'',

              })
            }
        })
    }

    return (
        <>
        <div>
            <h2>Add Subategories</h2>

            <form onSubmit={submitSubcategory} encType="multipart/form-data">

            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
        

                  <div className="form-group mb-3">
                      <label>Select Category</label>
                      <select name="category_id" onChange={handleInput} value={subcategoryInput.category_id}   className="form-control">
                      <option>select Category</option>
                          {
                              categorylist.map((item)=>{
                                  return(
                                  <option value={item.id} key={item.id} >{item.name}</option>
                                  )
                              })
                          }
                            
                      </select>
                  </div>

                    <label> Name</label>
                    <input type ="text" name="name"  value={subcategoryInput.name} onChange={handleInput} className="form-control mb-2" required/>
                    <label> remarks</label>
                    <input type ="text" name="remarks" value={subcategoryInput.remarks} onChange={handleInput} className="form-control mb-2" required/> 

                    <button type="submit" className="btn btn-info mt-2"> Save</button>
                </div>
            </div>
            </div>
            </form>
        </div>
        </>
    );
}
export default Subcategory