/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


function Vieworder(props){

    const history =useHistory();
    const [loading, setLoading] = useState(true);
    const [catInput, setCategory] =useState({
        names:'',
    });
    const [itemlist, setitemlist] =useState([]);
    // const [error, setError]=useState([]);


    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        const id= props.match.params.id; 
        axios.get(`/api/getOrderItems/${id}`).then((res)=>{
            setCategory({
                name:res.data.ordermaster,
                email:res.data.ordermaster,
            });
        });
    }



    useEffect(()=>{

    const id= props.match.params.id; 
    
        axios.get(`/api/getOrderItems/${id}`).then(res=>{

            if(res.data.status===200){
                setitemlist(
                    res.data.ordermaster,
                );
            }

            else if(res.data.status===404)
            {
                swal("Error",res.data.message,"error");     
            }
            setLoading(false);
        });

},[props.match.params.id, history]);


console.log("hello"+setCategory.names);
    // const handleInput =(event) =>{
    //     event.persist();
    //     setCategory({...catInput, [event.target.name]: event.target.value});
    // }
    
    //     const updateCategory = (event)=>{
    //     event.preventDefault();

    //     const orderno=props.match.params.id;
    //     const data =catInput;

    //     axios.put(`api/getOrderItems/${orderno}`,data).then(res=>{

    //         if(res.data.status===200){
    //             swal("Success",res.data.massage,"success");

    //         }

    //     });
    // }


    if(loading)
    {
        return <h4> Loading...... </h4>
    }

    let Viewcategory_HTMLTABLE; 

        Viewcategory_HTMLTABLE =[
          
        itemlist.map((items,index)=>
        {
            let qty = items.quantity;
            return(

             
                <tr key={items.id}>
                     <td>{++index}</td>  
                    <td> {items.name}</td>  
                    <td>{items.description}</td>
                    <td>{items.quantity}</td>
                    <td><input name="finalquanity" value={ qty ??""}></input></td>
                    

                    {
                    /* <td>
                        <Link to={`edit-category/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>*/}

                    <td>
                        <Link to={`delete-category/${items.id}`} className="btn btn-danger btn-sm">Change Quantity</Link>
                    </td> 
                </tr>
)
        })]


    return(
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
        <h2>View Order</h2>
        <Link to ="/admin/nazarat" className=" btn btn-primary btn-sm float-end">Back</Link>
        </div>
               
            
        
        <form  id="CAT_Form">
            
       
        </form>

        <div className="card-body">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                        <th>SL No</th>  
                            <th>Name</th>  
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Final Quantity</th>
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

    )

}

export default Vieworder;