/* eslint-disable no-restricted-globals */
import React,{useState,useEffect,useRef} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { useReactToPrint  } from "react-to-print";
import { Button } from "react-bootstrap";
import "../../../assets/admin/css/print_bill.css"

const OrderpdfAdmin=(props)=>{

    const history =useHistory();
    const [loading, setLoading] = useState(true);
    const [catInput, setCategory] =useState([]);
    const [orderDetails, setOrderDetails] =useState([]);
    

    const componentRef = useRef();
    const handlePrint = useReactToPrint ({
        content: () => componentRef.current,
      });

    useEffect(()=>{

    const ids= props.match.params.id; 
 
        axios.get(`/api/getOrderItems/${ids}`).then(res=>{

            if(res.data.status===200){
                setCategory(res.data.orderitems);
            }

            else if(res.data.status===404)
            {
                swal("Error",res.data.message,"error");     
            }
            setLoading(false);
        });

},[props.match.params.id, history]);


///////////////////////////////////////////////////////////////////////////


    useEffect(()=>{

        const ids= props.match.params.id; 
       
     
            axios.get(`api/orderById/${ids}`).then(res=>{
    
                if(res.data.status===200){
                    setOrderDetails(res.data.ordermaster);
                }
    
                else if(res.data.status===404)
                {
                    swal("Error",res.data.message,"error");     
                }
                setLoading(false);
            });
    
    },[props.match.params.id, history]);

    
    
    
///////////////////////////////////////////////////////////////////////////
    
    


    return(

        <> 
        
        
        <Link to ="/admin/approvedorder" className=" btn btn-primary btn-sm float-end">Back</Link>

        


        <button onClick={handlePrint} className="print__button">  Print </button> 
        
        <div className="container px-4" ref={componentRef}>


       



            <div  className="card mt-4">
                <div className="mains">
            <center>
        <div className="bodys">
          GOVERNMENT OF ASSAM OFFICE OF THE DEPUTY COMMISSIONER :::::::::::::::::::::::::::::::: GOLAGHAT
          (NAZARAT BRANCH)
        </div>
      </center>
      <div class="subheading">
        <p>No. GNZ.09/2022/</p>
        <p>Dated Golaghat the 27 April, 2022</p>
      </div>

      <br />
      <div className="text">
        To, <br />
        M/S- S. K. & Co, Golaghat
        <br />
        <p>
            &emsp; &emsp; You are hereby requested to supply the under mentioned articles as per
          approved rate / companies fixed price and submit bill in duplicate at
          D.C.'s Nazarat Branch, Golaghat for payment along with this indent.
        </p>
      </div>
      <div class="subheading">
        <p>List of items:</p>
     
      </div>



                <div className="card-header">
        
        
      <div>
        <div  className="card-body">

           
            <table className="table">

            <thead className="table-green">
                        <tr>
            
                            <th>Order Id</th> 
                            <th>Date</th> 
                            <th>Branch Name</th>  
                            <th>Remarks</th> 
                            
                        </tr>
                        </thead>

                        <tbody>
                            {orderDetails.map((item)=>{
                                return(
                                    <tr>
                                        
                                    <td>{item.orderno}</td>
                                    <td>{item.orderdate}</td>
                                    <td>{item.branchname}</td>
                                    <td>{item.remarks}</td>
                                    </tr>
                                )
                            })}
                           
                           
                        </tbody>

                </table>

    
        </div>
               
            
       

        <div  className="card-body">
                    <table className="table">
                        <thead className="table">
                        <tr>
                        <th>SL No</th>  
                            <th>Category</th> 
                            <th>Sub-Category</th> 
                            <th>Item</th>  
                            <th>Description</th> 
                            <th>Quantity</th>
                            
                        </tr>
                        </thead>
                        <tbody>

                             {catInput.map((items,index)=> {
                                 return(

                      <tr key={items.id}>
                     <td  >{++index}</td>  
                    <td  > {items.catname}</td>  
                    <td  > {items.subcatname}</td>  
                    <td  > {items.itemname}</td>  
                    <td >{items.description}</td> 
                    <td width="">{items.quantity}</td> 
                 
                    </tr>
)
        })}

                            
                        </tbody>
                    </table> 
               </div>
               </div>
               <br/>
      <div className="signature">
        Addl./Deputy Commissioner <br />
        I/C Nazarat, Golaghat
      </div>
               </div>
              
    </div>
    
</div>
</div>

  </>

    )


}

export default OrderpdfAdmin;