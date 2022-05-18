import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";




function Item()
{
    const [categorylist, setCategorylist] = useState([]);
    const [subcategorylist, setSubategorylist] = useState([]);


    const [itemInput, setItem ] = useState({

        subcategory_id:'',
        assettype:'',
        itemscode:'',
        name:'',
        approverate:'',
        remarks:'',
        error_list:[],
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

    let cat=itemInput.category_id;
  
    useEffect(()=>{
        axios.get(`api/subcatlist/${cat}`).then(res=>{
            if(res.data.status ===200){
                setSubategorylist(res.data.subcategories);
            }

        });
    },[cat]);

    
    const submitItem=(event)=>{
        event.preventDefault();
const data ={
    subcatid:itemInput.subcategory_id,
    assettype:itemInput.assettype,
    itemcode:itemInput.itemscode,
    name:itemInput.name,
    remarks:itemInput.remarks,
    approverate:itemInput.approverate,


}
           
        
        
        axios.post(`api/saveitem`,data).then(res=>{

        })
    }

            
        
        
    


    return (
        <>
        <div>
            <h2>Add Items</h2>
            
            <form onSubmit={submitItem} encType="multipart/form-data">
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                
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
                  <label>Select Subcategory</label>
                  <select name="subcategory_id" onChange={handleInput} value={itemInput.subcategory_id}   className="form-control">
                      <option>select Subcategory</option>
                          {
                              subcategorylist.map((items)=>{
                                  return(
                                  <option value={items.id} key={items.id}>{items.name}</option>
                                  )
                              })
                          }
                            
                      </select>



                    <label> Asset Type *</label>
               <input type ="text" name="assettype" className="form-control mb-2"  value={itemInput.assettype} onChange={handleInput} required /> 

                    <label> Item Code *</label>
               <input type ="text" name="itemscode" className="form-control mb-2"   value={itemInput.itemscode}  onChange={handleInput} required /> 


                    <label> Item Name *</label>
                <input type ="text" name="name" className="form-control mb-2"       value={itemInput.name}     onChange={handleInput} required />

                
                <label> Approve Rate *</label>
               <input type ="text" name="approverate" className="form-control mb-2"  value={itemInput.rate} onChange={handleInput}  required/> 

                <label> remarks</label>
               <input type ="text" name="remarks" className="form-control mb-2"     value={itemInput.remarks}  onChange={handleInput} required/> 

                    <button type="submit" className="btn btn-info mt-2"> Save</button>
                </div>
            </div>
            </div>
            </form>
        </div>
        </>
    );
                        
                        }
export default Item;