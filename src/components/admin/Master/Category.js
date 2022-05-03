import { useState } from "react";
import React from "react";
import http from '../../../http';




function Category()
{

    const[inputs,setInputs] = useState({});
    
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values,[name]:value}))
    }


    const submitForm = () =>{
        http.post('http://localhost:8000/api/savecat', inputs)
            
     
    }


    return (
        <>
        <div>
            <h2>Add Categories</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                    <input type ="text" name="name" className="form-control mb-2" 
                    value={inputs.name || ''}
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
export default Category