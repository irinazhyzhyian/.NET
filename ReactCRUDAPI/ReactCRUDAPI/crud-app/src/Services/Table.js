import React, { Component } from 'react';  
import axios from 'axios';  
import { Link, Route, Router } from 'react-router-dom'; 
 

const apiUrl = 'https://localhost:44364/api/';  

class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    Delete = () => {  
     axios.delete(apiUrl + 'services/'+this.props.obj.id)  
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
            {this.props.obj.methodId}  
          </td>
          <td>  
            {this.props.obj.price}  
          </td>
          <td>  
            {this.props.obj.service}  
          </td>  
          <td>  
          <Link to={"/services-edit/"+this.props.obj.id} className="btn btn-success">Edit</Link>
          </td>  
          <td>  
            <button type="button" onClick={this.Delete} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  