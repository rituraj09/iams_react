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
      setCat({...catInputs,[event.target.name]:event.target.value})
    }


    const submitCat = (event) =>{

        
        const data ={
            name:catInputs.name,
        }
        axios.post(`api/savecat`, data).then(res =>{
            if(res.data.status === 200)
            {
                swal('Success',res.data.message,"Success");
                document.getElementById('CAT_Form').reset();
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
            <h2>Add Categories</h2>
            
          
                   
                
            
            <form onSubmit={{submitCat}} id="CAT_Form">
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                    <input type ="text" name="name" className="form-control mb-2"  value={catInputs.name} onChange={handleInput}
                    
                    />
                    <button type="button" onClick={submitCat} className="btn btn-info mt-2"> Save</button>
                    
                </div>
                
            </div>
            </div>
            </form>
        </div>
        </>
    );
}
export default Category