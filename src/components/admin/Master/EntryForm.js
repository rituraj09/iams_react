import React,{useState,useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function EntryForm(){

    const [categorylist, setCategorylist] = useState([]);
    const [subcategorylist, setSubategorylist] = useState([]);

    const[EntryfromInput, setEntryform]=useState({

        date:'',
        category_id:'',
        subcategory_id:'',
        item_id:'',
        description:'',



    })
        

    ////////////////////////////////Get category data//////////////////////////////////
        useEffect(()=>{
        axios.get(`api/categories/`).then(res=>{
            if(res.data.status ===200){
                setCategorylist(res.data.categories);
            }

        });
    },[]);
        
   
    ////////////////////////////////Get subcategory data////////////////////////////////// 
    let cat=EntryfromInput.category_id;
  
    useEffect(()=>{
        axios.get(`api/subcatlist/${cat}`).then(res=>{
            if(res.data.status ===200){
                setSubategorylist(res.data.subcategories);
            }

        });
    },[cat]);


    //   ////////////////////////////////Get item data////////////////////////////////// 
    //   let cat=EntryfromInput.category_id;
  
    //   useEffect(()=>{
    //       axios.get(`api/subcatlist/${cat}`).then(res=>{
    //           if(res.data.status ===200){
    //               setSubategorylist(res.data.subcategories);
    //           }
  
    //       });
    //   },[cat]);
  

  

    const handleInput =(event)=>{
        event.persist();
        setEntryform({...EntryfromInput,[event.target.name]:event.target.value});
    }




    return(
        <>
          <h2>Entry Form</h2> 

        <form  encType="multipart/form-data">
        <div className="row">
        <div className="col-sm-6 justify-content-center">
        <div className="card p-4">
        <div className="form-group mb-3">

        <label>Select Date:</label>
        <input type="date" name="birthday" onChange={handleInput} value={EntryfromInput.date}></input>

        <div className="form-group mb-3">
        <label>Select Category</label>
   
                      <select name="category_id" onChange={handleInput} value={EntryfromInput.category_id}   className="form-control">
                      <option>select Category</option>
                          {
                              categorylist.map((item)=>{
                                  return(
                                  <option value={item.id} key={item.id}>{item.name}</option>
                                  )
                              })
                          }   
                      </select>  
                    
                      <label>Select Subcategory</label>
                  <select name="subcategory_id" onChange={handleInput} value={EntryfromInput.subcategory_id}   className="form-control">
                      <option>select Subcategory</option>
                          {
                              subcategorylist.map((items)=>{
                                  return(
                                  <option value={items.id} key={items.id}>{items.name}</option>
                                  )
                              })
                          }
                            
                      </select>

                      
                      <label>Select Item</label>
                  <select name="subcategory_id" onChange={handleInput} value={EntryfromInput.subcategory_id}   className="form-control">
                      <option>select Subcategory</option>
                          {
                              subcategorylist.map((items)=>{
                                  return(
                                  <option value={items.id} key={items.id}>{items.name}</option>
                                  )
                              })
                          }
                            
                      </select>

                      <div className="form-group">
                <label>Description</label>
                 <textarea class="form-control" rows="3" onChange={handleInput} value={EntryfromInput.description} >

                 </textarea>
                 </div>

                 <div className="form-group col-md-2">
                <label>Quantity</label>
                <input type="number" className="form-control"></input>
                 </div>
                 <br></br><br></br>
                 <button type="submit" className="btn btn-success btn-sm"> Add</button>
                 <br></br><br></br>
                 <button type="clear" className="btn btn-danger btn-sm"> Clear</button>
                 


        </div>
        </div>
        </div>
        </div>
        </div>   
  </form>
          </>

    )


};

export default EntryForm;