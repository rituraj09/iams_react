import { useState } from "react";
import React from "react";
import http from '../../../http';




function Subcategory()
{

    const[inputs,setInputs] = useState({});
    
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values,[name]:value}))
    }


    const submitForm = () =>{
        http.post('http://localhost:8000/api/savesub', inputs)
            
     
    }


    return (
        <>
        <div>
            <h2>Add Subategories</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                    <label> Name</label>
                    <input type ="text" name="name" className="form-control mb-2" 
                    value={inputs.name || ''}
                    onChange={handleChange} 
                    />
                    <label> remarks</label>
               <input type ="text" name="remarks" className="form-control mb-2" 
                    value={inputs.remarks || ''}
                    onChange={handleChange}
                    
                    /> 

                    <button type="button" onClick={submitForm} className="btn btn-info mt-2"> Save</button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default Subcategory