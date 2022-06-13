/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { Modal, Button } from 'react-bootstrap';
import BootstrapTable from "react-bootstrap-table-next";



function Vieworder(props){

    const[items, setitems] = useState([]);
    const id= props.match.params.id; 
    const getItems = async() => {
        try{
            const data = await axios.get(`/api/getOrderItems/${id}`)
        }
        catch(e){
                console.log(e);
        }
    };

return(
    <>
    </>
)


}

export default Vieworder