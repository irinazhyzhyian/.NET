import React, { Component } from 'react';  
import axios from 'axios';  
import { Link, Route, Router } from 'react-router-dom'; 
 

const apiUrl = 'https://localhost:44364/api/';  

class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    Delete = () => {  
     axios.delete(apiUrl + 'tenants/'+this.props.obj.id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.id}  
          </td>  
          <td>  
            {this.props.obj.firstName}  
          </td>
          <td>  
            {this.props.obj.lastName}  
          </td>
          <td>  
            {this.props.obj.fatherName}  
          </td> 
          <td>
            {this.props.obj.accountNumber}    
          </td>  
          <td>
            {this.props.obj.apartmentId}    
          </td>   
          <td>  
          <Link to={"/tenants-edit/"+this.props.obj.id} className="btn btn-success">Edit</Link>
          </td>  
          <td>  
            <button type="button" onClick={this.Delete} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  