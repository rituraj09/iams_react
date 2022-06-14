import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import swal from "sweetalert";




function Item()
{
    const [categorylist, setCategorylist] = useState([]);
    const [subcategorylist, setSubategorylist] = useState([]);
    const [assetlist, setAssetlist] = useState([]);


    const [itemInput, setItem ] = useState({

        subcategory_id:'',
        asset_id:'',
        itemscode:'',
        name:'',
        approverate:'',
        remarks:'',
        error_list:[],
    });
    

  

    const handleInput = (event)=>{
        event.persist();
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)){
            setItem({...itemInput.approverate,[event.target.name]:event.target.value});
      }

      const itemname = /^[A-z\b]+$/;
        if (event.target.value === '' || itemname.test(event.target.value)){
            setItem({...itemInput.name,[event.target.name]:event.target.value});
      }
      
        
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


     /////////////////////////////////////Get asset////////////////////////////////// 
     
     useEffect(()=>{
         axios.get(`api/assettypes-list/`).then(res=>{
             if(res.data.status ===200){
                 setAssetlist(res.data.assettypes);
             }
 
         });
     },[]);

    
    const submitItem=(event)=>{
    event.preventDefault();

    const data ={
    subcatid:itemInput.subcategory_id,
    assettype:itemInput.asset_id,
    itemcode:itemInput.itemscode,
    name:itemInput.name,
    remarks:itemInput.remarks,
    approverate:itemInput.approverate,


}
           console.log(itemInput.asset_id);
        
        
        axios.post(`api/saveitem`,data).then(res=>{

            if(res.data.status === 200)
            {
                swal('Success',res.data.message,"Success");

                setItem({
                    subcategory_id:'',
                    assettype:'',
                    itemscode:'',
                    name:'',
                    approverate:'',
                    remarks:'',
                        })
                
            }
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
                    <select name="asset_id" onChange={handleInput} value={itemInput.asset_id}   className="form-control">
                      <option>select Asset</option>
                          {
                              assetlist.map((items)=>{
                                  return(
                                  <option value={items.id} key={items.id}>{items.name}</option>
                                  )
                              })
                          }
                            
                      </select>

                    <label> Item Code *</label>
               <input type ="text" name="itemscode" className="form-control mb-2"   value={itemInput.itemscode}  onChange={handleInput} required /> 


                    <label> Item Name *</label>
                <input type ="text" name="name" className="form-control mb-2"       value={itemInput.name}     onChange={handleInput} required />

                
                <label> Approve Rate *</label>
               <input type ="text" name="approverate" className="form-control mb-2"  value={itemInput.approverate} onChange={handleInput}  required/> 

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