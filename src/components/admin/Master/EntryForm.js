import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";


//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
 
function EntryForm(){

    const [categorylist, setCategorylist] = useState([]);
    const [subcategorylist, setSubategorylist] = useState([]);
    const [itemlist, setItemlist] = useState([]);
    const [templist, setTemplist] = useState([]);
    const [ipadr,setIP] = useState('');
    ///////////////////////////////////////////////////////////////
    const token = localStorage.getItem('auth_token');

    const[EntryfromInput, setEntryform]=useState({
        date:'',
        ip:ipadr,
        mac:token,
        category_id:'',
        subcategory_id:'',
        item_id:'',
        description:'',
        Quantity:'',

     
    
      
    });


    const handleInput =(event)=>{
        event.persist();
        setEntryform({...EntryfromInput,[event.target.name]:event.target.value});
    }


    ///////////////////////////////////get ip address//////////////////////////////////
  
    useEffect(()=>{
        axios.get(`api/clientip/`).then(res=>{
            if(res.data.status ===200){
                setIP(res.data.ip);
            }

        });
    },[]);
 



   

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
      let subcat=EntryfromInput.subcategory_id;

      
  
      useEffect(()=>{
          axios.get(`api/itemslist/${subcat}`).then(res=>{
              if(res.data.status ===200){
                  setItemlist(res.data.items);
              }
  
          });
      },[subcat]);

       ////////////////////////////////////Get temp data////////////////////////////////// 


  
     

    const submit=(event)=>{
        
        event.preventDefault();
        const data = {
            token : EntryfromInput.mac ,
            ipaddress: ipadr,
            orderdate: EntryfromInput.date,
            itemid: EntryfromInput.item_id,
            description: EntryfromInput.description,
            quantity: EntryfromInput.Quantity,
            
        }
        
        axios.post(`api/order-save-temp`, data).then(res=>{

            if(res.data.status ===200){
                
                axios.get(`api/order-temp-list/${ipadr}/${token}`).then(res=>{
                    setTemplist(res.data.temporders);
                    ///Rest From////
                    setEntryform({
                    date:'',
                    ip:ipadr,
                    mac:token,
                    category_id:'',
                    subcategory_id:'',
                    item_id:'',
                    description:'',
                    Quantity:'',})
                    localStorage.setItem('list', "abcd");
    
            });
            }        
        })
    }


    useEffect(()=>{
        axios.get(`api/order-temp-list/${ipadr}/${token}`).then(res=>{

            if(res.status === 200)
            {
                setTemplist(res.data.temporders)
            }
            
        

        });
    },[ipadr,token]);

    console.log("The ip: "  + ipadr);


    let Viewcategory_HTMLTABLE ;


     
 
        Viewcategory_HTMLTABLE =[
          
            templist.map((items)=>
        {
            return(
                <tr key={items.id}>
                    <td>{items.id}</td>
                    <td> {items.orderdate}</td>  
                    <td>{items.itemid}</td>
                    <td>{items.description}</td>
                    <td>{items.quantity}</td>
                    {
                    /* <td>
                        <Link to={`edit-category/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>*/}

                    <td>
                        <Link to={`delete-category/${items.id}`} className="btn btn-danger btn-sm">Delete</Link>
                    </td> 
                </tr>
            )
        })]
    

   
    

      
 
    return(
        <>
        
          <h2>Entry Form</h2> 

          <h4>{ipadr}</h4>

        <form onSubmit={submit}>
        <div className="row">
        <div className="col-sm-6 justify-content-center">
        <div className="card p-4">
        <div className="form-group mb-3">

        <label> Name</label>
                    <input type ="text" name="mac"  value={EntryfromInput.mac} onChange={handleInput} className="form-control mb-2" required/>

        <label>Select Date:</label>
        <input type="date" name="date" onChange={handleInput} value={EntryfromInput.date}></input>

        <div className="form-group mb-3">
        <label>Select Category</label>
   
                      <select name="category_id" onChange={handleInput} value={EntryfromInput.category_id}   className="form-control">
                      <option>select Category</option>
                          {
                              categorylist.map((item)=>{
                                  return(
                                  <option value={item.id} key={item.id}>  {item.name}</option>
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
                  <select name="item_id" onChange={handleInput} value={EntryfromInput.item_id}   className="form-control">
                      <option>select Subcategory</option>
                          {
                              itemlist.map((items)=>{
                                  return(
                                  <option value={items.id} key={items.id}>{items.name}</option>
                                  )
                              })
                          }
                            
                      </select>

                      <div className="form-group">
                <label>Description</label>
                 <textarea name="description" className="form-control" rows="3" onChange={handleInput} value={EntryfromInput.description} >

                 </textarea>
                 </div>

                 <div className="form-group col-md-2">
                <label>Quantity</label>
                <input type="number" name="Quantity" className="form-control" onChange={handleInput} value={EntryfromInput.Quantity} ></input>
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
  <div className="container px-4">
           
           <div className="card mt-4">
               <div className="=card-header">
                   <h4> Category List
                  
                   <nav className="navbar navbar-light bg-light">
   
       <input className="form-control form-inline mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
       
   
   </nav>
                   </h4>
               </div>
               <div className="card-body">
               <table className="table">
     <thead className="table-dark">
       <tr>
           <th>ID</th>
           <th>Date</th>
           <th>Item id</th>
           <th>Description</th>
           <th>Quantity</th>
           <th>Delete</th>
       </tr>
     </thead>
     <tbody>
       {Viewcategory_HTMLTABLE}
     </tbody>
   </table>
   
               </div>
   
           </div>
          
          </div>
          </>

    )


};

export default EntryForm;