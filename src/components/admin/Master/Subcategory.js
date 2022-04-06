import React, {Component} from 'react';


import axios from 'axios';

class Subcategory extends Component
{
    state={
        catid: '',
        name: '',
        remarks: '',
        
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveSubcategory = async(e)=>{
        e.preventDefault();
        const res= await axios.post('http://localhost:8000/api/savesub', this.state);

        if(res.data.status===200){
            console.log(res.data.message);
            this.setState({
                catid: '',
                name: '',
                remarks: '',
                

            });
        }
    }
    render(){
        return(
        
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Add Subcategory
                                  
                                </h4>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.saveSubcategory}>
                                <div className="form-group mb-3">
                                    <label>ID</label>
                                    <input type ="text" name="name" onChange={this.handleInput} value={this.state.catid} className="form-control"/>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input type ="text" name="course" onChange={this.handleInput} value={this.state.name} className="form-control"/>
                                </div>

                                <div className="form-group mb-3">
                                    <label>remarks</label>
                                    <input type ="text" name="email" onChange={this.handleInput} value={this.state.remarks} className="form-control"/>
                                </div>

                              
                                <div className="form-group mb-3">
                                   <button type="submit" className='btn btn-primary'> Save</button>
                                </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        );
    }
}

export default Subcategory;