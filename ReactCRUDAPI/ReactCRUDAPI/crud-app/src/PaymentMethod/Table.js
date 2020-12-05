import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
 

const apiUrl = 'https://localhost:44364/api/';  

class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeletePaymentMethod = () => {  
     axios.delete(apiUrl + 'paymentmethod/'+this.props.obj.id)  
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
            {this.props.obj.method}  
          </td>    
          <td>  
          <Link to={"/paymentmethod-edit/"+this.props.obj.id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeletePaymentMethod} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  