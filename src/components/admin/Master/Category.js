import { useState } from "react";
import React from "react";
import axios from "axios";
import swal from "sweetalert";
//import http from '../../../http';




function Category()

{

    const[catInputs,setCat] = useState({
        catName:'',
        error_list:[],
    });
    
    const handleInput = (event)=>{
      event.persist();
      const re = /^[A-z\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)){
        setCat({...catInputs,[event.target.name]:event.target.value})
    }
      
    }


    const submitCat = (event) =>{

        
        const data ={
            name:catInputs.name,
        }


        axios.post(`api/savecat`, data).then(res =>{
            if(res.data.status === 200)
            {
                swal('Success',res.data.message,"Success");

                
              
            }

            else if(res.data.status === 400)
            {
                setCat({...catInputs, error_list:res.data.errors})
            }

           
        });
            
     
    }

    // var display_errors=[];
    // if(catInputs.error_list)
    // {
    //     display_errors=[
    //         catInputs.error_list.name,
    //     ]
    // }


    return (
        <>
        <div>
        <div className="container-fluid">
            <h2>Add Categories</h2>

            <form onSubmit={submitCat} >
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                    <input type ="text" name="name" value={catInputs.name} onChange={handleInput}  className="form-control mb-2"  required/>
                </div>      
            </div>
            </div>
            <button type="button" onClick={submitCat} className="btn btn-info mt-2"> Save</button> 
            </form>
        </div>
        </div>
        </>
    );
}
export default Category