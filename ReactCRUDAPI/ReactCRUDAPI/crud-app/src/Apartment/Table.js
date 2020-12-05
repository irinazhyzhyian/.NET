import React, { Component } from 'react';  
import axios from 'axios';  
import { Link, Route, Router } from 'react-router-dom'; 
import EditApartment from './EditApartment';  

 

const apiUrl = 'https://localhost:44364/api/';  

class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteApartment = () => {  
     axios.delete(apiUrl + 'apartment/'+this.props.obj.id)  
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
            {this.props.obj.area}  
          </td>
          <td>  
            {this.props.obj.address}  
          </td>
          <td>  
            {this.props.obj.tenantsCount}  
          </td>    
          <td>  
            <Link to={"/apartment-edit/"+this.props.obj.id} className="btn btn-success">Edit</Link>
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteApartment} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  