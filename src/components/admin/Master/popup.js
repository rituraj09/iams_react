import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg(){
return(
<div>
	<h4>Popup - GeeksforGeeks</h4>
	<Popup trigger={<button> Click to open popup </button>} position="right center">
  <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
        <h2>Edit Category</h2>
        <Link to ="/admin/view" className=" btn btn-primary btn-sm float-end">Back</Link>
        </div>
               
            
        
        <form id="CAT_Form">
        <div className="row">
            <div className="col-sm-6 justify-content-center">
                <div className="card p-4">
                <input type ="text" name="name" className="form-control mb-2"  
                
                />
                <button type="submit"  className="btn btn-info mt-2"> Save</button>
                
            </div>
            
        </div>
        </div>
       
        </form>
    </div>
  </div>
	<button>Click here</button>
	</Popup>
</div>
)
};
