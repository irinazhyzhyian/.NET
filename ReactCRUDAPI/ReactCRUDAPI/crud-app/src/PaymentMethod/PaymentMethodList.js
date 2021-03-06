import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
import AddPaymentMethod from './AddPaymentMethod'; 
import EditPaymentMethod from './EditPaymentMethod'; 
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 

const apiUrl = 'https://localhost:44364/api/';  

  
export default class PaymentMethodList extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get(apiUrl + 'paymentmethod')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Payment Methods List</h4> 
            <br></br>
            <Link to={'/AddPaymentMethod'} className="nav-link">Add</Link>
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Id</th>  
                <th>Method</th> 
                <th>Edit</th>  
                <th>Delete</th>
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  