import { useState, useEffect } from "react";
import React from "react";
import http from '../../../http';
import axios from "axios";




function Item()
{

    const[inputs,setInputs] = useState({});
    
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values,[name]:value}))
    }
    
    const [subcategorylist,setSubcategorylist] = useState([]);

    useEffect(()=>{
        axios.get('/api/savecat').then(res=>{
            if(res.data.status ===200)
            {
                subcategorylist(res.data.categories);
            }
        });
    },[]);



    const submitForm = () =>{
        http.post('/saveitem', inputs)
            
        
    }


    return (
        <>
        <div>
            <h2>Add Items</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                    
                    <label> Subcategory ID *</label>
                    <select name ="subcategory_id" className="formcontrol mb-2">
                    <option>select Category</option>
                        {
                            subcategorylist.map( (item) =>{
                                return (

                                    <option value={item.id} key={item.id}> {item.name}</option>

                                )
                            }

                            
                    )
                        }
                   
                    </select>




                    <label> Asset Type *</label>
               <input type ="text" name="assettype" className="form-control mb-2" 
                    value={inputs.assettype || ''}
                    onChange={handleChange}
                    
                    /> 

                    <label> Item Code *</label>
               <input type ="text" name="Itemcode" className="form-control mb-2" 
                    value={inputs.itemcode || ''}
                    onChange={handleChange}
                    
                    /> 


                    <label> Item Name *</label>
                    <input type ="text" name="name" className="form-control mb-2" 
                    value={inputs.name || ''}
                    onChange={handleChange} 
                    />
                    <label> remarks</label>
               <input type ="text" name="remarks" className="form-control mb-2" 
                    value={inputs.remarks || ''}
                    onChange={handleChange}
                    
                    /> 

            <label> Approve Rate *</label>
               <input type ="text" name="approverate" className="form-control mb-2" 
                    value={inputs.rate || ''}
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
export default Item